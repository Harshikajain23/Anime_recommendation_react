import React from "react";
import aot from "./assets/aot.jpg";
import demon-slayer from "./assets/demon-slayer.jpg";

const animeData = [
  {
    id: 1,
    name: "Attack on Titan",
    image: aot,
    info: "In a world where humanity resides within enormous walled cities to protect themselves from man-eating giants known as Titans, Eren Yeager vows to eliminate every last Titan after his hometown is destroyed. The story explores freedom, vengeance, and human nature amidst the chaos of survival.",
    genre: "Action, Drama, Fantasy",
    length: "4 Seasons | 87 Episodes",
    status: "Completed"
  },
  {
    id: 2,
    name: "Demon Slayer",
    image: demon-slayer,
    info: "After his family is slaughtered by demons, Tanjiro Kamado becomes a demon slayer in hopes of finding a cure for his sister Nezuko, who has been transformed into one. With breathtaking visuals and emotional storytelling, this anime beautifully blends action and heart.",
    genre: "Action, Supernatural, Adventure",
    length: "3 Seasons | 55 Episodes",
    status: "Ongoing"
  },
  {
    id: 3,
    name: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    info: "Yuji Itadori, a high schooler with remarkable physical abilities, joins a secret organization of sorcerers to combat cursed spirits after ingesting a powerful curse. The series combines slick animation, intense fights, and deep moral dilemmas about power and sacrifice.",
    genre: "Action, Supernatural, Dark Fantasy",
    length: "2 Seasons | 47 Episodes",
    status: "Ongoing"
  },
  {
    id: 4,
    name: "Your Name",
    image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    info: "Two teenagers, Taki and Mitsuha, mysteriously begin swapping bodies and living each other’s lives. As they search for answers, they form a connection that transcends time and space. A visually stunning and emotional journey about fate and love.",
    genre: "Romance, Drama, Fantasy",
    length: "1 Movie | 1 Hour 46 Minutes",
    status: "Completed"
  },
  {
    id: 5,
    name: "Death Note",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    info: "Light Yagami, a brilliant but disillusioned student, discovers a notebook that can kill anyone whose name is written in it. As he attempts to cleanse the world of evil, a psychological battle begins between him and the enigmatic detective L.",
    genre: "Thriller, Mystery, Psychological",
    length: "1 Season | 37 Episodes",
    status: "Completed"
  },
  {
    id: 6,
    name: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    info: "Denji, a destitute young man, merges with his pet devil Pochita to become Chainsaw Man after being betrayed. Now working with Public Safety Devil Hunters, he faces brutal battles while exploring human desires and morality in a gritty, chaotic world.",
    genre: "Action, Horror, Dark Fantasy",
    length: "1 Season | 12 Episodes",
    status: "Ongoing"
  },

  {
    id: 7,
    name: "Fullmetal Alchemist: Brotherhood",
    image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    info: "After a disastrous alchemy experiment, brothers Edward and Alphonse Elric seek the Philosopher’s Stone to restore their bodies. A masterpiece of storytelling that explores sacrifice, morality, and the cost of ambition.",
    genre: "Adventure, Fantasy, Drama",
    length: "1 Season | 64 Episodes",
    status: "Completed"
  },

  {
    "id": 8,
    "name": "Spirited Away",
    "info": "A young girl enters a mysterious spirit world after her parents are transformed into pigs. To save them, she must work in a bathhouse run by a witch and discover her own courage.",
    "genre": "Adventure, Fantasy, Supernatural",
    "length": "1 Movie | 2 Hours 5 Minutes",
    "status": "Completed"
  },
  {
    "id": 9,
    "name": "Your Lie in April",
    "info": "A piano prodigy who lost his ability to hear music after his mother’s death meets a free-spirited violinist who helps him rediscover his passion for life and music.",
    "genre": "Drama, Romance, Music",
    "length": "1 Season | 22 Episodes",
    "status": "Completed"
  },
  {
    "id": 10,
    "name": "Blue Lock",
    "info": "After Japan's World Cup failure, 300 strikers are locked in a competition to become the ultimate egoistic forward and revolutionize Japanese soccer.",
    "genre": "Sports, Psychological, Drama",
    "length": "2 Seasons | 37 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 11,
    "name": "Solo Leveling",
    "info": "An underpowered hunter discovers a mysterious system that allows him to level up infinitely, rising to become humanity’s strongest fighter.",
    "genre": "Action, Fantasy, Adventure",
    "length": "1 Season | 12 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 12,
    "name": "Re:Zero − Starting Life in Another World",
    "info": "Subaru is transported to another world where he discovers he can return from death, each time altering fate but enduring endless pain.",
    "genre": "Isekai, Psychological, Drama",
    "length": "2 Seasons | 50 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 13,
    "name": "Haikyuu!!",
    "info": "A passionate high schooler dreams of becoming a volleyball ace despite his short height, leading his team through rivalries and thrilling matches.",
    "genre": "Sports, Comedy, Drama",
    "length": "4 Seasons | 85 Episodes",
    "status": "Completed"
  },
  {
    "id": 14,
    "name": "Fairy Tail",
    "info": "Natsu and his friends from the Fairy Tail guild go on magical adventures, facing dark guilds, dragons, and ancient curses with the power of friendship.",
    "genre": "Action, Adventure, Fantasy",
    "length": "9 Seasons | 328 Episodes",
    "status": "Completed"
  },
  {
    "id": 15,
    "name": "Made in Abyss",
    "info": "A young girl and a robot descend into a mysterious abyss filled with strange creatures and deadly secrets to find her missing mother.",
    "genre": "Adventure, Mystery, Fantasy",
    "length": "2 Seasons | 25 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 16,
    "name": "Summer Time Rendering",
    "info": "After a friend’s death, Shinpei returns to his island home only to uncover a looping time mystery and deadly shadows replacing humans.",
    "genre": "Mystery, Thriller, Supernatural",
    "length": "1 Season | 25 Episodes",
    "status": "Completed"
  },
  {
    "id": 17,
    "name": "Hell’s Paradise",
    "info": "A group of criminals is sent to a deadly island to retrieve the elixir of life, facing horrific creatures and their own inner demons.",
    "genre": "Action, Fantasy, Horror",
    "length": "1 Season | 13 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 18,
    "name": "Vinland Saga",
    "info": "A Viking warrior seeks revenge against the man who killed his father, discovering the true meaning of strength and peace along his journey.",
    "genre": "Action, Drama, Historical",
    "length": "2 Seasons | 48 Episodes",
    "status": "Completed"
  },
  {
    "id": 19,
    "name": "Code Geass",
    "info": "Lelouch, a prince in exile, gains the power of Geass, allowing him to control anyone. He leads a rebellion to destroy the empire that betrayed him.",
    "genre": "Mecha, Thriller, Psychological",
    "length": "2 Seasons | 50 Episodes",
    "status": "Completed"
  },
  {
    "id": 20,
    "name": "Classroom of the Elite",
    "info": "In a school where hierarchy and manipulation decide success, Ayanokoji hides his genius while navigating cutthroat competition.",
    "genre": "Psychological, Drama, School",
    "length": "3 Seasons | 38 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 21,
    "name": "Black Clover",
    "info": "Two orphans, Asta and Yuno, dream of becoming the Wizard King, battling enemies and destiny with grit and magic.",
    "genre": "Action, Fantasy, Adventure",
    "length": "4 Seasons | 170 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 22,
    "name": "To Your Eternity",
    "info": "An immortal orb takes on new forms as it experiences life, death, and emotion through encounters with humans.",
    "genre": "Drama, Fantasy, Supernatural",
    "length": "2 Seasons | 40 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 23,
    "name": "Tower of God",
    "info": "A boy enters a mysterious tower to find his friend, climbing deadly floors filled with rivals and secrets.",
    "genre": "Action, Adventure, Fantasy",
    "length": "1 Season | 13 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 24,
    "name": "Dan Da Dan",
    "info": "A psychic girl and a UFO-obsessed boy get caught between aliens and ghosts, forming an unlikely bond through chaos and laughter.",
    "genre": "Action, Supernatural, Comedy",
    "length": "1 Season | 12 Episodes (Ongoing)",
    "status": "Ongoing"
  },
  {
    "id": 25,
    "name": "Kaiju No. 8",
    "info": "A man gains the ability to transform into a kaiju and joins Japan’s Defense Force to protect humanity while hiding his secret.",
    "genre": "Action, Sci-Fi, Supernatural",
    "length": "1 Season | 12 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 26,
    "name": "The Promised Neverland",
    "info": "Children at an orphanage uncover a horrifying secret about their fate and plan a daring escape from their caretakers.",
    "genre": "Thriller, Mystery, Psychological",
    "length": "2 Seasons | 23 Episodes",
    "status": "Completed"
  },
  {
    "id": 27,
    "name": "Anohana: The Flower We Saw That Day",
    "info": "A group of childhood friends reunite when the ghost of their deceased friend appears, leading them to face their grief and regrets.",
    "genre": "Drama, Slice of Life, Supernatural",
    "length": "1 Season | 11 Episodes",
    "status": "Completed"
  },
  {
    "id": 28,
    "name": "Orange",
    "info": "A high school girl receives letters from her future self urging her to save a new transfer student from his tragic fate.",
    "genre": "Drama, Romance, Sci-Fi",
    "length": "1 Season | 13 Episodes",
    "status": "Completed"
  },
  {
    "id": 29,
    "name": "No Game No Life",
    "info": "Two gaming prodigies are transported to a world where everything is decided by games, aiming to challenge the god of this realm.",
    "genre": "Fantasy, Comedy, Isekai",
    "length": "1 Season | 12 Episodes",
    "status": "Completed"
  },
  {
    "id": 30,
    "name": "Lookism",
    "info": "A bullied student wakes up with two bodies — one handsome, one not — and learns about self-worth and the harshness of society.",
    "genre": "Drama, Psychological, Slice of Life",
    "length": "1 Season | 8 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 31,
    "name": "Dr. Stone",
    "info": "After humanity turns to stone, a genius boy uses science to rebuild civilization and restore humanity.",
    "genre": "Adventure, Sci-Fi, Comedy",
    "length": "3 Seasons | 49 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 32,
    "name": "86: Eighty-Six",
    "info": "In a futuristic war, the 'Eighty-Six' fight for a nation that denies their existence, blending mecha warfare with deep emotional storytelling.",
    "genre": "Action, Drama, Mecha",
    "length": "2 Seasons | 23 Episodes",
    "status": "Completed"
  },

  {
    "id": 33,
    "name": "Clannad",
    "info": "A touching slice-of-life story about Tomoya and Nagisa, exploring friendship, love, and family as they navigate high school and adulthood.",
    "genre": "Drama, Romance, Slice of Life",
    "length": "2 Seasons | 47 Episodes",
    "status": "Completed"
  },
  {
    "id": 34,
    "name": "Link Click",
    "info": "Two friends use photos to travel into the past and alter memories, unraveling emotional mysteries that test trust and morality.",
    "genre": "Mystery, Supernatural, Drama",
    "length": "2 Seasons | 24 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 35,
    "name": "Seraph of the End",
    "info": "After a deadly virus wipes out most of humanity, young survivors fight against vampires and demons in a post-apocalyptic world.",
    "genre": "Action, Supernatural, Dark Fantasy",
    "length": "2 Seasons | 24 Episodes",
    "status": "Ongoing"
  },
  {
    "id": 36,
    "name": "Erased",
    "info": "A man with the ability to travel back in time is sent to his childhood to prevent a series of kidnappings and murders.",
    "genre": "Mystery, Psychological, Thriller",
    "length": "1 Season | 12 Episodes",
    "status": "Completed"
  },
  {
    "id": 37,
    "name": "The Garden of Words",
    "info": "A beautiful tale of a young boy and an older woman who meet on rainy mornings, exploring loneliness and emotional connection.",
    "genre": "Romance, Drama, Slice of Life",
    "length": "1 Movie | 46 Minutes",
    "status": "Completed"
  },
  {
    "id": 38,
    "name": "Hotarubi no Mori e",
    "info": "A short, heartwarming movie about a girl and a spirit boy who meet every summer in a mystical forest.",
    "genre": "Romance, Supernatural, Drama",
    "length": "1 Movie | 45 Minutes",
    "status": "Completed"
  },
  {
    "id": 39,
    "name": "Violet Evergarden",
    "info": "An emotionally driven story following Violet, a former soldier who learns the meaning of love while writing letters for others.",
    "genre": "Drama, Fantasy, Slice of Life",
    "length": "1 Season + Movie | 13 Episodes",
    "status": "Completed"
  }
];

export default animeData;
