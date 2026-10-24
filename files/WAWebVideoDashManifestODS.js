__d(
  "WAWebVideoDashManifestODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebODS").incr("web.video_dash_manifest.attempt");
    }
    function s(e) {
      e: {
        if (e.kind === "OK") {
          r("WAWebODS").incr("web.video_dash_manifest.success");
          break e;
        }
        if (e.kind === "NOT_READY") {
          r("WAWebODS").incr("web.video_dash_manifest.not_ready");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.kind,
        );
      }
    }
    function u(e) {
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
    ((l.bumpDashManifestAttempt = e),
      (l.bumpDashManifestResult = s),
      (l.bumpDashManifestFailure = u));
  },
  98,
);
