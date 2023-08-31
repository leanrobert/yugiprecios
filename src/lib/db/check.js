const Card = {
  id: 1232412,
  name: 'name',
  type: 'type',
  frameType: 'frameType',
  desc: 'desc',
  // Monsters
  atk: 0 ?? null,
  def: 0 ?? null,
  level: 0 ?? null,
  race: 'race' ?? null,
  attribute: 'attribute' ?? null,
  // Archetype
  archetype: 'archetype' ?? null,
  // Pendulum
  scale: 1 ?? null,
  // Link
  linkval: 1 ?? null,
  linkmarkers: ['linkmarkers'] ?? null,
  // Info of cardset
  cardsets: [Cardset],
  // Info of cardimage
  cardimage: [Cardimage],
  // Info of cardprice
  cardprice: [Cardprice],
}

const Cardset = {
  set_name: "2-Player Starter Deck: Yuya & Declan",
  set_code: "YS15",
  num_of_cards: 42,
  tcg_date: "2015-05-28",
  set_image: "https://images.ygoprodeck.com/images/sets/YS15.jpg"
}

const Cardimage = {
  id: 1232412,
  image_url: "https://images.ygoprodeck.com/images/cards/34541863.jpg",
  image_url_small: "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
  image_url_cropped: "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
}

const Cardprice = {
  cardmarket_price: "0.03",
  tcgplayer_price: "0.03",
  ebay_price: "0.0",
  amazon_price: "0.0",
  coolstuffinc_price: "0.0"
}
