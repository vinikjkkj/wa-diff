__d(
  "WAWebLazyLoadedRetriable",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebLazyLoadCrashAnnotations",
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
    function _(e, t) {
      try {
        return t();
      } catch (t) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebLazyLoadedRetriable: ",
                " predicate threw",
              ])),
            e,
          ),
          !1
        );
      }
    }
    var f = 10;
    function g(e, t, n) {
      var a = m(t),
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
                      p("onRetrySuccess", function () {
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
                  ((i = "FAILURE"),
                    s++,
                    o(
                      "WAWebLazyLoadCrashAnnotations",
                    ).annotateCrashWithLazyLoadFailure(t),
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Lazyload failure for component ",
                          " - attempt ",
                          " of ",
                          "",
                        ])),
                      t,
                      s,
                      f + 1,
                    ),
                    p("onAttemptFailure", function () {
                      n == null ||
                        n.onAttemptFailure == null ||
                        n.onAttemptFailure(l, s);
                    }));
                  var c = _("isTerminalError", function () {
                    return (
                      (n == null || n.isTerminalError == null
                        ? void 0
                        : n.isTerminalError(l)) === !0
                    );
                  });
                  if (!c && s <= f)
                    return (await o("WAPromiseDelays").delayMs(s * 1e3), u());
                  throw (
                    (n == null ? void 0 : n.onFinalFailure) != null
                      ? p("onFinalFailure", function () {
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
            return r("nullthrows")(l);
          default:
            return Promise.reject(
              r("err")("retriable_promise_hoc:promiseStatus is invalid"),
            );
        }
      };
    }
    l.default = g;
  },
  98,
);
