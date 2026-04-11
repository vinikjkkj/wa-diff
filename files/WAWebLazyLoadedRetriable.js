__d(
  "WAWebLazyLoadedRetriable",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
      return function (n, r) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Loadable error: ",
              "",
            ])),
          n.stack,
        );
        var a = r > 1 ? "s" : "",
          i = "loadable:" + t + " failed to load after [" + r + "] attempt" + a;
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load a component",
              ])),
          )
          .sendLogs(i);
      };
    }
    var m = 10;
    function p(e, t) {
      var a = d(t),
        i = "INIT",
        l,
        s = 0;
      return function d() {
        switch (i) {
          case "INIT":
          case "FAILURE":
            return (
              (i = "INFLIGHT"),
              (l = e()
                .then(function (e) {
                  return (
                    e || a(r("err")("Lazyload response is empty"), s),
                    (i = "SUCCESS"),
                    e
                  );
                })
                .catch(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (
                          (o("WALogger").WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Lazyload failure for component ",
                                "",
                              ])),
                            t,
                          ),
                          (i = "FAILURE"),
                          s++,
                          s <= m)
                        )
                          return (
                            yield o("WAPromiseDelays").delayMs(s * 1e3),
                            d()
                          );
                        throw (a(e, s), e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )),
              l
            );
          case "INFLIGHT":
          case "SUCCESS":
            return r("WANullthrows")(l);
          default:
            return (c || (c = n("Promise"))).reject(
              r("err")("retriable_promise_hoc:promiseStatus is invalid"),
            );
        }
      };
    }
    l.default = p;
  },
  98,
);
