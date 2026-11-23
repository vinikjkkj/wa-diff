__d(
  "WAWebGroupHistoryNewMemberSendAction",
  [
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNewMemberSurface",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupHistorySentOnceAction",
    "WAWebSendHistoryBundleAction",
    "WAWebWamEnumBundleSendSource",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.chat,
        n = e.newMemberWid,
        r = e.send,
        o = e.surface;
      return s({ chat: t, newMemberWids: [n], send: r, surface: o });
    }
    async function s(e) {
      var t = e.chat,
        n = e.newMemberWids,
        r = e.send,
        a = e.surface,
        i = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
          n.filter(function (e) {
            var n;
            return !o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).isAlreadyReceivedState(
              (n = t.groupMetadata) == null ||
                (n = n.participants.get(e)) == null
                ? void 0
                : n.groupHistorySentState,
            );
          }),
        ),
        l = i.historyReceivers,
        s = i.nonHistoryReceivers;
      if (l.length !== 0) {
        o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled() &&
          o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce();
        var u = babelHelpers.extends(
            {},
            o(
              "WAWebGroupHistoryNewMemberSurface",
            ).getGroupHistoryNewMemberLogging(a),
            {
              bundleSendSource: o("WAWebWamEnumBundleSendSource")
                .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
              recipientCount: l.length,
            },
          ),
          c = await o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
            o("WAWebWidToJid").widToGroupJid(t.id),
            l,
            s,
            r.selectedMessageCount,
            r.targetStartMessageTime,
            u,
          );
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.sendAcked(u, c);
      }
    }
    ((l.sendGroupHistoryToNewMember = e), (l.sendGroupHistoryToNewMembers = s));
  },
  98,
);
