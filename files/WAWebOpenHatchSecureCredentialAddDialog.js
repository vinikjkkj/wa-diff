__d(
  "WAWebOpenHatchSecureCredentialAddDialog",
  ["WAWebHatchSecureCredentialAddDialog.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebHatchSecureCredentialAddDialog.react"), {
          onClose: o("WDSDialogBridge").closeWDSDialog,
          onSaved: e,
        }),
      );
    }
    l.openHatchSecureCredentialAddDialog = u;
  },
  98,
);
