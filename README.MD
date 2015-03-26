# cv-Lo

A client-side app for turning a Trello board into a resume. 

Uses React for the views. [pdfmake](https://github.com/bpampuch/pdfmake) for generating the PDF clientside.

## Local Usage

Getting a copy of cv-Lo running locally isn't hard. 

1. `git clone https://github.com/igregson/cv-lo.git`
2. `npm install`
3. `npm start`
4. visit `localhost:3000`

### `Package.json` As a Build Tool

cv-Lo makes use of NPM as a build tool. Cheack out `package.json` for an understanding.

`#### npm start`

Starts the development environment with a Browsersync server - an alias for `npm run watch`. 


`#### npm run build`

Builds everything. Simple as that.

## Client-side Usage

### On the Trello side

Create a board, make it public. It has to be public for cv-Lo to upload it (see todo item for thoughts on client-side auth). 

Board organization is opinionated only as much as necessary: 

- name your board whatever you'd like. 
- each list will become a "section" of your resume. 
- each list item ("cards" in Trello talk) will be an entry for that section.
- add descriptions to list items if you'd like. These can be have bullets and stuff if you'd like (Trello supports Markdown).

> Tip: Your board only has to be public for uploading it to cv-Lo, meaning it's super easy to toggle between private/public if you don't want your trello resume board to be public. 

### On the cv-Lo side

Just click, paste, view, download, and all the rest that you'd expect with a public-facing project.

## Aren't there other ways to do this?

Yes, of course. And cv-Lo isn't necessarily the best. Especially with its current limitations (only outputing a PDF, lack of templates, etc).

Just after nearing the end of initially creating cv-Lo I learned about an intriguing and incredibly promising looking project called [JSON Resume](https://jsonresume.org/). There's currently don't have a Trello import but it'd be cool to adapt cv-Lo to export JSON Resume friendly JSON to then use with it. This is on the todo list. 

One could simply export json from Trello. But a blob of json isn't, of course, a finished resume. If you have a premium plan you can export a CSV file, but that's also not a finished resume. Wouldn't it be cool to be able to export some type of word-based document from Trello (just a thought)?

There's also Zapier. I created a zap to sync my Trello resume board with my Google drive. It works. But I still wanted to create cv-Lo :) *PS: if you don't have a Zapier account and want one we'll both benefit if you [signup with this link](http://zpr.io/z45i), just sayin'.*

And there are other open source projects. At least I found one other. It's written in Python and has a pretty sweet name, [Trelloscribe](https://github.com/mcktrtl/trelloscribe).

## Motivation

I use Trello for lots of things (and like it a lot). As I was recently polishing-up my resume, I naturally decided to organize things in Trello. Naturally, an "itch" occurred. "There needs to be an easy way to move my resume info from Trello to a word document and/or PDF," I thought. A few days later: cv-Lo. 

## An Exercise / Proof-of-concept

While cv-Lo is public facing and fully functioning, I built this mostly for myself (and anyone else who might find it handy). On top of wanting to "scratch my own itch" I also wanted a simple project to start working with React.js. The implementation is basic and there's certainly room for improvement, but I sure learned a lot through building it.

*Use it or otherwise generally find it helpful?* Awesome.  
*Want to contribute and make it better?* Sweet.  

## TODO: 

- Add state (urls for each step).
- Add animations.
- Integrate (somehow) with [JSON Resume](https://jsonresume.org/). At the least with a "view/download JSON Resume friendly json" feature.
- Consider adding client-side Trello auth to allow users to upload private boards. SSL would then be a good thing.
- Create an "upload to Google docs" feature, especially valuable since the returned "product" would be easily editable (in contrast to PDFs).
- Better architect the data flow/store (rather than passing data through props, integrate with a proper store). Weigh the benefits of this with the time needed/scope of project.
- Themes, styles, features. 
