const CDC_RSS_URL = `https://tools.cdc.gov/api/v2/resources/media/403372.rss`;

fetch(CDC_RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, `text/xml`))
    .then(data => console.log(data))