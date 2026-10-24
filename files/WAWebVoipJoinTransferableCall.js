__d(
  "WAWebVoipJoinTransferableCall",
  ["WAWebVoipTransferCall"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebVoipTransferCall").transferWAWebVoipCallToThisDevice({
        hasVideo: e.isVideoCall,
        peerActiveDevice: e.peerActiveDeviceJid,
        rootCallCreator: e.rootCallCreatorJid,
        rootCallId: e.rootCallId,
      });
    }
    l.joinTransferableCallHere = e;
  },
  98,
);
