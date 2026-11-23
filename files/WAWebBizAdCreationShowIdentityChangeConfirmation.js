__d(
  "WAWebBizAdCreationShowIdentityChangeConfirmation",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebTimeSpentLoggingNavigation",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      (o("WAWebModalManager").ModalManager.close(),
        o("WDSDialogBridge").openWDSDialog(u.jsx(d, { onConfirm: e })));
    }
    function d(e) {
      var t = e.onConfirm;
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "unknown",
        }),
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: r("WAWebFbtCommon")("Discard"),
          description: s._(/*BTDS*/ ""),
          destructive: !0,
          onConfirm: function () {
            (o("WDSDialogBridge").closeWDSDialog(), t());
          },
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          open: !0,
          title: r("WAWebFbtCommon")("Discard changes?"),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
