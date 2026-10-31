__d(
  "WAWebOpenSharableEventHiddenGuestsDialogAction",
  ["WAWebSharableEventHiddenGuestsDialog.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebSharableEventHiddenGuestsDialog.react"), {
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
        }),
      );
    }
    l.openSharableEventHiddenGuestsDialog = u;
  },
  98,
);
