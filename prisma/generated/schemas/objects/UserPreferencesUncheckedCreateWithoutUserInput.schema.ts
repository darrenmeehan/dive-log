import { z } from "zod";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesUncheckedCreateWithoutUserInput> =
  z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      id: z.string().optional(),
      publicProfile: z.boolean().optional(),
      lengthUnits: z
        .lazy(() => UnitSystemSchema)
        .optional()
        .nullable(),
      weightUnits: z
        .lazy(() => UnitSystemSchema)
        .optional()
        .nullable(),
      temperatureUnits: z
        .lazy(() => UnitSystemSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const UserPreferencesUncheckedCreateWithoutUserInputObjectSchema =
  Schema;
