/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Survey as PrismaSurvey } from "@prisma/client";

export class SurveyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SurveyCountArgs, "select">): Promise<number> {
    return this.prisma.survey.count(args);
  }

  async surveys(args: Prisma.SurveyFindManyArgs): Promise<PrismaSurvey[]> {
    return this.prisma.survey.findMany(args);
  }
  async survey(
    args: Prisma.SurveyFindUniqueArgs
  ): Promise<PrismaSurvey | null> {
    return this.prisma.survey.findUnique(args);
  }
  async createSurvey(args: Prisma.SurveyCreateArgs): Promise<PrismaSurvey> {
    return this.prisma.survey.create(args);
  }
  async updateSurvey(args: Prisma.SurveyUpdateArgs): Promise<PrismaSurvey> {
    return this.prisma.survey.update(args);
  }
  async deleteSurvey(args: Prisma.SurveyDeleteArgs): Promise<PrismaSurvey> {
    return this.prisma.survey.delete(args);
  }
}
