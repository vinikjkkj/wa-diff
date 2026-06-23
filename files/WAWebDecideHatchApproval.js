__d(
  "WAWebDecideHatchApproval",
  [
    "WAWebHatchApprovalManager",
    "WAWebHatchApprovalOption",
    "WAWebSendHatchMetadataRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      (o("WAWebSendHatchMetadataRequest").sendHatchMetadataRequest({
        method: "hitl.approval.decide",
        approvalId: e,
        decision: s(t),
      }),
        r("WAWebHatchApprovalManager").resolveApproval(e));
    }
    function s(e) {
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
    l.decideHatchApproval = e;
  },
  98,
);
