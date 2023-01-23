import mongoose from 'mongoose'
import data from './Item.json' assert { type: 'json' }
import Item from '../Models/Item.js'

let itemData = data.map(raw => {
    const item = {}
    item.Name = raw.Name
    item.Carbs = raw.Carbs
    item.Fats = raw.Fats
    item.Proteins = raw.Proteins
    item.Quantity = raw.Quantity
    return item
})

Item
    .deleteMany({})
    .then(() => Item.create(itemData))
    .then(() => console.log("Done! Your items were seeded to the database"))
    .then(() => mongoose.disconnect())
    .catch(error => console.log("Error", error))