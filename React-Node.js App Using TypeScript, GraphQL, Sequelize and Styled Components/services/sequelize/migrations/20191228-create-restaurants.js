//in the concept of migrations there are concepts of an up and a down
//up means that we are updating the database system
//down means that we are getting rid of a migration


module.exports.up = (queryInterface, DataTypes) => {
    //create a table
    return queryInterface.createTable("restaurants", {
        id: {
            allowNull: false,
            allowIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED    
        },
        //chefId has to match id since it references the one from the chefs table
        chefId: {
            allowNull: false,
            references: {
                key: "id",
                model: "chefs"
            },
            type: DataTypes.INTEGER.UNSIGNED
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING    
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        //allows us to do a soft delete
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    },
    {
        charset: "utf8"
    });
}

//drop a table
module.exports.down = queryInterface => queryInterface.dropTable("restaurants");