import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance();
const config2 = AppConfigService.getInstance();

console.log(config1.companyName); 
console.log(config2.companyName); 
console.log("Чи це один і той самий об'єкт?", config1 === config2); 