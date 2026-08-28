__d(
  "createAdsManagerRelayClientPreloaderEventsLogger",
  [
    "AdsInteropConfig.experimental",
    "QuickPerformanceLogger",
    "ifRequired",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("ifRequired")(
        "AdsAccountStore",
        function (e) {
          return e;
        },
        function () {},
      ),
      u = !(
        Math.random() <
        r("AdsInteropConfig.experimental")
          .RELAY_CLIENT_PRELOADING_LOG_SAMPLE_RATE
      );
    function c(t, n, o) {
      var a = t.fetchKey,
        i = t.params,
        l = t.variables,
        u = d.get(t.cacheKey),
        c = s == null ? void 0 : s.getSelectedAccountID(),
        m = r("ifRequired")("AdsPerfInteractionsController", function (e) {
          return Array.from(e.getAllOngoingInteraction().values())
            .map(function (e) {
              return e.interaction;
            })
            .toString();
        });
      if (n && u == null) {
        var p =
          "[WARNING] Unexpected preload received for query: " +
          i.name +
          " with variables: " +
          JSON.stringify(l) +
          (a != null ? ", and fetchKey: " + a + "." : "") +
          ". The query was " +
          (o ? "stale" : "not stale");
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41485661, "1209"),
          "ERROR",
          7,
          {
            annotations: {
              bool: { querySuccess: !1 },
              string: {
                accountID: c,
                error: p,
                eventType: "ERROR",
                ongoingInteractions: m,
                query: t.params.name,
                queryCacheKey: t.cacheKey,
              },
            },
          },
        );
        return;
      } else if (!n && u != null) {
        var _ =
          "[WARNING] We didn't remove the cached preloaded query but somehow we think that there's an active preload query. Double-check to make sure this isn't happening! query: " +
          i.name +
          " with variables: " +
          JSON.stringify(l) +
          (a != null ? ", and fetchKey: " + a + "." : "") +
          ". The query was " +
          (o ? "stale" : "not stale");
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41485661, "1209"),
          "ERROR",
          7,
          {
            annotations: {
              bool: { querySuccess: !1 },
              string: {
                accountID: c,
                error: _,
                eventType: "ERROR",
                ongoingInteractions: m,
                query: t.params.name,
                queryCacheKey: t.cacheKey,
              },
            },
          },
        );
        return;
      }
      if (u != null) {
        var f = u.consumers,
          g = f.length > 0 ? "HIT" : "MISS";
        (e || (e = r("QuickPerformanceLogger"))).markEvent(
          r("qpl")._(41485661, "1209"),
          g,
          7,
          {
            annotations: {
              bool: { querySuccess: f.length > 0 },
              string: {
                accountID: c,
                eventType: g,
                ongoingInteractions: m,
                query: t.params.name,
                queryCacheKey: t.cacheKey,
              },
            },
          },
        );
      }
    }
    var d = new Map();
    function m() {
      return function (t) {
        if (!u) {
          var n = s == null ? void 0 : s.getSelectedAccountID();
          switch (t.name) {
            case "preload.start": {
              var o = t.querySpec;
              d.set(o.cacheKey, { consumers: [], querySpec: o });
              break;
            }
            case "preload.hit": {
              var a = t.consumers,
                i = t.querySpec,
                l = d.get(i.cacheKey);
              (l != null && ((l.consumers = a), d.set(i.cacheKey, l)),
                (e || (e = r("QuickPerformanceLogger"))).markEvent(
                  r("qpl")._(41485661, "1209"),
                  "PRELOAD-HIT",
                  7,
                  {
                    annotations: {
                      string: {
                        accountID: n,
                        eventType: "PRELOAD-HIT",
                        query: i.params.name,
                        queryCacheKey: i.cacheKey,
                      },
                      string_array: { activePreloaders: Array.from(d.keys()) },
                    },
                  },
                ));
              break;
            }
            case "preload.miss": {
              var m = t.querySpec;
              (e || (e = r("QuickPerformanceLogger"))).markEvent(
                r("qpl")._(41485661, "1209"),
                "PRELOAD-MISS",
                7,
                {
                  annotations: {
                    string: {
                      accountID: n,
                      eventType: "PRELOAD-MISS",
                      query: m.params.name,
                      queryCacheKey: m.cacheKey,
                    },
                    string_array: { activePreloaders: Array.from(d.keys()) },
                  },
                },
              );
              break;
            }
            case "preload.end": {
              var p = t.querySpec,
                _ = t.removedCachedQuery,
                f = t.stale;
              (c(p, _, f), d.delete(p.cacheKey));
              break;
            }
            case "preload.clear_on_mutation": {
              var g = !0,
                h = !1;
              for (var y of d.entries()) {
                var C = y[0],
                  b = y[1];
                c(b.querySpec, g, h);
              }
              d.clear();
              break;
            }
            default:
              break;
          }
        }
      };
    }
    l.default = m;
  },
  98,
);
