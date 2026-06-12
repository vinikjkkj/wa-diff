__d(
  "WAWebTrackBrowserTabHidden",
  ["WAWebAppTracker"],
  function (t, n, r, o, a, i, l) {
    function e() {
      document.hidden &&
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.BrowserTabHidden,
        );
      var e = function () {
          document.hidden
            ? o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.BrowserTabHidden,
              )
            : o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.BrowserTabHidden,
              );
        },
        t = function () {
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.BrowserTabHidden,
          );
        };
      return (
        document.addEventListener("visibilitychange", e),
        document.addEventListener("freeze", t),
        function () {
          (document.removeEventListener("visibilitychange", e),
            document.removeEventListener("freeze", t));
        }
      );
    }
    l.trackBrowserTabHidden = e;
  },
  98,
);
