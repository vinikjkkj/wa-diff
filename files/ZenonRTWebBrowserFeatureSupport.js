__d(
  "ZenonRTWebBrowserFeatureSupport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return (
        typeof window.HTMLCanvasElement == "function" &&
        typeof window.HTMLCanvasElement.prototype.captureStream == "function"
      );
    }
    function l() {
      return d("getSenders");
    }
    function s() {
      return (
        typeof window.RTCRtpSender == "function" &&
        typeof window.RTCRtpSender.prototype.replaceTrack == "function"
      );
    }
    function u() {
      return (
        typeof window.RTCRtpSender == "function" &&
        typeof window.RTCRtpSender.prototype.createEncodedStreams == "function"
      );
    }
    function c() {
      return window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
    }
    function d(e) {
      return typeof RTCPeerConnection.prototype[e] == "function";
    }
    ((i.isCanvasStreamSupported = e),
      (i.isGetSendersSupported = l),
      (i.isReplaceTrackSupported = s),
      (i.isInsertableStreamsSupported = u),
      (i.isInsertableStreamsSupportedInSafari = c));
  },
  66,
);
