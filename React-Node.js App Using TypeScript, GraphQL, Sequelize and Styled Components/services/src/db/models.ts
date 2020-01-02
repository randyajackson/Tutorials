import { Model, BelongsTo, DataType, ForeignKey, Table, Column, HasMany } from "sequelize-typescript";

@Table({
    defaultScope: {
        attributes: {exclude: ["deletedAt"]}
    },
    paranoid: true,
    tableName: "chefs"
})

export class Chef extends Model<Chef> {
   @Column({ //this matches 20191228-create-chefs.js
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
   }) 
   id!: string; //! means we dont have to define the value before we construct it
   //since strict: true in tsconfig, the ! just masks the error

   @Column({ //this matches 20191228-create-chefs.js
    allowNull: false,
    type: DataType.STRING
    }) 
    name!: string;

    //There is a relationship between chef and Restaurant
    //and restaurants will contain all information belonging to the chef
    @HasMany(() => Restaurant)
    restaurants!: Restaurant[];
}

@Table({
    defaultScope: {
        attributes: {exclude: ["deletedAt"]}
    },
    paranoid: true,
    tableName: "restaurants"
})

export class Restaurant extends Model<Restaurant> {
    @Column({ 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
   }) 
   id!: string;

   @Column({
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
   })

   @ForeignKey(() => Chef)
   chefId!: string;

   @Column({
       allowNull: false,
       type: DataType.STRING
   })
   name!: string;

   @BelongsTo(() => Chef)
   chef!: Chef;
}

export default[Chef, Restaurant];