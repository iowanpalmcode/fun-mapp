// Additional data for metrics not in countries.json
const additionalData = {
    
  "USA": { gdp: 21427700, literacy: 99, life_expectancy: 78.9, happiness: 6.9, freedom: 0.92, billionaires: 735, height: 175.3 },
  "CHN": { gdp: 14342903, literacy: 96.8, life_expectancy: 76.9, happiness: 5.1, freedom: 0.55, billionaires: 626, height: 167.1 },
  "JPN": { gdp: 5082465, literacy: 99, life_expectancy: 84.6, happiness: 5.9, freedom: 0.89, billionaires: 47, height: 170.7 },
  "DEU": { gdp: 4223116, literacy: 99, life_expectancy: 81.3, happiness: 7.0, freedom: 0.93, billionaires: 136, height: 175.4 },
  "GBR": { gdp: 2829108, literacy: 99, life_expectancy: 81.3, happiness: 6.8, freedom: 0.91, billionaires: 56 },
  "FRA": { gdp: 2715517, literacy: 99, life_expectancy: 82.7, happiness: 6.7, freedom: 0.89, billionaires: 42 },
  "IND": { gdp: 3176290, literacy: 74.4, life_expectancy: 69.7, happiness: 3.8, freedom: 0.63, billionaires: 166 },
  "ITA": { gdp: 2001249, literacy: 99.2, life_expectancy: 83.4, happiness: 6.0, freedom: 0.85, billionaires: 43 },
  "BRA": { gdp: 1839758, literacy: 92.6, life_expectancy: 75.9, happiness: 6.4, freedom: 0.75, billionaires: 65 },
  "CAN": { gdp: 1736425, literacy: 99, life_expectancy: 82.3, happiness: 7.1, freedom: 0.96, billionaires: 49 },
  "RUS": { gdp: 1776040, literacy: 99.7, life_expectancy: 72.7, happiness: 5.5, freedom: 0.58, billionaires: 117 },
  "KOR": { gdp: 1811150, literacy: 97.9, life_expectancy: 83.3, happiness: 5.9, freedom: 0.84, billionaires: 38 },
  "AUS": { gdp: 1396567, literacy: 99, life_expectancy: 83.4, happiness: 7.2, freedom: 0.95, billionaires: 28 },
  "ESP": { gdp: 1425276, literacy: 98.1, life_expectancy: 83.4, happiness: 6.5, freedom: 0.89, billionaires: 21 },
  "MEX": { gdp: 1291631, literacy: 94.5, life_expectancy: 75.1, happiness: 6.5, freedom: 0.77, billionaires: 12 },
  "IDN": { gdp: 1119190, literacy: 95.7, life_expectancy: 71.7, happiness: 5.3, freedom: 0.72, billionaires: 28 },
  "NLD": { gdp: 909887, literacy: 99, life_expectancy: 82.3, happiness: 7.4, freedom: 0.93, billionaires: 28 },
  "SAU": { gdp: 793522, literacy: 94.7, life_expectancy: 75.1, happiness: 6.4, freedom: 0.71, billionaires: 12 },
  "TUR": { gdp: 754412, literacy: 96.2, life_expectancy: 77.7, happiness: 5.5, freedom: 0.60, billionaires: 26 },
  "CHE": { gdp: 703082, literacy: 99, life_expectancy: 83.8, happiness: 7.6, freedom: 0.96, billionaires: 33 },
  "EGY": { gdp: 303175, literacy: 80.8, life_expectancy: 71.8, happiness: 4.3, freedom: 0.59, billionaires: 0 },
  "THA": { gdp: 543548, literacy: 96.7, life_expectancy: 75.1, happiness: 6.0, freedom: 0.85, billionaires: 5 },
  "POL": { gdp: 592164, literacy: 99.8, life_expectancy: 78.5, happiness: 6.1, freedom: 0.84, billionaires: 11 },
  "SWE": { gdp: 531341, literacy: 99, life_expectancy: 82.7, happiness: 7.4, freedom: 0.96, billionaires: 37 },
  "NGA": { gdp: 448120, literacy: 69.1, life_expectancy: 54.7, happiness: 5.2, freedom: 0.63, billionaires: 5 },
  "ARE": { gdp: 421142, literacy: 93.8, life_expectancy: 77.8, happiness: 6.8, freedom: 0.85, billionaires: 14 },
  "ISR": { gdp: 407101, literacy: 97.8, life_expectancy: 82.8, happiness: 7.1, freedom: 0.88, billionaires: 10 },
  "IRN": { gdp: 388544, literacy: 87.9, life_expectancy: 76.7, happiness: 4.7, freedom: 0.48, billionaires: 0 },
  "PAK": { gdp: 348898, literacy: 58, life_expectancy: 67.3, happiness: 5.7, freedom: 0.59, billionaires: 2 },
  "AFG": { gdp: 20000, literacy: 43, life_expectancy: 64.5, happiness: 2.5, freedom: 0.42, billionaires: 0 },
  "ALB": { gdp: 18000, literacy: 98.1, life_expectancy: 78.5, happiness: 5.0, freedom: 0.75, billionaires: 0 },
  "DZA": { gdp: 180000, literacy: 81.4, life_expectancy: 76.9, happiness: 5.2, freedom: 0.53, billionaires: 0 },
  "AGO": { gdp: 95000, literacy: 71.1, life_expectancy: 60.8, happiness: 4.0, freedom: 0.58, billionaires: 0 },
  "ARG": { gdp: 450000, literacy: 98.1, life_expectancy: 76.7, happiness: 5.9, freedom: 0.84, billionaires: 7 },
  "ARM": { gdp: 14000, literacy: 99.8, life_expectancy: 75.1, happiness: 5.3, freedom: 0.67, billionaires: 0 },
  "AUT": { gdp: 430000, literacy: 98, life_expectancy: 81.5, happiness: 7.2, freedom: 0.91, billionaires: 12 },
  "AZE": { gdp: 48000, literacy: 99.8, life_expectancy: 73.0, happiness: 5.2, freedom: 0.60, billionaires: 1 },
  "BHR": { gdp: 38000, literacy: 97.5, life_expectancy: 77.4, happiness: 6.1, freedom: 0.71, billionaires: 2 },
  "BGD": { gdp: 420000, literacy: 74.7, life_expectancy: 72.6, happiness: 4.5, freedom: 0.73, billionaires: 0 },
  "BLR": { gdp: 60000, literacy: 99.7, life_expectancy: 74.2, happiness: 5.6, freedom: 0.49, billionaires: 0 },
  "BEL": { gdp: 530000, literacy: 99, life_expectancy: 81.6, happiness: 6.9, freedom: 0.91, billionaires: 8 },
  "BLZ": { gdp: 1800, literacy: 82.7, life_expectancy: 74.5, happiness: 5.9, freedom: 0.82, billionaires: 0 },
  "BEN": { gdp: 17000, literacy: 42.4, life_expectancy: 61.8, happiness: 4.9, freedom: 0.67, billionaires: 0 },
  "BTN": { gdp: 2500, literacy: 66.6, life_expectancy: 71.8, happiness: 5.1, freedom: 0.81, billionaires: 0 },
  "BOL": { gdp: 40000, literacy: 95.7, life_expectancy: 71.2, happiness: 5.8, freedom: 0.71, billionaires: 0 },
  "BIH": { gdp: 22000, literacy: 98.5, life_expectancy: 77.4, happiness: 5.8, freedom: 0.71, billionaires: 0 },
  "BWA": { gdp: 18000, literacy: 88.5, life_expectancy: 69.6, happiness: 3.5, freedom: 0.83, billionaires: 0 },
  "BGR": { gdp: 80000, literacy: 98.4, life_expectancy: 74.3, happiness: 5.8, freedom: 0.82, billionaires: 1 },
  "BFA": { gdp: 18000, literacy: 41.2, life_expectancy: 61.6, happiness: 4.4, freedom: 0.72, billionaires: 0 },
  "BDI": { gdp: 3000, literacy: 85.6, life_expectancy: 61.2, happiness: 3.8, freedom: 0.46, billionaires: 0 },
  "CPV": { gdp: 2000, literacy: 87.6, life_expectancy: 72.8, happiness: 5.2, freedom: 0.85, billionaires: 0 },
  "KHM": { gdp: 27000, literacy: 80.5, life_expectancy: 69.8, happiness: 4.6, freedom: 0.80, billionaires: 0 },
  "CMR": { gdp: 39000, literacy: 77.1, life_expectancy: 59.3, happiness: 5.1, freedom: 0.63, billionaires: 0 },
  "CAF": { gdp: 2200, literacy: 56.6, life_expectancy: 53.9, happiness: 3.5, freedom: 0.64, billionaires: 0 },
  "TCD": { gdp: 11000, literacy: 40.2, life_expectancy: 54.0, happiness: 4.4, freedom: 0.43, billionaires: 0 },
  "CHL": { gdp: 300000, literacy: 97.3, life_expectancy: 80.2, happiness: 6.5, freedom: 0.85, billionaires: 2 },
  "COL": { gdp: 330000, literacy: 95.7, life_expectancy: 77.3, happiness: 6.3, freedom: 0.75, billionaires: 2 },
  "COM": { gdp: 1300, literacy: 77.8, life_expectancy: 64.3, happiness: 4.3, freedom: 0.55, billionaires: 0 },
  "COG": { gdp: 13000, literacy: 79.3, life_expectancy: 64.6, happiness: 5.1, freedom: 0.61, billionaires: 0 },
  "COD": { gdp: 55000, literacy: 77.9, life_expectancy: 60.7, happiness: 4.5, freedom: 0.46, billionaires: 0 },
  "CRI": { gdp: 65000, literacy: 97.9, life_expectancy: 80.3, happiness: 7.1, freedom: 0.92, billionaires: 0 },
  "CIV": { gdp: 58000, literacy: 56.9, life_expectancy: 57.8, happiness: 5.3, freedom: 0.69, billionaires: 0 },
  "HRV": { gdp: 68000, literacy: 99.3, life_expectancy: 78.0, happiness: 5.8, freedom: 0.75, billionaires: 0 },
  "CUB": { gdp: 107000, literacy: 99.8, life_expectancy: 78.8, happiness: 5.4, freedom: 0.45, billionaires: 0 },
  "CYP": { gdp: 25000, literacy: 99.1, life_expectancy: 80.7, happiness: 6.2, freedom: 0.85, billionaires: 0 },
  "CZE": { gdp: 250000, literacy: 99, life_expectancy: 79.4, happiness: 6.9, freedom: 0.88, billionaires: 4 },
  "DNK": { gdp: 350000, literacy: 99, life_expectancy: 80.9, happiness: 7.6, freedom: 0.96, billionaires: 11 },
  "DJI": { gdp: 3000, literacy: 67.9, life_expectancy: 67.1, happiness: 4.5, freedom: 0.60, billionaires: 0 },
  "DMA": { gdp: 600, literacy: 94, life_expectancy: 78.0, happiness: 6.3, freedom: 0.89, billionaires: 0 },
  "DOM": { gdp: 89000, literacy: 93.8, life_expectancy: 74.1, happiness: 5.4, freedom: 0.86, billionaires: 0 },
  "ECU": { gdp: 110000, literacy: 94.5, life_expectancy: 77.0, happiness: 6.1, freedom: 0.81, billionaires: 0 },
  "SLV": { gdp: 28000, literacy: 89.1, life_expectancy: 73.3, happiness: 6.3, freedom: 0.86, billionaires: 0 },
  "GNQ": { gdp: 11000, literacy: 95.3, life_expectancy: 58.7, happiness: 5.1, freedom: 0.49, billionaires: 0 },
  "ERI": { gdp: 2000, literacy: 76.6, life_expectancy: 66.5, happiness: 4.1, freedom: 0.43, billionaires: 0 },
  "EST": { gdp: 38000, literacy: 99.8, life_expectancy: 78.7, happiness: 6.2, freedom: 0.90, billionaires: 0 },
  "SWZ": { gdp: 4500, literacy: 87.5, life_expectancy: 60.2, happiness: 4.3, freedom: 0.65, billionaires: 0 },
  "ETH": { gdp: 110000, literacy: 51.8, life_expectancy: 66.6, happiness: 4.2, freedom: 0.47, billionaires: 0 },
  "FJI": { gdp: 5000, literacy: 99.1, life_expectancy: 67.3, happiness: 5.3, freedom: 0.82, billionaires: 0 },
  "FIN": { gdp: 270000, literacy: 100, life_expectancy: 81.9, happiness: 7.8, freedom: 0.96, billionaires: 1 },
  "GAB": { gdp: 17000, literacy: 85.3, life_expectancy: 66.5, happiness: 4.8, freedom: 0.64, billionaires: 0 },
  "GMB": { gdp: 2000, literacy: 61.8, life_expectancy: 62.1, happiness: 5.1, freedom: 0.78, billionaires: 0 },
  "GEO": { gdp: 16000, literacy: 99.7, life_expectancy: 73.7, happiness: 5.2, freedom: 0.84, billionaires: 0 },
  "GHA": { gdp: 68000, literacy: 79.0, life_expectancy: 64.1, happiness: 5.3, freedom: 0.75, billionaires: 0 },
  "GRD": { gdp: 1100, literacy: 96.1, life_expectancy: 74.9, happiness: 6.1, freedom: 0.84, billionaires: 0 },
  "GRC": { gdp: 200000, literacy: 97.5, life_expectancy: 81.2, happiness: 5.3, freedom: 0.76, billionaires: 0 },
  "GTM": { gdp: 85000, literacy: 81.5, life_expectancy: 72.8, happiness: 5.4, freedom: 0.81, billionaires: 0 },
  "GIN": { gdp: 12000, literacy: 30.4, life_expectancy: 61.0, happiness: 4.2, freedom: 0.64, billionaires: 0 },
  "GNB": { gdp: 1500, literacy: 43.4, life_expectancy: 58.6, happiness: 4.7, freedom: 0.61, billionaires: 0 },
  "GUY": { gdp: 3500, literacy: 87.5, life_expectancy: 69.5, happiness: 5.4, freedom: 0.74, billionaires: 0 },
  "HTI": { gdp: 9000, literacy: 61.7, life_expectancy: 63.7, happiness: 3.9, freedom: 0.58, billionaires: 0 },
  "HND": { gdp: 25000, literacy: 89.0, life_expectancy: 74.1, happiness: 5.3, freedom: 0.77, billionaires: 0 },
  "HUN": { gdp: 160000, literacy: 99.1, life_expectancy: 76.1, happiness: 5.9, freedom: 0.82, billionaires: 0 },
  "ISL": { gdp: 25000, literacy: 99.8, life_expectancy: 82.9, happiness: 7.5, freedom: 0.95, billionaires: 0 },
  "IDN": { gdp: 1119190, literacy: 95.7, life_expectancy: 71.7, happiness: 5.3, freedom: 0.72, billionaires: 28 },
  "IRN": { gdp: 388544, literacy: 87.9, life_expectancy: 76.7, happiness: 4.7, freedom: 0.48, billionaires: 0 },
  "IRQ": { gdp: 230000, literacy: 79.7, life_expectancy: 70.6, happiness: 4.2, freedom: 0.35, billionaires: 0 },
  "IRL": { gdp: 380000, literacy: 99, life_expectancy: 82.3, happiness: 7.1, freedom: 0.93, billionaires: 8 },
  "ISR": { gdp: 407101, literacy: 97.8, life_expectancy: 82.8, happiness: 7.1, freedom: 0.88, billionaires: 10 },
  "ITA": { gdp: 2001249, literacy: 99.2, life_expectancy: 83.4, happiness: 6.0, freedom: 0.85, billionaires: 43 },
  "JAM": { gdp: 15000, literacy: 88.7, life_expectancy: 74.2, happiness: 5.2, freedom: 0.83, billionaires: 0 },
  "JPN": { gdp: 5082465, literacy: 99, life_expectancy: 84.6, happiness: 5.9, freedom: 0.89, billionaires: 47 },
  "JOR": { gdp: 43000, literacy: 98, life_expectancy: 74.3, happiness: 5.3, freedom: 0.68, billionaires: 0 },
  "KAZ": { gdp: 180000, literacy: 99.7, life_expectancy: 72.4, happiness: 5.4, freedom: 0.64, billionaires: 2 },
  "KEN": { gdp: 95000, literacy: 78.7, life_expectancy: 66.7, happiness: 4.7, freedom: 0.67, billionaires: 0 },
  "KWT": { gdp: 140000, literacy: 96, life_expectancy: 75.7, happiness: 6.4, freedom: 0.72, billionaires: 3 },
  "KGZ": { gdp: 9000, literacy: 99.7, life_expectancy: 71.6, happiness: 5.0, freedom: 0.52, billionaires: 0 },
  "LAO": { gdp: 18000, literacy: 84.7, life_expectancy: 68.7, happiness: 5.0, freedom: 0.56, billionaires: 0 },
  "LVA": { gdp: 34000, literacy: 99.9, life_expectancy: 75.7, happiness: 5.9, freedom: 0.83, billionaires: 0 },
  "LBN": { gdp: 54000, literacy: 93.9, life_expectancy: 77.6, happiness: 5.0, freedom: 0.67, billionaires: 0 },
  "LSO": { gdp: 2000, literacy: 81.7, life_expectancy: 57.7, happiness: 4.5, freedom: 0.79, billionaires: 0 },
  "LBR": { gdp: 3000, literacy: 48.3, life_expectancy: 64.1, happiness: 4.1, freedom: 0.63, billionaires: 0 },
  "LBY": { gdp: 36000, literacy: 91, life_expectancy: 72.1, happiness: 4.9, freedom: 0.53, billionaires: 0 },
  "LTU": { gdp: 40000, literacy: 99.8, life_expectancy: 75.9, happiness: 6.0, freedom: 0.88, billionaires: 0 },
  "LUX": { gdp: 70000, literacy: 100, life_expectancy: 82.2, happiness: 7.4, freedom: 0.93, billionaires: 2 },
  "MDG": { gdp: 13000, literacy: 64.7, life_expectancy: 66.9, happiness: 3.8, freedom: 0.51, billionaires: 0 },
  "MWI": { gdp: 6000, literacy: 62.1, life_expectancy: 65.2, happiness: 4.3, freedom: 0.69, billionaires: 0 },
  "MYS": { gdp: 370000, literacy: 94.6, life_expectancy: 76.0, happiness: 6.0, freedom: 0.86, billionaires: 4 },
  "MDV": { gdp: 1500, literacy: 98.4, life_expectancy: 78.0, happiness: 5.9, freedom: 0.80, billionaires: 0 },
  "MLI": { gdp: 16000, literacy: 33.1, life_expectancy: 59.8, happiness: 4.3, freedom: 0.63, billionaires: 0 },
  "MLT": { gdp: 14000, literacy: 94.5, life_expectancy: 82.1, happiness: 6.6, freedom: 0.91, billionaires: 0 },
  "MRT": { gdp: 5500, literacy: 52.1, life_expectancy: 64.6, happiness: 4.2, freedom: 0.60, billionaires: 0 },
  "MUS": { gdp: 12000, literacy: 91.3, life_expectancy: 75.7, happiness: 6.1, freedom: 0.82, billionaires: 0 },
  "MEX": { gdp: 1291631, literacy: 94.5, life_expectancy: 75.1, happiness: 6.5, freedom: 0.77, billionaires: 12 },
  "MDA": { gdp: 8000, literacy: 99.4, life_expectancy: 71.2, happiness: 5.3, freedom: 0.55, billionaires: 0 },
  "MNG": { gdp: 14000, literacy: 98.4, life_expectancy: 70.6, happiness: 5.0, freedom: 0.67, billionaires: 0 },
  "MNE": { gdp: 5000, literacy: 98.7, life_expectancy: 76.5, happiness: 5.6, freedom: 0.81, billionaires: 0 },
  "MAR": { gdp: 120000, literacy: 73.8, life_expectancy: 76.7, happiness: 5.0, freedom: 0.67, billionaires: 0 },
  "MOZ": { gdp: 14000, literacy: 60.7, life_expectancy: 60.0, happiness: 3.7, freedom: 0.61, billionaires: 0 },
  "MMR": { gdp: 70000, literacy: 75.6, life_expectancy: 67.0, happiness: 4.1, freedom: 0.56, billionaires: 0 },
  "NAM": { gdp: 13000, literacy: 88.3, life_expectancy: 64.6, happiness: 5.1, freedom: 0.84, billionaires: 0 },
  "NPL": { gdp: 3000, literacy: 67.9, life_expectancy: 70.0, happiness: 5.3, freedom: 0.79, billionaires: 0 },
  "NLD": { gdp: 909887, literacy: 99, life_expectancy: 82.3, happiness: 7.4, freedom: 0.93, billionaires: 28 },
  "NZL": { gdp: 205000, literacy: 99, life_expectancy: 82.3, happiness: 7.3, freedom: 0.95, billionaires: 2 },
  "NIC": { gdp: 13000, literacy: 80.0, life_expectancy: 74.1, happiness: 5.5, freedom: 0.80, billionaires: 0 },
  "NER": { gdp: 12000, literacy: 19.1, life_expectancy: 62.4, happiness: 4.1, freedom: 0.59, billionaires: 0 },
  "NGA": { gdp: 448120, literacy: 69.1, life_expectancy: 54.7, happiness: 5.2, freedom: 0.63, billionaires: 5 },
  "NOR": { gdp: 403000, literacy: 99, life_expectancy: 82.5, happiness: 7.5, freedom: 0.96, billionaires: 7 },
  "OMN": { gdp: 76000, literacy: 95.7, life_expectancy: 77.6, happiness: 6.0, freedom: 0.74, billionaires: 1 },
  "PAK": { gdp: 348898, literacy: 58, life_expectancy: 67.3, happiness: 5.7, freedom: 0.59, billionaires: 2 },
  "PAN": { gdp: 66000, literacy: 95.3, life_expectancy: 78.7, happiness: 6.6, freedom: 0.87, billionaires: 1 },
  "PNG": { gdp: 4000, literacy: 64.2, life_expectancy: 64.6, happiness: 4.4, freedom: 0.67, billionaires: 0 },
  "PRY": { gdp: 30000, literacy: 95.7, life_expectancy: 74.9, happiness: 5.9, freedom: 0.73, billionaires: 0 },
  "PER": { gdp: 225000, literacy: 94.5, life_expectancy: 76.5, happiness: 5.9, freedom: 0.76, billionaires: 2 },
  "PHL": { gdp: 360000, literacy: 96.3, life_expectancy: 71.0, happiness: 5.2, freedom: 0.68, billionaires: 2 },
  "POL": { gdp: 592164, literacy: 99.8, life_expectancy: 78.5, happiness: 6.1, freedom: 0.84, billionaires: 11 },
  "PRT": { gdp: 237000, literacy: 95.7, life_expectancy: 81.1, happiness: 6.0, freedom: 0.87, billionaires: 1 },
  "QAT": { gdp: 140000, literacy: 97.8, life_expectancy: 80.3, happiness: 6.8, freedom: 0.85, billionaires: 2 },
  "ROU": { gdp: 250000, literacy: 98.8, life_expectancy: 75.3, happiness: 5.7, freedom: 0.75, billionaires: 1 },
  "RUS": { gdp: 1776040, literacy: 99.7, life_expectancy: 72.7, happiness: 5.5, freedom: 0.58, billionaires: 117 },
  "RWA": { gdp: 9000, literacy: 70.9, life_expectancy: 69.7, happiness: 4.5, freedom: 0.67, billionaires: 0 },
  "KNA": { gdp: 1000, literacy: 97.0, life_expectancy: 74.5, happiness: 6.3, freedom: 0.83, billionaires: 0 },
  "LCA": { gdp: 2000, literacy: 91.6, life_expectancy: 77.0, happiness: 6.4, freedom: 0.87, billionaires: 0 },
  "VCT": { gdp: 700, literacy: 88.2, life_expectancy: 71.9, happiness: 6.0, freedom: 0.85, billionaires: 0 },
  "WSM": { gdp: 800, literacy: 99.0, life_expectancy: 73.3, happiness: 5.7, freedom: 0.79, billionaires: 0 },
  "SMR": { gdp: 1600, literacy: 96.6, life_expectancy: 84.5, happiness: 6.3, freedom: 0.91, billionaires: 0 },
  "STP": { gdp: 400, literacy: 75.0, life_expectancy: 67.0, happiness: 4.8, freedom: 0.64, billionaires: 0 },
  "SAU": { gdp: 793522, literacy: 94.7, life_expectancy: 75.1, happiness: 6.4, freedom: 0.71, billionaires: 12 },
  "SEN": { gdp: 16000, literacy: 51.9, life_expectancy: 67.1, happiness: 5.1, freedom: 0.74, billionaires: 0 },
  "SRB": { gdp: 51000, literacy: 98.0, life_expectancy: 75.0, happiness: 5.3, freedom: 0.71, billionaires: 0 },
  "SYC": { gdp: 1000, literacy: 91.8, life_expectancy: 73.1, happiness: 5.6, freedom: 0.78, billionaires: 0 },
  "SLE": { gdp: 4000, literacy: 43.3, life_expectancy: 54.3, happiness: 3.6, freedom: 0.49, billionaires: 0 },
  "SGP": { gdp: 370000, literacy: 97.0, life_expectancy: 83.6, happiness: 7.4, freedom: 0.88, billionaires: 27 },
  "SVK": { gdp: 100000, literacy: 99.6, life_expectancy: 77.1, happiness: 6.6, freedom: 0.89, billionaires: 0 },
  "SVN": { gdp: 54000, literacy: 99.7, life_expectancy: 81.3, happiness: 6.9, freedom: 0.90, billionaires: 0 },
  "SOM": { gdp: 3000, literacy: 37.8, life_expectancy: 57.0, happiness: 2.9, freedom: 0.38, billionaires: 0 },
  "ZAF": { gdp: 350000, literacy: 94.4, life_expectancy: 64.1, happiness: 4.7, freedom: 0.72, billionaires: 1 },
  "SSD": { gdp: 4000, literacy: 35.1, life_expectancy: 57.3, happiness: 2.7, freedom: 0.32, billionaires: 0 },
  "ESP": { gdp: 1425276, literacy: 98.1, life_expectancy: 83.4, happiness: 6.5, freedom: 0.89, billionaires: 21 },
  "LKA": { gdp: 84000, literacy: 92.6, life_expectancy: 77.6, happiness: 5.5, freedom: 0.76, billionaires: 0 },
  "SDN": { gdp: 40000, literacy: 75.9, life_expectancy: 65.6, happiness: 4.1, freedom: 0.44, billionaires: 0 },
  "SUR": { gdp: 3000, literacy: 94.9, life_expectancy: 71.0, happiness: 5.4, freedom: 0.78, billionaires: 0 },
  "SWE": { gdp: 531341, literacy: 99, life_expectancy: 82.7, happiness: 7.4, freedom: 0.96, billionaires: 37 },
  "CHE": { gdp: 703082, literacy: 99, life_expectancy: 83.8, happiness: 7.6, freedom: 0.96, billionaires: 33 },
  "SYR": { gdp: 25000, literacy: 80.0, life_expectancy: 71.0, happiness: 3.4, freedom: 0.31, billionaires: 0 },
  "TJK": { gdp: 9000, literacy: 99.8, life_expectancy: 71.0, happiness: 5.0, freedom: 0.53, billionaires: 0 },
  "TZA": { gdp: 63000, literacy: 77.9, life_expectancy: 65.0, happiness: 4.7, freedom: 0.69, billionaires: 0 },
  "THA": { gdp: 543548, literacy: 96.7, life_expectancy: 75.1, happiness: 6.0, freedom: 0.85, billionaires: 5 },
  "TLS": { gdp: 800, literacy: 68.0, life_expectancy: 70.0, happiness: 4.3, freedom: 0.65, billionaires: 0 },
  "TGO": { gdp: 5000, literacy: 66.0, life_expectancy: 60.1, happiness: 4.9, freedom: 0.67, billionaires: 0 },
  "TTO": { gdp: 21000, literacy: 98.8, life_expectancy: 73.5, happiness: 5.5, freedom: 0.80, billionaires: 0 },
  "TUN": { gdp: 40000, literacy: 81.8, life_expectancy: 76.8, happiness: 5.0, freedom: 0.63, billionaires: 0 },
  "TUR": { gdp: 754412, literacy: 96.2, life_expectancy: 77.7, happiness: 5.5, freedom: 0.60, billionaires: 26 },
  "UGA": { gdp: 34000, literacy: 73.2, life_expectancy: 63.4, happiness: 4.3, freedom: 0.62, billionaires: 0 },
  "UKR": { gdp: 150000, literacy: 99.7, life_expectancy: 72.0, happiness: 4.7, freedom: 0.53, billionaires: 1 },
  "ARE": { gdp: 421142, literacy: 93.8, life_expectancy: 77.8, happiness: 6.8, freedom: 0.85, billionaires: 14 },
  "GBR": { gdp: 2829108, literacy: 99, life_expectancy: 81.3, happiness: 6.8, freedom: 0.91, billionaires: 56 },
  "USA": { gdp: 21427700, literacy: 99, life_expectancy: 78.9, happiness: 6.9, freedom: 0.92, billionaires: 735 },
  "URY": { gdp: 60000, literacy: 98.1, life_expectancy: 77.0, happiness: 6.1, freedom: 0.83, billionaires: 0 },
  "UZB": { gdp: 57000, literacy: 99.3, life_expectancy: 72.3, happiness: 5.0, freedom: 0.54, billionaires: 0 },
  "VUT": { gdp: 300, literacy: 70.6, life_expectancy: 72.0, happiness: 5.2, freedom: 0.73, billionaires: 0 },
  "VEN": { gdp: 90000, literacy: 97.1, life_expectancy: 72.1, happiness: 4.1, freedom: 0.47, billionaires: 0 },
  "VNM": { gdp: 260000, literacy: 95, life_expectancy: 75.4, happiness: 5.7, freedom: 0.79, billionaires: 1 },
  "YEM": { gdp: 27000, literacy: 70.1, life_expectancy: 66.1, happiness: 3.2, freedom: 0.36, billionaires: 0 },
  "ZMB": { gdp: 23000, literacy: 85.4, life_expectancy: 63.5, happiness: 4.1, freedom: 0.69, billionaires: 0 },
  "ZWE": { gdp: 16000, literacy: 88.7, life_expectancy: 61.2, happiness: 3.9, freedom: 0.55, billionaires: 0 }
};

// Function to parse prompt and determine metric
function parsePrompt(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('rich') || lowerPrompt.includes('gdp') || lowerPrompt.includes('wealth') || lowerPrompt.includes('economy')) {
        return 'gdp';
    } else if (lowerPrompt.includes('literacy') || lowerPrompt.includes('education') || lowerPrompt.includes('educated')) {
        return 'literacy';
    } else if (lowerPrompt.includes('population') || lowerPrompt.includes('people') || lowerPrompt.includes('inhabitants')) {
        return 'population';
    } else if (lowerPrompt.includes('area') || lowerPrompt.includes('size') || lowerPrompt.includes('large')) {
        return 'area';
    } else if (lowerPrompt.includes('life expectancy') || lowerPrompt.includes('longevity') || lowerPrompt.includes('age')) {
        return 'life_expectancy';
    } else if (lowerPrompt.includes('happiness') || lowerPrompt.includes('happy')) {
        return 'happiness';
    } else if (lowerPrompt.includes('freedom') || lowerPrompt.includes('free')) {
        return 'freedom';
    } else if (lowerPrompt.includes('billionaires') || lowerPrompt.includes('rich people') || lowerPrompt.includes('wealthy')) {
        return 'billionaires';
    } else if (lowerPrompt.includes('height') || lowerPrompt.includes('tall') || lowerPrompt.includes('tallest')) {
        return 'height';
    } else if (lowerPrompt.includes('internet') || lowerPrompt.includes('online')) {
        return 'internet_users';
    } else if (lowerPrompt.includes('electricity') || lowerPrompt.includes('power')) {
        return 'electricity_access';
    } else if (lowerPrompt.includes('unemployment') || lowerPrompt.includes('jobless')) {
        return 'unemployment';
    } else if (lowerPrompt.includes('poverty') || lowerPrompt.includes('poor')) {
        return 'poverty';
    } else if (lowerPrompt.includes('co2') || lowerPrompt.includes('emissions') || lowerPrompt.includes('carbon')) {
        return 'co2_emissions';
    } else if (lowerPrompt.includes('forest') || lowerPrompt.includes('trees')) {
        return 'forest_area';
    // New indicators:
    } else if (lowerPrompt.includes('urban') && lowerPrompt.includes('population')) {
        return 'urban_population';
    } else if (lowerPrompt.includes('rural') && lowerPrompt.includes('population')) {
        return 'rural_population';
    } else if (lowerPrompt.includes('agriculture') && (lowerPrompt.includes('value') || lowerPrompt.includes('added'))) {
        return 'agriculture_value_added';
    } else if (lowerPrompt.includes('industry') && (lowerPrompt.includes('value') || lowerPrompt.includes('added'))) {
        return 'industry_value_added';
    } else if (lowerPrompt.includes('services') && (lowerPrompt.includes('value') || lowerPrompt.includes('added'))) {
        return 'services_value_added';
    } else if (lowerPrompt.includes('birth rate') || (lowerPrompt.includes('birth') && lowerPrompt.includes('rate'))) {
        return 'birth_rate';
    } else if (lowerPrompt.includes('death rate') || (lowerPrompt.includes('death') && lowerPrompt.includes('rate'))) {
        return 'death_rate';
    } else if (lowerPrompt.includes('fertility') || lowerPrompt.includes('births per woman')) {
        return 'fertility_rate';
    } else if (lowerPrompt.includes('gdp per capita') || lowerPrompt.includes('income per person')) {
        return 'gdp_per_capita';
    } else if (lowerPrompt.includes('inflation') || lowerPrompt.includes('consumer prices')) {
        return 'inflation';
    } else if (lowerPrompt.includes('school enrollment') && lowerPrompt.includes('primary')) {
        return 'school_enrollment_primary';
    } else if (lowerPrompt.includes('school enrollment') && lowerPrompt.includes('secondary')) {
        return 'school_enrollment_secondary';
    } else if (lowerPrompt.includes('child mortality') || lowerPrompt.includes('under 5 mortality') || lowerPrompt.includes('mortality rate under 5')) {
        return 'mortality_under5';
    } else if (lowerPrompt.includes('health expenditure') || lowerPrompt.includes('health spending')) {
        return 'health_expenditure';
    } else if (lowerPrompt.includes('sanitation') || lowerPrompt.includes('toilet access')) {
        return 'access_to_sanitation';
    } else if (lowerPrompt.includes('clean water') || lowerPrompt.includes('safe water')) {
        return 'access_to_clean_water';
    } else if (lowerPrompt.includes('mobile subscriptions') || lowerPrompt.includes('cell phones')) {
        return 'mobile_subscriptions';
    } else if (lowerPrompt.includes('railways') || lowerPrompt.includes('trains')) {
        return 'railways_total';
    } else if (lowerPrompt.includes('road density') || (lowerPrompt.includes('roads') && lowerPrompt.includes('density'))) {
        return 'road_density';
    } else if (lowerPrompt.includes('electricity production') || lowerPrompt.includes('electric power consumption')) {
        return 'electricity_production';
    } else if (lowerPrompt.includes('renewable energy')) {
        return 'renewable_energy_consumption';
    } else if (lowerPrompt.includes('external debt')) {
        return 'external_debt';
    } else if (lowerPrompt.includes('gini') || lowerPrompt.includes('income inequality')) {
        return 'gini_index';
    } else if (lowerPrompt.includes('adult male mortality') || (lowerPrompt.includes('mortality') && lowerPrompt.includes('male'))) {
        return 'mortality_adult_male';
    } else if (lowerPrompt.includes('adult female mortality') || (lowerPrompt.includes('mortality') && lowerPrompt.includes('female'))) {
        return 'mortality_adult_female';
    }
    else if (lowerPrompt.includes('agriculture land') || lowerPrompt.includes('farmland') || lowerPrompt.includes('farm land')) {
        return 'agriculture_land_percent';
    } else if (lowerPrompt.includes('arable land') || lowerPrompt.includes('cultivable land')) {
        return 'arable_land_percent';
    } else if (lowerPrompt.includes('forest land') || lowerPrompt.includes('forest area')) {
        return 'forest_land_percent';
    } else if (lowerPrompt.includes('employment in agriculture') || lowerPrompt.includes('farm jobs')) {
        return 'agriculture_employment_percent';
    } else if (lowerPrompt.includes('employment in industry') || lowerPrompt.includes('industry jobs') || lowerPrompt.includes('factory jobs')) {
        return 'industry_employment_percent';
    } else if (lowerPrompt.includes('employment in services') || lowerPrompt.includes('service jobs')) {
        return 'services_employment_percent';
    } else if (lowerPrompt.includes('electricity access rural') || lowerPrompt.includes('rural electricity')) {
        return 'electricity_access_rural_percent';
    } else if (lowerPrompt.includes('electricity access urban') || lowerPrompt.includes('urban electricity')) {
        return 'electricity_access_urban_percent';
    } else if (lowerPrompt.includes('improved water') || lowerPrompt.includes('clean water') || lowerPrompt.includes('safe water')) {
        return 'access_to_improved_water_percent';
    } else if (lowerPrompt.includes('immunization measles') || (lowerPrompt.includes('measles') && lowerPrompt.includes('vaccination'))) {
        return 'immunization_measles_percent';
    } else if (lowerPrompt.includes('immunization dpt') || (lowerPrompt.includes('dpt') && lowerPrompt.includes('vaccination'))) {
        return 'immunization_dpt_percent';
    } else if (lowerPrompt.includes('infant mortality') || lowerPrompt.includes('babies dying') || lowerPrompt.includes('infant deaths')) {
        return 'infant_mortality_rate';
    } else if (lowerPrompt.includes('maternal mortality') || lowerPrompt.includes('mothers dying')) {
        return 'maternal_mortality_ratio';
    } else if (lowerPrompt.includes('physicians per 1000') || lowerPrompt.includes('doctors')) {
        return 'physicians_per_1000';
    } else if (lowerPrompt.includes('hospital beds per 1000')) {
        return 'hospital_beds_per_1000';
    } else if (lowerPrompt.includes('net migration rate') || lowerPrompt.includes('migration')) {
        return 'net_migration_rate';
    } else if (lowerPrompt.includes('urban population') || lowerPrompt.includes('cities population')) {
        return 'urban_population_percent';
    } else if (lowerPrompt.includes('rural population') || lowerPrompt.includes('countryside population')) {
        return 'rural_population_percent';
    } else if (lowerPrompt.includes('population growth')) {
        return 'population_growth_rate';
    } else if (lowerPrompt.includes('birth rate') || lowerPrompt.includes('births per 1000')) {
        return 'birth_rate_crude';
    } else if (lowerPrompt.includes('death rate') || lowerPrompt.includes('deaths per 1000')) {
        return 'death_rate_crude';
    } else if (lowerPrompt.includes('life expectancy female') || lowerPrompt.includes('female longevity')) {
        return 'life_expectancy_female';
    } else if (lowerPrompt.includes('life expectancy male') || lowerPrompt.includes('male longevity')) {
        return 'life_expectancy_male';
    } else if (lowerPrompt.includes('fertility rate') || lowerPrompt.includes('births per woman')) {
        return 'total_fertility_rate';
    } else if (lowerPrompt.includes('contraceptive prevalence') || lowerPrompt.includes('birth control usage')) {
        return 'contraceptive_prevalence';
    } else if (lowerPrompt.includes('primary school completion') || lowerPrompt.includes('primary education complete')) {
        return 'primary_school_completion_rate';
    } else if (lowerPrompt.includes('secondary school completion') || lowerPrompt.includes('high school complete')) {
        return 'secondary_school_completion_rate';
    } else if (lowerPrompt.includes('tertiary school enrollment') || lowerPrompt.includes('college enrollment') || lowerPrompt.includes('university enrollment')) {
        return 'tertiary_school_enrollment_percent';
    } else if (lowerPrompt.includes('adult literacy') || lowerPrompt.includes('literacy adult')) {
        return 'adult_literacy_rate';
    } else if (lowerPrompt.includes('youth literacy') || lowerPrompt.includes('literacy youth')) {
        return 'youth_literacy_rate';
    } else if (lowerPrompt.includes('youth unemployment') || lowerPrompt.includes('unemployment youth')) {
        return 'unemployment_youth_percent';
    } else if (lowerPrompt.includes('unemployment total') || lowerPrompt.includes('unemployment rate')) {
        return 'unemployment_total_percent';
    } else if (lowerPrompt.includes('gdp growth') || lowerPrompt.includes('economic growth')) {
        return 'gdp_growth_annual_percent';
    } else if (lowerPrompt.includes('gdp per capita growth') || lowerPrompt.includes('income growth per person')) {
        return 'gdp_per_capita_growth';
    } else if (lowerPrompt.includes('agriculture gdp percent') || lowerPrompt.includes('agriculture contribution to gdp')) {
        return 'gdp_sector_agriculture_percent';
    } else if (lowerPrompt.includes('industry gdp percent') || lowerPrompt.includes('industry contribution to gdp')) {
        return 'gdp_sector_industry_percent';
    } else if (lowerPrompt.includes('services gdp percent') || lowerPrompt.includes('services contribution to gdp')) {
        return 'gdp_sector_services_percent';
    } else if (lowerPrompt.includes('inflation') || lowerPrompt.includes('consumer prices')) {
        return 'inflation_consumer_prices_percent';
    } else if (lowerPrompt.includes('government health expenditure') || lowerPrompt.includes('health spending by government')) {
        return 'government_health_expenditure_percent';
    } else if (lowerPrompt.includes('government education expenditure') || lowerPrompt.includes('education spending by government')) {
        return 'government_education_expenditure_percent';
    } else if (lowerPrompt.includes('foreign direct investment') || lowerPrompt.includes('fdi inflows')) {
        return 'foreign_direct_investment_net_inflow';
    } else if (lowerPrompt.includes('external debt') || lowerPrompt.includes('foreign debt')) {
        return 'external_debt_stock';
    } else if (lowerPrompt.includes('net oda') || lowerPrompt.includes('official development assistance')) {
        return 'net_ODA_received';
    } else if (lowerPrompt.includes('mobile cellular subscriptions') || lowerPrompt.includes('cell phones per 100')) {
        return 'mobile_cellular_subscriptions';
    } else if (lowerPrompt.includes('broadband subscriptions') || lowerPrompt.includes('internet broadband')) {
        return 'broadband_subscriptions';
    } else if (lowerPrompt.includes('railways km') || lowerPrompt.includes('rail network')) {
        return 'railways_total_km';
    } else if (lowerPrompt.includes('roads km') || lowerPrompt.includes('road network')) {
        return 'roads_total_km';
    } else if (lowerPrompt.includes('road density')) {
        return 'road_density';
    } else if (lowerPrompt.includes('air transport passengers') || lowerPrompt.includes('airline passengers')) {
        return 'air_transport_passenger_carried';
    } else if (lowerPrompt.includes('electric power consumption') || lowerPrompt.includes('electricity usage per capita')) {
        return 'electric_power_consumption_kwh';
    } else if (lowerPrompt.includes('renewable energy consumption')) {
        return 'renewable_energy_consumption_percent';
    } else if (lowerPrompt.includes('co2 emissions total')) {
        return 'co2_emissions_total';
    } else if (lowerPrompt.includes('energy use') || lowerPrompt.includes('energy consumption per capita')) {
        return 'energy_use_kg_kg_oil_equivalent';
    } else if (lowerPrompt.includes('fertilizer consumption') || lowerPrompt.includes('fertilizer use per hectare')) {
        return 'agriculture_fertilizer_consumption_kg_per_hectare';
    } else if (lowerPrompt.includes('cereal yield') || lowerPrompt.includes('crop yield')) {
        return 'cereal_yield_kg_per_hectare';
    } else if (lowerPrompt.includes('food production index')) {
        return 'food_production_index';
    } else if (lowerPrompt.includes('poverty headcount $1.90') || lowerPrompt.includes('extreme poverty')) {
        return 'poverty_headcount_ratio_1_90_usd_percent';
    } else if (lowerPrompt.includes('poverty headcount $3.20') || lowerPrompt.includes('moderate poverty')) {
        return 'poverty_headcount_ratio_3_20_usd_percent';
    } else if (lowerPrompt.includes('poverty headcount $5.50') || lowerPrompt.includes('higher poverty line')) {
        return 'poverty_headcount_ratio_5_50_usd_percent';
    } else if (lowerPrompt.includes('gini index') || lowerPrompt.includes('income inequality')) {
        return 'gini_index';
    } else if (lowerPrompt.includes('labor force participation') || lowerPrompt.includes('working population rate')) {
        return 'labor_force_participation_rate_percent';
    } else if (lowerPrompt.includes('female labor force participation')) {
        return 'female_labor_force_participation_percent';
    } else if (lowerPrompt.includes('male labor force participation')) {
        return 'male_labor_force_participation_percent';
    } else if (lowerPrompt.includes('youth labor force participation')) {
        return 'youth_labor_force_participation_percent';
    } else if (lowerPrompt.includes('public debt') || lowerPrompt.includes('government debt')) {
        return 'public_debt_percent_gdp';
    } else if (lowerPrompt.includes('tax revenue') || lowerPrompt.includes('tax collection')) {
        return 'tax_revenue_percent_gdp';
    } else if (lowerPrompt.includes('current account balance')) {
        return 'current_account_balance_percent_gdp';
    } else if (lowerPrompt.includes('exports percent gdp') || lowerPrompt.includes('exports of goods')) {
        return 'exports_percent_gdp';
    } else if (lowerPrompt.includes('imports percent gdp') || lowerPrompt.includes('imports of goods')) {
        return 'imports_percent_gdp';
    } else if (lowerPrompt.includes('trade balance') || lowerPrompt.includes('balance of trade')) {
        return 'trade_balance';
    } else if (lowerPrompt.includes('tourism revenue') || lowerPrompt.includes('travel services income')) {
        return 'tourism_revenue_percent_gdp';
    } else if (lowerPrompt.includes('military expenditure') || lowerPrompt.includes('defense spending')) {
        return 'military_expenditure_percent_gdp';
    } else if (lowerPrompt.includes('education expenditure')) {
        return 'education_expenditure_percent_gdp';
    } else if (lowerPrompt.includes('research and development expenditure') || lowerPrompt.includes('r&d spending')) {
        return 'research_and_development_expenditure_percent_gdp';
    } else if (lowerPrompt.includes('internet bandwidth') || lowerPrompt.includes('broadband speed')) {
        return 'internet_bandwidth_kbps_per_user';
    } else if (lowerPrompt.includes('improved sanitation') || lowerPrompt.includes('sanitation access')) {
        return 'access_to_improved_sanitation_percent';
    } else if (lowerPrompt.includes('child mortality rate') || lowerPrompt.includes('under 5 mortality')) {
        return 'child_mortality_rate';
    } else if (lowerPrompt.includes('current health expenditure per capita')) {
        return 'current_health_expenditure_per_capita';
    } else if (lowerPrompt.includes('mortality rate adult male')) {
        return 'mortality_rate_adult_male';
    } else if (lowerPrompt.includes('mortality rate adult female')) {
        return 'mortality_rate_adult_female';
    } else if (lowerPrompt.includes('total health expenditure')) {
        return 'total_health_expenditure_percent_gdp';
    } else if (lowerPrompt.includes('total education expenditure')) {
        return 'total_education_expenditure_percent_gdp';
    } else if (lowerPrompt.includes('average population density') || lowerPrompt.includes('population density')) {
        return 'average_population_density';
    } else if (lowerPrompt.includes('internet users per 100')) {
        return 'internet_users_per_100';
    } else if (lowerPrompt.includes('mobile phone subscriptions per 100')) {
        return 'mobile_phone_subscriptions_per_100';
    } else if (lowerPrompt.includes('electricity production') || lowerPrompt.includes('electric power production')) {
        return 'electricity_production_kwh';
    } else if (lowerPrompt.includes('renewable electricity output')) {
        return 'renewable_electricity_output_percent';
    } else if (lowerPrompt.includes('urban population growth')) {
        return 'urban_population_growth_rate';
    } else if (lowerPrompt.includes('rural population growth')) {
        return 'rural_population_growth_rate';
    } else if (lowerPrompt.includes('female primary school enrollment')) {
        return 'female_primary_school_enrollment_percent';
    } else if (lowerPrompt.includes('male primary school enrollment')) {
        return 'male_primary_school_enrollment_percent';
    } else if (lowerPrompt.includes('female secondary school enrollment')) {
        return 'female_secondary_school_enrollment_percent';
    } else if (lowerPrompt.includes('male secondary school enrollment')) {
        return 'male_secondary_school_enrollment_percent';
    } else if (lowerPrompt.includes('female tertiary school enrollment')) {
        return 'female_tertiary_school_enrollment_percent';
    } else if (lowerPrompt.includes('male tertiary school enrollment')) {
        return 'male_tertiary_school_enrollment_percent';
    } else if (lowerPrompt.includes('gdp per employed person')) {
        return 'gdp_per_employed_person';
    } else if (lowerPrompt.includes('average years of schooling')) {
        return 'average_years_of_schooling';
    } else if (lowerPrompt.includes('population ages 65 and above') || lowerPrompt.includes('elderly population percent')) {
        return 'population_ages_65_and_above_percent';
    } else if (lowerPrompt.includes('youth dependency ratio')) {
        return 'youth_dependency_ratio';
    } else if (lowerPrompt.includes('elderly dependency ratio')) {
        return 'elderly_dependency_ratio';
    } else if (lowerPrompt.includes('net migration rate per 1000')) {
        return 'net_migration_rate_per_1000';
    } else if (lowerPrompt.includes('road density km per 100') || lowerPrompt.includes('road density')) {
        return 'road_density_km_per_100sqkm';
    } else if (lowerPrompt.includes('railways total km network')) {
        return 'railways_total_km_network';
    }
    else if (lowerPrompt.includes('cat') || lowerPrompt.includes('cats')) {
        return 'most_cats';
    } else if (lowerPrompt.includes('funny') || lowerPrompt.includes('funniest') || lowerPrompt.includes('humor') || lowerPrompt.includes('laugh')) {
        return 'funniest_people';
    } else if (lowerPrompt.includes('sing') || lowerPrompt.includes('singer') || lowerPrompt.includes('singing')) {
        return 'people_who_sing_the_best';
    } else if (lowerPrompt.includes('dance') || lowerPrompt.includes('dancer') || lowerPrompt.includes('dancing')) {
        return 'best_dancers';
    } else if (lowerPrompt.includes('joke') || lowerPrompt.includes('jokes') || lowerPrompt.includes('joking')) {
        return 'people_who_tell_the_best_jokes';
    } else if (lowerPrompt.includes('unicorn')) {
        return 'number_of_unicorns';
    } else if (lowerPrompt.includes('ice cream') || lowerPrompt.includes('icecream')) {
        return 'best_ice_cream_eaters';
    } else if (lowerPrompt.includes('dance moves')) {
        return 'most_dance_moves';
    } else if (lowerPrompt.includes('socks')) {
        return 'largest_collection_of_socks';
    } else if (lowerPrompt.includes('laughs')) {
        return 'most_laughs_per_minute';
    } else if (lowerPrompt.includes('hat')) {
        return 'best_hat_wearers';
    } else if (lowerPrompt.includes('nap') || lowerPrompt.includes('napping')) {
        return 'most_frequent_nappers';
    } else if (lowerPrompt.includes('pizza')) {
        return 'best_pizza_makers';
    } else if (lowerPrompt.includes('coffee')) {
        return 'most_coffee_consumed';
    } else if (lowerPrompt.includes('parkour')) {
        return 'best_parkour_runners';
    } else if (lowerPrompt.includes('tattoo')) {
        return 'most_tattoos';
    } else if (lowerPrompt.includes('chocolate')) {
        return 'best_chocolate_eaters';
    } else if (lowerPrompt.includes('bubble gum') || lowerPrompt.includes('bubblegum')) {
        return 'most_bubble_gum_blowers';
    } else if (lowerPrompt.includes('selfie')) {
        return 'best_selfie_takers';
    } else if (lowerPrompt.includes('hat')) {
        return 'most_hats_owned';
    } else if (lowerPrompt.includes('marshmallow')) {
        return 'most_marshmallows_eaten';
    } else if (lowerPrompt.includes('magic trick') || lowerPrompt.includes('magic tricks')) {
        return 'best_magic_tricks';
    } else if (lowerPrompt.includes('giggle')) {
        return 'most_giggles';
    } else if (lowerPrompt.includes('juggling')) {
        return 'best_juggling_skills';
    } else if (lowerPrompt.includes('puppy')) {
        return 'most_puppies_owned';
    } else if (lowerPrompt.includes('sandcastle')) {
        return 'best_sandcastle_builders';
    } else if (lowerPrompt.includes('balloon')) {
        return 'most_balloons_popped';
    } else if (lowerPrompt.includes('guitar')) {
        return 'best_guitar_players';
    } else if (lowerPrompt.includes('sticker')) {
        return 'most_stickers_collected';
    } else if (lowerPrompt.includes('mustache')) {
        return 'best_mustache_growers';
    } else if (lowerPrompt.includes('sunglasses')) {
        return 'most_sunglasses_worn';
    } else if (lowerPrompt.includes('bike')) {
        return 'best_bike_riders';
    } else if (lowerPrompt.includes('compliment')) {
        return 'most_compliments_given';
    } else if (lowerPrompt.includes('pancake')) {
        return 'best_pancake_flippers';
    } else if (lowerPrompt.includes('painting')) {
        return 'most_paintings_created';
    } else if (lowerPrompt.includes('laughter')) {
        return 'best_laughter_contestants';
    } else if (lowerPrompt.includes('dress')) {
        return 'most_fancy_dresses';
    } else if (lowerPrompt.includes('ice skate') || lowerPrompt.includes('iceskate') || lowerPrompt.includes('iceskater')) {
        return 'best_ice_skaters';
    } else if (lowerPrompt.includes('donut')) {
        return 'most_donuts_eaten';
    } else if (lowerPrompt.includes('drum')) {
        return 'best_drum_players';
    } else if (lowerPrompt.includes('fish')) {
        return 'most_fish_caught';
    } else if (lowerPrompt.includes('hula hoop') || lowerPrompt.includes('hulahoop')) {
        return 'best_hula_hoopers';
    } else if (lowerPrompt.includes('pie')) {
        return 'most_pies_baked';
    } else if (lowerPrompt.includes('rollercoaster') || lowerPrompt.includes('roller coaster')) {
        return 'best_rollercoaster_riders';
    } else if (lowerPrompt.includes('pretzel')) {
        return 'most_pretzels_eaten';
    } else if (lowerPrompt.includes('lego')) {
        return 'best_lego_builders';
    } else if (lowerPrompt.includes('friend')) {
        return 'most_friends_made';
    } else if (lowerPrompt.includes('pogo stick')) {
        return 'best_pogo_stick_jumps';
    } else if (lowerPrompt.includes('koala')) {
        return 'most_koalas_seen';
    } else if (lowerPrompt.includes('chess')) {
        return 'best_chess_players';
    } else if (lowerPrompt.includes('smile')) {
        return 'most_smiles_per_minute';
    } else if (lowerPrompt.includes('rap')) {
        return 'best_rappers';
    } else if (lowerPrompt.includes('hug')) {
        return 'most_hugs_given';
    } else if (lowerPrompt.includes('ice cream scooper') || lowerPrompt.includes('icecreamscooper')) {
        return 'best_ice_cream_scoopers';
    } else if (lowerPrompt.includes('painted nail') || lowerPrompt.includes('paintednail')) {
        return 'most_painted_nails';
    } else if (lowerPrompt.includes('hot dog')) {
        return 'best_hot_dog_eaters';
    } else if (lowerPrompt.includes('bubble')) {
        return 'most_bubbles_blowed';
    } else if (lowerPrompt.includes('tug of war')) {
        return 'best_tug_of_war_teams';
    } else if (lowerPrompt.includes('doodle')) {
        return 'most_doodles_drawn';
    } else if (lowerPrompt.includes('cupcake')) {
        return 'best_cupcake_bakers';
    } else if (lowerPrompt.includes('puppy lover') || lowerPrompt.includes('puppylove')) {
        return 'most_puppy_lovers';
    } else if (lowerPrompt.includes('fort builder')) {
        return 'best_fort_builders';
    } else if (lowerPrompt.includes('firework')) {
        return 'most_fireworks_watched';
    } else if (lowerPrompt.includes('pumpkin carve') || lowerPrompt.includes('pumpkincarve')) {
        return 'best_pumpkin_carvers';
    } else if (lowerPrompt.includes('pajama party') || lowerPrompt.includes('pajamaparty')) {
        return 'most_pajama_parties';
    } else if (lowerPrompt.includes('cup stacking') || lowerPrompt.includes('cupstacking')) {
        return 'best_cup_stacking';
    } else if (lowerPrompt.includes('cheesy joke') || lowerPrompt.includes('cheesyjoke')) {
        return 'most_cheesy_jokes';
    } else if (lowerPrompt.includes('balloon animator') || lowerPrompt.includes('balloonanimator')) {
        return 'best_balloon_animators';
    } else if (lowerPrompt.includes('hair style') || lowerPrompt.includes('hairstyle')) {
        return 'most_hair_styles';
    } else if (lowerPrompt.includes('treasure hunter') || lowerPrompt.includes('treasurehunter')) {
        return 'best_treasure_hunters';
    } else if (lowerPrompt.includes('karaoke singer') || lowerPrompt.includes('karaokesinger')) {
        return 'most_karaoke_singers';
    } else if (lowerPrompt.includes('lawn bowler') || lowerPrompt.includes('lawnbowler')) {
        return 'best_lawn_bowlers';
    }

    else {
        // For unknown, try to extract a metric name
        const words = lowerPrompt.split(' ');
        for (let word of words) {
            if (indicatorMap[word]) return word;
        }
        return null; // Still unknown
    }
}


// Function to get color based on value and metric
function getColor(value, metric, min, max) {
    if (value == null) return 'gray';
    let ratio;
    if (value <= 0 || min <= 0 || max <= 0) {
        // Linear scale if any value is non-positive
        ratio = (value - min) / (max - min);
    } else {
        // Logarithmic scale for positive values
        ratio = (Math.log(value) - Math.log(min)) / (Math.log(max) - Math.log(min));
    }
    // Clamp ratio to 0-1
    ratio = Math.max(0, Math.min(1, ratio));
    const colors = [
        [139, 0, 0], // dark red (0-10%)
        [255, 0, 0], // red (10-20%)
        [255, 69, 0], // red orange (20-30%)
        [255, 140, 0], // dark orange (30-40%)
        [255, 165, 0], // orange (40-50%)
        [255, 215, 0], // gold (50-60%)
        [255, 255, 0], // yellow (60-70%)
        [173, 255, 47], // green yellow (70-80%)
        [0, 255, 0], // lime (80-90%)
        [0, 128, 0] // green (90-100%)
    ];
    const index = Math.floor(ratio * 10);
    const color = colors[Math.min(index, 9)];
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

// Metrics that are higher better (green = high)
const higherBetter = ['gdp', 'literacy', 'population', 'area', 'life_expectancy', 'happiness', 'freedom', 'billionaires', 'height', 'internet_users', 'electricity_access', 'forest_area'];

// World Bank API indicators for dynamic metrics
const indicatorMap = {
    'gdp': 'NY.GDP.MKTP.CD', // GDP (current US$)
    'population': 'SP.POP.TOTL', // Population, total
    'life_expectancy': 'SP.DYN.LE00.IN', // Life expectancy at birth, total (years)
    'literacy': 'SE.ADT.LITR.ZS', // Literacy rate, adult total (%)
    'internet_users': 'IT.NET.USER.ZS', // Individuals using the Internet (% of population)
    'electricity_access': 'EG.ELC.ACCS.ZS', // Access to electricity (% of population)
    'unemployment': 'SL.UEM.TOTL.ZS', // Unemployment, total (% of total labor force)
    'poverty': 'SI.POV.NAHC', // Poverty headcount ratio at national poverty lines (% of population)
    'co2_emissions': 'EN.ATM.CO2E.PC', // CO2 emissions (metric tons per capita)
    'forest_area': 'AG.LND.FRST.ZS', // Forest area (% of land area)
    'urban_population': 'SP.URB.TOTL.IN.ZS', // Urban population (% of total)
    'rural_population': 'SP.RUR.TOTL.ZS',    // Rural population (% of total population)
    'agriculture_value_added': 'NV.AGR.TOTL.CD', // Agriculture, value added (current US$)
    'industry_value_added': 'NV.IND.TOTL.CD',    // Industry, value added (current US$)
    'services_value_added': 'NV.SRV.TOTL.CD',    // Services, value added (current US$)
    'birth_rate': 'SP.DYN.CBRT.IN',           // Birth rate, crude (per 1,000 people)
    'death_rate': 'SP.DYN.CDRT.IN',           // Death rate, crude (per 1,000 people)
    'fertility_rate': 'SP.DYN.TFRT.IN',       // Fertility rate, total (births per woman)
    'gdp_per_capita': 'NY.GDP.PCAP.CD',       // GDP per capita (current US$)
    'inflation': 'FP.CPI.TOTL.ZG',             // Inflation, consumer prices (annual %)
    'school_enrollment_primary': 'SE.PRM.ENRR',  // School enrollment, primary (% gross)
    'school_enrollment_secondary': 'SE.SEC.ENRR', // School enrollment, secondary (% gross)
    'mortality_under5': 'SH.DYN.MORT',         // Mortality rate, under-5 (per 1,000 live births)
    'health_expenditure': 'SH.XPD.CHEX.GD.ZS',  // Current health expenditure (% of GDP)
    'access_to_sanitation': 'SH.STA.ACSN',     // Access to improved sanitation facilities (% of population)
    'access_to_clean_water': 'SH.H2O.SAFE.ZS', // Access to safe water (% of population)
    'mobile_subscriptions': 'IT.CEL.SETS.P2',  // Mobile cellular subscriptions (per 100 people)
    'railways_total': 'IS.RRS.TOTL.KM',        // Railways, total network (km)
    'road_density': 'IS.ROD.DNST.K2',           // Road density (km of road per 100 sq. km of land area)
    'electricity_production': 'EG.ELC.PROD.KH', // Electric power consumption (kWh)
    'renewable_energy_consumption': 'EG.FEC.RNEW.ZS', // Renewable energy consumption (% of total final energy consumption)
    'external_debt': 'DT.DOD.DECT.CD',          // External debt stocks, total (current US$)
    'gini_index': 'SI.POV.GINI',                 // GINI index (World Bank estimate)
    'mortality_adult_male': 'SP.DYN.AMRT.MA',   // Mortality rate, adult male (per 1,000 male adults)
    'mortality_adult_female': 'SP.DYN.AMRT.FE', // Mortality rate, adult female (per 1,000 female adults)
    'agriculture_land_percent': 'AG.LND.AGRI.ZS', // Agriculture land (% of land area)
    'arable_land_percent': 'AG.LND.ARBL.ZS', // Arable land (% of land area)
    'forest_land_percent': 'AG.LND.FRST.ZS', // Forest land (% of land area)
    'agriculture_employment_percent': 'SL.AGR.EMPL.ZS', // Employment in agriculture (% of total employment)
    'industry_employment_percent': 'SL.IND.EMPL.ZS', // Employment in industry (% of total employment)
    'services_employment_percent': 'SL.SRV.EMPL.ZS', // Employment in services (% of total employment)
    'electricity_access_rural_percent': 'EG.ELC.ACCS.RU.ZS', // Access to electricity, rural (% of population)
    'electricity_access_urban_percent': 'EG.ELC.ACCS.UR.ZS', // Access to electricity, urban (% of population)
    'access_to_improved_water_percent': 'SH.H2O.SAFE.ZS', // Access to improved water source (% of population)
    'immunization_measles_percent': 'SH.IMM.MEAS', // Immunization, measles (% of children ages 12-23 months)
    'immunization_dpt_percent': 'SH.IMM.IDPT', // Immunization, DPT (% of children ages 12-23 months)
    'infant_mortality_rate': 'SP.DYN.IMRT.IN', // Infant mortality rate (per 1,000 live births)
    'maternal_mortality_ratio': 'SH.STA.MMRT', // Maternal mortality ratio (modeled estimate, per 100,000 live births)
    'physicians_per_1000': 'SH.MED.PHYS.ZS', // Physicians (per 1,000 people)
    'hospital_beds_per_1000': 'SH.MED.BEDS.ZS', // Hospital beds (per 1,000 people)
    'net_migration_rate': 'SM.POP.NETM', // Net migration rate (per 1,000 population)
    'urban_population_percent': 'SP.URB.TOTL.IN.ZS', // Urban population (% of total population)
    'rural_population_percent': 'SP.RUR.TOTL.ZS', // Rural population (% of total population)
    'population_growth_rate': 'SP.POP.GROW', // Population growth (annual %)
    'median_age': 'SP.POP.0014.TO.ZS', // Median age (not an official WB code, use approximate)
    'birth_rate_crude': 'SP.DYN.CBRT.IN', // Crude birth rate (per 1,000 people)
    'death_rate_crude': 'SP.DYN.CDRT.IN', // Crude death rate (per 1,000 people)
    'life_expectancy_female': 'SP.DYN.LE00.FE.IN', // Life expectancy at birth, female (years)
    'life_expectancy_male': 'SP.DYN.LE00.MA.IN', // Life expectancy at birth, male (years)
    'total_fertility_rate': 'SP.DYN.TFRT.IN', // Total fertility rate (births per woman)
    'contraceptive_prevalence': 'SP.DYN.CONU.ZS', // Contraceptive prevalence (% of women ages 15-49)
    'primary_school_completion_rate': 'SE.PRM.CMPT.ZS', // Primary school completion rate (% of relevant age group)
    'secondary_school_completion_rate': 'SE.SEC.CMPT.LO.ZS', // Lower secondary school completion rate (%)
    'tertiary_school_enrollment_percent': 'SE.TER.ENRR', // Tertiary school enrollment (% gross)
    'adult_literacy_rate': 'SE.ADT.LITR.ZS', // Adult literacy rate (% of people ages 15 and above)
    'youth_literacy_rate': 'SE.ADT.1524.LT.ZS', // Youth literacy rate (% ages 15-24)
    'unemployment_youth_percent': 'SL.UEM.1524.ZS', // Youth unemployment rate (% ages 15-24)
    'unemployment_total_percent': 'SL.UEM.TOTL.ZS', // Unemployment, total (% of total labor force)
    'gdp_growth_annual_percent': 'NY.GDP.MKTP.KD.ZG', // GDP growth (annual %)
    'gdp_per_capita_growth': 'NY.GDP.PCAP.KD.ZG', // GDP per capita growth (annual %)
    'gdp_sector_agriculture_percent': 'NV.AGR.TOTL.ZS', // Agriculture, value added (% of GDP)
    'gdp_sector_industry_percent': 'NV.IND.TOTL.ZS', // Industry, value added (% of GDP)
    'gdp_sector_services_percent': 'NV.SRV.TOTL.ZS', // Services, value added (% of GDP)
    'inflation_consumer_prices_percent': 'FP.CPI.TOTL.ZG', // Inflation, consumer prices (annual %)
    'government_health_expenditure_percent': 'SH.XPD.GHED.GD.ZS', // Government health expenditure (% of GDP)
    'government_education_expenditure_percent': 'SE.XPD.TOTL.GD.ZS', // Government expenditure on education (% of GDP)
    'foreign_direct_investment_net_inflow': 'BX.KLT.DINV.CD.WD', // Foreign direct investment, net inflows (current US$)
    'external_debt_stock': 'DT.DOD.DECT.CD', // External debt stocks, total (current US$)
    'net_ODA_received': 'DT.ODA.ODAT.CD', // Net official development assistance and official aid received (current US$)
    'internet_users_percent': 'IT.NET.USER.ZS', // Internet users (% of population)
    'mobile_cellular_subscriptions': 'IT.CEL.SETS.P2', // Mobile cellular subscriptions (per 100 people)
    'broadband_subscriptions': 'IT.NET.BBND.P2', // Fixed broadband subscriptions (per 100 people)
    'railways_total_km': 'IS.RRS.TOTL.KM', // Railways, total network (km)
    'roads_total_km': 'IS.ROD.TOTL.KM', // Roads, total network (km)
    'road_density': 'IS.ROD.DNST.K2', // Road density (km per 100 sq. km of land area)
    'air_transport_passenger_carried': 'IS.AIR.PSGR', // Air transport, passengers carried
    'electric_power_consumption_kwh': 'EG.USE.ELEC.KH.PC', // Electric power consumption (kWh per capita)
    'renewable_energy_consumption_percent': 'EG.FEC.RNEW.ZS', // Renewable energy consumption (% of total final energy consumption)
    'co2_emissions_total': 'EN.ATM.CO2E.KT', // CO2 emissions (kt)
    'co2_emissions_per_capita': 'EN.ATM.CO2E.PC', // CO2 emissions (metric tons per capita)
    'energy_use_kg_kg_oil_equivalent': 'EG.USE.PCAP.KG.OE', // Energy use (kg of oil equivalent per capita)
    'agriculture_fertilizer_consumption_kg_per_hectare': 'AG.CON.FERT.ZS', // Fertilizer consumption (kg per hectare of arable land)
    'cereal_yield_kg_per_hectare': 'AG.YLD.CREL.KG', // Cereal yield (kg per hectare)
    'food_production_index': 'AG.PRD.FOOD.XD', // Food production index (2004-2006 = 100)
    'poverty_headcount_ratio_1_90_usd_percent': 'SI.POV.DDAY', // Poverty headcount ratio at $1.90 a day (% of population)
    'poverty_headcount_ratio_3_20_usd_percent': 'SI.POV.UMIC', // Poverty headcount ratio at $3.20 a day (% of population)
    'poverty_headcount_ratio_5_50_usd_percent': 'SI.POV.UMIC2', // Poverty headcount ratio at $5.50 a day (% of population)
    'gini_index': 'SI.POV.GINI', // GINI index (income inequality)
    'labor_force_participation_rate_percent': 'SL.TLF.CACT.ZS', // Labor force participation rate (% of population ages 15+)
    'female_labor_force_participation_percent': 'SL.TLF.CACT.FE.ZS', // Female labor force participation rate (% ages 15+)
    'male_labor_force_participation_percent': 'SL.TLF.CACT.MA.ZS', // Male labor force participation rate (% ages 15+)
    'youth_labor_force_participation_percent': 'SL.TLF.CACT.1524.ZS', // Youth labor force participation rate (% ages 15-24)
    'public_debt_percent_gdp': 'GC.DOD.TOTL.GD.ZS', // Central government debt, total (% of GDP)
    'tax_revenue_percent_gdp': 'GC.TAX.TOTL.GD.ZS', // Tax revenue (% of GDP)
    'current_account_balance_percent_gdp': 'BN.CAB.XOKA.GD.ZS', // Current account balance (% of GDP)
    'exports_percent_gdp': 'NE.EXP.GNFS.ZS', // Exports of goods and services (% of GDP)
    'imports_percent_gdp': 'NE.IMP.GNFS.ZS', // Imports of goods and services (% of GDP)
    'trade_balance': 'NE.RSB.GNFS.CD', // Trade balance (current US$)
    'tourism_revenue_percent_gdp': 'ST.INT.RCPT.XP.ZS', // Travel services (% of exports)
    'military_expenditure_percent_gdp': 'MS.MIL.XPND.GD.ZS', // Military expenditure (% of GDP)
    'education_expenditure_percent_gdp': 'SE.XPD.TOTL.GD.ZS', // Government expenditure on education (% of GDP)
    'research_and_development_expenditure_percent_gdp': 'GB.XPD.RSDV.GD.ZS', // Research and development expenditure (% of GDP)
    'internet_bandwidth_kbps_per_user': 'IT.NET.BBND.P2', // Broadband subscriptions (proxy for bandwidth)
    'access_to_improved_sanitation_percent': 'SH.STA.ACSN.ZS', // Access to improved sanitation facilities (% of population)
    'child_mortality_rate': 'SH.DYN.MORT', // Mortality rate, under-5 (per 1,000 live births)
    'maternal_mortality_rate': 'SH.STA.MMRT', // Maternal mortality ratio (per 100,000 live births)
    'government_debt_percent_gdp': 'GC.DOD.TOTL.GD.ZS', // Government debt (% of GDP)
    'current_health_expenditure_per_capita': 'SH.XPD.CHEX.PC.CD', // Current health expenditure per capita (current US$)
    'hospital_beds_per_1000_people': 'SH.MED.BEDS.ZS', // Hospital beds (per 1,000 people)
    'physicians_per_1000_people': 'SH.MED.PHYS.ZS', // Physicians (per 1,000 people)
    'mortality_rate_adult_male': 'SP.DYN.AMRT.MA', // Mortality rate, adult male (per 1,000 males)
    'mortality_rate_adult_female': 'SP.DYN.AMRT.FE', // Mortality rate, adult female (per 1,000 females)
    'total_health_expenditure_percent_gdp': 'SH.XPD.TOTL.GD.ZS', // Total health expenditure (% of GDP)
    'total_education_expenditure_percent_gdp': 'SE.XPD.TOTL.GD.ZS', // Total education expenditure (% of GDP)
    'youth_unemployment_rate_percent': 'SL.UEM.1524.ZS', // Youth unemployment rate (% ages 15-24)
    'average_population_density': 'EN.POP.DNST', // Population density (people per sq. km of land area)
    'internet_users_per_100': 'IT.NET.USER.P2', // Internet users (per 100 people)
    'mobile_phone_subscriptions_per_100': 'IT.CEL.SETS.P2', // Mobile phone subscriptions (per 100 people)
    'electricity_production_kwh': 'EG.ELC.PROD.KH', // Electric power production (kWh)
    'renewable_electricity_output_percent': 'EG.ELC.RNEW.ZS', // Renewable electricity output (% of total electricity output)
    'urban_population_growth_rate': 'SP.URB.GROW', // Urban population growth (annual %)
    'rural_population_growth_rate': 'SP.RUR.GROW', // Rural population growth (annual %)
    'female_primary_school_enrollment_percent': 'SE.PRM.ENRR.FE', // Female primary school enrollment (% gross)
    'male_primary_school_enrollment_percent': 'SE.PRM.ENRR.MA', // Male primary school enrollment (% gross)
    'female_secondary_school_enrollment_percent': 'SE.SEC.ENRR.FE', // Female secondary school enrollment (% gross)
    'male_secondary_school_enrollment_percent': 'SE.SEC.ENRR.MA', // Male secondary school enrollment (% gross)
    'female_tertiary_school_enrollment_percent': 'SE.TER.ENRR.FE', // Female tertiary school enrollment (% gross)
    'male_tertiary_school_enrollment_percent': 'SE.TER.ENRR.MA', // Male tertiary school enrollment (% gross)
    'gdp_per_employed_person': 'SL.GDP.PCAP.EM.KD', // GDP per employed person (constant 2010 US$)
    'average_years_of_schooling': 'SE.SCH.LIFE', // Average years of schooling
    'female_labor_force_participation_rate_percent': 'SL.TLF.CACT.FE.ZS', // Female labor force participation rate (% ages 15+)
    'male_labor_force_participation_rate_percent': 'SL.TLF.CACT.MA.ZS', // Male labor force participation rate (% ages 15+)
    'total_fertility_rate': 'SP.DYN.TFRT.IN', // Total fertility rate (births per woman)
    'population_ages_65_and_above_percent': 'SP.POP.65UP.TO.ZS', // Population ages 65 and above (% of total)
    'youth_dependency_ratio': 'SP.POP.DPND.YG', // Youth dependency ratio (% of working-age population)
    'elderly_dependency_ratio': 'SP.POP.DPND.OL', // Elderly dependency ratio (% of working-age population)
    'net_migration_rate_per_1000': 'SM.POP.NETM', // Net migration rate (per 1,000 population)
    'child_mortality_rate_per_1000': 'SH.DYN.MORT', // Under-five mortality rate (per 1,000 live births)
    'road_density_km_per_100sqkm': 'IS.ROD.DNST.K2', // Road density (km per 100 sq km land area)
    'railways_total_km_network': 'IS.RRS.TOTL.KM', // Railways total network (km)
};
function friendlyLabel(key) {
  return key
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
function buildDropdown() {
  const select = document.getElementById('metricSelect');
  if (!select) return;

  Object.keys(indicatorMap).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = friendlyLabel(key);
    select.appendChild(option);
  });
}
document.addEventListener('DOMContentLoaded', buildDropdown);
const sillyMetrics = [
  'funniest_people',
  'most_cats',
  'best_singers',
  'best_dancers',
  'number_of_unicorns',
  'people_who_sing_the_best',
  'people_who_tell_the_best_jokes',
  'best_ice_cream_eaters',
  'most_dance_moves',
  'largest_collection_of_socks',
  'most_laughs_per_minute',
  'best_hat_wearers',
  'most_frequent_nappers',
  'best_pizza_makers',
  'most_coffee_consumed',
  'best_parkour_runners',
  'most_tattoos',
  'best_chocolate_eaters',
  'most_bubble_gum_blowers',
  'best_selfie_takers',
  'most_hats_owned',
  'most_marshmallows_eaten',
  'best_magic_tricks',
  'most_giggles',
  'best_juggling_skills',
  'most_puppies_owned',
  'best_sandcastle_builders',
  'most_balloons_popped',
  'best_guitar_players',
  'most_stickers_collected',
  'best_mustache_growers',
  'most_sunglasses_worn',
  'best_bike_riders',
  'most_compliments_given',
  'best_pancake_flippers',
  'most_paintings_created',
  'best_laughter_contestants',
  'most_fancy_dresses',
  'best_ice_skaters',
  'most_donuts_eaten',
  'best_drum_players',
  'most_fish_caught',
  'best_hula_hoopers',
  'most_pies_baked',
  'best_rollercoaster_riders',
  'most_pretzels_eaten',
  'best_lego_builders',
  'most_friends_made',
  'best_pogo_stick_jumps',
  'most_koalas_seen',
  'best_chess_players',
  'most_smiles_per_minute',
  'best_rappers',
  'most_hugs_given',
  'best_ice_cream_scoopers',
  'most_painted_nails',
  'best_hot_dog_eaters',
  'most_bubbles_blowed',
  'best_tug_of_war_teams',
  'most_doodles_drawn',
  'best_cupcake_bakers',
  'most_puppy_lovers',
  'best_fort_builders',
  'most_fireworks_watched',
  'best_pumpkin_carvers',
  'most_pajama_parties',
  'best_cup_stacking',
  'most_cheesy_jokes',
  'best_balloon_animators',
  'most_hair_styles',
  'best_treasure_hunters',
  'most_karaoke_singers',
  'best_lawn_bowlers'
];

// Helper: simple seeded random generator for consistency (optional)
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate a "random" value per country and metric for silliness, with some consistency
function generateSillyValue(countryCode, metric) {
  // Create a seed based on countryCode + metric string char codes
  let seed = 0;
  const combined = countryCode + metric;
  for (let i = 0; i < combined.length; i++) {
    seed += combined.charCodeAt(i) * (i + 1);
  }
  // Use seeded random to get consistent result between 0 and 10
  return Math.floor(seededRandom(seed) * 11);
}

// The unified function to get metric value
function getMetricValue(countryCode, metric) {
  // First try real data
  if (countryData[countryCode] && countryData[countryCode][metric] != null) {
    return countryData[countryCode][metric];
  }
  // Then try silly metrics dynamic generation
  if (sillyMetrics.includes(metric)) {
    return generateSillyMetricValue(countryCode, metric);
  }
  // Otherwise no data
  return null;
}


// For metrics where lower is better, but for now all are higher better