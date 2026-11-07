__d(
  "WAWebVoipBridgeCallTransferHandlers",
  [
    "WAWebVoipActionWriteCallLogSwitchEntryPoint",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipHandleCallAutoSwitch",
    "WAWebVoipHandleCallTransferFailed",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleSwitchEntryPointChanged: function (t) {
        var e = t.entryPointData;
        return (
          o(
            "WAWebVoipCallTransferEntryPointStore",
          ).WAWebVoipCallTransferEntryPointStore.applyChange(e),
          o(
            "WAWebVoipActionWriteCallLogSwitchEntryPoint",
          ).writeCallLogForSwitchEntryPoint(e)
        );
      },
      handleCallTransferFailed: function (t) {
        var e = t.failureData;
        return o("WAWebVoipHandleCallTransferFailed").handleCallTransferFailed(
          e,
        );
      },
      handleCallAutoSwitch: function (t) {
        var e = t.autoSwitchData;
        return o("WAWebVoipHandleCallAutoSwitch").handleCallAutoSwitch(e);
      },
    };
    l.VoipBridgeCallTransferHandlers = e;
  },
  98,
);
