import { z } from "zod";

export const GuidSchema = z.string().uuid();
export type Guid = z.infer<typeof GuidSchema>;
export const GUID_EMPTY: Guid = "00000000-0000-0000-0000-000000000000";
