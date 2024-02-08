chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.startsWith("https://www.example.com/")) {
        chrome.pageAction.setIcon({
            tabId: tabId,
            path: {
                "16": "/images/hapara/16.png", // testing changing icons depending on conditons. 
                "48": "/images/hapara/48.png",
                "128": "/images/hapara/128.png"
            }
        });
        chrome.pageAction.show(tabId);
    }
});
