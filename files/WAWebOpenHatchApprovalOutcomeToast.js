__d(
  "WAWebOpenHatchApprovalOutcomeToast",
  ["WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "hatch_approval_outcome_";
    function c(e) {
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, { id: "" + u + e, msg: e }),
      );
    }
    l.openHatchApprovalOutcomeToast = c;
  },
  98,
);
