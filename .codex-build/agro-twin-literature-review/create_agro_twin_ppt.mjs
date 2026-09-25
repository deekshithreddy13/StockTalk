import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const FINAL_PPTX = "/Users/eppadeekshithreddy/Documents/Stock Talk/Agro_Twin_Literature_Review.pptx";
const OUT_DIR = "/Users/eppadeekshithreddy/Documents/Stock Talk/.codex-build/agro-twin-literature-review/rendered";

const W = 1280;
const H = 720;
const page = { left: 72, top: 58, width: 1136, height: 600 };

const colors = {
  ink: "#0B0F0E",
  muted: "#59645F",
  light: "#F4F6F1",
  panel: "#E7ECE2",
  rule: "#B8C2B5",
  green: "#2F7D4A",
  soil: "#B87333",
  sky: "#3D8DFF",
  white: "#FFFFFF",
};

const sources = [
  "Verdouw et al. (2021), Digital twins in smart farming, Agricultural Systems. DOI: 10.1016/j.agsy.2020.103046",
  "Pylianidis et al. (2021), Introducing digital twins to agriculture, Computers and Electronics in Agriculture. DOI: 10.1016/j.compag.2020.105942",
  "Wolfert et al. (2017), Big Data in Smart Farming - A review, Agricultural Systems. DOI: 10.1016/j.agsy.2017.01.023",
  "Liakos et al. (2018), Machine Learning in Agriculture: A Review, Sensors. DOI: 10.3390/s18082674",
  "Kamilaris & Prenafeta-Boldu (2018), Deep learning in agriculture: A survey, Computers and Electronics in Agriculture. DOI: 10.1016/j.compag.2018.02.016",
  "Atzori et al. (2010), The Internet of Things: A survey, Computer Networks. DOI: 10.1016/j.comnet.2010.05.010",
];

function addText(slide, text, pos, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: pos,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontFace: "Helvetica Neue",
    fontSize: 20,
    color: colors.ink,
    ...style,
  };
  return shape;
}

function addBox(slide, pos, fill = colors.light, line = colors.rule) {
  return slide.shapes.add({
    geometry: "rect",
    position: pos,
    fill,
    line: { style: "solid", fill: line, width: 1 },
  });
}

function addHeader(slide, title, section = "Literature Review") {
  addText(slide, section.toUpperCase(), { left: page.left, top: 34, width: 300, height: 24 }, {
    fontSize: 13,
    bold: true,
    color: colors.green,
  });
  addText(slide, title, { left: page.left, top: 72, width: 1000, height: 88 }, {
    fontSize: 37,
    bold: true,
    color: colors.ink,
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: page.left, top: 158, width: 114, height: 5 },
    fill: colors.green,
    line: { style: "solid", fill: colors.green, width: 0 },
  });
}

function addFooter(slide, n) {
  addText(slide, `Agro Twin | ${n}`, { left: 1078, top: 668, width: 130, height: 22 }, {
    fontSize: 13,
    color: colors.muted,
    alignment: "right",
  });
}

function addBullets(slide, items, x, y, w, lineHeight = 46, fontSize = 21) {
  items.forEach((item, i) => {
    const cy = y + i * lineHeight + 7;
    slide.shapes.add({
      geometry: "ellipse",
      position: { left: x, top: cy, width: 10, height: 10 },
      fill: colors.green,
      line: { style: "solid", fill: colors.green, width: 0 },
    });
    addText(slide, item, { left: x + 28, top: y + i * lineHeight, width: w - 28, height: lineHeight - 2 }, {
      fontSize,
      color: colors.ink,
    });
  });
}

function addNotes(slide, claim, usedSources) {
  slide.speakerNotes.textFrame.setText(`[Sources]\nClaim: ${claim}\n${usedSources.map((s) => `- ${s}`).join("\n")}`);
  slide.speakerNotes.setVisible(true);
}

function addMiniFarmGraphic(slide, x, y, w, h) {
  addBox(slide, { left: x, top: y, width: w, height: h }, "#F2F7EE", "#D9E3D6");
  for (let i = 0; i < 7; i++) {
    slide.shapes.add({
      geometry: "arc",
      position: { left: x + 32, top: y + 72 + i * 34, width: w - 64, height: 42 },
      fill: "none",
      line: { style: "solid", fill: i % 2 ? colors.green : colors.soil, width: 3 },
    });
  }
  ["Sensor", "Crop", "Weather", "Twin"].forEach((label, i) => {
    const px = x + 58 + i * 118;
    const py = y + 52 + (i % 2) * 95;
    slide.shapes.add({
      geometry: "ellipse",
      position: { left: px, top: py, width: 62, height: 62 },
      fill: i === 3 ? colors.sky : colors.white,
      line: { style: "solid", fill: colors.green, width: 2 },
    });
    addText(slide, label, { left: px - 18, top: py + 72, width: 100, height: 28 }, {
      fontSize: 14,
      bold: true,
      color: i === 3 ? colors.sky : colors.green,
      alignment: "center",
    });
  });
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  // 1. Title
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addText(slide, "Agro Twin", { left: 72, top: 110, width: 560, height: 76 }, {
      fontSize: 62,
      bold: true,
      color: colors.ink,
    });
    addText(slide, "Literature Review", { left: 75, top: 198, width: 560, height: 54 }, {
      fontSize: 34,
      bold: true,
      color: colors.green,
    });
    addText(slide, "Digital twin enabled smart agriculture for crop monitoring, prediction, and decision support.", { left: 75, top: 292, width: 520, height: 120 }, {
      fontSize: 24,
      color: colors.muted,
    });
    addMiniFarmGraphic(slide, 688, 92, 500, 486);
    addText(slide, "Project Review Deck", { left: 75, top: 604, width: 300, height: 24 }, {
      fontSize: 16,
      color: colors.muted,
    });
    addNotes(slide, "Agro Twin is positioned within digital twin and smart agriculture research.", [sources[0], sources[1]]);
  }

  // 2. Abstract
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "Abstract: Agro Twin connects farm data to decisions");
    addText(slide, "Agro Twin is proposed as a digital representation of an agricultural field that continuously receives data from sensors, weather inputs, and crop observations.", { left: 92, top: 218, width: 1030, height: 92 }, {
      fontSize: 26,
      color: colors.ink,
    });
    addBullets(slide, [
      "The review studies IoT sensing, big-data analytics, machine learning, and agricultural digital twins.",
      "Existing work shows strong progress in monitoring and prediction, but weaker integration across full farm decision cycles.",
      "The proposed system focuses on real-time crop condition tracking, risk prediction, and farmer-friendly recommendations."
    ], 118, 352, 1000, 56, 22);
    addFooter(slide, 2);
    addNotes(slide, "The abstract synthesizes digital twin, IoT, big-data, and AI themes in agriculture.", [sources[0], sources[1], sources[2], sources[3]]);
  }

  // 3. Introduction
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "Smart farming needs a live view of the field");
    addBox(slide, { left: 80, top: 222, width: 315, height: 310 }, colors.light);
    addBox(slide, { left: 482, top: 222, width: 315, height: 310 }, colors.light);
    addBox(slide, { left: 884, top: 222, width: 315, height: 310 }, colors.light);
    [
      ["Field variability", "Soil moisture, nutrients, pest stress, and micro-climate can vary across the same farm."],
      ["Data availability", "IoT devices, images, and weather APIs make continuous observation possible."],
      ["Decision pressure", "Farmers need timely guidance before stress becomes yield loss."]
    ].forEach(([head, body], i) => {
      const x = 110 + i * 402;
      addText(slide, head, { left: x, top: 258, width: 255, height: 42 }, {
        fontSize: 25,
        bold: true,
        color: colors.green,
      });
      addText(slide, body, { left: x, top: 322, width: 255, height: 145 }, {
        fontSize: 21,
        color: colors.ink,
      });
    });
    addFooter(slide, 3);
    addNotes(slide, "Digital agriculture research frames sensing, variability, and analytics as central smart-farming drivers.", [sources[2], sources[5]]);
  }

  // 4. State of the Art
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "State of the art: twins create a field feedback loop");
    const steps = [
      ["Sense", "IoT sensors, weather feeds, remote imagery"],
      ["Model", "Virtual field, crop growth, soil-water status"],
      ["Predict", "ML risk estimates, yield trends, irrigation need"],
      ["Act", "Alerts, recommendations, adaptive planning"]
    ];
    steps.forEach(([head, body], i) => {
      const x = 92 + i * 286;
      addBox(slide, { left: x, top: 258, width: 218, height: 190 }, i === 1 ? "#EAF3FF" : colors.light);
      addText(slide, String(i + 1).padStart(2, "0"), { left: x + 22, top: 278, width: 60, height: 34 }, {
        fontSize: 24,
        bold: true,
        color: i === 1 ? colors.sky : colors.green,
      });
      addText(slide, head, { left: x + 22, top: 326, width: 174, height: 36 }, {
        fontSize: 27,
        bold: true,
      });
      addText(slide, body, { left: x + 22, top: 378, width: 174, height: 78 }, {
        fontSize: 18,
        color: colors.muted,
      });
      if (i < steps.length - 1) {
        addText(slide, "→", { left: x + 230, top: 326, width: 36, height: 44 }, { fontSize: 38, color: colors.rule });
      }
    });
    addText(slide, "Digital twin literature emphasizes a feedback loop: the real farm updates the virtual model, and the model improves real-farm decisions.", { left: 112, top: 518, width: 1015, height: 60 }, {
      fontSize: 23,
      color: colors.ink,
    });
    addFooter(slide, 4);
    addNotes(slide, "Digital twins in agriculture are described as linked physical-virtual systems supported by data streams and decision feedback.", [sources[0], sources[1]]);
  }

  // 5. Existing System
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "Existing systems solve parts of farm intelligence");
    const rows = [
      ["IoT monitoring", "Soil moisture, temperature, humidity, pH, and field alerts", "Strong for observation; limited without predictive context"],
      ["Remote sensing", "Drone/satellite imagery for crop health and canopy change", "Useful at scale; may miss local ground truth"],
      ["ML prediction", "Disease detection, yield estimation, irrigation forecasting", "Often trained for one task rather than whole-farm decisions"],
      ["Farm dashboards", "Visual reports and advisory messages", "Readable outputs, but integration and localization vary"]
    ];
    addBox(slide, { left: 86, top: 218, width: 1108, height: 344 }, colors.white, colors.rule);
    ["Approach", "Typical Use", "Limitation"].forEach((h, i) => {
      addText(slide, h, { left: 112 + i * 370, top: 238, width: 300, height: 32 }, {
        fontSize: 20,
        bold: true,
        color: colors.green,
      });
    });
    rows.forEach((row, r) => {
      const y = 286 + r * 66;
      slide.shapes.add({ geometry: "rect", position: { left: 86, top: y - 8, width: 1108, height: 1 }, fill: colors.rule, line: { style: "solid", fill: colors.rule, width: 0 } });
      row.forEach((cell, c) => {
        addText(slide, cell, { left: 112 + c * 370, top: y, width: c === 0 ? 270 : 320, height: 52 }, {
          fontSize: c === 0 ? 19 : 17,
          bold: c === 0,
          color: c === 0 ? colors.ink : colors.muted,
        });
      });
    });
    addFooter(slide, 5);
    addNotes(slide, "Existing smart-farming systems include IoT monitoring, remote sensing, ML prediction, and dashboards, but are frequently fragmented by task and data source.", [sources[2], sources[3], sources[4], sources[5]]);
  }

  // 6. Gaps Identified
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "Gaps identified: the farm model is still fragmented");
    addBullets(slide, [
      "Data silos: sensors, images, weather data, and advisory outputs are often handled separately.",
      "Weak real-time synchronization: models may not update quickly enough as field conditions change.",
      "Limited explainability: many predictions do not clearly tell farmers why an action is recommended.",
      "Scalability barriers: solutions can be expensive, connectivity-dependent, or hard to adapt to small farms.",
      "Local context gaps: soil type, crop variety, language, and farmer practices are not always represented."
    ], 96, 228, 1020, 62, 21);
    addFooter(slide, 6);
    addNotes(slide, "The identified gaps synthesize challenges reported across digital twin, big-data, IoT, and ML literature.", [sources[0], sources[1], sources[2], sources[3]]);
  }

  // 7. Proposed System
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "Proposed system: Agro Twin closes the loop");
    const y = 258;
    const nodes = [
      ["Input Layer", "Sensors\nWeather\nImages"],
      ["Twin Layer", "Field state\nCrop profile\nSoil-water model"],
      ["AI Layer", "Risk scoring\nForecasting\nRecommendation"],
      ["User Layer", "Dashboard\nAlerts\nAction log"]
    ];
    nodes.forEach(([head, body], i) => {
      const x = 80 + i * 300;
      addBox(slide, { left: x, top: y, width: 225, height: 198 }, i === 1 ? "#EAF3FF" : colors.light);
      addText(slide, head, { left: x + 22, top: y + 24, width: 180, height: 32 }, {
        fontSize: 23,
        bold: true,
        color: i === 1 ? colors.sky : colors.green,
      });
      addText(slide, body, { left: x + 22, top: y + 78, width: 180, height: 86 }, {
        fontSize: 20,
        color: colors.ink,
      });
      if (i < nodes.length - 1) {
        addText(slide, "→", { left: x + 235, top: y + 74, width: 45, height: 55 }, { fontSize: 42, color: colors.rule });
      }
    });
    addText(slide, "Feedback: actual field response updates the next recommendation cycle.", { left: 224, top: 522, width: 830, height: 46 }, {
      fontSize: 25,
      bold: true,
      color: colors.soil,
      alignment: "center",
    });
    addFooter(slide, 7);
    addNotes(slide, "The proposed Agro Twin system applies a digital-twin feedback-loop pattern to integrated farm monitoring and advisory support.", [sources[0], sources[1], sources[3]]);
  }

  // 8. References
  {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;
    addHeader(slide, "References");
    const refs = [
      "Verdouw, C. N., Tekinerdogan, B., Beulens, A., & Wolfert, S. (2021). Digital twins in smart farming. Agricultural Systems, 189, 103046.",
      "Pylianidis, C., Osinga, S., & Athanasiadis, I. N. (2021). Introducing digital twins to agriculture. Computers and Electronics in Agriculture, 184, 105942.",
      "Wolfert, S., Ge, L., Verdouw, C., & Bogaardt, M.-J. (2017). Big Data in Smart Farming - A review. Agricultural Systems, 153, 69-80.",
      "Liakos, K. G., Busato, P., Moshou, D., Pearson, S., & Bochtis, D. (2018). Machine Learning in Agriculture: A Review. Sensors, 18(8), 2674.",
      "Kamilaris, A., & Prenafeta-Boldu, F. X. (2018). Deep learning in agriculture: A survey. Computers and Electronics in Agriculture, 147, 70-90.",
      "Atzori, L., Iera, A., & Morabito, G. (2010). The Internet of Things: A survey. Computer Networks, 54(15), 2787-2805."
    ];
    refs.forEach((ref, i) => {
      addText(slide, `${i + 1}. ${ref}`, { left: 92, top: 216 + i * 62, width: 1070, height: 48 }, {
        fontSize: 17,
        color: colors.ink,
      });
    });
    addFooter(slide, 8);
    addNotes(slide, "Reference list for the literature-review deck.", sources);
  }

  for (const [index, slide] of deck.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(OUT_DIR, `${stem}.png`), await deck.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(path.join(OUT_DIR, `${stem}.layout.json`), await (await slide.export({ format: "layout" })).text());
  }
  await writeBlob(path.join(OUT_DIR, "montage.webp"), await deck.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save(FINAL_PPTX);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
