__d(
  "WAWebHandleHatchApproval",
  ["WALogger", "WAWebHatchApprovalManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = t.approvalId,
        a = t.decision;
      if (!(n == null || n === "")) {
        if (a != null && a !== "") {
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: received decision echo, clearing pending approvalId=",
                  "",
                ])),
              n,
            )
            .sendLogs("hatch-approval-received-decision"),
            r("WAWebHatchApprovalManager").resolveApproval(n));
          return;
        }
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
          r("WAWebHatchApprovalManager").upsertApproval(
            babelHelpers.extends({}, t, { approvalId: n }),
          ));
      }
    }
    l.handleHatchApproval = u;
  },
  98,
);
