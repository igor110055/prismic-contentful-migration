### FOR THE ID

The resulting string will be twice as long as the random bytes you generate; each byte encoded to hex is 2 characters. 20 bytes will be 40 characters of hex.

var crypto = require("crypto");
var id = crypto.randomBytes(20).toString('hex');

Will need to create an entry ID and an SEO entry ID at the top of the function

As well as asset IDs

User ID "id": "1FOB32e06VuonhXCIGonv1"
