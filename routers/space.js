const {Router} = require("express")
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router()

router.get("/", async (req, res) => {
    try {
        const spaces = await Space.findAll({include: Story});
        res.send(spaces);
    } catch (e) {
        console.log(e.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const spacesId = req.params.id;
        const oneSpace = await Space.findByPk(spacesId, {include: Story});
        if (!oneSpace) {
            return res.status(404).send("Space not found");
        }
        res.send(oneSpace);
    } catch (e) {
        console.log(e.message);
    }
});

// router.post("/", async (req, res, next) => {
//     try {
//         const {title, description, backgroundColor, color, userId} = req.body;
//         console.log({title, description, backgroundColor, color, userId});
//         const newSpace = await Space.create({
//             title: title,
//             description: description,
//             backgroundColor: backgroundColor,
//             color: color,
//             userId: userId
//         },);
//         res.send(newSpace);
//     } catch (e) {
//         next(e);
//     }
// });

module.exports = router;