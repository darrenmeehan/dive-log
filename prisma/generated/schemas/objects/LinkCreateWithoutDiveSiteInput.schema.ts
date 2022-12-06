import { z } from "zod";
import { LinkTypeSchema } from "../enums/LinkType.schema";
import { UserCreateNestedOneWithoutCreatedLinksInputObjectSchema } from "./UserCreateNestedOneWithoutCreatedLinksInput.schema";
import { DiveCreateNestedOneWithoutLinksInputObjectSchema } from "./DiveCreateNestedOneWithoutLinksInput.schema";
import { DiveBuddyCreateNestedOneWithoutLinksInputObjectSchema } from "./DiveBuddyCreateNestedOneWithoutLinksInput.schema";
import { DiveCenterCreateNestedOneWithoutLinksInputObjectSchema } from "./DiveCenterCreateNestedOneWithoutLinksInput.schema";
import { UserCreateNestedOneWithoutLinksInputObjectSchema } from "./UserCreateNestedOneWithoutLinksInput.schema";
import { EquipmentUnitCreateNestedOneWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateNestedOneWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateWithoutDiveSiteInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    link: z.string(),
    type: z.lazy(() => LinkTypeSchema),
    title: z.string().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    creatorUser: z.lazy(
      () => UserCreateNestedOneWithoutCreatedLinksInputObjectSchema
    ),
    dive: z
      .lazy(() => DiveCreateNestedOneWithoutLinksInputObjectSchema)
      .optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyCreateNestedOneWithoutLinksInputObjectSchema)
      .optional(),
    diveCenter: z
      .lazy(() => DiveCenterCreateNestedOneWithoutLinksInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutLinksInputObjectSchema)
      .optional(),
    EquipmentUnit: z
      .lazy(() => EquipmentUnitCreateNestedOneWithoutLinksInputObjectSchema)
      .optional(),
  })
  .strict();

export const LinkCreateWithoutDiveSiteInputObjectSchema = Schema;
