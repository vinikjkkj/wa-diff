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
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i,
              l =
                (i = t.groupMetadata) == null ? void 0 : i.participants.get(n);
            if (
              !o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
                l == null ? void 0 : l.groupHistorySentState,
              )
            ) {
              var s = o(
                  "WAWebGroupHistoryRestrictionHelper",
                ).filterParticipants([n]),
                u = s.historyReceivers,
                c = s.nonHistoryReceivers;
              u.length !== 0 &&
                (o(
                  "WAWebGroupHistoryGating",
                ).isGroupHistorySendOnceDefaultOnEnabled() &&
                  o(
                    "WAWebGroupHistorySentOnceAction",
                  ).markGroupHistorySentOnce(),
                yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
                  o("WAWebWidToJid").widToGroupJid(t.id),
                  u,
                  c,
                  r.selectedMessageCount,
                  r.targetStartMessageTime,
                  babelHelpers.extends(
                    {},
                    o(
                      "WAWebGroupHistoryNewMemberSurface",
                    ).getGroupHistoryNewMemberLogging(a),
                    {
                      bundleSendSource: o("WAWebWamEnumBundleSendSource")
                        .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                      recipientCount: e,
                    },
                  ),
                ));
            }
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.sendGroupHistoryToNewMember = s;
  },
  98,
);
