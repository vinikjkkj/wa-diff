__d(
  "WAWebHandleHatchApproval",
  ["WALogger", "WAWebHatchApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      var n = t.approvalId,
        a = t.outcomeLabel,
        i = t.record,
        l = t.resolvedDecision;
      if (l != null) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: received terminal record approvalId=",
              " decision=",
              "",
            ])),
          n,
          l,
        ),
          r("WAWebHatchApprovalManager").settleApproval(n, a));
        return;
      }
      if (i == null) {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: dropping undecidable pending request approvalId=",
              "",
            ])),
          n,
        ),
          r("WAWebHatchApprovalManager").resolveApproval(n));
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-approval: received pending request approvalId=",
            "",
          ])),
        n,
      ),
        r("WAWebHatchApprovalManager").upsertApproval(i));
    }
    function m(e) {
      (o("WALogger")
        .LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: record removed approvalId=",
              "",
            ])),
          e.approvalId,
        )
        .sendLogs("hatch-approval-record-removed"),
        r("WAWebHatchApprovalManager").settleApproval(e.approvalId));
    }
    ((l.handleHatchApprovalRecord = d),
      (l.handleRemovedHatchApprovalRecord = m));
  },
  98,
);
