__d(
  "WAWebPipAttributionIcon",
  ["WAWebLogoYoutubeIcon.react", "WAWebPipConst"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebPipConst").HOSTNAME.YOUTUBE:
        case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE:
        case o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED:
          return o("WAWebLogoYoutubeIcon.react").LogoYoutubeIcon;
        default:
          return null;
      }
    }
    l.getAttributionIcon = e;
  },
  98,
);
