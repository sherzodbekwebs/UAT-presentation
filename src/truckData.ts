export interface TruckModel {
  name: string;
  isOurProduct: boolean;
  specs: {
    wheelFormula: string;
    curbWeight: string;
    loadCapacity: string;
    enginePower: string;
    transmission: string;
    engineResource: string;
    fuelConsumption: string;
    features: string;
    tankVolume: string;
    serviceInterval: string;
    warranty: string;
    price: string;
    year: string;
    source: string;
  };
  image: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  models: TruckModel[];
}

export const truckData: Category[] = [
  {
    id: "4x2",
    title: "Тягач 4x2",
    description: "Магистральные тягачи нового поколения",
    models: [
      {
        name: "К-54901 (дизель)",
        isOurProduct: true,
        image: "./4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "9 150 кг",
          loadCapacity: "34 500 кг",
          enginePower: "Камаз-910(Р6) 460 л.с",
          transmission: "Автомат 12-ст",
          engineResource: "1,2-1,5 млн.км",
          fuelConsumption: "29-30 л/100 км",
          features: "Ровный пол кабины, 2 спальных места",
          tankVolume: "600-700 л",
          serviceInterval: "120 000 км",
          warranty: "3 года или 450 000 км",
          price: "932 848 000,0 сум",
          year: "2023 год",
          source: "Прайс UAT"
        }
      },
      {
        name: "Shacman X5000 (дизель)",
        isOurProduct: false,
        image: "./shacman4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "7 800 кг",
          loadCapacity: "36 200 кг",
          enginePower: "WEICHAI WP13.550E501, 550 л.с.",
          transmission: "Механическая 12-ст. (Fast Gear 12JSDX240TA)",
          engineResource: "1,2-1,5 млн.км",
          fuelConsumption: "28-33 л/100 км",
          features: "Кабина MAN, система управления Weichai",
          tankVolume: "1000 л",
          serviceInterval: "80000 км",
          warranty: "2 года",
          price: "997 120 000,0 сум",
          year: "2025 год",
          source: ""
        }
      },
      {
        name: "FAW JH6 (метан)",
        isOurProduct: false,
        image: "./faw4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "9 300 кг",
          loadCapacity: "35 000 кг",
          enginePower: "Weichai WP13NGA430E52, 430 л.с.",
          transmission: "Механическая 12-ст. (Fast Gear 12JSD220T)",
          engineResource: "1,0–1,2 млн.км",
          fuelConsumption: "30–35 м³",
          features: "Алюминиевые ресиверы, 4-х точечная подвеска",
          tankVolume: "1520 л",
          serviceInterval: "60000 км",
          warranty: "Гарантия 3 года и 100 тыс.км.",
          price: "1 248 800 000,0 сум",
          year: "2025 год",
          source: "https://t.me/vum_faw_uzbekistan/1303"
        }
      },
      {
        name: "MAN TGS(X) 18.440 BLS (дизель)",
        isOurProduct: false,
        image: "./man4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "8 000 кг",
          loadCapacity: "34 000 кг",
          enginePower: "D2066 LF44, 440 л.с.",
          transmission: "Автомат 12-ст. (MAN TipMatic 12.26)",
          engineResource: "1,5–1,8 млн.км",
          fuelConsumption: "25–28 л/100 км",
          features: "Немецкое качество, SmartSelect",
          tankVolume: "800+400 л",
          serviceInterval: "100000 км",
          warranty: "1 год на всю технику, 2 года на силовые агрегаты",
          price: "1 872 016 000,0 сум",
          year: "2026 год",
          source: "https://www.uztbm.uz/"
        }
      },
      {
        name: "SITRAK (дизель)",
        isOurProduct: false,
        image: "./sitrak4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "11 000 кг",
          loadCapacity: "35 000 кг",
          enginePower: "Sitrak C7H, 480 л.с.",
          transmission: "Автомат 12-ст. (ZF Traxon 12TX2620TD)",
          engineResource: "1,5 млн.км",
          fuelConsumption: "29–31 л/100 км",
          features: "Технология MAN, усиленная рама",
          tankVolume: "860+400 л",
          serviceInterval: "100000 км",
          warranty: "1 год гарантии (продавца)",
          price: "1 030 000 000,0 сум",
          year: "2026 год",
          source: ""
        }
      },
      {
        name: "IVECO S-WAY (дизель)",
        isOurProduct: false,
        image: "./iveco4x2.png",
        specs: {
          wheelFormula: "4x2",
          curbWeight: "8 300 кг",
          loadCapacity: "35 000 кг",
          enginePower: "Cursor 11, 480 л.с.",
          transmission: "Автомат 12-ст. (ZF Hi-Tronix)",
          engineResource: "1,5 млн.км",
          fuelConsumption: "26–29 л/100 км",
          features: "Аэродинамика, система HI-CRUISE",
          tankVolume: "800+370 л",
          serviceInterval: "130000 км",
          warranty: "1 год 100 тыс км, 2 года на силовые",
          price: "1 456 538 000,0 сум",
          year: "2025 год",
          source: ""
        }
      }
    ]
  },
  {
    id: "6x6",
    title: "Тягач 6x6",
    description: "Полноприводные тягачи для экстремальных условий",
    models: [
      {
        name: "KAMAZ-65954 (дизель)",
        isOurProduct: true,
        image: "/6x6.png",
        specs: {
          wheelFormula: "6x6",
          curbWeight: "12 855 кг",
          loadCapacity: "22 270 кг",
          enginePower: "KAMAZ P6 910.52-460, 482 л.с.",
          transmission: "12S 2525 TO, механическая",
          engineResource: "1,0 млн км (двигателя)",
          fuelConsumption: "н/д",
          features: "Кабина F1D (170 мм тоннель), 1 спальное место, Двухконтурный ГУР.",
          tankVolume: "400 л",
          serviceInterval: "80 000 км",
          warranty: "2 года или 120 000 км",
          price: "н/д",
          year: "2026 год",
          source: "Прайс UAT"
        }
      },
      {
        name: "SHAANXI MAN (дизель)",
        isOurProduct: false,
        image: "./shanxi6x6.png",
        specs: {
          wheelFormula: "6x6",
          curbWeight: "9 700 кг",
          loadCapacity: "44 000 кг",
          enginePower: "WP12.430.E50, 430 л.с.",
          transmission: "Fast Gear 12JSDX220TA-B",
          engineResource: "1,0 - 1,2 млн км",
          fuelConsumption: "44 л/100 км",
          features: "2 сп. места, пневмоподвеска, перевозка до 45 т.",
          tankVolume: "600 л",
          serviceInterval: "30 000 - 40 000 км",
          warranty: "2 года",
          price: "н/д",
          year: "2025 год",
          source: ""
        }
      }
    ]
  },
  {
    id: "6x4",
    title: "Самосвал 6x4",
    description: "Строительная техника для тяжелых нагрузок",
    models: [
      {
        name: "KAMAZ-6595-CA (дизель)",
        isOurProduct: true,
        image: "./6x4.png",
        specs: {
          wheelFormula: "6x4",
          curbWeight: "16 750 кг",
          loadCapacity: "25 000 кг (Объем кузова 20 м³)",
          enginePower: "KAMAZ P6 910.52-460 / 482 л.с.",
          transmission: "2520TO, механическая, синхронизированная",
          engineResource: "н/д",
          fuelConsumption: "н/д",
          features: "Комфортабельная кабина на 4-точечной подвеске, усиленная рама",
          tankVolume: "500 (алюминиевый) л",
          serviceInterval: "н/д",
          warranty: "н/д",
          price: "н/д",
          year: "2026 год",
          source: "Прайс UAT"
        }
      },
      {
        name: "Howo-T7S",
        isOurProduct: false,
        image: "./howo6x4.png",
        specs: {
          wheelFormula: "6x4",
          curbWeight: "15 300 кг",
          loadCapacity: "25 000 кг (Объем кузова 20 м³)",
          enginePower: "Weichai WP12S400E201 / 400 л.с.",
          transmission: "Механическая, 12-ступенчатая (HW19712)",
          engineResource: "до 1.0 млн км",
          fuelConsumption: "39.5 л/100 км",
          features: "Трехосный самосвал, задняя разгрузка, гидроцилиндр спереди",
          tankVolume: "400 (алюминиевый) л",
          serviceInterval: "20 000 - 30 000 км",
          warranty: "1 год или 60 тыс. км",
          price: "1 050 000 000,0 сум",
          year: "2025 год",
          source: "https://telegra.ph/Avtosamos"
        }
      },
      {
        name: "MAN TGS",
        isOurProduct: false,
        image: "./man6x4.png",
        specs: {
          wheelFormula: "6x4",
          curbWeight: "15 000 кг",
          loadCapacity: "25 000 кг (Объем кузова 18 м³)",
          enginePower: "MAN D20 / 400 л.с.",
          transmission: "Механическая, 16-ступенчатая",
          engineResource: "до 1.5 млн км",
          fuelConsumption: "36 л/100 км",
          features: "CommonRail система, экономичный двигатель, ABS, барабанные тормоза",
          tankVolume: "400 (алюминиевый) л",
          serviceInterval: "50 000 - 80 000 км",
          warranty: "1 - 2 года",
          price: "1 850 000 000,0 сум",
          year: "2025 год",
          source: "https://man-avto.gl.uz/"
        }
      },
      {
        name: "Sinotruk Sitrak C7H (6x4)",
        isOurProduct: false,
        image: "./sitrak6x4.png",
        specs: {
          wheelFormula: "6x4",
          curbWeight: "15 500 кг",
          loadCapacity: "25 000 кг (Объем кузова 19 м³)",
          enginePower: "Sinotruk-MAN MC11.44-50 / 440 л.с. (Euro 5)",
          transmission: "Механическая",
          engineResource: "до 1.5 млн км",
          fuelConsumption: "38 л/100 км",
          features: "Двигатель MAN технологии, Euro 5, высокая мощность (440 л.с.), подходит для тяжелых грузов",
          tankVolume: "600 л",
          serviceInterval: "30 000 - 50 000 км",
          warranty: "1 год или 100 т.км",
          price: "943 588 800,0 сум",
          year: "2025 год",
          source: "https://www.prom.uz/"
        }
      }
    ]
  },
  {
    id: "8x4",
    title: "Самосвал 8x4",
    description: "Сверхтяжелые самосвалы для карьерных и масштабных работ",
    models: [
      {
        name: "KAMAZ-65951-CA (дизель)",
        isOurProduct: true,
        image: "./8x4.png",
        specs: {
          wheelFormula: "8x4",
          curbWeight: "19 300 кг",
          loadCapacity: "30 700 кг",
          enginePower: "KAMAZ P6 910.52-460, 482 л.с.",
          transmission: "2525TO, механическая, синхронизированная",
          engineResource: "н/д",
          fuelConsumption: "н/д",
          features: "Объем кузова 25 м³, НЕФАЗ, обогрев кузова выхлопными газами, ручной тент, лестница",
          tankVolume: "400 л",
          serviceInterval: "н/д",
          warranty: "н/д",
          price: "н/д",
          year: "н/д",
          source: "Прайс UAT"
        }
      },
      {
        name: "Howo-T7S ZZ3317V386HB1",
        isOurProduct: false,
        image: "./howo8x4.png",
        specs: {
          wheelFormula: "8x4",
          curbWeight: "18 400 кг",
          loadCapacity: "32 000 кг (Объем кузова 26 м³)",
          enginePower: "Weichai WP12.400E201 / 400 л.с.",
          transmission: "Механическая, 12-ступенчатая (HW19712)",
          engineResource: "800 000",
          fuelConsumption: "46,6 л/100 км",
          features: "Четырехосный самосвал, задняя разгрузка, гидроцилиндр спереди, ABS, кондиционер, пневмосиденье, Bluetooth, USB, спальное место",
          tankVolume: "400 л",
          serviceInterval: "15 000 - 20 000 км",
          warranty: "1 год / 50 000 км",
          price: "1 155 500 000,0 сум",
          year: "2025 год",
          source: "https://telegra.ph/Avtosamosval-Howo-T7S-8x4"
        }
      },
      {
        name: "Sinotruk Sitrak C7H (8x4)",
        isOurProduct: false,
        image: "./sitrak8x4.png",
        specs: {
          wheelFormula: "8x4",
          curbWeight: "16 500 кг",
          loadCapacity: "31 000 кг (Объем кузова 26 м³)",
          enginePower: "Sinotruk-MAN MC11.44-50 / 440 л.с.",
          transmission: "ZF16S2530TO (механическая, 16-ст.)",
          engineResource: "1 500 000",
          fuelConsumption: "38 л/100 км",
          features: "Двигатель по технологии MAN, Euro 5, высокая грузоподъемность (31 т), подходит для тяжелых строительных работ",
          tankVolume: "600 л",
          serviceInterval: "30 000 - 50 000 км",
          warranty: "1 год / 100 000 км",
          price: "1 155 000 000,0 сум",
          year: "2025 год",
          source: "https://www.prom.uz/"
        }
      }
    ]
  }
];