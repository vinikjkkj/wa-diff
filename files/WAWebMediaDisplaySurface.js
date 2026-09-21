__d(
  "WAWebMediaDisplaySurface",
  ["WAWebDisplayType", "WAWebGetDisplayType", "WAWebTypesMedia"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.displayTheme,
        r = t.displayType,
        a = t.hasOverlay;
      return (
        o("WAWebDisplayType").isConversationDisplay(
          r != null ? r : o("WAWebGetDisplayType").getDisplayType(e.unsafe()),
        ) &&
        n !== o("WAWebTypesMedia").DisplayTheme.PhotoPoll &&
        !a
      );
    }
    l.isPairedMediaSurface = e;
  },
  98,
);
