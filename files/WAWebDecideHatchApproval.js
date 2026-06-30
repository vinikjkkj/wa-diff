__d(
  "WAWebDecideHatchApproval",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebHatchApprovalOption",
    "WAWebSendHatchMetadataRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var a = u(n);
      (o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: deciding approvalId=",
              " decision=",
              "",
            ])),
          t,
          a,
        )
        .sendLogs("hatch-approval-decide"),
        o("WAWebSendHatchMetadataRequest").sendHatchMetadataRequest({
          method: "hitl.approval.decide",
          approvalId: t,
          decision: a,
        }),
        r("WAWebHatchApprovalManager").resolveApproval(t));
    }
    function u(e) {
      return e === r("WAWebHatchApprovalOption").AllowOnce
        ? "allow_once"
        : e === r("WAWebHatchApprovalOption").AllowAlways
          ? "allow_always"
          : e === r("WAWebHatchApprovalOption").Deny
            ? "deny"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.decideHatchApproval = s;
  },
  98,
);
