__d(
  "WAWebGroupHistoryNewMemberSendAction",
  [
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNewMemberSurface",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySentOnceAction",
    "WAWebSendHistoryBundleAction",
    "WAWebWamEnumBundleSendSource",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = t.chat,
            a = t.newMemberWid,
            i = t.send,
            l = t.surface,
            s = (n = r.groupMetadata) == null ? void 0 : n.participants.get(a);
          if (
            !o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
              s == null ? void 0 : s.groupHistorySentState,
            )
          ) {
            var u = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
                a,
              ]),
              c = u.historyReceivers,
              d = u.nonHistoryReceivers;
            c.length !== 0 &&
              (o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySendOnceDefaultOnEnabled() &&
                o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce(),
              yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
                o("WAWebWidToJid").widToGroupJid(r.id),
                c,
                d,
                i.selectedMessageCount,
                i.targetStartMessageTime,
                babelHelpers.extends(
                  {},
                  o(
                    "WAWebGroupHistoryNewMemberSurface",
                  ).getGroupHistoryNewMemberLogging(l),
                  {
                    bundleSendSource: o("WAWebWamEnumBundleSendSource")
                      .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                    recipientCount: e,
                  },
                ),
              ));
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.sendGroupHistoryToNewMember = s;
  },
  98,
);
