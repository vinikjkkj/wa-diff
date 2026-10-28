__d(
  "WAWebOpenHatchApprovalHistoryDialog",
  ["WAWebHatchApprovalHistoryDialog.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebHatchApprovalHistoryDialog.react"), {
          entry: e,
          onClose: o("WDSDialogBridge").closeWDSDialog,
        }),
      );
    }
    l.openHatchApprovalHistoryDialog = u;
  },
  98,
);
