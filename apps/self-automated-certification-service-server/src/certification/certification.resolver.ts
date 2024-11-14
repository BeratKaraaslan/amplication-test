import * as graphql from "@nestjs/graphql";
import { CertificationResolverBase } from "./base/certification.resolver.base";
import { Certification } from "./base/Certification";
import { CertificationService } from "./certification.service";

@graphql.Resolver(() => Certification)
export class CertificationResolver extends CertificationResolverBase {
  constructor(protected readonly service: CertificationService) {
    super(service);
  }
}
