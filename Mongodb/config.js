    const mongoose = require("mongoose")
    const uri = "mongodb://ameenrasheed2020_db_user:ameen@ac-hqw7ae8-shard-00-00.kgvlhzs.mongodb.net:27017,ac-hqw7ae8-shard-00-01.kgvlhzs.mongodb.net:27017,ac-hqw7ae8-shard-00-02.kgvlhzs.mongodb.net:27017/?ssl=true&replicaSet=atlas-drj852-shard-0&authSource=admin&appName=Cluster0"

    const connections = async () => {
        try {
            const connect = await mongoose.connect(uri)
            console.log("database is working");

        } catch (error) {
            console.log("error :::::",error);
            
        }


        
    }
    module.exports = connections