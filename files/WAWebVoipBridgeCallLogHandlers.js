__d(
  "WAWebVoipBridgeCallLogHandlers",
  [
    "WAWebVoipActionWriteCallLogEventCallEnding",
    "WAWebVoipActionWriteCallLogEventCallMissed",
    "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
    "WAWebVoipActionWriteCallLogEventUpdate1to1",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActionWriteCallLogOfferNotice",
    "WAWebVoipActionWriteCallLogPlaceholder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      generateCallLog: function (t) {
        var e = t.props;
        return o(
          "WAWebVoipActionWriteCallLogOfferNotice",
        ).generateCallLogOfferNotice(e);
      },
      generateCallLogOfferNotice: function (t) {
        return o(
          "WAWebVoipActionWriteCallLogOfferNotice",
        ).generateCallLogOfferNotice(t);
      },
      writeCallOfferPlaceholder: function (t) {
        return o(
          "WAWebVoipActionWriteCallLogPlaceholder",
        ).writeCallOfferPlaceholder(t);
      },
      generateCallLogFromNativeCallEndingEvent: function (t) {
        var e = t.callEndingData;
        return o(
          "WAWebVoipActionWriteCallLogEventCallEnding",
        ).generateCallLogFromNativeCallEndingEvent(e);
      },
      generateCallLogFromEventUpdateJoinable: function (t) {
        var e = t.joinableCallLogData;
        return o(
          "WAWebVoipActionWriteCallLogEventUpdateJoinable",
        ).generateCallLogFromEventUpdateJoinable(e);
      },
      generateCallLogFromEventCallMissed: function (t) {
        var e = t.callMissedData;
        return o(
          "WAWebVoipActionWriteCallLogEventCallMissed",
        ).generateCallLogFromEventCallMissed(e);
      },
      generateCallLogFromEventUpdate1to1: function (t) {
        var e = t.call1to1LogData;
        return o(
          "WAWebVoipActionWriteCallLogEventUpdate1to1",
        ).generateCallLogFromEventUpdate1to1(e);
      },
      generateCallLogFromEventGroupInfoChanged: function (t) {
        var e = t.groupInfoChangedData;
        return o(
          "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
        ).generateCallLogFromEventGroupInfoChanged(e);
      },
    };
    l.VoipBridgeCallLogHandlers = e;
  },
  98,
);
