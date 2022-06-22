const {Router} = require("express")
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router()

router.get("/", async (req, res) => {
    try {
        const products = await Space.findAll({ include: Story });
        res.send(products);
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;