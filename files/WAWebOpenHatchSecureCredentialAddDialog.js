__d(
  "WAWebOpenHatchSecureCredentialAddDialog",
  ["WAWebHatchSecureCredentialAddDialog.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebHatchSecureCredentialAddDialog.react"), {
          onClose: o("WDSDialogBridge").closeWDSDialog,
        }),
      );
    }
    l.openHatchSecureCredentialAddDialog = u;
  },
  98,
);
