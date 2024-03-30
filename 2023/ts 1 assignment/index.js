var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var apiKey = "37450a2c94bd4ee5b0dc3074c2456b19";
var cities = ["New York", "London", "Paris"];
function getWeatherData(city) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, {
                            cityName: city,
                            temperature: data.main.temp,
                            humidity: data.main.humidity,
                            windSpeed: data.wind.speed,
                        }];
            }
        });
    });
}
function displayWeatherData() {
    return __awaiter(this, void 0, void 0, function () {
        var weatherData, table, _i, weatherData_1, data, row, cityCell, tempCell, humidityCell, windCell;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(cities.map(getWeatherData))];
                case 1:
                    weatherData = _a.sent();
                    table = document.getElementById('weather-table');
                    // Clear any existing rows from the table
                    while ((table === null || table === void 0 ? void 0 : table.rows.length) > 0) {
                        table.deleteRow(0);
                    }
                    // Create table rows and cells with weather data for all cities
                    for (_i = 0, weatherData_1 = weatherData; _i < weatherData_1.length; _i++) {
                        data = weatherData_1[_i];
                        row = table === null || table === void 0 ? void 0 : table.insertRow();
                        cityCell = row === null || row === void 0 ? void 0 : row.insertCell();
                        cityCell.textContent = data.cityName;
                        tempCell = row === null || row === void 0 ? void 0 : row.insertCell();
                        tempCell.textContent = data.temperature.toFixed(1);
                        humidityCell = row === null || row === void 0 ? void 0 : row.insertCell();
                        humidityCell.textContent = data.humidity.toString();
                        windCell = row === null || row === void 0 ? void 0 : row.insertCell();
                        windCell.textContent = data.windSpeed.toString();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
displayWeatherData().catch(function (error) { return console.error(error); });
