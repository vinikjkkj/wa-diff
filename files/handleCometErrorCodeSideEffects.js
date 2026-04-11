__d(
  "handleCometErrorCodeSideEffects",
  [
    "errorCode",
    "fbt",
    "CometErrorCodeExtraHandlers",
    "CometErrorOverlay",
    "CometPlaceholder.react",
    "FDSDialogLoadingState.react",
    "JSResourceForInteraction",
    "NewsRegulationErrorMessageData",
    "OutsideExceptionKeyCommandListener.react",
    "ServerHTML.react",
    "cr:9610",
    "deferredLoadComponent",
    "handleCABRedirect",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "lazyLoadComponent",
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
      m = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "CometNewsRegulationDialog.react",
        ).__setRef("handleCometErrorCodeSideEffects"),
      ),
      p = new Set();
    function _(e) {
      return (
        typeof e == "object" &&
        e != null &&
        Object.prototype.hasOwnProperty.call(e, "__html")
      );
    }
    function f(e, t, n) {
      o("CometErrorOverlay").injectComponent(function (o) {
        return c.jsx(r("OutsideExceptionKeyCommandListener.react"), {
          children: c.jsx(r("CometPlaceholder.react"), {
            fallback: c.jsx(r("FDSDialogLoadingState.react"), {}),
            name: i.id,
            children: c.jsx(m, {
              errorDescription: t,
              onClose: function () {
                (p.delete(e), o());
              },
              regulationType: n,
            }),
          }),
        });
      });
    }
    function g(e, t, n, a) {
      a === void 0 && (a = null);
      var l = n,
        s = t;
      ((l = c.jsx(r("ServerHTML.react"), { blob: l })),
        _(s) && (s = u._(/*BTDS*/ "Something went wrong.")),
        o("CometErrorOverlay").injectComponent(function (t) {
          return c.jsx(r("OutsideExceptionKeyCommandListener.react"), {
            children: c.jsx(r("CometPlaceholder.react"), {
              fallback: c.jsx(r("FDSDialogLoadingState.react"), {}),
              name: i.id,
              children: c.jsx(d, {
                debugInfo: a,
                errorDescription: l,
                errorSummary: s,
                onClose: function () {
                  (p.delete(e), t());
                },
                testid: void 0,
              }),
            }),
          });
        }));
    }
    function h(e, t, a, i, l, s) {
      if (
        (i === void 0 && (i = null),
        l === void 0 && (l = !0),
        s === void 0 && (s = null),
        !(n("cr:9610") != null && n("cr:9610")(e)) &&
          !r("handleErrorCodeBasicSideEffects")(e))
      ) {
        if (e === 1357053 && i != null) r("handleCheckpointRedirect")(i);
        else if (e === 1357057 && i != null) r("handleCABRedirect")(i);
        else if (
          !p.has(e) &&
          (o("CometErrorCodeExtraHandlers").executeHandlers(e), p.add(e), l)
        ) {
          var u = r("NewsRegulationErrorMessageData").errorCodeToRegType[e];
          u != null ? f(e, a, u) : g(e, t, a, s);
        }
      }
    }
    l.default = h;
  },
  226,
);
