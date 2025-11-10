declare const global: SoulThreadDevGlobal;

async function initializeGlobalVariables() {
  console.log("Registering Global Variables...");
  global.env = {
    ENV: (() => {
      const envValue = process.env.ENV || "development";
      const validEnvs = ["development", "production", "test"] as const;
      return validEnvs.includes(envValue as any) ? envValue as "development" | "production" | "test" : "development";
    })(),

    VERSION: process.env.npm_package_version || "1.0.0",
    OS: typeof process !== 'undefined' && typeof process.platform !== 'undefined' ? process.platform : "unknown",
    APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  }
  console.log("Global variables registered");
}


export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await initializeGlobalVariables();

  }
}

