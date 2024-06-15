import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    nama_barang: DataTypes.STRING,
    harga_barang: DataTypes.INTEGER,
    jumlah_stok: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default User;

( async() => {
    await db.sync()
})()