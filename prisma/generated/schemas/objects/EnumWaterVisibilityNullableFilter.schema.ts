import { z } from "zod";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { NestedEnumWaterVisibilityNullableFilterObjectSchema } from "./NestedEnumWaterVisibilityNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterVisibilityNullableFilter> = z
  .object({
    equals: z
      .lazy(() => WaterVisibilitySchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterVisibilitySchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterVisibilitySchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterVisibilitySchema),
        z.lazy(() => NestedEnumWaterVisibilityNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumWaterVisibilityNullableFilterObjectSchema = Schema;
