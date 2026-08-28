__d(
  "SecuredActionExteriorFalcoEventLogger",
  [
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "usePartialViewImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = r("requireDeferred")("SecuredActionExteriorFalcoEvent").__setRef(
        "SecuredActionExteriorFalcoEventLogger",
      );
    function p(e) {
      r("promiseDone")(m.load(), function (t) {
        t.log(function () {
          return e;
        });
      });
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.loggingParams,
        a = d(!1),
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a.current && (a.current = !1);
          }),
          (t[0] = i))
        : (i = t[0]),
        c(i, void 0));
      var l;
      t[1] !== n
        ? ((l = function () {
            a.current ||
              (r("promiseDone")(m.load(), function (e) {
                e.log(function () {
                  return n;
                });
              }),
              (a.current = !0));
          }),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s = l,
        u;
      return (
        t[3] !== s
          ? ((u = { onImpressionStart: s }), (t[3] = s), (t[4] = u))
          : (u = t[4]),
        r("usePartialViewImpression")(u)
      );
    }
    ((l.SecuredActionExteriorFalcoEventLogger = p),
      (l.useSecuredActionExteriorFalcoEventLoggerWithRef = _));
  },
  98,
);
