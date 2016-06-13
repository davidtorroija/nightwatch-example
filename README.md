# nightwatch-example
Example of the library nightwatch to create automated tests
## Build Status

## Installing 
```npm install``` 

## Running 
```npm test```

##Help?
contact me davidtorroija@gmail.com

## Common Errors
If you receive this error:

```11:01:38.710 INFO - Launching a standalone Selenium Server
Setting system property webdriver.chrome.driver to ./node_modules/chromedriver/bin/chromedriver
11:01:38.745 INFO - Java: Oracle Corporation 25.60-b23
11:01:38.745 INFO - OS: Mac OS X 10.10.5 x86_64
11:01:38.755 INFO - v2.53.0, with Core v2.53.0. Built from revision 35ae25b
11:01:38.818 INFO - Driver provider org.openqa.selenium.ie.InternetExplorerDriver registration is skipped:
registration capabilities Capabilities [{ensureCleanSession=true, browserName=internet explorer, version=, platform=WINDOWS}] does not match the current platform MAC
11:01:38.819 INFO - Driver provider org.openqa.selenium.edge.EdgeDriver registration is skipped:
registration capabilities Capabilities [{browserName=MicrosoftEdge, version=, platform=WINDOWS}] does not match the current platform MAC
11:01:38.819 INFO - Driver class not found: com.opera.core.systems.OperaDriver
11:01:38.819 INFO - Driver provider com.opera.core.systems.OperaDriver is not registered
11:01:38.821 INFO - Driver class not found: org.openqa.selenium.htmlunit.HtmlUnitDriver
11:01:38.821 INFO - Driver provider org.openqa.selenium.htmlunit.HtmlUnitDriver is not registered
11:01:38.874 WARN - Failed to start: SocketListener0@0.0.0.0:4444
java.net.BindException: Selenium is already running on port 4444. Or some other service is.
	at org.openqa.selenium.server.SeleniumServer.start(SeleniumServer.java:509)
	at org.openqa.selenium.server.SeleniumServer.boot(SeleniumServer.java:321)
	at org.openqa.selenium.server.SeleniumServer.main(SeleniumServer.java:240)
	at org.openqa.grid.selenium.GridLauncher$1.launch(GridLauncher.java:58)
	at org.openqa.grid.selenium.GridLauncher.main(GridLauncher.java:127)
```

You need to kill the java proccess and run the tests again