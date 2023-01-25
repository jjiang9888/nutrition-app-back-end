import db from "../DB/connection.js";
import data from "./Item.json" assert { type: "json" };
import Item from "../Models/Item.js";


let itemData = data.map((raw) => {
  const item = {};
  item.Name = raw.Name;
  item.Calories = raw.Calories;
  item.Carbs = raw.Carbs;
  item.Fats = raw.Fats;
  item.Proteins = raw.Proteins;
  item.Quantity = raw.Quantity;
  item.Notes = raw.Notes;
  return item;
});


const insertData = async () => {
  await db.dropDatabase();

  await Item.create(itemData);

  await db.close();
};

insertData();

