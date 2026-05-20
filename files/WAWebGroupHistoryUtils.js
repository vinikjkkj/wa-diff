__d(
  "WAWebGroupHistoryUtils",
  [
    "WATimeUtils",
    "WAWebABProps",
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
        e.MessageHistoryBundleProcessState.FAILED_NO_RETRY,
        e.MessageHistoryBundleProcessState.DEDUPED,
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
      return o("WATimeUtils").unixTimeMs() <= m(e.t);
    }
    function d(e) {
      return o("WATimeUtils").unixTimeMs() <= p(e.t);
    }
    function m(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_bundle_time_limit_receiver_enforcement_secs",
      );
      return (e + t) * 1e3;
    }
    function p(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "group_history_new_user_threshold_receiver_enforcement_secs",
      );
      return m(e) + t * 1e3;
    }
    function _(e) {
      return (
        o("WAWebGroupHistoryGating").isGroupHistoryReceiverEnabled() &&
        o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e) != null &&
        !o("WAWebMsgGetters").getIsEditedAfterReceivedAsHistory(e)
      );
    }
    ((l.isValidHistoryBundleToProcess = u),
      (l.isJoinMessageWithinReceiverWindow = d),
      (l.shouldReportGroupHistoryBundleSender = _));
  },
  98,
);
