__d(
  "prepareVideoPlayerImplementations",
  [
    "CometVideoPlayerVideoDeliveryResponse",
    "ErrorMetadata",
    "VideoPlayerOzImplementationData",
    "VideoPlayerOzWWWConfig",
    "VideoPlayerProgressiveImplementationData",
    "VideoPlayerProgressiveImplementationV2.react",
    "VideoPlayerShakaConfig",
    "cr:1980",
    "cr:592",
    "cr:7519",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:7519")) == null ? void 0 : e.makeNextgendashEngineData;
    function u(e, t, n, r, a, i, l, s, u) {
      var c = null,
        d = null,
        m = null,
        p = null,
        _ = [],
        f = [],
        g = [],
        h = [],
        y = [];
      if (e != null) {
        var C = o(
          "CometVideoPlayerVideoDeliveryResponse",
        ).processVideoDeliveryResponseResult(e, t);
        ((m = C.browserNativeHdUrl),
          (p = C.browserNativeSdUrl),
          (f = C.dashManifestDeliveryFailures),
          (d = C.dashManifestUrl),
          (g = C.dashManifestUrlDeliveryFailures),
          (c = C.dashManifestXmlString),
          (y = C.hlsDeliveryFailures),
          (h = C.progressiveDeliveryFailures),
          (_ = C.videoDeliveryResponseAPIFailures));
      } else
        ((c = i != null ? i : null),
          (d = a != null ? a : null),
          (m = n != null ? n : null),
          (p = r != null ? r : null));
      return (
        l === !0 && ((m = s != null ? s : m), (p = u != null ? u : p)),
        {
          browserNativeHdUrl: m,
          browserNativeSdUrl: p,
          dashManifestDeliveryFailures: f,
          dashManifestUrl: d,
          dashManifestUrlDeliveryFailures: g,
          dashManifestXmlString: c,
          hlsDeliveryFailures: y,
          progressiveDeliveryFailures: h,
          videoDeliveryResponseAPIFailures: _,
        }
      );
    }
    function c(e, t, n, r, o) {
      return !(
        e.length === 0 &&
        (t.length === 0 || n.length === 0 || r != null || o != null)
      );
    }
    function d(e, t, o, a, i, l, u, c) {
      if (!s || !n("cr:592"))
        return r("err")("Nextgendash implementation not available");
      var d = s({
        canUseOz: e,
        dashManifestUrl: t,
        dashManifestUrlOverride_DO_NOT_USE: o,
        dashManifestXmlString: a,
        experimentationConfig: new (r("VideoPlayerShakaConfig"))(),
        initialAudioUserPreferredLanguage: i,
        minQualityPreference: l,
        nextgendashAvailability: u,
        skipManifestPrevalidation: c,
      });
      return d instanceof Error
        ? d
        : {
            Component: n("cr:592"),
            data: d,
            typename: "VideoPlayerNextgendashImplementation",
          };
    }
    function m(e, t, a, i, l, s, u, c, d) {
      if (n("cr:1980") == null)
        return r("err")("Oz implementation not available");
      var m = o("VideoPlayerOzImplementationData").makeOzImplementationData({
        canUseOz: e,
        dashManifestUrl: t,
        dashManifestUrlOverride_DO_NOT_USE: a,
        dashManifestXmlString: i,
        experimentationConfig: new (r("VideoPlayerOzWWWConfig"))(
          c != null ? c : new (r("VideoPlayerShakaConfig"))(),
        ),
        initialAudioUserPreferredLanguage: l,
        initiateLivePlaybackFromStart: s,
        minQualityPreference: u,
        skipManifestPrevalidation: d,
      });
      return m instanceof Error
        ? m
        : {
            Component: n("cr:1980"),
            data: m,
            typename: "VideoPlayerOzImplementation",
          };
    }
    function p(e, t, n, a, i, l) {
      var s = i != null ? i : a,
        u = o(
          "VideoPlayerProgressiveImplementationData",
        ).makeProgressiveImplementationData({
          hdSrc: e,
          hdSrcPreferred:
            r("gkx")("24369") || n === !0 || s === "HD" || s === "UHD",
          mediaStream: l,
          sdSrc: t,
        });
      return u instanceof Error
        ? u
        : {
            Component: r("VideoPlayerProgressiveImplementationV2.react"),
            data: u,
            typename: "VideoPlayerProgressiveImplementation",
          };
    }
    function _(e, t, n, o, a, i, l) {
      var s;
      if (!t && (!l || e.length === 0)) return null;
      for (var u = new Map(), c = 0; c < e.length; ++c) {
        var d,
          m = e[c],
          p = m.name + ": " + ((d = m.messageFormat) != null ? d : m.message);
        u.has(p) || u.set(p, m);
      }
      for (
        var _ = Array.from(u.values()), f = [], g = [], h = [], y = 0;
        y < _.length;
        ++y
      ) {
        var C,
          b = _[y];
        (f.push(b.name),
          g.push((C = b.messageFormat) != null ? C : b.message),
          b.messageFormat != null &&
            b.messageParams != null &&
            h.push.apply(h, b.messageParams));
      }
      var v = r("err").apply(
        void 0,
        [
          (t
            ? n === !0
              ? "Cannot play 360 video: "
              : "Cannot play video: "
            : n === !0
              ? "Warning for 360 video: "
              : "Warning: ") + g.join(" ++ "),
        ].concat(h),
      );
      ((v.name = f.join("++")),
        (v.type = t ? "fatal" : "warn"),
        (v.project = "comet_video_player"));
      var S = (s = v.metadata) != null ? s : new (r("ErrorMetadata"))();
      return (
        (v.metadata = S),
        o != null && S.addEntry("COMET_VIDEO", "VIDEO_ID", String(o)),
        S.addEntry(
          "COMET_VIDEO",
          "VIDEO_IMPLEMENTATION_DEBUG_DATA",
          JSON.stringify({
            isBroadcast: a,
            isLiveStreaming: i,
            isSpherical: n,
          }),
        ),
        v
      );
    }
    function f(e) {
      var t = e.browserNativeHdSrcPreferred,
        o = e.browserNativeHdUrl,
        a = e.browserNativeSdUrl,
        i = e.canUseOz,
        l = e.dashManifestUrl,
        f = e.dashManifestUrlOverride_DO_NOT_USE,
        g = e.dashManifestXmlString,
        h = e.initialAudioUserPreferredLanguage,
        y = e.initiateLivePlaybackFromStart,
        C = e.isBroadcast,
        b = e.isLiveStreaming,
        v = e.isSpherical,
        S = e.mediaStream,
        R = e.minQualityPreference,
        L = e.minQualityPreferenceOverrideFromProductSurface,
        E = e.nextgendashAvailability,
        k = e.preferBrowserNativeImplementation,
        I = e.skipManifestPrevalidation,
        T = e.sphericalVideoFallbackHdUrl,
        D = e.sphericalVideoFallbackSdUrl,
        x = e.videoDeliveryResponseResult,
        $ = e.videoFBID,
        P = e.videoPlayerShakaConfig,
        N = [],
        M = [],
        w = r("gkx")("8034"),
        A = u(x, w, o, a, l, g, v, T, D),
        F = A.browserNativeHdUrl,
        O = A.browserNativeSdUrl,
        B = A.dashManifestDeliveryFailures,
        W = A.dashManifestUrl,
        q = A.dashManifestUrlDeliveryFailures,
        U = A.dashManifestXmlString,
        V = A.hlsDeliveryFailures,
        H = A.progressiveDeliveryFailures,
        G = A.videoDeliveryResponseAPIFailures,
        z = c(G, B, q, W, U);
      if (k !== !0) {
        if (!z) {
          if (s && n("cr:592")) {
            var j = d(i, W, f, U, h, R, E, I);
            j instanceof Error
              ? M.push(["VideoPlayerNextgendashImplementation", j])
              : N.push(j);
          }
          if (n("cr:1980") != null) {
            var K = m(i, W, f, U, h, y, R, P, I);
            K instanceof Error
              ? M.push(["VideoPlayerOzImplementation", K])
              : N.push(K);
          }
        }
      } else {
        var Q = r("err")("preferBrowserNativeImplementation=" + String(k));
        ((Q.name = "VideoImplementationsPreferBrowserNative"),
          s &&
            n("cr:592") &&
            M.push(["VideoPlayerNextgendashImplementation", Q]),
          M.push(["VideoPlayerOzImplementation", Q]));
      }
      if (
        G.length === 0 &&
        (H.length === 0 || F != null || O != null || S != null)
      ) {
        var X = p(F, O, t, R, L, S);
        X instanceof Error
          ? M.push(["VideoPlayerProgressiveImplementation", X])
          : N.push(X);
      }
      var Y = N.length === 0,
        J = [];
      (J.push.apply(J, G),
        J.push.apply(J, B),
        J.push.apply(J, q),
        J.push.apply(J, H),
        J.push.apply(J, V),
        J.push.apply(
          J,
          M.map(function (e) {
            var t,
              n,
              o = e[0],
              a = e[1],
              i = r("getErrorSafe")(a),
              l =
                o
                  .replace(/^VideoPlayer/, "")
                  .replace(/(Implementation)|(Engine)$/, "") + "Engine",
              s = r("err").apply(
                void 0,
                [
                  "Cannot use " +
                    l +
                    " / " +
                    ((t = i.messageFormat) != null ? t : i.message),
                ].concat(
                  i.messageFormat != null
                    ? (n = i.messageParams) != null
                      ? n
                      : []
                    : [],
                ),
              );
            return ((s.name = "VideoPlayerCannotUse" + l + "/" + i.name), s);
          }),
        ));
      var Z = _(J, Y, v, $, C, b, r("gkx")("24370"));
      if (Y && Z != null) throw Z;
      return {
        hasDashManifest: W != null || U != null,
        implementations: N,
        warning: Z,
      };
    }
    l.default = f;
  },
  98,
);
