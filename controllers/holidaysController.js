const express = require("express");
const Holidays = require("../models/holidaysModel");
const router = express.Router();

//* GET seed holidays
router.get("/seed", async (req, res) => {
  const seedHolidays = [
    {
      name: "Deepavali",
      celebrated: true,
      description:
        "Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, and Sikhs.",
      tags: ["festival", "celebration"],
    },
    {
      name: "Chinese New Year",
      celebrated: true,
      description:
        "Chinese New Year, also known as the Lunar New Year, is the festival that celebrates the beginning of a new year on the traditional lunisolar and solar Chinese calendar.",
      tags: ["oranges", "celebration"],
    },
    {
      name: "Hari Raya Puasa",
      celebrated: true,
      description:
        "Eid al-Fitr, is the earlier of the two official holidays celebrated within Islam. The religious holiday is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-sunset fasting of Ramadan.",
      tags: ["religious", "end of fast"],
    },
    {
      name: "St. Patrick's day",
      celebrated: false,
      description:
        "Saint Patrick's Day, or the Feast of Saint Patrick, is a cultural and religious celebration held on 17 March, the traditional death date of Saint Patrick, the foremost patron saint of Ireland.",
      tags: ["irish", "green"],
    },
  ];
  try {
    await Holidays.deleteMany({});
    const createdHolidays = await Holidays.create(seedHolidays);
    res
      .status(200)
      .json({ status: "ok", message: "seeded data", data: createdHolidays });
  } catch (error) {
    console.log(error);
  }
});

//* GET all holidays
route.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "ok", message: "seeded data", data: createdHolidays });
  } catch (error) {
    console.log(error);
  }
});

//* POST create new holiday
route.post("/", async (req, res) => {
  const newHoliday = req.body;
  if (!newHoliday) {
    res
      .status(400)
      .json({ status: "not ok", message: "please include a request body" });
  }
  try {
    const createdHoliday = await Holiday.create(newHoliday);
    res
      .status(200)
      .json({ status: "ok", message: "seeded data", data: createdHoliday });
  } catch (error) {
    console.log(error);
  }

//   {
    //     "name": "National Day",
    //     "celebrated": true,
    //     "likes": 56,
    //     "description":
    //       "National Day of Singapore is celebrated every year on August 9, in commemoration of Singapore's independence from Malaysia in 1965.",
    //     "tags": ["independence", "celebration"]
    // }
});

//* GET individual holiday
route.get("/:id", async (req, res) => {
  const {id} = req.params
    try {
        const foundHoliday = await Holiday.findById(id);
    res
      .status(200)
      .json({ status: "ok", message: "get single holiday", data: foundHoliday });
  } catch (error) {
    console.log(error);
  }
});

//* PUT edit holiday
route.get("/:id", async (req, res) => {
    const {id} = req.params;
    const changedHoliday = req.body;
    try {
        const editedHoliday = await Holiday.findById(id, changedHoliday, {new: true})
        res
      .status(200)
      .json({ status: "ok", message: "edited holiday data", data: editedHoliday });
  } catch (error) {
    console.log(error);
  }
});

//* DELETE delete holiday
route.get("/:id", async (req, res) => {
  const {id} = req.params;
    try {
    const deletedHoliday = Holiday.findByIdAndDelete(id);
        res
      .status(200)
      .json({ status: "ok", message: "deleted holiday", data: deletedHoliday });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
