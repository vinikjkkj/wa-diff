__d(
  "VideoPlayerOzImplementationData",
  ["err", "getAvailableMimeCodecsFromDashManifest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.canUseOz,
        n = e.dashManifestUrl,
        o = e.dashManifestUrlOverride_DO_NOT_USE,
        a = e.dashManifestXmlString,
        i = e.experimentationConfig,
        l = e.initialAudioUserPreferredLanguage,
        s = e.initiateLivePlaybackFromStart,
        u = e.minQualityPreference,
        c = e.skipManifestPrevalidation;
      if (t !== !0) {
        var d = r("err")("canUseOz=" + String(t));
        return ((d.name = "GotCanUseOz/" + String(t)), d);
      }
      var m = o != null || a == null || a === "" ? null : a,
        p = o != null ? o : n == null || n === "" ? null : n;
      if (m == null && p == null) {
        var _ = r("err")("Got no manifest XML and no URL to it");
        return ((_.name = "GotNoManifestOrURL"), _);
      }
      var f = i.getBool("enable_managed_media_source", !1);
      if (f) {
        if (!window.ManagedMediaSource) {
          var g = r("err")("window.ManagedMediaSource is missing");
          return ((g.name = "GotMissingManagedMediaSourceAPI"), g);
        }
      } else if (!window.MediaSource) {
        var h = r("err")("window.MediaSource is missing");
        return ((h.name = "GotMissingMediaSourceAPI"), h);
      }
      if (m != null && c !== !0) {
        var y = r("getAvailableMimeCodecsFromDashManifest")(m, f).filter(
            function (e) {
              return e.isRequiredForPlayback;
            },
          ),
          C = y.filter(function (e) {
            return !e.isTypeSupported;
          });
        if (C.length > 0) {
          var b = r("err")(
            "%s out of %s codecs in DASH manifest required for playback are unsupported: %s",
            String(C.length),
            String(y.length),
            y
              .map(function (e) {
                return (
                  e.mimeType +
                  "/" +
                  e.codecs +
                  "=" +
                  (e.isTypeSupported ? "yes" : "no")
                );
              })
              .join(", "),
          );
          return ((b.name = "GotManifestWithUnsupportedCodecs"), b);
        }
      }
      return {
        experimentationConfig: i,
        initialAudioUserPreferredLanguage: l != null ? l : null,
        initialVideoVariant: { lang: l != null ? l : null, role: null },
        initiateLivePlaybackFromStart: s != null ? s : !1,
        manifest: m,
        manifestUrl: p,
        minQualityPreference: u != null ? u : null,
      };
    }
    l.makeOzImplementationData = e;
  },
  98,
);
