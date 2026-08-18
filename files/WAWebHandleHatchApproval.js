__d(
  "WAWebHandleHatchApproval",
  ["WALogger", "WAWebHatchApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var n = t.approvalId,
        a = t.record,
        i = t.resolvedDecision;
      if (i != null) {
        (o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: received terminal record approvalId=",
                " decision=",
                "",
              ])),
            n,
            i,
          )
          .sendLogs("hatch-approval-received-decision"),
          r("WAWebHatchApprovalManager").settleApproval(n));
        return;
      }
      a != null &&
        (o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: received pending request approvalId=",
                "",
              ])),
            n,
          )
          .sendLogs("hatch-approval-received-pending"),
        r("WAWebHatchApprovalManager").upsertApproval(a));
    }
    function d(e) {
      (o("WALogger")
        .LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: record removed approvalId=",
              "",
            ])),
          e.approvalId,
        )
        .sendLogs("hatch-approval-record-removed"),
        r("WAWebHatchApprovalManager").settleApproval(e.approvalId));
    }
    ((l.handleHatchApprovalRecord = c),
      (l.handleRemovedHatchApprovalRecord = d));
  },
  98,
);
