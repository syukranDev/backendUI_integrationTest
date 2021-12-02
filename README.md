# iv2021-M*yb*nk Assessment
> **Language** = HTML5, CSS, Javascript (jQuery & AJAX) <br />
> **Front-end** = Bootstrap, chartJS, leafletJs <br /> 
> **Back end/API** = nodeJS (npm package called `json-server` as fake API) & real-time API`https://api.wheretheiss.at/` <br /> 

## Installation Guide
**For front-end:** <br /> 
> [1] Go to your local server directory (httpdocs dir for XAMPP) <br /> 
> [2] Open terminal/git bash and type `git clone https://github.com/syukranDev/iv2021_syukran.git` <br /> 
> [3] Fire up your local server. <br /> 

**For back-end (Assuming you have nodejs installed):** <br /> 
> [1] Go to path `iv2021_syukran/fakeAPI` and delete all files except `db.json` and make a copy of it to desktop (will use later in step 5) <br />
> [2] Open terminal in `iv2021_syukran/fakeAPI` directory and type `npm install -D json-server` <br />
> [4] `node_modules` , `package.json`, `package-lock.json` will be generated in path `iv2021_syukran/fakeAPI` <br />
> [5] Copy the `db.json` (the one you copied earlier) into the path `iv2021_syukran/fakeAPI`. <br />
> [3] Run the fakeAPI server by `json-server --watch db.json`, this if all good, your JSON server will be running at http://localhost:3000 (See picture below) <br /> 
>![terminal](https://user-images.githubusercontent.com/51852197/144419980-2458bd7d-2970-4589-8fcb-82c0abb27474.PNG)



## Web Apps Homepage Explanation
**i) Window Tab 1 (Current ISS location) & 2 (ISS Trace Route) & 3 (Outside ISS Temperature)** <br />
> a) `LeafletJs` framework is used to visualize world map and `chartJS` framework is used to visualize chart. <br />
> b) All data shown in `db.json` is fixed (see remark below) and is fetched using jQuery/AJAX (method:GET) from `api-url: http://localhost:3000/Todos` of json-server. <br />

**ii) Window Tab 4 (Embedded Tweet)** <br />
> a) Tweet ID is fetched manually by simply going to tweet url (https://twitter.com/username/status/tweetID). <br />
> b) Planned to get new Twitter API token key to query (GET) the tweet ID, but application rejected. <br />

**iii) Window Tab 4 (how-many-people-in-space)**  <br />
> a) Data is fetched (method: GET) directly from `https://api.wheretheiss.at/` <br />

![webpage full](https://user-images.githubusercontent.com/51852197/144421024-c483d602-7249-4ef6-9b97-f4659d59397f.png)

## Remarks & Future Dev
- not really meet the main task objective due to time constraint & limited knowledge but i think meet the Extension A,B,C. <br />
- `json-server` is a full fake REST API used for quick backend prototyping,  more infos here: https://www.npmjs.com/package/json-server <br />
- **IMPORTANT: ** `db.json` of fakeAPI (json-server) only contain 11 sets of self-generate data (lattitude,longitude,temperature,country,id,timestamp) due to simplicity testing, so there is no new data being updated everytime `db.json` is called. <br />
![js pic](https://user-images.githubusercontent.com/51852197/144367245-cad431bb-6ad2-4091-8462-34f8130a9eb7.PNG) <br />




