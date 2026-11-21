__d(
  "WAWebChannelVideoDashODS",
  ["WAWebODS", "WAWebVideoDashManifestODS"],
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
        if (e === "URL_REJECTED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.url_rejected");
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
        if (e === "IN_FLIGHT") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.in_flight",
          );
          break e;
        }
        if (e === "FAILED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.failed",
          );
          break e;
        }
        if (e === "NOT_READY") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.not_ready",
          );
          break e;
        }
        if (e === "EVICTED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.evicted",
          );
          break e;
        }
        if (e === "DROPPED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.dropped",
          );
          break e;
        }
        if (e === "CLEARED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.cleared",
          );
          break e;
        }
        if (e === "EXPIRED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.expired",
          );
          break e;
        }
        if (e === "NEVER_REQUESTED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.not_cached.never_requested",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function u(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.result === "NOT_READY"
        ) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.not_ready",
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.result === "FAILED"
        ) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.failed",
          );
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          "elapsedMs" in t
        ) {
          var n = t.elapsedMs;
          c(o("WAWebVideoDashManifestODS").getDashManifestTimeBucket(n));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function c(e) {
      e: {
        if (e === "LT_250_MS") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.lt_250ms",
          );
          break e;
        }
        if (e === "LT_500_MS") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.lt_500ms",
          );
          break e;
        }
        if (e === "LT_1000_MS") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.lt_1000ms",
          );
          break e;
        }
        if (e === "LT_2000_MS") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.lt_2000ms",
          );
          break e;
        }
        if (e === "LT_5000_MS") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.lt_5000ms",
          );
          break e;
        }
        if (e === "LATER") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.in_flight_landed.later",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function d(e) {
      e: {
        if (e === "DASH") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.race.dash");
          break e;
        }
        if (e === "FILE_FIRST") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.race.file_first");
          break e;
        }
        if (e === "FILE_STOPPED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.at_open.race.file_stopped",
          );
          break e;
        }
        if (e === "NOT_READY") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.race.not_ready");
          break e;
        }
        if (e === "FAILED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.race.failed");
          break e;
        }
        if (e === "CLOSED") {
          r("WAWebODS").incr("web.video_dash_manifest.at_open.race.closed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function m(e) {
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
    ((l.bumpDashOpen = e),
      (l.bumpDashOpenMiss = s),
      (l.bumpInFlightManifestLanding = u),
      (l.bumpManifestRace = d),
      (l.bumpDashFallback = m));
  },
  98,
);
