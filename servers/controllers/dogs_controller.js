const dogs = require('express').Router()
const db = require('../../models')
const { Dog } = db
const { Op } = require('sequelize')


dogs.get('/', async (req,res) => {
    try {
        const foundDogs = await Dog.findAll(
            {
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


dogs.get('/:id', async (req,res) => {
    try {
        const foundDog = await Dog.findOne({
            where: { dog_id: req.params.id }, 
        })
        console.log(foundDog.dataValues)
        res.status(200).json(foundDog.dataValues)
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

// EDIT A DOG
dogs.put('/:id',  (req, res) => {
    console.log(req.body, req.params.id, "console logging req body for edit")
     const updatedData = {
        name: req.body.dogName,
        breed: req.body.dogBreed,
        age: req.body.dogAge,
        image:req.body.dogImage,
        email:req.body.dogEmail}
console.log(updatedData)
    Dog.update(updatedData, {
            where: {
                dog_id: req.params.id
            }
        }).then(() =>  res.status(200).json({
            message: `Successfully updated dog(s)`
        }))
        .catch(err => console.log(err));
       

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