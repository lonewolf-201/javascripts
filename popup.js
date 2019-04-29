let param = {
	active: true,
	currentWindow: true

}
chrome.tabs.query(param, gotTabs);
function gotTabs(tabs){
	console.log(tabs[0].url);
}
