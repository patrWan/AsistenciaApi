const {usersModel} = require('../models');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await usersModel.find({});
    
    res.send({data})
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const {body} = req

    console.log(body)

    const data = await usersModel.create(body)

    res.send({data});
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};