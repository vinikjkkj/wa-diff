__d(
  "WAWebGroupHistoryPostJoinEligibilityFull",
  [
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryPostJoinEligibility",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = e.groupMetadata,
        r = e.groupWid,
        a = e.joinTimeFallback,
        i = e.participant;
      if (
        !o("WAWebGroupHistoryPostJoinEligibility").isEligibleForPostJoinHistory(
          i,
          o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(n),
          a,
        )
      )
        return { eligible: !1, reason: "ineligible" };
      var l = (t = i.joinTime) != null ? t : a;
      if (l == null) return { eligible: !1, reason: "ineligible" };
      var s = await o(
        "WAWebGetGroupHistoryBundleMessagesCount",
      ).getGroupHistoryBundleMessageCount({
        groupWid: r,
        targetStartMessageTime: l,
      });
      return s === 0
        ? { eligible: !1, reason: "no_available_messages" }
        : { eligible: !0 };
    }
    l.isEligibleForPostJoinHistoryFull = e;
  },
  98,
);
