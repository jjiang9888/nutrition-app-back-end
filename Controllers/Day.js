import Day from "../Models/Day.js";


export const getDays = async (req, res) => {
 try {
   const day = await Day.find();
   res.json(day);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
};




export const getDay = async (req, res) => {
 try {
   const { id } = req.params;
   const day = await Day.findById(id);


   if (day) {
     return res.json(day);
   }


   res.status(404).json({ message: "Day not found!" });
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
};


export const createDay = async (req, res) => {
 try {
   const day = new Day(req.body);
   await day.save();
   res.status(201).json(day);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
};


export const updateDay = async (req, res) => {
 try {
   const { id } = req.params;
   const day = await Day.findByIdAndUpdate(id, req.body);
   res.status(201).json(day);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
};


export const deleteDay = async (req, res) => {
 try {
   const { id } = req.params;
   const deleted = await Day.findByIdAndDelete(id);


   if (deleted) {
     return res.status(200).send("Days deleted!");
   }


   throw new Error("Day not found");
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
};
