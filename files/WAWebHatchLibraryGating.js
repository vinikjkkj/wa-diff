__d(
  "WAWebHatchLibraryGating",
  ["WAWebBotUtils", "WAWebHatchFrontendGating"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
      );
    }
    l.isHatchLibraryChat = e;
  },
  98,
);
