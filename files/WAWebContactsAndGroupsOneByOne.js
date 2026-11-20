__d(
  "WAWebContactsAndGroupsOneByOne",
  ["WALogger", "WAWebBackendErrors", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 429;
    function u(e, t) {
      return c(e, t, 0);
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (a >= t.length) return 0;
          try {
            yield n(t[a]);
          } catch (i) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "runOneByOne: an item failed",
                    ])),
                )
                .catching(r("getErrorSafe")(i)),
              m(i) ? 0 : c(t, n, a + 1)
            );
          }
          return 1 + (yield c(t, n, a + 1));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === s
      );
    }
    ((l.runOneByOne = u), (l.isRateLimited = m));
  },
  98,
);
