// add-scale.js (CommonJS 버전)
const fs = require("fs");

let scss = fs.readFileSync("css/styles.scss", "utf8");

// px 단위를 찾아 scale()로 감싸기
scss = scss.replace(/([0-9.]+)px/g, (_, num) => `scale(${num}px)`);

fs.writeFileSync("css/style_scaled.scss", scss);
console.log("✅ 모든 px 값에 scale() 적용 완료 → style_scaled.scss 생성됨");
