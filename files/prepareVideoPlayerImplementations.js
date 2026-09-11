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
    "cr:8058",
    "cr:8071",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:8071")) == null ? void 0 : e.makeNextgendashEngineData;
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
      if (!s || !n("cr:8058"))
        return r("err")("Nextgendash implementation not available");
      var d = s({
        canUseDash: e,
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
            Component: n("cr:8058"),
            data: d,
            typename: "VideoPlayerNextgendashImplementation",
          };
    }
    function m(e, t, a, i, l, s, u, c, d) {
      if (n("cr:1980") == null)
        return r("err")("Oz implementation not available");
      var m = o("VideoPlayerOzImplementationData").makeOzImplementationData({
        canUseDash: e,
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
    function _(e) {
      return e === void 0 ? "undefined" : e === null ? "null" : String(e);
    }
    function f(e, t, n, o, a, i, l, s) {
      var u;
      if (!t && (!l || e.length === 0)) return null;
      for (var c = new Map(), d = 0; d < e.length; ++d) {
        var m,
          p = e[d],
          _ = p.name + ": " + ((m = p.messageFormat) != null ? m : p.message);
        c.has(_) || c.set(_, p);
      }
      for (
        var f = Array.from(c.values()), g = [], h = [], y = [], C = 0;
        C < f.length;
        ++C
      ) {
        var b,
          v = f[C];
        (g.push(v.name),
          h.push((b = v.messageFormat) != null ? b : v.message),
          v.messageFormat != null &&
            v.messageParams != null &&
            y.push.apply(y, v.messageParams));
      }
      var S = r("err").apply(
        void 0,
        [
          (t
            ? n === !0
              ? "Cannot play 360 video: "
              : "Cannot play video: "
            : n === !0
              ? "Warning for 360 video: "
              : "Warning: ") + h.join(" ++ "),
        ].concat(y),
      );
      ((S.name = g.join("++")),
        (S.type = t ? "fatal" : "warn"),
        (S.project = "comet_video_player"));
      var R = (u = S.metadata) != null ? u : new (r("ErrorMetadata"))();
      return (
        (S.metadata = R),
        o != null && R.addEntry("COMET_VIDEO", "VIDEO_ID", String(o)),
        R.addEntry(
          "COMET_VIDEO",
          "VIDEO_IMPLEMENTATION_DEBUG_DATA",
          JSON.stringify(
            babelHelpers.extends(
              { isBroadcast: a, isLiveStreaming: i, isSpherical: n },
              s,
            ),
          ),
        ),
        S
      );
    }
    function g(e) {
      var t = e.browserNativeHdSrcPreferred,
        o = e.browserNativeHdUrl,
        a = e.browserNativeSdUrl,
        i = e.canUseDash,
        l = e.dashManifestUrl,
        g = e.dashManifestUrlOverride_DO_NOT_USE,
        h = e.dashManifestXmlString,
        y = e.initialAudioUserPreferredLanguage,
        C = e.initiateLivePlaybackFromStart,
        b = e.isBroadcast,
        v = e.isLiveStreaming,
        S = e.isSpherical,
        R = e.mediaStream,
        L = e.minQualityPreference,
        E = e.minQualityPreferenceOverrideFromProductSurface,
        k = e.nextgendashAvailability,
        I = e.preferBrowserNativeImplementation,
        T = e.skipManifestPrevalidation,
        D = e.sphericalVideoFallbackHdUrl,
        x = e.sphericalVideoFallbackSdUrl,
        $ = e.videoDeliveryResponseResult,
        P = e.videoFBID,
        N = e.videoPlayerShakaConfig,
        M = [],
        w = [],
        A = r("gkx")("8034"),
        F = u($, A, o, a, l, h, S, D, x),
        O = F.browserNativeHdUrl,
        B = F.browserNativeSdUrl,
        W = F.dashManifestDeliveryFailures,
        q = F.dashManifestUrl,
        U = F.dashManifestUrlDeliveryFailures,
        V = F.dashManifestXmlString,
        H = F.hlsDeliveryFailures,
        G = F.progressiveDeliveryFailures,
        z = F.videoDeliveryResponseAPIFailures,
        j = c(z, W, U, q, V);
      if (I !== !0) {
        if (!j) {
          if (s && n("cr:8058")) {
            var K = d(i, q, g, V, y, L, k, T);
            K instanceof Error
              ? w.push(["VideoPlayerNextgendashImplementation", K])
              : M.push(K);
          }
          if (n("cr:1980") != null) {
            var Q = m(i, q, g, V, y, C, L, N, T);
            Q instanceof Error
              ? w.push(["VideoPlayerOzImplementation", Q])
              : M.push(Q);
          }
        }
      } else {
        var X = r("err")("preferBrowserNativeImplementation=" + String(I));
        ((X.name = "VideoImplementationsPreferBrowserNative"),
          s &&
            n("cr:8058") &&
            w.push(["VideoPlayerNextgendashImplementation", X]),
          w.push(["VideoPlayerOzImplementation", X]));
      }
      if (
        z.length === 0 &&
        (G.length === 0 || O != null || B != null || R != null)
      ) {
        var Y = p(O, B, t, L, E, R);
        Y instanceof Error
          ? w.push(["VideoPlayerProgressiveImplementation", Y])
          : M.push(Y);
      }
      var J = M.length === 0,
        Z = [];
      (Z.push.apply(Z, z),
        Z.push.apply(Z, W),
        Z.push.apply(Z, U),
        Z.push.apply(Z, G),
        Z.push.apply(Z, H),
        Z.push.apply(
          Z,
          w.map(function (e) {
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
      var ee = f(Z, J, S, P, b, v, r("gkx")("24370"), {
        canUseDash: _(i),
        hasBrowserNativeHdUrl: O != null,
        hasBrowserNativeSdUrl: B != null,
        hasDashManifestUrl: q != null,
        hasDashManifestXmlString: V != null,
        nextgendashAvailability: k,
      });
      if (J && ee != null) throw ee;
      return {
        hasDashManifest: q != null || V != null,
        implementations: M,
        warning: ee,
      };
    }
    l.default = g;
  },
  98,
);
