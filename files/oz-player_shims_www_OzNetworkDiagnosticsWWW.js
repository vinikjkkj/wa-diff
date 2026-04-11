__d(
  "oz-player/shims/www/OzNetworkDiagnosticsWWW",
  ["VideoPlayerOzWWWGlobalConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!e) return null;
      var n = parseInt(e.get(t), 10);
      return !isNaN(n) && isFinite(n) ? n : null;
    }
    function s(e, t, n) {
      var r;
      if (!e || t === "" || n === "") return null;
      for (
        var o = (r = e.get(t)) != null ? r : "", a = o.split(";"), i = 0;
        i < a.length;
        i++
      ) {
        var l = a[i].split(":");
        if (l.length === 2 && l[0] === n) {
          var s = parseInt(l[1], 10);
          return isFinite(s) ? s : null;
        }
      }
      return null;
    }
    var u = {
        getNextValidSegmentId: function (n) {
          return e(n, "x-fb-next-valid-segment-id");
        },
        getResponseTimeMs: function (n) {
          return e(n, "x-fb-response-time-ms");
        },
        getDvlSegmentPTS: function (n) {
          return e(n, "x-fb-segment-pts-start");
        },
        getDvlStatus: function (t) {
          return t == null ? void 0 : t.get("x-fb-dynamic-status");
        },
        getUsableResponseSizeForBandwidthEstimation: function (n) {
          return e(n, "x-fb-dynamic-predictive-response-chunk-size");
        },
        getBandwidthMeanEstimate: function (t) {
          var e = r("VideoPlayerOzWWWGlobalConfig").getString(
              "bandwidth_estimate_header_key",
              "",
            ),
            n = r("VideoPlayerOzWWWGlobalConfig").getString(
              "bandwidth_estimate_key",
              "",
            );
          return s(t, e, n);
        },
        getBandwidthStandardDeviationEstimate: function (n) {
          return e(n, "x-bwe-std-dev");
        },
        getTimeToFirstByteMsEstimate: function (n) {
          return e(n, "x-mrtt-ms");
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
