# restaurant-reviews-app

Project 6 for FEND Udacity

## Project Overview

For the Restaurant Reviews projects, you will incrementally convert a static webpage to a mobile-ready web application. In Stage One, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also begin converting this to a Progressive Web Application by caching some assets for offline use.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

[Udacity repo is available here](https://github.com/udacity/mws-restaurant-stage-1)

## How to run this app

Clone or download this repo project to your local machine, unzip and serve up a HTTP server and open up index.html in local host port 5500.  I used Visual studio code which will serve up a live server for you.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to place `<your OWN MAPBOX API KEY>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use.


### Requirements

* Make the provided site fully responsive.
All of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

* Make the site accessible.
Using what you've learned about web accessibility, ensure that alt attributes are present and descriptive for images. Add screen-reader-only attributes when appropriate to add useful supplementary text. Use semantic markup where possible, and aria attributes when semantic markup is not feasible.

* Cache the static site for offline use.
Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.

#### Responsive Design

* Is the site UI compatible with a range of display sizes?

* All content is responsive and displays on a range of display sizes.

* Content should make use of available screen real estate and should display correctly at all screen sizes.

* An image's associated title and text renders next to the image in all viewport sizes.

* Are images responsive?

* Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

* Are application elements visible and usable in all viewports?

* On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

#### Accessibility

* Are images accessible?

* All content-related images include appropriate alternate text that clearly describes the content of the image.

* Is focus used appropriately to allow easy navigation of the site?

* Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

* Are site elements defined semantically?

* Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

#### Offline Availability

* Are pages that have been visited available offline?

* When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

### License

This is a project for Udacity and is believed to use a [MIT License](https://opensource.org/licenses/MIT).

[Udacity repo is available here](https://github.com/udacity/mws-restaurant-stage-1)