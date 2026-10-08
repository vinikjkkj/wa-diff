__d(
  "WAWebCallLogMessageCallFromUi",
  ["WAWebCallLogMsgData.flow", "WAWebWamEnumCallFromUi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebCallLogMsgData.flow").CallOutcome.Missed ||
        e === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected ||
        e === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled
        ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_MISSED
        : e === o("WAWebCallLogMsgData.flow").CallOutcome.Failed
          ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_FAILED
          : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED;
    }
    l.getCallLogMessageCallFromUi = e;
  },
  98,
);
