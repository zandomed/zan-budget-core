export abstract class PrismaMapper<Entity, PrismaEntity> {
  constructor() {
    throw new Error(``);
  }
  abstract toDomain(entity: PrismaEntity): Entity;
  abstract toPrisma(entity: Entity): PrismaEntity;
}
