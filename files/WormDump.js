__d(
  "WormDump",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return "redacted:" + String(e).length;
    }
    async function u(e, t, n) {
      var o = await t.runInTransaction(
          n,
          "readonly",
          function (t) {
            return Promise.all(
              n.map(async function (n) {
                var o = e[n],
                  a = await t.stores[n].readAll({
                    limit: o == null ? void 0 : o.limit,
                    order: "desc",
                  });
                return [
                  n,
                  a.map(function (e) {
                    var t = {};
                    return (
                      Object.keys(e).forEach(function (n) {
                        var a,
                          i =
                            o == null || (a = o.customFields) == null
                              ? void 0
                              : a[n];
                        if (i)
                          try {
                            t[n] = i(e[n]);
                          } catch (e) {
                            r("FBLogger")("worm")
                              .catching(r("getErrorSafe")(e))
                              .mustfix(
                                "Failed to process special handling for DB dump",
                              );
                          }
                        else t[n] = s(e[n]);
                      }),
                      t
                    );
                  }),
                ];
              }),
            );
          },
          "dump",
        ),
        a = {};
      return (
        o.forEach(function (e) {
          var t = e[0],
            n = e[1];
          a[t] = n;
        }),
        a
      );
    }
    ((l.wormNonSensitiveField = e), (l.wormRedact = s), (l.dump = u));
  },
  98,
);
