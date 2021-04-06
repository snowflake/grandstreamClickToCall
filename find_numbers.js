// github/jabelone code modified by github/snowflake 5 April 2021

var anchors = document.getElementsByTagName("a");

for(let i = 0, len = anchors.length; i < len; i++) {
    if(anchors[i].getAttribute("href").startsWith("tel:")) {
        xtel = anchors[i].getAttribute("href").split(":").pop();
	console.log("Grandstream CTC: original tel = " + xtel);
	xtel = xtel.replace(/-/g,"");
	// 00 is International Dialling prefix in United Kingdom  
	let tel = xtel.replace(/^\+/,"00"); 
        console.log("Grandstream CTC: Replaced " + tel);
        anchors[i].setAttribute("href", "#");

        anchors[i].onclick = function () {
            console.log("Grandstream CTC: Calling " + tel);
            chrome.runtime.sendMessage(tel);
        }
    }
}


