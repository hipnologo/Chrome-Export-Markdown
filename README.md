## Save to Markdown Chrome Extension

This is a Chrome extension that allows you to save selected text to a Markdown file. When you right-click on a selection of text, you'll see an option in the context menu to "Save to Markdown". Clicking on that option will save the selected text as a Markdown file.

### Installation

To install this extension:

1. Download the source code from this repository.
2. Open Google Chrome and go to the Extensions page (chrome://extensions).
3. Enable Developer Mode by clicking the toggle switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you downloaded the source code.
5. The extension should now be installed and ready to use.

### Usage

To use this extension:

1. Select some text on a webpage.
2. Right-click on the selected text to open the context menu.
3. Click on the "Save to Markdown" option.
4. A Markdown file will be downloaded to your computer with the selected text as its contents.

### Explanation of the code

The core functionality of the extension is implemented in `background.js`. 
The chrome.contextMenus.create() method is used to create the context menu option with the following options:

title: The text that will be displayed in the context menu.
contexts: The contexts in which the option should be displayed. In this case, it will be displayed when the user selects text.
onclick: The function that will be called when the user clicks the context menu option.
The onclick function will do the following:

Get the selected text using info.selectionText.
Get the current date in YYYY-MM-DD format using new Date().toISOString().slice(0, 10).
Replace any invalid characters in the page title with underscores to create a valid filename.
Create a Blob object with the selected text as its contents and the MIME type "text/markdown".
Use chrome.downloads.download() to download the Blob object as a file with the specified filename and with the "Save As" dialog box displayed.
The manifest.json file contains metadata about the extension, including its name, version, description, permissions, and icon.
