export interface Excursion {
  id: string
  title: string
  description: string
  fullDescription: string
  highlights: string[]
  image: string
  images: string[]
  duration: string
  durationHours: number
  price: number
  category: "sightseeing" | "cultural" | "adventure" | "nature"
  rating: number
  reviewCount: number
  maxPeople: number
  city?: string
  isFeatured?: boolean
  featuredLabel?: string
}

export interface GroupTrip {
  id: string
  title: string
  description: string
  fullDescription: string
  duration: string
  pricePerTicket: number
  port: string
  image: string
  images: string[]
  highlights: string[]
  isFeatured?: boolean
  featuredLabel?: string
}

export interface Yacht {
  id: string
  name: string
  nameRu: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  length: number
  capacity: number
  pricePerHour: number
  features: string[]
  highlights: string[]
  type: "sailing" | "motor" | "catamaran"
  port: "adler" | "sochi"
}

export const excursions: Excursion[] = [
  {
    id: "abhaziya-zolotoe-koltso",
    title: "Золотое кольцо Абхазии: Гагра, Рица, Новый Афон",
    description:
      "Насыщенная поездка по знаковым местам Абхазии: Гагра, Голубое озеро, Юпшарский каньон, озеро Рица и Новый Афон.",
    fullDescription:
      "Экскурсия по Абхазии с посещением Гагрской колоннады и ресторана «Гагрипш», Голубого озера, Юпшарского каньона и озера Рица. В Новом Афоне вы увидите монастырь, храм Симона Кананита, водопад и станцию Псырцха. По желанию можно посетить Новоафонскую пещеру. В течение дня предусмотрена дегустация кавказских продуктов.",
    highlights: [
      "Гагра, Рица, Новый Афон за 1 день",
      "Дегустация вина, сыра и мёда",
      "Из Сочи: взрослый 2400 ₽, дети 1900 ₽",
      "Из Адлера: взрослый 2000 ₽, дети 1600 ₽",
      "Дополнительно: пещера 700 ₽, дача Сталина 400 ₽",
    ],
    image: "/img/excu/abhzolcol/lake-rica.webp",
    images: [
      "/img/excu/abhzolcol/lake-rica.webp",
      "/img/excu/abhzolcol/monastery.webp",
      "/img/excu/abhzolcol/yupsharskoe.webp",
      "/img/excu/abhzolcol/photo_2026-03-13_09-01-56.webp",
      "/img/excu/abhzolcol/photo_2026-03-13_09-02-35.webp",
      "/img/excu/abhzolcol/photo_2026-03-12_22-23-02.webp",
      "/img/excu/abhzolcol/IMG-20230705-WA0116.webp",
      "/img/excu/abhzolcol/IMG-20230705-WA0119.webp",
      "/img/excu/abhzolcol/IMG-20250311-WA0014.webp",
      "/img/excu/abhzolcol/IMG-20230630-WA0043.webp",
    ],
    duration: "12–14 часов",
    durationHours: 13,
    price: 2000,
    category: "cultural",
    rating: 4.9,
    reviewCount: 312,
    maxPeople: 20,
    city: "Сочи",
    isFeatured: true,
    featuredLabel: "Хит сезона",
  },
  {
    id: "krasnaya-polyana-5-v-1",
    title: "Красная Поляна 5 в 1: курорты и Олимпийский парк",
    description:
      "Ущелье Ахцу, курорты Роза Хутор, Красная Поляна и Газпром, а вечером — шоу поющих фонтанов в Олимпийском парке.",
    fullDescription:
      "Однодневная экскурсия по Красной Поляне с посещением смотровых площадок в ущелье Ахцу, трёх горных курортов и олимпийского кластера. По желанию доступен подъём на канатной дороге до высоты 2320 метров. Программа дополняется дегустацией мёда и вина, а завершается вечерним шоу фонтанов.",
    highlights: [
      "3 курорта за один день: Роза Хутор, Красная Поляна, Газпром",
      "Канатная дорога до 2320 м (по желанию)",
      "Финал в Олимпийском парке с шоу фонтанов",
      "Из Сочи: взрослый/детский 800 ₽",
      "Из Адлера: взрослый/детский 500 ₽",
    ],
    image: "/img/excu/kraspol/roza-hutor.webp",
    images: [
      "/img/excu/kraspol/roza-hutor.webp",
      "/img/excu/kraspol/roza-hutor-2.webp",
      "/img/excu/kraspol/photo_2026-03-12_22-31-12.webp",
      "/img/excu/kraspol/IMG-20230703-WA0005.webp",
    ],
    duration: "10–12 часов",
    durationHours: 11,
    price: 500,
    category: "nature",
    rating: 4.8,
    reviewCount: 245,
    maxPeople: 20,
    city: "Сочи",
    isFeatured: true,
    featuredLabel: "Топ выбор",
  },
  {
    id: "33-vodopada-adygejskoe-shou",
    title: "33 водопада и адыгейское шоу",
    description:
      "Каскад 33 водопадов в долине Шахе, переправа на ГАЗ-66, дегустации и вечерняя программа с адыгскими танцами.",
    fullDescription:
      "Маршрут проходит по долине реки Шахе к каскаду 33 водопадов в Колхидском лесу. В программе дегустация адыгейского сыра, горного мёда, вина и чачи, а также переправа на ГАЗ-66. В среду и субботу доступен вариант с национальным застольем и шоу-программой.",
    highlights: [
      "Выезд в 11:00",
      "Каскад 33 водопадов в долине Шахе",
      "Переправа через реку на ГАЗ-66",
      "Вт/Чт без застолья: взрослый 2100 ₽, дети 1800 ₽",
      "Ср/Сб с застольем: взрослый 2500 ₽, дети 2200 ₽",
    ],
    image: "/img/excu/33/vodopad1.webp",
    images: [
      "/img/excu/33/vodopad1.webp",
      "/img/excu/33/vodopad3.webp",
      "/img/excu/33/vodopad14.webp",
      "/img/excu/33/photo_2026-03-14_11-59-51.webp",
      "/img/excu/33/photo_2026-03-15_10-22-11.webp",
      "/img/excu/33/photo_2026-02-11_22-29-37.webp",
      "/img/excu/33/IMG-20230705-WA0157.webp",
    ],
    duration: "9–11 часов",
    durationHours: 10,
    price: 2100,
    category: "nature",
    isFeatured: true,
    rating: 4.7,
    reviewCount: 189,
    maxPeople: 20,
    city: "Сочи",
  },
  {
    id: "obzornaya-sochi-macesta-agura",
    title: "Обзорная по Сочи: Морвокзал, Мацеста, Агурские водопады",
    description:
      "Комбинированная экскурсия по Сочи с архитектурой сталинского ампира, природными локациями и морской прогулкой.",
    fullDescription:
      "Экскурсия знакомит с Морским вокзалом Сочи, историей курорта Мацеста и маршрутом к Агурским водопадам. По желанию можно добавить обед и прогулку на теплоходе. Экологический сбор на Агурских водопадах оплачивается отдельно. Для гостей из Центрального Сочи сбор у Морского порта.",
    highlights: [
      "Морской вокзал, Мацеста и Агурские водопады",
      "Экосбор: 250 ₽ (до 18 лет бесплатно)",
      "По желанию: теплоход 1000 ₽ взрослый / 500 ₽ детский",
      "Взрослый билет: 1200 ₽",
      "Детский билет (от 5 лет): 1200 ₽",
    ],
    image: "/img/excu/sochimacesta/morvokzal.webp",
    images: [
      "/img/excu/sochimacesta/morvokzal.webp",
      "/img/excu/busiki/IMG-20230630-WA0046.webp",
      "/img/excu/busiki/IMG-20250311-WA0003.webp",
    ],
    duration: "7 часов",
    durationHours: 7,
    price: 1200,
    category: "sightseeing",
    rating: 4.7,
    reviewCount: 156,
    maxPeople: 20,
    city: "Сочи",
    isFeatured: true,
    featuredLabel: "Популярная",
  },
  {
    id: "skajpark",
    title: "Скайпарк: подвесные мосты, банджи, троллей",
    description:
      "Экстрим-парк над ущельем Мзымты. Подвесные мосты, банджи-джампинг, троллей и качели над пропастью.",
    fullDescription:
      "Экстрим-парк над ущельем Мзымты. Подвесные мосты на высоте до 100 метров, банджи-джампинг, троллей и панорамные смотровые площадки. Отличный вариант для любителей активного отдыха и ярких эмоций.",
    highlights: [
      "Трансфер включён",
      "Входы в парк включены",
      "Инструктаж и страховка",
      "Свободное время для активностей",
    ],
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    duration: "3–4 часа",
    durationHours: 3.5,
    price: 2500,
    category: "adventure",
    rating: 4.8,
    reviewCount: 203,
    maxPeople: 15,
    city: "Сочи",
  },
  {
    id: "kvadrocikly-zapovednik",
    title: "Квадроциклы по заповедным местам",
    description:
      "Маршрут по горным тропам, броды через реки и смотровые площадки с панорамами Кавказа.",
    fullDescription:
      "Поездка на квадроциклах по живописным маршрутам в окрестностях Сочи: лесные дороги, броды, подъёмы и смотровые точки. Подходит для тех, кто хочет совместить природу и адреналин.",
    highlights: [
      "Квадроцикл и топливо",
      "Шлем и защита",
      "Сопровождение инструктора",
      "Страховка",
    ],
    image: "https://images.unsplash.com/photo-1558981285-6f0c68243e32?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558981285-6f0c68243e32?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    duration: "3–4 часа",
    durationHours: 3.5,
    price: 4500,
    category: "adventure",
    rating: 4.6,
    reviewCount: 98,
    maxPeople: 10,
    city: "Сочи",
  },
  {
    id: "dzhip-tur-psaho",
    title: "Джип-тур по каньону Псахо",
    description:
      "Внедорожный маршрут по каньону Псахо: броды, горные дороги, водопады и природные купели.",
    fullDescription:
      "Джип-тур по живописным местам каньона Псахо с переездами по бездорожью и остановками на ключевых точках маршрута. В программе природные локации, фото-паузы и дегустация местных продуктов.",
    highlights: [
      "Джип с опытным водителем",
      "Сопровождение гида",
      "Остановки на локациях",
      "Дегустация местных продуктов",
    ],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    duration: "6–7 часов",
    durationHours: 6.5,
    price: 3500,
    category: "adventure",
    rating: 4.7,
    reviewCount: 134,
    maxPeople: 8,
    city: "Сочи",
  },
  {
    id: "olimpijskij-park-shou-fontanov",
    title: "Олимпийский парк и вечернее шоу фонтанов",
    description:
      "Прогулка по объектам Олимпиады-2014 и вечернее шоу поющих фонтанов на Медальной площади.",
    fullDescription:
      "Экскурсия по Олимпийскому парку с рассказом об объектах Игр-2014: стадион «Фишт», ледовые арены и спортивный кластер. Завершение программы — музыкальное шоу фонтанов.",
    highlights: [
      "Гид-экскурсовод",
      "Прогулка по Олимпийскому парку",
      "Шоу фонтанов",
      "Вечерний формат",
    ],
    image: "/img/excu/olimppark/olimp-park.webp",
    images: [
      "/img/excu/olimppark/olimp-park.webp",
      "/img/excu/olimppark/IMG-20230703-WA0016.webp",
    ],
    duration: "4–5 часов",
    durationHours: 4.5,
    price: 1500,
    category: "sightseeing",
    rating: 4.6,
    reviewCount: 178,
    maxPeople: 20,
    city: "Сочи",
  },
  {
    id: "sochi-gora-ahun",
    title: "Обзорная экскурсия «Сочи и гора Ахун»",
    description:
      "Классическая обзорная по Сочи с подъёмом на гору Ахун и панорамными видами на город, море и горы.",
    fullDescription:
      "Экскурсия по ключевым локациям Сочи: центр города, Морской порт и прогулочные районы. Далее подъём на гору Ахун (663 м), откуда открываются широкие панорамы побережья и Кавказских гор.",
    highlights: [
      "Обзорная часть по городу",
      "Подъём на Ахун (663 м)",
      "Панорамные точки",
      "Сопровождение гида",
    ],
    image: "/img/excu/sochiakhun/photo_2026-02-11_22-32-45.webp",
    images: [
      "/img/excu/sochiakhun/photo_2026-02-11_22-32-45.webp",
    ],
    duration: "6–8 часов",
    durationHours: 7,
    price: 2500,
    category: "sightseeing",
    rating: 4.8,
    reviewCount: 221,
    maxPeople: 20,
    city: "Сочи",
  },
]

export const yachts: Yacht[] = [
  // ═══════════════════════════════════════════
  // АДЛЕР — Имеретинский порт
  // ═══════════════════════════════════════════
  {
    id: "adel",
    name: "Адель",
    nameRu: "Beneteau Gran Turismo 34",
    description:
      "Элегантный французский спорт-круизер длиной 10 м с хардтопом и просторной носовой зоной для отдыха.",
    fullDescription:
      "Адель — стильный французский спорт-круизер Beneteau Gran Turismo 34 длиной 10,1 м. Хардтоп защищает от солнца и дождя, а полузакрытый салон с кухней-камбузом, холодильником и Bluetooth-аудио создаёт уют на борту. Носовая площадка с мягкими матрасами идеальна для загара. Подходит для прогулок вдоль побережья компанией до 10 человек.",
    image: "/img/yachts/adler/adel/adel1.webp",
    images: [
      "/img/yachts/adler/adel/adel1.webp",
      "/img/yachts/adler/adel/adel2.webp",
      "/img/yachts/adler/adel/adel3.webp",
      "/img/yachts/adler/adel/adel4.webp",
    ],
    length: 10.1,
    capacity: 10,
    pricePerHour: 12000,
    features: [
      "Хардтоп",
      "Камбуз с холодильником",
      "Bluetooth-аудио",
      "Носовая зона отдыха",
      "Каюта с санузлом",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Просторная носовая площадка для загара",
      "Полузакрытый салон с защитой от непогоды",
      "Полностью оборудованный камбуз",
      "Купальная платформа на корме",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "azimut52",
    name: "Azimut 52",
    nameRu: "Azimut 52 Flybridge",
    description:
      "Престижная итальянская яхта 16 м с флайбриджем, тремя каютами и элегантным салоном — для VIP-отдыха.",
    fullDescription:
      "Azimut 52 — представительная итальянская моторная яхта длиной 15,9 м с просторным флайбриджем и панорамным обзором побережья. Три каюты с отдельными санузлами, элегантный салон с отделкой натуральным деревом и мрамором, полноценная кухня. Два двигателя Caterpillar мощностью 1320 л.с. обеспечивают скорость до 32 узлов. Идеальный выбор для корпоративов, юбилеев и VIP-прогулок.",
    image: "/img/yachts/adler/azimut52/azimut521.webp",
    images: [
      "/img/yachts/adler/azimut52/azimut521.webp",
      "/img/yachts/adler/azimut52/azimut522.webp",
      "/img/yachts/adler/azimut52/azimut523.webp",
      "/img/yachts/adler/azimut52/azimut524.webp",
      "/img/yachts/adler/azimut52/azimut525.webp",
      "/img/yachts/adler/azimut52/azimut526.webp",
      "/img/yachts/adler/azimut52/azimut527.webp",
      "/img/yachts/adler/azimut52/azimut528.webp",
      "/img/yachts/adler/azimut52/azimut529.webp",
      "/img/yachts/adler/azimut52/azimut5210.webp",
      "/img/yachts/adler/azimut52/azimut5211.webp",
    ],
    length: 15.9,
    capacity: 10,
    pricePerHour: 25000,
    features: [
      "Флайбридж",
      "3 каюты с санузлами",
      "Кондиционер",
      "Кухня-камбуз",
      "Аудиосистема",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Флайбридж с панорамным обзором",
      "Три каюты с индивидуальными санузлами",
      "Элегантный салон с отделкой деревом",
      "Кондиционер во всех помещениях",
      "Кормовая платформа для купания",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "boston",
    name: "Boston",
    nameRu: "Glastron GS 259",
    description:
      "Спортивный американский катер 7,7 м — быстрый, компактный и доступный вариант для небольшой компании.",
    fullDescription:
      "Boston — динамичный американский катер Glastron GS 259 длиной 7,7 м. Кожаные сиденья, купальная платформа, тент-бимини и компактная каюта с двумя спальными местами. Мощный двигатель Mercury разгоняет катер до 35 узлов. Самый доступный вариант во флоте — отличный выбор для быстрой морской прогулки или рыбалки компанией до 8 человек.",
    image: "/img/yachts/adler/boston/boston1.webp",
    images: [
      "/img/yachts/adler/boston/boston1.webp",
      "/img/yachts/adler/boston/boston2.webp",
      "/img/yachts/adler/boston/boston3.webp",
      "/img/yachts/adler/boston/boston4.webp",
      "/img/yachts/adler/boston/boston5.webp",
      "/img/yachts/adler/boston/boston6.webp",
    ],
    length: 7.7,
    capacity: 8,
    pricePerHour: 8000,
    features: [
      "Тент-бимини",
      "Кожаные сиденья",
      "Купальная платформа",
      "Каюта с 2 спальными местами",
      "Аудиосистема",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Скорость до 35 узлов",
      "Компактная каюта для отдыха",
      "Купальная платформа на корме",
      "Самый доступный вариант во флоте",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "bruno",
    name: "Bruno",
    nameRu: "Primatist G41",
    description:
      "Итальянский спорт-круизер 12,7 м с хардтопом, премиальным интерьером и возможностью аренды водных развлечений.",
    fullDescription:
      "Bruno — стильный итальянский спорт-круизер Bruno Abbate Primatist G41 длиной 12,7 м. Кожаный салон с отделкой деревом венге, хардтоп, полноценный камбуз с душевой. Два дизельных двигателя Volvo Penta обеспечивают скорость до 30 узлов. Дополнительно доступны гидроцикл, флайборд, вейкборд и рыболовные снасти. Отличный выбор для активного отдыха на воде.",
    image: "/img/yachts/adler/bruno/bruno1.webp",
    images: [
      "/img/yachts/adler/bruno/bruno1.webp",
      "/img/yachts/adler/bruno/bruno2.webp",
      "/img/yachts/adler/bruno/bruno3.webp",
      "/img/yachts/adler/bruno/bruno4.webp",
      "/img/yachts/adler/bruno/bruno5.webp",
      "/img/yachts/adler/bruno/bruno6.webp",
      "/img/yachts/adler/bruno/bruno7.webp",
      "/img/yachts/adler/bruno/bruno8.webp",
      "/img/yachts/adler/bruno/bruno9.webp",
      "/img/yachts/adler/bruno/bruno10.webp",
    ],
    length: 12.7,
    capacity: 11,
    pricePerHour: 14000,
    features: [
      "Хардтоп",
      "Кожаный салон",
      "Камбуз с душевой",
      "Аудиосистема",
      "Водные развлечения (доп.)",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Премиальный интерьер с отделкой венге",
      "Полноценный камбуз и душевая",
      "Гидроцикл и флайборд (по запросу)",
      "Скорость до 30 узлов",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "casablanca",
    name: "Casablanca",
    nameRu: "Primatist G43",
    description:
      "Итальянский кабриолет-круизер 13,3 м с открытым верхом, двумя каютами и зоной для загара на корме.",
    fullDescription:
      "Casablanca — элегантный итальянский спорт-круизер Bruno Abbate Primatist G43 длиной 13,3 м в стиле кабриолета. Открытый верх, две отдельные каюты, два санузла с душем, полноценный камбуз с плитой, грилем и холодильником. Кормовая платформа для купания и загара. Старшая сестра яхты Bruno — чуть просторнее и комфортнее для длительных прогулок.",
    image: "/img/yachts/adler/casablanca/casablanca1.webp",
    images: [
      "/img/yachts/adler/casablanca/casablanca1.webp",
      "/img/yachts/adler/casablanca/casablanca2.webp",
      "/img/yachts/adler/casablanca/casablanca3.webp",
      "/img/yachts/adler/casablanca/casablanca4.webp",
      "/img/yachts/adler/casablanca/casablanca5.webp",
    ],
    length: 13.3,
    capacity: 11,
    pricePerHour: 16500,
    features: [
      "Открытый верх-кабриолет",
      "2 каюты",
      "2 санузла с душем",
      "Камбуз с грилем",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Дизайн-кабриолет с открытым верхом",
      "Две приватные каюты",
      "Полноценная кухня с грилем",
      "Просторная кормовая зона для загара",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "grandezza",
    name: "Grandezza",
    nameRu: "Grandezza 27 OC",
    description:
      "Финский дэй-круизер 8,3 м со скандинавским дизайном — один из самых быстрых катеров во флоте.",
    fullDescription:
      "Grandezza — стильный финский дэй-круизер Grandezza 27 OC длиной 8,3 м. Скандинавский дизайн сочетается с отличными ходовыми качествами — скорость до 39 узлов. Закрытая каюта с камбузом и санузлом, кокпит с мягкими сиденьями и складным столом. Хардтоп защищает от солнца. Компактный, быстрый и комфортный вариант для прогулок вдоль побережья.",
    image: "/img/yachts/adler/grandezza/grandezza1.webp",
    images: [
      "/img/yachts/adler/grandezza/grandezza1.webp",
      "/img/yachts/adler/grandezza/grandezza2.webp",
      "/img/yachts/adler/grandezza/grandezza3.webp",
      "/img/yachts/adler/grandezza/grandezza4.webp",
      "/img/yachts/adler/grandezza/grandezza5.webp",
    ],
    length: 8.3,
    capacity: 8,
    pricePerHour: 12000,
    features: [
      "Хардтоп",
      "Каюта с санузлом",
      "Камбуз",
      "Кокпит со столом",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Скорость до 39 узлов",
      "Скандинавское качество и дизайн",
      "Закрытая каюта для отдыха",
      "Компактный и манёвренный",
    ],
    type: "motor",
    port: "adler",
  },
  {
    id: "tiger",
    name: "Tiger",
    nameRu: "Azimut 68 Plus",
    description:
      "Флагман флота — роскошная итальянская яхта 21,6 м с четырьмя каютами, флайбриджем и полным экипажем.",
    fullDescription:
      "Tiger — великолепная итальянская моторная яхта Azimut 68 Plus длиной 21,6 м, флагман нашего флота. Четыре каюты с индивидуальными санузлами, просторный салон с отделкой натуральным деревом, большой флайбридж с шезлонгами, кондиционер, ТВ, современный камбуз. Два двигателя MTU общей мощностью 2500 л.с. обеспечивают скорость до 34 узлов. Полностью отреставрирована в 2022 году. Максимальный уровень комфорта для VIP-мероприятий.",
    image: "/img/yachts/adler/tiger/tiger1.webp",
    images: [
      "/img/yachts/adler/tiger/tiger1.webp",
      "/img/yachts/adler/tiger/tiger2.webp",
      "/img/yachts/adler/tiger/tiger3.webp",
      "/img/yachts/adler/tiger/tiger4.webp",
      "/img/yachts/adler/tiger/tiger5.webp",
      "/img/yachts/adler/tiger/tiger6.webp",
      "/img/yachts/adler/tiger/tiger7.webp",
      "/img/yachts/adler/tiger/tiger8.webp",
      "/img/yachts/adler/tiger/tiger9.webp",
      "/img/yachts/adler/tiger/tiger10.webp",
    ],
    length: 21.6,
    capacity: 12,
    pricePerHour: 55000,
    features: [
      "Флайбридж",
      "4 каюты с санузлами",
      "Кондиционер",
      "Полный экипаж",
      "ТВ и аудиосистема",
      "Современный камбуз",
    ],
    highlights: [
      "Капитан и экипаж включены",
      "Четыре каюты с индивидуальными санузлами",
      "Просторный флайбридж с шезлонгами",
      "Кондиционер во всех помещениях",
      "Полная реставрация 2022 года",
      "Премиальная отделка натуральным деревом",
    ],
    type: "motor",
    port: "adler",
  },

  // ═══════════════════════════════════════════
  // СОЧИ — Порт Сочи
  // ═══════════════════════════════════════════
  {
    id: "alexum",
    name: "Алексум",
    nameRu: "Elegance 64",
    description:
      "VIP-яхта 20 м с флайбриджем, тремя каютами и водными игрушками — флагман сочинского флота.",
    fullDescription:
      "Алексум — немецкая моторная яхта Drettmann Elegance 64 длиной 20 м, флагман сочинского флота. Три каюты с индивидуальными санузлами, два уровня палуб, выдвижная купальная платформа, зона BBQ и просторная зона для загара. При аренде от 5 часов в комплекте водные игрушки: Seabob, гидроцикл, водные лыжи и SUP-борд. Караоке на борту. Идеальна для VIP-мероприятий и праздников.",
    image: "/img/yachts/sochi/alexum/alexum1.webp",
    images: [
      "/img/yachts/sochi/alexum/alexum1.webp",
      "/img/yachts/sochi/alexum/alexum2.webp",
      "/img/yachts/sochi/alexum/alexum3.webp",
      "/img/yachts/sochi/alexum/alexum4.webp",
      "/img/yachts/sochi/alexum/alexum5.webp",
      "/img/yachts/sochi/alexum/alexum6.webp",
      "/img/yachts/sochi/alexum/alexum7.webp",
      "/img/yachts/sochi/alexum/alexum8.webp",
      "/img/yachts/sochi/alexum/alexum9.webp",
      "/img/yachts/sochi/alexum/alexum10.webp",
      "/img/yachts/sochi/alexum/alexum11.webp",
    ],
    length: 20.0,
    capacity: 10,
    pricePerHour: 35000,
    features: [
      "Флайбридж",
      "3 каюты с санузлами",
      "Зона BBQ",
      "Караоке",
      "Водные игрушки",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Seabob, гидроцикл и SUP (от 5 часов)",
      "Просторный флайбридж с зоной отдыха",
      "Караоке на борту",
      "Выдвижная купальная платформа",
      "Три каюты с индивидуальными санузлами",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "bellini",
    name: "Беллини",
    nameRu: "Airon Marine 345",
    description:
      "Итальянский спорт-круизер 11 м с тиковыми палубами — быстрый и доступный вариант для компании до 10 человек.",
    fullDescription:
      "Беллини — спортивный итальянский круизер Airon Marine 345 длиной 11 м. Тиковая отделка палуб, две каюты (одна двуспальная), камбуз и носовая площадка для загара. Два двигателя Volvo Penta разгоняют катер до 40 узлов — один из самых быстрых в сочинском флоте. Доступная цена и отличная динамика делают его популярным выбором для морских прогулок.",
    image: "/img/yachts/sochi/bilini/bilini1.webp",
    images: [
      "/img/yachts/sochi/bilini/bilini1.webp",
      "/img/yachts/sochi/bilini/bilini2.webp",
      "/img/yachts/sochi/bilini/bilini3.webp",
      "/img/yachts/sochi/bilini/bilini4.webp",
      "/img/yachts/sochi/bilini/bilini5.webp",
      "/img/yachts/sochi/bilini/bilini6.webp",
      "/img/yachts/sochi/bilini/bilini7.webp",
    ],
    length: 11.0,
    capacity: 10,
    pricePerHour: 7500,
    features: [
      "Тиковые палубы",
      "2 каюты",
      "Камбуз",
      "Носовая зона отдыха",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Скорость до 40 узлов",
      "Тиковая отделка палуб",
      "Две каюты для отдыха",
      "Один из самых доступных вариантов",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "bumerang",
    name: "Бумеранг",
    nameRu: "Princess 58",
    description:
      "Британская двухпалубная яхта 17,9 м с флайбриджем, стабилизаторами и мастер-каютой во всю ширину корпуса.",
    fullDescription:
      "Бумеранг — премиальная британская моторная яхта Princess 58 длиной 17,9 м. Три гостевые каюты и отдельная каюта экипажа, стабилизаторы качки Seakeeper, просторный флайбридж с тиковым покрытием и зоной BBQ. Мастер-каюта занимает всю ширину корпуса. Два двигателя Volvo Penta мощностью 1600 л.с. обеспечивают крейсерскую скорость 25 узлов. Гидроцикл и Seabob доступны по запросу.",
    image: "/img/yachts/sochi/bumerang/bumerang1.webp",
    images: [
      "/img/yachts/sochi/bumerang/bumerang1.webp",
      "/img/yachts/sochi/bumerang/bumerang2.webp",
      "/img/yachts/sochi/bumerang/bumerang3.webp",
      "/img/yachts/sochi/bumerang/bumerang4.webp",
      "/img/yachts/sochi/bumerang/bumerang5.webp",
      "/img/yachts/sochi/bumerang/bumerang6.webp",
    ],
    length: 17.9,
    capacity: 10,
    pricePerHour: 38000,
    features: [
      "Флайбридж с BBQ",
      "3 каюты + каюта экипажа",
      "Стабилизаторы Seakeeper",
      "Кондиционер",
      "Тиковые палубы",
      "Водные игрушки (доп.)",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Стабилизаторы качки для комфортного хода",
      "Мастер-каюта во всю ширину корпуса",
      "Флайбридж с зоной BBQ",
      "Гидроцикл и Seabob по запросу",
      "Кондиционер во всех помещениях",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "grace",
    name: "Грейс",
    nameRu: "Monterey 270 Cruiser",
    description:
      "Компактный американский круизер 9,1 м — уютный и доступный вариант для семейных морских прогулок.",
    fullDescription:
      "Грейс — американский спорт-круизер Monterey 270 длиной 9,1 м. Две каюты, камбуз с плитой, холодильником и раковиной, палубные сиденья со столом и второй холодильник на палубе. Широкая купальная платформа удобна для входа в воду. Компактный и уютный вариант для семейных прогулок, романтических выходов и рыбалки компанией до 8 человек.",
    image: "/img/yachts/sochi/grace/grace1.webp",
    images: [
      "/img/yachts/sochi/grace/grace1.webp",
      "/img/yachts/sochi/grace/grace2.webp",
      "/img/yachts/sochi/grace/grace3.webp",
      "/img/yachts/sochi/grace/grace4.webp",
      "/img/yachts/sochi/grace/grace5.webp",
    ],
    length: 9.1,
    capacity: 8,
    pricePerHour: 6000,
    features: [
      "2 каюты",
      "Камбуз с плитой",
      "2 холодильника",
      "Купальная платформа",
      "Палубные сиденья со столом",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Два холодильника на борту",
      "Полноценный камбуз с плитой",
      "Широкая купальная платформа",
      "Самый доступный вариант в Сочи",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "indigo",
    name: "Индиго",
    nameRu: "Elan E3",
    description:
      "Парусная яхта 9,3 м — для тех, кто хочет настоящий парусный опыт на Чёрном море.",
    fullDescription:
      "Индиго — европейская парусная яхта Elan E3 длиной 9,3 м, спроектированная Humphreys Yacht Design. Две каюты с двуспальными кроватями, оборудованный камбуз, закрытый санузел с душем. Грот 30 м² и спинакер 75 м² обеспечивают отличный ход под парусами. Стоянка в Сочи Гранд Марина. Единственная парусная яхта в нашем флоте — для тех, кто ценит тишину моря и силу ветра.",
    image: "/img/yachts/sochi/indigo/indigo1.webp",
    images: [
      "/img/yachts/sochi/indigo/indigo1.webp",
      "/img/yachts/sochi/indigo/indigo2.webp",
      "/img/yachts/sochi/indigo/indigo3.webp",
      "/img/yachts/sochi/indigo/indigo4.webp",
      "/img/yachts/sochi/indigo/indigo5.webp",
      "/img/yachts/sochi/indigo/indigo6.webp",
      "/img/yachts/sochi/indigo/indigo7.webp",
      "/img/yachts/sochi/indigo/indigo8.webp",
    ],
    length: 9.3,
    capacity: 8,
    pricePerHour: 8000,
    features: [
      "Паруса (грот + спинакер)",
      "2 каюты",
      "Камбуз",
      "Санузел с душем",
      "Вспомогательный двигатель",
    ],
    highlights: [
      "Капитан включён",
      "Настоящий парусный опыт",
      "Две каюты с двуспальными кроватями",
      "Стоянка в Сочи Гранд Марина",
      "Единственная парусная яхта во флоте",
    ],
    type: "sailing",
    port: "sochi",
  },
  {
    id: "phantom",
    name: "Фантом",
    nameRu: "Fairline Phantom 38",
    description:
      "Стильная британская яхта 11,4 м с флайбриджем, двумя каютами и элегантным интерьером.",
    fullDescription:
      "Фантом — британская моторная яхта Fairline Phantom 38 длиной 11,4 м. Два двигателя Volvo Penta мощностью 740 л.с., крейсерская скорость 17 узлов, максимальная 32 узла. Две каюты, обеденная зона, оборудованная кухня. Элегантный интерьер и отличное техническое состояние. Универсальный выбор для компании до 10 человек — морские прогулки, праздники и корпоративы.",
    image: "/img/yachts/sochi/phantom/phantom1.webp",
    images: [
      "/img/yachts/sochi/phantom/phantom1.webp",
      "/img/yachts/sochi/phantom/phantom2.webp",
      "/img/yachts/sochi/phantom/phantom3.webp",
      "/img/yachts/sochi/phantom/phantom4.webp",
      "/img/yachts/sochi/phantom/phantom5.webp",
    ],
    length: 11.4,
    capacity: 10,
    pricePerHour: 14000,
    features: [
      "Флайбридж",
      "2 каюты",
      "Оборудованная кухня",
      "Обеденная зона",
      "Купальная платформа",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Британское качество Fairline",
      "Две каюты для отдыха",
      "Скорость до 32 узлов",
      "Элегантный интерьер",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "princessaanastasiya",
    name: "Принцесса Анастасия",
    nameRu: "Cruisers Yachts 330",
    description:
      "Быстрый американский круизер 10,8 м с увеличенным салоном — до 40 узлов и 11 пассажиров.",
    fullDescription:
      "Принцесса Анастасия — американский спорт-круизер Cruisers Yachts 330 Express длиной 10,8 м. Увеличенный салон, кондиционер, микроволновая печь, холодильник, ТВ, просторная купальная платформа и зона для загара. Мощные двигатели разгоняют яхту до 40 узлов. Вмещает до 11 пассажиров — отличный вариант для семейных прогулок, праздников и скоростных морских выходов.",
    image: "/img/yachts/sochi/princessaanastasiya/anastasiya1.webp",
    images: [
      "/img/yachts/sochi/princessaanastasiya/anastasiya1.webp",
      "/img/yachts/sochi/princessaanastasiya/anastasiya2.webp",
      "/img/yachts/sochi/princessaanastasiya/anastasiya3.webp",
      "/img/yachts/sochi/princessaanastasiya/anastasiya4.webp",
    ],
    length: 10.8,
    capacity: 11,
    pricePerHour: 8500,
    features: [
      "Кондиционер",
      "ТВ",
      "Микроволновая печь",
      "Холодильник",
      "Купальная платформа",
      "Зона загара",
    ],
    highlights: [
      "Капитан и топливо включены",
      "Скорость до 40 узлов",
      "Кондиционер в салоне",
      "Увеличенный салон для 11 гостей",
      "Просторная купальная платформа",
    ],
    type: "motor",
    port: "sochi",
  },
  {
    id: "princessa45",
    name: "Принцесса 45",
    nameRu: "Princess 45 Flybridge",
    description:
      "Элегантная британская яхта 13,9 м с флайбриджем от Princess Yachts — комфорт и стиль для 11 гостей.",
    fullDescription:
      "Принцесса 45 — британская моторная яхта Princess 45 Flybridge длиной 13,9 м от знаменитой верфи Princess Yachts. Продуманный салон, камбуз с плитой, микроволновой печью и холодильником, ТВ и аудиосистема. Флайбридж с обзором на 360°. Два дизельных двигателя Volvo Penta обеспечивают скорость до 33 узлов. Стоянка у Морского вокзала Сочи. Капитан, бельё и посуда включены.",
    image: "/img/yachts/sochi/princissa45/princessa451.webp",
    images: [
      "/img/yachts/sochi/princissa45/princessa451.webp",
      "/img/yachts/sochi/princissa45/princessa452.webp",
      "/img/yachts/sochi/princissa45/princessa453.webp",
      "/img/yachts/sochi/princissa45/princessa454.webp",
      "/img/yachts/sochi/princissa45/princessa455.webp",
      "/img/yachts/sochi/princissa45/princessa456.webp",
      "/img/yachts/sochi/princissa45/princessa457.webp",
    ],
    length: 13.9,
    capacity: 11,
    pricePerHour: 25000,
    features: [
      "Флайбридж",
      "2–3 каюты",
      "Камбуз с плитой",
      "ТВ и аудиосистема",
      "Кондиционер",
    ],
    highlights: [
      "Капитан, бельё и посуда включены",
      "Флайбридж с обзором 360°",
      "Камбуз с плитой, СВЧ и холодильником",
      "Стоянка у Морского вокзала Сочи",
      "Скорость до 33 узлов",
      "Британское качество Princess Yachts",
    ],
    type: "motor",
    port: "sochi",
  },
]

export const groupTrips: GroupTrip[] = [
  {
    id: "sea-cruise-90",
    title: "Морская прогулка 1,5 часа на парусной яхте",
    description:
      "Морская прогулка на 1,5 часа из порта Имеретинский: панорамы побережья, Кавказские горы, шанс увидеть дельфинов.",
    fullDescription:
      "Морская прогулка на парусной яхте длительностью 1,5 часа. Отправление из Адлера, порт Имеретинский (Морской бульвар, 1). На борту можно взять еду и напитки (кроме напитков красного цвета). Возможны индивидуальные форматы: романтические выходы, небольшие праздники и фотопрогулки. Для подтверждения брони нужна предоплата.",
    duration: "1,5 часа",
    pricePerTicket: 2200,
    port: "Порт Имеретинский",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    highlights: [
      "Индивидуальные форматы по запросу",
      "Отправление из порта Имеретинский",
      "Шанс увидеть дельфинов в открытом море",
      "Можно взять с собой еду и напитки",
      "Судно оснащено спасательными средствами",
    ],
    isFeatured: true,
    featuredLabel: "1,5 часа",
  },
  {
    id: "sea-cruise",
    title: "Морская прогулка",
    description:
      "Групповая морская прогулка вдоль живописного побережья. Идеально для тех, кто хочет насладиться морем в компании.",
    fullDescription:
      "Присоединяйтесь к групповой морской прогулке на комфортабельном катере. Вас ждут потрясающие виды на побережье, остановка для купания в открытом море, прохладительные напитки на борту и отличное настроение.",
    duration: "45 минут",
    pricePerTicket: 2200,
    port: "Порт Сочи",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    highlights: [
      "Живописное побережье",
      "Остановка для купания",
      "Напитки на борту",
      "Групповой формат",
    ],
  },
  {
    id: "sea-fishing",
    title: "Морская рыбалка",
    description:
      "Групповая морская рыбалка с опытным капитаном. Снасти и наживка включены в стоимость.",
    fullDescription:
      "Отправляйтесь на морскую рыбалку в открытое море! Опытный капитан отвезёт вас к лучшим рыбным местам. Все снасти и наживка включены в стоимость. Вы сможете поймать дораду, сибаса, барракуду и другие виды рыб. Улов можно забрать с собой.",
    duration: "3 часа",
    pricePerTicket: 3000,
    port: "Порт Сочи",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    highlights: [
      "Опытный капитан",
      "Снасти включены",
      "Лучшие рыбные места",
      "Улов с собой",
    ],
  },
]

export interface Review {
  id: string
  name: string
  rating: number
  text: string
  service?: string
  date: string
  avatar: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
  avatar: string
  serviceId?: string
}

export const testimonials: Testimonial[] = [
  // ── Яхта Tiger (Адлер) ──
  {
    id: "t1",
    name: "Дмитрий Козлов",
    location: "Санкт-Петербург",
    text: "Арендовали Tiger на юбилей — четыре каюты, флайбридж с видом на горы, экипаж на высшем уровне. Лучший отдых за последние годы!",
    rating: 5,
    avatar: "ДК",
    serviceId: "tiger",
  },
  {
    id: "t-tiger-2",
    name: "Ирина Попова",
    location: "Пермь",
    text: "Tiger — это настоящая роскошь. 21 метр, просторные каюты, кондиционер. Дошли до Абхазии и обратно — незабываемо!",
    rating: 5,
    avatar: "ИП",
    serviceId: "tiger",
  },
  // ── Яхта Azimut 52 (Адлер) ──
  {
    id: "t-azimut-1",
    name: "Михаил Петров",
    location: "Новосибирск",
    text: "Azimut 52 — итальянский шик и мощь. Три каюты, элегантный салон, скорость. За час дошли до мыса Видный. Экипаж профессиональный.",
    rating: 5,
    avatar: "МП",
    serviceId: "azimut52",
  },
  {
    id: "t-azimut-2",
    name: "Сергей Николаев",
    location: "Ростов-на-Дону",
    text: "Брали Azimut 52 для корпоратива. Флайбридж, музыка, купание в открытом море — всё организовали идеально.",
    rating: 5,
    avatar: "СН",
    serviceId: "azimut52",
  },
  // ── Яхта Bruno (Адлер) ──
  {
    id: "t-bruno-1",
    name: "Наталья Иванова",
    location: "Самара",
    text: "Bruno — отличный катер для активного отдыха. Взяли гидроцикл и флайборд дополнительно — дети были в восторге!",
    rating: 5,
    avatar: "НИ",
    serviceId: "bruno",
  },
  {
    id: "t-bruno-2",
    name: "Виктор Соколов",
    location: "Уфа",
    text: "Стильная итальянская яхта Bruno с кожаным салоном. Прогулка вдоль побережья Адлера — просто сказка.",
    rating: 5,
    avatar: "ВС",
    serviceId: "bruno",
  },
  // ── Яхта Алексум (Сочи) ──
  {
    id: "t-alexum-1",
    name: "Андрей Волков",
    location: "Тюмень",
    text: "Алексум — флагман сочинского флота. 20 метров, караоке, водные игрушки. Отмечали юбилей — всё было на высшем уровне.",
    rating: 5,
    avatar: "АВ",
    serviceId: "alexum",
  },
  {
    id: "t-alexum-2",
    name: "Светлана Козлова",
    location: "Омск",
    text: "Elegance 64 превзошла ожидания. Закат с флайбриджа, дельфины рядом с бортом, Seabob в комплекте. Непередаваемые эмоции.",
    rating: 5,
    avatar: "СК",
    serviceId: "alexum",
  },
  // ── Яхта Индиго (Сочи) ──
  {
    id: "t-indigo-1",
    name: "Роман Новиков",
    location: "Челябинск",
    text: "Индиго — единственная парусная яхта во флоте. Тишина, только ветер в парусах и плеск волн. Настоящий парусный опыт!",
    rating: 5,
    avatar: "РН",
    serviceId: "indigo",
  },
  {
    id: "t-indigo-2",
    name: "Юлия Морозова",
    location: "Красноярск",
    text: "Романтический день на парусной яхте Индиго — лучший подарок на годовщину. Шампанское, закат, паруса. Спасибо капитану!",
    rating: 5,
    avatar: "ЮМ",
    serviceId: "indigo",
  },
  // ── Яхта Бумеранг (Сочи) ──
  {
    id: "t-bumerang-1",
    name: "Илья Фёдоров",
    location: "Волгоград",
    text: "Princess 58 Бумеранг — настоящая британская роскошь. Стабилизаторы качки, просторный флайбридж, BBQ. Идеальная яхта для 10 человек.",
    rating: 5,
    avatar: "ИФ",
    serviceId: "bumerang",
  },
  {
    id: "t-bumerang-2",
    name: "Мария Алексеева",
    location: "Тверь",
    text: "Бумеранг — лучший выбор в Сочи для большой компании. Мастер-каюта во всю ширину, тиковые палубы, гидроцикл. Идеальный день!",
    rating: 5,
    avatar: "МА",
    serviceId: "bumerang",
  },
  // ── Экскурсия Абхазия (abhaziya-zolotoe-koltso) ──
  {
    id: "t2",
    name: "Анна Смирнова",
    location: "Москва",
    text: "Золотое кольцо Абхазии превзошло все ожидания! Озеро Рица, Новый Афон — невероятная красота. Гид был очень знающим.",
    rating: 5,
    avatar: "АС",
    serviceId: "abhaziya-zolotoe-koltso",
  },
  {
    id: "t-abh-2",
    name: "Денис Лебедев",
    location: "Томск",
    text: "Абхазия — это отдельный мир. Пещеры Нового Афона, озеро Рица в утреннем тумане. Гид рассказывал интересно, не занудно.",
    rating: 5,
    avatar: "ДЛ",
    serviceId: "abhaziya-zolotoe-koltso",
  },
  // ── Красная Поляна 5 в 1 ──
  {
    id: "t-kp-1",
    name: "Анастасия Семёнова",
    location: "Воронеж",
    text: "Красная Поляна 5 в 1 — за один день объездили всё! Розу, Газпром, Горки, дамбу и Олимпийский парк. Устали, но впечатления незабываемые.",
    rating: 5,
    avatar: "АС",
    serviceId: "krasnaya-polyana-5-v-1",
  },
  {
    id: "t-kp-2",
    name: "Евгений Орлов",
    location: "Липецк",
    text: "Отличная экскурсия для первого знакомства с Красной Поляной. Гид знает все секретные смотровые площадки. Рекомендую!",
    rating: 5,
    avatar: "ЕО",
    serviceId: "krasnaya-polyana-5-v-1",
  },
  // ── 33 водопада ──
  {
    id: "t-vod-1",
    name: "Валерия Виноградова",
    location: "Брянск",
    text: "33 водопада — это фантастика! Свежий воздух, брызги, зелень. Адыгейское шоу в конце очень понравилось — вкусная еда и танцы.",
    rating: 5,
    avatar: "ВВ",
    serviceId: "33-vodopada-adygejskoe-shou",
  },
  {
    id: "t-vod-2",
    name: "Константин Зайцев",
    location: "Курск",
    text: "Маршрут по водопадам — умеренная сложность, подходит для любого возраста. Национальная кухня в финале — объедение!",
    rating: 5,
    avatar: "КЗ",
    serviceId: "33-vodopada-adygejskoe-shou",
  },
  // ── Обзорная Сочи ──
  {
    id: "t-obs-1",
    name: "Оксана Павлова",
    location: "Тула",
    text: "Обзорная экскурсия по Сочи — лучший способ познакомиться с городом. Морвокзал, Мацеста, Агурские водопады за один день!",
    rating: 5,
    avatar: "ОП",
    serviceId: "obzornaya-sochi-macesta-agura",
  },
  {
    id: "t-obs-2",
    name: "Татьяна Васильева",
    location: "Нижний Новгород",
    text: "Первый день в Сочи провели с этим туром — всё посмотрели, всё узнали. Гид живёт здесь с детства и знает каждый уголок.",
    rating: 5,
    avatar: "ТВ",
    serviceId: "obzornaya-sochi-macesta-agura",
  },
  // ── Скайпарк ──
  {
    id: "t-sky-1",
    name: "Алексей Смирнов",
    location: "Казань",
    text: "Скайпарк — для настоящих экстремалов! Банджи с моста над пропастью, троллей с видом на горы. Адреналин зашкаливает!",
    rating: 5,
    avatar: "АС",
    serviceId: "skajpark",
  },
  {
    id: "t-sky-2",
    name: "Ольга Кузнецова",
    location: "Воронеж",
    text: "Думала, не решусь, но решилась! Подвесные мосты, троллей — всё очень безопасно, инструкторы всё объясняют. Это надо пережить!",
    rating: 5,
    avatar: "ОК",
    serviceId: "skajpark",
  },
  // ── Квадроциклы ──
  {
    id: "t-quad-1",
    name: "Илья Фёдоров",
    location: "Волгоград",
    text: "Квадроциклы по заповеднику — незабываемый маршрут. Едешь через лес, речки, горные тропы. Инструктор всегда рядом.",
    rating: 5,
    avatar: "ИФ",
    serviceId: "kvadrocikly-zapovednik",
  },
  {
    id: "t-quad-2",
    name: "Андрей Волков",
    location: "Тюмень",
    text: "Взяли квадроциклы с женой — она никогда раньше не ездила, но освоилась быстро. Маршрут потрясающий, виды невероятные.",
    rating: 5,
    avatar: "АВ",
    serviceId: "kvadrocikly-zapovednik",
  },
  // ── Джип-тур Псахо ──
  {
    id: "t4",
    name: "Павел Волков",
    location: "Екатеринбург",
    text: "Джип-тур по каньону Псахо — это лучшее, что мы делали в Сочи. Природа, адреналин и вкуснейшие местные угощения — идеальное сочетание.",
    rating: 5,
    avatar: "ПВ",
    serviceId: "dzhip-tur-psaho",
  },
  {
    id: "t-jeep-2",
    name: "Роман Новиков",
    location: "Челябинск",
    text: "Каньон Псахо открывается неожиданно — едешь по лесу, и вдруг скалы, водопад, тишина. Джипы мощные, дорога интересная.",
    rating: 5,
    avatar: "РН",
    serviceId: "dzhip-tur-psaho",
  },
  // ── Олимпийский парк ──
  {
    id: "t-oly-1",
    name: "Светлана Козлова",
    location: "Омск",
    text: "Олимпийский парк — масштаб поражает. Вечернее шоу фонтанов — это фееричное зрелище, дети были в восторге!",
    rating: 5,
    avatar: "СК",
    serviceId: "olimpijskij-park-shou-fontanov",
  },
  {
    id: "t-oly-2",
    name: "Денис Лебедев",
    location: "Томск",
    text: "Фонтанное шоу в Олимпийском парке — лучший способ завершить день в Сочи. Музыка, свет, вода — профессионально и красиво.",
    rating: 5,
    avatar: "ДЛ",
    serviceId: "olimpijskij-park-shou-fontanov",
  },
  // ── Сочи и гора Ахун ──
  {
    id: "t-ahun-1",
    name: "Мария Алексеева",
    location: "Тверь",
    text: "Башня на горе Ахун — с неё виден весь Сочи! Заехали через серпантин, было немного страшно, но вид с вершины того стоил.",
    rating: 5,
    avatar: "МА",
    serviceId: "sochi-gora-ahun",
  },
  {
    id: "t-ahun-2",
    name: "Евгений Орлов",
    location: "Липецк",
    text: "Ахун открылся для меня с новой стороны. Гид рассказал историю башни и показал тайные тропы. Очень насыщенная прогулка.",
    rating: 5,
    avatar: "ЕО",
    serviceId: "sochi-gora-ahun",
  },
  // ── Морская прогулка 1,5 часа (sea-cruise-90) ──
  {
    id: "t3",
    name: "Елена Морозова",
    location: "Краснодар",
    text: "Прогулка на парусной яхте — незабываемо. Видели дельфинов прямо у борта! Спасибо команде за тёплый приём.",
    rating: 5,
    avatar: "ЕМ",
    serviceId: "sea-cruise-90",
  },
  {
    id: "t-sc90-2",
    name: "Наталья Иванова",
    location: "Самара",
    text: "Полтора часа в море пролетели незаметно. Красивые виды на берег, свежий бриз. Отличный вариант, если мало времени.",
    rating: 5,
    avatar: "НИ",
    serviceId: "sea-cruise-90",
  },
  // ── Морская прогулка (sea-cruise) ──
  {
    id: "t-sc-1",
    name: "Виктор Соколов",
    location: "Уфа",
    text: "Морская прогулка — спокойный отдых на воде. Капитан рассказывал о побережье, показывали дельфинов. Рекомендую!",
    rating: 5,
    avatar: "ВС",
    serviceId: "sea-cruise",
  },
  {
    id: "t-sc-2",
    name: "Ирина Попова",
    location: "Пермь",
    text: "Взяли прогулку всей семьёй — дети в полном восторге. Искупались в море, позагорали на борту. Очень приятный персонал.",
    rating: 5,
    avatar: "ИП",
    serviceId: "sea-cruise",
  },
  // ── Морская рыбалка (sea-fishing) ──
  {
    id: "t-fish-1",
    name: "Михаил Петров",
    location: "Новосибирск",
    text: "Морская рыбалка — отличное утро! Поймал три хорошие рыбины, капитан знает все места. Снасти и наживка включены в стоимость.",
    rating: 5,
    avatar: "МП",
    serviceId: "sea-fishing",
  },
  {
    id: "t-fish-2",
    name: "Сергей Николаев",
    location: "Ростов-на-Дону",
    text: "Рыбачил впервые в море — совсем другие ощущения. Экипаж помог, объяснил технику. Улов сварили прямо на борту!",
    rating: 5,
    avatar: "СН",
    serviceId: "sea-fishing",
  },
  // ── Абхазия доп. отзывы ──
  {
    id: "t-abh-3",
    name: "Ольга Кузнецова",
    location: "Воронеж",
    text: "Съездили с родителями — им было комфортно, темп экскурсии спокойный. Абхазия поразила чистотой природы и гостеприимством.",
    rating: 5,
    avatar: "ОК",
    serviceId: "abhaziya-zolotoe-koltso",
  },
  {
    id: "t-abh-4",
    name: "Максим Тихонов",
    location: "Пенза",
    text: "Гагра, Пицунда, озеро Рица — всё в одном дне. Гид объяснял историю каждого места. Привёз домой аджику и чачу!",
    rating: 5,
    avatar: "МТ",
    serviceId: "abhaziya-zolotoe-koltso",
  },
  // ── Красная Поляна доп. отзывы ──
  {
    id: "t-kp-3",
    name: "Яна Белова",
    location: "Белгород",
    text: "Красная Поляна 5 в 1 — насыщенная программа, скучать некогда. Роза Хутор выглядит фантастически даже летом.",
    rating: 5,
    avatar: "ЯБ",
    serviceId: "krasnaya-polyana-5-v-1",
  },
  {
    id: "t-kp-4",
    name: "Артём Захаров",
    location: "Саратов",
    text: "Поехали с женой впервые в Красную Поляну — за один день увидели всё. Отличный способ понять, что вам понравится больше всего.",
    rating: 5,
    avatar: "АЗ",
    serviceId: "krasnaya-polyana-5-v-1",
  },
  // ── 33 водопада доп. отзывы ──
  {
    id: "t-vod-3",
    name: "Людмила Орлова",
    location: "Орёл",
    text: "Водопады — это что-то из другого мира. Прохладно, зелено, брызги. После жаркого Сочи — настоящее спасение!",
    rating: 5,
    avatar: "ЛО",
    serviceId: "33-vodopada-adygejskoe-shou",
  },
  {
    id: "t-vod-4",
    name: "Павел Ершов",
    location: "Рязань",
    text: "Адыгейское шоу в конце тура — отдельное удовольствие. Живая музыка, национальные блюда, танцы. Детям очень понравилось.",
    rating: 5,
    avatar: "ПЕ",
    serviceId: "33-vodopada-adygejskoe-shou",
  },
  // ── Обзорная Сочи доп. отзывы ──
  {
    id: "t-obs-3",
    name: "Карина Лазарева",
    location: "Краснодар",
    text: "Даже я, краснодарец, открыла для себя новое в Сочи. Агурские водопады — обязательно к посещению. Гид супер!",
    rating: 5,
    avatar: "КЛ",
    serviceId: "obzornaya-sochi-macesta-agura",
  },
  {
    id: "t-obs-4",
    name: "Вадим Соловьёв",
    location: "Иркутск",
    text: "Прилетел на три дня — взял обзорную как первую экскурсию. Теперь знаю, куда возвращаться и что смотреть подробнее.",
    rating: 5,
    avatar: "ВС",
    serviceId: "obzornaya-sochi-macesta-agura",
  },
  // ── Скайпарк доп. отзывы ──
  {
    id: "t-sky-3",
    name: "Никита Громов",
    location: "Хабаровск",
    text: "Скайпарк — топ! Сделал банджи с 207-метрового моста. Страшно, но после прыжка чувствуешь себя непобедимым. Рекомендую!",
    rating: 5,
    avatar: "НГ",
    serviceId: "skajpark",
  },
  {
    id: "t-sky-4",
    name: "Диана Фролова",
    location: "Ставрополь",
    text: "Думала, троллей — это детское. Оказалось — очень круто! Летишь над ущельем, вид потрясающий. Безопасно и незабываемо.",
    rating: 5,
    avatar: "ДФ",
    serviceId: "skajpark",
  },
  // ── Квадроциклы доп. отзывы ──
  {
    id: "t-quad-3",
    name: "Борис Крылов",
    location: "Владимир",
    text: "Маршрут по заповеднику на квадроцикле — три часа пролетают как один. Грязь, броды, горные перевалы — это мощно!",
    rating: 5,
    avatar: "БК",
    serviceId: "kvadrocikly-zapovednik",
  },
  {
    id: "t-quad-4",
    name: "Марина Антонова",
    location: "Ярославль",
    text: "Взяли квадроциклы всей компанией на 6 человек. Инструктор вёл группу, помогал на сложных участках. Впечатления на год вперёд!",
    rating: 5,
    avatar: "МА",
    serviceId: "kvadrocikly-zapovednik",
  },
  // ── Джип-тур Псахо доп. отзывы ──
  {
    id: "t-jeep-3",
    name: "Глеб Тарасов",
    location: "Кострома",
    text: "Псахо — это первозданная природа. Едешь и понимаешь, что таких мест на Земле осталось немного. Водитель знает каждый камень.",
    rating: 5,
    avatar: "ГТ",
    serviceId: "dzhip-tur-psaho",
  },
  {
    id: "t-jeep-4",
    name: "Полина Медведева",
    location: "Архангельск",
    text: "Каньон Псахо поразил масштабами. Купались в горной реке, жарили шашлык. Лучший день за всю поездку в Сочи!",
    rating: 5,
    avatar: "ПМ",
    serviceId: "dzhip-tur-psaho",
  },
  // ── Олимпийский парк доп. отзывы ──
  {
    id: "t-oly-3",
    name: "Зоя Кириллова",
    location: "Мурманск",
    text: "Посетили Олимпийский парк с детьми — они были в восторге от стадионов. Вечернее шоу фонтанов просто захватывает дух!",
    rating: 5,
    avatar: "ЗК",
    serviceId: "olimpijskij-park-shou-fontanov",
  },
  {
    id: "t-oly-4",
    name: "Игорь Сафонов",
    location: "Петрозаводск",
    text: "Экскурсия по Олимпийскому парку — познавательно и зрелищно. Гид рассказал много интересного об Играх 2014 года.",
    rating: 5,
    avatar: "ИС",
    serviceId: "olimpijskij-park-shou-fontanov",
  },
  // ── Сочи и Ахун доп. отзывы ──
  {
    id: "t-ahun-3",
    name: "Алина Дорофеева",
    location: "Астрахань",
    text: "Башня на Ахуне — лучшая смотровая площадка Сочи. С высоты видны море, горы и весь город сразу. Фото получились шедевральные!",
    rating: 5,
    avatar: "АД",
    serviceId: "sochi-gora-ahun",
  },
  {
    id: "t-ahun-4",
    name: "Тимур Абрамов",
    location: "Махачкала",
    text: "Серпантин на Ахун немного пугает, но виды того стоят. Гид подождал, пока мы насладимся закатом. Очень уважительный подход.",
    rating: 5,
    avatar: "ТА",
    serviceId: "sochi-gora-ahun",
  },
]
