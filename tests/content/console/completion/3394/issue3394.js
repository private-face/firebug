function runTest()
{
    FBTest.sysout("issue3394.START");
    FBTest.openNewTab(basePath + "console/completion/3394/issue3394.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.enableConsolePanel(function(win)
        {
            var panel = FW.Firebug.chrome.selectPanel("console");

            FBTest.clearAndTypeCommand("loc");
            FBTest.synthesizeKey("VK_TAB", null, win); // 9 == tab

            var doc = FW.Firebug.chrome.window.document;
            var cmdLine = doc.getElementById("fbCommandLine");
            FBTest.compare(/^location/, cmdLine.value,
                "The autocomplete must produce: /^location/");

            FBTest.testDone("issue3394.DONE");
        });
    });
}
