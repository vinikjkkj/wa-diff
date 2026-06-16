__d(
  "WAWebHandleHatchApproval",
  ["WAWebHatchApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.approvalId,
        n = e.decision;
      if (!(t == null || t === "")) {
        if (n != null && n !== "") {
          r("WAWebHatchApprovalManager").resolveApproval(t);
          return;
        }
        r("WAWebHatchApprovalManager").upsertApproval(
          babelHelpers.extends({}, e, { approvalId: t }),
        );
      }
    }
    l.handleHatchApproval = e;
  },
  98,
);
