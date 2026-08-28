__d(
  "ZenonMWThriftApprovalTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.approvalStatus,
        r = t.targetUsers,
        a = {
          approvalStatus:
            n === 0
              ? o("MultiwayCommonTypes").ApprovalStatus.DENIED
              : o("MultiwayCommonTypes").ApprovalStatus.APPROVED,
          targetUsers: new Set(r),
        };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { approvalRequest: a },
        type: o("MultiwayCommonTypes").MessageType.APPROVAL,
      });
    }
    l.toThriftApprovalRequest = e;
  },
  98,
);
