// URL provided by Tim for challenge
const CDC_FEED_URL = `https://tools.cdc.gov/medialibrary/index.aspx#/feed/id/403372`;
// URL found by reading CDC api documentation
const CDC_COVID_API = `https://tools.cdc.gov/api/v2/resources/media?topic=coronavirus`;

// Async function to tet CDC Covid API back as json (WORKS)
// async function getCovidData() {
//     const response = await fetch(CDC_COVID_API);
//     const data = await response.json();
//     console.log(data);
// };
// getCovidData();

// Fetch function to retrieve CDC Covid Feed
async function getCDCFeed() {
    const response = await fetch(CDC_FEED_URL);
    const data = await response.json();
    console.log(data);
};
getCDCFeed();


