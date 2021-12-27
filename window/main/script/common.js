var ports = [
"Aalborg AAL", "Glasgow GLA", "Okinawa OKA", "Aarhus AAR", "Glasgow, Prestwick PIK", "Oklahoma City OKC",
"Abadan ABD", "Goma GOM", "Omaha OMA", "Abakan ABA", "Goodnew Bay GNU", "Ontario ONT",
"Aberdeen ABR", "Goose Bay YYR", "Oran ORN", "Aberdeen ABZ", "Goroka GKA", "Orebro ORB",
"Abha AHB", "Gothenburg GOT", "Orlando MCO", "Abidjan ABJ", "Gran Canaria LPA", "Osaka OSA",
"Abilene ABI", "Grand Cayman GCM", "Osaka, Itami ITM", "Abu Dhabi AUH", "Grand Fork GFK", "International KIX",
"Abuja ABV", "Grand Rapids GRR", "Oshkosh OSH", "Acapulco ACA", "Grand Turk GDT", "Osijek OSI",
"Acarigua AGV", "Grande Prairie YQU", "Oslo OSL", "Accra ACC", "Grayling KGX", "Oslo, Fornebu Airport FBU",
"Adak Island ADK", "Graz GRZ", "Oslo, Gardermoen GEN", "Adana ADA", "Great Falls GTF", "Osorno ZOS",
"Addis Ababa ADD", "Green Bay GRB", "Ostend OST", "Adelaide ADL", "Greensboro GSO", "Ottawa YOW",
"Aden ADE", "Greenville GLH", "Ouagadougou OUA", "Adler AER", "Greenville GSP", "Oxnard/Ventura OXR",
"Agadir AGA", "Greenville PGV", "Pago Pago PPG", "Aguascaliente AGU", "Grenada GND", "Palembang PLM",
"Ahmedabad AMD", "Grenoble GNB", "Palermo PMO", "Ajaccio AJA", "Groningen GRQ", "Palm Springs PSP",
"Akiachak KKI", "Guadalajara GDL", "Palma de Mallorca PMI", "Akiak AKI", "Guam GUM", "Panama City (FL.) PFN",
"Akita AXT", "Guangzhou CAN", "Panama City PTY", "Akron/Canton CAK", "Guatemala City GUA",
"Panama City, Paitilla PAC", "Al-Baha ABT", "Guayaquil GYE", "Papeete PPT", "Albany ABY", 
"Guernsey GCI", "Paphos PFO", "Albany ALB", "Guilin KWL", "Paramaribo PBM", "Albert Bay YAL", "Guiyang KWE",
"Hoop ORG", "Albuquerque ABQ", "Gulfport GPT", "Paris PAR", "Aleandroupolis AXD", "Gunnison GUC",
"Paris, Charles de Gaulle CDG", "Aleppo ALP", "Hagen HAG", "Paris, Le Bourget LBG",
"Alexandria ESF", "Haikou HAK", "Paris, Orly ORY", "Al-Fujairah FJR", "Hail HAS", "Pasco PSC",
"Algiers ALG", "Hakodate HKD", "Pau PUF", "Alicante ALC", "Halifax YHZ", "Penang PEN",
"Allakaket AET", "Hall Beach YUX", "Pensacola PNS", "Allentown ABE", "Hamburg HAM", "Peoria PIA",
"Alma Ata ALA", "Hamilton YHM", "Pereira PEI", "Alor Setar AOR", "Williamsburg PHF", "Perpignan PGF",
"Altoona AOO", "Hangzhou HGH", "Perryville KPV", "Amarillo AMA", "Hanoi HAN", "Perth PER",
"Amchitka AHT", "Hanover HAJ", "Pescara PSR", "Amman AMM", "Harare HRE", "Peshawar PEW",
"Amritsar ATQ", "Harbin HRB", "Petersburg PSG", "Amsterdam AMS", "Harlingen HRL", "Philadelphia PHL",
"Airport SPL", "Harrisburg HAR", "Philadelphia, North PNE", "Anchorage ANC", "Hartford HFD", "Phnom Penh PNH",
"Field MRI", "Hartford, Barnes BNH", "Phoenix PHX", "Ancona AOI", "Hartford, Bradford BDL", "Municipal SCF",
"Andahuaylas ANS", "Hat Yai HDY", "Phuket HKT", "Anguilla AZA", "Haugesund HAU", "Pierre PIR",
"Aniak ANI", "Havana HAV", "Pisa PSA", "Ankang AKA", "Hay River YHY", "Pittsburgh PIT",
"Ankara ANK", "Hefei HFE", "Piura PIU", "Ankara, Esenboga ESB", "Helena HLN", "Platinum PTU",
"Annecy NCY", "Helsingborg AGH", "Plymouth PYM", "Antalya AYT", "Helsinki HEL", "Pocatello PIH",
"Antananarivo TNR", "Heraklion HER", "Pohnpei PNI", "Antigua ANU", "Hermosillo HMO", "Point à Pitre PTP",
"Antofagasta ANF", "Hilo ITO", "Pointe Noire PNR", "Antwerp ANR", "Hiroshima HIJ", "Ponce PSE",
"Anvik ANV", "Ho Chi Minh City SGN", "Ponta Delgada PDL", "Aomori AOJ", "Hohhot HET", "Pori POR",
"Apia APW", "Holy Cross HCR", "Porlamar PMV", "Appleton ATW", "Homer HOM", "Port au Prince PAP",
"Aqaba AQJ", "Hong Kong HKG", "Port Elizabeth PLZ", "Arcata, Eureka ACV", "Honolulu HNL", "Port Gentil POG",
"Arctic Village ARC", "Hoolehua MKK", "Port Graham PGM", "Arecibo ARE", "Hooper Bay HPB", "Port Harcourt PHC",
"Arequipa AQP", "Hoskins HKN", "Port Hedland PHE", "Arica ARI", "Houston HOU", "Port Heiden PTH",
"Aruba AUA", "Houston, Hull Field SGR", "Port Moresby POM", "Ascension ASC", "Intercontinental IAH",
"Port of Spain, Trinidad POS", "Asheville AVL", "Hughes HUS", "Port Velho PVH",
"Ashikawa AKJ", "Humberside HUY", "Port Vila VLI", "Ashland, Huntington HTS", "Huntsville HSV", "Portland PDX",
"Asmara ASM", "Huslia HSL", "Portland PWM", "Asturias OVD", "Hyannis HYA", "Porto OPO",
"Asuncion ASU", "Hyderabad HYD", "Porto Alegre POA", "Aswan ASW", "Iguassu Falls IGU", "Prague PRG",
"Athens ATH", "Iliamna ILI", "Presque Isle PQI", "Atlanta ATL", "Indianapolis IND", "Prince George YXS",
"Atlanta, Beaver Ruin JAO", "Innsbruck INN", "Prince Rupert YPR", "Atlanta, Perimeter JAJ", "Inuvik YEV",
"Providence PVD", "Atlantic City AIY", "Ipoh IPH", "Providenciales PLS", "Field ACY", "Iqaluit YFB",
"Deadhorse SCC", "Atmautluak ATT", "Iquique IQQ", "Pucallpa PCL", "Auckland AKL", "Iron Mountain IMT",
"Puebla PBC", "Augusta AGS", "Isfahan IFN", "Puerto Ayachucho PYH", "Austin AUS", "Isiro IRP",
"Puerto Cabello PBL", "Ayacucho AYP", "Islamabad ISB", "Puerto Escondido PXM", "Baghdad, Al Muthana BGW",
"Mary's ISC", "Puerto Maldonado PEM", "International SDA", "Isles of Scil, Tresco TSO", "Puerto Montt PMC",
"Bahrain BAH", "Macarthur ISP", "Puerto Ordaz PZO", "Bakersfield BFL", "Istanbul IST", "Puerto Plata POP",
"Bali Island, Denpasar DPS", "Ithaca ITH", "Puerto Vallarta PVR", "Balmaceda BBA", "Ivanoff Bay KIB",
"Punta Arenas PUQ", "Baltimore BWI", "Izmir IZM", "Pusan PUS", "Baltimore, Gl. Martin MTN", "Menderes ADB",
"Pyongyang FNJ", "Bamako BKO", "Izmir, Cigli Military IGL", "Qingdao TAO", "Bandar Abbas BND", "Jackson JAC",
"Quebec YQB", "Bandar Seri Bagawan BWN", "Jackson JAN", "Quetta UET", "Bangalore BLR", "Jacksonville JAX",
"Quinhagak KWN", "Bangkok BKK", "Jaipur JAI", "Quito UIO", "Bangor BGR", "Jakarta CGK", "Rabat RBA",
"Bangui BGF", "Jakarta JKT", "Rabaul RAB", "Banjul BJL", "Perdana Kusuma HLP", "Raleigh/Durham RDU",
"Baotou BAV", "Janesville JVL", "Rangoon/Yangon RGN", "Barbados BGI", "Jeddah JED", "Rapid City RAP",
"Barcelona BCN", "Jersey JER", "Rarotonga RAR", "Barcelona BLA", "Jinan TNA", "Recife REC",
"Bardufoss BDU", "Johannesburg JNB", "Red Devil RDV", "Bari BRI", "Johnston Island JON", "Redding RDD",
"Barinas BNS", "Johor Bahru JHB", "Regina YQR", "Barquisimeto BRM", "Jonkoping JKG", "Reno RNO",
"Barranquilla BAQ", "Juanjui JJI", "Resolute YRB", "Barrow BRW", "Juba JUB", "Reykjavik REK",
"Basle BSL", "Juliaca JUL", "Richmond RIC", "Basra BSR", "Juneau JNU", "Riga RIX",
"Bastia BIA", "Kabul KBL", "Riga, Skulte RSC", "Bastia, Biak BIK", "Kaduna KAD", "Rimini RMI",
"Baton Rouge BTR", "Kagoshima KOJ", "Rio de Janeiro RIO", "Battle Creek BTL", "Kahului OGG",
"Internacional GIG", "Bay City/Saginaw MBS", "Kailua KOA", "Dumont SDU",
"Beaumont BPT", "Kalamazoo AZO", "Rio Gallegos RGL", "Beaver WBQ", "Kalispell FCA", "Rioja RIJ",
"Beef Island, Tortola EIS", "Kalskag KLG", "Riyadh RUH", "Beijing BJS", "Kaltag KAL", "Roanoke ROA",
"Beijing PEK", "Kanab KNB", "Roatan RTB", "Airport NAY", "Kananga KGA", "Rochester ROC",
"Beira BEW", "Kano KAN", "Rochester RST", "Beirut BEY", "Kansas City MKC", "Rockford RFD",
"Belem BEL", "International MCI", "Rocky Mount/Wilson RWI", "Belfast BFS", "Kaohsiung KHH", "Rome ROM",
"Belfast, Belfast City BHD", "Karachi KHI", "Rome, Clampino CIA", "Belgrade BEG", "Karaganda KGF",
"Rome, Fiumicino FCO", "Belize BZE", "Karup KRP", "Roosevelt ROL", "Belize, Municipal TZA", "Kasigluk KUK",
"Roswell ROW", "Bellingham BLI", "Kassel KSF", "Rota ROP", "Belo Horizonte BHZ", "Kathmandu KTM",
"Rotterdam RTM", "Benghazi BEN", "Kauai Is LIH", "Rouen URO", "Bergen BGO", "Kenai ENA", "Ruby RBY",
"Berlin BER", "Kerman KER", "Russian Mission RSH", "Berlin, Schonefeld SXF", "Ketchikan KTN",
"Saarbruecken SCN", "Berlin, Tegel TXL", "Khabarovsk KHV", "Sacramento SMF",
"Berlin, Tempelhof THF", "Kiev IEV", "Saipan SPN", "Bermuda BDA", "Kiev, Borispol KBP", "Sal SID",
"Bern BRN", "Kigali KGL", "Salt Lake City SLC", "Bethel BET", "Kilimanjaro JRO", "Saltillo SLW",
"Bettles BTT", "Killeen ILE", "Salvador SSA", "Biak BIK", "Kimberley KIM", "Salzburg SZG",
"Biarritz BIQ", "Kindu KND", "San Andres Island ADZ", "Bilbao BIO", "King Cover KVC", "San Angelo SJT",
"Billings BIL", "King Salm AKN", "San Antonio SAT", "Billund BLL", "Kingston KIN", "San Antonio SVZ",
"Binghamton BGM", "Kingston, Tinson KTP", "San Diego SAN", "Bintulu BTU", "Kinshasa FIH", "San Francisco SFO",
"Birmingham BHM", "Kipnuk KPN", "Embarkadero EMB", "Birmingham BHX", "Kiruna KRN", "San Jose SJC",
"Bissau BXO", "Kisangani FKI", "San Jose SJO", "Blantyre BLZ", "Klagenfurt KLU", "San Jose, Los Cabos SJD",
"Bloemfontein BFN", "Knoxville TYS", "San Juan SJU", "Bloomington BMI", "Kochi KCZ",
"San Juan, Isla Grande SIG", "Boa Vista BVB", "Kodiak ADQ", "San Luis Potosi SLP", "Bodo BOO", "Komatsu KMQ",
"San Pedro Sula SAP", "Bogota BOG", "Kongiganak KKH", "San Salvador SAL", "Boise BOI", "Koror ROR",
"San Tome SOM", "Bologna BLQ", "Kosrae KSA", "Sanaa SAH", "Bombay BOM", "Kota Kinabalu BKI", "Sand Point SDP",
"Bonaire BON", "Kotzebue OTZ", "Sandakan SDK", "Bordeaux BOD", "Koyukuk KYU", "Santa Barbara SBA",
"Boston BOS", "Krasnoyarsk KJA", "Santa Cruz SRZ", "Boulder WBU", "Kristiansand KRS", "Santa Cruz VVI",
"Bourlamaq/Val D'or YVO", "Kuala Lumpur KUL", "Santa Maria SMX", "Bournemouth BOH", "Kuching KCH",
"Santiago SCL", "Bozeman BZN", "Kumamoto KMJ", "Santiago de Compostela SCQ", "Bradley BDL", "Kunming KMG",
"Santo Domingo SDQ", "Brainerd BRD", "Kuopio KUO", "Santo Domingo STD", "Brasilia BSB", "Kushiro KUH",
"Sanya SYX", "Bratislava BTS", "Kuujjuarap YGW", "Sao Luiz SLZ", "Brazzaville BZV", "Kuwait KWI",
"Sao Paulo SAO", "Bremen BRE", "Kwajalein KWA", "Sao Paulo, Congonhas CGH", "Brest BES", "Kwangju KWJ",
"Sao Paulo, Guarulhos GRU", "Bridgeport BDR", "Kwethluk KWT", "Sao Paulo, Viracopos VCP",
"Brisbane BNE", "Kwigillingok KWK", "Sao Tome Island TMS", "Bristol BRS", "La Ceiba LCE", "Sapporo SPK",
"Brownsville BRO", "La Crosse LSE", "Sapporo, Chitose CTS", "Brussels BRU", "La Grande YGL",
"Sapporo, Okadama OKD", "Bucaramanga BGA", "La Paz LPB", "Sarasota/ Bradenton SRQ", "Bucharest BUH",
"La Paz Mex LAP", "Sault Ste. Marie YAM", "Bucharest, Baneasa BBU", "Labuan LBU", "Savannah SAV",
"Bucharest, Otopeni OTP", "Lae LAE", "Scammon Bay SCM", "Budapest BUD", "Lafayette LFT",
"Scranton, Wilkes-Barre AVP", "Buenos Aires BUE", "Lagos LOS", "Seattle SEA", "Newbery AEP", "Ana SNA",
"Sedona SDX", "Ministro Pistarini EZE", "Lahad Datu LDU", "Seldovia SOV", "Bujumbura BJM", "Lahore LHE",
"Sendai SDJ", "Bulawayo BUQ", "Lake Charles LCH", "Seoul SEL", "Bundaberg, Blanding BDG", "Lanai City LNY",
"Sepulot SPE", "Burbank BUR", "Langkawi LGK", "Seward SWD", "Burlington BTV", "Lansing LAN", "Seville SVQ",
"Bushehr BUZ", "Lanzhou LHW", "Shageluk SHX", "Butte BTM", "Laredo LRD", "Shanghai SHA",
"Cairns CNS", "Larnaca LCA", "Shannon SNN", "Cairo CAI", "Las Piedras LSP", "Shantou/Swatow SWA",
"Cajamarca CJA", "Las Vegas LAS", "Sharjah SHJ", "Calama CJC", "Terminal VGT", "Shemya Islands SYA",
"Calcutta CCU", "Launceston LST", "Shenyang SHE", "Calgary YYC", "Lawton LAW", "Shenzhen SZX",
"Cali CLO", "Le Havre LEH", "Lerwick / Tingwall LWK", "Calicut CCJ", "Leeds LBA", "Scatsta SCS",
"Calvi CLY", "Leinster LER", "Sumuburgh LSI", "Cambridge Bay YCB", "Leipzig LEJ", "Shijiazhuang SJW",
"Campo Grande CGR", "Lethbridge YQL", "Shiraz SYZ", "Canaima CAJ", "Lhasa LXA", "Shreveport SHV",
"Cancun CUN", "Libreville LBV", "Sibu SBW", "Cape Girardeau CGI", "Liege LGG", "Simferopol SIP",
"Cape Town CPT", "Lille LIL", "Singapore SIN", "Caracas CCS", "Lilongwe LLW", "Singapore, Paya Lebar QPG",
"Cardiff CWL", "Lima LIM", "Singapore, Seletar XSP", "Carlsbad CNM", "Limoges LIG", "Sioux Falls FSD",
"Cartagena CTG", "Lincoln LNK", "Sitka SIT", "Carupano CUP", "Linz LNZ", "Sleetmute SLQ",
"Casablanca AAA", "Lisbon LIS", "Sofia SOF", "Casablanca, Anfa CAS", "Little Rock LIT", "Sokoto SKO",
"Mohamed V CMN", "Liverpool LPL", "Soldotna SXW", "Casper CPR", "Livingstone LVI", "Sonderborg SGD",
"Catania CTA", "Ljubljana LJU", "Sondre Stromfjord SFJ", "Cayenne CAY", "Lobito LOB", "South Bend SBN",
"Cebu CEB", "Lome LFW", "Springfield SGF", "Cedar City CDC", "London LON", "Springfield SPI",
"City CID", "London YXU", "St. Denis de La Reunion RUN", "Chachapoyas CHH", "London, City Airport LCY",
"St. George SGU", "Chalkyits CIK", "London, Gatwick LGW", "St. George Island STG", "Champaign CMI",
"London, Heathrow LHR", "St. Johns YYT", "Changchun CGQ", "London, Luton ETN", "St. Kitts SKB",
"Changsha CSX", "London, Stansted STN", "St. Louis STL", "Charleston CHS", "Long Beach LGB", "St. Lucia SLU",
"Charlotte CLT", "Loreto LTO", "St. Lucia, Hewanorra UVF", "Chattanooga CHA", "Los Angeles LAX",
"St. Maarten SXM", "Chefornak CYF", "Los Angeles VNY", "St. Mary's KSM", "Cheju CJU", "Los Mochis LMM",
"St. Petersburg LED", "Chengdu CTU", "Louisville SDF", "St. Thomas STT", "Chetumal CTM", "Lourdes/Tarbes LDE",
"St. Vincent SVD", "Chevak VAK", "Luanda LAD", "Sta Cruz Huat HUX", "Chiang Mai CNX", "Lubbock LBB",
"Stavanger SVG", "Chicago CHI", "Lubumbashi FBM", "Steamboat Spring SBS", "Meigs CGX", "Lucknow LKO",
"Stevens Village SVS", "Chicago, Midway MDW", "Ludwigshafen LUD", "Stockholm STO", "Chicago, O'Hare ORD",
"Lugano LUG", "Stockholm, Arlanda ARN", "Chichenitza CZA", "Lulea LLA", "Stockholm, Bromma BMA",
"Chiclayo CIX", "Lumid Pau LUB", "Stockton SCK", "Chico CIC", "Lusaka LUN", "Stony River SRV",
"Chignik KCL", "Luxembourg LUX", "Strasbourg SXB", "Chihuahua CUU", "Luxor LXR", "Stuttgart STR",
"Chisholm HIB", "Lyon LYS", "Sudbury YSB", "Chittagong CGP", "Cox's Bazar CXB", "Maastricht MST",
"Sukhumi SUI", "Chongqing CKG", "Macon MCN", "Sundsvall SDL", "Christchurch CHC", "Madison MSN",
"Surabaya SUB", "Chuathbaluk CHU", "Madras MAA", "Suva SUV", "Cincinnati CVG", "Madrid MAD",
"Sverdlovsk, Ekaterinburg SVX", "Ciudad Del Carmen CME", "Magadan GDX", "Sydney SYD",
"Cleveland CLE", "Mahe Island SEZ", "Syracuse SYR", "Lakefront BKL", "Maiduguri MIU", "Tabriz TBZ",
"Cochabamba CBB", "Majuro MAJ", "Tabuk TUU", "Cochin COK", "Malaga AGP", "Tacna TCQ",
"Coeur D'Alene COE", "Male MLE", "Taegu, Korea TAE", "Cold Bay CDB", "Malmo MMA", "Taichung TXG",
"Colima CLQ", "Malongo MAL", "Taif TIF", "College Station CLL", "Malta MLA", "Taipei TPE",
"Cologne CGN", "Manado MDC", "Taipei, Shung Shan TSA", "Colombo CMB", "Managua MGA", "Taiyuan TYN",
"Colorado Springs COS", "Manaus MAO", "Takamatsu TAK", "Columbia CAE", "Manchester MAN", "Talara TYL",
"Columbia COU", "Manchester MHT", "Tallahassee TLH", "Columbus CMH", "Manila MNL", "Tallinn TLL",
"Columbus CSG", "Manzanillo ZLO", "Tamanrasset TMR", "Columbus UBS", "Maputo MPM", "Tampa TPA",
"Conakry CKY", "Maracaibo MAR", "Tampere TMP", "Concepcion CCP", "Maribor MBX", "Tanana TAL",
"Copenhagen CPH", "Marietta, Parkersburg PKB", "Tangier TNG", "Roskilde RKE", "Marion MWA", "Tarapoto TPP",
"Copiapo CPO", "Marquette MQT", "Tashkent TAS", "Cordova CDV", "Marrakech RAK", "Tawau TWU",
"Cork ORK", "Marseille MRS", "Teesside MME", "Corning, Elmira ELM", "Marshall MLL", "Tegucigalpa TGU",
"Coro CZE", "Martha's Vineyard MVY", "Tehran THR", "Corpus Christie CRP", "Mashad MHD",
"Tel Aviv Yafo, Sde Dov SDV", "Cabaniss Field NGW", "Matamoros MAM", "Tel Aviv Yafo, Tel Aviv TLV",
"Cuddihy Field CUX", "Matsuyama MYJ", "Temuco ZCO", "Cotonou COO", "Maturin MUN", "Tenerife TCI",
"Coyhaique GXQ", "Mauritius MRU", "Rodeos TFN", "Cozumel CZM", "Mayaguez MAZ", "Sofia TFS",
"Crokked Creek CKD", "Mazatlan MZT", "Terceira TER", "Cruzeiro Do Sul CZS", "M'bandaka MDK", "Terrace YXT",
"Cuenca CUE", "M'buji Mayi MJM", "Texarkana TXK", "Cuiaba CGB", "Mc Allen MFE", "Thessaloniki SKG",
"Culebra CPX", "Mc Grath MCG", "Thunder Bay YQT", "Culiacan CUL", "Medan MES", "Tianjin TSN",
"Cumana CUM", "Medellin MDE", "Tijuana TIJ", "Curacao CUR", "Medford MFR", "Timisoara TSR",
"Curitiba CWB", "Medina MED", "Tingo Maria TGI", "Cusco CUZ", "Meekatharp MKR", "Tobago TAB",
"Dakar DKR", "Mekoryuk MYU", "Toksook Bay OOK", "Dalaman DLM", "Melbourne MEL", "Tokushima TKS",
"Dalian DLC", "Melbourne MLB", "Tokyo TYO", "Dallas, Love Field DAL", "Heliport KAH", "Tokyo, Haneda HND",
"Dallas/Ft. Worth DFW", "Melbourne, Essendon MEB", "Tokyo, Narita Airport NRT", "Damascus DAM", "Memphis MEM",
"Toledo TOL", "Danville DNV", "Mendoza MDZ", "Tongatapu TBU", "Dar Es Salaam DAR", "Merida MID", "Topeka TOP",
"Darwin DRW", "Merida MRD", "Toronto YTO", "Davao DVO", "Meridian MEI", "Toronto YYZ",
"Dayton DAY", "Mexico City MEX", "Toronto Island YTZ", "Daytona Beach DAB", "Miami MIA", "Torreon TRC",
"Decatur DEC", "Heliport JDM", "Tottori TTJ", "Deer Lake YDF", "Base MPB", "Toulon/Hyeres TLN",
"Delhi DEL", "Midland MAF", "Toulouse TLS", "Delta DTA", "Milan MIL", "Toyama TOY", "Denver DEN",
"Milan, Linate LIN", "Traverse City TVC", "Des Moines DSM", "Milan, Malpensa MXP", "Trenton TTN",
"Detroit DTT", "Milan, Orio al Serio BGY", "Tri-City TRI", "Detroit DTW", "Milan, Segrate SWK", "Trieste TRS",
"Detroit DTW", "Milford MLF", "Tripoli TIP", "Detroit City DET", "Milwaukee MKE", "Trivandrum TRV",
"Detroit City DET", "Minatitlan MTT", "Trombetas TMT", "Detroit, Willow Run YIP", "Mineralnye MRV",
"Tromso TOS", "Detroit, Willow Run YIP", "Minneapolis MSP", "Trondheim TRD", "Dhahran DHA", "Minot MOT",
"Trujillo TRU", "Minsk MSQ", "Truk TKK", "Dhaka DAC", "Miri MYY", "Tucson TUS", "Dillingham DLG",
"Missoula MSO", "Tulsa TUL", "Djerba DJE", "Miyazaki KMI", "Tuluksak TLT", "Djibouti JIB", "Mobile MOB",
"Tumbes TBP", "Doha DOH", "Moline MLI", "Tunis TUN", "Dominica, Cane Field DCF", "Mombasa MBA",
"Tuntutulia WTL", "Hall DOM", "Moncton YQM", "Tununak TNK", "Dothan DHN", "Monroe MLU", "Turin TRN",
"Douala DLA", "Monrovia MLW", "Turku TKU", "Dresden DRS", "International ROB", "Tuscaloosa TCL",
"Dubai DXB", "Montego Bay MBJ", "Tuxtla Gutierrez TGZ", "Dublin DUB", "Monterrey MTY", "Twin Falls TWF",
"Duluth DLH", "Montevideo MVD", "Tyler TYR", "Durango DGO", "Montgomery MGM", "Ube UBJ", "Montpellier MPL",
"Ukiah UKI", "Durban DUR", "Montreal YMQ", "Ulan Bator ULN", "Dusseldorf DUS", "International YUL", "Umea UME",
"Dutch Harbor DUT", "International YMX", "Unalakleet UNK", "East London ELS", "Morelia MLM", "Urumqi URC",
"East Midlands EMA", "Moroni YVA", "Vaasa VAA", "Easter Island IPC", "International HAH", "Wabush YWK",
"Edinburgh EDI", "Moscow MOW", "Waco ACT", "Edmonton YEA", "Domodedovo DME", "Valdosta VLD",
"Edmonton, Albert Int'l YEG", "Sheremetyevo SVO", "Valencia VLC", "Edmonton, Municipal YXD",
"Moscow, Vnukovo VKO", "Valencia VLN", "Field YED", "Mount Hagen HGU", "Valera VLV", "Eek EEK",
"Muenster FMO", "Valladolid VLL", "Eglin Afb/Valparaiso VPS", "Mulhouse MLH", "Vancouver YVR",
"Eindhoven EIN", "Munich MUC", "Warsaw WAW", "El Paso ELP", "Muscat MCT", "Washington WAS", "El Salvador ESR",
"Muskegon MKG", "International IAD", "Elat ETH", "Myrtle Beach MYR", "Washington, National DCA", "Elko EKO",
"N'djamena NDJ", "Vasteras VST", "Ely ELY", "Nadi NAN", "Watson Lake YQH", "Enschede ENS", "Nagasaki NGS",
"Wausau AUW", "Entebbe EBB", "Nagoya NGO", "Vaxjo VXO", "Ercan ECN", "Nairobi NBO", "Wellington WLG",
"Erevan EVN", "Nairobi WIL", "Wenatchee EAT", "Erfurt ERF", "Nanchang KHN", "Venetie VEE", "Erie ERI",
"Nancy ENC", "Venice VCE", "Eugene EUG", "Nanisivik YSR", "Venice, Treviso TSF", "Evansville EVV",
"Nanjing NKG", "Veracruz VER", "Evenes EVE", "Nanning NNG", "Vernal VEL", "Exeter EXT", "Nantes NTE",
"Verona VRN", "Fairbanks FAI", "Nantucket ACK", "West Palm Beach PBI", "Bedford EWB", "Napakiak WNA",
"Westchester HPN", "False Pass KFP", "Napaskiak PKA", "White River LEB", "Fargo FAR", "Naples APF",
"Whitehorse YXY", "Faro FAO", "Naples NAP", "Wichita ICT", "Fayetteville FAY", "Nashville BNA",
"Wichita Falls SPS", "Fayetteville FYV", "Nassau NAS", "Victoria YYJ", "Fez FEZ", "Natal NAT", "Vienna VIE",
"Fillmore FIL", "Neuchatel NEU", "Vientiane VTE", "Flagstaff FLG", "New Bern EWN", "Vieques VQS",
"Flint FNT", "New Orleans MSY", "Villahermosa VSA", "Florence FLR", "New York NYC", "Wilmington ILM",
"Florence MSL", "Kennedy JFK", "Vilnius VNO", "Flores FRS", "New York, La Guardia LGA", "Windhoek WDH",
"Fort Chima YVP", "New York, Newark EWR", "Windhoek, Eros ERS", "Fort Myers FMY", "Newburgh SWF",
"Windsor YQG", "Fort Nelson YYE", "Newcastle NCL", "Winnipeg YWG", "Fort St. John YXJ", "Newtok WWT",
"Vitoria VIT", "Fortaleza FOR", "Niagara Falls IAG", "Vladivostok VVO", "Frankfurt FRA", "Niamey NIM",
"Wrangell WRG", "Fredericton YFC", "Nice NCE", "Wuhan WUH", "Freeport FPO", "Nightmute NME", "Xiamen XMN",
"Freetown FNA", "Niigata KIJ", "Xian SIA", "Freetown, Hastings HGS", "Nimes FNI", "Yakima YKM",
"Fresno FAT", "Ningbo NGB", "Yakutat YAK", "Friedrichshafen FDH", "Nis INI", "Yamagata GAJ",
"Ft de France FDF", "Nome OME", "Yantai YNT", "Ft Pierce FPR", "Norfolk ORF", "Yap Caroline Island YAP",
"Ft Simpson YFS", "Norilsk NSK", "Yellowknife YZF", "Ft Smith FSM", "Norman Wells YVQ", "Yinchuang INC",
"Ft Wayne FWA", "Norrkoping NRK", "Yurimaguas YMS", "Ft Yukon FYU", "Norwich NWI", "Yuzhno-Sakhalinsk UUS",
"Fukuoka FUK", "Nouakchott NKC", "Zacatecas ZCL", "Funchal FNC", "Noumea NOU", "Zagreb ZAG", "Fuzhou FOC",
"Noumea, Magenta GEA", "Zahedan ZAH", "Gainesvile GNV", "Novosibirsk OVB", "Zanzibar ZNZ", "Galena GAL",
"Nuevo Laredo NLD", "Zaragoza ZAZ", "Garoua GOU", "Nulato NUL", "Zhanjiang ZHA", "Gassim ELQ",
"Nunapitchuk NUP", "Zhengzhou CGO", "Gauhati GAU", "Nuremberg NUE", "Zihuatanejo ZIH", "Gemena GMA",
"Oakland OAK", "Zurich ZRH", "Geneva GVA", "Oaxaca OAX", "Genoa GOA", "Oita OIT",
"Longview GGG", "Okayama OKJ", "Barisal BZL", "Jessore JSR", "Rajshahi RJH", "Saidpur SPD", "Sylhet ZYL" ]
  
function autocomplete(inp, arr) {
  let currentFocus;
  inp.addEventListener("input", function(e) {
      let a, b, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.parentNode.appendChild(a);
      for (let i = 0; i < arr.length; i++) {
        let pos = arr[i].toLowerCase().indexOf(val.toLowerCase());
        if (pos > -1) {
          b = document.createElement("DIV");
          if (pos === 0) {
            b.innerHTML = `<strong>${arr[i].slice(0, val.length)}</strong>${arr[i].slice(val.length)}`;
          } else {
            b.innerHTML = `${arr[i].slice(0, pos)}<strong>${arr[i].slice(pos,pos + val.length)}</strong>${arr[i].slice(pos + val.length)}`;
          }
          b.addEventListener("click", function (e) {
            inp.value = this.innerText;
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute om key press on keyboard:*/
  inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("departure"), ports);
autocomplete(document.getElementById("destination"), ports);



/* credit card input mask */
window.onload = function () {
  const cardnumber = document.getElementById('cardnumber');
  const expirationdate = document.getElementById('expirationdate');
  const securitycode = document.getElementById('securitycode');
  
  //Mask the Credit Card Number Input
  var cardnumber_mask = new IMask(cardnumber, {
      mask: [
          {
              mask: '0000 000000 00000',
              regex: '^3[47]\\d{0,13}',
              cardtype: 'american express'
          },
          {
              mask: '0000 0000 0000 0000',
              regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
              cardtype: 'discover'
          },
          // {
          //     mask: '0000 000000 0000',
          //     regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
          //     cardtype: 'diners'
          // },
          {
              mask: '0000 0000 0000 0000',
              regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
              cardtype: 'mastercard'
          },
          // {
          //     mask: '0000-0000-0000-0000',
          //     regex: '^(5019|4175|4571)\\d{0,12}',
          //     cardtype: 'dankort'
          // },
          // {
          //     mask: '0000-0000-0000-0000',
          //     regex: '^63[7-9]\\d{0,13}',
          //     cardtype: 'instapayment'
          // },
          {
              mask: '0000 000000 00000',
              regex: '^(?:2131|1800)\\d{0,11}',
              cardtype: 'jcb15'
          },
          {
              mask: '0000 0000 0000 0000',
              regex: '^(?:35\\d{0,2})\\d{0,12}',
              cardtype: 'jcb'
          },
          {
              mask: '0000 0000 0000 0000',
              regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
              cardtype: 'maestro'
          },
          // {
          //     mask: '0000-0000-0000-0000',
          //     regex: '^220[0-4]\\d{0,12}',
          //     cardtype: 'mir'
          // },
          {
              mask: '0000 0000 0000 0000',
              regex: '^4\\d{0,15}',
              cardtype: 'visa'
          },
          {
              mask: '0000 0000 0000 0000',
              regex: '^62\\d{0,14}',
              cardtype: 'unionpay'
          },
          {
              mask: '0000 0000 0000 0000',
              cardtype: 'Unknown'
          }
      ],
      dispatch: function (appended, dynamicMasked) {
          var number = (dynamicMasked.value + appended).replace(/\D/g, '');
  
          for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
              let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
              if (number.match(re) != null) {
                  return dynamicMasked.compiledMasks[i];
              }
          }
      }
  });
  
  //Mask the Expiration Date
  var expirationdate_mask = new IMask(expirationdate, {
      mask: 'MM{/}YY',
      groups: {
          YY: new IMask.MaskedPattern.Group.Range([0, 99]),
          MM: new IMask.MaskedPattern.Group.Range([1, 12]),
      }
  });
  
  //Mask the security code
  var securitycode_mask = new IMask(securitycode, {
      mask: '0000',
  });
  
  
  cardnumber_mask.on('accept', function () {
      if (cardnumber_mask.value.length == 0) {
          document.getElementById('svgnumber').innerHTML = '0123 4567 8910 1112';
      } else {
          document.getElementById('svgnumber').innerHTML = cardnumber_mask.value;
      }
  });
  
  expirationdate_mask.on('accept', function () {
      if (expirationdate_mask.value.length == 0) {
          document.getElementById('svgexpire').innerHTML = '01/23';
      } else {
          document.getElementById('svgexpire').innerHTML = expirationdate_mask.value;
      }
  });
  
  securitycode_mask.on('accept', function () {
      if (securitycode_mask.value.length == 0) {
          document.getElementById('svgsecurity').innerHTML = '985';
      } else {
          document.getElementById('svgsecurity').innerHTML = securitycode_mask.value;
      }
  });
  
  };

















const { ipcRenderer } = require("electron");

/* send info to ipcMain and inject html flight data card */












/* sign out */
function signout(){
  ipcRenderer.send("sign-out");
}