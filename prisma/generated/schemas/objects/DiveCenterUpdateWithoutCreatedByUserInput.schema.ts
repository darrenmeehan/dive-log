import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { DecimalFieldUpdateOperationsInputObjectSchema } from "./DecimalFieldUpdateOperationsInput.schema";
import { LinkUpdateManyWithoutDiveCenterNestedInputObjectSchema } from "./LinkUpdateManyWithoutDiveCenterNestedInput.schema";
import { DiveUpdateManyWithoutDiveCenterNestedInputObjectSchema } from "./DiveUpdateManyWithoutDiveCenterNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateWithoutCreatedByUserInput> = z
  .object({
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    latitude: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    longitude: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    links: z
      .lazy(() => LinkUpdateManyWithoutDiveCenterNestedInputObjectSchema)
      .optional(),
    dives: z
      .lazy(() => DiveUpdateManyWithoutDiveCenterNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveCenterUpdateWithoutCreatedByUserInputObjectSchema = Schema;
