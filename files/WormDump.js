__d(
  "WormDump",
  ["FBLogger", "Promise", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e;
    }
    function u(e) {
      return "redacted:" + String(e).length;
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          var i = yield o.runInTransaction(
              a,
              "readonly",
              function (o) {
                return (e || (e = n("Promise"))).all(
                  a.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var n = t[e],
                            a = yield o.stores[e].readAll({
                              limit: n == null ? void 0 : n.limit,
                              order: "desc",
                            });
                          return [
                            e,
                            a.map(function (e) {
                              var t = {};
                              return (
                                Object.keys(e).forEach(function (o) {
                                  var a,
                                    i =
                                      n == null || (a = n.customFields) == null
                                        ? void 0
                                        : a[o];
                                  if (i)
                                    try {
                                      t[o] = i(e[o]);
                                    } catch (e) {
                                      r("FBLogger")("worm")
                                        .catching(r("getErrorSafe")(e))
                                        .mustfix(
                                          "Failed to process special handling for DB dump",
                                        );
                                    }
                                  else t[o] = u(e[o]);
                                }),
                                t
                              );
                            }),
                          ];
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                );
              },
              "dump",
            ),
            l = {};
          return (
            i.forEach(function (e) {
              var t = e[0],
                n = e[1];
              l[t] = n;
            }),
            l
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.wormNonSensitiveField = s), (l.wormRedact = u), (l.dump = c));
  },
  98,
);
