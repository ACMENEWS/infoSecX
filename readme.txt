Visuals 
Example
https://oasis-open.github.io/cti-stix-visualization/?url=https://raw.githubusercontent.com/oasis-open/cti-stix-visualization/master/test.json
code
https://oasis-open.github.io/cti-stix-visualization/
https://github.com/oasis-open/cti-stix-visualization


https://oasis-open.github.io/cti-documentation/resources


schema
https://github.com/oasis-open/cti-stix2-json-schemas
https://github.com/oasis-open/cti-stix2-json-schemas/tree/b67a516ac1b9d67195b9ef817f07b027b1597941


virustotal API intigrations
https://www.virustotal.com/en/documentation/public-api/#getting-domain-reports
node
https://www.npmjs.com/package/node-virustotal

Palo Alto API
https://www.npmjs.com/package/node-virustotal
https://www.paloaltonetworks.com/documentation/71/wildfire/wf_api/submit-files-and-links-through-the-wildfire-api/submit-a-website-link-to-wildfire-api
https://www.paloaltonetworks.com/documentation/wildfire-api  -- version 8.0
https://www.paloaltonetworks.com/documentation/80/wildfire/wf_api/about-the-wildfire-api/wildfire-api-resources#id9a6964c8-c64f-49f4-8258-2f31fe0938d4
https://www.paloaltonetworks.com/documentation/80/wildfire/wf_api/submit-files-and-links-through-the-wildfire-api/submit-a-local-file-to-wildfire-api#idee6e82be-eaa8-4d9e-8b7c-e7fb928cee92


curl -F 'apikey=b0e0e395614d46170ee7498452967c71' -F 'link=https://www.paloaltonetworks.com/' 'https://wildfire.paloaltonetworks.com/publicapi/submit/link'

curl -F 'apikey=b0e0e395614d46170ee7498452967c71'
-F 'file=@c:\pdf.pdf' 'https://wildfire.paloaltonetworks.com/publicapi/submit/file'


Submit Multiple Website Links to WildFire (API)
Use this resource to submit multiple website URLs (up to 1000) for WildFire analysis. This resource is preferable when you have a large list of URLs to be analyzed.
/submit/links/

Local path to text file that contains up to 1000 URLs
curl
-F 'apikey=b0e0e395614d46170ee7498452967c71' -F 'file=@websitelist.txt' 'https://wildfire.paloaltonetworks.com/publicapi/submit/links'

From the source parent folder https://www.npmjs.com/package/shodan-client
npm i shodan-client

