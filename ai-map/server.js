const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = Number(process.env.PORT || 8000);

const metricCatalog = [
  { key: "gdp", label: "GDP", indicator: "NY.GDP.MKTP.CD", unit: "usd" },
  { key: "gdp_per_capita", label: "GDP Per Capita", indicator: "NY.GDP.PCAP.CD", unit: "usd" },
  { key: "gdp_growth", label: "GDP Growth", indicator: "NY.GDP.MKTP.KD.ZG", unit: "percent" },
  { key: "population", label: "Population", indicator: "SP.POP.TOTL", unit: "people" },
  { key: "population_growth", label: "Population Growth", indicator: "SP.POP.GROW", unit: "percent" },
  { key: "literacy", label: "Literacy Rate", indicator: "SE.ADT.LITR.ZS", unit: "percent" },
  { key: "life_expectancy", label: "Life Expectancy", indicator: "SP.DYN.LE00.IN", unit: "years" },
  { key: "fertility_rate", label: "Fertility Rate", indicator: "SP.DYN.TFRT.IN", unit: "score" },
  { key: "happiness", label: "Happiness Score", unit: "score" },
  { key: "freedom", label: "Freedom Score", unit: "score" },
  { key: "internet_users", label: "Internet Users", indicator: "IT.NET.USER.ZS", unit: "percent" },
  { key: "broadband_subscriptions", label: "Broadband Subscriptions", indicator: "IT.NET.BBND.P2", unit: "score" },
  { key: "electricity_access", label: "Electricity Access", indicator: "EG.ELC.ACCS.ZS", unit: "percent" },
  { key: "clean_water_access", label: "Access To Clean Water", indicator: "SH.H2O.BASW.ZS", unit: "percent" },
  { key: "sanitation_access", label: "Access To Sanitation", indicator: "SH.STA.BASS.ZS", unit: "percent" },
  { key: "unemployment", label: "Unemployment", indicator: "SL.UEM.TOTL.ZS", unit: "percent", invertScale: true },
  { key: "inflation", label: "Inflation", indicator: "FP.CPI.TOTL.ZG", unit: "percent", invertScale: true },
  { key: "co2_emissions", label: "CO2 Emissions Per Capita", indicator: "EN.ATM.CO2E.PC", unit: "co2", invertScale: true },
  { key: "pm25_pollution", label: "PM2.5 Pollution", indicator: "EN.ATM.PM25.MC.M3", unit: "score", invertScale: true },
  { key: "forest_area", label: "Forest Area", indicator: "AG.LND.FRST.ZS", unit: "percent" },
  { key: "arable_land", label: "Arable Land", indicator: "AG.LND.ARBL.ZS", unit: "percent" },
  { key: "agriculture_value_added", label: "Agriculture Value Added", indicator: "NV.AGR.TOTL.ZS", unit: "percent" },
  { key: "industry_value_added", label: "Industry Value Added", indicator: "NV.IND.TOTL.ZS", unit: "percent" },
  { key: "services_value_added", label: "Services Value Added", indicator: "NV.SRV.TOTL.ZS", unit: "percent" },
  { key: "urban_population", label: "Urban Population", indicator: "SP.URB.TOTL.IN.ZS", unit: "percent" },
  { key: "population_density", label: "Population Density", indicator: "EN.POP.DNST", unit: "score" },
  { key: "renewable_energy", label: "Renewable Energy Use", indicator: "EG.FEC.RNEW.ZS", unit: "percent" },
  { key: "protected_areas", label: "Protected Areas", indicator: "ER.PTD.TOTL.ZS", unit: "percent" },
  { key: "health_expenditure", label: "Health Expenditure", indicator: "SH.XPD.CHEX.GD.ZS", unit: "percent" },
  { key: "physicians", label: "Physicians Per 1,000", indicator: "SH.MED.PHYS.ZS", unit: "score" },
  { key: "hospital_beds", label: "Hospital Beds Per 1,000", indicator: "SH.MED.BEDS.ZS", unit: "score" },
  { key: "maternal_mortality", label: "Maternal Mortality", indicator: "SH.STA.MMRT", unit: "score", invertScale: true },
  { key: "child_mortality", label: "Child Mortality", indicator: "SH.DYN.MORT", unit: "score", invertScale: true },
  { key: "education_expenditure", label: "Education Expenditure", indicator: "SE.XPD.TOTL.GD.ZS", unit: "percent" },
  { key: "school_enrollment_primary", label: "Primary School Enrollment", indicator: "SE.PRM.NENR", unit: "percent" },
  { key: "school_enrollment_secondary", label: "Secondary School Enrollment", indicator: "SE.SEC.NENR", unit: "percent" },
  { key: "elderly_dependency_index", label: "Elderly Dependency Index", indicator: "SP.POP.DPND.OL", unit: "percent" },
  { key: "infant_mortality", label: "Infant Mortality", indicator: "SP.DYN.IMRT.IN", unit: "score", invertScale: true },
  { key: "mobile_subscriptions", label: "Mobile Subscriptions", indicator: "IT.CEL.SETS.P2", unit: "score" },
  { key: "tourism_arrivals", label: "International Tourism Arrivals", indicator: "ST.INT.ARVL", unit: "people" },
  { key: "military_expenditure", label: "Military Expenditure", indicator: "MS.MIL.XPND.GD.ZS", unit: "percent" },
  { key: "research_rnd", label: "Research and Development Spending", indicator: "GB.XPD.RSDV.GD.ZS", unit: "percent" },
  { key: "homicide_rate", label: "Intentional Homicide Rate", indicator: "VC.IHR.PSRC.P5", unit: "score", invertScale: true },
  { key: "water_withdrawal", label: "Freshwater Withdrawal", indicator: "ER.H2O.FWTL.K3", unit: "score" },
  { key: "beef_and_buffalo", label: "Beef and Buffalo Meat Production", indicator: "AG.PRD.LVSK.XD", unit: "score" },
  { key: "trade_balance", label: "Trade Balance", indicator: "NE.RSB.GNFS.CD", unit: "usd" },
  { key: "fdi_inflow", label: "FDI Net Inflow", indicator: "BX.KLT.DINV.CD.WD", unit: "usd" },
  { key: "gini_index", label: "Gini Index", indicator: "SI.POV.GINI", unit: "score", invertScale: true },
  { key: "electricity_rural", label: "Rural Electricity Access", indicator: "EG.ELC.ACCS.RU.ZS", unit: "percent" },
  { key: "electricity_urban", label: "Urban Electricity Access", indicator: "EG.ELC.ACCS.UR.ZS", unit: "percent" },
  { key: "clean_cooking", label: "Clean Cooking Access", indicator: "EG.CFT.ACCS.ZS", unit: "percent" },
  { key: "electricity_use_per_capita", label: "Electric Power Use Per Capita", indicator: "EG.USE.ELEC.KH.PC", unit: "score" },
  { key: "energy_use_per_capita", label: "Energy Use Per Capita", indicator: "EG.USE.PCAP.KG.OE", unit: "score" },
  { key: "renewable_electricity", label: "Renewable Electricity Output", indicator: "EG.ELC.RNEW.ZS", unit: "percent" },
  { key: "fossil_fuel_energy", label: "Fossil Fuel Energy Share", indicator: "EG.USE.COMM.FO.ZS", unit: "percent", invertScale: true },
  { key: "labor_force_participation", label: "Labor Force Participation", indicator: "SL.TLF.CACT.ZS", unit: "percent" },
  { key: "labor_force_participation_female", label: "Female Labor Force Participation", indicator: "SL.TLF.CACT.FE.ZS", unit: "percent" },
  { key: "vulnerable_employment", label: "Vulnerable Employment", indicator: "SL.EMP.VULN.ZS", unit: "percent", invertScale: true },
  { key: "youth_unemployment", label: "Youth Unemployment", indicator: "SL.UEM.1524.ZS", unit: "percent", invertScale: true },
  { key: "primary_completion", label: "Primary Completion Rate", indicator: "SE.PRM.CMPT.ZS", unit: "percent" },
  { key: "teacher_student_ratio_primary", label: "Primary Teacher-Student Ratio", indicator: "SE.PRM.ENRL.TC.ZS", unit: "score" },
  { key: "tertiary_enrollment", label: "Tertiary Enrollment", indicator: "SE.TER.ENRR", unit: "percent" },
  { key: "adolescent_fertility", label: "Adolescent Fertility Rate", indicator: "SP.ADO.TFRT", unit: "score" },
  { key: "contraceptive_prevalence", label: "Contraceptive Prevalence", indicator: "SP.DYN.CONU.ZS", unit: "percent" },
  { key: "birth_rate", label: "Crude Birth Rate", indicator: "SP.DYN.CBRT.IN", unit: "score" },
  { key: "death_rate", label: "Crude Death Rate", indicator: "SP.DYN.CDRT.IN", unit: "score" },
  { key: "life_expectancy_female", label: "Female Life Expectancy", indicator: "SP.DYN.LE00.FE.IN", unit: "years" },
  { key: "life_expectancy_male", label: "Male Life Expectancy", indicator: "SP.DYN.LE00.MA.IN", unit: "years" },
  { key: "infant_mortality_female", label: "Female Infant Mortality", indicator: "SP.DYN.IMRT.FE.IN", unit: "score", invertScale: true },
  { key: "infant_mortality_male", label: "Male Infant Mortality", indicator: "SP.DYN.IMRT.MA.IN", unit: "score", invertScale: true },
  { key: "net_migration", label: "Net Migration", indicator: "SM.POP.NETM", unit: "people" },
  { key: "refugees", label: "Refugee Population", indicator: "SM.POP.REFG", unit: "people" },
  { key: "remittances", label: "Personal Remittances", indicator: "BX.TRF.PWKR.DT.GD.ZS", unit: "percent" },
  { key: "exports_goods_services", label: "Exports Of Goods And Services", indicator: "NE.EXP.GNFS.ZS", unit: "percent" },
  { key: "imports_goods_services", label: "Imports Of Goods And Services", indicator: "NE.IMP.GNFS.ZS", unit: "percent" },
  { key: "manufacturing_value_added", label: "Manufacturing Value Added", indicator: "NV.IND.MANF.ZS", unit: "percent" },
  { key: "tax_revenue", label: "Tax Revenue", indicator: "GC.TAX.TOTL.GD.ZS", unit: "percent" },
  { key: "government_debt", label: "Government Debt", indicator: "GC.DOD.TOTL.GD.ZS", unit: "percent" },
  { key: "high_tech_exports", label: "High-Tech Exports", indicator: "TX.VAL.TECH.CD", unit: "usd" },
  { key: "patents_residents", label: "Patent Applications (Residents)", indicator: "IP.PAT.RESD", unit: "score" },
  { key: "patents_nonresidents", label: "Patent Applications (Nonresidents)", indicator: "IP.PAT.NRES", unit: "score" },
  { key: "patents_total", label: "Patent Applications (Total)", indicator: "IP.PAT.TOTL", unit: "score" },
  { key: "trademarks_total", label: "Trademark Applications", indicator: "IP.TMK.TOTL", unit: "score" },
  { key: "scientific_articles", label: "Scientific Journal Articles", indicator: "IP.JRN.ARTC.SC", unit: "score" },
  { key: "researchers_per_million", label: "Researchers in R&D", indicator: "SP.POP.SCIE.RD.P6", unit: "score" },
  { key: "secure_servers", label: "Secure Internet Servers", indicator: "IT.NET.SECR.P6", unit: "score" },
  { key: "ict_goods_exports", label: "ICT Goods Exports", indicator: "TX.VAL.ICTG.ZS.UN", unit: "percent" },
  { key: "ict_services_exports", label: "ICT Service Exports", indicator: "BX.GSR.CCIS.ZS", unit: "percent" },
  { key: "high_tech_exports_share", label: "High-Tech Exports Share", indicator: "TX.VAL.TECH.MF.ZS", unit: "percent" },
  { key: "manufacturing_exports", label: "Manufacturing Exports", indicator: "TX.VAL.MANF.ZS.UN", unit: "percent" },
  { key: "industry_employment", label: "Industry Employment", indicator: "SL.IND.EMPL.ZS", unit: "percent" },
  { key: "services_employment", label: "Services Employment", indicator: "SL.SRV.EMPL.ZS", unit: "percent" },
  { key: "agriculture_employment", label: "Agriculture Employment", indicator: "SL.AGR.EMPL.ZS", unit: "percent" },
  { key: "energy_intensity", label: "Energy Intensity", indicator: "EG.EGY.PRIM.PP.KD", unit: "score", invertScale: true },
  { key: "electricity_losses", label: "Electric Power Transmission Losses", indicator: "EG.ELC.LOSS.ZS", unit: "percent", invertScale: true },
  { key: "roads_paved", label: "Paved Roads", indicator: "IS.ROD.PAVE.ZS", unit: "percent" },
  { key: "roads_total_km", label: "Road Network Length", indicator: "IS.ROD.TOTL.KM", unit: "score" },
  { key: "rail_lines_km", label: "Rail Lines", indicator: "IS.RRS.TOTL.KM", unit: "score" },
  { key: "air_passengers", label: "Air Transport Passengers", indicator: "IS.AIR.PSGR", unit: "people" },
  { key: "air_freight", label: "Air Transport Freight", indicator: "IS.AIR.GOOD.MT.K1", unit: "score" },
  { key: "container_port_traffic", label: "Container Port Traffic", indicator: "IS.SHP.GOOD.TU", unit: "score" },
  { key: "new_business_density", label: "New Business Density", indicator: "IC.BUS.NDNS.ZS", unit: "score" },
  { key: "time_to_start_business", label: "Time To Start A Business", indicator: "IC.REG.DURS", unit: "score", invertScale: true },
  { key: "domestic_credit_private", label: "Domestic Credit To Private Sector", indicator: "FS.AST.PRVT.GD.ZS", unit: "percent" },
  { key: "broad_money_gdp", label: "Broad Money", indicator: "FM.LBL.BMNY.GD.ZS", unit: "percent" },
  { key: "bank_branches", label: "Commercial Bank Branches", indicator: "FB.CBK.BRCH.P5", unit: "score" },
  { key: "atm_count", label: "ATMs", indicator: "FB.ATM.TOTL.P5", unit: "score" },
  { key: "listed_companies", label: "Listed Domestic Companies", indicator: "CM.MKT.LDOM.NO", unit: "score" },
  { key: "market_capitalization", label: "Market Capitalization", indicator: "CM.MKT.LCAP.GD.ZS", unit: "percent" },
  { key: "stock_turnover", label: "Stock Market Turnover", indicator: "CM.MKT.TRNR", unit: "percent" },
  { key: "nonperforming_loans", label: "Nonperforming Loans", indicator: "FB.AST.NPER.ZS", unit: "percent", invertScale: true },
  { key: "lending_interest_rate", label: "Lending Interest Rate", indicator: "FR.INR.LEND", unit: "percent", invertScale: true },
  { key: "deposit_interest_rate", label: "Deposit Interest Rate", indicator: "FR.INR.DPST", unit: "percent" },
  { key: "real_interest_rate", label: "Real Interest Rate", indicator: "FR.INR.RINR", unit: "percent" },
  { key: "real_exchange_rate", label: "Real Effective Exchange Rate", indicator: "PX.REX.REER", unit: "score" },
  { key: "current_account_balance", label: "Current Account Balance", indicator: "BN.CAB.XOKA.GD.ZS", unit: "percent" },
  { key: "external_debt_stock", label: "External Debt Stock", indicator: "DT.DOD.DECT.CD", unit: "usd" },
  { key: "debt_service", label: "Debt Service", indicator: "DT.TDS.DECT.EX.ZS", unit: "percent", invertScale: true },
  { key: "reserves_months", label: "Reserves in Months of Imports", indicator: "FI.RES.TOTL.MO", unit: "score" },
  { key: "remittances_usd", label: "Personal Remittances (USD)", indicator: "BX.TRF.PWKR.CD.DT", unit: "usd" },
  { key: "cash_surplus_deficit", label: "Cash Surplus/Deficit", indicator: "GC.BAL.CASH.GD.ZS", unit: "percent" },
  { key: "school_life_expectancy", label: "School Life Expectancy", indicator: "SE.SCH.LIFE", unit: "years" },
  { key: "pupil_teacher_secondary", label: "Secondary Teacher-Student Ratio", indicator: "SE.SEC.ENRL.TC.ZS", unit: "score" },
  { key: "education_spend_government", label: "Government Education Spending", indicator: "SE.XPD.TOTL.GB.ZS", unit: "percent" },
  { key: "adult_literacy_female", label: "Adult Literacy (Female)", indicator: "SE.ADT.LITR.FE.ZS", unit: "percent" },
  { key: "adult_literacy_male", label: "Adult Literacy (Male)", indicator: "SE.ADT.LITR.MA.ZS", unit: "percent" },
  { key: "primary_completion_female", label: "Primary Completion (Female)", indicator: "SE.PRM.CMPT.FE.ZS", unit: "percent" },
  { key: "primary_completion_male", label: "Primary Completion (Male)", indicator: "SE.PRM.CMPT.MA.ZS", unit: "percent" },
  { key: "lower_secondary_completion", label: "Lower Secondary Completion", indicator: "SE.SEC.CMPT.LO.ZS", unit: "percent" },
  { key: "upper_secondary_completion", label: "Upper Secondary Completion", indicator: "SE.SEC.CMPT.HI.ZS", unit: "percent" },
  { key: "out_of_school_primary", label: "Out of School (Primary)", indicator: "SE.PRM.UNER", unit: "score", invertScale: true },
  { key: "trained_teachers_primary", label: "Trained Teachers (Primary)", indicator: "SE.PRM.TCAQ.ZS", unit: "percent" },
  { key: "immunization_dpt", label: "Immunization DPT", indicator: "SH.IMM.IDPT", unit: "percent" },
  { key: "immunization_measles", label: "Immunization Measles", indicator: "SH.IMM.MEAS", unit: "percent" },
  { key: "hiv_prevalence", label: "HIV Prevalence", indicator: "SH.DYN.AIDS.ZS", unit: "percent", invertScale: true },
  { key: "tuberculosis_incidence", label: "Tuberculosis Incidence", indicator: "SH.TBS.INCD", unit: "score", invertScale: true },
  { key: "diabetes_prevalence", label: "Diabetes Prevalence", indicator: "SH.STA.DIAB.ZS", unit: "percent", invertScale: true },
  { key: "obesity_prevalence", label: "Obesity Prevalence", indicator: "SH.STA.OB18.ZS", unit: "percent", invertScale: true },
  { key: "anemia_pregnant", label: "Anemia in Pregnancy", indicator: "SH.PRG.ANEM", unit: "percent", invertScale: true },
  { key: "undernourishment", label: "Undernourishment", indicator: "SN.ITK.DEFC.ZS", unit: "percent", invertScale: true },
  { key: "stunting_prevalence", label: "Stunting Prevalence", indicator: "SH.STA.STNT.ZS", unit: "percent", invertScale: true },
  { key: "wasting_prevalence", label: "Wasting Prevalence", indicator: "SH.STA.WAST.ZS", unit: "percent", invertScale: true },
  { key: "co2_total", label: "CO2 Emissions Total", indicator: "EN.ATM.CO2E.KT", unit: "score", invertScale: true },
  { key: "methane_emissions", label: "Methane Emissions", indicator: "EN.ATM.METH.KT.CE", unit: "score", invertScale: true },
  { key: "nitrous_oxide_emissions", label: "Nitrous Oxide Emissions", indicator: "EN.ATM.NOXE.KT.CE", unit: "score", invertScale: true },
  { key: "electricity_coal", label: "Electricity from Coal", indicator: "EG.ELC.COAL.ZS", unit: "percent", invertScale: true },
  { key: "electricity_gas", label: "Electricity from Gas", indicator: "EG.ELC.NGAS.ZS", unit: "percent" },
  { key: "electricity_oil", label: "Electricity from Oil", indicator: "EG.ELC.PETR.ZS", unit: "percent", invertScale: true },
  { key: "electricity_nuclear", label: "Electricity from Nuclear", indicator: "EG.ELC.NUCL.ZS", unit: "percent" },
  { key: "electricity_hydro", label: "Electricity from Hydro", indicator: "EG.ELC.HYRO.ZS", unit: "percent" },
  { key: "electricity_renewables_nonhydro", label: "Electricity from Non-Hydro Renewables", indicator: "EG.ELC.RNWX.ZS", unit: "percent" },
  { key: "energy_imports", label: "Energy Imports", indicator: "EG.IMP.CONS.ZS", unit: "percent", invertScale: true },
  { key: "ozone_emissions", label: "Ozone-Depleting Emissions", indicator: "EN.ATM.ODP.KT.CE", unit: "score", invertScale: true },
  { key: "threatened_species", label: "Threatened Species", indicator: "EN.HPT.THRD.NO", unit: "score", invertScale: true },
  { key: "most_cats", label: "Most Cats (Fun)", playful: true, unit: "score" },
  { key: "most_dogs", label: "Most Dogs (Fun)", playful: true, unit: "people" },
  { key: "pet_friendliness", label: "Pet Friendliness (Fun)", playful: true, unit: "score" },
  { key: "funniest_people", label: "Funniest People (Fun)", playful: true, unit: "score" },
  { key: "best_dancers", label: "Best Dancers (Fun)", playful: true, unit: "score" }
];

const aiProxyCatalog = [
  { key: "ai_water_access", label: "Water Access (AI Proxy)", unit: "percent" },
  { key: "ai_water_scarcity", label: "Water Scarcity (AI Proxy)", unit: "score" },
  { key: "ai_water_balloons", label: "Water Balloon Suitability (AI Proxy)", unit: "score" },
  { key: "ai_beef_consumption", label: "Beef Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_meat_consumption", label: "Meat Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_fish_consumption", label: "Fish Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_rice_consumption", label: "Rice Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_wheat_consumption", label: "Wheat Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_maize_consumption", label: "Maize Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_coffee_consumption", label: "Coffee Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_tea_consumption", label: "Tea Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_sugar_consumption", label: "Sugar Consumption Intensity (AI Proxy)", unit: "score" },
  { key: "ai_banana_production", label: "Banana Production (AI Proxy)", unit: "people" },
  { key: "ai_cocoa_production", label: "Cocoa Production (AI Proxy)", unit: "score" },
  { key: "ai_oil_production", label: "Oil Production (AI Proxy)", unit: "score" },
  { key: "ai_gas_production", label: "Gas Production (AI Proxy)", unit: "score" },
  { key: "ai_coal_production", label: "Coal Production (AI Proxy)", unit: "score" },
  { key: "ai_gold_output", label: "Gold Output (AI Proxy)", unit: "score" },
  { key: "ai_copper_output", label: "Copper Output (AI Proxy)", unit: "score" },
  { key: "ai_steel_output", label: "Steel Output (AI Proxy)", unit: "score" },
  { key: "ai_forest_cover", label: "Forest Cover (AI Proxy)", unit: "percent" },
  { key: "ai_glacier_risk", label: "Glacier Risk (AI Proxy)", unit: "score" },
  { key: "ai_drought_risk", label: "Drought Risk (AI Proxy)", unit: "score" },
  { key: "ai_flood_risk", label: "Flood Risk (AI Proxy)", unit: "score" },
  { key: "ai_air_quality", label: "Air Quality (AI Proxy)", unit: "score" },
  { key: "ai_road_quality", label: "Road Quality (AI Proxy)", unit: "score" },
  { key: "ai_rail_connectivity", label: "Rail Connectivity (AI Proxy)", unit: "score" },
  { key: "ai_airport_connectivity", label: "Airport Connectivity (AI Proxy)", unit: "score" },
  { key: "ai_shipping_connectivity", label: "Shipping Connectivity (AI Proxy)", unit: "score" },
  { key: "ai_podcasts", label: "Podcast Listening (AI Proxy)", unit: "score" },
  { key: "ai_social_media", label: "Social Media Usage (AI Proxy)", unit: "score" },
  { key: "ai_streaming_usage", label: "Streaming Usage (AI Proxy)", unit: "score" },
  { key: "ai_golfers", label: "Estimated Number of Golfers (AI Proxy)", unit: "people" },
  { key: "ai_golf_participation", label: "Golf Participation Intensity (AI Proxy)", unit: "score" },
  { key: "ai_cycling", label: "Cycling Popularity (AI Proxy)", unit: "score" },
  { key: "ai_running", label: "Running Popularity (AI Proxy)", unit: "score" },
  { key: "ai_football", label: "Football Popularity (AI Proxy)", unit: "score" },
  { key: "ai_basketball", label: "Basketball Popularity (AI Proxy)", unit: "score" },
  { key: "ai_baseball", label: "Baseball Popularity (AI Proxy)", unit: "score" },
  { key: "ai_music_streaming", label: "Music Streaming (AI Proxy)", unit: "score" },
  { key: "ai_book_reading", label: "Book Reading Intensity (AI Proxy)", unit: "score" },
  { key: "ai_patents", label: "Patent Activity (AI Proxy)", unit: "score" },
  { key: "ai_students", label: "Student Population (AI Proxy)", unit: "people" },
  { key: "ai_teachers", label: "Teacher Workforce (AI Proxy)", unit: "people" },
  { key: "ai_nurses", label: "Nurse Workforce (AI Proxy)", unit: "people" },
  { key: "ai_doctors", label: "Doctor Workforce (AI Proxy)", unit: "people" },
  { key: "ai_hospital_capacity", label: "Hospital Capacity (AI Proxy)", unit: "score" },
  { key: "ai_female_participation", label: "Female Labor Participation (AI Proxy)", unit: "percent" },
  { key: "ai_male_participation", label: "Male Labor Participation (AI Proxy)", unit: "percent" },
  { key: "ai_births", label: "Birth Count (AI Proxy)", unit: "people" },
  { key: "ai_deaths", label: "Death Count (AI Proxy)", unit: "people" },
  { key: "ai_migration", label: "Net Migration (AI Proxy)", unit: "people" },
  { key: "ai_refugees", label: "Refugee Pressure (AI Proxy)", unit: "people" },
  { key: "ai_remittances", label: "Remittances (AI Proxy)", unit: "usd" },
  { key: "ai_exports", label: "Exports Intensity (AI Proxy)", unit: "score" },
  { key: "ai_imports", label: "Imports Intensity (AI Proxy)", unit: "score" },
  { key: "ai_food_insecurity", label: "Food Insecurity (AI Proxy)", unit: "score" },
  { key: "ai_health_access", label: "Health Access (AI Proxy)", unit: "score" },
  { key: "ai_school_access", label: "School Access (AI Proxy)", unit: "score" },
  { key: "ai_city_life", label: "City Life Intensity (AI Proxy)", unit: "score" },
  { key: "ai_rural_life", label: "Rural Life Intensity (AI Proxy)", unit: "score" },
  { key: "ai_red_meat", label: "Red Meat Consumption (AI Proxy)", unit: "score" },
  { key: "ai_quantum_research", label: "Quantum Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_semiconductor_fabrication", label: "Semiconductor Fabrication Capacity (AI Proxy)", unit: "score" },
  { key: "ai_chip_design", label: "Chip Design Activity (AI Proxy)", unit: "score" },
  { key: "ai_robotics_density", label: "Robotics Density (AI Proxy)", unit: "score" },
  { key: "ai_automation_adoption", label: "Automation Adoption (AI Proxy)", unit: "score" },
  { key: "ai_industrial_robotics", label: "Industrial Robotics Adoption (AI Proxy)", unit: "score" },
  { key: "ai_3d_printing", label: "3D Printing Adoption (AI Proxy)", unit: "score" },
  { key: "ai_civil_engineering", label: "Civil Engineering Capacity (AI Proxy)", unit: "score" },
  { key: "ai_mechanical_engineering", label: "Mechanical Engineering Capacity (AI Proxy)", unit: "score" },
  { key: "ai_electrical_engineering", label: "Electrical Engineering Capacity (AI Proxy)", unit: "score" },
  { key: "ai_software_engineering", label: "Software Engineering Capacity (AI Proxy)", unit: "score" },
  { key: "ai_materials_science", label: "Materials Science Strength (AI Proxy)", unit: "score" },
  { key: "ai_nanotechnology", label: "Nanotechnology Activity (AI Proxy)", unit: "score" },
  { key: "ai_aerospace_engineering", label: "Aerospace Engineering Activity (AI Proxy)", unit: "score" },
  { key: "ai_power_grid_quality", label: "Power Grid Quality (AI Proxy)", unit: "score" },
  { key: "ai_renewable_engineering", label: "Renewable Engineering Strength (AI Proxy)", unit: "score" },
  { key: "ai_data_center_capacity", label: "Data Center Capacity (AI Proxy)", unit: "score" },
  { key: "ai_cloud_adoption", label: "Cloud Adoption (AI Proxy)", unit: "score" },
  { key: "ai_cybersecurity", label: "Cybersecurity Maturity (AI Proxy)", unit: "score" },
  { key: "ai_fintech_adoption", label: "Fintech Adoption (AI Proxy)", unit: "score" },
  { key: "ai_quant_trading", label: "Quant Trading Activity (AI Proxy)", unit: "score" },
  { key: "ai_venture_capital", label: "Venture Capital Activity (AI Proxy)", unit: "score" },
  { key: "ai_private_equity", label: "Private Equity Activity (AI Proxy)", unit: "score" },
  { key: "ai_credit_depth", label: "Credit Market Depth (AI Proxy)", unit: "score" },
  { key: "ai_banking_depth", label: "Banking System Depth (AI Proxy)", unit: "score" },
  { key: "ai_insurance_penetration", label: "Insurance Penetration (AI Proxy)", unit: "score" },
  { key: "ai_blockchain_activity", label: "Blockchain Activity (AI Proxy)", unit: "score" },
  { key: "ai_capital_market_maturity", label: "Capital Market Maturity (AI Proxy)", unit: "score" },
  { key: "ai_financial_inclusion", label: "Financial Inclusion (AI Proxy)", unit: "score" },
  { key: "ai_trade_finance_access", label: "Trade Finance Access (AI Proxy)", unit: "score" },
  { key: "ai_startup_ecosystem", label: "Startup Ecosystem Strength (AI Proxy)", unit: "score" },
  { key: "ai_stem_education", label: "STEM Education Strength (AI Proxy)", unit: "score" },
  { key: "ai_math_education", label: "Math Education Strength (AI Proxy)", unit: "score" },
  { key: "ai_physics_education", label: "Physics Education Strength (AI Proxy)", unit: "score" },
  { key: "ai_engineering_education", label: "Engineering Education Strength (AI Proxy)", unit: "score" },
  { key: "ai_medical_education", label: "Medical Education Strength (AI Proxy)", unit: "score" },
  { key: "ai_statistics_strength", label: "Statistics Strength (AI Proxy)", unit: "score" },
  { key: "ai_applied_math", label: "Applied Math Capacity (AI Proxy)", unit: "score" },
  { key: "ai_mathematical_finance", label: "Mathematical Finance Strength (AI Proxy)", unit: "score" },
  { key: "ai_actuarial_strength", label: "Actuarial Strength (AI Proxy)", unit: "score" },
  { key: "ai_olympiad_math", label: "Math Olympiad Strength (AI Proxy)", unit: "score" },
  { key: "ai_ai_research", label: "AI Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_science_funding", label: "Science Funding Strength (AI Proxy)", unit: "score" },
  { key: "ai_lab_infrastructure", label: "Laboratory Infrastructure (AI Proxy)", unit: "score" },
  { key: "ai_research_collaboration", label: "Research Collaboration (AI Proxy)", unit: "score" },
  { key: "ai_supercomputing", label: "Supercomputing Capacity (AI Proxy)", unit: "score" },
  { key: "ai_physics_research", label: "Physics Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_particle_physics", label: "Particle Physics Activity (AI Proxy)", unit: "score" },
  { key: "ai_astrophysics", label: "Astrophysics Activity (AI Proxy)", unit: "score" },
  { key: "ai_nuclear_physics", label: "Nuclear Physics Activity (AI Proxy)", unit: "score" },
  { key: "ai_optics_photonics", label: "Optics and Photonics Activity (AI Proxy)", unit: "score" },
  { key: "ai_space_launch", label: "Space Launch Activity (AI Proxy)", unit: "score" },
  { key: "ai_satellite_density", label: "Satellite Program Intensity (AI Proxy)", unit: "score" },
  { key: "ai_climate_modeling", label: "Climate Modeling Capacity (AI Proxy)", unit: "score" },
  { key: "ai_seismology", label: "Seismology Readiness (AI Proxy)", unit: "score" },
  { key: "ai_hydrology", label: "Hydrology Modeling Capacity (AI Proxy)", unit: "score" },
  { key: "ai_oceanography", label: "Oceanography Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_biotech", label: "Biotechnology Activity (AI Proxy)", unit: "score" },
  { key: "ai_genomics", label: "Genomics Capacity (AI Proxy)", unit: "score" },
  { key: "ai_proteomics", label: "Proteomics Capacity (AI Proxy)", unit: "score" },
  { key: "ai_bioinformatics", label: "Bioinformatics Capacity (AI Proxy)", unit: "score" },
  { key: "ai_neuroscience", label: "Neuroscience Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_immunology", label: "Immunology Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_cancer_research", label: "Cancer Research Activity (AI Proxy)", unit: "score" },
  { key: "ai_pharma_innovation", label: "Pharmaceutical Innovation (AI Proxy)", unit: "score" },
  { key: "ai_clinical_trials", label: "Clinical Trials Activity (AI Proxy)", unit: "score" },
  { key: "ai_medical_devices", label: "Medical Devices Innovation (AI Proxy)", unit: "score" },
  { key: "ai_telemedicine", label: "Telemedicine Adoption (AI Proxy)", unit: "score" },
  { key: "ai_medical_ai", label: "Medical AI Adoption (AI Proxy)", unit: "score" },
  { key: "ai_public_health", label: "Public Health Capacity (AI Proxy)", unit: "score" },
  { key: "ai_epidemiology", label: "Epidemiology Readiness (AI Proxy)", unit: "score" },
  { key: "ai_hospital_research", label: "Hospital Research Capacity (AI Proxy)", unit: "score" },
  { key: "ai_supply_chain", label: "Supply Chain Resilience (AI Proxy)", unit: "score" },
  { key: "ai_logistics_automation", label: "Logistics Automation (AI Proxy)", unit: "score" }
];

const aiProxyInferenceRules = [
  { key: "ai_water_access", re: /\bwater\b.*(access|clean|safe|drink|drinkable|tap|potable)/ },
  { key: "ai_water_scarcity", re: /\bwater\b.*(scarcity|stress|drought|withdrawal|depletion|shortage|use|usage)/ },
  { key: "ai_water_balloons", re: /water\s*balloon/ },
  { key: "ai_beef_consumption", re: /beef|red\s*meat|meat\s*consumption/ },
  { key: "ai_meat_consumption", re: /meat\s*consumption|protein\s*diet/ },
  { key: "ai_fish_consumption", re: /fish|seafood/ },
  { key: "ai_rice_consumption", re: /rice/ },
  { key: "ai_wheat_consumption", re: /wheat|bread/ },
  { key: "ai_maize_consumption", re: /maize|corn/ },
  { key: "ai_coffee_consumption", re: /coffee/ },
  { key: "ai_tea_consumption", re: /tea/ },
  { key: "ai_sugar_consumption", re: /sugar|sweetener/ },
  { key: "ai_banana_production", re: /banana|bananas/ },
  { key: "ai_cocoa_production", re: /cocoa|chocolate/ },
  { key: "ai_oil_production", re: /oil\s*production|crude\s*oil|petroleum/ },
  { key: "ai_gas_production", re: /natural\s*gas|gas\s*production/ },
  { key: "ai_coal_production", re: /coal/ },
  { key: "ai_gold_output", re: /gold/ },
  { key: "ai_copper_output", re: /copper/ },
  { key: "ai_steel_output", re: /steel/ },
  { key: "ai_forest_cover", re: /forest|tree|deforestation/ },
  { key: "ai_glacier_risk", re: /glacier|ice\s*sheet|snowpack/ },
  { key: "ai_drought_risk", re: /drought|arid|dry\s*spell/ },
  { key: "ai_flood_risk", re: /flood|inundation|storm\s*surge/ },
  { key: "ai_air_quality", re: /air\s*quality|smog|pollution|pm2\.?5/ },
  { key: "ai_road_quality", re: /road|highway|roadway/ },
  { key: "ai_rail_connectivity", re: /rail|train|railway/ },
  { key: "ai_airport_connectivity", re: /airport|aviation|flight/ },
  { key: "ai_shipping_connectivity", re: /shipping|\bport\b|maritime|harbor/ },
  { key: "ai_podcasts", re: /podcast/ },
  { key: "ai_social_media", re: /social\s*media|instagram|tiktok|facebook|twitter|x\b/ },
  { key: "ai_streaming_usage", re: /streaming|netflix|spotify|hulu/ },
  { key: "ai_golfers", re: /golf|golfers|golfer/ },
  { key: "ai_golf_participation", re: /golf\s*participation/ },
  { key: "ai_cycling", re: /cycling|bike|bicycle/ },
  { key: "ai_running", re: /running|jogging|marathon/ },
  { key: "ai_football", re: /football|soccer/ },
  { key: "ai_basketball", re: /basketball/ },
  { key: "ai_baseball", re: /baseball/ },
  { key: "ai_music_streaming", re: /music|music\s*streaming/ },
  { key: "ai_book_reading", re: /book|reading|reader/ },
  { key: "ai_patents", re: /patent|innovation|invent/ },
  { key: "ai_students", re: /student|students|school\s*age/ },
  { key: "ai_teachers", re: /teacher|teachers/ },
  { key: "ai_nurses", re: /nurse|nurses/ },
  { key: "ai_doctors", re: /doctor|doctors|physician|physicians/ },
  { key: "ai_hospital_capacity", re: /hospital|beds|capacity|clinic/ },
  { key: "ai_female_participation", re: /female\s*labor|women\s*work|women\s*workforce/ },
  { key: "ai_male_participation", re: /male\s*labor|men\s*workforce/ },
  { key: "ai_births", re: /births|newborn|birth\s*count/ },
  { key: "ai_deaths", re: /deaths|death\s*count/ },
  { key: "ai_migration", re: /migration|migrant|migrants/ },
  { key: "ai_refugees", re: /refugee|refugees/ },
  { key: "ai_remittances", re: /remittance|remittances/ },
  { key: "ai_exports", re: /export|exports/ },
  { key: "ai_imports", re: /import|imports/ },
  { key: "ai_food_insecurity", re: /food\s*insecurity|hunger|malnutrition/ },
  { key: "ai_health_access", re: /health\s*access|care\s*access|medical\s*access/ },
  { key: "ai_school_access", re: /school\s*access|education\s*access/ },
  { key: "ai_city_life", re: /city\s*life|urban\s*living|metro\s*life/ },
  { key: "ai_rural_life", re: /rural\s*life|countryside|village\s*life/ },
  { key: "ai_red_meat", re: /red\s*meat|beef|lamb|pork/ }
];

const additionalData = {
  USA: { happiness: 6.9, freedom: 0.92 },
  CHN: { happiness: 5.1, freedom: 0.55 },
  IND: { happiness: 3.8, freedom: 0.63 },
  DEU: { happiness: 7.0, freedom: 0.93 },
  GBR: { happiness: 6.8, freedom: 0.91 },
  FRA: { happiness: 6.7, freedom: 0.89 },
  JPN: { happiness: 5.9, freedom: 0.89 },
  BRA: { happiness: 6.4, freedom: 0.75 },
  CAN: { happiness: 7.1, freedom: 0.96 },
  AUS: { happiness: 7.2, freedom: 0.95 }
};

const promptAliases = {
  richest: "gdp",
  wealthiest: "gdp",
  economy: "gdp",
  income: "gdp_per_capita",
  growth: "gdp_growth",
  inflation: "inflation",
  populated: "population",
  density: "population_density",
  literacy: "literacy",
  educated: "literacy",
  school: "school_enrollment_secondary",
  enrollment: "school_enrollment_secondary",
  longevity: "life_expectancy",
  fertility: "fertility_rate",
  happiest: "happiness",
  freedom: "freedom",
  internet: "internet_users",
  broadband: "broadband_subscriptions",
  electricity: "electricity_access",
  rural: "electricity_rural",
  urban_electricity: "electricity_urban",
  cooking: "clean_cooking",
  clean_cooking: "clean_cooking",
  water: "clean_water_access",
  sanitation: "sanitation_access",
  unemployment: "unemployment",
  jobs: "unemployment",
  labor: "labor_force_participation",
  women_work: "labor_force_participation_female",
  participation: "labor_force_participation",
  youth_unemployment: "youth_unemployment",
  completion: "primary_completion",
  tertiary: "tertiary_enrollment",
  teachers: "teacher_student_ratio_primary",
  carbon: "co2_emissions",
  pollution: "pm25_pollution",
  pm25: "pm25_pollution",
  forest: "forest_area",
  arable: "arable_land",
  agriculture: "agriculture_value_added",
  industry: "industry_value_added",
  services: "services_value_added",
  urban: "urban_population",
  renewable: "renewable_energy",
  conservation: "protected_areas",
  protected: "protected_areas",
  health: "health_expenditure",
  fertility_rate: "fertility_rate",
  adolescent: "adolescent_fertility",
  contraception: "contraceptive_prevalence",
  birth: "birth_rate",
  death: "death_rate",
  doctors: "physicians",
  physician: "physicians",
  hospital: "hospital_beds",
  maternal: "maternal_mortality",
  child: "child_mortality",
  education: "education_expenditure",
  elderly: "elderly_dependency_index",
  aging: "elderly_dependency_index",
  ageing: "elderly_dependency_index",
  dependency: "elderly_dependency_index",
  retired: "elderly_dependency_index",
  retirement: "elderly_dependency_index",
  mortality: "infant_mortality",
  mobile: "mobile_subscriptions",
  tourism: "tourism_arrivals",
  tourists: "tourism_arrivals",
  military: "military_expenditure",
  migration: "net_migration",
  refugee: "refugees",
  refugees: "refugees",
  remittance: "remittances",
  remittances: "remittances",
  export: "exports_goods_services",
  exports: "exports_goods_services",
  import: "imports_goods_services",
  imports: "imports_goods_services",
  manufacturing: "manufacturing_value_added",
  debt: "government_debt",
  tech: "high_tech_exports",
  patent: "patents_total",
  patents: "patents_total",
  trademark: "trademarks_total",
  researcher: "researchers_per_million",
  researchers: "researchers_per_million",
  finance: "domestic_credit_private",
  banking: "domestic_credit_private",
  stock: "market_capitalization",
  market: "market_capitalization",
  medicine: "health_expenditure",
  homicide: "homicide_rate",
  crime: "homicide_rate",
  beef: "beef_and_buffalo",
  cattle: "beef_and_buffalo",
  withdrawal: "water_withdrawal",
  trade: "trade_balance",
  fdi: "fdi_inflow",
  gini: "gini_index",
  cat: "most_cats",
  cats: "most_cats",
  dog: "most_dogs",
  dogs: "most_dogs",
  pet: "pet_friendliness",
  pets: "pet_friendliness",
  funny: "funniest_people",
  dance: "best_dancers"
};

const metricCache = new Map();
const dynamicMetricCatalog = new Map();
let aiSignalBundleCache = { exp: 0, data: null };
let countryNameByCode = {};
let countryMetaByCode = {};
let countryAliasToCode = {};
let countryAliasEntries = [];
let openRouterClientPromise = null;

const indicatorCatalog = {
  population: "SP.POP.TOTL",
  gdp_per_capita: "NY.GDP.PCAP.CD",
  gdp_growth: "NY.GDP.MKTP.KD.ZG",
  life_expectancy: "SP.DYN.LE00.IN",
  internet_users: "IT.NET.USER.ZS",
  clean_water_access: "SH.H2O.BASW.ZS",
  sanitation_access: "SH.STA.BASS.ZS",
  unemployment: "SL.UEM.TOTL.ZS",
  inflation: "FP.CPI.TOTL.ZG",
  forest_area: "AG.LND.FRST.ZS",
  agriculture_value_added: "NV.AGR.TOTL.ZS",
  urban_population: "SP.URB.TOTL.IN.ZS",
  services_value_added: "NV.SRV.TOTL.ZS",
  tourism_arrivals: "ST.INT.ARVL",
  research_rnd: "GB.XPD.RSDV.GD.ZS",
  high_tech_exports: "TX.VAL.TECH.CD",
  school_enrollment_secondary: "SE.SEC.NENR",
  tertiary_enrollment: "SE.TER.ENRR",
  physicians: "SH.MED.PHYS.ZS",
  hospital_beds: "SH.MED.BEDS.ZS",
  education_expenditure: "SE.XPD.TOTL.GD.ZS",
  manufacturing_value_added: "NV.IND.MANF.ZS",
  market_capitalization: "CM.MKT.LCAP.GD.ZS",
  domestic_credit_private: "FS.AST.PRVT.GD.ZS",
  co2_emissions: "EN.ATM.CO2E.PC",
  energy_use_per_capita: "EG.USE.PCAP.KG.OE",
  labor_force_participation: "SL.TLF.CACT.ZS",
  pm25_pollution: "EN.ATM.PM25.MC.M3",
  renewable_energy: "EG.FEC.RNEW.ZS",
  population_growth: "SP.POP.GROW",
  elderly_dependency_index: "SP.POP.DPND.OL"
};

const metricCatalogByKey = new Map(metricCatalog.map((metric) => [metric.key, metric]));
const aiProxyCatalogByKey = new Map(aiProxyCatalog.map((metric) => [metric.key, metric]));
const metricCatalogNeedles = metricCatalog.map((metric) => ({
  key: metric.key,
  keyPhrase: metric.key.replaceAll("_", " "),
  labelLower: metric.label.toLowerCase()
}));
const aiProxyCatalogNeedles = aiProxyCatalog.map((metric) => ({
  key: metric.key,
  keyPhrase: metric.key.replace(/^ai_/, "").replaceAll("_", " "),
  labelLower: metric.label.toLowerCase().replace(/\s*\(ai proxy\)\s*/g, " ").trim()
}));

function sanitizeInput(value) {
  return String(value || "")
    .replace(/[<>`]/g, "")
    .trim()
    .slice(0, 220);
}

function parseMetricFromQuery(query) {
  const normalized = sanitizeInput(query).toLowerCase();
  if (!normalized) return null;

  const exactKey = metricCatalogByKey.get(normalized);
  if (exactKey) return exactKey.key;

  for (const needle of metricCatalogNeedles) {
    if (normalized.includes(needle.keyPhrase) || normalized.includes(needle.labelLower)) {
      return needle.key;
    }
  }

  for (const token of normalized.split(/\s+/)) {
    if (promptAliases[token]) return promptAliases[token];
  }

  return null;
}

function normalizeRegionKey(rawRegion) {
  const key = String(rawRegion || "").toLowerCase().trim().replace(/\s+/g, "_");
  const supported = new Set([
    "africa",
    "north_africa",
    "sub_saharan_africa",
    "asia",
    "europe",
    "north_america",
    "south_america",
    "latin_america",
    "oceania",
    "middle_east",
    "global",
    "world"
  ]);
  return supported.has(key) ? key : null;
}

function parseRegionFromQuery(query) {
  const normalized = sanitizeInput(query).toLowerCase();
  if (!normalized) return null;

  if (/(sub\s*-?\s*saharan|subsaharan)/.test(normalized)) return "sub_saharan_africa";
  if (/(north\s+africa|northern\s+africa)/.test(normalized)) return "north_africa";
  if (/(latin\s+america|central\s+america|caribbean)/.test(normalized)) return "latin_america";
  if (/(north\s+america)/.test(normalized)) return "north_america";
  if (/(south\s+america)/.test(normalized)) return "south_america";
  if (/(middle\s+east)/.test(normalized)) return "middle_east";
  if (/(africa|african)/.test(normalized)) return "africa";
  if (/(europe|european)/.test(normalized)) return "europe";
  if (/(asia|asian)/.test(normalized)) return "asia";
  if (/(oceania|pacific)/.test(normalized)) return "oceania";
  if (/(world|global|worldwide)/.test(normalized)) return "global";
  return null;
}

function formatRegionLabel(regionKey) {
  const labels = {
    africa: "Africa",
    north_africa: "North Africa",
    sub_saharan_africa: "Sub-Saharan Africa",
    asia: "Asia",
    europe: "Europe",
    north_america: "North America",
    south_america: "South America",
    latin_america: "Latin America",
    oceania: "Oceania",
    middle_east: "Middle East",
    global: "Global",
    world: "Global"
  };
  return labels[regionKey] || null;
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseCountryCodesParam(raw) {
  const parts = String(raw || "")
    .split(",")
    .map((x) => x.trim().toUpperCase())
    .filter((x) => /^[A-Z]{3}$/.test(x));
  return Array.from(new Set(parts));
}

function extractCountryFocusCodes(query) {
  const normalized = sanitizeInput(query).toLowerCase();
  if (!normalized || !countryAliasEntries.length) return [];

  const matches = [];
  for (const entry of countryAliasEntries) {
    const pattern = new RegExp(`(^|[^a-z])${escapeRegExp(entry.alias)}([^a-z]|$)`, "i");
    if (pattern.test(normalized) && !matches.includes(entry.code)) {
      matches.push(entry.code);
    }
  }

  if (matches.length > 12) return [];
  return matches;
}

function getMetricByKey(key) {
  if (!key) return null;
  return metricCatalogByKey.get(key) || dynamicMetricCatalog.get(key) || null;
}

function toMetricSlug(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s_-]/g, " ")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

function registerDynamicMetric(metric) {
  if (!metric || !metric.key) return null;
  if (!dynamicMetricCatalog.has(metric.key) && dynamicMetricCatalog.size > 1200) {
    const firstKey = dynamicMetricCatalog.keys().next().value;
    if (firstKey) dynamicMetricCatalog.delete(firstKey);
  }
  dynamicMetricCatalog.set(metric.key, metric);
  return metric;
}

function getAiProxyMetricByKey(key) {
  if (!key) return null;
  return aiProxyCatalogByKey.get(key) || null;
}

function inferAiProxyMetricFromQuery(query) {
  const normalized = sanitizeInput(query).toLowerCase();
  if (!normalized) return null;

  for (const needle of aiProxyCatalogNeedles) {
    const keyPhraseWordCount = needle.keyPhrase.split(/\s+/).filter(Boolean).length;
    const canUseKeyPhrase = keyPhraseWordCount >= 2;
    if (normalized.includes(needle.labelLower) || (canUseKeyPhrase && normalized.includes(needle.keyPhrase))) {
      const metric = getAiProxyMetricByKey(needle.key);
      if (!metric) continue;
      return registerDynamicMetric({ ...metric, aiProxy: true, playful: false });
    }
  }

  for (const rule of aiProxyInferenceRules) {
    if (rule.re.test(normalized)) {
      const metric = getAiProxyMetricByKey(rule.key);
      return registerDynamicMetric({
        key: rule.key,
        label: (metric && metric.label) || toTitleCase(rule.key.replace(/^ai_/, "")),
        unit: (metric && metric.unit) || "score",
        aiProxy: true,
        playful: false
      });
    }
  }

  return null;
}

function toTitleCase(slug) {
  return String(slug || "")
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function inferMetricFromQueryForAIGeneration(query) {
  const normalized = sanitizeInput(query).toLowerCase();
  const technicalAIIntent = /(quantum|semiconductor|chip\s*design|robotics|automation|3d\s*printing|aerospace|nanotech|materials\s*science|fintech|blockchain|cybersecurity|mathematical\s*finance|actuarial|applied\s*math|bioinformatics|genomics|proteomics|immunology|neuroscience|clinical\s*trials|medical\s*ai|telemedicine|particle\s*physics|astrophysics|nuclear\s*physics|photonics|space\s*launch|climate\s*modeling|seismology|hydrology)/.test(normalized);

  if (/black|african\s*descent|afro/.test(normalized) && /(people|population|count|number|most|share|percent|percentage|rate)/.test(normalized)) {
    const wantsShare = /(share|percent|percentage|rate)/.test(normalized);
    return registerDynamicMetric({
      key: wantsShare ? "ai_black_share" : "ai_black_population",
      label: wantsShare ? "Black Population Share (AI Estimate)" : "Black Population (AI Estimate)",
      unit: wantsShare ? "percent" : "people",
      playful: false
    });
  }

  if (/water\s*balloon/.test(normalized)) {
    return registerDynamicMetric({
      key: "ai_water_balloons",
      label: "Water Balloon Suitability (AI Proxy)",
      unit: "score",
      playful: false
    });
  }

  if (technicalAIIntent) {
    const priorityProxy = inferAiProxyMetricFromQuery(normalized);
    if (priorityProxy) return priorityProxy;
  }

  const known = parseMetricFromQuery(normalized);
  if (known) {
    return getMetricByKey(known);
  }

  const aiProxy = inferAiProxyMetricFromQuery(normalized);
  if (aiProxy) return aiProxy;

  if (/\bwater\b/.test(normalized) && /(access|drink|clean|safe|tap|potable)/.test(normalized)) {
    return getMetricByKey("clean_water_access");
  }

  if (/\bwater\b/.test(normalized) && /(scarcity|stress|withdrawal|use|usage|depletion)/.test(normalized)) {
    return getMetricByKey("water_withdrawal");
  }

  if (/beef|cattle|steak|meat\s*consumption/.test(normalized)) {
    return registerDynamicMetric({
      key: "ai_beef_consumption",
      label: "Beef Consumption Intensity (AI Proxy)",
      unit: "score",
      playful: false
    });
  }

  if (/golf|golfers|golfer/.test(normalized)) {
    const wantsCount = /(people|population|count|number|most)/.test(normalized);
    return registerDynamicMetric({
      key: wantsCount ? "ai_golfers" : "ai_golf_participation",
      label: wantsCount ? "Estimated Number of Golfers (AI Proxy)" : "Golf Participation Intensity (AI Proxy)",
      unit: wantsCount ? "people" : "score",
      playful: false
    });
  }

  const cleaned = normalized
    .replace(/\b(in|for|of|across|among|by|the|a|an|and|to|with|on|at|from)\b/g, " ")
    .replace(/\b(africa|asia|europe|oceania|america|global|world|worldwide|north|south|middle|east|latin)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const tokens = cleaned.split(" ").filter(Boolean);
  const intentToken = tokens.find((t) => t.length > 2 && !/^(most|least|top|best|worst|countries|country)$/.test(t)) || "interest";
  const base = toMetricSlug(intentToken) || "interest";

  const unit = /(percent|percentage|rate|share)/.test(normalized)
    ? "percent"
    : /(how many|count|number|most|fewest|population|amount|people|persons)/.test(normalized)
      ? "people"
      : "score";

  const key = `ai_${base}`;
  const labelCore = toTitleCase(base) || "Custom";
  const label = unit === "people"
    ? `${labelCore} Estimated Count (AI Proxy)`
    : unit === "percent"
      ? `${labelCore} Estimated Share (AI Proxy)`
      : `${labelCore} Intensity (AI Proxy)`;

  return registerDynamicMetric({
    key,
    label,
    unit,
    playful: false
  });
}

function isRealCountryCode(countryCode) {
  return Boolean(countryNameByCode[countryCode]);
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateSillyValue(countryCode, metricKey) {
  let seed = 0;
  const combined = `${countryCode}:${metricKey}`;
  for (let i = 0; i < combined.length; i += 1) {
    seed += combined.charCodeAt(i) * (i + 1);
  }
  return Math.floor(seededRandom(seed) * 101);
}

function formatMetricValue(value, unit) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "No data";
  if (unit === "usd") return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  if (unit === "percent") return `${n.toFixed(2)}%`;
  if (unit === "years") return `${n.toFixed(1)} yrs`;
  if (unit === "co2") return `${n.toFixed(2)} t/capita`;
  if (unit === "people") return n.toLocaleString();
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

async function loadCountryMap() {
  if (Object.keys(countryNameByCode).length) return;
  const res = await fetch("https://raw.githubusercontent.com/mledoze/countries/master/countries.json");
  const countries = await res.json();

  const aliasMap = {};

  countries.forEach((c) => {
    countryNameByCode[c.cca3] = c.name.common;
    countryMetaByCode[c.cca3] = {
      region: String(c.region || "").toLowerCase(),
      subregion: String(c.subregion || "").toLowerCase(),
      population: Number(c.population || 0)
    };

    aliasMap[String(c.name.common || "").toLowerCase()] = c.cca3;
    if (c.name && c.name.official) {
      aliasMap[String(c.name.official || "").toLowerCase()] = c.cca3;
    }
  });

  // Common aliases for user phrasing.
  aliasMap["us"] = "USA";
  aliasMap["u.s."] = "USA";
  aliasMap["usa"] = "USA";
  aliasMap["united states"] = "USA";
  aliasMap["uk"] = "GBR";
  aliasMap["britain"] = "GBR";
  aliasMap["south korea"] = "KOR";
  aliasMap["north korea"] = "PRK";
  aliasMap["dr congo"] = "COD";
  aliasMap["congo drc"] = "COD";

  countryAliasToCode = aliasMap;
  countryAliasEntries = Object.entries(aliasMap)
    .map(([alias, code]) => ({ alias, code }))
    .sort((a, b) => b.alias.length - a.alias.length);
}

function countryMatchesRegion(countryCode, regionKey) {
  if (!regionKey || regionKey === "global" || regionKey === "world") return true;
  const meta = countryMetaByCode[countryCode];
  if (!meta) return false;
  const region = meta.region;
  const subregion = meta.subregion;

  if (regionKey === "africa") return region === "africa";
  if (regionKey === "north_africa") return subregion.includes("northern africa");
  if (regionKey === "sub_saharan_africa") return subregion.includes("sub-saharan");
  if (regionKey === "europe") return region === "europe";
  if (regionKey === "asia") return region === "asia";
  if (regionKey === "oceania") return region === "oceania";
  if (regionKey === "north_america") return region === "americas" && (subregion.includes("north america") || subregion.includes("northern america"));
  if (regionKey === "south_america") return region === "americas" && subregion.includes("south america");
  if (regionKey === "latin_america") return region === "americas" && (subregion.includes("south america") || subregion.includes("central america") || subregion.includes("caribbean"));
  if (regionKey === "middle_east") return subregion.includes("western asia");
  return true;
}

async function fetchIndicatorData(metricOrKey, indicatorOverride) {
  const metricKey = typeof metricOrKey === "string" ? metricOrKey : metricOrKey.key;
  const indicator = indicatorOverride || (typeof metricOrKey === "string" ? indicatorCatalog[metricOrKey] : metricOrKey.indicator);
  if (!indicator) return {};

  const cacheKey = `indicator:${metricKey}:${indicator}`;
  const cacheEntry = metricCache.get(cacheKey);
  if (cacheEntry && cacheEntry.exp > Date.now()) return cacheEntry.data;

  const url = `https://api.worldbank.org/v2/country/all/indicator/${indicator}?format=json&per_page=25000&date=2010:2024`;
  const res = await fetch(url);
  const contentType = String(res.headers.get("content-type") || "").toLowerCase();
  const bodyText = await res.text();
  if (!res.ok || !contentType.includes("application/json")) {
    metricCache.set(cacheKey, { exp: Date.now() + 1000 * 60 * 5, data: {} });
    return {};
  }

  let json;
  try {
    json = JSON.parse(bodyText);
  } catch (_error) {
    metricCache.set(cacheKey, { exp: Date.now() + 1000 * 60 * 5, data: {} });
    return {};
  }
  const records = Array.isArray(json) ? json[1] : [];
  const latestByCountry = {};

  if (Array.isArray(records)) {
    records.forEach((item) => {
      if (item.countryiso3code && item.value != null) {
        const code = item.countryiso3code;
        const year = Number(item.date || 0);
        const value = Number(item.value);
        if (!Number.isFinite(value)) return;

        const previous = latestByCountry[code];
        if (!previous || year > previous.year) {
          latestByCountry[code] = { year, value };
        }
      }
    });
  }

  const values = {};
  Object.entries(latestByCountry).forEach(([code, entry]) => {
    values[code] = entry.value;
  });

  metricCache.set(cacheKey, { exp: Date.now() + 1000 * 60 * 20, data: values });
  return values;
}

function normalizeValueMap(values, useLog = false) {
  const numericValues = Object.values(values).filter((v) => Number.isFinite(Number(v)));
  if (!numericValues.length) return {};

  const min = Math.min(...numericValues);
  const max = Math.max(...numericValues);
  if (max === min) {
    const neutral = {};
    Object.keys(values).forEach((code) => {
      neutral[code] = 0.5;
    });
    return neutral;
  }

  const normalized = {};
  Object.entries(values).forEach(([code, raw]) => {
    const value = Number(raw);
    if (!Number.isFinite(value)) return;
    let ratio;
    if (useLog && min > 0 && max > 0 && value > 0) {
      ratio = (Math.log(value) - Math.log(min)) / (Math.log(max) - Math.log(min));
    } else {
      ratio = (value - min) / (max - min);
    }
    normalized[code] = Math.max(0, Math.min(1, ratio));
  });
  return normalized;
}

async function getCachedAISignalBundle() {
  if (aiSignalBundleCache.data && aiSignalBundleCache.exp > Date.now()) {
    return aiSignalBundleCache.data;
  }

  const [populationTotals, lifeExpectancy, gdpPerCapita, internetUsers, unemployment, populationGrowth, cleanWaterAccess, sanitationAccess, agricultureShare, forestArea, urbanPopulation, servicesShare, tourismArrivals, inflation, pm25Pollution, renewableEnergy, researchRnD, secondaryEnrollment, tertiaryEnrollment, physicians, hospitalBeds, educationSpend, manufacturingShare, marketCap, domesticCredit, co2PerCapita, energyUsePerCapita, laborParticipation] = await Promise.all([
    fetchIndicatorData("population", indicatorCatalog.population),
    fetchIndicatorData("life_expectancy", indicatorCatalog.life_expectancy),
    fetchIndicatorData("gdp_per_capita", indicatorCatalog.gdp_per_capita),
    fetchIndicatorData("internet_users", indicatorCatalog.internet_users),
    fetchIndicatorData("unemployment", indicatorCatalog.unemployment),
    fetchIndicatorData("population_growth", indicatorCatalog.population_growth),
    fetchIndicatorData("clean_water_access", indicatorCatalog.clean_water_access),
    fetchIndicatorData("sanitation_access", indicatorCatalog.sanitation_access),
    fetchIndicatorData("agriculture_value_added", indicatorCatalog.agriculture_value_added),
    fetchIndicatorData("forest_area", indicatorCatalog.forest_area),
    fetchIndicatorData("urban_population", indicatorCatalog.urban_population),
    fetchIndicatorData("services_value_added", indicatorCatalog.services_value_added),
    fetchIndicatorData("tourism_arrivals", indicatorCatalog.tourism_arrivals),
    fetchIndicatorData("inflation", indicatorCatalog.inflation),
    fetchIndicatorData("pm25_pollution", indicatorCatalog.pm25_pollution),
    fetchIndicatorData("renewable_energy", indicatorCatalog.renewable_energy),
    fetchIndicatorData("research_rnd", indicatorCatalog.research_rnd),
    fetchIndicatorData("school_enrollment_secondary", indicatorCatalog.school_enrollment_secondary),
    fetchIndicatorData("tertiary_enrollment", indicatorCatalog.tertiary_enrollment),
    fetchIndicatorData("physicians", indicatorCatalog.physicians),
    fetchIndicatorData("hospital_beds", indicatorCatalog.hospital_beds),
    fetchIndicatorData("education_expenditure", indicatorCatalog.education_expenditure),
    fetchIndicatorData("manufacturing_value_added", indicatorCatalog.manufacturing_value_added),
    fetchIndicatorData("market_capitalization", indicatorCatalog.market_capitalization),
    fetchIndicatorData("domestic_credit_private", indicatorCatalog.domestic_credit_private),
    fetchIndicatorData("co2_emissions", indicatorCatalog.co2_emissions),
    fetchIndicatorData("energy_use_per_capita", indicatorCatalog.energy_use_per_capita),
    fetchIndicatorData("labor_force_participation", indicatorCatalog.labor_force_participation)
  ]);

  const bundle = {
    populationTotals,
    nLife: normalizeValueMap(lifeExpectancy, false),
    nGdp: normalizeValueMap(gdpPerCapita, true),
    nInternet: normalizeValueMap(internetUsers, false),
    nUnemployment: normalizeValueMap(unemployment, false),
    nGrowth: normalizeValueMap(populationGrowth, false),
    nWater: normalizeValueMap(cleanWaterAccess, false),
    nSanitation: normalizeValueMap(sanitationAccess, false),
    nAgriculture: normalizeValueMap(agricultureShare, false),
    nForest: normalizeValueMap(forestArea, false),
    nUrban: normalizeValueMap(urbanPopulation, false),
    nServices: normalizeValueMap(servicesShare, false),
    nTourism: normalizeValueMap(tourismArrivals, true),
    nInflation: normalizeValueMap(inflation, false),
    nPollution: normalizeValueMap(pm25Pollution, false),
    nRenewable: normalizeValueMap(renewableEnergy, false),
    nRND: normalizeValueMap(researchRnD, false),
    nSecondaryEdu: normalizeValueMap(secondaryEnrollment, false),
    nTertiaryEdu: normalizeValueMap(tertiaryEnrollment, false),
    nPhysicians: normalizeValueMap(physicians, false),
    nHospitalBeds: normalizeValueMap(hospitalBeds, false),
    nEducationSpend: normalizeValueMap(educationSpend, false),
    nManufacturing: normalizeValueMap(manufacturingShare, false),
    nMarketCap: normalizeValueMap(marketCap, true),
    nDomesticCredit: normalizeValueMap(domesticCredit, false),
    nCo2: normalizeValueMap(co2PerCapita, false),
    nEnergyUse: normalizeValueMap(energyUsePerCapita, true),
    nLaborParticipation: normalizeValueMap(laborParticipation, false)
  };

  aiSignalBundleCache = { exp: Date.now() + 1000 * 60 * 20, data: bundle };
  return bundle;
}

function buildSignalWeightsFromQuery(query) {
  const text = sanitizeInput(query).toLowerCase();
  const score = {
    gdp: 0.2,
    life: 0.2,
    internet: 0.2,
    unemployment: 0.15,
    growth: 0.1,
    water: 0.15,
    sanitation: 0.1,
    agriculture: 0.08,
    forest: 0.06,
    urban: 0.08,
    services: 0.08,
    tourism: 0.06,
    inflation: 0.06,
    pollution: 0.06,
    renewable: 0.06,
    rnd: 0.06,
    stem: 0.08,
    finance: 0.08,
    medicine: 0.08,
    engineering: 0.08,
    physics: 0.08,
    industry: 0.08,
    market: 0.08
  };

  const boosts = [
    { re: /wealth|rich|income|gdp|economic|money/, key: "gdp", weight: 0.7 },
    { re: /health|hospital|doctor|medical|disease|care/, key: "life", weight: 0.6 },
    { re: /internet|digital|online|tech|connect/, key: "internet", weight: 0.7 },
    { re: /job|employment|unemployment|labor/, key: "unemployment", weight: 0.65 },
    { re: /youth|young|birth|fertility|aging|ageing|elder/, key: "growth", weight: 0.5 },
    { re: /water|drought|hydration|rain|river/, key: "water", weight: 0.75 },
    { re: /sanitation|toilet|hygiene|sewer/, key: "sanitation", weight: 0.65 },
    { re: /food|farm|agri|beef|cattle|livestock/, key: "agriculture", weight: 0.7 },
    { re: /forest|biodiversity|nature|wildlife/, key: "forest", weight: 0.55 },
    { re: /city|urban|metro|infrastructure/, key: "urban", weight: 0.5 },
    { re: /tourism|tourist|travel|visitor/, key: "tourism", weight: 0.55 },
    { re: /service|finance|banking|commerce/, key: "services", weight: 0.5 },
    { re: /inflation|price|cost|afford/, key: "inflation", weight: 0.65 },
    { re: /pollution|pm2.5|air\s*quality|smog|co2/, key: "pollution", weight: 0.7 },
    { re: /renewable|solar|wind|green\s*energy|clean\s*energy/, key: "renewable", weight: 0.6 },
    { re: /research|innovation|science|r&d/, key: "rnd", weight: 0.6 },
    { re: /math|mathematics|statistics|algebra|calculus|probability/, key: "stem", weight: 0.8 },
    { re: /engineering|engineer|mechanical|electrical|civil|robotics|semiconductor|chip/, key: "engineering", weight: 0.9 },
    { re: /biology|biotech|genomics|bioinformatics|immunology|neuroscience/, key: "medicine", weight: 0.85 },
    { re: /medicine|medical|clinical|hospital|doctor|nurse|pharma/, key: "medicine", weight: 0.9 },
    { re: /physics|quantum|particle|nuclear|photonics|astrophysics|space/, key: "physics", weight: 0.9 },
    { re: /finance|bank|credit|capital\s*market|stock|equity|fintech|insurance/, key: "finance", weight: 0.9 },
    { re: /manufacturing|factory|industrial|supply\s*chain|automation/, key: "industry", weight: 0.8 },
    { re: /market\s*cap|listed\s*companies|venture\s*capital|private\s*equity|trading/, key: "market", weight: 0.8 }
  ];

  boosts.forEach((item) => {
    if (item.re.test(text)) {
      score[item.key] += item.weight;
    }
  });

  const total = Object.values(score).reduce((sum, value) => sum + value, 0) || 1;
  const normalized = {};
  Object.keys(score).forEach((key) => {
    normalized[key] = score[key] / total;
  });
  return normalized;
}

function inferSemanticProfile(query, metric) {
  const text = sanitizeInput(query || metric.label).toLowerCase();
  if (/elder|aging|ageing|old\s*age|retire|dependency/.test(text) || metric.key === "elderly_dependency_index") {
    return { kind: "elderly_dependency", unit: "percent", min: 8, max: 80 };
  }
  if (/youth|young|student|birth|fertility/.test(text)) {
    return { kind: "youth_index", unit: "percent", min: 5, max: 70 };
  }
  if ((/black|african\s*descent|afro/.test(text) && /(share|percent|percentage|rate)/.test(text)) || /black_share/.test(String(metric.key || ""))) {
    return { kind: "black_share", unit: "percent", min: 0, max: 100 };
  }
  if ((/black|african\s*descent|afro/.test(text) && /(people|population|count|number|most)/.test(text)) || /black_population/.test(String(metric.key || "")) || /^ai_black$/.test(String(metric.key || ""))) {
    return { kind: "black_population", unit: "people", min: 0, max: 0 };
  }
  if (/water\s*balloon/.test(text) || /ai_water_balloon/.test(String(metric.key || ""))) {
    return { kind: "water_balloon", unit: "score", min: 1, max: 100 };
  }
  if (/beef|cattle|steak|meat\s*consumption/.test(text) || /ai_beef_consumption/.test(String(metric.key || ""))) {
    return { kind: "beef_consumption", unit: "score", min: 1, max: 100 };
  }
  if (/golf|golfers|golfer/.test(text) || /ai_golf/.test(String(metric.key || ""))) {
    if (metric.unit === "people") {
      return { kind: "golfers_count", unit: "people", min: 0, max: 0 };
    }
    return { kind: "golf_participation", unit: "score", min: 1, max: 100 };
  }
  if (/\bwater\b|hydration|drought|sanitation/.test(text)) {
    return { kind: "water_security", unit: metric.unit === "percent" ? "percent" : "score", min: 1, max: 100 };
  }
  if (/dog|dogs|cat|cats|pet|pets|animal/.test(text)) {
    return { kind: "pet_population", unit: metric.unit === "people" ? "people" : "score", min: 1, max: 100 };
  }
  if (metric.unit === "percent") return { kind: "generic_percent", unit: "percent", min: 5, max: 98 };
  if (metric.unit === "people") return { kind: "generic_count", unit: "people", min: 10000, max: 150000000 };
  if (metric.unit === "years") return { kind: "generic_years", unit: "years", min: 45, max: 90 };
  return { kind: "generic_score", unit: "score", min: 1, max: 100 };
}

function clamp01(value) {
  return Math.max(0, Math.min(1, Number(value)));
}

function computeSignalDrivers(weights, limit = 5) {
  if (!weights || typeof weights !== "object") return [];
  return Object.entries(weights)
    .filter(([, value]) => Number.isFinite(value) && value > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, value]) => ({ key, weight: Number(value.toFixed(4)) }));
}

function computeAIConfidence({ query, metric, weights, rowsCount, totalCountries }) {
  const text = sanitizeInput(query).toLowerCase();
  const tokenCount = text.split(/\s+/).filter(Boolean).length;
  const isKnownProxy = Boolean(metric && String(metric.key || "").startsWith("ai_") && getAiProxyMetricByKey(metric.key));
  const hasStructuredIntent = /\b(in|for|across|among|share|rate|density|research|adoption|capacity|quality|risk)\b/.test(text);
  const coverage = totalCountries > 0 ? Math.min(1, rowsCount / totalCountries) : 0;

  const sortedWeights = Object.values(weights || {}).filter((v) => Number.isFinite(v)).sort((a, b) => b - a);
  const concentration = sortedWeights.length ? sortedWeights[0] : 0;

  const score = clamp01(
    (isKnownProxy ? 0.32 : 0.2) +
    (hasStructuredIntent ? 0.2 : 0.08) +
    Math.min(0.18, tokenCount * 0.015) +
    Math.min(0.18, concentration * 0.8) +
    Math.min(0.12, coverage * 0.12)
  );

  const band = score >= 0.78 ? "high" : score >= 0.58 ? "medium" : "low";
  return {
    score: Number(score.toFixed(3)),
    band,
    knownProxyMetric: isKnownProxy,
    coverage: Number(coverage.toFixed(3))
  };
}

function baseBlackShareForCountry(meta) {
  const region = String(meta && meta.region ? meta.region : "").toLowerCase();
  const subregion = String(meta && meta.subregion ? meta.subregion : "").toLowerCase();

  if (region === "africa") {
    if (subregion.includes("northern africa")) return 0.18;
    return 0.86;
  }
  if (region === "americas") {
    if (subregion.includes("caribbean")) return 0.62;
    if (subregion.includes("south america")) return 0.18;
    if (subregion.includes("central america")) return 0.12;
    return 0.13;
  }
  if (region === "europe") return 0.03;
  if (region === "asia") return 0.01;
  if (region === "oceania") return 0.02;
  return 0.03;
}

const blackShareOverrides = {
  NGA: 0.88,
  ETH: 0.80,
  COD: 0.86,
  TZA: 0.85,
  KEN: 0.80,
  UGA: 0.86,
  ZAF: 0.81,
  SDN: 0.78,
  GHA: 0.88,
  SEN: 0.85,
  USA: 0.13,
  BRA: 0.10,
  COL: 0.09,
  CUB: 0.33,
  HTI: 0.95,
  DOM: 0.16,
  FRA: 0.04,
  GBR: 0.04
};

function estimatedBlackShareForCountry(code, meta, life, gdp, jitter) {
  const base = Number.isFinite(blackShareOverrides[code])
    ? blackShareOverrides[code]
    : baseBlackShareForCountry(meta);
  const adjusted = base + (life - 0.5) * 0.025 + (gdp - 0.5) * -0.02 + jitter * 0.35;
  return clamp01(adjusted);
}

function buildObservedLead(query, metric, topRows, regionLabel = null) {
  if (!topRows || !topRows.length) {
    return `Observed data for "${query}" is limited, so conclusions are tentative.`;
  }
  const scope = regionLabel ? ` in ${regionLabel}` : " globally";
  const top = topRows.slice(0, 3);
  const topText = top.map((row) => `${row.country} (${formatMetricValue(row.value, metric.unit)})`).join(", ");
  return `Observed ${metric.label}${scope}, the current top countries are ${topText}.`;
}

async function buildCompositeMetric(metricKey) {
  const [gdpPerCapita, lifeExpectancy, internetUsers, unemployment] = await Promise.all([
    fetchIndicatorData("gdp_per_capita", indicatorCatalog.gdp_per_capita),
    fetchIndicatorData("life_expectancy", indicatorCatalog.life_expectancy),
    fetchIndicatorData("internet_users", indicatorCatalog.internet_users),
    fetchIndicatorData("unemployment", indicatorCatalog.unemployment)
  ]);

  const nGdp = normalizeValueMap(gdpPerCapita, true);
  const nLife = normalizeValueMap(lifeExpectancy, false);
  const nInternet = normalizeValueMap(internetUsers, false);
  const nUnemployment = normalizeValueMap(unemployment, false);

  const scores = {};
  Object.keys(countryNameByCode).forEach((code) => {
    if (metricKey === "happiness") {
      const components = [];
      if (Number.isFinite(nGdp[code])) components.push({ value: nGdp[code], weight: 0.45 });
      if (Number.isFinite(nLife[code])) components.push({ value: nLife[code], weight: 0.35 });
      if (Number.isFinite(nInternet[code])) components.push({ value: nInternet[code], weight: 0.2 });
      if (!components.length) return;

      const weightTotal = components.reduce((sum, c) => sum + c.weight, 0);
      const weighted = components.reduce((sum, c) => sum + c.value * c.weight, 0) / weightTotal;
      scores[code] = 2 + weighted * 6;
      return;
    }

    if (metricKey === "freedom") {
      const components = [];
      if (Number.isFinite(nInternet[code])) components.push({ value: nInternet[code], weight: 0.5 });
      if (Number.isFinite(nGdp[code])) components.push({ value: nGdp[code], weight: 0.35 });
      if (Number.isFinite(nUnemployment[code])) components.push({ value: 1 - nUnemployment[code], weight: 0.15 });
      if (!components.length) return;

      const weightTotal = components.reduce((sum, c) => sum + c.weight, 0);
      const weighted = components.reduce((sum, c) => sum + c.value * c.weight, 0) / weightTotal;
      scores[code] = 0.2 + weighted * 0.8;
    }
  });

  return scores;
}

async function getMetricDataset(metricKey, regionKey = null, focusCountryCodes = []) {
  await loadCountryMap();
  const metric = getMetricByKey(metricKey);
  if (!metric) {
    return { metric: null, rows: [] };
  }

  let values = {};
  if (metric.playful) {
    Object.keys(countryNameByCode).forEach((code) => {
      values[code] = generateSillyValue(code, metricKey);
    });
  } else if (metricKey === "happiness" || metricKey === "freedom") {
    values = await buildCompositeMetric(metricKey);
  } else if (metric.indicator) {
    values = await fetchIndicatorData(metric);
  }

  Object.entries(additionalData).forEach(([code, map]) => {
    if (map[metricKey] != null) {
      values[code] = Number(map[metricKey]);
    }
  });

  const rows = Object.entries(values)
    .filter(([countryCode, value]) => isRealCountryCode(countryCode) && Number.isFinite(Number(value)))
    .filter(([countryCode]) => countryMatchesRegion(countryCode, regionKey))
    .filter(([countryCode]) => !focusCountryCodes.length || focusCountryCodes.includes(countryCode))
    .map(([countryCode, value]) => ({
      countryCode,
      country: countryNameByCode[countryCode],
      value: Number(value)
    }));

  rows.sort((a, b) => b.value - a.value);

  return {
    metric,
    rows,
    region: regionKey,
    regionLabel: formatRegionLabel(regionKey),
    focusCountryCodes
  };
}

function buildFallbackExplanation(query, metric, topRows, regionLabel = null) {
  const scopeText = regionLabel ? ` in ${regionLabel}` : " globally";
  const top = topRows[0];
  const second = topRows[1];
  const bottom = topRows[topRows.length - 1];

  if (!top) {
    return `For "${query}", the metric ${metric.label}${scopeText} has limited data in the selected scope, so interpretation is constrained.`;
  }

  const topText = `${top.country} (${formatMetricValue(top.value, metric.unit)})`;
  const secondText = second ? `${second.country} (${formatMetricValue(second.value, metric.unit)})` : null;
  const bottomText = bottom ? `${bottom.country} (${formatMetricValue(bottom.value, metric.unit)})` : null;

  let spreadSentence = "";
  if (bottom && Number.isFinite(top.value) && Number.isFinite(bottom.value) && top.value !== 0) {
    const ratio = Math.abs(top.value / (bottom.value || 1));
    if (Number.isFinite(ratio) && ratio > 1.2) {
      spreadSentence = ` The gap between top and bottom observations is large (about ${ratio.toFixed(1)}x), suggesting meaningful structural differences across the scope.`;
    }
  }

  return `For "${query}", ${metric.label}${scopeText} is led by ${topText}${secondText ? `, followed by ${secondText}` : ""}${bottomText ? `, while lower values include ${bottomText}` : ""}. This pattern is often associated with a mix of income levels, infrastructure maturity, affordability, and policy environment.${spreadSentence} Use caution when comparing countries directly because reporting years and methodologies can differ.`;
}

async function getOpenRouterClient() {
  if (!process.env.OPENROUTER_API_KEY) return null;
  if (!openRouterClientPromise) {
    openRouterClientPromise = import("@openrouter/sdk")
      .then((module) => {
        const OpenRouter = module && module.OpenRouter;
        if (!OpenRouter) {
          throw new Error("OpenRouter export not found");
        }
        return new OpenRouter({
          apiKey: process.env.OPENROUTER_API_KEY
        });
      })
      .catch((error) => {
        console.error("Failed to initialize OpenRouter SDK", error);
        openRouterClientPromise = null;
        return null;
      });
  }
  return openRouterClientPromise;
}

async function generateAIExplanation(query, metric, topRows, regionLabel = null, focusCountryCodes = []) {
  const model = process.env.OPENROUTER_MODEL || "openrouter/free";
  const apiKey = process.env.OPENROUTER_API_KEY;
  const regionHint = regionLabel ? `Region scope: ${regionLabel}` : "Region scope: Global";
  const scopeHint = focusCountryCodes.length
    ? `Country focus: ${focusCountryCodes.join(", ")}`
    : "Country focus: none";

  if (!apiKey) {
    return {
      text: buildFallbackExplanation(query, metric, topRows, regionLabel),
      source: "fallback",
      reason: "missing_api_key",
      model
    };
  }

  try {
    const openrouter = await getOpenRouterClient();
    if (!openrouter) {
      return {
        text: buildFallbackExplanation(query, metric, topRows, regionLabel),
        source: "fallback",
        reason: "sdk_unavailable",
        model
      };
    }

    const stream = await openrouter.chat.send({
      chatGenerationParams: {
        model,
        messages: [
          {
            role: "system",
            content: "You are GeoInsight AI. Return a detailed explanation in 4-6 sentences about causal factors only. Do NOT invent countries; only refer to countries provided in the input list. Keep scope strict to the provided region/countries. End with one caveat about data freshness/measurement differences."
          },
          {
            role: "user",
            content: `Query: ${query}\nMetric: ${metric.label}\n${regionHint}\n${scopeHint}\nTop countries: ${topRows.slice(0, 10).map((r) => `${r.country} (${r.value})`).join(", ")}`
          }
        ],
        stream: true
      }
    });

    let text = "";
    let reasoningTokens = null;
    for await (const chunk of stream) {
      const content = chunk && chunk.choices && chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content;
      if (content) {
        text += content;
      }
      if (chunk && chunk.usage && chunk.usage.reasoningTokens != null) {
        reasoningTokens = chunk.usage.reasoningTokens;
      }
    }

    if (text) {
      const observedLead = buildObservedLead(query, metric, topRows, regionLabel);
      return {
        text: `${observedLead}\n\n${text.trim()}`,
        source: "ai",
        reason: null,
        model,
        usage: {
          reasoningTokens
        }
      };
    }

    return {
      text: buildFallbackExplanation(query, metric, topRows, regionLabel),
      source: "fallback",
      reason: "empty_ai_response",
      model
    };
  } catch (error) {
    const status = error && (error.status || error.statusCode || (error.response && error.response.status));
    const code = error && error.code;
    const message = String(error && error.message ? error.message : error || "");
    const match = message.match(/\b(4\d\d|5\d\d)\b/);
    const reason = status
      ? `openrouter_${status}`
      : code
        ? `openrouter_${String(code).toLowerCase()}`
        : match
          ? `openrouter_${match[1]}`
          : "request_failed";
    console.error("AI explanation failed, using fallback", error);
    return {
      text: buildFallbackExplanation(query, metric, topRows, regionLabel),
      source: "fallback",
      reason,
      model
    };
  }
}

async function generateAICountryData(metricKey, regionKey = null, focusCountryCodes = [], rawQuery = "") {
  await loadCountryMap();
  const metric = getMetricByKey(metricKey) || getAiProxyMetricByKey(metricKey);
  if (!metric) {
    return { metric: null, rows: [] };
  }

  // If the metric is backed by a real indicator, prefer real data for realistic ranges/rankings.
  if (metric.indicator && !String(metric.key).startsWith("ai_")) {
    const realValues = await fetchIndicatorData(metric);
    const rows = Object.entries(realValues)
      .filter(([countryCode, value]) => isRealCountryCode(countryCode) && Number.isFinite(Number(value)))
      .filter(([countryCode]) => countryMatchesRegion(countryCode, regionKey))
      .filter(([countryCode]) => !focusCountryCodes.length || focusCountryCodes.includes(countryCode))
      .map(([countryCode, value]) => ({
        countryCode,
        country: countryNameByCode[countryCode],
        value: Number(value)
      }));

    rows.sort((a, b) => b.value - a.value);

    return {
      metric,
      rows,
      region: regionKey,
      regionLabel: formatRegionLabel(regionKey),
      focusCountryCodes,
      aiMeta: null
    };
  }

  if (metricKey === "happiness" || metricKey === "freedom") {
    const values = await buildCompositeMetric(metricKey);
    const rows = Object.entries(values)
      .filter(([countryCode, value]) => isRealCountryCode(countryCode) && Number.isFinite(Number(value)))
      .filter(([countryCode]) => countryMatchesRegion(countryCode, regionKey))
      .filter(([countryCode]) => !focusCountryCodes.length || focusCountryCodes.includes(countryCode))
      .map(([countryCode, value]) => ({
        countryCode,
        country: countryNameByCode[countryCode],
        value: Number(value)
      }));

    rows.sort((a, b) => b.value - a.value);
    return {
      metric,
      rows,
      region: regionKey,
      regionLabel: formatRegionLabel(regionKey),
      focusCountryCodes,
      aiMeta: null
    };
  }

  const semanticProfile = inferSemanticProfile(rawQuery, metric);
  const querySignalWeights = buildSignalWeightsFromQuery(rawQuery || metric.label);
  const signalBundle = await getCachedAISignalBundle();
  const {
    populationTotals,
    nLife,
    nGdp,
    nInternet,
    nUnemployment,
    nGrowth,
    nWater,
    nSanitation,
    nAgriculture,
    nForest,
    nUrban,
    nServices,
    nTourism,
    nInflation,
    nPollution,
    nRenewable,
    nRND,
    nSecondaryEdu,
    nTertiaryEdu,
    nPhysicians,
    nHospitalBeds,
    nEducationSpend,
    nManufacturing,
    nMarketCap,
    nDomesticCredit,
    nCo2,
    nEnergyUse,
    nLaborParticipation
  } = signalBundle;

  const semanticScoreMap = {};

  // Seed-based random generation for consistency
  function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  const values = {};
  Object.keys(countryNameByCode).forEach((code) => {
    const meta = countryMetaByCode[code] || {};
    const population = Number(populationTotals[code] || meta.population || 0);

    const life = Number.isFinite(nLife[code]) ? nLife[code] : 0.5;
    const gdp = Number.isFinite(nGdp[code]) ? nGdp[code] : 0.5;
    const internet = Number.isFinite(nInternet[code]) ? nInternet[code] : 0.5;
    const unemploymentScore = Number.isFinite(nUnemployment[code]) ? nUnemployment[code] : 0.5;
    const growth = Number.isFinite(nGrowth[code]) ? nGrowth[code] : 0.5;
    const water = Number.isFinite(nWater[code]) ? nWater[code] : 0.5;
    const sanitation = Number.isFinite(nSanitation[code]) ? nSanitation[code] : 0.5;
    const agriculture = Number.isFinite(nAgriculture[code]) ? nAgriculture[code] : 0.5;
    const forest = Number.isFinite(nForest[code]) ? nForest[code] : 0.5;
    const urban = Number.isFinite(nUrban[code]) ? nUrban[code] : 0.5;
    const services = Number.isFinite(nServices[code]) ? nServices[code] : 0.5;
    const tourism = Number.isFinite(nTourism[code]) ? nTourism[code] : 0.5;
    const inflationScore = Number.isFinite(nInflation[code]) ? nInflation[code] : 0.5;
    const pollution = Number.isFinite(nPollution[code]) ? nPollution[code] : 0.5;
    const renewable = Number.isFinite(nRenewable[code]) ? nRenewable[code] : 0.5;
    const rnd = Number.isFinite(nRND[code]) ? nRND[code] : 0.5;
    const secondaryEdu = Number.isFinite(nSecondaryEdu[code]) ? nSecondaryEdu[code] : 0.5;
    const tertiaryEdu = Number.isFinite(nTertiaryEdu[code]) ? nTertiaryEdu[code] : 0.5;
    const physicianScore = Number.isFinite(nPhysicians[code]) ? nPhysicians[code] : 0.5;
    const hospitalScore = Number.isFinite(nHospitalBeds[code]) ? nHospitalBeds[code] : 0.5;
    const educationSpend = Number.isFinite(nEducationSpend[code]) ? nEducationSpend[code] : 0.5;
    const manufacturing = Number.isFinite(nManufacturing[code]) ? nManufacturing[code] : 0.5;
    const marketCap = Number.isFinite(nMarketCap[code]) ? nMarketCap[code] : 0.5;
    const domesticCredit = Number.isFinite(nDomesticCredit[code]) ? nDomesticCredit[code] : 0.5;
    const co2 = Number.isFinite(nCo2[code]) ? nCo2[code] : 0.5;
    const energyUse = Number.isFinite(nEnergyUse[code]) ? nEnergyUse[code] : 0.5;
    const laborParticipation = Number.isFinite(nLaborParticipation[code]) ? nLaborParticipation[code] : 0.5;

    // Create a seed based on country code and metric
    const seed = code.charCodeAt(0) * 1e6 + code.charCodeAt(1) * 1e4 + code.charCodeAt(2) * 100 + metricKey.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const random = seededRandom(seed);
    const jitter = (random - 0.5) * 0.06;

    if (semanticProfile.kind === "elderly_dependency") {
      semanticScoreMap[code] = clamp01(0.5 * life + 0.35 * gdp + 0.15 * (1 - growth) + jitter);
    } else if (semanticProfile.kind === "youth_index") {
      semanticScoreMap[code] = clamp01(0.45 * growth + 0.3 * (1 - gdp) + 0.25 * (1 - life) + jitter);
    } else if (semanticProfile.kind === "pet_population") {
      semanticScoreMap[code] = clamp01(0.35 * gdp + 0.25 * internet + 0.2 * (1 - unemploymentScore) + 0.2 * life + jitter);
    } else if (semanticProfile.kind === "water_security") {
      semanticScoreMap[code] = clamp01(0.4 * water + 0.25 * sanitation + 0.15 * (1 - unemploymentScore) + 0.1 * renewable + 0.1 * gdp + jitter);
    } else if (semanticProfile.kind === "beef_consumption") {
      semanticScoreMap[code] = clamp01(0.38 * agriculture + 0.28 * gdp + 0.16 * urban + 0.1 * services + 0.08 * life + jitter);
    } else if (semanticProfile.kind === "golf_participation" || semanticProfile.kind === "golfers_count") {
      semanticScoreMap[code] = clamp01(0.4 * gdp + 0.2 * services + 0.15 * urban + 0.15 * life + 0.1 * tourism + jitter);
    } else if (semanticProfile.kind === "water_balloon") {
      semanticScoreMap[code] = clamp01(0.3 * water + 0.22 * sanitation + 0.18 * urban + 0.15 * internet + 0.15 * growth + jitter);
    } else {
      const blended =
        querySignalWeights.gdp * gdp +
        querySignalWeights.life * life +
        querySignalWeights.internet * internet +
        querySignalWeights.unemployment * (1 - unemploymentScore) +
        querySignalWeights.growth * growth +
        querySignalWeights.water * water +
        querySignalWeights.sanitation * sanitation +
        querySignalWeights.agriculture * agriculture +
        querySignalWeights.forest * forest +
        querySignalWeights.urban * urban +
        querySignalWeights.services * services +
        querySignalWeights.tourism * tourism +
        querySignalWeights.inflation * (1 - inflationScore) +
        querySignalWeights.pollution * (1 - pollution) +
        querySignalWeights.renewable * renewable +
        querySignalWeights.rnd * rnd +
        querySignalWeights.stem * (0.32 * secondaryEdu + 0.28 * tertiaryEdu + 0.2 * educationSpend + 0.2 * rnd) +
        querySignalWeights.finance * (0.4 * domesticCredit + 0.3 * marketCap + 0.15 * gdp + 0.15 * services) +
        querySignalWeights.medicine * (0.35 * physicianScore + 0.25 * hospitalScore + 0.2 * life + 0.2 * educationSpend) +
        querySignalWeights.engineering * (0.35 * manufacturing + 0.25 * rnd + 0.2 * internet + 0.2 * energyUse) +
        querySignalWeights.physics * (0.3 * rnd + 0.25 * tertiaryEdu + 0.2 * energyUse + 0.25 * (1 - co2)) +
        querySignalWeights.industry * (0.35 * manufacturing + 0.25 * laborParticipation + 0.2 * energyUse + 0.2 * urban) +
        querySignalWeights.market * (0.45 * marketCap + 0.3 * domesticCredit + 0.25 * services);
      semanticScoreMap[code] = clamp01(blended + jitter);
    }

    let value;
    if (semanticProfile.kind === "black_population" || semanticProfile.kind === "black_share") {
      const share = estimatedBlackShareForCountry(code, meta, life, gdp, jitter);
      value = semanticProfile.kind === "black_share"
        ? share * 100
        : Math.max(0, population * share);
    } else if (semanticProfile.kind === "golfers_count") {
      const score = Number.isFinite(semanticScoreMap[code]) ? semanticScoreMap[code] : 0.5;
      value = Math.max(1000, population * (0.002 + score * 0.06));
    } else if (metric.unit === "people") {
      const score = Number.isFinite(semanticScoreMap[code]) ? semanticScoreMap[code] : 0.5;
      value = Math.max(1000, population * (0.01 + score * 0.22));
    } else if (metric.unit === "percent") {
      const score = Number.isFinite(semanticScoreMap[code]) ? semanticScoreMap[code] : 0.5;
      const min = Number.isFinite(semanticProfile.min) ? semanticProfile.min : 5;
      const max = Number.isFinite(semanticProfile.max) ? semanticProfile.max : 95;
      value = min + score * (max - min);
    } else if (metric.unit === "years") {
      const score = Number.isFinite(semanticScoreMap[code]) ? semanticScoreMap[code] : 0.5;
      value = 45 + score * 45;
    } else {
      const score = Number.isFinite(semanticScoreMap[code]) ? semanticScoreMap[code] : 0.5;
      const min = Number.isFinite(semanticProfile.min) ? semanticProfile.min : 1;
      const max = Number.isFinite(semanticProfile.max) ? semanticProfile.max : 100;
      value = min + score * (max - min);
    }

    values[code] = value;
  });

  const rows = Object.entries(values)
    .filter(([countryCode, value]) => isRealCountryCode(countryCode) && Number.isFinite(Number(value)))
    .filter(([countryCode]) => countryMatchesRegion(countryCode, regionKey))
    .filter(([countryCode]) => !focusCountryCodes.length || focusCountryCodes.includes(countryCode))
    .map(([countryCode, value]) => ({
      countryCode,
      country: countryNameByCode[countryCode],
      value: Number(value)
    }));

  rows.sort((a, b) => b.value - a.value);

  const signalDrivers = computeSignalDrivers(querySignalWeights, 6);
  const confidence = computeAIConfidence({
    query: rawQuery || metric.label,
    metric,
    weights: querySignalWeights,
    rowsCount: rows.length,
    totalCountries: Object.keys(countryNameByCode).length
  });

  return {
    metric,
    rows,
    region: regionKey,
    regionLabel: formatRegionLabel(regionKey),
    focusCountryCodes,
    aiMeta: {
      confidence,
      signalDrivers
    }
  };
}

function getStats(rows) {
  if (!rows.length) return { count: 0, min: null, max: null };
  const values = rows.map((r) => r.value);
  return {
    count: rows.length,
    min: Math.min(...values),
    max: Math.max(...values)
  };
}

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:8000,http://127.0.0.1:8000")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

function isLoopbackOrigin(origin) {
  if (!origin) return false;
  try {
    const parsed = new URL(origin);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;
    return parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  } catch (_error) {
    return false;
  }
}

function isOriginAllowed(origin) {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  return process.env.NODE_ENV !== "production" && isLoopbackOrigin(origin);
}
const rateLimitPerMinute = Number(process.env.RATE_LIMIT_PER_MINUTE || 60);
const rateBuckets = new Map();

app.use(express.json({ limit: "100kb" }));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    const proto = req.headers["x-forwarded-proto"];
    if (proto && proto !== "https") {
      return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    }
  }
  return next();
});

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (isOriginAllowed(origin)) {
    if (origin) res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(204).end();
    return next();
  }
  return res.status(403).json({ error: "Origin not allowed" });
});

app.use((req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const windowMs = 60 * 1000;
  const bucket = rateBuckets.get(ip) || { start: now, count: 0 };

  if (now - bucket.start > windowMs) {
    bucket.start = now;
    bucket.count = 0;
  }

  bucket.count += 1;
  rateBuckets.set(ip, bucket);

  if (bucket.count > rateLimitPerMinute) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  return next();
});

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "GeoInsight API" });
});

app.get("/metrics", (req, res) => {
  res.json({ metrics: metricCatalog, aiMetrics: aiProxyCatalog });
});

app.get("/data", async (req, res) => {
  try {
    const metricKey = sanitizeInput(req.query.metric);
    const dataSource = sanitizeInput(req.query.dataSource) || "world-bank";
    const query = sanitizeInput(req.query.query || "");
    const regionKey = normalizeRegionKey(req.query.region || "");
    const focusCountryCodes = parseCountryCodesParam(req.query.countries);
    const limit = Math.max(1, Math.min(250, Number(req.query.limit || 200)));

    let resolvedMetricKey = metricKey;
    if (dataSource === "ai-generated" && !getMetricByKey(resolvedMetricKey) && query) {
      const inferred = inferMetricFromQueryForAIGeneration(query);
      if (inferred) resolvedMetricKey = inferred.key;
    }

    const result = dataSource === "ai-generated"
      ? await generateAICountryData(resolvedMetricKey, regionKey, focusCountryCodes, query)
      : await getMetricDataset(resolvedMetricKey, regionKey, focusCountryCodes);

    const { metric, rows, region, regionLabel, aiMeta = null } = result;

    if (!metric) {
      return res.status(400).json({ error: "Unknown metric" });
    }

    const stats = getStats(rows);
    return res.json({
      metric: metric.key,
      metricLabel: metric.label,
      region,
      regionLabel,
      focusCountryCodes,
      unit: metric.unit,
      invertScale: Boolean(metric.invertScale),
      aiMeta,
      stats,
      rows: rows.slice(0, limit)
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.post("/query", async (req, res) => {
  try {
    const raw = sanitizeInput(req.body && req.body.query);
    const dataSource = sanitizeInput(req.body && req.body.dataSource) || "world-bank";
    if (!raw) {
      return res.status(400).json({ error: "Query is required" });
    }

    const parsedMetricKey = parseMetricFromQuery(raw);
    const regionKey = parseRegionFromQuery(raw);
    await loadCountryMap();
    const focusCountryCodes = extractCountryFocusCodes(raw);
    const scopedRegion = focusCountryCodes.length ? null : regionKey;

    let metricKey = parsedMetricKey || "gdp";
    if (dataSource === "ai-generated") {
      const inferredMetric = inferMetricFromQueryForAIGeneration(raw);
      if (inferredMetric && (!parsedMetricKey || String(inferredMetric.key).startsWith("ai_"))) {
        metricKey = inferredMetric.key;
      }
    }
    
    // Use selected data source
    let metricResult;
    if (dataSource === "ai-generated") {
      metricResult = await generateAICountryData(metricKey, scopedRegion, focusCountryCodes, raw);
    } else {
      metricResult = await getMetricDataset(metricKey, scopedRegion, focusCountryCodes);
    }
    
    const { metric, rows, region, regionLabel, aiMeta = null } = metricResult;
    const stats = getStats(rows);
    const explanationResult = await generateAIExplanation(raw, metric, rows.slice(0, 10), regionLabel, focusCountryCodes);

    return res.json({
      query: raw,
      dataSource,
      metric: metric.key,
      metricLabel: metric.label,
      metricUnit: metric.unit,
      metricInvertScale: Boolean(metric.invertScale),
      region,
      regionLabel,
      focusCountryCodes,
      visualizationType: "choropleth",
      explanation: explanationResult.text,
      explanationSource: explanationResult.source,
      explanationReason: explanationResult.reason,
      explanationModel: explanationResult.model || null,
      explanationUsage: explanationResult.usage || null,
      aiMeta,
      stats,
      topCountries: rows.slice(0, 10).map((row) => ({
        ...row,
        displayValue: formatMetricValue(row.value, metric.unit)
      }))
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Query processing failed" });
  }
});

app.use(express.static(path.join(__dirname)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`GeoInsight server running on port ${PORT}`);
});
