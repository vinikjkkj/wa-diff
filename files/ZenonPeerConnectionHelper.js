__d(
  "ZenonPeerConnectionHelper",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e.signalingState !== "closed" && e.close();
    }
    function s() {
      return RTCPeerConnection.generateCertificate({
        name: "ECDSA",
        namedCurve: "P-256",
      });
    }
    function u(e, t) {
      t === void 0 && (t = {});
      try {
        return new RTCPeerConnection(babelHelpers.extends({}, t));
      } catch (e) {
        var n = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("rtc_www")
            .catching(n)
            .warn("Failed to create peer connection"),
          n
        );
      }
    }
    ((l.closePeerConnection = e),
      (l.generateCertificate = s),
      (l.createPeerConnection = u));
  },
  98,
);
