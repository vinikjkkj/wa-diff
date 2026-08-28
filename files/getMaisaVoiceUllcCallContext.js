__d(
  "getMaisaVoiceUllcCallContext",
  ["MetaConfig", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      audioTrackType: "GenaiAudioTrack",
      edgerayAddress: {
        name: "meta-ai-realtime.facebook.com",
        port: 3478,
        vipType: "DOMAIN",
      },
      enableDtlsInStun: !1,
      videoTrackType: "Unknown",
    };
    function s() {
      var e,
        t = (e = r("MetaConfig")._("370")) == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : void 0;
    }
    function u() {
      if (!(!r("gkx")("13440") && !r("gkx")("17210")))
        return babelHelpers.extends({}, e, { targetServerTier: s() });
    }
    l.default = u;
  },
  98,
);
