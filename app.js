// ==UserScript==
// @name        SalesForce Map ID to User
// @namespace   https://github.com/forest2087/MapSFtoJIRA
// @author      Forest Wang <forest2087@gmail.com>
// @description SalesForce Map ID to User
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @include     https://eventsnetwork.atlassian.net/*
// @version     1
// @update      https://raw.githubusercontent.com/forest2087/MapSFtoJIRA/master/app.js
// @updateURL       https://raw.githubusercontent.com/forest2087/MapSFtoJIRA/master/app.js
// @downloadURL     https://raw.githubusercontent.com/forest2087/MapSFtoJIRA/master/app.js
// @grant       none
// ==/UserScript==

var replaced = $("body").html().replace('00G500000021yC4EAI', 'Client Support Queue');
var replaced = replaced.replace(/005500000034n93\w{3,}/, 'Alemdar, Ismail');
var replaced = replaced.replace(/005500000034n93\w{3,}/, 'Alemdar, Ismail');
var replaced = replaced.replace(/00550000003yTZm\w{3,}/, 'Almendares, Francisco');
var replaced = replaced.replace(/005500000034C90\w{3,}/, 'Brannam, Jessica');
var replaced = replaced.replace(/005500000035aSV\w{3,}/, 'Brazeau, Sebastien');
var replaced = replaced.replace(/005500000034vX3\w{3,}/, 'Charlebois, Ashley');
var replaced = replaced.replace(/005500000033qGO\w{3,}/, 'Chatter Expert');
var replaced = replaced.replace(/005500000036Kv8\w{3,}/, 'Conway, Valerie');
var replaced = replaced.replace(/00550000003wfCQ\w{3,}/, 'Fenn, Chris');
var replaced = replaced.replace(/005500000035ZTS\w{3,}/, 'Flanagan, Sarah');
var replaced = replaced.replace(/0055000000347om\w{3,}/, 'Fradette, Isabelle');
var replaced = replaced.replace(/005500000034m6r\w{3,}/, 'Genereux, Lawrence');
var replaced = replaced.replace(/00550000003y92i\w{3,}/, 'Greenaway, Scott');
var replaced = replaced.replace(/00550000003xgt4\w{3,}/, 'Hastie, Jenni');
var replaced = replaced.replace(/00550000003yTVu\w{3,}/, 'Horton, Adam');
var replaced = replaced.replace(/005500000033yKJ\w{3,}/, 'Hueston, Shannon');
var replaced = replaced.replace(/00550000003yfFZ\w{3,}/, 'JIRA_CONNECTOR');
var replaced = replaced.replace(/005500000034nTw\w{3,}/, 'Johnson, Alexa');
var replaced = replaced.replace(/00550000003gp16\w{3,}/, 'Kott, Conrad');
var replaced = replaced.replace(/005500000033zo0\w{3,}/, 'Kvasnica, Andrea');
var replaced = replaced.replace(/005500000035DzP\w{3,}/, 'Mayost, Gabriel');
var replaced = replaced.replace(/00550000003xULU\w{3,}/, 'Mazza, Steve');
var replaced = replaced.replace(/005500000035n7u\w{3,}/, 'McArdle, Francis');
var replaced = replaced.replace(/005500000036Hg0\w{3,}/, 'Nahas, Amal');
var replaced = replaced.replace(/005500000034nT3\w{3,}/, 'Piche, Lise');
var replaced = replaced.replace(/00550000003x6rW\w{3,}/, 'Reilly, Mike');
var replaced = replaced.replace(/005500000034nU6\w{3,}/, 'Ricard, Mandy');
var replaced = replaced.replace(/005500000034nvS\w{3,}/, 'Ricottone, David');
var replaced = replaced.replace(/005500000034nUB\w{3,}/, 'Roberts, Veronique');
var replaced = replaced.replace(/005500000034nTc\w{3,}/, 'Sanio, Martin');
var replaced = replaced.replace(/005500000034nTh\w{3,}/, 'Song-Ledlow, Esther');
var replaced = replaced.replace(/005500000034nTr\w{3,}/, 'Séguin, Geneviève');
var replaced = replaced.replace(/00550000003hOFc\w{3,}/, 'Thesing, Steve');
var replaced = replaced.replace(/005500000034mey\w{3,}/, 'Trent, Josh');
var replaced = replaced.replace(/005500000035MGi\w{3,}/, 'Wilby, Ash');
var replaced = replaced.replace(/005500000033qGJ\w{3,}/, 'Zattolo, Julie');
$("body").html(replaced);
