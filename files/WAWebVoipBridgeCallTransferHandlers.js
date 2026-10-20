__d(
  "WAWebVoipBridgeCallTransferHandlers",
  ["WAWebVoipCallTransferEntryPointStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleSwitchEntryPointChanged: function (t) {
        var e = t.entryPointData;
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.applyChange(e);
      },
    };
    l.VoipBridgeCallTransferHandlers = e;
  },
  98,
);
