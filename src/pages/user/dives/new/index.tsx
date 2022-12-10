import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { CreateDiveSchema } from "../../../../validators/Dive";
import {
  TbTemperature,
  TbArrowBarToDown,
  TbCalendarTime,
  TbDeviceFloppy,
  TbHash,
  TbLicense,
  TbHourglass,
  TbFold,
  TbMapPin,
  TbTemperatureMinus,
  TbTemperaturePlus,
  TbWind,
  TbBarbell,
  TbBattery,
  TbBattery1,
  TbBattery4,
  TbStar,
  TbTag
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import type { z } from "zod";
import ErrorBox from "../../../../components/ErrorBox";
import InfoBox from "../../../../components/InfoBox";
import { makeCustomInputSelect } from "../../../../components/InputSelect";
import { makeCustomInputSimple } from "../../../../components/InputSimple";
import { useEffect } from "react";

type Inputs = z.input<typeof CreateDiveSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { handleSubmit, formState, control, setValue } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSchema),
    defaultValues: {
      startDateTime: new Date(),
    }
  });
  const CustomInputSimple = makeCustomInputSimple({ control, errors: formState.errors, schema: CreateDiveSchema })
  const CustomInputSelect = makeCustomInputSelect({ control, errors: formState.errors, schema: CreateDiveSchema })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    data.duration *= 60 * 1000 // Convert from minutes to millisecpnds

    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }
  const { data: lastDive } = trpc.dive.getLastDive.useQuery();
  useEffect(() => {
    if (lastDive && !control.getFieldState('diveNumber').isDirty) setValue('diveNumber', lastDive['diveNumber'] + 1)
    if (lastDive && !control.getFieldState('waterAverageTemperature').isDirty) setValue('waterAverageTemperature', lastDive['waterAverageTemperature'] ?? undefined)
  })

  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {lastDive && <InfoBox
        message="Some fields have been pre-filled based on your last dive"
        className="mb-4"
      />}
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

        <CustomInputSimple
          label="Dive Number"
          internalLabel="diveNumber"
          Icon={TbHash}
          inputProps={{
            placeholder: lastDive ? String(lastDive.diveNumber + 1) : undefined
          }}
        />

        <CustomInputSimple
          label="Date"
          internalLabel="startDateTime"
          Icon={TbCalendarTime}
          autoFocus
        />

        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbTag}
        />

        <CustomInputSimple
          label="Duration"
          note="in minutes"
          internalLabel="duration"
          Icon={TbHourglass}
        />

        <CustomInputSelect
          label="Dive site"
          internalLabel="diveSiteId"
          Icon={TbMapPin}
          data={userCreatedDiveSites}
          displayValue={(diveSite) => String(diveSite?.name ?? '')}
          exposedProperty="id"
        />

        <CustomInputSimple
          label="Max. depth"
          note="in meters"
          internalLabel="maximumDepth"
          Icon={TbArrowBarToDown}
        />

        <CustomInputSimple
          label="Avg. depth"
          note="in meters"
          internalLabel="averageDepth"
          Icon={TbFold}
        />

        <CustomInputSimple
          label="Min. water temp."
          note="in celcius"
          internalLabel="waterMinimumTemperature"
          Icon={TbTemperatureMinus}
        />

        <CustomInputSimple
          label="Avg. water temp."
          note="in celcius"
          internalLabel="waterAverageTemperature"
          Icon={TbTemperature}
        />

        <CustomInputSimple
          label="Max. water temp."
          note="in celcius"
          internalLabel="waterMaximumTemperature"
          Icon={TbTemperaturePlus}
        />

        <CustomInputSimple
          label="Air temp."
          note="in celcius"
          internalLabel="airTemperature"
          Icon={TbWind}
        />

        <CustomInputSimple
          label="Weight"
          note="in kilograms"
          internalLabel="weight"
          // TODO: This icon is better, but not avilable in react icons. update the lib
          // Icon={TbWeight} 
          Icon={TbBarbell}
        />

        <CustomInputSimple
          label="Start cylinder presure"
          note="in bar"
          internalLabel="startCylinderPresure"
          Icon={TbBattery4}
        />

        <CustomInputSimple
          label="End cylinder presure"
          note="in bar"
          internalLabel="endCylinderPresure"
          Icon={TbBattery1}
        />

        <CustomInputSimple
          label="Cylinder volume"
          note="in liters"
          internalLabel="cylinderVolume"
          Icon={TbBattery}
        />

        <CustomInputSimple
          label="Rating"
          note="from 0 to 10"
          internalLabel="rating"
          Icon={TbStar}
        />

        <CustomInputSimple
          label="Experience notes"
          internalLabel="experienceNotes"
          Icon={TbLicense}
        />

        <CustomInputSimple
          label="Technical notes"
          internalLabel="technicalNotes"
          Icon={TbLicense}
        />

        {/* Missing fields */}
        {/* Enums */}
        {/* type
        specialtyDiveType
        waterBody
        waterType
        waterEntry
        waterCurrent
        waterSurface
        weather
        cylinderMaterial
        roleasDiveBuddy */}
        {/* Lining to other db entities */}
        {/* equipment
        diveCenter
        diveBuddies
        organisms
        links */}

      </div>

      <div className="flex justify-center">
        <IconButton
          text="Save"
          Icon={TbDeviceFloppy}
          onClick={handleSubmit(onSubmit)}
          disabled={createDiveMutation.isLoading}
          className="flex mt-8 px-8"
        />
      </div>

      {createDiveMutation.error && <ErrorBox message={createDiveMutation.error.message} className="mt-4" />}
    </form>
  );
};

CreateDivePage.title = 'New dive'

export default CreateDivePage;

