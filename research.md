RESEARCH.MD FILE CONTAINING QUESTION AND ANSWERS:

1) What is a Cloudflare Worker?

Cloudflare Workers are serverless JavaScript functions that run on Cloudflare's global edge network, allowing developers to execute code closer to users without managing physical servers.


3) How does a Worker handle HTTP requests and return responses?
   
A Worker intercepts HTTP requests, processes them with JavaScript and returns the response objects that can include headers, status codes, and body content etc.

4) What is Cloudflare D1? What are some pros and cons of using it?

Cloudflare D1 is a serverless SQL database built on SQLite that runs on Cloudflare's edge network. Pros include low latency, zero maintenance, and tight integration with Workers; cons include limited query complexity, storage constraints, and potential cold start issues.

4)How does client-side JavaScript call an external API?

Client-side JavaScript calls external APIs using the Fetch API or XMLHttpRequest to make HTTP requests, handling the returned callbacks to process the response data asynchronously.

5) What is the benefit of deploying APIs to the edge instead of traditional servers?

Deploying APIs to the edge reduces latency by positioning compute resources closer to users globally, improves reliability through distributed infrastructure, and often scales automatically without the operational complexity of traditional servers, it may also save developers money. 
