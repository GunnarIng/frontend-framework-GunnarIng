# Duplicate a chart from State of Js and make it interactive (**PREACT**)

This is a schoolproject where the assigment where to do a copy of a chart from[The State Of Js](https://2022.stateofjs.com/en-US/) over all the top 11 frameworks/libraries used in 2022. I chose to use **Preact** as my framework of choice to build the chart.

## Summary
When starting this project, my skills were mostly based on vanilla JS and some TypeScript, so it was a steep learning curve. I had no clue how React, Preact, Vue, and other frameworks worked or what they were meant for. But after reading and looking at some documentation, I started to slowly grasp the concepts.

Overall, it was a fun project, and with a deadline of 10 days, it was stressful but enriching. The hardest part, in my opinion, was probably combining the styling of the chart with the JavaScript and making all the Cypress tests work.

I will provide a Netlify link as soon as the project is made public by my teacher.



### Soures:
[preact-router](https://www.npmjs.com/package/preact-router)

[Preact](https://preactjs.com/)

[React](https://reactjs.org/)


#
## Initialize the project
To start the project you need to run the following commands:
- Clone the repo and run the following commands in the terminal:<br><br>
1.`npm i` - To get all packages and dependencies <br>
2.`npm run dev` - Start the Vite-server <br>
3.`npm run test` - Start the cypress test if wanted


# Requirement for passing:
- [x] The upper part of the chart that shows the years (2016-2022).
- [x] Each row in the diabram should represent a framework.
- [x] Each cell in each row should be created even the empty ones.
- [x] The value displayed in a cell - a colored circle with a percentage.
- [x] Have a colored line in each row with correct color from data.js file. 
- [x] Use git and Github
- [x] App should inc. a Head, main and footer. 
- [x] App should be responsive
- [x] Start page should show "rentention"

### VG grade:

- [x] Use client-routing and start show 'retention'
- [x] All links should show proper stats with client-routing.

<br>
<br>
<br>

# Frontend ramverk Assignment in Swedish

Inspirerad ifrån [stateofjs](https://stateofjs.com) där du som student väljer ett av de listade ramverken och skapar en enklare variant av sidan med det valda ramverket.

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

<br>
<br>
<br>
<br>

## Inlämning

Kodprojektet ska zippas ihop och lämnas in på läroplattformen. Rapporten och presentationen ska exporteras till PDF och också lämnas in, dock separat från det zippade kodprojektet.

**Inlämningen skall alltså bestå av en zippad mapp och två PDF'er.**

### Krav för Godkänt

- [x] Uppgiften har lämnats in i tid (Kod, Rapport, Presentation).
- [x] Rapporten följer uppgiftsbeskrivningen ovan.
- [x] Readmefilen har uppdaterats enligt beskrivning ovan.
- [-] Projektet här hostat på Netlify och går att nå via en demolänk i readme filen.
- [x] Git och GitHub har använts.
- [x] Sidan innehåller en header, footer och main.
- [x] Sidan är responsiv.
- [x] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [x] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [x] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.

_Gjorda krav ska kryssas för._
