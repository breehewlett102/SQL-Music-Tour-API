const stages = require('express').Router()
const db = require('../models')
const {Stage} = db
const { Op } = require('sequelize')

stages.get('/', async (req, res) => {
    try {
        const foundstages = await stages.findAll({
            order: [ [ 'available_start_time', 'ASC' ], ['stage_id', '30'], ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`},
                id: {
                    [Op.lt]: 30                 
                 }
            }
        })
        res.status(200).json(foundstages)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.post('/', async (req, res) => {
    try {
        const newStages = await stages.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stages',
            data: newStages
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

stages.put('/:id', async (req, res) => {
    try {
        const updatedstages = await stages.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedstages} Stages(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

stages.delete('/:id', async (req, res) => {
    try {
        const deletedstages = await stages.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedstages} Stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = stages;