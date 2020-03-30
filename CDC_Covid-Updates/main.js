// URL provided by Tim for challenge
const CDC_FEED_URL = `https://tools.cdc.gov/medialibrary/index.aspx#/feed/id/403372`;
// URL found by reading CDC api documentation
const CDC_COVID_API = `https://tools.cdc.gov/api/v2/resources/media?topic=coronavirus`;

async function getCDCFeed() {
    const response = await fetch(CDC_COVID_API);
    const data = await response.json();
    console.log(data);
};

getCDCFeed();

// fetch(CDC_RSS_URL)
//     .then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, `text/xml`))
//     .then(data => console.log(data))


