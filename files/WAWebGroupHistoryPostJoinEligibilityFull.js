__d(
  "WAWebGroupHistoryPostJoinEligibilityFull",
  [
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryPostJoinEligibility",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.groupMetadata,
            r = e.groupWid,
            a = e.joinTimeFallback,
            i = e.participant,
            l = o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).getPostJoinHistoryGroupEligibility(
              o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).groupContextFromMetadata(n),
            );
          if (!l.eligible) return l;
          var s = o(
            "WAWebGroupHistoryPostJoinEligibility",
          ).getParticipantPostJoinEligibility(i, a);
          if (!s.eligible) return s;
          var u = (t = i.joinTime) != null ? t : a;
          if (u == null) return { eligible: !1, reason: "no_join_time" };
          var c = yield o(
            "WAWebGetGroupHistoryBundleMessagesCount",
          ).getGroupHistoryBundleMessageCount({
            groupWid: r,
            targetStartMessageTime: u,
          });
          return c === 0
            ? { eligible: !1, reason: "no_available_messages" }
            : { eligible: !0, messageCount: c };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupMetadata,
            n = e.groupWid,
            r = e.joinTimeFallback,
            a = e.participants,
            i = o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).getPostJoinHistoryGroupEligibility(
              o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).groupContextFromMetadata(t),
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
            c.eligible
              ? l.push(u)
              : s.push({ participant: u, reason: c.reason });
          }
          if (l.length === 0)
            return { eligible: l, ineligible: s, messageCount: 0 };
          var d = r != null ? r : l[0].joinTime,
            m = yield o(
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
        })),
        c.apply(this, arguments)
      );
    }
    ((l.isEligibleForPostJoinHistoryFull = e),
      (l.isEligibleForPostJoinHistoryFullMulti = u));
  },
  98,
);
