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
            i = e.participant;
          if (
            !o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).isEligibleForPostJoinHistory(
              i,
              o(
                "WAWebGroupHistoryPostJoinEligibility",
              ).groupContextFromMetadata(n),
              a,
            )
          )
            return { eligible: !1, reason: "ineligible" };
          var l = (t = i.joinTime) != null ? t : a;
          if (l == null) return { eligible: !1, reason: "ineligible" };
          var s = yield o(
            "WAWebGetGroupHistoryBundleMessagesCount",
          ).getGroupHistoryBundleMessageCount({
            groupWid: r,
            targetStartMessageTime: l,
          });
          return s === 0
            ? { eligible: !1, reason: "no_available_messages" }
            : { eligible: !0 };
        })),
        s.apply(this, arguments)
      );
    }
    l.isEligibleForPostJoinHistoryFull = e;
  },
  98,
);
