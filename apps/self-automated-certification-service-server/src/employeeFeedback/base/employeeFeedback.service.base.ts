/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EmployeeFeedback as PrismaEmployeeFeedback,
} from "@prisma/client";

export class EmployeeFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeFeedbackCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeFeedback.count(args);
  }

  async employeeFeedbacks(
    args: Prisma.EmployeeFeedbackFindManyArgs
  ): Promise<PrismaEmployeeFeedback[]> {
    return this.prisma.employeeFeedback.findMany(args);
  }
  async employeeFeedback(
    args: Prisma.EmployeeFeedbackFindUniqueArgs
  ): Promise<PrismaEmployeeFeedback | null> {
    return this.prisma.employeeFeedback.findUnique(args);
  }
  async createEmployeeFeedback(
    args: Prisma.EmployeeFeedbackCreateArgs
  ): Promise<PrismaEmployeeFeedback> {
    return this.prisma.employeeFeedback.create(args);
  }
  async updateEmployeeFeedback(
    args: Prisma.EmployeeFeedbackUpdateArgs
  ): Promise<PrismaEmployeeFeedback> {
    return this.prisma.employeeFeedback.update(args);
  }
  async deleteEmployeeFeedback(
    args: Prisma.EmployeeFeedbackDeleteArgs
  ): Promise<PrismaEmployeeFeedback> {
    return this.prisma.employeeFeedback.delete(args);
  }
}
