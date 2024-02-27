// ==UserScript==
// @name         ZenHub: Redirect from issue to GitHub issue
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Redirect from Zenhub issue to GitHub issue
// @author       Brendan Weibrecht
// @match        https://app.zenhub.com/workspaces/*/issues/*
// @grant        none
// @run-at       document-start
// @icon         https://app.zenhub.com/dist/favicon/apple-touch-icon.png
// ==/UserScript==

(function() {
    'use strict';

//     const redirect = () => {
//         const link = document.querySelector('.zhc-view-issue-link')
//         if (link) {
//             window.location = link.href
//         } else {
//             setTimeout(redirect, 10)
//         }
//     }
//
//     redirect()

    const matches = window.location.href.match(new RegExp(".*/issues/gh/(?<org>[^/]+)/(?<repo>[^/]+)/(?<issue>[0-9]+)")).groups
    window.location = `https://github.com/${matches.org}/${matches.repo}/issues/${matches.issue}`
})();
