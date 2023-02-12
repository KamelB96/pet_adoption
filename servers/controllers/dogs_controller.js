const dogs = require('express').Router()
const db = require('../../models')
const { Dog } = db
const { Op } = require('sequelize')


dogs.get('/', async (req,res) => {
    try {
        const foundDogs = await Dog.findAll(
            {
           //order: [ [ 'age', 'ASC' ] ],
            where: {
               name :{[Op.like]: `%${req.query.name ? req.query.name : ''}%`}

}
        }
)
        res.status(200).json(foundDogs)
    } catch (error) {
        res.status(500).json(error)
    }
    })


dogs.get('/:name', async (req,res) => {
    try {
        const foundDog = awaitDog.findOne({
            where: { name: req.params.name }, 
        })
        res.status(200).json(foundDog)
    } catch (error) {
        res.status(500).json(error)
    }
    })

//create a dog
dogs.post('/', async (req,res) => {
    console.log(req.body, "console logging req body")
    try {

        const newDog = await Dog.create(req.body)
        console.log(req.body)
        res.status(200).json({
            message: "successfully inerted new dog",
            data: newDog
        })
    } catch (error) 
    
    {   
        console.log(error)
        res.status(500).json(error)
    }
    })


dogs.put('/:id', async (req, res) => {
    try {
        const updatedDogs = await Dog.update(req.body, {
            where: {
                dog_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedDogs} dog(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A dog
dogs.delete('/:id', async (req, res) => {
    try {
        const deletedDogs = await Dog.destroy({
            where: {
                dog_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedDogs} dog(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//export
module.exports = dogs;