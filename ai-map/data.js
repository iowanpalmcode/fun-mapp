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
    } else {
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
    // Add more as needed
};

// For metrics where lower is better, but for now all are higher better