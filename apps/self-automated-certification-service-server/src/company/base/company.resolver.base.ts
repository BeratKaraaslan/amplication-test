/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Company } from "./Company";
import { CompanyCountArgs } from "./CompanyCountArgs";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyFindUniqueArgs } from "./CompanyFindUniqueArgs";
import { DeleteCompanyArgs } from "./DeleteCompanyArgs";
import { CompanyService } from "../company.service";
@graphql.Resolver(() => Company)
export class CompanyResolverBase {
  constructor(protected readonly service: CompanyService) {}

  async _companiesMeta(
    @graphql.Args() args: CompanyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Company])
  async companies(
    @graphql.Args() args: CompanyFindManyArgs
  ): Promise<Company[]> {
    return this.service.companies(args);
  }

  @graphql.Query(() => Company, { nullable: true })
  async company(
    @graphql.Args() args: CompanyFindUniqueArgs
  ): Promise<Company | null> {
    const result = await this.service.company(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Company)
  async deleteCompany(
    @graphql.Args() args: DeleteCompanyArgs
  ): Promise<Company | null> {
    try {
      return await this.service.deleteCompany(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
