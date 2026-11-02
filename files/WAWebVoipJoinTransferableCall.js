__d(
  "WAWebVoipJoinTransferableCall",
  [
    "WAWebVoipHandleCallTransferFailed",
    "WAWebVoipTransferCall",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      s(e);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebVoipTransferCall",
          ).transferWAWebVoipCallToThisDevice({
            hasVideo: e.isVideoCall,
            peerActiveDevice: e.peerActiveDeviceJid,
            rootCallCreator: e.rootCallCreatorJid,
            rootCallId: e.rootCallId,
          });
          t ||
            o(
              "WAWebVoipHandleCallTransferFailed",
            ).showCallTransferCouldNotConnectToast();
        })),
        u.apply(this, arguments)
      );
    }
    l.joinTransferableCallHere = e;
  },
  98,
);
