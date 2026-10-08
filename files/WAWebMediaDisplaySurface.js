__d(
  "WAWebMediaDisplaySurface",
  ["WAWebDisplayType", "WAWebTypesMedia"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayTheme,
        n = e.displayType,
        r = e.hasOverlay;
      return (
        o("WAWebDisplayType").isConversationDisplay(n) &&
        t !== o("WAWebTypesMedia").DisplayTheme.PhotoPoll &&
        !r
      );
    }
    l.isPairedMediaSurface = e;
  },
  98,
);
