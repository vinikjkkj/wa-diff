__d(
  "handleOzManifestFetchErrorEvent",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.getNumber("initial_manifest_request_retry_count", 0),
        r = JSON.parse(e.getString("network_retry_intervals_json", "{}")),
        o = e.getNumber("live_max_try_attempts_on_404", 1),
        a = ["404", "503"];
      (e.getBool("live_gracefully_handle_no_network", !1) && a.push("0"),
        e.getBool("live_gracefully_handle_410", !1) && a.push("410"),
        e.getBool("live_gracefully_handle_502", !1) && a.push("502"),
        e.getBool("live_gracefully_handle_429", !1) && a.push("429"),
        e.getBool("live_gracefully_handle_504", !1) && a.push("504"),
        e.getBool("normalize_mpd_fetch_errors", !1) && a.push("20"));
      var i = t.error.getExtra().code;
      if (!(e.getBool("no_retry_on_empty_string_error_code", !1) && i === "")) {
        e.getBool("handle_mpd_null_error_codes", !1) &&
          (i = i != null ? i : null);
        var l = r[i];
        if (t.isInitialRequest)
          typeof l == "number" &&
            l > 0 &&
            t.retryAttemptCount < n &&
            t.retry({ waitMs: l });
        else if (i != null && a.indexOf(i) > -1)
          switch (i) {
            case "410":
              t.endStream();
              break;
            case "404":
              o < t.consecutiveFailuresForErrorCode && t.retry();
              break;
            case "504":
            case "502":
            case "503":
            case "20":
            case "0":
              t.retry();
              break;
            case "429":
              typeof l == "number" && l > 0 && t.retry({ waitMs: l });
              break;
            default:
              break;
          }
        else
          i === null &&
            e.getBool("handle_mpd_null_error_codes", !1) &&
            t.retry();
      }
    }
    i.default = e;
  },
  66,
);
