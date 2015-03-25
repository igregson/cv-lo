## cv-Lo

I use Trello for lots of things (and like it a lot). As I was recently polishing-up my resume, I naturally decided to organize things in Trello. Naturally, an "itch" occurred. "There needs to be an easy way to move my resume info from Trello to a word document and/or PDF," I thought. A few days later: cv-Lo. 

### Usage

#### On the Trello side

Create a board, make it public. It has to be public for cv-Lo to upload it (see todo item for thoughts on client-side auth). 

Board organization is opinionated only as much as necessary: 

- name your board whatever you'd like. 
- each list will become a "section" of your resume. 
- each list item ("cards" in Trello talk) will be an entry for that section.
- add descriptions to list items if you'd like. These can be have bullets and stuff if you'd like (Trello supports Markdown).

> Tip: Your board only has to be public for uploading it to cv-Lo, meaning it's super easy to toggle between private/public if you don't want your trello resume board to be public. 


#### On the cv-Lo side

Just click, paste, view, download, and all the rest that you'd expect with a public-facing project.

### Aren't there other ways to do this?

Yes, of course. And cv-Lo isn't necessarily the best. Especially with its current limitations (like only being able to output a not-easily-editable PDF and not having more than one default style).

Perhaps the easiest would be to simply export json from Trello. But a blob of json isn't, of course, a finished resume. If you have a premium plan you can export a CSV file, but that's also not a finished resume. Wouldn't it be cool to be able to export some type of word-based document from Trello (just a thought)?

There's Zapier. I created a zap to sync my Trello resume board with my Google drive. And it works. But I still wanted to create cv-Lo :) *PS: if you don't have a Zapier account and want one we'll both benefit if you [signup with this link](http://zpr.io/z45i), just sayin'.*

And there are other open source projects. At least I found one other. It's written in Python and has a pretty sweet name, [Trelloscribe](https://github.com/mcktrtl/trelloscribe).

### TODO: 
- Create an "upload to Google docs" feature, especially valuable since the returned "product" would be easily editable (in contrast to PDFs).
- Better architect the data flow/store (rather than passing data through props, integrate with a proper store). Weigh the benefits of this with the time needed/scope of project.
- Consider adding client-side Trello auth to allow users to upload private boards. If doing this, the site would need to move to SSL.
- Add state (urls for each step).
- Figure out better approach to sharing instructions... noone wants to read lots of bullets when trying to use a simple tool.