let map;
let geojsonLayer;
let legend;
let countryData = {};
let nameToCode = {};

document.addEventListener('DOMContentLoaded', async function() {
    // Initialize map
    map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Load countries data
    try {
        const response = await fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json');
        const countries = await response.json();
        
        // Build countryData
        for (const country of Object.values(countries)) {
            const code = country.cca3;
            countryData[code] = {
                name: country.name.common,
                population: country.population,
                area: country.area,
                ...additionalData[code] // merge additional data
            };
        }

        // Build name to code map
        nameToCode = {};
        for (const country of Object.values(countries)) {
            nameToCode[country.name.common] = country.cca3;
            if (country.name.official && country.name.official !== country.name.common) {
                nameToCode[country.name.official] = country.cca3;
            }
        }
        // Add common aliases
        nameToCode["United States of America"] = "USA";
        nameToCode["United States"] = "USA";
        nameToCode["US"] = "USA";
        nameToCode["USA"] = "USA";
        nameToCode["China"] = "CHN";
        nameToCode["People's Republic of China"] = "CHN";
        nameToCode["Japan"] = "JPN";
        nameToCode["Germany"] = "DEU";
        nameToCode["United Kingdom"] = "GBR";
        nameToCode["UK"] = "GBR";
        nameToCode["Britain"] = "GBR";
        nameToCode["France"] = "FRA";
        nameToCode["India"] = "IND";
        nameToCode["Italy"] = "ITA";
        nameToCode["Brazil"] = "BRA";
        nameToCode["Canada"] = "CAN";
        nameToCode["Russia"] = "RUS";
        nameToCode["Russian Federation"] = "RUS";
        nameToCode["South Korea"] = "KOR";
        nameToCode["Republic of Korea"] = "KOR";
        nameToCode["Australia"] = "AUS";
        nameToCode["Spain"] = "ESP";
        nameToCode["Mexico"] = "MEX";
        nameToCode["Indonesia"] = "IDN";
        nameToCode["Netherlands"] = "NLD";
        nameToCode["Saudi Arabia"] = "SAU";
        nameToCode["Turkey"] = "TUR";
        nameToCode["Switzerland"] = "CHE";
        nameToCode["Poland"] = "POL";
        nameToCode["Sweden"] = "SWE";
        nameToCode["Thailand"] = "THA";
        nameToCode["Egypt"] = "EGY";
        nameToCode["Nigeria"] = "NGA";
        nameToCode["UAE"] = "ARE";
        nameToCode["United Arab Emirates"] = "ARE";
        nameToCode["Israel"] = "ISR";
        nameToCode["Iran"] = "IRN";
        nameToCode["Islamic Republic of Iran"] = "IRN";
        nameToCode["Pakistan"] = "PAK";
        // Add more if needed
    } catch (error) {
        console.error('Error loading countries data:', error);
        alert('Failed to load countries data. Please check your internet connection.');
        return;
    }

    // Load GeoJSON
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(response => response.json())
        .then(data => {
            geojsonLayer = L.geoJSON(data, {
                style: function(feature) {
                    return {
                        fillColor: 'gray',
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7
                    };
                },
                onEachFeature: function(feature, layer) {
                    const name = feature.properties.name;
                    const code = nameToCode[name];
                    console.log('Feature name:', name, 'Mapped code:', code);
                    const data = countryData[code];
                    const displayName = data ? data.name : name;
                    layer.bindPopup(displayName);
                }
            }).addTo(map);

            // Add legend
            legend = L.control({position: 'bottomright'});
            legend.onAdd = function(map) {
                const div = L.DomUtil.create('div', 'legend');
                div.innerHTML = '<h4>Legend</h4>';
                return div;
            };
            legend.addTo(map);

            // Function to fetch data from World Bank API
            async function fetchWorldBankData(indicator) {
                // Try direct access first, fallback to proxy if needed
                let url = `https://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&per_page=1000&date=2018`;
                let response;
                try {
                    response = await fetch(url);
                } catch (error) {
                    // Fallback to CORS proxy
                    const proxy = 'https://api.allorigins.win/get?url='; // Alternative proxy
                    url = `${proxy}${encodeURIComponent(`https://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&per_page=1000&date=2018`)}`;
                    response = await fetch(url);
                }
                const data = await response.json();
                console.log('Fetched data length:', data[1] ? data[1].length : 0);
                if (!data[1] && data.contents) {
                    // For proxy response
                    const parsed = JSON.parse(data.contents);
                    if (!parsed[1]) return {};
                    const result = {};
                    parsed[1].forEach(item => {
                        if (item.countryiso3code && item.value != null) {
                            result[item.countryiso3code] = item.value;
                        }
                    });
                    console.log('Parsed result keys (proxy):', Object.keys(result).length);
                    return result;
                } else if (data[1]) {
                    const result = {};
                    data[1].forEach(item => {
                        if (item.countryiso3code && item.value != null) {
                            result[item.countryiso3code] = item.value;
                        }
                    });
                    console.log('Parsed result keys (direct):', Object.keys(result).length);
                    return result;
                }
                return {};
            }

            // Now attach the submit handler after everything is loaded
            document.getElementById('submit').addEventListener('click', async function() {
                const promptInput = document.getElementById('prompt');
                const metricSelect = document.getElementById('metricSelect');
                const prompt = metricSelect.value || promptInput.value;
                const metric = parsePrompt(prompt);
                if (!metric) {
                    alert('Sorry, I couldn\'t understand the prompt. Try something like "richest countries", "most populated countries", "largest countries", "happiest countries", etc.');
                    return;
                }

                // Show generating message and disable button
                document.getElementById('status').innerText = 'Generating results...';
                document.getElementById('submit').disabled = true;
                document.getElementById('mesh').style.opacity = '0.3';

                // Delay for 2.5 seconds
                setTimeout(async () => {
                    // Check if we have data for this metric
                    let hasData = false;
                    for (const code in countryData) {
                        if (countryData[code][metric] != null) {
                            hasData = true;
                            break;
                        }
                    }

                    // If no data and it's a World Bank metric, fetch it
                    if (!hasData && indicatorMap[metric]) {
                        document.getElementById('status').innerText = 'Fetching data from World Bank...';
                        const wbData = await fetchWorldBankData(indicatorMap[metric]);
                        console.log('WB data keys:', Object.keys(wbData).length);
                        // Merge into countryData
                        for (const code in wbData) {
                            if (countryData[code]) {
                                countryData[code][metric] = wbData[code];
                            }
                        }
                        hasData = Object.keys(wbData).length > 0;
                    }

                    // Get values for the metric
                    const values = Object.values(countryData).map(d => d[metric]).filter(v => v != null);
                    console.log('Total values for metric:', values.length);
                    if (values.length === 0) {
                        alert(`No data available for ${metric}.`);
                        document.getElementById('status').innerText = '';
                        document.getElementById('submit').disabled = false;
                        document.getElementById('mesh').style.opacity = '0';
                        return;
                    }
                    const min = Math.min(...values);
                    const max = Math.max(...values);

                    // Update map colors
                    console.log('Updating map for', metric, 'with', values.length, 'values');
                    geojsonLayer.eachLayer(function(layer) {
                        console.log('Properties:', layer.feature.properties);
                        const name = layer.feature.properties.name;
                        const code = nameToCode[name];
                        const data = countryData[code];
                        console.log('Processing', code, data ? data.name : 'no data');
                        if (data && data[metric] != null) {
                            const color = getColor(data[metric], metric, min, max);
                            console.log('Setting color', color, 'for', data.name);
                            layer.setStyle({
                                fillColor: color,
                                fillOpacity: 0.7
                            });
                        } else {
                            layer.setStyle({
                                fillColor: 'gray',
                                fillOpacity: 0.7
                            });
                        }
                    });
                    map.invalidateSize();

                    // Update legend
                    const legendDiv = legend.getContainer();
                    legendDiv.innerHTML = `
                        <h4>${metric.replace('_', ' ').toUpperCase()} Legend</h4>
                        <i style="background: rgb(139,0,0)"></i> Low (Red)<br>
                        <i style="background: rgb(255,215,0)"></i> Medium (Gold)<br>
                        <i style="background: rgb(0,128,0)"></i> High (Green)
                    `;

                    // Clear status and enable button
                    document.getElementById('status').innerText = '';
                    document.getElementById('submit').disabled = false;
                    document.getElementById('mesh').style.opacity = '0';
                }, 2500);
            });
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
            alert('Failed to load map data.');
        });
});