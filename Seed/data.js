import db from "../DB/connection.js";
import data from "./Item.json" assert { type: "json" };
import Item from "../Models/Item.js";
import Day from "../Models/Day.js";

let itemData = data.map((raw) => {
  const item = {};
  item.Name = raw.Name;
  item.Carbs = raw.Carbs;
  item.Fats = raw.Fats;
  item.Proteins = raw.Proteins;
  item.Quantity = raw.Quantity;
  return item;
});


const insertData = async () => {
  await db.dropDatabase();

  let createdItems = await Item.create(itemData);

  let day1 = Day({
    Items: [
      createdItems[0]._id,
      createdItems[1]._id,
      createdItems[2]._id,
      createdItems[3]._id,
      createdItems[4]._id
    ],
  });

  await day1.save();

  console.log(day1);

  await db.close();
};

// const insertDays = async () => {
//     await db.dropDatabase();

//     await Day.create(

//     );

//     await db.close();
// }

insertData();
// insertDays();
