function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 10;

    console.log("Requesting: " + url);

    setTimeout(function() {
        cb(fake_responses[url]);
    }, randomDelay);
}

function output(text) {
    console.log(text);
}

// *****************************************
// The old-n-busted callback way

function getFile(file) {
    fakeAjax(file, function(text) {
        // what to do here?
    });
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");