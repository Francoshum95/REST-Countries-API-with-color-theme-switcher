## Frontendmentor - challenge 
https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca


The difficult part is to optimize the performance. I implement caching to reduce API call and hashMap to optimize efficiency:

I cached the countries data to localStorage as country data not constitance change. Before I storage the data, I use a .map() to map out unuse field to reduce memory usage, and create an hashMap to storage a pair for country code and country name for using in border country in country page