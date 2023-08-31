const { PrismaClient } = require("@prisma/client");
const axios = require('axios')

const prisma = new PrismaClient();

async function seed() {
  const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')

  try {
    await prisma.carta.createMany({
      data: data.data.map((card) => ({
        atk: card.atk ?? 0,
        attribute: card.attribute ?? '',
        card_images: card.card_images,
        card_prices: card.card_prices,
        card_sets: card.card_sets,
        def: card.def ?? 0,
        desc: card.desc,
        frameType: card.frameType,
        level: card.level ?? 0,
        name: card.name,
        race: card.race,
        type: card.type,
      }))
    })
  } catch (error) {
    console.error('Error seeding database: ', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()