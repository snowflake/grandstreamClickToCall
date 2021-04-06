// github/jabelone code modified by github/snowflake 5 April 2021

var anchors = document.getElementsByTagName("a");

for(let i = 0, len = anchors.length; i < len; i++) {
    if(anchors[i].getAttribute("href").startsWith("tel:")) {
        let tel = anchors[i].getAttribute("href").split(":").pop();
	console.log("Grandstream CTC: original tel = " + tel);
	tel = tel.replace(/-/g,"");
	tel = tel.replace(/^\+/,"00"); // 00 is International Dialling prefix in United Kingdom  
        console.log("Grandstream CTC: Replaced " + tel);
        anchors[i].setAttribute("href", "#");

        anchors[i].onclick = function () {
            console.log("Grandstream CTC: Calling " + tel);
            chrome.runtime.sendMessage(tel);
        }
    }
}


