__d(
  "WAWebChannelVideoDashODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "DOWNLOADED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.downloaded");
          break e;
        }
        if (e === "DOWNLOADED_CACHED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.downloaded_cached",
          );
          break e;
        }
        if (e === "NOT_CACHED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.not_cached");
          break e;
        }
        if (e === "CACHED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.cached");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function s(e) {
      e: {
        if (e === "PLAYER_ERROR") {
          r("WAWebODS").incr("web.video_dash_manifest.fallback.player_error");
          break e;
        }
        if (e === "PREPARE_ERROR") {
          r("WAWebODS").incr("web.video_dash_manifest.fallback.prepare_error");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.bumpDashOpen = e), (l.bumpDashFallback = s));
  },
  98,
);
