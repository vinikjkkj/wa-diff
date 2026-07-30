__d(
  "WAWebPipAttributionIcon",
  [
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoInstagramIcon.react",
    "WAWebLogoYoutubeIcon.react",
    "WAWebPipConst",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebPipConst").HOSTNAME.YOUTUBE:
        case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE:
        case o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED:
          return o("WAWebLogoYoutubeIcon.react").LogoYoutubeIcon;
        case o("WAWebPipConst").HOSTNAME.INSTAGRAM:
          return o("WAWebLogoInstagramIcon.react").LogoInstagramIcon;
        case o("WAWebPipConst").HOSTNAME.FACEBOOK:
          return o("WAWebLogoFacebookIcon.react").LogoFacebookIcon;
        default:
          return null;
      }
    }
    l.getAttributionIcon = e;
  },
  98,
);
