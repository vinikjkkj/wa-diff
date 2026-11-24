__d(
  "WAWebGroupHistoryPostJoinEligibilityFull",
  [
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = e.groupMetadata,
        r = e.groupWid,
        a = e.joinTimeFallback,
        i = e.participant,
        l = e.windowEnd,
        s = o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(
          n,
        ),
        u = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).getPostJoinHistoryGroupEligibility(s);
      if (!u.eligible) return u;
      var c = o(
        "WAWebGroupHistoryPostJoinEligibility",
      ).getParticipantPostJoinEligibilityInGroup(
        i,
        s,
        a,
        o("WAWebGroupHistoryRestrictionHelper").isPostJoinHistoryRestrictedWid,
      );
      if (!c.eligible) return c;
      var d = (t = i.joinTime) != null ? t : a;
      if (d == null) return { eligible: !1, reason: "no_join_time" };
      var m = await o(
        "WAWebGetGroupHistoryBundleMessagesCount",
      ).getGroupHistoryBundleMessageCount({
        groupWid: r,
        targetStartMessageTime:
          l != null
            ? l
            : o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).getPostJoinHistoryWindowEnd(i.id, d),
      });
      return m === 0
        ? { eligible: !1, reason: "no_available_messages" }
        : { eligible: !0, messageCount: m };
    }
    async function s(e) {
      var t = e.groupMetadata,
        n = e.groupWid,
        r = e.joinTimeFallback,
        a = e.participants,
        i = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).getPostJoinHistoryGroupEligibility(
          o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(t),
        );
      if (!i.eligible)
        return {
          eligible: [],
          ineligible: a.map(function (e) {
            return { participant: e, reason: i.reason };
          }),
          messageCount: 0,
        };
      var l = [],
        s = [];
      for (var u of a) {
        var c = o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).getParticipantPostJoinEligibility(u, r);
        c.eligible ? l.push(u) : s.push({ participant: u, reason: c.reason });
      }
      if (l.length === 0)
        return { eligible: l, ineligible: s, messageCount: 0 };
      var d = r != null ? r : l[0].joinTime,
        m = await o(
          "WAWebGetGroupHistoryBundleMessagesCount",
        ).getGroupHistoryBundleMessageCount({
          groupWid: n,
          targetStartMessageTime: d,
        });
      return m === 0
        ? {
            eligible: [],
            ineligible: [].concat(
              s,
              l.map(function (e) {
                return { participant: e, reason: "no_available_messages" };
              }),
            ),
            messageCount: 0,
          }
        : { eligible: l, ineligible: s, messageCount: m };
    }
    ((l.isEligibleForPostJoinHistoryFull = e),
      (l.isEligibleForPostJoinHistoryFullMulti = s));
  },
  98,
);
