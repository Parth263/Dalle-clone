import { surpriseMePrompts } from "../constants/constants";

export function GetRandomPrompt(prompt) {
const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); 
const randomPrompt = surpriseMePrompts[randomIndex];

if(randomPrompt === prompt) return GetRandomPrompt(prompt);

return randomPrompt;
}