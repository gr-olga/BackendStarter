const {Router} = require("express")
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router()

router.get("/", async (req, res) => {
    try {
        const spaces = await Space.findAll({ include: Story });
        res.send(spaces);
    } catch (e) {
        console.log(e.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const productId = req.params.id;

        const oneSpace = await Space.findByPk(productId, { include: Story });

        if (!oneSpace) {
            return res.status(404).send("User not found");
        }

        res.send(oneSpace);
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;