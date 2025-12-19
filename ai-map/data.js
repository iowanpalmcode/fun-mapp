// Additional data for metrics not in countries.json
const additionalData = {
    "USA": { gdp: 21427700, literacy: 99, life_expectancy: 78.9, happiness: 6.9, freedom: 0.92, billionaires: 735, height: 175.3 },
    "CHN": { gdp: 14342903, literacy: 96.8, life_expectancy: 76.9, happiness: 5.1, freedom: 0.55, billionaires: 473, height: 167.1 },
    "JPN": { gdp: 5082465, literacy: 99, life_expectancy: 84.6, happiness: 5.9, freedom: 0.89, billionaires: 49, height: 170.7 },
    "DEU": { gdp: 4223116, literacy: 99, life_expectancy: 81.3, happiness: 7.0, freedom: 0.93, billionaires: 114, height: 175.4 },
    "GBR": { gdp: 2829108, literacy: 99, life_expectancy: 81.3, happiness: 6.8, freedom: 0.91 },
    "FRA": { gdp: 2715517, literacy: 99, life_expectancy: 82.7, happiness: 6.7, freedom: 0.89 },
    "IND": { gdp: 3176290, literacy: 74.4, life_expectancy: 69.7, happiness: 3.8, freedom: 0.63 },
    "ITA": { gdp: 2001249, literacy: 99.2, life_expectancy: 83.4, happiness: 6.0, freedom: 0.85 },
    "BRA": { gdp: 1839758, literacy: 92.6, life_expectancy: 75.9, happiness: 6.4, freedom: 0.75 },
    "CAN": { gdp: 1736425, literacy: 99, life_expectancy: 82.3, happiness: 7.1, freedom: 0.96 },
    "RUS": { gdp: 1776040, literacy: 99.7, life_expectancy: 72.7, happiness: 5.5, freedom: 0.58 },
    "KOR": { gdp: 1811150, literacy: 97.9, life_expectancy: 83.3, happiness: 5.9, freedom: 0.84 },
    "AUS": { gdp: 1396567, literacy: 99, life_expectancy: 83.4, happiness: 7.2, freedom: 0.95 },
    "ESP": { gdp: 1425276, literacy: 98.1, life_expectancy: 83.4, happiness: 6.5, freedom: 0.89 },
    "MEX": { gdp: 1291631, literacy: 94.5, life_expectancy: 75.1, happiness: 6.5, freedom: 0.77 },
    "IDN": { gdp: 1119190, literacy: 95.7, life_expectancy: 71.7, happiness: 5.3, freedom: 0.72 },
    "NLD": { gdp: 909887, literacy: 99, life_expectancy: 82.3, happiness: 7.4, freedom: 0.93 },
    "SAU": { gdp: 793522, literacy: 94.7, life_expectancy: 75.1, happiness: 6.4, freedom: 0.71 },
    "TUR": { gdp: 754412, literacy: 96.2, life_expectancy: 77.7, happiness: 5.5, freedom: 0.60 },
    "CHE": { gdp: 703082, literacy: 99, life_expectancy: 83.8, happiness: 7.6, freedom: 0.96 },
    "EGY": { gdp: 303175, literacy: 80.8, life_expectancy: 71.8, happiness: 4.2, freedom: 0.45 },
    "THA": { gdp: 543548, literacy: 96.7, life_expectancy: 75.1, happiness: 6.0, freedom: 0.85 },
    "POL": { gdp: 592164, literacy: 99.8, life_expectancy: 78.5, happiness: 6.1, freedom: 0.84 },
    "SWE": { gdp: 531341, literacy: 99, life_expectancy: 82.7, happiness: 7.4, freedom: 0.96 },
    "NGA": { gdp: 448120, literacy: 68.0, life_expectancy: 54.3, happiness: 4.9, freedom: 0.46 },
    "ARE": { gdp: 421142, literacy: 96.0, life_expectancy: 77.8, happiness: 6.8, freedom: 0.83 },
    "ISR": { gdp: 407101, literacy: 97.8, life_expectancy: 82.5, happiness: 7.1, freedom: 0.88 },
    "IRN": { gdp: 388544, literacy: 85.5, life_expectancy: 76.7, happiness: 4.7, freedom: 0.46 },
    "PAK": { gdp: 348898, literacy: 58.0, life_expectancy: 67.3, happiness: 5.7, freedom: 0.49 },
    // Add more countries as needed for comprehensive data
    "AFG": { gdp: 20000, literacy: 43, life_expectancy: 64.5, happiness: 2.5, freedom: 0.42 },
    "ALB": { gdp: 18000, literacy: 98.1, life_expectancy: 78.5, happiness: 5.0, freedom: 0.75 },
    "DZA": { gdp: 180000, literacy: 81.4, life_expectancy: 76.9, happiness: 5.2, freedom: 0.53 },
    "AGO": { gdp: 95000, literacy: 71.1, life_expectancy: 60.8, happiness: 4.0, freedom: 0.58 },
    "ARG": { gdp: 450000, literacy: 98.1, life_expectancy: 76.7, happiness: 5.9, freedom: 0.84 },
    "ARM": { gdp: 14000, literacy: 99.8, life_expectancy: 75.1, happiness: 5.3, freedom: 0.67 },
    "AUT": { gdp: 430000, literacy: 98, life_expectancy: 81.5, happiness: 7.2, freedom: 0.91 },
    "AZE": { gdp: 48000, literacy: 99.8, life_expectancy: 73.0, happiness: 5.2, freedom: 0.60 },
    "BHR": { gdp: 38000, literacy: 97.5, life_expectancy: 77.4, happiness: 6.1, freedom: 0.71 },
    "BGD": { gdp: 420000, literacy: 74.7, life_expectancy: 72.6, happiness: 4.5, freedom: 0.73 },
    "BLR": { gdp: 60000, literacy: 99.7, life_expectancy: 74.2, happiness: 5.6, freedom: 0.49 },
    "BEL": { gdp: 530000, literacy: 99, life_expectancy: 81.6, happiness: 6.9, freedom: 0.91 },
    "BLZ": { gdp: 1800, literacy: 82.7, life_expectancy: 74.5, happiness: 5.9, freedom: 0.82 },
    "BEN": { gdp: 17000, literacy: 42.4, life_expectancy: 61.8, happiness: 4.9, freedom: 0.67 },
    "BTN": { gdp: 2500, literacy: 66.6, life_expectancy: 71.8, happiness: 5.1, freedom: 0.81 },
    "BOL": { gdp: 40000, literacy: 95.7, life_expectancy: 71.2, happiness: 5.8, freedom: 0.71 },
    "BIH": { gdp: 22000, literacy: 98.5, life_expectancy: 77.4, happiness: 5.8, freedom: 0.71 },
    "BWA": { gdp: 18000, literacy: 88.5, life_expectancy: 69.6, happiness: 3.5, freedom: 0.83 },
    "BGR": { gdp: 80000, literacy: 98.4, life_expectancy: 74.3, happiness: 5.8, freedom: 0.82 },
    "BFA": { gdp: 18000, literacy: 41.2, life_expectancy: 61.6, happiness: 4.4, freedom: 0.72 },
    "BDI": { gdp: 3000, literacy: 85.6, life_expectancy: 61.2, happiness: 3.8, freedom: 0.46 },
    "CPV": { gdp: 2000, literacy: 87.6, life_expectancy: 72.8, happiness: 5.2, freedom: 0.85 },
    "KHM": { gdp: 27000, literacy: 80.5, life_expectancy: 69.8, happiness: 4.6, freedom: 0.80 },
    "CMR": { gdp: 39000, literacy: 77.1, life_expectancy: 59.3, happiness: 5.1, freedom: 0.63 },
    "CAF": { gdp: 2200, literacy: 56.6, life_expectancy: 53.9, happiness: 3.5, freedom: 0.64 },
    "TCD": { gdp: 11000, literacy: 40.2, life_expectancy: 54.0, happiness: 4.4, freedom: 0.43 },
    "CHL": { gdp: 300000, literacy: 97.3, life_expectancy: 80.2, happiness: 6.5, freedom: 0.85 },
    "COL": { gdp: 330000, literacy: 95.7, life_expectancy: 77.3, happiness: 6.3, freedom: 0.75 },
    "COM": { gdp: 1300, literacy: 77.8, life_expectancy: 64.3, happiness: 4.3, freedom: 0.55 },
    "COG": { gdp: 13000, literacy: 79.3, life_expectancy: 64.6, happiness: 5.1, freedom: 0.61 },
    "COD": { gdp: 55000, literacy: 77.9, life_expectancy: 60.7, happiness: 4.5, freedom: 0.46 },
    "CRI": { gdp: 65000, literacy: 97.9, life_expectancy: 80.3, happiness: 7.1, freedom: 0.92 },
    "CIV": { gdp: 58000, literacy: 56.9, life_expectancy: 57.8, happiness: 5.3, freedom: 0.69 },
    "HRV": { gdp: 68000, literacy: 99.3, life_expectancy: 78.0, happiness: 5.8, freedom: 0.75 },
    "CUB": { gdp: 107000, literacy: 99.8, life_expectancy: 78.8, happiness: 5.4, freedom: 0.45 },
    "CYP": { gdp: 25000, literacy: 99.1, life_expectancy: 80.7, happiness: 6.2, freedom: 0.85 },
    "CZE": { gdp: 250000, literacy: 99, life_expectancy: 79.4, happiness: 6.9, freedom: 0.88 },
    "DNK": { gdp: 350000, literacy: 99, life_expectancy: 80.9, happiness: 7.6, freedom: 0.96 },
    "DJI": { gdp: 3000, literacy: 67.9, life_expectancy: 67.1, happiness: 4.5, freedom: 0.60 },
    "DMA": { gdp: 600, literacy: 94, life_expectancy: 78.0, happiness: 6.3, freedom: 0.89 },
    "DOM": { gdp: 89000, literacy: 93.8, life_expectancy: 74.1, happiness: 5.4, freedom: 0.86 },
    "ECU": { gdp: 110000, literacy: 94.5, life_expectancy: 77.0, happiness: 6.1, freedom: 0.81 },
    "EGY": { gdp: 303175, literacy: 80.8, life_expectancy: 71.8, happiness: 4.3, freedom: 0.59 },
    "SLV": { gdp: 28000, literacy: 89.1, life_expectancy: 73.3, happiness: 6.3, freedom: 0.86 },
    "GNQ": { gdp: 11000, literacy: 95.3, life_expectancy: 58.7, happiness: 5.1, freedom: 0.49 },
    "ERI": { gdp: 2000, literacy: 76.6, life_expectancy: 66.5, happiness: 4.1, freedom: 0.43 },
    "EST": { gdp: 38000, literacy: 99.8, life_expectancy: 78.7, happiness: 6.2, freedom: 0.90 },
    "SWZ": { gdp: 4500, literacy: 87.5, life_expectancy: 60.2, happiness: 4.3, freedom: 0.65 },
    "ETH": { gdp: 110000, literacy: 51.8, life_expectancy: 66.6, happiness: 4.2, freedom: 0.47 },
    "FJI": { gdp: 5000, literacy: 99.1, life_expectancy: 67.3, happiness: 5.3, freedom: 0.82 },
    "FIN": { gdp: 270000, literacy: 100, life_expectancy: 81.9, happiness: 7.8, freedom: 0.96 },
    "GAB": { gdp: 17000, literacy: 85.3, life_expectancy: 66.5, happiness: 4.8, freedom: 0.64 },
    "GMB": { gdp: 2000, literacy: 61.8, life_expectancy: 62.1, happiness: 5.1, freedom: 0.78 },
    "GEO": { gdp: 18000, literacy: 99.8, life_expectancy: 73.7, happiness: 5.2, freedom: 0.71 },
    "GHA": { gdp: 73000, literacy: 79.0, life_expectancy: 64.1, happiness: 5.1, freedom: 0.80 },
    "GRC": { gdp: 210000, literacy: 97.9, life_expectancy: 81.5, happiness: 5.4, freedom: 0.86 },
    "GRD": { gdp: 1000, literacy: 98.6, life_expectancy: 72.4, happiness: 5.9, freedom: 0.90 },
    "GTM": { gdp: 78000, literacy: 81.5, life_expectancy: 74.3, happiness: 6.4, freedom: 0.78 },
    "GIN": { gdp: 16000, literacy: 45.3, life_expectancy: 61.6, happiness: 4.9, freedom: 0.63 },
    "GNB": { gdp: 1600, literacy: 59.9, life_expectancy: 59.7, happiness: 4.6, freedom: 0.71 },
    "GUY": { gdp: 15000, literacy: 88.5, life_expectancy: 69.9, happiness: 6.3, freedom: 0.83 },
    "HTI": { gdp: 20000, literacy: 61.7, life_expectancy: 64.0, happiness: 4.0, freedom: 0.55 },
    "HND": { gdp: 25000, literacy: 88.5, life_expectancy: 75.3, happiness: 6.1, freedom: 0.78 },
    "HUN": { gdp: 160000, literacy: 99.1, life_expectancy: 76.9, happiness: 6.0, freedom: 0.74 },
    "ISL": { gdp: 25000, literacy: 99, life_expectancy: 83.1, happiness: 7.5, freedom: 0.96 },
    "IRN": { gdp: 388544, literacy: 87.9, life_expectancy: 76.7, happiness: 4.7, freedom: 0.48 },
    "IRQ": { gdp: 230000, literacy: 79.7, life_expectancy: 70.6, happiness: 4.8, freedom: 0.54 },
    "IRL": { gdp: 500000, literacy: 99, life_expectancy: 82.3, happiness: 7.0, freedom: 0.92 },
    "ISR": { literacy: 97.8, life_expectancy: 82.8, happiness: 7.1, freedom: 0.88 },
    "JAM": { gdp: 17000, literacy: 88.7, life_expectancy: 74.4, happiness: 5.9, freedom: 0.84 },
    "JOR": { gdp: 45000, literacy: 98.2, life_expectancy: 74.5, happiness: 4.2, freedom: 0.69 },
    "KAZ": { gdp: 190000, literacy: 99.8, life_expectancy: 73.2, happiness: 6.0, freedom: 0.75 },
    "KEN": { gdp: 110000, literacy: 81.5, life_expectancy: 66.7, happiness: 4.5, freedom: 0.73 },
    "KIR": { gdp: 200, literacy: 95.2, life_expectancy: 68.1, happiness: 5.1, freedom: 0.89 },
    "KWT": { gdp: 110000, literacy: 96.5, life_expectancy: 75.5, happiness: 6.1, freedom: 0.76 },
    "KGZ": { gdp: 9000, literacy: 99.6, life_expectancy: 71.8, happiness: 5.8, freedom: 0.72 },
    "LAO": { gdp: 19000, literacy: 84.7, life_expectancy: 67.9, happiness: 4.9, freedom: 0.74 },
    "LVA": { gdp: 38000, literacy: 99.9, life_expectancy: 75.3, happiness: 6.2, freedom: 0.85 },
    "LBN": { gdp: 19000, literacy: 95.1, life_expectancy: 78.9, happiness: 5.2, freedom: 0.70 },
    "LSO": { gdp: 2500, literacy: 79.4, life_expectancy: 54.3, happiness: 3.8, freedom: 0.65 },
    "LBR": { gdp: 3000, literacy: 75.6, life_expectancy: 64.1, happiness: 5.1, freedom: 0.58 },
    "LBY": { gdp: 52000, literacy: 91.0, life_expectancy: 72.9, happiness: 5.5, freedom: 0.52 },
    "LIE": { gdp: 7000, literacy: 100, life_expectancy: 82.6, happiness: 7.1, freedom: 0.92 },
    "LTU": { gdp: 65000, literacy: 99.8, life_expectancy: 75.9, happiness: 6.3, freedom: 0.89 },
    "LUX": { gdp: 82000, literacy: 100, life_expectancy: 82.3, happiness: 7.2, freedom: 0.94 },
    "MDG": { gdp: 14000, literacy: 74.8, life_expectancy: 67.0, happiness: 4.2, freedom: 0.62 },
    "MWI": { gdp: 13000, literacy: 65.8, life_expectancy: 64.3, happiness: 3.5, freedom: 0.75 },
    "MYS": { gdp: 380000, literacy: 95.4, life_expectancy: 76.2, happiness: 6.3, freedom: 0.79 },
    "MDV": { gdp: 6000, literacy: 99.3, life_expectancy: 78.9, happiness: 5.2, freedom: 0.74 },
    "MLI": { gdp: 18000, literacy: 35.5, life_expectancy: 59.0, happiness: 4.8, freedom: 0.68 },
    "MLT": { gdp: 18000, literacy: 94.4, life_expectancy: 82.6, happiness: 6.6, freedom: 0.92 },
    "MHL": { gdp: 200, literacy: 98.3, life_expectancy: 65.2, happiness: 5.1, freedom: 0.85 },
    "MRT": { gdp: 9000, literacy: 58.6, life_expectancy: 64.9, happiness: 4.9, freedom: 0.67 },
    "MUS": { gdp: 12000, literacy: 90.6, life_expectancy: 74.9, happiness: 6.1, freedom: 0.90 },
    "FSM": { gdp: 400, literacy: 91.0, life_expectancy: 67.9, happiness: 5.2, freedom: 0.88 },
    "MDA": { gdp: 14000, literacy: 99.4, life_expectancy: 71.9, happiness: 6.2, freedom: 0.69 },
    "MCO": { gdp: 7000, literacy: 99, life_expectancy: 89.4, happiness: 7.1, freedom: 0.93 },
    "MNG": { gdp: 15000, literacy: 98.4, life_expectancy: 69.9, happiness: 5.7, freedom: 0.84 },
    "MNE": { gdp: 6000, literacy: 98.8, life_expectancy: 76.8, happiness: 5.5, freedom: 0.74 },
    "MAR": { gdp: 130000, literacy: 73.8, life_expectancy: 76.7, happiness: 5.1, freedom: 0.68 },
    "MOZ": { gdp: 18000, literacy: 60.7, life_expectancy: 60.9, happiness: 4.5, freedom: 0.74 },
    "MMR": { gdp: 65000, literacy: 75.6, life_expectancy: 67.1, happiness: 4.3, freedom: 0.58 },
    "NAM": { gdp: 13000, literacy: 91.5, life_expectancy: 63.7, happiness: 4.6, freedom: 0.79 },
    "NRU": { gdp: 100, literacy: 99, life_expectancy: 59.6, happiness: 5.8, freedom: 0.89 },
    "NPL": { gdp: 39000, literacy: 67.9, life_expectancy: 70.8, happiness: 5.1, freedom: 0.75 },
    "NZL": { gdp: 220000, literacy: 99, life_expectancy: 82.3, happiness: 7.3, freedom: 0.95 },
    "NIC": { gdp: 14000, literacy: 82.8, life_expectancy: 74.5, happiness: 6.1, freedom: 0.79 },
    "NER": { gdp: 14000, literacy: 19.1, life_expectancy: 62.4, happiness: 4.9, freedom: 0.67 },
    "NGA": { gdp: 448120, literacy: 69.1, life_expectancy: 54.7, happiness: 5.2, freedom: 0.63 },
    "MKD": { gdp: 13000, literacy: 97.8, life_expectancy: 76.4, happiness: 5.5, freedom: 0.78 },
    "NOR": { gdp: 400000, literacy: 100, life_expectancy: 82.8, happiness: 7.4, freedom: 0.95 },
    "OMN": { gdp: 88000, literacy: 95.7, life_expectancy: 77.9, happiness: 6.9, freedom: 0.81 },
    "PAK": { gdp: 348898, literacy: 58, life_expectancy: 67.3, happiness: 5.7, freedom: 0.59 },
    "PLW": { gdp: 200, literacy: 96.6, life_expectancy: 73.7, happiness: 6.1, freedom: 0.89 },
    "PAN": { gdp: 67000, literacy: 95.1, life_expectancy: 78.3, happiness: 6.6, freedom: 0.86 },
    "PNG": { gdp: 27000, literacy: 64.2, life_expectancy: 64.5, happiness: 4.3, freedom: 0.75 },
    "PRY": { gdp: 42000, literacy: 94.0, life_expectancy: 74.3, happiness: 5.7, freedom: 0.79 },
    "PER": { gdp: 240000, literacy: 94.5, life_expectancy: 76.7, happiness: 5.8, freedom: 0.75 },
    "PHL": { gdp: 440000, literacy: 96.3, life_expectancy: 71.2, happiness: 6.0, freedom: 0.72 },
    "POL": { gdp: 592164, literacy: 99.8, life_expectancy: 78.7, happiness: 6.1, freedom: 0.84 },
    "PRT": { gdp: 250000, literacy: 96.1, life_expectancy: 81.9, happiness: 5.9, freedom: 0.89 },
    "QAT": { gdp: 180000, literacy: 97.8, life_expectancy: 80.2, happiness: 6.4, freedom: 0.85 },
    "ROU": { gdp: 300000, literacy: 98.8, life_expectancy: 75.9, happiness: 6.1, freedom: 0.79 },
    "RWA": { gdp: 11000, literacy: 73.2, life_expectancy: 69.0, happiness: 3.3, freedom: 0.72 },
    "KNA": { gdp: 1000, literacy: 97.8, life_expectancy: 71.6, happiness: 6.2, freedom: 0.88 },
    "LCA": { gdp: 2000, literacy: 90.1, life_expectancy: 76.2, happiness: 6.1, freedom: 0.89 },
    "VCT": { gdp: 900, literacy: 96, life_expectancy: 72.5, happiness: 6.2, freedom: 0.89 },
    "WSM": { gdp: 900, literacy: 99.1, life_expectancy: 73.2, happiness: 6.0, freedom: 0.88 },
    "SMR": { gdp: 2000, literacy: 96, life_expectancy: 85.4, happiness: 6.6, freedom: 0.92 },
    "STP": { gdp: 500, literacy: 79.3, life_expectancy: 70.4, happiness: 5.2, freedom: 0.84 },
    "SEN": { gdp: 28000, literacy: 57.7, life_expectancy: 67.9, happiness: 5.4, freedom: 0.76 },
    "SRB": { gdp: 63000, literacy: 98.1, life_expectancy: 76.0, happiness: 6.2, freedom: 0.78 },
    "SYC": { gdp: 1400, literacy: 95.9, life_expectancy: 74.4, happiness: 6.9, freedom: 0.91 },
    "SLE": { gdp: 6000, literacy: 48.1, life_expectancy: 54.7, happiness: 4.1, freedom: 0.64 },
    "SGP": { gdp: 470000, literacy: 97.3, life_expectancy: 83.6, happiness: 6.5, freedom: 0.91 },
    "SVK": { gdp: 120000, literacy: 99.6, life_expectancy: 77.5, happiness: 6.3, freedom: 0.85 },
    "SVN": { gdp: 60000, literacy: 99.7, life_expectancy: 81.3, happiness: 6.6, freedom: 0.94 },
    "SLB": { gdp: 1600, literacy: 84.1, life_expectancy: 73.0, happiness: 5.9, freedom: 0.81 },
    "SOM": { gdp: 8000, literacy: 37.8, life_expectancy: 57.1, happiness: 5.0, freedom: 0.47 },
    "ZAF": { gdp: 420000, literacy: 94.3, life_expectancy: 64.1, happiness: 4.9, freedom: 0.79 },
    "SSD": { gdp: 4000, literacy: 57.6, life_expectancy: 58.6, happiness: 2.9, freedom: 0.42 },
    "LKA": { gdp: 85000, literacy: 92.6, life_expectancy: 77.0, happiness: 4.4, freedom: 0.78 },
    "SDN": { gdp: 35000, literacy: 75.9, life_expectancy: 65.3, happiness: 4.1, freedom: 0.59 },
    "SUR": { gdp: 4000, literacy: 95.6, life_expectancy: 71.6, happiness: 6.3, freedom: 0.83 },
    "SWE": { gdp: 531341, literacy: 99, life_expectancy: 82.8, happiness: 7.4, freedom: 0.96 },
    "CHE": { gdp: 703082, literacy: 99, life_expectancy: 83.8, happiness: 7.6, freedom: 0.96 },
    "SYR": { gdp: 21000, literacy: 86.4, life_expectancy: 72.7, happiness: 3.5, freedom: 0.43 },
    "TWN": { gdp: 790000, literacy: 98.5, life_expectancy: 80.4, happiness: 6.4, freedom: 0.85 },
    "TJK": { gdp: 9000, literacy: 99.8, life_expectancy: 71.1, happiness: 5.5, freedom: 0.65 },
    "TZA": { gdp: 68000, literacy: 80.3, life_expectancy: 65.5, happiness: 3.8, freedom: 0.74 },
    "THA": { gdp: 543548, literacy: 96.7, life_expectancy: 77.2, happiness: 6.0, freedom: 0.81 },
    "TLS": { gdp: 3000, literacy: 68.1, life_expectancy: 69.5, happiness: 5.0, freedom: 0.80 },
    "TGO": { gdp: 8000, literacy: 66.5, life_expectancy: 61.0, happiness: 4.2, freedom: 0.69 },
    "TON": { gdp: 500, literacy: 99.4, life_expectancy: 70.9, happiness: 6.0, freedom: 0.89 },
    "TTO": { gdp: 24000, literacy: 98.8, life_expectancy: 73.5, happiness: 6.2, freedom: 0.84 },
    "TUN": { gdp: 49000, literacy: 81.8, life_expectancy: 76.7, happiness: 4.7, freedom: 0.66 },
    "TUR": { gdp: 754412, literacy: 96.2, life_expectancy: 77.7, happiness: 5.5, freedom: 0.60 },
    "TKM": { gdp: 55000, literacy: 99.7, life_expectancy: 68.2, happiness: 5.6, freedom: 0.40 },
    "TUV": { gdp: 50, literacy: 99.1, life_expectancy: 59.3, happiness: 6.1, freedom: 0.90 },
    "UGA": { gdp: 46000, literacy: 78.4, life_expectancy: 63.4, happiness: 4.4, freedom: 0.68 },
    "UKR": { gdp: 200000, literacy: 99.8, life_expectancy: 72.1, happiness: 4.9, freedom: 0.58 },
    "ARE": { gdp: 421142, literacy: 93.8, life_expectancy: 77.8, happiness: 6.8, freedom: 0.85 },
    "GBR": { gdp: 2829108, literacy: 99, life_expectancy: 81.3, happiness: 6.8, freedom: 0.91 },
    "URY": { gdp: 65000, literacy: 98.8, life_expectancy: 77.9, happiness: 6.4, freedom: 0.84 },
    "UZB": { gdp: 80000, literacy: 100, life_expectancy: 71.7, happiness: 6.2, freedom: 0.71 },
    "VUT": { gdp: 1000, literacy: 85.2, life_expectancy: 70.5, happiness: 5.7, freedom: 0.84 },
    "VEN": { gdp: 48000, literacy: 97.1, life_expectancy: 72.1, happiness: 5.3, freedom: 0.48 },
    "VNM": { gdp: 430000, literacy: 95.0, life_expectancy: 75.4, happiness: 5.4, freedom: 0.74 },
    "YEM": { gdp: 22000, literacy: 70.1, life_expectancy: 66.1, happiness: 3.6, freedom: 0.50 },
    "ZMB": { gdp: 26000, literacy: 86.7, life_expectancy: 63.9, happiness: 4.1, freedom: 0.69 },
    "ZWE": { gdp: 22000, literacy: 88.7, life_expectancy: 61.2, happiness: 3.1, freedom: 0.49 }
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