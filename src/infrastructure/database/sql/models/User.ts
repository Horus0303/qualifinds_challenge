import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript'

interface UserI {
   id?: number;
   name?: string;
   email?: string;
   password?: string;
}

@Table({
   tableName: 'users',
   timestamps: true
})
export default class User extends Model implements UserI {
   @AutoIncrement
   @PrimaryKey
   @Column
   id?: number;
   
   @AllowNull(false)
   @NotEmpty
   @Column
   email?: string;

   @AllowNull(false)
   @NotEmpty
   @Column
   password?: string;
}