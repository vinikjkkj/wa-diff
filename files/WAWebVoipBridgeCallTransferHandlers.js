__d(
  "WAWebVoipBridgeCallTransferHandlers",
  ["WAWebVoipCallTransferEntryPointStore", "WAWebVoipHandleCallTransferFailed"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleSwitchEntryPointChanged: function (t) {
        var e = t.entryPointData;
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.applyChange(e);
      },
      handleCallTransferFailed: function (t) {
        var e = t.failureData;
        return o("WAWebVoipHandleCallTransferFailed").handleCallTransferFailed(
          e,
        );
      },
    };
    l.VoipBridgeCallTransferHandlers = e;
  },
  98,
);
