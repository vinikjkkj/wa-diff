__d(
  "WAWebGroupHistoryApprovalSendAction",
  [
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupHistorySentOnceAction",
    "WAWebSendHistoryBundleAction",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumTsSurface",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = (a = t.groupMetadata) == null ? void 0 : a.participants.get(n);
          if (
            !o("WAWebGroupHistoryPostJoinEligibility").isAlreadyReceivedState(
              i == null ? void 0 : i.groupHistorySentState,
            )
          ) {
            var l = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
                n,
              ]),
              s = l.historyReceivers,
              u = l.nonHistoryReceivers;
            s.length !== 0 &&
              (o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySendOnceDefaultOnEnabled() &&
                o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce(),
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                bundleSendSource: o("WAWebWamEnumBundleSendSource")
                  .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                groupAddMemberEntryPoint: o(
                  "WAWebWamEnumAddMembersEntrypointType",
                ).ADD_MEMBERS_ENTRYPOINT_TYPE.MEMBERSHIP_APPROVAL_REQUESTS,
                groupHistoryMessagesCount: r.selectedMessageCount,
                recipientCount: e,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .MEMBERSHIP_APPROVAL_REQUESTS,
              }),
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                bundleSendSource: o("WAWebWamEnumBundleSendSource")
                  .BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                groupAddMemberEntryPoint: o(
                  "WAWebWamEnumAddMembersEntrypointType",
                ).ADD_MEMBERS_ENTRYPOINT_TYPE.MEMBERSHIP_APPROVAL_REQUESTS,
                recipientCount: e,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .MEMBERSHIP_APPROVAL_REQUESTS,
              }),
              yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
                o("WAWebWidToJid").widToGroupJid(t.id),
                s,
                u,
                r.selectedMessageCount,
                r.targetStartMessageTime,
              ));
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.sendGroupHistoryToApprovedMember = s;
  },
  98,
);
