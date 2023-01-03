<img src="resources/favicon.png" alt="LOGO" width="64"  height="64">

# Real SpeedTest
Know what is your download speed in real everyday usage, like when you are downloading things online.

## Introduction
A Speedtest from a speedtest service provider may not provide 100% real usage accuracy. Yes, it is accurate but the speedtest servers are only used for speedtesting. What will happen if you tested the real multi-purpose used website server? Then, try Real Speedtest to find out.

## How it works?
It uses the github pages' server (which is used by many open-source projects) to the test your download speed using a 14.7MB image file. So that we can see what is your download speed in real usage. No optimizations is applied, so that we can see the real values. Values are measured using JavaScript.

## Why the results are changing and so unstable sometimes?
The results are changing every test because the load on the Github's server is changing and also your internet connection speed to the Github's server is changing.
<br>
That is why when you are using your internet connection to browse the web even your internet connection is 50MBPS and some websites are too slow because the servers of every website are not the same, both in distance and in their hardware specifications.

## Accuracy
When you compare a normal speedtest tool, the result here and the result from the speeedtest tool will not match.
<br>
This will not match because the speedtest tool targets the maximum potential, but this tool targets the real usage when you download from the web or browse the web.
<br>
This speedtest tool demonstrates the scenario of a real webserver used for our daily web browsing.
<br>
Thus, making this tool 100% accurate on your daily usage of the internet.

## Download
This is tested by the use of test.jpg here in this repository. Then, the JavaScript calculates the download speed then it is done.
## Upload and Latency
•Upload - It requires PHP to be tested, where the upload will be done?, because Github Pages only supports static sites. This is impossible to implement unless we will have an access to PHP on Github in the future.
<br>
<br>
•Latency - 	~~This feature is not impossible to implement, but it will need some work. Maybe, it will come sooner or later.~~ Now Supported as a BETA
