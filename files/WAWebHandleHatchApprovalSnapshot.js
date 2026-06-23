__d(
  "WAWebHandleHatchApprovalSnapshot",
  ["WAWebHatchApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Set();
      for (var n of e.recent) {
        var o = n.approvalId;
        o != null && o !== "" && t.add(o);
      }
      var a = [];
      for (var i of e.pending) {
        var l = i.approvalId,
          s = i.decision;
        l != null &&
          l !== "" &&
          (s == null || s === "") &&
          !t.has(l) &&
          a.push(babelHelpers.extends({}, i, { approvalId: l }));
      }
      r("WAWebHatchApprovalManager").reconcilePending(a, e.asOfMs);
    }
    l.handleHatchApprovalSnapshot = e;
  },
  98,
);
