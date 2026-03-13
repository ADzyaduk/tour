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
  featured?: boolean
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
  pricePerDay: number
  features: string[]
  highlights: string[]
  type: "sailing" | "motor" | "catamaran"
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
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
    featured: true,
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
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
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
    featured: true,
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
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    duration: "9–11 часов",
    durationHours: 10,
    price: 2100,
    category: "nature",
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
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
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
    featured: true,
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
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=85",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
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
  {
    id: "y1",
    name: "Athena",
    nameRu: "Парусная яхта",
    description:
      "Изящная 42-футовая парусная яхта для пар и небольших компаний, ищущих романтику и приключения на воде.",
    fullDescription:
      "Athena — элегантная парусная яхта длиной 42 фута, созданная для романтических круизов и камерного отдыха до 6 человек. Чёткие обводы корпуса, просторная кормовая каюта и современное навигационное оборудование делают её идеальным выбором для тех, кто хочет сочетать комфорт с настоящим парусным духом. Каждый выход в море — это ощущение полной свободы под наполненными ветром парусами.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=85",
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    length: 42,
    capacity: 6,
    pricePerDay: 58000,
    features: [
      "Кондиционер",
      "Солнечная палуба",
      "Снаряжение для сноркелинга",
      "Bluetooth-аудио",
      "Кухня-камбуз",
    ],
    highlights: [
      "Кондиционер во всех каютах",
      "Просторная солнечная палуба",
      "Снаряжение для сноркелинга в комплекте",
      "Bluetooth-аудиосистема",
      "Полностью оборудованный камбуз",
      "Лицензированный капитан в экипаже",
    ],
    type: "sailing",
  },
  {
    id: "y2",
    name: "Poseidon",
    nameRu: "Моторная яхта",
    description:
      "Мощная 55-футовая моторная яхта с флайбриджем, гидроциклами и коком на борту — для скорости и максимального комфорта.",
    fullDescription:
      "Poseidon — представительная моторная яхта 55 футов, которая уверенно покоряет черноморские просторы, предлагая скорость, маневренность и исключительный комфорт для компании до 10 человек. Флайбридж открывает захватывающие виды на побережье, а кок на борту обеспечивает первоклассное питание в любой точке маршрута. Для любителей активного отдыха — гидроциклы и кормовая платформа для купания.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=85",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    length: 55,
    capacity: 10,
    pricePerDay: 145000,
    features: [
      "Флайбридж",
      "Гидроциклы",
      "Платформа для купания",
      "Кок на борту",
      "Аудиосистема",
      "Кондиционер",
    ],
    highlights: [
      "Флайбридж с панорамным обзором",
      "Гидроциклы в комплекте",
      "Кормовая платформа для купания",
      "Кок на борту",
      "Премиальная аудиосистема",
      "Кондиционер во всех помещениях",
    ],
    type: "motor",
  },
  {
    id: "y3",
    name: "Calypso",
    nameRu: "Катамаран",
    description:
      "Просторный 48-футовый катамаран с непревзойдённой стабильностью — идеал для семейного или корпоративного отдыха.",
    fullDescription:
      "Calypso — широкий 48-футовый катамаран с непревзойдённой стабильностью на воде и обилием пространства на борту. Идеален для семейного отдыха или большой компании: 4 отдельные каюты, сетка-трамплин между корпусами, каяки и мангал превращают каждый выход в море в настоящий праздник. Катамаран практически не качает, поэтому подходит даже тем, кто склонен к морской болезни.",
    image: "https://images.unsplash.com/photo-1621277224630-81b8f1e2ec32?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1621277224630-81b8f1e2ec32?w=1200&q=85",
      "https://images.unsplash.com/photo-1531694611353-d4758f86e607?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    ],
    length: 48,
    capacity: 12,
    pricePerDay: 95000,
    features: [
      "4 каюты",
      "Сетка-гамак",
      "Каяки",
      "Мангал",
      "Солнечные батареи",
      "Просторный салон",
    ],
    highlights: [
      "4 отдельные каюты",
      "Сетка-гамак между корпусами",
      "Каяки в комплекте",
      "Мангал на кормовой палубе",
      "Солнечные батареи",
      "Просторный салон со стереосистемой",
    ],
    type: "catamaran",
  },
  {
    id: "y4",
    name: "Olympus",
    nameRu: "Суперяхта",
    description:
      "Флагманская суперяхта 72 фута с полным экипажем, джакузи, тренажёрным залом и вертолётной площадкой.",
    fullDescription:
      "Olympus — флагман флота, 72-футовая суперяхта для тех, кто привык к лучшему. Профессиональный экипаж, джакузи на открытой палубе, тренажёрный зал, мастер-сьют с отдельным кабинетом и собственный погреб с коллекционными винами — здесь предусмотрена каждая деталь. Для компании до 14 человек это гарантия отдыха уровня пять звёзд прямо в открытом море.",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=85",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    length: 72,
    capacity: 14,
    pricePerDay: 420000,
    features: [
      "Полный экипаж",
      "Джакузи",
      "Тренажёрный зал",
      "Мастер-сьют",
      "Вертолётная площадка",
      "Консьерж-сервис",
      "Винный погреб",
    ],
    highlights: [
      "Полный профессиональный экипаж",
      "Джакузи на открытой палубе",
      "Тренажёрный зал",
      "Мастер-сьют с кабинетом",
      "Вертолётная площадка",
      "Консьерж-сервис и винный погреб",
    ],
    type: "motor",
  },
  {
    id: "y5",
    name: "Zephyr",
    nameRu: "Парусная яхта",
    description:
      "Классическая 38-футовая парусная яхта с характерным силуэтом — для тех, кто ценит дух настоящего мореплавания.",
    fullDescription:
      "Zephyr — классическая 38-футовая парусная яхта с выверенными формами и духом настоящего морского путешествия. Для небольшой компании до 4 человек это самый романтичный и искренний способ выйти в море: почувствовать силу ветра в парусах, услышать плеск волн и забыть о суете берега.",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=1200&q=85",
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    length: 38,
    capacity: 4,
    pricePerDay: 35000,
    features: [
      "Классический дизайн",
      "Автопилот",
      "Компрессор для дайвинга",
      "Картплоттер",
      "Полная кухня",
    ],
    highlights: [
      "Классический дизайн парусника",
      "Автопилот и картплоттер",
      "Компрессор для дайвинга",
      "Полностью оборудованный камбуз",
      "Уютные каюты для 4 гостей",
    ],
    type: "sailing",
  },
  {
    id: "y6",
    name: "Nereid",
    nameRu: "Катамаран",
    description:
      "Современный 60-футовый катамаран с панорамным застеклённым салоном и четырьмя каютами с личными санузлами.",
    fullDescription:
      "Nereid — современный 60-футовый катамаран с большими панорамными окнами салона и четырьмя каютами с собственными санузлами. Идеальное сочетание мореходности и домашнего уюта — этот катамаран создан для длительных выходов и ночёвок в море. Опреснитель воды, электрический тендер и кормовая палуба для вечернего звёздного неба завершают картину.",
    image: "https://images.unsplash.com/photo-1531694611353-d4758f86e607?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531694611353-d4758f86e607?w=1200&q=85",
      "https://images.unsplash.com/photo-1621277224630-81b8f1e2ec32?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    length: 60,
    capacity: 10,
    pricePerDay: 175000,
    features: [
      "Панорамный салон",
      "4 каюты с санузлами",
      "Опреснитель воды",
      "Электрический тендер",
      "Сапборды",
      "Палуба для звёздных ночей",
    ],
    highlights: [
      "Панорамный застеклённый салон",
      "4 каюты с личными санузлами",
      "Опреснитель воды на борту",
      "Электрический тендер в комплекте",
      "Сапборды для активного отдыха",
      "Открытая кормовая палуба для вечеров",
    ],
    type: "catamaran",
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

export const testimonials = [
  {
    id: "t1",
    name: "Анна Смирнова",
    location: "Москва",
    text: "Экскурсия по Абхазии превзошла все ожидания! Озеро Рица, Новый Афон — невероятная красота. Гид был очень знающим, обязательно вернёмся.",
    rating: 5,
    avatar: "АС",
  },
  {
    id: "t2",
    name: "Дмитрий Козлов",
    location: "Санкт-Петербург",
    text: "Арендовали яхту на день — команда была великолепна, еда отличная, каждая деталь продумана. Лучший отдых за последние годы!",
    rating: 5,
    avatar: "ДК",
  },
  {
    id: "t3",
    name: "Елена Морозова",
    location: "Краснодар",
    text: "Морская прогулка на парусной яхте — незабываемо. Видели дельфинов прямо у борта! Спасибо команде за тёплый приём.",
    rating: 5,
    avatar: "ЕМ",
  },
  {
    id: "t4",
    name: "Павел Волков",
    location: "Екатеринбург",
    text: "Джип-тур по каньону Псахо — это лучшее, что мы делали в Сочи. Природа, адреналин и вкуснейшие местные угощения — идеальное сочетание.",
    rating: 5,
    avatar: "ПВ",
  },
]
