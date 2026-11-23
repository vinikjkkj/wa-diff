__d(
  "WAWebOrderConfirmDiscardModal",
  [
    "fbt",
    "WAWebTimeSpentLoggingNavigation",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onOK;
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
        surface: "unknown",
        viewName: "order-confirm-discard",
      });
      var n = function () {
        (o("WDSDialogBridge").closeWDSDialog(), t());
      };
      return u.jsx(r("WDSConfirmDialog.react"), {
        title: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ ""),
        confirmLabel: s._(/*BTDS*/ ""),
        destructive: !0,
        onConfirm: n,
        onDismiss: o("WDSDialogBridge").closeWDSDialog,
        open: !0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
