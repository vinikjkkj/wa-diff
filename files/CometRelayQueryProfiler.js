__d(
  "CometRelayQueryProfiler",
  [
    "RSTLogger",
    "emptyFunction",
    "interaction-tracing",
    "performanceNow",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (!n) return r("emptyFunction");
      var a = o("RSTLogger").logSpanStart(
          "Relay_" + n.queryName,
          "RelayQuery",
          { isSystem: !0 },
        ),
        i = (e || (e = r("performanceNow")))();
      return function (l) {
        var t = {
          is_preloaded: n.usedPrefetcher,
          usedCache: n.usedCache,
          usedPrefetcher: n.usedPrefetcher,
        };
        if (n.resourceTimingData != null) {
          var s = n.resourceTimingData;
          ((t.resource_timing_duration = s.resource_timing_duration),
            (t.resource_timing_fetch_start = s.resource_timing_fetch_start),
            (t.resource_timing_response_end = s.resource_timing_response_end),
            (t.resource_timing_transfer_size =
              s.resource_timing_transfer_size));
        }
        (n.store_size != null && (t.store_size = n.store_size),
          l && (t.error = l.message),
          o("RSTLogger").logSpanEnd(a),
          r("interaction-tracing")
            .InteractionTracingCore.getPendingInteractions()
            .forEach(function (o) {
              o.addSubspan(
                "Relay_" + n.queryName,
                "RelayQuery",
                i,
                (e || (e = r("performanceNow")))(),
                babelHelpers.extends({}, t, { full_duration: (e() - i) / 1e3 }),
              );
            }));
      };
    }
    var u = !1;
    function c() {
      u ||
        (o("relay-runtime").RelayProfiler.attachProfileHandler(
          "fetchRelayQuery",
          s,
        ),
        (u = !0));
    }
    l.install = c;
  },
  98,
);
