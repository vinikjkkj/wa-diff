__d(
  "OzCustomParsers",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      return new Map([
        [
          "fbProjection",
          function (e) {
            try {
              return e.Period[0].AdaptationSet[0].$.FBProjection || null;
            } catch (e) {
              return null;
            }
          },
        ],
        [
          "hasInbandCaptionsFromAccessibility",
          function (e) {
            var t = e.Period[0],
              n = t && t.AdaptationSet[0].Accessibility;
            return n && n[0]
              ? n[0].$.schemeIdUri === "urn:scte:dash:cc:cea-608:2015"
              : !1;
          },
        ],
        [
          "hasInbandCaptionsFromUsingASRCaptions",
          function (e) {
            var t = Number.parseInt(e.$.usingASRCaptions, 0);
            return !isNaN(t) && t != 0;
          },
        ],
        [
          "hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding",
          function (e) {
            var t = Number.parseInt(
              e.$.isUsingAsrCaptionsEmployeeDogfooding,
              0,
            );
            return !isNaN(t) && t != 0;
          },
        ],
        [
          "hasVTTRepresentationCaptions",
          function (e) {
            return (
              e.Period[0].AdaptationSet.find(function (e) {
                var t;
                return (
                  ((t = e.$.mimeType) == null
                    ? void 0
                    : t.startsWith("application")) && e.$.lang != null
                );
              }) != null
            );
          },
        ],
        [
          "isLiveTemplated",
          function (e) {
            return e.$.FBIsLiveTemplated === "true";
          },
        ],
        [
          "isFBMS",
          function (e) {
            return e.$.FBMS === "true";
          },
        ],
        [
          "isFBWasLive",
          function (e) {
            return e.$.FBWasLive === "true";
          },
        ],
        [
          "loapStreamType",
          function (e) {
            return e.$.loapStreamType ? parseInt(e.$.loapStreamType, 10) : 0;
          },
        ],
        [
          "fbManifestIdentifier",
          function (e) {
            var t;
            return (t = e.$.FBManifestIdentifier) != null ? t : "";
          },
        ],
        [
          "lastVideoFrameTs",
          function (e) {
            return e.$.lastVideoFrameTs
              ? Number.parseInt(e.$.lastVideoFrameTs, 10)
              : null;
          },
        ],
        [
          "currentServerTimeMs",
          function (e) {
            return e.$.currentServerTimeMs
              ? Number.parseInt(e.$.currentServerTimeMs, 10)
              : null;
          },
        ],
        [
          "validationErrors",
          function (e) {
            var t;
            return (t = e.$.validationErrors) != null ? t : "";
          },
        ],
      ]);
    }
    i.createOzCustomParser = e;
  },
  66,
);
