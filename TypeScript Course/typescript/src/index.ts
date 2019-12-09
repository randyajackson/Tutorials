const isOpen: boolean = false;
const myName: string = 'Randy';
const myAge: number = 32;
const list: number[] = [0,1,2];
const me: [string,number] = ["Randy", 32];

enum Job { WebDev, WebDesigner, PM};
const job: Job = Job.WebDev;

const phone: any = "Pixel";
const tablet: any = 3;

// const uhoh: never = 10;

const sayWord = (word: string): string => {
    console.log(word);
    return word;
};

sayWord('Randy');

