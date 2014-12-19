Errata
===

Unit 1
---

Robert Zehnder reminded me that a lot of people leave off the http: in front of CDN users so that it works over both http and https. That's a good idea and one I should have mentioned.

Unit 5 Ajax
---

When talking about using JSON/P, I make the statement that we aren't making a HTTP request
to GitHub when using JSON/P. Technically we still are. If you add an image to the DOM via jQuery then
you end up making a HTTP request to load that image. I think most people though would consider that
different than $.get though.