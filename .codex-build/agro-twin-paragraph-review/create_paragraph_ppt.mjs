import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const FINAL_PPTX = "/Users/eppadeekshithreddy/Documents/Stock Talk/Agro_Twin_Literature_Review_Paragraph_Format.pptx";
const OUT_DIR = "/Users/eppadeekshithreddy/Documents/Stock Talk/.codex-build/agro-twin-paragraph-review/rendered";

const W = 1280;
const H = 720;
const margin = 78;
const colors = {
  ink: "#101412",
  muted: "#4F5C55",
  green: "#2F7D4A",
  pale: "#F5F8F3",
  line: "#C8D3C5",
  white: "#FFFFFF",
};

const refs = [
  "Verdouw, C. N., Tekinerdogan, B., Beulens, A., & Wolfert, S. (2021). Digital twins in smart farming. Agricultural Systems, 189, 103046. https://doi.org/10.1016/j.agsy.2020.103046",
  "Pylianidis, C., Osinga, S., & Athanasiadis, I. N. (2021). Introducing digital twins to agriculture. Computers and Electronics in Agriculture, 184, 105942. https://doi.org/10.1016/j.compag.2020.105942",
  "Wolfert, S., Ge, L., Verdouw, C., & Bogaardt, M.-J. (2017). Big Data in Smart Farming - A review. Agricultural Systems, 153, 69-80. https://doi.org/10.1016/j.agsy.2017.01.023",
  "Liakos, K. G., Busato, P., Moshou, D., Pearson, S., & Bochtis, D. (2018). Machine Learning in Agriculture: A Review. Sensors, 18(8), 2674. https://doi.org/10.3390/s18082674",
  "Kamilaris, A., & Prenafeta-Boldu, F. X. (2018). Deep learning in agriculture: A survey. Computers and Electronics in Agriculture, 147, 70-90. https://doi.org/10.1016/j.compag.2018.02.016",
  "Atzori, L., Iera, A., & Morabito, G. (2010). The Internet of Things: A survey. Computer Networks, 54(15), 2787-2805. https://doi.org/10.1016/j.comnet.2010.05.010",
];

const slides = [
  {
    title: "Agro Twin",
    subtitle: "Literature Review",
    section: "Title",
    paragraphs: [
      "Agro Twin is a proposed digital twin based smart agriculture system. The project studies how a virtual representation of an agricultural field can be connected with real field data, crop observations, weather information, and prediction models to support better farming decisions.",
      "This literature review examines existing work in Internet of Things based smart farming, machine learning in agriculture, big-data driven farm management, and agricultural digital twins. The review is used to identify the research gap and justify the need for the proposed Agro Twin system.",
    ],
  },
  {
    title: "Abstract",
    section: "Literature Review",
    paragraphs: [
      "Agriculture is increasingly moving from experience-based decision making to data-supported decision making. Recent research shows that sensors, weather data, remote observation, and artificial intelligence can help monitor crop condition, detect stress, and predict farm requirements. However, many systems remain limited to separate monitoring or prediction tasks.",
      "The Agro Twin project is proposed as an integrated digital twin system for smart farming. It aims to maintain a continuously updated virtual model of the field and use that model to provide crop condition monitoring, risk prediction, and decision support. This review highlights the state of current research, the limitations of existing systems, and the gap that Agro Twin intends to address.",
    ],
  },
  {
    title: "Introduction",
    section: "Background",
    paragraphs: [
      "Smart agriculture applies digital technologies to improve productivity, resource use, and crop management. Traditional farming decisions often depend on periodic observation and farmer experience, but field conditions such as soil moisture, temperature, nutrient status, pest attack, and crop stress can change quickly. Because of this variability, farmers need timely and reliable information.",
      "Internet of Things devices, weather services, crop images, and machine learning models have created new opportunities for agricultural decision support. A digital twin extends these technologies by linking a physical farm with a virtual model that changes as real data changes. In the context of Agro Twin, this concept can help convert raw field data into meaningful recommendations.",
    ],
  },
  {
    title: "State of the Art",
    section: "Related Research",
    paragraphs: [
      "The state of the art in smart agriculture includes IoT based field monitoring, remote sensing, cloud platforms, big-data analytics, machine learning, and digital twin architectures. IoT research focuses on collecting real-time data from the farm, while machine learning research focuses on prediction tasks such as disease detection, yield estimation, irrigation scheduling, and crop classification.",
      "Digital twin research brings these components together by creating a synchronized virtual representation of the physical agricultural system. Studies on agricultural digital twins explain that a useful twin should not only store data, but also support simulation, prediction, feedback, and decision making. This makes the digital twin approach more suitable for integrated farm intelligence than isolated sensor dashboards.",
    ],
  },
  {
    title: "Existing System",
    section: "Current Practice",
    paragraphs: [
      "Existing smart farming systems commonly use sensors to measure soil moisture, temperature, humidity, pH, and other environmental variables. Some systems also use drone or satellite imagery to observe crop health over larger areas. These systems are useful because they reduce manual observation and provide farmers with more frequent information about field conditions.",
      "Machine learning based systems are also widely used for crop disease detection, yield prediction, irrigation forecasting, and advisory support. Although these systems improve individual tasks, many of them operate separately. A sensor system may collect data without deep prediction, while a prediction model may work without a continuously updated field model. This separation limits the intelligence of the overall farming system.",
    ],
  },
  {
    title: "Gaps Identified",
    section: "Research Gap",
    paragraphs: [
      "The literature shows that a major gap in existing systems is the lack of integration between data collection, real-time synchronization, prediction, and decision support. Many solutions handle only one part of the problem, such as monitoring soil moisture or detecting crop disease. As a result, the farmer may receive data but not a complete understanding of the current field condition and the required action.",
      "Another important gap is explainability and local adaptation. Farmers need recommendations that are understandable, practical, and suitable for their crop, soil, climate, and available resources. Systems that depend heavily on connectivity, costly hardware, or generic models may not work well for small and medium farms. Therefore, a more unified, adaptive, and farmer-oriented system is required.",
    ],
  },
  {
    title: "Proposed System",
    section: "Agro Twin",
    paragraphs: [
      "The proposed Agro Twin system addresses the identified gaps by creating a digital twin of the agricultural field. The system can collect data from field sensors, weather sources, and crop observations, then update a virtual model that represents the present condition of the farm. This model can be used to analyze crop health, water requirements, environmental stress, and possible risks.",
      "Agro Twin is intended to support a continuous decision loop. Data from the farm updates the twin, the twin supports prediction and recommendation, and the farmer's action produces new field changes that can again be observed. In this way, the proposed system moves beyond simple monitoring and aims to provide integrated, timely, and practical decision support for smart agriculture.",
    ],
  },
  {
    title: "References",
    section: "Academic Sources",
    references: refs,
  },
];

function addText(slide, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
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

function addRule(slide, top) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: margin, top, width: 1124, height: 2 },
    fill: colors.line,
    line: { style: "solid", fill: colors.line, width: 0 },
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: margin, top, width: 154, height: 5 },
    fill: colors.green,
    line: { style: "solid", fill: colors.green, width: 0 },
  });
}

function addFooter(slide, index) {
  addText(slide, `Agro Twin Literature Review | ${index}`, { left: 880, top: 666, width: 322, height: 24 }, {
    fontSize: 14,
    color: colors.muted,
    alignment: "right",
  });
}

function addNotes(slide, text) {
  slide.speakerNotes.textFrame.setText(`[Sources]\n${text}\n\n${refs.map((r) => `- ${r}`).join("\n")}`);
  slide.speakerNotes.setVisible(true);
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const deck = Presentation.create({ slideSize: { width: W, height: H } });

  slides.forEach((data, index) => {
    const slide = deck.slides.add();
    slide.background.fill = colors.white;

    addText(slide, data.section.toUpperCase(), { left: margin, top: 42, width: 420, height: 24 }, {
      fontSize: 14,
      bold: true,
      color: colors.green,
    });

    const titleSize = index === 0 ? 58 : 39;
    addText(slide, data.title, { left: margin, top: index === 0 ? 104 : 78, width: 990, height: index === 0 ? 72 : 58 }, {
      fontSize: titleSize,
      bold: true,
      color: colors.ink,
    });

    if (data.subtitle) {
      addText(slide, data.subtitle, { left: margin, top: 180, width: 720, height: 48 }, {
        fontSize: 35,
        bold: true,
        color: colors.green,
      });
      addRule(slide, 254);
    } else {
      addRule(slide, 146);
    }

    if (data.paragraphs) {
      const firstTop = index === 0 ? 302 : 210;
      data.paragraphs.forEach((paragraph, pIndex) => {
        const top = firstTop + pIndex * (index === 0 ? 146 : 168);
        const h = index === 0 ? 116 : 136;
        if (pIndex === 0 && index !== 0) {
          slide.shapes.add({
            geometry: "rect",
            position: { left: margin - 18, top: top - 18, width: 1160, height: h + 34 },
            fill: colors.pale,
            line: { style: "solid", fill: colors.line, width: 1 },
          });
        }
        addText(slide, paragraph, { left: margin, top, width: 1100, height: h }, {
          fontSize: index === 0 ? 22 : 21,
          color: colors.ink,
        });
      });
    }

    if (data.references) {
      data.references.forEach((ref, rIndex) => {
        addText(slide, `${rIndex + 1}. ${ref}`, { left: margin, top: 196 + rIndex * 70, width: 1100, height: 54 }, {
          fontSize: 16,
          color: colors.ink,
        });
      });
    }

    addFooter(slide, index + 1);
    addNotes(slide, `Slide ${index + 1} uses the listed literature to support the paragraph content.`);
  });

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
