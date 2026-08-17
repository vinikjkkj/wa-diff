__d(
  "WAWebHandleHatchApprovalSnapshot",
  ["WALogger", "WAWebHatchLegacyApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = new Set();
      for (var a of t.recent) {
        var i = a.approvalId;
        i != null && i !== "" && n.add(i);
      }
      var l = [];
      for (var s of t.pending) {
        var u = s.approvalId,
          c = s.decision;
        u != null &&
          u !== "" &&
          (c == null || c === "") &&
          !n.has(u) &&
          l.push(babelHelpers.extends({}, s, { approvalId: u }));
      }
      (o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: received snapshot pending=",
              " resolved=",
              " asOfMs=",
              "",
            ])),
          l.length,
          n.size,
          t.asOfMs,
        )
        .sendLogs("hatch-approval-snapshot-received"),
        r("WAWebHatchLegacyApprovalManager").reconcilePending(l, t.asOfMs));
    }
    l.handleHatchApprovalSnapshot = s;
  },
  98,
);
