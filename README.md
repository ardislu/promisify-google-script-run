# promisify-google-script-run

This is a minimal demonstration on wrapping [Google Apps Script (GAS)](https://www.google.com/script/start/)'s client-side [`google.script.run`](https://developers.google.com/apps-script/guides/html/reference/run) JavaScript API to use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

[Click here to copy the demo Google Sheet](https://docs.google.com/spreadsheets/d/1ofsND8UEWM4XY0-K0LFiHq0RIBz2IC2AlImfO9VOojU/copy) (all required code will be copied with the spreadsheet).

## Examples

### Simple call

Using callbacks (`google.script.run`):

```javascript
google.script.run
  .withSuccessHandler(console.log)
  .getString();
```

Using promises (`googleScriptAsync`):

```javascript
await googleScriptAsync.getString()
  .then(console.log);
```

### Chained calls

Using callbacks (`google.script.run`):

```javascript
google.script.run.withSuccessHandler(str =>
  google.script.run.withSuccessHandler(str =>
    google.script.run.withSuccessHandler(console.log)
      .mirror(str)
    ).mirror(str)
  ).getString();
```

Using promises (`googleScriptAsync`):

```javascript
await googleScriptAsync.getString()
  .then(googleScriptAsync.mirror)
  .then(googleScriptAsync.mirror)
  .then(console.log);
```
