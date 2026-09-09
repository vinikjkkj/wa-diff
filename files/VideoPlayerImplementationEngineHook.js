__d(
  "VideoPlayerImplementationEngineHook",
  [
    "ErrorMetadata",
    "RunComet",
    "VideoPlayerImplementationReactVideoElement.react",
    "VideoPlayerVideoPixelsFitContext",
    "cr:2336",
    "cr:4596",
    "err",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useSEOLoggedOutWebCrawler",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e, t) {
      var n,
        o,
        a = r("err").apply(
          void 0,
          [e.errorName + ": " + e.errorMessageFormat].concat(
            e.errorMessageParams,
          ),
        );
      ((a.name = e.errorName),
        (a.errorName = e.errorName),
        (a.type = "error"),
        e.stack != null && e.stack !== "" && (a.stack = e.stack));
      var i = new (r("ErrorMetadata"))();
      (i.addEntries(
        ["COMET_VIDEO", "ERROR_LOCATION", e.errorLocation],
        ["COMET_VIDEO", "ERROR_CODE", (n = e.errorCode) != null ? n : ""],
        ["COMET_VIDEO", "ERROR_URL", (o = e.url) != null ? o : ""],
      ),
        t != null && i.addEntry("COMET_VIDEO", "VIDEO_ID", t));
      var l = e.originalError;
      return (
        l != null &&
          (typeof l == "string"
            ? i.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", l)
            : l instanceof Error &&
              l.message != null &&
              i.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", l.message)),
        (a.metadata = i),
        a
      );
    }
    var _ = new Map();
    function f(e, t) {
      if (e != null) {
        var n = _.get(e);
        n == null ? _.set(e, new Set([t])) : n.add(t);
      }
    }
    function g(e, t) {
      if (e != null) {
        var n = _.get(e);
        n != null && (n.delete(t), n.size === 0 && _.delete(e));
      }
    }
    function h(e) {
      if (e != null) {
        var t = _.get(e);
        t != null &&
          (_.delete(e),
          t.forEach(function (e) {
            e.destroyOutsideReactLifecycle("never_mounted");
          }));
      }
    }
    function y(e, t) {
      var a,
        i = o("react-compiler-runtime").c(55),
        l = m(null),
        u = l[0],
        _ = l[1],
        h = m(null),
        y = h[0],
        b = m(e.coreVideoPlayerMetaData.videoFBID),
        v = b[0],
        S = m(
          e.coreVideoPlayerMetaData.reclaimNeverMountedEngine_EXPERIMENTAL ===
            !0,
        ),
        R = S[0],
        L = e.coreVideoPlayerMetaData.wrapVideoPixels_EXPERIMENTAL,
        E = d(e),
        k = d(t),
        I = d(null),
        T;
      i[0] !== v || i[1] !== R
        ? ((T = function () {
            var e = k.current({
              checkInDOM: function () {
                var e = document.body,
                  t = I.current;
                return e != null && t != null && e.contains(t);
              },
              handleFatalError: C,
              initialProps: E.current,
              setExposedStateInReact: _,
            });
            return (R && f(v, e), e);
          }),
          (i[0] = v),
          (i[1] = R),
          (i[2] = T))
        : (T = i[2]);
      var D = r("useStable")(T),
        x = u != null ? u : D.initialExposedState,
        $ = (a = x.error) != null ? a : y;
      if ($ != null) {
        var P =
          e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass;
        throw (P && P.flushQueuedLogs(), p($, v));
      }
      var N, M;
      (i[3] !== D || i[4] !== v
        ? ((N = function () {
            return (
              g(v, D),
              D.handleReactEffectInit(),
              function () {
                D.handleReactEffectCleanup();
              }
            );
          }),
          (M = [D, v]),
          (i[3] = D),
          (i[4] = v),
          (i[5] = N),
          (i[6] = M))
        : ((N = i[5]), (M = i[6])),
        c(N, M));
      var w, A;
      (i[7] !== D
        ? ((w = function () {
            var e = o("RunComet").onBeforeUnload(function () {
              D.handleOnBeforeUnload();
            });
            return function () {
              e.remove();
            };
          }),
          (A = [D]),
          (i[7] = D),
          (i[8] = w),
          (i[9] = A))
        : ((w = i[8]), (A = i[9])),
        c(w, A));
      var F = d(null),
        O;
      (i[10] !== D || i[11] !== e
        ? ((O = function () {
            (e !== F.current && D.handleReactPropsChanged(e), (F.current = e));
          }),
          (i[10] = D),
          (i[11] = e),
          (i[12] = O))
        : (O = i[12]),
        c(O, void 0));
      var B = r("useSEOLoggedOutWebCrawler")(),
        W = e.coreVideoPlayerMetaData.renderVideoPixelsFit,
        q;
      i[13] !== x || i[14] !== W
        ? ((q = W ? W(x) : null), (i[13] = x), (i[14] = W), (i[15] = q))
        : (q = i[15]);
      var U = q,
        V;
      i[16] !== D.videoElementCallbacks ||
      i[17] !== D.videoElementRefCallback ||
      i[18] !== B ||
      i[19] !== e.coreVideoPlayerMetaData.alt ||
      i[20] !== e.coreVideoPlayerMetaData.audioOnly ||
      i[21] !== e.coreVideoPlayerMetaData.isSpatial ||
      i[22] !== e.coreVideoPlayerMetaData.poster ||
      i[23] !== e.coreVideoPlayerMetaData.preloadForProgressiveDisabled ||
      i[24] !== e.coreVideoPlayerMetaData.preloadForProgressiveHint ||
      i[25] !== e.coreVideoPlayerMetaData.seoWebCrawlerLookasideUrl ||
      i[26] !== e.coreVideoPlayerMetaData.seoWebCrawlerVideoTracks ||
      i[27] !==
        e.coreVideoPlayerMetaData.videoElementHDRPatchEnabled_EXPERIMENTAL ||
      i[28] !== e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL ||
      i[29] !== U
        ? ((V = B
            ? s.jsx(r("VideoPlayerImplementationReactVideoElement.react"), {
                alt: e.coreVideoPlayerMetaData.alt,
                audioOnly: e.coreVideoPlayerMetaData.audioOnly,
                poster: e.coreVideoPlayerMetaData.poster,
                seoSrc: e.coreVideoPlayerMetaData.seoWebCrawlerLookasideUrl,
                seoWebCrawlerVideoTracks:
                  e.coreVideoPlayerMetaData.seoWebCrawlerVideoTracks,
                videoElementCallbacks: null,
                videoElementHDRPatchEnabled_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData
                    .videoElementHDRPatchEnabled_EXPERIMENTAL,
                videoElementMountMode_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL,
                videoElementPreloadDisabled:
                  e.coreVideoPlayerMetaData.preloadForProgressiveDisabled,
                videoElementPreloadHint:
                  e.coreVideoPlayerMetaData.preloadForProgressiveHint,
                videoElementRefCallback: null,
                videoPixelsFit: U,
              })
            : s.jsx(r("VideoPlayerImplementationReactVideoElement.react"), {
                alt: e.coreVideoPlayerMetaData.alt,
                audioOnly: e.coreVideoPlayerMetaData.audioOnly,
                isSpatial: e.coreVideoPlayerMetaData.isSpatial,
                poster: e.coreVideoPlayerMetaData.poster,
                videoElementCallbacks: D.videoElementCallbacks,
                videoElementHDRPatchEnabled_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData
                    .videoElementHDRPatchEnabled_EXPERIMENTAL,
                videoElementMountMode_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL,
                videoElementPreloadDisabled:
                  e.coreVideoPlayerMetaData.preloadForProgressiveDisabled,
                videoElementPreloadHint:
                  e.coreVideoPlayerMetaData.preloadForProgressiveHint,
                videoElementRefCallback: D.videoElementRefCallback,
                videoPixelsFit: U,
              })),
          (i[16] = D.videoElementCallbacks),
          (i[17] = D.videoElementRefCallback),
          (i[18] = B),
          (i[19] = e.coreVideoPlayerMetaData.alt),
          (i[20] = e.coreVideoPlayerMetaData.audioOnly),
          (i[21] = e.coreVideoPlayerMetaData.isSpatial),
          (i[22] = e.coreVideoPlayerMetaData.poster),
          (i[23] = e.coreVideoPlayerMetaData.preloadForProgressiveDisabled),
          (i[24] = e.coreVideoPlayerMetaData.preloadForProgressiveHint),
          (i[25] = e.coreVideoPlayerMetaData.seoWebCrawlerLookasideUrl),
          (i[26] = e.coreVideoPlayerMetaData.seoWebCrawlerVideoTracks),
          (i[27] =
            e.coreVideoPlayerMetaData.videoElementHDRPatchEnabled_EXPERIMENTAL),
          (i[28] =
            e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL),
          (i[29] = U),
          (i[30] = V))
        : (V = i[30]);
      var H = V,
        G;
      i[31] !== D.implementationController || i[32] !== x || i[33] !== e
        ? ((G = e.renderWithExposedState({
            implementationController: D.implementationController,
            implementationExposedState: x,
          })),
          (i[31] = D.implementationController),
          (i[32] = x),
          (i[33] = e),
          (i[34] = G))
        : (G = i[34]);
      var z = G,
        j;
      i[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = r("gkx")("24349")
            ? s.jsx("div", { ref: I, style: { display: "none" } })
            : null),
          (i[35] = j))
        : (j = i[35]);
      var K;
      i[36] !== D.implementationController || i[37] !== x.isDRM
        ? ((K =
            x.isDRM === !0
              ? n("cr:2336")
                ? s.jsx(n("cr:2336"), {
                    controller: D.implementationController,
                  })
                : n("cr:4596")
                  ? s.jsx(n("cr:4596"), {
                      controller: D.implementationController,
                    })
                  : null
              : null),
          (i[36] = D.implementationController),
          (i[37] = x.isDRM),
          (i[38] = K))
        : (K = i[38]);
      var Q;
      i[39] !== H || i[40] !== L
        ? ((Q = L ? L(H) : H), (i[39] = H), (i[40] = L), (i[41] = Q))
        : (Q = i[41]);
      var X;
      i[42] !== z || i[43] !== U
        ? ((X = s.jsx(r("VideoPlayerVideoPixelsFitContext").Provider, {
            value: U,
            children: z,
          })),
          (i[42] = z),
          (i[43] = U),
          (i[44] = X))
        : (X = i[44]);
      var Y;
      i[45] !== K || i[46] !== Q || i[47] !== X
        ? ((Y = s.jsxs(s.Fragment, { children: [j, K, Q, X] })),
          (i[45] = K),
          (i[46] = Q),
          (i[47] = X),
          (i[48] = Y))
        : (Y = i[48]);
      var J = Y,
        Z;
      return (
        i[49] !== D || i[50] !== x || i[51] !== z || i[52] !== H || i[53] !== J
          ? ((Z = {
              engine: D,
              exposedState: x,
              reactVideoComponents: z,
              reactVideoFrame: H,
              reactVideoFrameAndComponents: J,
            }),
            (i[49] = D),
            (i[50] = x),
            (i[51] = z),
            (i[52] = H),
            (i[53] = J),
            (i[54] = Z))
          : (Z = i[54]),
        Z
      );
    }
    function C(e) {}
    ((l.makeExpandedErrorFromVideoPlayerError = p),
      (l.reclaimNeverMountedEngines = h),
      (l.useVideoPlayerImplementationEngine = y));
  },
  98,
);
