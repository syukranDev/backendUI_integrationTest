# iv2021-M*yb*nk Assessment
- **Language** = HTML5, CSS, Javascript (jQuery & AJAX) <br />
- **Front-end** = Bootstrap, chartJS, leafletJs <br /> 
- **Back end/API** = nodeJS (npm package called `json-server` as fake API) & number-of-people-inspace API `https://api.wheretheiss.at/` <br /> 

## Installation Guide
**For front-end:** <br /> 
> [1] Go to your local server directory (httpdocs dir for XAMPP @ i used Live Server extension in Visual Studio Code IDE) <br /> 
> [2] Open terminal/git bash and type `git clone https://github.com/syukranDev/iv2021_syukran.git` <br /> 
> [3] Fire up your local server. <br /> 

**For back-end (Assuming you have nodejs installed):** <br /> 
> [1] Go to path `iv2021_syukran/fakeAPI` and delete all files except `db.json` <br />
> [2] Open terminal in `iv2021_syukran/fakeAPI` directory and type `npm install -D json-server` <br />
> [3] New `node_modules` , `package.json`, `package-lock.json` will be generated in path `iv2021_syukran/fakeAPI` alongside with existing `db.json` <br />
> [4] Run the fakeAPI server by `json-server --watch db.json`<br />
> [5] If all running well, your JSON server will be running at http://localhost:3000 (See picture below) <br /> 
>  <p align="center">
  <img src="https://user-images.githubusercontent.com/51852197/144419980-2458bd7d-2970-4589-8fcb-82c0abb27474.PNG" />
  </p> <br />
  
> **IMPORTANT: ** Content of `db.json` only have 11 constant sets of self-generate data due to simplicity testing, so there is no new data being updated everytime `db.json` is called, however `setTimeout()` is included & commented within the Javascript files that calls the function of data fetching from API incase I want to implement the real-time data fetch in the future <br />
  
> <p align="center">
  <img src="https://user-images.githubusercontent.com/51852197/144367245-cad431bb-6ad2-4091-8462-34f8130a9eb7.PNG" />
  </p> <br /> 



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
- not really meet the main task objective due to time constraint but i think meet the Extension A,B,C. <br />
- `json-server` is a full fake REST API used for quick backend prototyping,  more infos here: https://www.npmjs.com/package/json-server <br />





