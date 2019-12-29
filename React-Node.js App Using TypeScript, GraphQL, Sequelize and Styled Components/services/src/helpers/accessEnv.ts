const cache: { [key: string]: any } = {};

//this allows us to get the values from inside process.env
//reason: access from process.env is expensive
//this will make it easier to access on the 2nd and 3rd times
//you need types installed for typescript to access process.env
//npm i @types/node

const accessEnv = (key: string, defaultValue?: any) => {
    if (!(key in process.env)) {
        if(defaultValue) return defaultValue;
        throw new Error(`${key} not found in process.env!`);
    }

    if(cache[key]) return cache[key];

    cache[key] = process.env[key];

    return process.env[key];
};

export default accessEnv;
