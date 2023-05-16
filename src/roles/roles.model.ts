import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface RoleCreationAttrs {
   value: string;
   description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs>{

   @ApiProperty({ example: '1', description: 'уникальный идентификатор'})
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @ApiProperty({ example: 'ADMIN', description: 'Значение роли пользова теля'})
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value: string;

   @ApiProperty({ example: '123456', description: 'Пароль'})
   @Column({ type: DataType.STRING, allowNull: false })
   description: string;

}