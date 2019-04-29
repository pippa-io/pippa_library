const chai = require('chai');
const expect = chai.expect;
const Utils = require('../src/devices');

module.exports = () => {

    describe('labelizeUserAgent', () => {

        const userAgents = [
            ['AppleCoreMedia/1.0.0.14D27 (iPhone; U; CPU OS 10_2_1 like Mac OS X; en_us)', ['mobile', 'iPhone', 'Apple Podcast']],
            ['AppleCoreMedia/1.0.0.13G36 (iPad; U; CPU OS 9_3_5 like Mac OS X; en_us)', ['tablet', 'iPad', 'Apple Podcast']],
            ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:49.0) Gecko/20100101 Firefox/49.0 (FlipboardProxy/1.2; +http://flipboard.com/browserproxy)', ['desktop', 'mac', 'Web Browser']],
            ['Overcast/3.0 (+http://overcast.fm/; iOS podcast app)', ['mobile', 'iPhone', 'Overcast']],
            ['Pocket Casts', ['mobile', null, 'Pocket Casts']],
            ['Stitcher/iOS', ['mobile', 'iPhone', 'Stitcher']],
            ['"Podcasts/2.4","iOS Podcasts",9741', ['mobile', 'iPhone', 'Apple Podcast']],
            ['Stitcher/Android', ['mobile', 'android', 'Stitcher']],
            ['Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', ['desktop', 'windows', 'Web Browser']],
            ['Mozilla/5.0 (Linux; U; en-us; BeyondPod 4)', ['desktop', 'linux', 'Beyond Pod']],
            ['iTunes/12.6 (Macintosh; OS X 10.12.4) AppleWebKit/603.1.30.0.34', ['desktop', 'mac', 'iTunes']],
            ['Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1', ['mobile', 'iPhone', 'Web Browser']],
            ['PodcastAddict/v2 - Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G900V Build/MMB29M)', ['mobile', 'android', 'PodcastAddict']],
            ['itunesstored/1.0 iOS/10.2.1 model/iPhone7,2 hwp/t7000 build/14D27 (6; dt:106)', ['mobile', 'iPhone', 'Apple Podcast']],
            ['NPROneAndroid', ['mobile', 'android', 'NPROne']],
            ['PodcastAddict/v2 - Dalvik/2.1.0 (Linux; U; Android 7.0; SM-G930P Build/NRD90M)', ['mobile', 'android', 'PodcastAddict']],
            ['Mozilla/5.0 (X11; CrOS x86_64 7978.76.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.104 Safari/537.36', ['desktop', null, 'Web Browser']],
            ['Mozilla/5.0 (compatible; Google-Podcast)', ['desktop', null, 'Google Play']],
            ['iTunes/12.5.5 (Windows; Microsoft Windows 10.0 x64 Home Premium Edition (Build 14393); x64) AppleWebKit/7602.4008.0.22', ['desktop', 'windows', 'iTunes']],
            ['Samsung SM-G900V stagefright/Beyonce/1.1.9 (Linux;Android 6.0.1)', ['mobile', 'android', 'Native Player']],
            ['Podbean/Android App 1.0.0 (http://podbean.com),405385a3f3ae718f494aa25eb1a3e95', ['mobile', 'android', 'Podbean']],
            ['Downcast/2.9.16 (iPhone; iOS 10.2.1; Scale/2.00)', ['mobile', 'iPhone', 'Downcast']],
            ['Dalvik/2.1.0 (Linux; U; Android 6.0.1; HTC Desire 820 Build/MMB29M)', ['mobile', 'android', null]],
            ['NPR%20One/13 CFNetwork/811.4.18 Darwin/16.5.0', [null, null, 'NPROne']],
            ['RadioPublic Android 1.3.32', ['mobile', 'android', 'RadioPublic']],
            ['Sonos', ['Sonos', 'Sonos', 'Sonos']],
            ['LibVLC/2.0.1 (Linux; U; Android 7.0;hero2qltespr/NRD90M)', ['mobile', 'android', 'vlc']],
            ['Downcast/2.9.16 (Mac OS X Version 10.11.6 (Build 15G31))', ['desktop', 'mac', 'Downcast']],
            ['AntennaPod/1.3.1', ['mobile', 'android', 'AntennaPod']],
            ['AppleCoreMedia/1.0.0.11D258 (Apple TV; U; CPU OS 7_1_2 like Mac OS X; fr_fr)', ['Apple TV', 'mac', 'Apple Podcast']],
            ['Breaker/25 CFNetwork/808.3 Darwin/16.3.0', [null, null, 'Breaker']],
            ['CastBox/5.1.2-170224054.r3798c73', ['mobile', 'android', 'CastBox']],
            ['Instacast/2685 CFNetwork/811.4.18 Darwin/16.5.0', ['mobile', 'iPhone', 'Instacast']],
            ['Player FM', ['mobile', 'android', 'Player FM']],
            ['Player FM BMID/E678F74033', ['mobile', 'android', 'Player FM']],
            ['NSPlayer/10.0.0.3702 WMFSDK/10.0', ['desktop', 'windows', 'Windows Media Player']],
            ['doubleTwist CloudPlayer', ['mobile', 'android', 'doubleTwist CloudPlayer']],
            ['Bose/7.22.0', ['Bose', 'Bose', 'Bose']],
            ['Podkicker/2.3.3', ['mobile', 'android', 'Podkicker']],

            ['AlexaMediaPlayer/5.1.1-272.5.9.9_user_599473420 (Linux;Android 5.1.1) ExoPlayerLib/1.5.9', ['Smart Speakers', 'Amazon', 'Echo Dot']],
            ['AlexaMediaPlayer/1.0.2353.0_16xxxxxx (Linux;Android 5.1.1) ExoPlayerLib/1.5.9', ['Smart Speakers', 'Amazon', 'Alexa']],
            ['AlexaMediaPlayer/16.3.0.100 (Linux;Android 7.0) ExoPlayerLib/1.5.9', ['Smart Speakers', 'Amazon', 'Alexa']],
            ['Echo/1.0(APNG)', ['Smart Speakers', 'Amazon', 'Echo']],

            ['Google-Speech-Actions', ['Smart Speakers', 'Google', 'Google Assistant - speech actions']],
            ['GoogleChirp', ['Smart Speakers', 'Google', 'Google Podcasts']],

            ['Roku/DVP-8.0 (048.00Exxxxxx)', ['Smart Speakers', 'Roku', 'Roku 3 TV stick']],


            ['RSSRadio/9186', [null, null, 'RSS Radio']],
            ['Castro 2 Episode Download', ['mobile', 'iPhone', 'Castro']],
            ['Zune/4.8', [null, 'windows', 'Zune']],
            ['Apache-HttpClient/4.5.3 (Java/1.8.0_65)', [null, null, 'HTTP Client']],
            ['okhttp/3.8.1', [null, null, 'HTTP Client']],
            ['ServeStream', [null, null, 'HTTP Client']],
            ['curl/7.51.0', [null, null, 'HTTP Client']],
            ['Wget/1.15 (linux-gnu)', [null, null, 'HTTP Client']],
            ['GStreamer souphttpsrc libsoup/2.48.1', [null, null, 'HTTP Client']],
            ['TuneIn%20Radio/1050 CFNetwork/894 Darwin/17.4.0', [null, null, 'TuneIn Radio']],
            ['Deezer/6.38.1.0 CFNetwork/901.1 Darwin/17.6.0', [null, null, 'Deezer']],
            ['(null)/(null) watchOS/5.0.1 model/Watch3,4 hwp/t8004 build/16R381 (6; dt:156)', ['Smart Speakers', 'Apple', 'Apple Watch']],
            ['Acast/1.35.2 (Linux;Android 8.0.0) ExoPlayerLib/2.6.1', ['mobile', 'android', 'Acast']],
            ['iHeartRadio/8.17.0 (Android 8.0.0; XT1635-01 Build/ODN27.76-12-30-8-1)', ['mobile', 'android', 'iHeartRadio']],
            ['Luminary/70 CFNetwork/978.0.7 Darwin/18.5.0', [null, null, 'Luminary']],
            ['Luminary/1.0.2 build 57/Android SDK 25', ['mobile', 'android', 'Luminary']],
            ['Luminary/1.0.3 build 71/iOS 12.2', ['mobile', 'iPhone', 'Luminary']]
        ];

        userAgents.map(ua => {
            it(ua[0], () => {
                var res = Utils.labelizeUserAgent(ua[0]);
                expect(res).to.deep.equal({
                    device: ua[1][0],
                    platform: ua[1][1],
                    player: ua[1][2]
                });
            });
        });

    });
};