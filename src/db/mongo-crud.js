'use strict';

/**
 * Module handling CRUD on MongoDB
 */

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;


/**
 * Export module
 *
 * @param {string} dsn of DB
 * @param {string} collection to use
 *
 * @return {function} The module
 */
module.exports = (dsn, collection) => {
    /**
     * Create and return connection to DB
     *
     * @async
     *
     * @return {object} Connection and collection
     */
    async function connect() {
        const db    = await MongoClient.connect(dsn);
        const col   = await db.collection(collection);

        return { db, col };
    }


    return {
        /**
         * Get all items in collection
         *
         * @async
         *
         * @return {array} The items in collection
         */
        async index() {
            const { db, col } = await connect();
            const res = await col.find().toArray();

            await db.close();
            return res;
        },


        /**
         * Insert item
         *
         * @async
         *
         * @param {object} item the item to insert
         *
         * @return {object} Inserted item
         */
        async create(item) {
            const { db, col } = await connect();

            const res = await col.insertOne(item);

            await db.close();
            return res.ops[0];
        },


        /**
         * Get item by id
         *
         * @async
         *
         * @param {string} id of item
         *
         * @return {object} Requested item
         */
        async read(id) {
            const { db, col } = await connect();
            const res = await col.findOne({ _id: ObjectId(id)});

            await db.close();
            return res;
        },


        /**
         * Update item by id
         *
         * @async
         *
         * @param {string} id of item
         * @param {object} item keys and values to upadate
         *
         * @return {object} Updated item
         */
        async update(id, item) {
            const { db, col } = await connect();

            const res = await col.findOneAndUpdate({ _id: ObjectId(id)},
                { $set: item });

            await db.close();
            return res;
        },


        /**
         * Delete item by id
         *
         * @async
         *
         * @param {string} id of item
         *
         * @return {object} Deleted item
         */
        async delete(id) {
            const { db, col } = await connect();

            const res = await col.findOneAndDelete({ _id: ObjectId(id) });

            await db.close();
            return res;
        }
    };
};
