const ANDROID = 'android';
const IPHONE = 'iPhone';
const WINDOWS = 'windows';
const MOBILE = 'mobile';
const DESKTOP = 'desktop';
const SMART_SPEAKER = 'Smart Speakers';

module.exports.labelizeUserAgent = (userAgent) => {
    userAgent = (userAgent || '').substr(0, 200); // we don't need the entire user agent AND Performance

    // itunesstored/1.0 iOS/10.0.1 model/iPhone7,2 hwp/t7000 build/14A403 (6; dt:106)
    // iTunes/12.5.4.42

    var device = null, // mobile, desktop, table
        platform = null, 	// Android, Mac, iPhone
        player = null; 	// itunes, stitcher, ...

    if (userAgent.match(/iPhone|iOS/)) {
        device = MOBILE;
        platform = IPHONE;
    } else if (userAgent.match(/iPad/)) {
        device = 'tablet';
        platform = 'iPad';
    } else if (userAgent.match(/iPod/)) {
        device = 'tablet';
        platform = 'iPad';
    } else if (userAgent.match(/Apple TV/)) {
        device = 'Apple TV';
        platform = 'mac';
    } else if (userAgent.match(/Macintosh|Mac/)) {
        device = DESKTOP;
        platform = 'mac';
    } else if (userAgent.match(/Android/)) {
        device = MOBILE;
        platform = ANDROID;
    } else if (userAgent.match(/Windows/)) {
        device = DESKTOP;
        platform = WINDOWS;
    } else if (userAgent.match(/Linux/)) {
        device = DESKTOP;
        platform = 'linux';
    }



    if (userAgent.match(/AppleCoreMedia|Podcasts|itunesstored\//)) {
        player = 'Apple Podcast';
    } else if (userAgent.match(/Overcast/)) {
        player = 'Overcast';
    } else if (userAgent.match(/Pocket Casts/)) {
        device = MOBILE;
        player = 'Pocket Casts';
    } else if (userAgent.match(/Stitcher/)) {
        player = 'Stitcher';
    } else if (userAgent.match(/BeyondPod/)) {
        player = 'Beyond Pod';
    } else if (userAgent.match(/iTunes/)) {
        player = 'iTunes';
    } else if (userAgent.match(/PodcastAddict/)) {
        player = 'PodcastAddict';
    } else if (userAgent.match(/NPROne|NPR%20One/)) {
        player = 'NPROne';
    } else if (userAgent.match(/Google-Podcast/)) {
        player = 'Google Play';
    } else if (userAgent.match(/stagefright/)) {
        player = 'Native Player';
    } else if (userAgent.match(/Podbean/)) {
        player = 'Podbean';
    } else if (userAgent.match(/Downcast/)) {
        player = 'Downcast';
    } else if (userAgent.match(/RadioPublic/)) {
        player = 'RadioPublic';
    } else if (userAgent.match(/LibVLC/)) {
        player = 'vlc';
    } else if (userAgent.match(/AntennaPod/)) {
        device = MOBILE;
        platform = ANDROID;
        player = 'AntennaPod';
    } else if (userAgent.match(/Breaker/)) {
        player = 'Breaker';
    } else if (userAgent.match(/CastBox/)) {
        device = MOBILE;
        platform = ANDROID;
        player = 'CastBox';
    } else if (userAgent.match(/Instacast/)) {
        device = MOBILE;
        platform = IPHONE;
        player = 'Instacast';
    }
    else if (userAgent.match(/Player FM/)) {
        device = MOBILE;
        platform = ANDROID;
        player = 'Player FM';
    }
    else if (userAgent.match(/NSPlayer\//)) {
        player = 'Windows Media Player';
        device = DESKTOP;
        platform = WINDOWS;
    }
    else if (userAgent.match(/doubleTwist/)) {
        player = 'doubleTwist CloudPlayer';
        device = MOBILE;
        platform = ANDROID;
    }
    else if (userAgent.match(/Spotify/)) {
        player = 'Spotify';
    }
    else if (userAgent.match(/Bose\//)) {
        player = 'Bose';
        device = 'Bose';
        platform = 'Bose';
    }
    else if (userAgent.match(/Podkicker/)) {
        player = 'Podkicker';
        device = MOBILE;
        platform = ANDROID;
    }
    else if (userAgent.match(/AhaRadio/)) {
        player = 'AhaRadio';
        device = MOBILE;
        platform = ANDROID;
    }

    // AMAZON
    else if (userAgent.match(/^AlexaMediaPlayer/)) {
        platform = 'Amazon';
        device = SMART_SPEAKER;
        if (userAgent.match(/^AlexaMediaPlayer\/5\./)) {
            player = 'Echo Dot';
        } else {
            player = 'Alexa';
        }
    }
    else if (userAgent.match(/^Echo\/1\./)) {
        player = 'Echo';
        platform = 'Amazon';
        device = SMART_SPEAKER;
    }


    // GOOGLE
    else if (userAgent.match(/^Google-Speech-Actions/)) {
        player = 'Google Assistant - speech actions';
        platform = 'Google';
        device = SMART_SPEAKER;
    }
    else if (userAgent.match(/\b(GoogleChirp|GSA)/)) {
        player = 'Google Podcasts';
        platform = 'Google';
        device = SMART_SPEAKER;
    }

    else if (userAgent.match(/^Roku\/DVP-8(.*)\(04/)) {
        player = 'Roku 3 TV stick';
        platform = 'Roku';
        device = SMART_SPEAKER;
    }


    else if (userAgent.match(/RSSRadio/)) {
        player = 'RSS Radio';
    }
    else if (userAgent.match(/Castro 2/)) {
        player = 'Castro';
        device = MOBILE;
        platform = IPHONE;
    }
    else if (userAgent.match(/Zune\//)) {
        player = 'Zune';
        platform = WINDOWS;
    }
    else if (userAgent.match(/TuneIn%20Radio/)) {
        player = 'TuneIn Radio';
    }
    else if (userAgent.match(/Deezer\//)) {
        player = 'Deezer';
    }

    else if (
        userAgent.match(/Apache-HttpClient/) ||
        userAgent.match(/ServeStream/) ||
        userAgent.match(/^okhttp\//) ||
        userAgent.match(/curl\//) ||
        userAgent.match(/Wget\//) ||
        userAgent.match(/GStreamer souphttpsrc/)
    ) {
        player = 'HTTP Client';
    }


    if (userAgent === 'Sonos') {
        device = null;
        player = platform = device = 'Sonos';
    }

    // catch all
    if (userAgent.match(/Safari|Mozilla|MSIE/)) {
        player = player || 'Web Browser';
        device = device || DESKTOP;
    }

    return { device, platform, player };
};