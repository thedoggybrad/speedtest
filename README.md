<img src="resources/favicon.png" alt="LOGO" width="64"  height="64">

# Real SpeedTest
Test your internet connection for download speed and latency in real life usage.

## Introduction
A Speedtest from a speedtest service provider may not provide 100% real usage accuracy. Yes, it is accurate but the speedtest servers are only used for speedtesting. What will happen if you tested the real multi-purpose used website server? Then, try Real Speedtest to find out.

## How it works?
It uses the Github pages' server (which is used by many open-source projects) to test your download speed using a 14.7MB image file, so that we can see what is your download speed in real usage accurately. The Latency test is using jQuery and JavaScript to measure the latency from Yessle (A Indepent Search Engine), and the results are served accurately. The Latency test is using jQuery and JavaScript to measure the latency from Yessle (A Indepent Search Engine), so that we can measure an average website that can give the results we wanted.

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

## Definition of Terms
•Download Speed - is the speed of transfer from the server to the client, measured in Megabits per secons (MBPS).
<br>
<br>
•Upload Speed - is the speed of transfer from the client to the server, measured in Megabits per secons (MBPS). 
<br>
<br>
•Latency - is the measure of the delay time from the client to the server, measured in miliseconds (ms).
<br>
<br>
•Server - it is where a service in the internet (like websites and email services) are hosted.
<br>
<br>
•Client - is the device of the costumer that uses the specific service that gets the information from the server.

## Unimplemented Feature(s)
•Measuring Upload Speed - This feature is very hard to implement as we will need a server that will accept the uploads and a PHP Script. We do not have PHP Support in Github Pages, but geting a stable one for free is impossible. I am planning to implement this, but I might have some hard time on doing this.
<br>
<br>
•Measuring Packet Loss - This feature is very impossible to implement as we will need a very stable server that will feed the results after on. As "Loss" could not be counted if there is no very stable server. It is impossible to do on JavaScript, so it will never be implemented.
