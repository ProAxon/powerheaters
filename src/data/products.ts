export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  heroImage: string;
  description: string;
  features: string[];
  specifications: Specification[];
  applications: string[];
  relatedProducts: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  subcategories: Subcategory[];
}

// Heater Section Products
export const heaterProducts: Product[] = [
  {
    id: "mica-band-heaters",
    name: "Mica Band Heaters",
    image: "/images/MICA BAND HEATER.JPG",
    heroImage: "/images/MICA BAND HEATER.JPG",
    description: "Our Mica Band heaters are made of Nickel Chrome resistance ribbon precisely wound on specially selected Mica or Micanite sheet. It is then insulated and covered by metal sheathing and rolled to the required shape.",
    features: [
      "Rust resistant Sheath",
      "Top Quality Nickel Chrome ribbon",
      "Max. 3.6 watts/cm²",
      "Max. Operating temperature up to 250°C",
      "Available with inbuilt insulation pad to reduce power consumption"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Max Watts (Customized)" },
      { label: "Temperature", value: "Up to 250°C" },
      { label: "Watt Density", value: "3.6 watts/cm²" },
      { label: "Material", value: "Nickel Chrome / Mica" },
      { label: "Shape", value: "Round & Straight" }
    ],
    applications: [
      "Plastic Processing Machinery",
      "Injection and Blow Moulding",
      "Extruders",
      "Medical Equipment",
      "Laboratory Equipment"
    ],
    relatedProducts: ["ceramic-band-heaters", "nozzle-band-heaters"]
  },
  {
    id: "nozzle-band-heaters",
    name: "Nozzle Band Heaters",
    image: "/images/nozzle-band-heater.jpg",
    heroImage: "/images/nozzle-band-heater-hero.jpg",
    description: "Our Nozzle Band heaters are available as Mica Nozzle Band Heaters, Plastic proof Nozzle Band Heaters, and Leak Proof Nozzle Band Heaters. We build every technically possible heater as per your requirement.",
    features: [
      "Sheath material brass or SS",
      "Max. operating temp 280°C - 350°C",
      "Max. surface load 25-45 W/SQ. inch",
      "Fiberglass or Teflon insulated terminals",
      "Compact design for nozzle applications"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 480V" },
      { label: "Power", value: "Up to 100 KW" },
      { label: "Temperature", value: "Up to 350°C" },
      { label: "Sheath", value: "Brass / SS 316" },
      { label: "Max Surface Load", value: "45 w/sq.inch" },
      { label: "Type", value: "Mica / Plastic Proof / Leak Proof" }
    ],
    applications: [
      "Hot runner bushings",
      "Nozzles of plastic processing machineries",
      "Injection molding machines",
      "Blow molding equipment"
    ],
    relatedProducts: ["mica-band-heaters", "ceramic-band-heaters"]
  },
  {
    id: "ceramic-band-heaters",
    name: "Ceramic Band Heaters",
    image: "/images/CERAMIC BAND HEATER.JPG",
    heroImage: "/images/CERAMIC BAND HEATER -1.JPG",
    description: "Our Ceramic Band heaters are made of helically wound Nickel Chrome resistance coil precisely stretched and strung through steatite ceramic cores forming a flexible heating mat. It is then placed in flexible stainless steel housing with ceramic fiber insulation.",
    features: [
      "Nickel Chrome Resistance Wire",
      "Ceramic Fiber Insulation reduces power consumption by 20-30%",
      "Available with heating & cooling combination",
      "Max. 7 watts per sq.cm",
      "Max. Temp. 250°C"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 240V" },
      { label: "Watt Density", value: "Max. 7 watts/sq.cm" },
      { label: "Temperature", value: "Up to 250°C" },
      { label: "Diameter", value: "38 mm upward" },
      { label: "Material", value: "Ceramic / SS" },
      { label: "Insulation", value: "Ceramic Fiber" }
    ],
    applications: [
      "Plastic Processing Machinery",
      "Injection and Blow Molding",
      "Extruders",
      "PVC Processing"
    ],
    relatedProducts: ["mica-band-heaters", "nozzle-band-heaters"]
  },
  {
    id: "tubular-heaters",
    name: "Tubular Heaters",
    image: "/images/TUBULAR HEATERS.JPG",
    heroImage: "/images/TUBULAR HEATERS -1.JPG",
    description: "S.S Tubular Heaters are custom designed in various shapes to address client's requirements for direct immersion in liquids such as water, oils, solvents and process solutions, molten materials as well as air and gases.",
    features: [
      "Custom designed in various shapes",
      "Direct immersion in liquids and gases",
      "Magnesium insulation for greater heat transfer",
      "Multiple sheath materials available",
      "Various termination styles"
    ],
    specifications: [
      { label: "Tube Diameter", value: "6mm, 8mm, 11mm, 12.5mm, 16mm, 18mm" },
      { label: "Sheath Material", value: "Incoloy 800, SS 304/316/321, Copper, Titanium" },
      { label: "Voltage", value: "As per Customized" },
      { label: "Power", value: "As per Customized" },
      { label: "Temperature", value: "Up to 600°C" },
      { label: "Shapes", value: "Straight, U-Shape, Coiled, Custom" }
    ],
    applications: [
      "Plastic Processing Machinery",
      "Engineering Industry",
      "Packaging Machinery",
      "Hot Runner Mould Systems",
      "Radiant Surface Heating"
    ],
    relatedProducts: ["cartridge-heaters", "immersion-heaters"]
  },
  {
    id: "immersion-heaters",
    name: "Immersion Heaters",
    image: "/images/IMMERSION HEATERS.JPG",
    heroImage: "/images/IMMESION HEATERS - 5.JPG",
    description: "Immersion heaters are designed for direct heating of liquids including water, oils, solvents, and process solutions. Available in various configurations for industrial applications.",
    features: [
      "Direct liquid heating",
      "Various sheath materials",
      "Custom wattages and voltages",
      "Over-temperature protection available",
      "Suitable for corrosive environments"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Customized" },
      { label: "Material", value: "SS 304/316, Titanium" },
      { label: "Application", value: "Water, Oil, Chemicals" },
      { label: "Protection", value: "IP65 / IP67" },
      { label: "Mounting", value: "Flange / Threaded" }
    ],
    applications: [
      "Water heating",
      "Oil heating",
      "Chemical processing",
      "Plating tanks",
      "Food processing"
    ],
    relatedProducts: ["tubular-heaters", "cartridge-heaters"]
  },
  {
    id: "cartridge-heaters",
    name: "Cartridge Heaters",
    image: "/images/CARTRIDGE HEATERS.JPG",
    heroImage: "/images/CARTRIDGE HEATERS -1.JPG",
    description: "High Watt Density Cartridge Heaters are manufactured with most advanced technology and quality raw materials, enabling high performance heating in compact spaces.",
    features: [
      "High watt density design",
      "Distributed heat profile",
      "Ground finish for efficient heat transfer",
      "Rugged construction",
      "Precision fit"
    ],
    specifications: [
      { label: "Voltage", value: "230V (Standard)" },
      { label: "Sheath Material", value: "SS 304/316" },
      { label: "Watt Density", value: "High Density" },
      { label: "Diameter", value: "6mm to 25mm" },
      { label: "Length", value: "Customized" },
      { label: "Termination", value: "Lead Wire / Post Terminal" }
    ],
    applications: [
      "Plastic processing machinery",
      "Packaging equipment",
      "Hot runner systems",
      "Medical equipment",
      "Laboratory equipment"
    ],
    relatedProducts: ["tubular-heaters", "coil-heaters"]
  },
  {
    id: "coil-heaters",
    name: "Coil Heaters",
    image: "/images/COIL HEATERS.JPG",
    heroImage: "/images/COIL HEATERS (2).JPG",
    description: "Ceramic Cartridge Heating elements made of helically wound resistance coil stretched and strung through series of open type ceramic cores. Engineered for precision fit with even heat profile.",
    features: [
      "Sheath temperature up to 750°C",
      "Engineered for precision fit",
      "Even heat profile",
      "Highly non-corrosive",
      "Staggered cold leads"
    ],
    specifications: [
      { label: "Sheath Temp", value: "Up to 750°C" },
      { label: "Material", value: "SS / Ceramic" },
      { label: "Profile", value: "Even Heat Distribution" },
      { label: "Construction", value: "Helical Coil" },
      { label: "Application", value: "PET Preform Moulds" },
      { label: "Cross Section", value: "Flat for faster heat transfer" }
    ],
    applications: [
      "PET preform moulds",
      "Hot runner systems",
      "Nozzle heating",
      "Plastic processing"
    ],
    relatedProducts: ["cartridge-heaters", "micro-coil-heaters"]
  },
  {
    id: "strip-heaters",
    name: "Strip Heaters",
    image: "/images/STRIP HEATERS.JPG",
    heroImage: "/images/STRIP HEATERS - 1.JPG",
    description: "Strip heaters are versatile heating elements designed for surface heating applications. Available in various lengths, wattages, and configurations to suit different industrial needs.",
    features: [
      "Uniform surface heating",
      "Various lengths available",
      "Mica or ceramic insulation",
      "Post terminal or lead wire options",
      "Custom wattages"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 240V" },
      { label: "Power", value: "Customized" },
      { label: "Length", value: "50mm to 1000mm" },
      { label: "Width", value: "20mm to 50mm" },
      { label: "Material", value: "SS / Mica" },
      { label: "Temperature", value: "Up to 300°C" }
    ],
    applications: [
      "Surface heating",
      "Oven heating elements",
      "Food warming equipment",
      "Industrial dryers",
      "Heating platens"
    ],
    relatedProducts: ["tubular-heaters", "ceramic-band-heaters"]
  },
  {
    id: "infrared-heaters",
    name: "Infrared Heaters",
    image: "/images/INFRARED HEATERS.JPG",
    heroImage: "/images/INFRARED HEATERS.JPG",
    description: "Short Wave IR Lamps transmit heat in the form of electromagnetic waves at a velocity of approximately 3,00,000 Km/Sec. Provides instant, efficient radiant heat for industrial applications.",
    features: [
      "Instant heat transfer",
      "Electromagnetic wave transmission",
      "High efficiency",
      "No contact required",
      "Precise temperature control"
    ],
    specifications: [
      { label: "Type", value: "Short Wave IR" },
      { label: "Wavelength", value: "1.0 - 1.4 microns" },
      { label: "Voltage", value: "220V - 415V" },
      { label: "Power", value: "500W - 5000W" },
      { label: "Response Time", value: "1-2 seconds" },
      { label: "Lamp Life", value: "5000+ hours" }
    ],
    applications: [
      "Paint drying",
      "Plastic forming",
      "Food processing",
      "Textile drying",
      "Industrial ovens"
    ],
    relatedProducts: ["tubular-heaters", "ceramic-band-heaters"]
  },
  {
    id: "casting-heaters",
    name: "Casting Heaters",
    image: "/images/CAST IN HEATERS.JPG",
    heroImage: "/images/CAST-IN HEATERS.JPG",
    description: "Custom designed casting heaters for die casting machines and heat treat furnaces. Bundle rod heaters designed for specific voltage and wattage requirements.",
    features: [
      "Custom designed for specific applications",
      "High temperature capability",
      "Bundle rod configuration",
      "Durable construction",
      "Precise temperature control"
    ],
    specifications: [
      { label: "Voltage", value: "Customized" },
      { label: "Wattage", value: "Customized" },
      { label: "Temperature", value: "Up to 1000°C" },
      { label: "Configuration", value: "Bundle Rod" },
      { label: "Application", value: "Die Casting / Furnaces" },
      { label: "Material", value: "High Grade Alloys" }
    ],
    applications: [
      "Die casting machines",
      "Heat treat furnaces",
      "Aluminum casting",
      "Zinc casting",
      "Metal melting"
    ],
    relatedProducts: ["tubular-heaters", "immersion-heaters"]
  },
  {
    id: "manifold-heaters",
    name: "Manifold Heaters",
    image: "/images/MANIFOLD HEATERS.JPG",
    heroImage: "/images/MANIFOLD HEATERS -1.JPG",
    description: "Specialized heaters designed for hot runner manifold systems in plastic injection molding. Ensures uniform temperature distribution across the manifold.",
    features: [
      "Uniform temperature distribution",
      "Designed for hot runner systems",
      "High watt density",
      "Precision engineered",
      "Long service life"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 240V" },
      { label: "Power", value: "Customized" },
      { label: "Temperature", value: "Up to 400°C" },
      { label: "Material", value: "SS 316" },
      { label: "Application", value: "Hot Runner Manifolds" },
      { label: "Watt Density", value: "High Density" }
    ],
    applications: [
      "Hot runner injection molding",
      "Manifold heating",
      "Plastic processing",
      "Precision molding"
    ],
    relatedProducts: ["coil-heaters", "nozzle-band-heaters"]
  },
  {
    id: "porcelain-heaters",
    name: "Porcelain Heaters",
    image: "/images/PORCELAIN HEATERS.JPG",
    heroImage: "/images/PORCELAIN HEATERS -1.JPG",
    description: "High-quality porcelain heaters designed for applications requiring excellent electrical insulation and high temperature resistance.",
    features: [
      "Excellent electrical insulation",
      "High temperature resistance",
      "Durable porcelain body",
      "Corrosion resistant",
      "Long service life"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Customized" },
      { label: "Temperature", value: "Up to 800°C" },
      { label: "Material", value: "High Grade Porcelain" },
      { label: "Insulation", value: "Excellent" },
      { label: "Application", value: "High Temp Industrial" }
    ],
    applications: [
      "High temperature furnaces",
      "Laboratory equipment",
      "Industrial ovens",
      "Heat treatment"
    ],
    relatedProducts: ["ceramic-band-heaters", "tubular-heaters"]
  },
  {
    id: "titanium-heaters",
    name: "Titanium Heaters",
    image: "/images/titanium-heater.jpg",
    heroImage: "/images/titanium-heater-hero.jpg",
    description: "Premium titanium heaters designed for highly corrosive environments. Ideal for chemical processing, electroplating, and marine applications.",
    features: [
      "Exceptional corrosion resistance",
      "Suitable for aggressive chemicals",
      "High purity titanium construction",
      "Long service life in harsh environments",
      "Low maintenance"
    ],
    specifications: [
      { label: "Material", value: "Pure Titanium Grade 1/2" },
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Customized" },
      { label: "Temperature", value: "Up to 300°C" },
      { label: "Corrosion Resistance", value: "Excellent" },
      { label: "Application", value: "Chemical / Marine" }
    ],
    applications: [
      "Chemical processing tanks",
      "Electroplating baths",
      "Seawater heating",
      "Acid solutions",
      "Corrosive environments"
    ],
    relatedProducts: ["immersion-heaters", "tubular-heaters"]
  },
  {
    id: "silica-glass-heaters",
    name: "Silica Glass Heaters",
    image: "/images/SILICA GLASS HEATERS.JPG",
    heroImage: "/images/SILICA GLASS HEATERS.JPG",
    description: "Specialized silica glass heaters for applications requiring high purity and resistance to thermal shock. Ideal for semiconductor and laboratory applications.",
    features: [
      "High purity silica glass",
      "Excellent thermal shock resistance",
      "Transparent for visual monitoring",
      "Chemical inertness",
      "Ultra-high temperature capability"
    ],
    specifications: [
      { label: "Material", value: "Fused Silica Glass" },
      { label: "Temperature", value: "Up to 1000°C" },
      { label: "Voltage", value: "220V - 240V" },
      { label: "Purity", value: "High Purity" },
      { label: "Transparency", value: "Clear / Opaque" },
      { label: "Application", value: "Semiconductor / Lab" }
    ],
    applications: [
      "Semiconductor processing",
      "Laboratory furnaces",
      "Optical applications",
      "High purity heating",
      "Research equipment"
    ],
    relatedProducts: ["porcelain-heaters", "infrared-heaters"]
  },
  {
    id: "d-type-heaters",
    name: "D Type Heaters",
    image: "/images/D TYPE HEATERS.JPG",
    heroImage: "/images/D TYPE HEATERS -1.JPG",
    description: "D-shaped heaters designed for specific groove mounting applications. Provides excellent heat transfer and uniform temperature distribution.",
    features: [
      "D-shaped cross section",
      "Designed for groove mounting",
      "Excellent heat transfer",
      "Uniform temperature distribution",
      "Custom sizes available"
    ],
    specifications: [
      { label: "Shape", value: "D-Type / Flat" },
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Customized" },
      { label: "Temperature", value: "Up to 400°C" },
      { label: "Mounting", value: "Groove Mount" },
      { label: "Material", value: "SS / Brass" }
    ],
    applications: [
      "Die heating",
      "Mould heating",
      "Platen heating",
      "Industrial presses",
      "Rubber processing"
    ],
    relatedProducts: ["strip-heaters", "cartridge-heaters"]
  },
  {
    id: "space-heaters",
    name: "Space Heaters & Wire Wound Heaters",
    image: "/images/SPACE HEATERS, RESISTORS, THERMOSTATS.JPG",
    heroImage: "/images/RESISTORS, THERMOSTATS, SPACE HEATERS].jpg",
    description: "Industrial space heaters and wire wound heating elements for air heating applications. Includes thermostats for temperature control.",
    features: [
      "Efficient air heating",
      "Wire wound construction",
      "Built-in thermostat options",
      "Various sizes available",
      "Safe operation"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 415V" },
      { label: "Power", value: "500W - 5000W" },
      { label: "Type", value: "Wire Wound / Finned" },
      { label: "Control", value: "Thermostat Included" },
      { label: "Application", value: "Space Heating" },
      { label: "Safety", value: "Overheat Protection" }
    ],
    applications: [
      "Industrial space heating",
      "Warehouse heating",
      "Workshop heating",
      "Drying applications",
      "Ventilation systems"
    ],
    relatedProducts: ["tubular-heaters", "finned-heaters"]
  },
  {
    id: "induction-heating-coil",
    name: "Induction Heating Coils",
    image: "/images/INDUCTION COILS.JPG",
    heroImage: "/images/INDUCTION COILS - 1.JPG",
    description: "Custom designed induction heating coils for electromagnetic heating applications. Provides rapid, efficient heating without direct contact.",
    features: [
      "Electromagnetic induction heating",
      "No direct contact required",
      "Rapid heat generation",
      "High efficiency",
      "Custom coil designs"
    ],
    specifications: [
      { label: "Frequency", value: "1 kHz - 500 kHz" },
      { label: "Power", value: "1 kW - 500 kW" },
      { label: "Material", value: "Copper / Litz Wire" },
      { label: "Cooling", value: "Water Cooled" },
      { label: "Application", value: "Induction Heating" },
      { label: "Design", value: "Custom Coils" }
    ],
    applications: [
      "Metal hardening",
      "Brazing and soldering",
      "Melting applications",
      "Heat treatment",
      "Forging preheating"
    ],
    relatedProducts: ["casting-heaters", "tubular-heaters"]
  },
  {
    id: "corrugation-heaters",
    name: "Corrugation Heaters",
    image: "/images/CORRUGATION HEATERS.JPG",
    heroImage: "/images/CORRUGATION HEATERSS.JPG",
    description: "Specialized heaters for corrugation machines and packaging industry. Designed for continuous operation in paper and board processing.",
    features: [
      "Designed for corrugation machines",
      "Continuous operation capability",
      "Uniform heating surface",
      "Durable construction",
      "Low maintenance"
    ],
    specifications: [
      { label: "Voltage", value: "220V - 440V" },
      { label: "Power", value: "Customized" },
      { label: "Temperature", value: "Up to 300°C" },
      { label: "Application", value: "Corrugation Machines" },
      { label: "Material", value: "SS / Ceramic" },
      { label: "Operation", value: "Continuous" }
    ],
    applications: [
      "Corrugation machines",
      "Paper processing",
      "Board manufacturing",
      "Packaging industry",
      "Printing industry"
    ],
    relatedProducts: ["strip-heaters", "ceramic-band-heaters"]
  }
];

// Thermocouples Section
export const thermocoupleProducts: Product[] = [
  {
    id: "mineral-insulated-thermocouples",
    name: "Mineral Insulated Thermocouples",
    image: "/images/THERMOCOUPLES.JPG",
    heroImage: "/images/THERMOCOUPLES-1.JPG",
    description: "High-quality mineral insulated thermocouples providing accurate temperature measurement in harsh industrial environments. Fast response time and excellent durability.",
    features: [
      "Fast response time",
      "High temperature capability",
      "Bendable design",
      "Mineral insulation",
      "Various sheath materials"
    ],
    specifications: [
      { label: "Type", value: "K, J, T, E, N, R, S, B" },
      { label: "Sheath Diameter", value: "0.5mm to 12.7mm" },
      { label: "Temperature", value: "-200°C to 1700°C" },
      { label: "Sheath Material", value: "SS 304/316/310, Inconel" },
      { label: "Accuracy", value: "Class 1 / Class 2" },
      { label: "Response", value: "Fast" }
    ],
    applications: [
      "Industrial furnaces",
      "Heat treatment",
      "Plastic processing",
      "Power plants",
      "Chemical industry"
    ],
    relatedProducts: ["manifold-thermocouples", "ring-thermocouples"]
  },
  {
    id: "manifold-thermocouples",
    name: "Manifold Thermocouples",
    image: "/images/THERMOCOUPLES-2.JPG",
    heroImage: "/images/THERMOCOUPLES-2.JPG",
    description: "Specialized thermocouples designed for hot runner manifold temperature measurement. Provides accurate readings for precise process control.",
    features: [
      "Designed for hot runner systems",
      "Precise temperature measurement",
      "Compact design",
      "Easy installation",
      "Long service life"
    ],
    specifications: [
      { label: "Type", value: "J, K" },
      { label: "Temperature", value: "Up to 400°C" },
      { label: "Mounting", value: "Bayonet / Threaded" },
      { label: "Application", value: "Hot Runner Manifolds" },
      { label: "Lead Wire", value: "Fiberglass / Teflon" },
      { label: "Accuracy", value: "±1.5°C" }
    ],
    applications: [
      "Hot runner injection molding",
      "Manifold temperature monitoring",
      "Plastic processing",
      "Mould temperature control"
    ],
    relatedProducts: ["mineral-insulated-thermocouples", "ring-thermocouples"]
  },
  {
    id: "ring-thermocouples",
    name: "Ring/Washer Type Thermocouples",
    image: "/images/THERMOCOUPLES-3.JPG",
    heroImage: "/images/THERMOCOUPLES-3.JPG",
    description: "Ring and washer type thermocouples for surface temperature measurement. Ideal for monitoring temperature on barrels, nozzles, and flat surfaces.",
    features: [
      "Surface temperature measurement",
      "Ring or washer design",
      "Easy mounting",
      "Good surface contact",
      "Various sizes available"
    ],
    specifications: [
      { label: "Type", value: "K, J" },
      { label: "Inner Diameter", value: "10mm to 100mm" },
      { label: "Outer Diameter", value: "Customized" },
      { label: "Temperature", value: "Up to 400°C" },
      { label: "Material", value: "SS / Brass" },
      { label: "Mounting", value: "Bolt On" }
    ],
    applications: [
      "Barrel temperature monitoring",
      "Nozzle temperature measurement",
      "Surface heating control",
      "Plastic machinery"
    ],
    relatedProducts: ["mineral-insulated-thermocouples", "manifold-thermocouples"]
  }
];

// Heating Equipment Section
export const heatingEquipmentProducts: Product[] = [
  {
    id: "industrial-ovens",
    name: "Industrial Ovens & Tray Dryers",
    image: "/images/TRAY OVENS.JPG",
    heroImage: "/images/TRAY DRYER.JPG",
    description: "Custom designed industrial ovens and tray dryers for various heating, drying, and curing applications. Built with high-quality insulation and precise temperature control.",
    features: [
      "Precise temperature control",
      "High-quality insulation",
      "Uniform heat distribution",
      "Custom sizes available",
      "Energy efficient design"
    ],
    specifications: [
      { label: "Temperature Range", value: "Ambient to 500°C" },
      { label: "Capacity", value: "Customized" },
      { label: "Heating", value: "Electric / Gas" },
      { label: "Control", value: "PID Controller" },
      { label: "Insulation", value: "Ceramic Fiber" },
      { label: "Chamber", value: "SS / MS" }
    ],
    applications: [
      "Drying applications",
      "Curing processes",
      "Heat treatment",
      "Powder coating",
      "Aging tests"
    ],
    relatedProducts: ["furnaces", "heating-mantles"]
  },
  {
    id: "furnaces",
    name: "Industrial Furnaces",
    image: "/images/MUFFLE FURNACE.JPG",
    heroImage: "/images/MUFFLE FRUNACE -.JPG",
    description: "High-temperature industrial furnaces for heat treatment, melting, and thermal processing applications. Designed for reliability and precision.",
    features: [
      "High temperature capability",
      "Precise temperature control",
      "Multiple heating zones",
      "Robust construction",
      "Programmable controllers"
    ],
    specifications: [
      { label: "Temperature", value: "Up to 1500°C" },
      { label: "Heating", value: "Electric / Gas" },
      { label: "Chamber Size", value: "Customized" },
      { label: "Control", value: "PLC / PID" },
      { label: "Atmosphere", value: "Air / Inert / Vacuum" },
      { label: "Insulation", value: "Refractory Bricks" }
    ],
    applications: [
      "Heat treatment",
      "Metal melting",
      "Sintering",
      "Annealing",
      "Hardening"
    ],
    relatedProducts: ["industrial-ovens", "furnace-coils"]
  },
  {
    id: "heating-mantles",
    name: "Heating Mantles",
    image: "/images/PROBE, HEATING MANTLE, TINNING POT ETC.JPG",
    heroImage: "/images/PROBE, HEATING MANTLES, TINNING POTS etc.JPG",
    description: "Laboratory heating mantles for round bottom flasks and beakers. Provides uniform heating for chemical and laboratory applications.",
    features: [
      "Uniform heating surface",
      "Temperature controller",
      "Fiberglass insulation",
      "Various sizes available",
      "Safe operation"
    ],
    specifications: [
      { label: "Capacity", value: "50ml to 20L" },
      { label: "Temperature", value: "Up to 450°C" },
      { label: "Voltage", value: "220V" },
      { label: "Control", value: "Energy Regulator / PID" },
      { label: "Material", value: "Fiberglass / Aluminum" },
      { label: "Safety", value: "Overheat Protection" }
    ],
    applications: [
      "Laboratory heating",
      "Chemical reactions",
      "Distillation",
      "Evaporation",
      "Educational labs"
    ],
    relatedProducts: ["industrial-ovens", "furnaces"]
  },
  {
    id: "furnace-coils",
    name: "Furnace Coils",
    image: "/images/FURNACE COILS.JPG",
    heroImage: "/images/FURNACE COILS.JPG",
    description: "High-quality furnace coils for industrial furnaces and heat treatment applications. Custom designed for specific voltage and wattage requirements.",
    features: [
      "High temperature resistance",
      "Custom coil designs",
      "Long service life",
      "Excellent heat transfer",
      "Various materials available"
    ],
    specifications: [
      { label: "Material", value: "Kanthal / Nichrome" },
      { label: "Temperature", value: "Up to 1300°C" },
      { label: "Voltage", value: "Customized" },
      { label: "Wattage", value: "Customized" },
      { label: "Configuration", value: "Bundle Rod / Coil" },
      { label: "Application", value: "Heat Treat Furnaces" }
    ],
    applications: [
      "Heat treat furnaces",
      "Die casting machines",
      "Industrial ovens",
      "Melting furnaces"
    ],
    relatedProducts: ["furnaces", "tubular-heaters"]
  }
];

// Accessories Section
export const accessoriesProducts: Product[] = [
  {
    id: "energy-saving-jackets",
    name: "HeatLok Energy Saving Jackets",
    image: "/images/CERAWOOL INSULATION.JPG",
    heroImage: "/images/CERAWOOL INSULATION.JPG",
    description: "Multi-layer insulation jackets that conserve energy up to 30%. Designed to withstand high temperatures and provide excellent thermal insulation for heaters and equipment.",
    features: [
      "Conserves energy up to 30%",
      "Multi-layer design",
      "Withstands high temperatures",
      "Easy installation and removal",
      "High ROI with low investment"
    ],
    specifications: [
      { label: "Temperature", value: "Up to 500°C" },
      { label: "Energy Saving", value: "Up to 30%" },
      { label: "Material", value: "Ceramic Fiber / Silica" },
      { label: "Layers", value: "Multi-Layer" },
      { label: "Application", value: "Barrels / Nozzles / Equipment" },
      { label: "Installation", value: "Velcro / Hooks" }
    ],
    applications: [
      "Plastic processing machinery",
      "Injection molding machines",
      "Extruders",
      "Barrel insulation",
      "Nozzle insulation"
    ],
    relatedProducts: ["mica-band-heaters", "ceramic-band-heaters"]
  },
  {
    id: "terminal-boxes",
    name: "Terminal Boxes & Connectors",
    image: "/images/CERAMICS.JPG",
    heroImage: "/images/CERAMICS.JPG",
    description: "High-quality terminal boxes and connectors for safe electrical connections in heating applications. Available in various configurations and ratings.",
    features: [
      "Safe electrical connections",
      "Various configurations",
      "High current rating",
      "Durable construction",
      "Easy wiring"
    ],
    specifications: [
      { label: "Current Rating", value: "16A - 100A" },
      { label: "Voltage", value: "250V - 690V" },
      { label: "Material", value: "Aluminum / Plastic" },
      { label: "Protection", value: "IP54 / IP65" },
      { label: "Type", value: "Ceramic / Brass" },
      { label: "Application", value: "Heater Connections" }
    ],
    applications: [
      "Heater terminal connections",
      "Power distribution",
      "Control panels",
      "Industrial equipment"
    ],
    relatedProducts: ["ceramic-connectors", "lead-wires"]
  },
  {
    id: "ceramic-connectors",
    name: "Ceramic Connectors",
    image: "/images/CERAMICS -1.JPG",
    heroImage: "/images/CERAMICS -1.JPG",
    description: "High-temperature ceramic connectors for heater terminal connections. Designed for reliable performance in high-temperature applications.",
    features: [
      "High temperature resistance",
      "Excellent insulation",
      "Reliable connections",
      "Various pole configurations",
      "Durable ceramic body"
    ],
    specifications: [
      { label: "Poles", value: "2P / 3P / 4P" },
      { label: "Current", value: "25A - 60A" },
      { label: "Temperature", value: "Up to 300°C" },
      { label: "Material", value: "Steatite Ceramic" },
      { label: "Terminals", value: "Brass / Copper" },
      { label: "Mounting", value: "Panel / DIN Rail" }
    ],
    applications: [
      "Heater connections",
      "High temperature wiring",
      "Industrial furnaces",
      "Oven connections"
    ],
    relatedProducts: ["terminal-boxes", "lead-wires"]
  },
  {
    id: "lead-wires",
    name: "High Temperature Lead Wires",
    image: "/images/CABLES.JPG",
    heroImage: "/images/CABLES - SLEEVES.JPG",
    description: "High-temperature lead wires for heater connections. Available in fiberglass, Teflon, and silicone insulated options for various temperature requirements.",
    features: [
      "High temperature rating",
      "Multiple insulation options",
      "Flexible design",
      "Chemical resistant",
      "Various gauge sizes"
    ],
    specifications: [
      { label: "Temperature", value: "Up to 600°C" },
      { label: "Insulation", value: "Fiberglass / Teflon / Silicone" },
      { label: "Gauge", value: "14 AWG to 22 AWG" },
      { label: "Conductor", value: "Nickel / Copper" },
      { label: "Braiding", value: "SS / Fiberglass" },
      { label: "Length", value: "Customized" }
    ],
    applications: [
      "Heater lead connections",
      "High temperature wiring",
      "Industrial equipment",
      "Furnace wiring"
    ],
    relatedProducts: ["terminal-boxes", "ceramic-connectors"]
  }
];

// Main Categories Structure
export const categories: Category[] = [
  {
    id: "heaters",
    name: "Heaters",
    description: "Comprehensive range of industrial heating elements including band heaters, tubular heaters, cartridge heaters, and more.",
    heroImage: "/images/heaters-category-hero.jpg",
    subcategories: [
      {
        id: "band-heaters",
        name: "Band Heaters",
        tagline: "Mica, Ceramic & Nozzle Band Heaters for Plastic Processing",
        heroImage: "/images/band-heaters-subcategory.jpg",
        description: "High-quality band heaters for barrels, nozzles, and dies of plastic processing machinery.",
        products: heaterProducts.filter(p => 
          ["mica-band-heaters", "nozzle-band-heaters", "ceramic-band-heaters"].includes(p.id)
        )
      },
      {
        id: "tubular-immersion",
        name: "Tubular & Immersion Heaters",
        tagline: "Custom Designed for Liquid and Gas Heating",
        heroImage: "/images/tubular-heaters-subcategory.jpg",
        description: "Tubular and immersion heaters for direct heating of liquids, gases, and surface applications.",
        products: heaterProducts.filter(p => 
          ["tubular-heaters", "immersion-heaters"].includes(p.id)
        )
      },
      {
        id: "cartridge-coil",
        name: "Cartridge & Coil Heaters",
        tagline: "High Watt Density Heating Solutions",
        heroImage: "/images/cartridge-heaters-subcategory.jpg",
        description: "Compact high-watt density heaters for precision heating applications.",
        products: heaterProducts.filter(p => 
          ["cartridge-heaters", "coil-heaters"].includes(p.id)
        )
      },
      {
        id: "specialty-heaters",
        name: "Specialty Heaters",
        tagline: "Titanium, Porcelain, Silica Glass & More",
        heroImage: "/images/specialty-heaters-subcategory.jpg",
        description: "Specialized heaters for corrosive environments, high purity, and unique applications.",
        products: heaterProducts.filter(p => 
          ["titanium-heaters", "porcelain-heaters", "silica-glass-heaters", "d-type-heaters"].includes(p.id)
        )
      },
      {
        id: "industrial-heaters",
        name: "Industrial Heaters",
        tagline: "Infrared, Casting, Strip & Corrugation Heaters",
        heroImage: "/images/industrial-heaters-subcategory.jpg",
        description: "Heavy-duty industrial heaters for various manufacturing processes.",
        products: heaterProducts.filter(p => 
          ["infrared-heaters", "casting-heaters", "strip-heaters", "manifold-heaters", "space-heaters", "induction-heating-coil", "corrugation-heaters"].includes(p.id)
        )
      }
    ]
  },
  {
    id: "thermocouples",
    name: "Thermocouples",
    description: "Precision temperature measurement solutions including MI thermocouples, manifold thermocouples, and ring type sensors.",
    heroImage: "/images/thermocouples-category-hero.jpg",
    subcategories: [
      {
        id: "industrial-thermocouples",
        name: "Industrial Thermocouples",
        tagline: "Accurate Temperature Measurement Solutions",
        heroImage: "/images/thermocouples-subcategory.jpg",
        description: "High-quality thermocouples for precise temperature measurement in industrial applications.",
        products: thermocoupleProducts
      }
    ]
  },
  {
    id: "heating-equipment",
    name: "Heating Equipment",
    description: "Complete heating systems including industrial ovens, furnaces, heating mantles, and furnace coils.",
    heroImage: "/images/heating-equipment-category-hero.jpg",
    subcategories: [
      {
        id: "ovens-furnaces",
        name: "Ovens & Furnaces",
        tagline: "Complete Heating Systems for Industrial Applications",
        heroImage: "/images/ovens-furnaces-subcategory.jpg",
        description: "Custom designed industrial ovens, tray dryers, and furnaces for various heating applications.",
        products: heatingEquipmentProducts.filter(p => 
          ["industrial-ovens", "furnaces"].includes(p.id)
        )
      },
      {
        id: "mantles-coils",
        name: "Heating Mantles & Coils",
        tagline: "Laboratory and Industrial Heating Solutions",
        heroImage: "/images/mantles-coils-subcategory.jpg",
        description: "Heating mantles for laboratory use and furnace coils for industrial applications.",
        products: heatingEquipmentProducts.filter(p => 
          ["heating-mantles", "furnace-coils"].includes(p.id)
        )
      }
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Heating accessories including energy saving jackets, terminal boxes, ceramic connectors, and high-temperature lead wires.",
    heroImage: "/images/accessories-category-hero.jpg",
    subcategories: [
      {
        id: "heating-accessories",
        name: "Heating Accessories",
        tagline: "Complete Range of Heating Accessories",
        heroImage: "/images/accessories-subcategory.jpg",
        description: "Essential accessories for heating systems including insulation jackets, connectors, and wiring.",
        products: accessoriesProducts
      }
    ]
  }
];

// Helper functions
export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): Subcategory | undefined {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
}

export function getProductById(productId: string): Product | undefined {
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find(p => p.id === productId);
      if (product) return product;
    }
  }
  return undefined;
}

export function getAllProducts(): Product[] {
  const products: Product[] = [];
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      products.push(...subcategory.products);
    }
  }
  return products;
}

export function getRelatedProducts(productIds: string[]): Product[] {
  return productIds.map(id => getProductById(id)).filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return [
    heaterProducts[0], // Mica Band Heaters
    heaterProducts[1], // Nozzle Band Heaters
    heaterProducts[2], // Ceramic Band Heaters
    heaterProducts[4], // Immersion Heaters
    thermocoupleProducts[0], // MI Thermocouples
    heatingEquipmentProducts[0], // Industrial Ovens
  ];
}
