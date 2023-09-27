//your JS code here. If required.
const navigator = window.navigator;
const AgentName = navigator.userAgent;
const browserName = navigator.appName;
const version = navigator.appVersion;

const div = document.getElementById("browser-info");
div.innerText = "You are using "+browserName+" version "+version;