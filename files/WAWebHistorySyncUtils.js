__d(
  "WAWebHistorySyncUtils",
  [
    "WATimeUtils",
    "WAWebChatConstants",
    "WAWebEnvironment",
    "WAWebPrimaryFeaturesModel",
    "WAWebSyncGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (!r("WAWebEnvironment").isWindows)
        return 90 * o("WATimeUtils").DAY_SECONDS;
      if (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .extendedHistorySyncOnDemand &&
        o(
          "WAWebSyncGatingUtils",
        ).isOnDemandExtendedHistorySyncForHybridEnabled()
      ) {
        var e = o(
          "WAWebSyncGatingUtils",
        ).getHistorySyncOnDemandTimeBoundaryDaysForDesktops();
        return e * o("WATimeUtils").DAY_SECONDS;
      }
      return o("WATimeUtils").YEAR_SECONDS;
    }
    function s(e) {
      return e ===
        o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
          .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY ||
        e ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .NOT_INCLUDED_IN_HIST_SYNC ||
        e ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY ||
        e ===
          o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS
        ? !0
        : e ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType.INCOMPLETE ||
            e ===
              o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
          ? !1
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.getEarliestHistorySyncDate = e),
      (l.primaryHasMoreMessagesReadyToLoad = s));
  },
  98,
);
