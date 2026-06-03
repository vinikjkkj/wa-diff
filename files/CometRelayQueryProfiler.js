__d(
  "CometRelayQueryProfiler",
  [
    "RSTLogger",
    "emptyFunction",
    "interaction-tracing",
    "performance",
    "performanceNow",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
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
          var u = n.resourceTimingData;
          ((t.resource_timing_duration = u.resource_timing_duration),
            (t.resource_timing_fetch_start = u.resource_timing_fetch_start),
            (t.resource_timing_response_end = u.resource_timing_response_end),
            (t.resource_timing_transfer_size =
              u.resource_timing_transfer_size));
        }
        (n.store_size != null && (t.store_size = n.store_size),
          l && (t.error = l.message),
          o("RSTLogger").logSpanEnd(a));
        var c = n.serverTimestamp,
          d = null,
          m = null;
        if (c != null) {
          var p = c.startTime - (s || (s = r("performance"))).timeOrigin,
            _ = c.endTime - s.timeOrigin;
          Number.isFinite(p) &&
            Number.isFinite(_) &&
            _ >= p &&
            ((d = p), (m = _));
        }
        r("interaction-tracing")
          .InteractionTracingCore.getPendingInteractions()
          .forEach(function (o) {
            (o.addSubspan(
              "Relay_" + n.queryName,
              "RelayQuery",
              i,
              (e || (e = r("performanceNow")))(),
              babelHelpers.extends({}, t, { full_duration: (e() - i) / 1e3 }),
            ),
              c != null &&
                d != null &&
                m != null &&
                o.addSubspan(
                  "Relay_" + n.queryName + "_server",
                  "RelayQuery",
                  d,
                  m,
                  {
                    request_start_time_ms: c.startTime,
                    server_duration_ms: c.endTime - c.startTime,
                    time_at_flush_ms: c.endTime,
                  },
                ));
          });
      };
    }
    var c = !1;
    function d() {
      c ||
        (o("relay-runtime").RelayProfiler.attachProfileHandler(
          "fetchRelayQuery",
          u,
        ),
        (c = !0));
    }
    l.install = d;
  },
  98,
);
