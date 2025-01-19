import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ResourceService {
  static async create(data: {
    name: string;
    type: string;
    description?: string;
  }) {
    return prisma.resource.create({
      data,
    });
  }

  static async list(type?: string) {
    return prisma.resource.findMany({
      where: type ? { type } : {},
    });
  }

  static async get(id: string) {
    return prisma.resource.findUnique({ where: { id } });
  }

  static async update(id: string, data: { name?: string; type?: string }) {
    return prisma.resource.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.resource.delete({ where: { id } });
  }
}
