__d(
  "WAWebOpenHatchActivityGoalDialog",
  ["WAWebHatchActivityGoalDialog.react", "WDSDialogBridge", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebHatchActivityGoalDialog.react"), {
          onClose: o("WDSDialogBridge").closeWDSDialog,
          rowKey: e,
        }),
      );
    }
    l.openHatchActivityGoalDialog = u;
  },
  98,
);
