const { collector } = require("./build");
const { join } = require("path");
(async () => {
  const EMULATE_DEVICE = "Tor";

  // Save the results to a folder
  let OUT_DIR = true;

  // The URL to test
  const URL = "example.com";

  const defaultConfig = {
    inUrl: process.argv.slice(2)[0],
    numPages: 3,
    headless: true,
    emulateDevice: EMULATE_DEVICE,
  };

  const result = await collector(
    OUT_DIR
      ? { ...defaultConfig, ...{ outDir: join(__dirname, "demo-dir") } }
      : defaultConfig
  );
  if (OUT_DIR) {
    console.log(
      `For captured data please look in ${join(__dirname, "demo-dir")}`
    );

  }
})();
