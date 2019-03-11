# Pippa Library
An open source library to parse podcast players, platforms, and devices—and to identify bots—from HTTP requests.


### Devices detection

```
const { Devices } = require('pippa_library);
const device = Devices.labelizeUserAgent('AppleCoreMedia/1.0.0.14D27 (iPhone; U; CPU OS 10_2_1 like Mac OS X; en_us)');

console.log(device); # { device: mobile, platform: iPhone, player: 'Apple Podcast' }
```

### Tagging

- update the version in package.json, following the semver standard
- tag the commit: `git tag -a vx.x.x -m "Releasing version vx.x.x"`
- push the tag: `git push origin --tags`


<hr>

## ISC License (ISC)
Copyright 2019 Pippa, Inc.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
