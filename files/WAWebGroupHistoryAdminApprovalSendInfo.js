__d(
  "WAWebGroupHistoryAdminApprovalSendInfo",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      if (
        !o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).isPostJoinHistoryGroupStructurallyEligible(
          o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e),
        )
      )
        return null;
      var t = o("WAWebWidFactory").asGroupWidOrThrow(e.id);
      if (
        !o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(t) ||
        !o("WAWebABProps").getABPropConfigValue(
          "group_history_send_admin_approval",
        )
      )
        return null;
      var n = o("WATimeUtils").unixTime(),
        r = await o(
          "WAWebGetGroupHistoryBundleMessagesCount",
        ).getGroupHistoryBundleMessageCount({
          groupWid: t,
          targetStartMessageTime: n,
        });
      return r === 0 ? null : { messagesCount: r, targetStartMessageTime: n };
    }
    l.resolveGroupHistoryAdminApprovalSendInfo = e;
  },
  98,
);
