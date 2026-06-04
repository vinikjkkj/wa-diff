__d(
  "handleCometErrorCodeSideEffects",
  [
    "errorCode",
    "fbt",
    "CometErrorCodeExtraHandlers",
    "CometErrorOverlay",
    "CometPlaceholder.react",
    "FDSDialogLoadingState.react",
    "OutsideExceptionKeyCommandListener.react",
    "ServerHTML.react",
    "cr:9610",
    "deferredLoadComponent",
    "handleCABRedirect",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "react",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")("CometExceptionDialog.react").__setRef(
          "handleCometErrorCodeSideEffects",
        ),
      ),
      m = new Set();
    function p(e) {
      return (
        typeof e == "object" &&
        e != null &&
        Object.prototype.hasOwnProperty.call(e, "__html")
      );
    }
    function _(e, t, n, a) {
      a === void 0 && (a = null);
      var l = n,
        s = t;
      ((l = c.jsx(r("ServerHTML.react"), { blob: l })),
        p(s) && (s = u._(/*BTDS*/ "Something went wrong.")),
        o("CometErrorOverlay").injectComponent(function (t) {
          return c.jsx(r("OutsideExceptionKeyCommandListener.react"), {
            children: c.jsx(r("CometPlaceholder.react"), {
              fallback: c.jsx(r("FDSDialogLoadingState.react"), {}),
              name: i.id,
              children: c.jsx(d, {
                debugInfo: a,
                errorCode: e,
                errorDescription: l,
                errorSummary: s,
                onClose: function () {
                  (m.delete(e), t());
                },
                testid: void 0,
              }),
            }),
          });
        }));
    }
    function f(e, t, a, i, l, s) {
      (i === void 0 && (i = null),
        l === void 0 && (l = !0),
        s === void 0 && (s = null),
        !(n("cr:9610") != null && n("cr:9610")(e)) &&
          (r("handleErrorCodeBasicSideEffects")(e) ||
            (e === 1357053 && i != null
              ? r("handleCheckpointRedirect")(i)
              : e === 1357057 && i != null
                ? r("handleCABRedirect")(i)
                : m.has(e) ||
                  (o("CometErrorCodeExtraHandlers").executeHandlers(e),
                  m.add(e),
                  l && _(e, t, a, s)))));
    }
    l.default = f;
  },
  226,
);
