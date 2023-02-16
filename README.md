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

1.`npm install` - to get the correct modules
2.`npm run dev` - Start the Vite-server
3.`npm test`

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

## Uppgiftsbeskrivning

Utöver att en bygga en hemsida utifrån bilden ovan i det valda ramverket ska du också ska skriva en rapport och hålla en muntlig presentation om ramverket. Den muntliga presentationen skall hållas med hjälp av en powerpoint/keynote och vara ca 5-10 minuter lång.

Rapporten skall ha ca två A4 sidor brödtext och innehålla en referenslista med minst tre referenser till informationskällor på webben. Varje skrivet stycke i texten skall referera till minst en av dina referenser i referenslistan. Rapporten skall ha en relevant titel samt vara uppdelad i olika stycken, tex: Inledning, Bakgrund, Användning, Diskussion, Framtid. Ungefär 2/3 av rapporten ska beskriva ramverket med referenser medan 1/3 av rapporten är reflektion/egna tankar.

Du ska i din rapport och presentation beskriva ramverket, hur det används, vem som har skapat det, mm. Du ska även diskutera för- och nackdelar för när det är lämpligt att använda sig av det och hur det förhåller sig till React. Både den muntliga och skriftliga inlämning skall innehålla kodexempel från ditt egna kodprojekt med syftet att enklare förmedla innehållet i din text.

Den här readme-filens installationsinstruktioner ska uppdateras så det blir tydligt hur man bygger och kör koden när projeket är korrekt uppsatt med ramverket som du har valt.

Projektet skall även hostas på Netlify (eller liknande tjänst) och en demolänk ska läggas till i README filen.

## Installation & Utveckling

1. Skapa ett projekt med önskat ramverk ex med hjälp av: `npm init vite` och följ instruktionerna (ev behöver du ta bort readmefilen först för att sedan lägga tillbaka den).
2. Skapa `.npmrc` filen och lägg till följande:

```
@plugga-tech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

3. Lägg till paketet med testerna i ditt projekt `npm i -D @plugga-tech/frontend-framework`.
4. Kör `npx plugga init` för att kopiera in testerna och nödvändiga filer till rooten av ditt projekt.
5. Säkerställ att det finns ett `dev` skript i din package.json och att dev-server'n startar på port `5173`.
6. Kör testerna med kommandot `npx plugga test` direkt via terminalen eller lägg till det som ett test-skript i din package.json fil så du kan köra det med `npm test` istället.
7. Nu är du redo att skriva koden med ditt valda ramverk för att få gröna tester.
8. Om det kommer nya uppdateringar till testerna i uppgiften kan du köra `npx plugga update` för att hämta hem det senaste.

### Lista av data-cy som ska finnas i koden

- `data-cy="chart-header"` övre delen av diagrammet som visar åren (2016-2022).
- `data-cy="chart-row"` varje rad i diagrammet som representerar ett ramverk.
- `data-cy="chart-cell"` varje cell i varje rad, gäller även tomma celler.
- `data-cy="chart-circle"` värdet som visas i en cell - en färgad cirkel med en procentsats.
- `data-cy="row-line"` den färgade linjen som går igenom varje rad.

## Inlämning

Kodprojektet ska zippas ihop och lämnas in på läroplattformen. Rapporten och presentationen ska exporteras till PDF och också lämnas in, dock separat från det zippade kodprojektet.

**Inlämningen skall alltså bestå av en zippad mapp och två PDF'er.**

### Krav för Godkänt

- [ ] Uppgiften har lämnats in i tid (Kod, Rapport, Presentation).
- [ ] Rapporten följer uppgiftsbeskrivningen ovan.
- [ ] Readmefilen har uppdaterats enligt beskrivning ovan.
- [-] Projektet här hostat på Netlify och går att nå via en demolänk i readme filen.
- [x] Git och GitHub har använts.
- [x] Sidan innehåller en header, footer och main.
- [x] Sidan är responsiv.
- [x] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [ ] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [ ] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.

_Gjorda krav ska kryssas för._
