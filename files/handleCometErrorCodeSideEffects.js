__d(
  "handleCometErrorCodeSideEffects",
  [
    "errorCode",
    "fbt",
    "CometErrorCodeExtraHandlers",
    "CometErrorOverlay",
    "CometExceptionDialog.react",
    "ServerHTML.react",
    "cr:9610",
    "handleCABRedirect",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = new Set();
    function m(e) {
      return (
        typeof e == "object" &&
        e != null &&
        Object.prototype.hasOwnProperty.call(e, "__html")
      );
    }
    function p(e, t, n, a) {
      a === void 0 && (a = null);
      var i = n,
        l = t;
      ((i = c.jsx(r("ServerHTML.react"), { blob: i })),
        m(l) && (l = u._(/*BTDS*/ "Something went wrong.")),
        o("CometErrorOverlay").injectComponent(function (t) {
          return c.jsx(r("CometExceptionDialog.react"), {
            debugInfo: a,
            errorCode: e,
            errorDescription: i,
            errorSummary: l,
            onClose: function () {
              (d.delete(e), t());
            },
            testid: void 0,
          });
        }));
    }
    function _(e, t, a, i, l, s) {
      (i === void 0 && (i = null),
        l === void 0 && (l = !0),
        s === void 0 && (s = null),
        !(n("cr:9610") != null && n("cr:9610")(e)) &&
          (r("handleErrorCodeBasicSideEffects")(e) ||
            (e === 1357053 && i != null
              ? r("handleCheckpointRedirect")(i)
              : e === 1357057 && i != null
                ? r("handleCABRedirect")(i)
                : d.has(e) ||
                  (o("CometErrorCodeExtraHandlers").executeHandlers(e),
                  d.add(e),
                  l && p(e, t, a, s)))));
    }
    l.default = _;
  },
  226,
);
