const {Router} = require("express")
const authMiddleware = require("../auth/middleware");
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


router.put("/", authMiddleware,async (req, res) => {
    try {
        const {title, description, backgroundColor, color, spaceId} = req.body;
        const spaces = await Space.findByPk(spaceId);
        const updated = await spaces.update({
            title: title,
            description: description,
            backgroundColor: backgroundColor,
            color: color
        });
        res.send(updated);
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
router.delete("/:id",
    async (req, res) => {
        try {
            const {id} = req.params;
            const userToDelete = await Story.findByPk(id);
            await userToDelete.destroy();
            res.send("Story terminated");
        } catch (e) {
            console.log(e.message);
        }
    });

router.post("/story", authMiddleware, async (req, res) => {
    try {
        const {name, content, imageUrl, spaceId} = req.body;
        console.log(name, content, imageUrl, spaceId);
        const space = await Space.findByPk(spaceId)
        console.log(space)
        if (!name || !content || !imageUrl || !space) {
            res.status(400).send("missing parameters");
        } else {
            const newStory = await Story.create({
                name: name,
                content: content,
                imageUrl: imageUrl,
                spaceId: spaceId

            });
            res.send(newStory);
        }
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;