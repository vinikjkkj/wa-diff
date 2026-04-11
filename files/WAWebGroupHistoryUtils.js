__d(
  "WAWebGroupHistoryUtils",
  [
    "WAWebABProps",
    "WAWebClock",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAWebGroupHistoryMsgData.flow"))
          .MessageHistoryBundleProcessState.DOWNLOADING,
        e.MessageHistoryBundleProcessState.DOWNLOADED,
        e.MessageHistoryBundleProcessState.PROCESSING,
        e.MessageHistoryBundleProcessState.INJECTED,
        e.MessageHistoryBundleProcessState.INJECTED_PARTIAL,
      ];
    function u(e, t) {
      var n;
      return !(
        t == null ||
        !e.id.remote.isGroup() ||
        e.id.fromMe ||
        s.includes(t) ||
        !(
          (n = e.groupHistoryBundleMetadata) != null &&
          n.historyReceivers.some(function (e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(e);
          })
        ) ||
        !c(e)
      );
    }
    function c(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_bundle_time_limit_receiver_enforcement_secs",
      );
      return o("WAWebClock").Clock.getServerTimeMs() <= e.t * 1e3 + t * 1e3;
    }
    function d(e) {
      return (
        o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() &&
        o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e) != null &&
        !o("WAWebMsgGetters").getIsEditedAfterReceivedAsHistory(e)
      );
    }
    ((l.isValidHistoryBundleToProcess = u),
      (l.shouldReportGroupHistoryBundleSender = d));
  },
  98,
);
