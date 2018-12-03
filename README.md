# Pippa Library

### Devices detection

```
const { Devices } = require('pippa_library);
const device = Devices.labelizeUserAgent('AppleCoreMedia/1.0.0.14D27 (iPhone; U; CPU OS 10_2_1 like Mac OS X; en_us)');

console.log(device); # { device: mobile, platform: iPhone, player: 'Apple Podcast' }
```