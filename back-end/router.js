const Router = require("koa-router");
const router = new Router();
const { getDooders, addDooders, getEvents, addEvent } = require("./controllers/events");

router.get("/dooders", ctx => getDooders(ctx));
router.post("/dooders", ctx => addDooders(ctx));
router.get("/events_list", (ctx) => getEvents(ctx));
router.post("/add_event", (ctx) => addEvent(ctx));

module.exports = router;
