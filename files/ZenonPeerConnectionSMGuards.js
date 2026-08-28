__d(
  "ZenonPeerConnectionSMGuards",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t.type === "applyRemoteSdp" && t.payload.sdp.type === "offer";
    }
    function l(e, t) {
      return (
        t.type === "applyRemoteSdp" &&
        (t.payload.sdp.type === "answer" || t.payload.sdp.type === "pranswer")
      );
    }
    function s(e, t) {
      var n;
      return ((n = t.data) == null ? void 0 : n.type) === "pranswer";
    }
    function u(e, t) {
      return (
        t.type === "iceConnectionStateChange" &&
        (t.payload.iceConnectionState === "connected" ||
          t.payload.iceConnectionState === "completed")
      );
    }
    function c(e) {
      return (
        e.iceConnectionState === "connected" ||
        e.iceConnectionState === "completed"
      );
    }
    function d(e, t) {
      return (
        t.type === "iceConnectionStateChange" &&
        t.payload.iceConnectionState === "disconnected"
      );
    }
    function m(e) {
      return (
        e.iceConnectionState !== "connected" &&
        e.iceConnectionState !== "completed"
      );
    }
    function p(e) {
      var t;
      return (t = e.outstandingLocalOffer) != null ? t : !1;
    }
    ((i.applyRemoteOfferSdpGuard = e),
      (i.applyRemoteAnswerSdpGuard = l),
      (i.prAnswerSetGuard = s),
      (i.iceConnectedEventGuard = u),
      (i.iceConnectedGuard = c),
      (i.iceDisconnectedEventGuard = d),
      (i.iceNotConnectedGuard = m),
      (i.outstandingLocalOfferGuard = p));
  },
  66,
);
