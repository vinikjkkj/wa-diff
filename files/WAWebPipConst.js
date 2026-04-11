__d(
  "WAWebPipConst",
  [
    "$InternalEnum",
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoInstagramIcon.react",
    "WAWebLogoYoutubeIcon.react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        YOUTUBE: "youtube.com",
        YOUTUBE_MOBILE: "m.youtube.com",
        YOUTUBE_SHORTENED: "youtu.be",
        INSTAGRAM: "instagram.com",
        STREAMABLE: "streamable.com",
        FACEBOOK: "facebook.com",
        FBWATCH: "fbwat.ch",
        FBWATCH_ALT: "fb.watch",
        SHARECHAT: "sharechat.com",
      },
      s = n("$InternalEnum").Mirrored([
        "FLOATER",
        "OG_FLOATER",
        "MEDIA_VIEWER",
      ]),
      u = n("$InternalEnum").Mirrored(["OG", "YOUTUBE", "MSG", "VOIP"]),
      c = 16 / 9;
    function d(t) {
      switch (t) {
        case e.YOUTUBE:
        case e.YOUTUBE_MOBILE:
        case e.YOUTUBE_SHORTENED:
          return o("WAWebLogoYoutubeIcon.react").LogoYoutubeIcon;
        case e.INSTAGRAM:
          return o("WAWebLogoInstagramIcon.react").LogoInstagramIcon;
        case e.FACEBOOK:
          return o("WAWebLogoFacebookIcon.react").LogoFacebookIcon;
        default:
          return null;
      }
    }
    var m = {
        ONLINE_VIDEO_URL: {
          YOUTUBE: [
            /^https?:\/\/youtu\.be\/(.{11})/,
            /^https?:\/\/(m\.)?youtube\.com\/watch\?v=(.{11})/,
            /^https?:\/\/(m\.)?youtube\.com\/shorts\/(.{11})/,
          ],
        },
      },
      p = "t",
      _ = /^(\d+h)?(\d+m)?(\d+s)?(\d+)?$/;
    ((l.HOSTNAME = e),
      (l.PlayerType = s),
      (l.PiPVideoType = u),
      (l.YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO = c),
      (l.getAttributionIcon = d),
      (l.URL_PATTERNS = m),
      (l.YOUTUBE_URL_TIME_PARAM_NAME = p),
      (l.YOUTUBE_URL_TIME_PARAM_PATTERN = _));
  },
  98,
);
