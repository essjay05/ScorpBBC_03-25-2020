const CDC_RSS_URL = `https://tools.cdc.gov/medialibrary/index.aspx#/feed/id/403372`;

fetch(CDC_RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, `text/xml`))
    .then(data => console.log(data))