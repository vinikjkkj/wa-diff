__d(
  "WAWebLazyLoadedRetriable",
  ["WALogger", "WANullthrows", "WAPromiseDelays", "err", "getErrorSafe"],
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
    function m(e, t) {
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
    var p = 10;
    function _(e, t, n) {
      var a = d(t),
        i = "INIT",
        l,
        s = 0;
      return function u() {
        switch (i) {
          case "INIT":
          case "FAILURE":
            return (
              (i = "INFLIGHT"),
              (l = e()
                .then(function (e) {
                  var t = !!e;
                  return (
                    t || a(r("err")("Lazyload response is empty"), s),
                    s > 0 &&
                      t &&
                      m("onRetrySuccess", function () {
                        n == null ||
                          n.onRetrySuccess == null ||
                          n.onRetrySuccess(s);
                      }),
                    (i = "SUCCESS"),
                    e
                  );
                })
                .catch(async function (e) {
                  var l = r("getErrorSafe")(e);
                  if (
                    ((i = "FAILURE"),
                    s++,
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Lazyload failure for component ",
                          " - attempt ",
                          " of ",
                          "",
                        ])),
                      t,
                      s,
                      p + 1,
                    ),
                    m("onAttemptFailure", function () {
                      n == null ||
                        n.onAttemptFailure == null ||
                        n.onAttemptFailure(l, s);
                    }),
                    s <= p)
                  )
                    return (await o("WAPromiseDelays").delayMs(s * 1e3), u());
                  throw (
                    (n == null ? void 0 : n.onFinalFailure) != null
                      ? m("onFinalFailure", function () {
                          n.onFinalFailure == null || n.onFinalFailure(l, s);
                        })
                      : a(l, s),
                    e
                  );
                })),
              l
            );
          case "INFLIGHT":
          case "SUCCESS":
            return r("WANullthrows")(l);
          default:
            return Promise.reject(
              r("err")("retriable_promise_hoc:promiseStatus is invalid"),
            );
        }
      };
    }
    l.default = _;
  },
  98,
);
