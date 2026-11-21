__d(
  "WAWebVideoDashManifestODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (function (e) {
        {
          var t = e;
          if (t < 250) return "LT_250_MS";
        }
        {
          var n = e;
          if (n < 500) return "LT_500_MS";
        }
        {
          var r = e;
          if (r < 1e3) return "LT_1000_MS";
        }
        {
          var o = e;
          if (o < 2e3) return "LT_2000_MS";
        }
        {
          var a = e;
          if (a < 5e3) return "LT_5000_MS";
        }
        return "LATER";
      })(e);
    }
    function s() {
      r("WAWebODS").incr("web.video_dash_manifest.attempt");
    }
    function u(t, n) {
      e: {
        if (t.kind === "OK") {
          (r("WAWebODS").incr("web.video_dash_manifest.success"), c(e(n)));
          break e;
        }
        if (t.kind === "NOT_READY") {
          r("WAWebODS").incr("web.video_dash_manifest.not_ready");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t.kind,
        );
      }
    }
    function c(e) {
      e: {
        if (e === "LT_250_MS") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.lt_250ms");
          break e;
        }
        if (e === "LT_500_MS") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.lt_500ms");
          break e;
        }
        if (e === "LT_1000_MS") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.lt_1000ms");
          break e;
        }
        if (e === "LT_2000_MS") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.lt_2000ms");
          break e;
        }
        if (e === "LT_5000_MS") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.lt_5000ms");
          break e;
        }
        if (e === "LATER") {
          r("WAWebODS").incr("web.video_dash_manifest.success_time.later");
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
        if (e.reason === "HTTP_404") {
          r("WAWebODS").incr("web.video_dash_manifest.http_404");
          break e;
        }
        if (e.reason === "HTTP_5XX") {
          r("WAWebODS").incr("web.video_dash_manifest.http_5xx");
          break e;
        }
        if (e.reason === "HTTP_OTHER") {
          r("WAWebODS").incr("web.video_dash_manifest.http_other");
          break e;
        }
        if (e.reason === "NETWORK_ERROR") {
          r("WAWebODS").incr("web.video_dash_manifest.network_error");
          break e;
        }
        if (e.reason === "PARSE_ERROR") {
          r("WAWebODS").incr("web.video_dash_manifest.parse_error");
          break e;
        }
        if (e.reason === "TIMEOUT") {
          r("WAWebODS").incr("web.video_dash_manifest.timeout");
          break e;
        }
        if (e.reason === "URL_NOT_ALLOWED") {
          r("WAWebODS").incr("web.video_dash_manifest.url_not_allowed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.reason,
        );
      }
    }
    ((l.getDashManifestTimeBucket = e),
      (l.bumpDashManifestAttempt = s),
      (l.bumpDashManifestResult = u),
      (l.bumpDashManifestFailure = d));
  },
  98,
);
