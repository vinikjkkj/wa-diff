__d(
  "WAWebOpenHatchDecisionNotSentToast",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "hatch_decision_not_sent";
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { id: c, msg: s._(/*BTDS*/ "") }),
      );
    }
    l.openHatchDecisionNotSentToast = d;
  },
  226,
);
