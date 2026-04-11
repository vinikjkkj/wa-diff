__d(
  "useBaseDeferredDialog",
  [
    "CometDialogContext",
    "CometSuspendedDialogImpl.react",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "tracePolicyFromResource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d(e, t, n) {
      var a = o("react-compiler-runtime").c(5),
        i = c(r("CometDialogContext")),
        l = n == null ? void 0 : n.baseModalProps,
        s;
      return (
        a[0] !== i || a[1] !== l || a[2] !== e || a[3] !== t
          ? ((s = function (o, a, s) {
              var n = r("deferredLoadComponent")(e);
              i(
                r("CometSuspendedDialogImpl.react"),
                {
                  animateReveal:
                    (l == null ? void 0 : l.unstable_animateEnter) === !0,
                  dialog: n,
                  dialogProps: babelHelpers.extends({}, o, {
                    loadImmediately: !0,
                  }),
                  fallback: t,
                },
                {
                  loadType: "deferred",
                  tracePolicy: r("tracePolicyFromResource")("comet.dialog", e),
                },
                a,
                { baseModalProps: l, replaceCurrentDialog: s },
              );
            }),
            (a[0] = i),
            (a[1] = l),
            (a[2] = e),
            (a[3] = t),
            (a[4] = s))
          : (s = a[4]),
        s
      );
    }
    l.default = d;
  },
  98,
);
