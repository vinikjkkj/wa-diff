__d(
  "CometRelayEF",
  [
    "Bootloader",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "CometRouterSSREntrypoint",
    "cometAsyncFetch",
    "gkx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(t) {
      if (r("gkx")("26332")) {
        var n = t.filter(function (e) {
          return !s.has(e);
        });
        if (n.length !== 0) {
          n.forEach(function (e) {
            o("BootloaderEvents").notifyHasteResponseEFStart("relay_3d", e);
          });
          var a = (e || (e = r("performanceAbsoluteNow")))(),
            i = r("cometAsyncFetch")("/ajax/relay-ef/", {
              data: { queries: n },
              method: "POST",
            }).then(function (t) {
              return {
                fetchPredictionsEnd: (e || (e = r("performanceAbsoluteNow")))(),
                fetchPredictionsStart: a,
                payload: t,
              };
            });
          n.forEach(function (e) {
            return s.set(e, i);
          });
        }
      }
    }
    function c(e, t) {
      var n = o("CometRouterSSREntrypoint").processRootEntryPointData(
        e,
        t,
      ).queries;
      u(
        n.map(function (e) {
          var t = e.name;
          return t;
        }),
      );
    }
    function d(t) {
      if (r("gkx")("26332")) {
        u(t);
        var n = (e || (e = r("performanceAbsoluteNow")))();
        t.forEach(function (e) {
          var t = s.get(e);
          (t &&
            t !== !0 &&
            r("promiseDone")(t, function (t) {
              var a = t.fetchPredictionsEnd,
                i = t.fetchPredictionsStart,
                l = t.payload;
              if (l != null && typeof l == "object") {
                var s, u;
                (r("Bootloader").loadPredictedResourceMap(
                  l.predictions[e],
                  {
                    onLog: function (r) {
                      return o("BootloaderEvents").notifyHasteResponseEF(
                        "relay_3d",
                        e,
                        {
                          fetchPredictionsEnd: a,
                          fetchPredictionsStart: i,
                          fetchRsrcsStart: n,
                          tierOne: r,
                        },
                      );
                    },
                  },
                  (s = (u = l.consistency) == null ? void 0 : u.rev) != null
                    ? s
                    : null,
                ),
                  l.consistency != null &&
                    r("ClientConsistencyEventEmitter").emit(
                      "newEntry",
                      l.consistency,
                    ));
              }
            }),
            s.set(e, !0));
        });
      }
    }
    function m(e, t) {
      var n = o("CometRouterSSREntrypoint").processRootEntryPointData(
          e,
          t,
        ).queries,
        r = n.map(function (e) {
          var t = e.name;
          return t;
        });
      d(r);
    }
    var p = {
      fetchPredictedResources: m,
      fetchPredictedResourcesForQueries: d,
      fetchPredictions: c,
      fetchPredictionsForQueries: u,
    };
    l.default = p;
  },
  98,
);
