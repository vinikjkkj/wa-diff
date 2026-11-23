__d(
  "getVideoPlayerUserFacingErrorMessageFromError",
  ["fbt", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return (
        r("gkx")("24345") &&
        e.message.toLowerCase().indexOf("audio_renderer_error") >= 0
      );
    }
    function u(e) {
      return e.message.indexOf("DEVICE_CERTIFICATE_REVOKED") >= 0;
    }
    function c(e) {
      return (
        e.name.indexOf("VideoImplementationsDashManifestUnsupportedCodecs") >=
          0 || e.name.indexOf("VideoImplementationsMediaSourceUnsupported") >= 0
      );
    }
    function d(e) {
      return e.name === "OZ_NETWORK" && e.message.includes("CDN URL expired");
    }
    function m(t) {
      var n = null;
      return (
        e(t)
          ? (n = s._(/*BTDS*/ ""))
          : u(t)
            ? (n = s._(/*BTDS*/ ""))
            : c(t)
              ? (n = s._(/*BTDS*/ ""))
              : d(t) && (n = s._(/*BTDS*/ "")),
        n
      );
    }
    l.default = m;
  },
  226,
);
