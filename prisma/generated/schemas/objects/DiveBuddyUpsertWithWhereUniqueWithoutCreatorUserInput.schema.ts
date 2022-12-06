import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUpdateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedUpdateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutCreatorUserInput.schema";
import { DiveBuddyCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveBuddyUpdateWithoutCreatorUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateWithoutCreatorUserInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema =
  Schema;
