


interface SoulThreadDevGlobal extends NodeJS.Global {
    env: SoulThreadDevEnv;
    config: SoulThreadDevConfig;
}

interface SoulThreadDevEnv {
    ENV: 'development' | 'production' | 'test';
    
    VERSION: string;
    OS: NodeJS.Platform | "unknown";
    APP_URL: string;
}

interface SoulThreadDevConfig {
    maintenance: {
        isEnabled: boolean;
        message: string;
        mode: "full" | "partial-block" | "partial-allow";
        subdomainsAllowed: string[];
        subdomainsBlocked: string[];
    };
}