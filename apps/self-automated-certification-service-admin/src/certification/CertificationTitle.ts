import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "id";

export const CertificationTitle = (record: TCertification): string => {
  return record.id?.toString() || String(record.id);
};
