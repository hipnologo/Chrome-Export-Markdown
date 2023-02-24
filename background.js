chrome.contextMenus.create({
    title: "Save to Markdown",
    contexts: ["selection"],
    onclick: function(info, tab) {
      var text = info.selectionText;
      var date = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
      var filename = tab.title.replace(/[/\\?%*:|"<>]/g, '_') + '_' + date + '.md'; // Replace invalid characters in title with underscores
      var blob = new Blob([text], {type: "text/markdown"});
      chrome.downloads.download({
        url: URL.createObjectURL(blob),
        filename: filename,
        saveAs: true
      });
    }
  });  