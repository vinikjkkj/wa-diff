__d(
  "WAWebOrderConfirmDiscardModal",
  [
    "fbt",
    "WAWebTimeSpentLoggingNavigation",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onOK,
        a;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { surface: "unknown", viewName: "order-confirm-discard" }),
          (t[0] = a))
        : (a = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(a));
      var i;
      t[1] !== n
        ? ((i = function () {
            (o("WDSDialogBridge").closeWDSDialog(), n());
          }),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c,
        d,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Discard changes?")),
          (d = s._(
            /*BTDS*/ "If you close this, your draft will be discarded.",
          )),
          (m = s._(/*BTDS*/ "Discard")),
          (t[3] = c),
          (t[4] = d),
          (t[5] = m))
        : ((c = t[3]), (d = t[4]), (m = t[5]));
      var p;
      return (
        t[6] !== l
          ? ((p = u.jsx(r("WDSConfirmDialog.react"), {
              title: c,
              description: d,
              confirmLabel: m,
              destructive: !0,
              onConfirm: l,
              onDismiss: o("WDSDialogBridge").closeWDSDialog,
              open: !0,
            })),
            (t[6] = l),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = c;
  },
  226,
);
