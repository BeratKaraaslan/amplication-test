import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CertificationService } from "./certification.service";
import { CertificationControllerBase } from "./base/certification.controller.base";

@swagger.ApiTags("certifications")
@common.Controller("certifications")
export class CertificationController extends CertificationControllerBase {
  constructor(protected readonly service: CertificationService) {
    super(service);
  }
}
