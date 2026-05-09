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
        if (n.length > 0) {
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
        var l = (e || (e = r("performanceAbsoluteNow")))();
        t.forEach(function (e) {
          var t = s.get(e);
          (t &&
            t !== !0 &&
            r("promiseDone")(t, function (t) {
              var n = t.fetchPredictionsEnd,
                a = t.fetchPredictionsStart,
                i = t.payload;
              if (i != null && typeof i == "object") {
                var s, u;
                (r("Bootloader").loadPredictedResourceMap(
                  i.predictions[e],
                  {
                    onLog: function (r) {
                      return o("BootloaderEvents").notifyHasteResponseEF(
                        "relay_3d",
                        e,
                        {
                          fetchPredictionsEnd: n,
                          fetchPredictionsStart: a,
                          fetchRsrcsStart: l,
                          tierOne: r,
                        },
                      );
                    },
                  },
                  (s = (u = i.consistency) == null ? void 0 : u.rev) != null
                    ? s
                    : null,
                ),
                  i.consistency != null &&
                    r("ClientConsistencyEventEmitter").emit(
                      "newEntry",
                      i.consistency,
                    ));
              }
            }),
            s.set(e, !0));
        });
      }
    }
    function c(e, t) {
      var n = o("CometRouterSSREntrypoint").processRootEntryPointData(
          e,
          t,
        ).queries,
        r = n.map(function (e) {
          var t = e.name;
          return t;
        });
      u(r);
    }
    var d = {
      fetchPredictedEntryPointResources: c,
      fetchPredictedResourcesForQueries: u,
    };
    l.default = d;
  },
  98,
);
