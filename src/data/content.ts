export type Lang = 'en' | 'cz';

export const content = {
  en: {
    meta: {
      title: 'Garden & Hobby – Heritage Garden Tools',
      description: 'A curated selection of heritage garden tools crafted to last generations.',
    },
    header: {
      nav: ['Curating', "What's Coming", 'Contact'],
      sisterBrand: 'Our sister brand:',
      sisterBrandLink: 'Grill & Hobby',
    },
    hero: {
      headline: 'Respect the soil. Honor the craft.',
      subheadline: 'A curated selection of eight iconic brands built to last generations.',
    },
    curating: {
      title: 'Curating the Extraordinary',
      p1: 'At Garden & Hobby, we believe that gardening is a lifelong dialogue between the artist and the soil. To honor this bond, we have meticulously curated a portfolio of eight legendary pillars of craftsmanship. Each represents the pinnacle of its field, from centuries-old European smithies to traditional leather tanneries.',
      p2: "We don't offer thousands of products; we offer eight definitive stories of excellence. Every tool and accessory in our collection is chosen for its soul, its functional beauty, and its ability to endure for generations. We are here for those who seek authenticity over mass production and tools that age as gracefully as the gardens they tend.",
    },
    whatsComing: {
      title: "What's Coming",
      items: [
        { number: '1', title: 'Sensory Design', tagline: 'Digital Craftsmanship', icon: 'line', sentence: 'An online experience that reflects the tactile quality of our tools.' },
        { number: '2', title: 'Prague Boutique', tagline: 'A Physical Sanctuary', icon: 'window', sentence: 'A place in Prague where you can discover and try our selection in person.' },
        { number: '3', title: 'The Rule of Eight', tagline: 'Curated, Not Collected', icon: 'eight', sentence: 'Eight heritage brands, each the definitive choice in its category.' },
        { number: '4', title: 'Heritage Icons', tagline: 'Untraceable Luxury', icon: 'seal', sentence: 'Tools that age with you and become part of your garden\'s story.' },
      ],
    },
    sisterBrand: {
      text: 'Where the garden meets the fire.',
      subtext: 'Visit our sister brand for a curated selection of world-class grilling icons.',
      cta: 'Visit Grill & Hobby',
      ctaHref: 'https://grillandhobby.com',
    },
    contact: {
      title: 'Start a Conversation',
      text: 'Intrigued by our selection of heritage garden tools? Whether you are a professional landscaper or a passionate gardener seeking the extraordinary, we are here to assist. At Garden & Hobby, every inquiry receives our undivided, personal attention.',
    },
    footer: {
      copyright: 'Garden & Hobby. All rights reserved.',
      operator: 'Operator:',
      operatorName: 'PL PolyTrade s.r.o.',
      operatorAddress: 'Školská 660/3, 110 00 Praha 1',
      operatorId: 'IČ: 244 26 091',
    },
  },
  cz: {
    meta: {
      title: 'Garden & Hobby – Dědictví zahradního nářadí',
      description: 'Kurátorský výběr zahradního nářadí řemeslné kvality, které vydrží generace.',
    },
    header: {
      nav: ['Kurátorství', 'Co chystáme', 'Kontakt'],
      sisterBrand: 'Sesterská značka:',
      sisterBrandLink: 'Grill & Hobby',
    },
    hero: {
      headline: 'Respektujte půdu. Ctěte řemeslo.',
      subheadline: 'Kurátorský výběr osmi ikonických značek stavěných na generace.',
    },
    curating: {
      title: 'Kurátorství výjimečného',
      p1: 'V Garden & Hobby věříme, že zahradničení je celoživotní dialog mezi umělcem a půdou. Abychom tuto vazbu ctili, pečlivě jsme sestavili portfolio osmi legendárních pilířů řemeslné práce. Každý reprezentuje vrchol ve svém oboru, od staletých evropských kováren po tradiční koželužny.',
      p2: 'Nenabízíme tisíce produktů; nabízíme osm jasných příběhů dokonalosti. Každý nástroj a doplněk v naší kolekci je vybrán pro svou duši, funkční krásu a schopnost vydržet generace. Jsme tu pro ty, kdo hledají autentičnost před hromadnou výrobou a nástroje, které stárnou stejně důstojně jako zahrady, o které pečují.',
    },
    whatsComing: {
      title: 'Co chystáme',
      items: [
        { number: '1', title: 'Senzorický design', tagline: 'Digitální řemeslo', icon: 'line', sentence: 'Online prostředí, které odráží hmatovou kvalitu našich nástrojů.' },
        { number: '2', title: 'Pražský butik', tagline: 'Fyzické útočiště', icon: 'window', sentence: 'Místo v Praze, kde si můžete vybrané kousky prohlédnout a vyzkoušet naživo.' },
        { number: '3', title: 'Pravidlo osmi', tagline: 'Kurátorství, ne sběr', icon: 'eight', sentence: 'Osm dědičných značek, každá je definitivní volbou ve své kategorii.' },
        { number: '4', title: 'Ikony dědictví', tagline: 'Nevystopovatelný luxus', icon: 'seal', sentence: 'Nástroje, které s vámi stárnou a stanou se součástí příběhu vaší zahrady.' },
      ],
    },
    sisterBrand: {
      text: 'Kde se zahrada potkává s ohněm.',
      subtext: 'Navštivte naši sesterskou značku pro kurátorský výběr světových grilovacích ikon.',
      cta: 'Navštívit Grill & Hobby',
      ctaHref: 'https://grillandhobby.com',
    },
    contact: {
      title: 'Začněte konverzaci',
      text: 'Láká vás náš výběr dědičného zahradního nářadí? Ať jste profesionální zahradník nebo nadšený pěstitel hledající výjimečnost, jsme tu, abychom pomohli. V Garden & Hobby každému dotazu věnujeme neomezenou osobní pozornost.',
    },
    footer: {
      copyright: 'Garden & Hobby. Všechna práva vyhrazena.',
      operator: 'Provozovatel:',
      operatorName: 'PL PolyTrade s.r.o.',
      operatorAddress: 'Školská 660/3, 110 00 Praha 1',
      operatorId: 'IČ: 244 26 091',
    },
  },
} as const;

export const contacts = {
  email: 'pecimichal@gmail.com',
  phone: '+420 731 000 307',
};
