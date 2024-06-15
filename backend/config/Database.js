import { Sequelize } from "sequelize";

const db = new Sequelize('trackin_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db