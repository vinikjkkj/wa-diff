__d(
  "ZenonResourceUsageStatsTracker",
  ["FBLogger", "Promise", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield c();
          } catch (e) {
            r("FBLogger")("rtc_www")
              .catching(r("getErrorSafe")(e))
              .info("Exception logging monitor extension stats");
          }
          return null;
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      var r,
        o,
        a = "gdpnckbgamaigmkbcklkeoipnfaalgad",
        i =
          (r = (o = t.chrome) == null ? void 0 : o.runtime) != null ? r : null;
      return i === null
        ? (e || (e = n("Promise"))).resolve(null)
        : i.sendMessage(a, "", function (r) {
            var o;
            if (
              ((o = t.chrome) != null &&
                (o = o.runtime) != null &&
                o.lastError) ||
              (r != null ? r : null) === null ||
              Object.keys(r).length === 0
            )
              return (e || (e = n("Promise"))).resolve(null);
            var a = [];
            Object.keys(r).forEach(function (e) {
              var t = r[e];
              a.push.apply(a, t);
            });
            var i = 0,
              l = 0,
              s = 0,
              u = 0;
            a.length > 0 &&
              (a.sort(function (e, t) {
                return e.timestamp > t.timestamp ? 1 : -1;
              }),
              (i = Math.round(
                a.reduce(function (e, t) {
                  return e + t.cpu;
                }, 0) / a.length,
              )),
              (u = Math.round(a[a.length - 1].cpu)),
              (l = Math.round(
                Math.max.apply(
                  Math,
                  a
                    .map(function (e) {
                      return e.cpu;
                    })
                    .concat([0]),
                ),
              )),
              (s = Math.round(
                Math.min.apply(
                  Math,
                  a.map(function (e) {
                    return e.cpu;
                  }),
                ),
              )));
            var c = { avgCpu: i, maxCpu: l, minCpu: s, mostRecentCpu: u };
            return (e || (e = n("Promise"))).resolve(c);
          });
    }
    l.getProcessStats = s;
  },
  98,
);
