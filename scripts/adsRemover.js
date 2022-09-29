// ==UserScript==
// @name         Surviv.io | Ads block & Remove annyoing "Account found" pop-up
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Free experience Surviv premium.
// @author       sk
// @match        https://surviv.io
// @match        https://surviv.io/*
// @grant        none
// ==/UserScript==
 
["#modal-account-found",".ad-block-left-bottom",".ad-block-med-rect",".ad-block-leaderboard-bottom","#ui-spectate-ad-container-desktop","#ui-spectate-video-ad-container-desktop","#ui-stats-ad-container-desktop"].forEach(x=>document.querySelector(x).remove());