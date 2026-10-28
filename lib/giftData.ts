export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "5:00 PM — Going to the cinema together 🎬🍿",
  "After the Cinema — Having a delicious meal together 🍽️✨",
  "Next Stop — Booking a private room to play PlayStation 🎮🔥",
  "Later on — Taking a nice walk and drinking mint tea 🚶‍♀️🍃☕️",
  "The Grand Finale — Giving him his special gift 🎁❤️",
];

export const defaultLoveLetterParagraphs: string[] = [
  "To my mohamed, loving you is the easiest and most beautiful thing I've ever done.",
  "You are my safe place, my warmth, and the only person I can be truly myself with.",
  "I love the man you are—your gentle heart, your reassuring voice, and your sweet smile.",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 2nd anniversary to my forever favorite person, my heart, and my future",
  "Always and forever, your favorite lady. 🤍",
];

const ahmedGift: GiftData = {
  senderName: "doha",
  receiverName: "mohamed",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Happy Anniversary, my love! Thank you for making every single day brighter and for filling my life with endless joy. Here’s to us and to many more wonderful years together",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "Time flies when I'm with you, and every year just keeps getting better. Thank you for being my constant source of happiness. Happy Anniversary 🫂",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy Anniversary, my love and my safe place! 🤍✨",
  birthdayWishesMessage:
    `Looking back at all the moments we've shared, I realize more and more how lucky I am to have you in my life. You are not just my partner, you are my comfort, my happiness, and the best part of every single day. Thank you for your endless love, your warmth, and for always holding my hand through everything.
Every day with you feels like a blessing, and I fall in love with you more deeply than before. I can't wait for all the years ahead of us, and especially to celebrate next year together in our own home, building our dreams side by side forever.`,
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My mohamed, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  mohamed: ahmedGift,
  ahmed: ahmedGift,
  amir: ahmedGift,
  anniversary: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;