__d(
  "WAWebKeepInChatWarningUnkeepOwnMsgModal",
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
      var t = e.onCancel,
        n = e.onConfirm;
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "unknown",
          viewName: "kic-unkeep-own-msg",
        }),
        u.jsx(r("WDSConfirmDialog.react"), {
          title: s._(/*BTDS*/ ""),
          description: s._(/*BTDS*/ ""),
          confirmLabel: s._(/*BTDS*/ ""),
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), n());
          },
          onDismiss: function () {
            (o("WDSDialogBridge").closeWDSDialog(), t == null || t());
          },
          open: !0,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
