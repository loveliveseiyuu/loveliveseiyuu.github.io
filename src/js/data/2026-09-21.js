dataSetVersion = "2026-09-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Muse", tooltip: "The original Love Live! group of nine.", key: "mu" },
      { name: "A-Rise", tooltip: "Rival group from the original Love Live!", key: "arise" },
      { name: "Aqours", tooltip: "The main 9 member idol group from Love Live! Sunshine!!", key: "aq" },
      { name: "Saint Snow", tooltip: "The 2 member rival group to Aqours", key: "ss" },
      { name: "Nijigasaki", tooltip: "Idol club from Nijigasaki, also known by Perfect Dream Project and School Idol Festival - All Stars", key: "niji" },
      { name: "Liella", tooltip: "The 11 member idol group from Love Live! Superstar!", key: "liella" },
      { name: "Sunny Passion", tooltip: "Rival Group from Love Live! Superstar!", key: "sp" },
      { name: "Hasunosora", tooltip: "Members of Hasunosora School Idol Club from Link! Like! Love Live!", key: "hasu" },
      { name: "Ikizulive", tooltip: "10 member idol group from the online Love High School in Love Live! Bluebird!", key: "iki" },
      { name: "School Idol Musical", tooltip: "From School Idol Musical", key: "sukumu" }
    ]
  },
  {
    name: "Filter side groups",
    key: "main",
    tooltip: "Check this to restrict to seiyuus that are a part of main groups only or rivals only.",
    checked: false,
    sub: [
      { name: "Main", key: "main" },
      { name: "Rivals", key: "riv" }
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nitta Emi - Kosaka Honoka",
    img: "01.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Nanjo Yoshino - Ayase Eri",
    img: "02.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Uchida Aya - Minami Kotori",
    img: "03.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Mimori Suzuko - Sonoda Umi",
    img: "04.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Iida Riho - Hoshizora Rin",
    img: "05.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Pile - Nishikino Maki",
    img: "06.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Kusuda Aina - Tojo Nozomi",
    img: "07.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Kubo Yurika - Koizumi Hanayo",
    img: "08.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Tokui Sora - Yazawa Niko",
    img: "09.png",
    opts: {
      group: ["mu"],
      main: ["main"]
    }
  },
  {
    name: "Inami Anju - Takami Chika",
    img: "10.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Aida Rikako - Sakurauchi Riko",
    img: "11.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Suwa Nanaka - Matsuura Kanan",
    img: "12.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Komiya Arisa - Kurosawa Dia",
    img: "13.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Saito Shuka - Watanabe You",
    img: "14.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Kobayashi Aika - Tsushima Yoshiko (Yohane)",
    img: "15.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Takatsuki Kanako - Kunikida Hanamaru",
    img: "16.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Suzuki Aina - Ohara Mari",
    img: "17.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Furihata Ai - Kurosawa Ruby",
    img: "18.png",
    opts: {
      group: ["aq"],
      main: ["main"]
    }
  },
  {
    name: "Yano Hinaki - Takasaki Yuu",
    img: "19.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Onishi Aguri - Uehara Ayumu",
    img: "20.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Sagara Mayu - Nakasu Kasumi",
    img: "21.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Maeda Kaori - Osaka Shizuku",
    img: "22.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Kubota Miyu - Asaka Karin",
    img: "23.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Murakami Natsumi - Miyashita Ai",
    img: "24.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Kito Akari - Konoe Kanata",
    img: "25.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Hayashi Coco - Yuki Setsuna",
    img: "26.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Sashide Maria - Emma Verde",
    img: "27.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Tanaka Chiemi - Tennoji Rina",
    img: "28.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Koizumi Moeka - Mifune Shioriko",
    img: "29.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Uchida Shu - Mia Taylor",
    img: "30.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Homoto Akina - Zhong Lanzhu",
    img: "31.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Date Sayuri - Shibuya Kanon",
    img: "32.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Liyuu - Tang Keke",
    img: "33.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Misaki Nako - Arashi Chisato",
    img: "34.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Payton Naomi - Heanna Sumire",
    img: "35.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Aoyama Nagisa - Hazuki Ren",
    img: "36.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Suzuhara Nozomi - Sakurakoji Kinako",
    img: "37.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Yabushima Akane - Yoneme Mei",
    img: "38.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Okuma Wakana - Wakana Shiki",
    img: "39.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Emori Aya - Onitsuka Natsumi",
    img: "40.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Yuina - Wien Margarete",
    img: "41.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Sakakura Sakura - Onitsuka Tomari",
    img: "42.png",
    opts: {
      group: ["liella"],
      main: ["main"]
    }
  },
  {
    name: "Nirei Nozomi - Hinoshita Kaho",
    img: "43.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Nonaka Kokona - Murano Sayaka",
    img: "44.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Hanamiya Niina - Otomune Kozue",
    img: "45.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Sasaki Kotoko - Yugiri Tsuzuri",
    img: "46.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Kan Kanna - Osawa Rurino",
    img: "47.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Tsukine Kona - Fujishima Megumi",
    img: "48.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Sakurai Hina - Momose Ginko",
    img: "49.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Hayama Fuuka - Kachimachi Kosuzu",
    img: "50.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Kurusu Rin - Anyoji Hime",
    img: "51.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Miyake Miu - Ceras Yanagida Lilienfeld",
    img: "52.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Shindo Amane - Katsuragi Izumi",
    img: "53.png",
    opts: {
      group: ["hasu"],
      main: ["main"]
    }
  },
  {
    name: "Horiuchi Marina - Tsubaki Rurika",
    img: "54.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Asai Nanami - Sumeragi Yuzuha",
    img: "55.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "An Julia - Hojo Yukino",
    img: "56.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Shimizu Riko - Amakusa Hikaru",
    img: "57.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Yura Akari - Mikasa Maaya",
    img: "58.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Miyamoto Karin - Takizawa Anzu",
    img: "59.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Yasumoto Ayaka - Wakatsuki Misuzu",
    img: "60.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Minamino Hana - Wakatsuki Misuzu",
    img: "61.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Nakamura Yuna - Kurusu Doa",
    img: "62.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Oikawa Yui - Kurusu Doa",
    img: "63.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Inoue Neo - Suzuka Rena",
    img: "64.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Murayama Yuuka - Harukaze Sayaka",
    img: "65.png",
    opts: {
      group: ["sukumu"],
      main: ["main"]
    }
  },
  {
    name: "Ayasaki Honon - Takahashi Polka",
    img: "66.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Endo Rina - Azabu Mai",
    img: "67.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Miyano Seri - Goto Akira",
    img: "68.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Fujino Kokoro - Komagata Hanabi",
    img: "69.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Sakano Aiha - Kanazawa Miracle",
    img: "70.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Seko Ria - Chofu Noriko",
    img: "71.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Okumura Yuki - Harumiya Yukuri",
    img: "72.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Amasawa Akane - Konohana Aurora",
    img: "73.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Kotomori Honoka - Yamada Midori",
    img: "74.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Suzunose Aoi - Sasaki Shion",
    img: "75.png",
    opts: {
      group: ["iki"],
      main: ["main"]
    }
  },
  {
    name: "Kusunoki Tomori - Yuki Setsuna (ret)",
    img: "76.png",
    opts: {
      group: ["niji"],
      main: ["main"]
    }
  },
  {
    name: "Sakuragawa Megu - Kira Tsubasa",
    img: "77.png",
    opts: {
      group: ["arise"],
      main: ["side"]
    }
  },
  {
    name: "Matsunaga Maho - Todo Erena",
    img: "78.png",
    opts: {
      group: ["arise"],
      main: ["side"]
    }
  },
  {
    name: "Ohashi Ayuru - Yuki Anju",
    img: "79.png",
    opts: {
      group: ["arise"],
      main: ["side"]
    }
  },
  {
    name: "Tano Asami - Kazuno Sarah",
    img: "80.png",
    opts: {
      group: ["ss"],
      main: ["side"]
    }
  },
  {
    name: "Sato Hinata - Kazuno Leah",
    img: "81.png",
    opts: {
      group: ["ss"],
      main: ["side"]
    }
  },
  {
    name: "Yoshitake Chihaya - Hijirisawa Yuuna",
    img: "82.png",
    opts: {
      group: ["sp"],
      main: ["side"]
    }
  },
  {
    name: "Yuuki Yuna - Hiragi Mao",
    img: "83.png",
    opts: {
      group: ["sp"],
      main: ["side"]
    }
  }
];
