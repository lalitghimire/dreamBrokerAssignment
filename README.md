## Programming Assignment from Dream Broker

Link to the assignment: https://challenge.dreambroker.jobs/245768c7-b82f-4a77-abbc-d1214acf7163.

### Task

#### Implement an endpoint to analyze text. Curl command to call your API might look like this:

`curl --header "Content-Type: application/json" --request POST --data '{"text":"hello 2 times "}' https://mysuperawesomeapi.com/analyze`

#### And the response should be:

```
{
"textLength":{"withSpaces":15,"withoutSpaces":11},
"wordCount":3,
"characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
}
```
