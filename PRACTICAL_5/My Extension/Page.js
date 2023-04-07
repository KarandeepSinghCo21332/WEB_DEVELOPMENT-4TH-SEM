function downloadPage() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.downloads.download({
      url: tab.url,
      filename: tab.title + ".html"
    });
  });
}

document.getElementById("download").addEventListener("click", downloadPage);
