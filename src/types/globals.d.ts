


interface SoulThreadDevGlobal extends NodeJS.Global {
    env: SoulThreadDevEnv;
}

interface SoulThreadDevEnv {
    ENV: 'development' | 'production' | 'test';
    MAINTENANCE_MODE: boolean;
    
    VERSION: string;
    OS: NodeJS.Platform | "unknown";
    APP_URL: string;
}