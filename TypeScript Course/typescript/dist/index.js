const isOpen = false;
const myName = 'Randy';
const myAge = 32;
const list = [0, 1, 2];
const me = ["Randy", 32];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
;
const job = Job.WebDev;
const phone = "Pixel";
const tablet = 3;
// const uhoh: never = 10;
const sayWord = (word) => {
    console.log(word);
    return word;
};
sayWord('Randy');
