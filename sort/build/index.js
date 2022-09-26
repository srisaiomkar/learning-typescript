"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const sorter = new Sorter_1.Sorter([1, 2, 3, 5, -1]);
sorter.sort();
console.log(sorter.collection);
