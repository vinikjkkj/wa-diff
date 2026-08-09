__d(
  "MAWBlockUtils",
  [
    "I64",
    "LSContactUserBlockAction",
    "LSIntEnum",
    "LSThreadBitOffset",
    "ReQL",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useReStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (c || (c = o("react"))).useCallback,
      m = [0, 31, 35, 55, 56, 58, 24, 25, 19, 85],
      p = [0, 31, 35, 55, 56, 58, 24, 25, 19, 85, 8, 22],
      _ = [35, 19, 85, 56, 24, 25];
    function f() {
      var t = o("react-compiler-runtime").c(2),
        a = (e || (e = r("useReStore")))(),
        l;
      return (
        t[0] !== a
          ? ((l = function (t, l) {
              r("promiseDone")(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = yield o("ReQL").firstAsync(
                    o("ReQL")
                      .fromTableAscending(a.tables.participants)
                      .getKeyRange(t),
                  );
                  if (e != null) {
                    var n = yield o("ReQL").firstAsync(
                      o("ReQL")
                        .fromTableAscending(a.tables.threads)
                        .getKeyRange(e.threadKey)
                        .filter(g),
                    );
                    if (n != null) {
                      var c = (s || (s = o("I64"))).equal(
                          l,
                          (u || (u = o("LSIntEnum"))).ofNumber(
                            r("LSContactUserBlockAction").MN_BLOCK,
                          ),
                        )
                          ? o("LSThreadBitOffset").clear(
                              m,
                              n.capabilities,
                              n.capabilities2,
                              n.capabilities3,
                              n.capabilities4,
                              n.capabilities5,
                            )
                          : (s || (s = o("I64"))).equal(
                                l,
                                (u || (u = o("LSIntEnum"))).ofNumber(
                                  r("LSContactUserBlockAction").FB_BLOCK,
                                ),
                              )
                            ? o("LSThreadBitOffset").clear(
                                p,
                                n.capabilities,
                                n.capabilities2,
                                n.capabilities3,
                                n.capabilities4,
                                n.capabilities5,
                              )
                            : o("LSThreadBitOffset").set(
                                _,
                                n.capabilities,
                                n.capabilities2,
                                n.capabilities3,
                                n.capabilities4,
                                n.capabilities5,
                              ),
                        d = c[0],
                        f = c[1];
                      yield a.runInTransaction(
                        function (e) {
                          var t = babelHelpers.extends({}, n, {
                            capabilities: d,
                            capabilities2: f,
                          });
                          return e.threads.put(t);
                        },
                        "readwrite",
                        void 0,
                        void 0,
                        i.id + ":137",
                      );
                    }
                  }
                })(),
              );
            }),
            (t[0] = a),
            (t[1] = l))
          : (l = t[1]),
        l
      );
    }
    function g(e) {
      return (s || (s = o("I64"))).equal(
        e.threadType,
        (u || (u = o("LSIntEnum"))).ofNumber(15),
      );
    }
    ((l.clearedMnBlockCapabilities = m),
      (l.clearedFbBlockCapabilities = p),
      (l.useChangeThreadBlockCapabilities = f));
  },
  98,
);
