__d(
  "WAWebLazyLoadedRetriable",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t) {
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
    function p(e, t) {
      try {
        t();
      } catch (t) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebLazyLoadedRetriable: ",
              " hook threw",
            ])),
          e,
        );
      }
    }
    var _ = 10;
    function f(e, t, a) {
      var i = m(t),
        l = "INIT",
        s,
        u = 0;
      return function m() {
        switch (l) {
          case "INIT":
          case "FAILURE":
            return (
              (l = "INFLIGHT"),
              (s = e()
                .then(function (e) {
                  var t = !!e;
                  return (
                    t || i(r("err")("Lazyload response is empty"), u),
                    u > 0 &&
                      t &&
                      p("onRetrySuccess", function () {
                        a == null ||
                          a.onRetrySuccess == null ||
                          a.onRetrySuccess(u);
                      }),
                    (l = "SUCCESS"),
                    e
                  );
                })
                .catch(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = r("getErrorSafe")(e);
                        if (
                          ((l = "FAILURE"),
                          u++,
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Lazyload failure for component ",
                                " - attempt ",
                                " of ",
                                "",
                              ])),
                            t,
                            u,
                            _ + 1,
                          ),
                          p("onAttemptFailure", function () {
                            a == null ||
                              a.onAttemptFailure == null ||
                              a.onAttemptFailure(n, u);
                          }),
                          u <= _)
                        )
                          return (
                            yield o("WAPromiseDelays").delayMs(u * 1e3),
                            m()
                          );
                        throw (
                          (a == null ? void 0 : a.onFinalFailure) != null
                            ? p("onFinalFailure", function () {
                                a.onFinalFailure == null ||
                                  a.onFinalFailure(n, u);
                              })
                            : i(n, u),
                          e
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )),
              s
            );
          case "INFLIGHT":
          case "SUCCESS":
            return r("nullthrows")(s);
          default:
            return (d || (d = n("Promise"))).reject(
              r("err")("retriable_promise_hoc:promiseStatus is invalid"),
            );
        }
      };
    }
    l.default = f;
  },
  98,
);
