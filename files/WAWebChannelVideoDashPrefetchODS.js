__d(
  "WAWebChannelVideoDashPrefetchODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "REQUESTED") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.requested");
          break e;
        }
        if (e === "REFETCHED") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.refetched");
          break e;
        }
        if (e === "OK") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.success");
          break e;
        }
        if (e === "NOT_READY") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.not_ready");
          break e;
        }
        if (e === "FAILED") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.failed");
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
        if (e === "CACHED") {
          r("WAWebODS").incr("web.video_dash_manifest.prefetch.skipped_cached");
          break e;
        }
        if (e === "SEEN_CACHED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.skipped_seen_cached",
          );
          break e;
        }
        if (e === "SEEN_IN_FLIGHT") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.skipped_seen_in_flight",
          );
          break e;
        }
        if (e === "SEEN_FAILED") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.skipped_seen_failed",
          );
          break e;
        }
        if (e === "URL_SHAPE") {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.skipped_url_shape",
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
        {
          var n = t;
          if (n >= 16) {
            r("WAWebODS").incr(
              "web.video_dash_manifest.prefetch.in_flight_at_start_16_plus",
            );
            break e;
          }
        }
        {
          var o = t;
          if (o >= 8) {
            r("WAWebODS").incr(
              "web.video_dash_manifest.prefetch.in_flight_at_start_8_15",
            );
            break e;
          }
        }
        {
          var a = t;
          if (a >= 4) {
            r("WAWebODS").incr(
              "web.video_dash_manifest.prefetch.in_flight_at_start_4_7",
            );
            break e;
          }
        }
        {
          var i = t;
          if (i >= 2) {
            r("WAWebODS").incr(
              "web.video_dash_manifest.prefetch.in_flight_at_start_2_3",
            );
            break e;
          }
        }
        {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.in_flight_at_start_1",
          );
          break e;
        }
      }
    }
    function c(e) {
      e: {
        if (e === 10) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.session_reached_10",
          );
          break e;
        }
        if (e === 25) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.session_reached_25",
          );
          break e;
        }
        if (e === 50) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.session_reached_50",
          );
          break e;
        }
        if (e === 100) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.session_reached_100",
          );
          break e;
        }
        if (e === 200) {
          r("WAWebODS").incr(
            "web.video_dash_manifest.prefetch.session_reached_200",
          );
          break e;
        }
        break e;
      }
    }
    function d() {
      r("WAWebODS").incr(
        "web.video_dash_manifest.prefetch.resolved_at_trigger",
      );
    }
    ((l.bumpPrefetchResult = e),
      (l.bumpPrefetchSkip = s),
      (l.bumpPrefetchInFlightAtStart = u),
      (l.bumpPrefetchSessionReached = c),
      (l.bumpPrefetchResolvedAtTrigger = d));
  },
  98,
);
