// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const events_db = [];

const prisma = new PrismaClient();

async function main() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
}

const getDooders = async (ctx) => {
  const dooders = await prisma.dooders.findMany();
  console.log(dooders);
  ctx.response.body = dooders;
  ctx.status = 200;
  // await prisma.$disconnect();
};

const addDooders = async (ctx) => {
  console.log("body: ", ctx.request.body);
  const { name, age } = ctx.request.body;
  const dooders = await prisma.dooders.create({
    data: {
      name,
      age
    }
  });
  console.log("dooders: ", dooders);
  ctx.status = 200;
};

const getEvents = (ctx) => {
  ctx.body = events_db;
  ctx.status = 200;
};

const addEvent = (ctx) => {
  events_db.push(ctx.request.body);
  ctx.body = "Event Created!";
  ctx.status = 201;
};

module.exports = {
  getDooders,
  addDooders,
  getEvents,
  addEvent
};
