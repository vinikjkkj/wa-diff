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
    function _(e, t) {
      var a,
        i = o("react-compiler-runtime").c(52),
        l = m(null),
        u = l[0],
        _ = l[1],
        g = m(null),
        h = g[0],
        y = m(e.coreVideoPlayerMetaData.videoFBID),
        C = y[0],
        b = e.coreVideoPlayerMetaData.wrapVideoPixels_EXPERIMENTAL,
        v = d(e),
        S = d(t),
        R = d(null),
        L;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return S.current({
              checkInDOM: function () {
                var e = document.body,
                  t = R.current;
                return e != null && t != null && e.contains(t);
              },
              handleFatalError: f,
              initialProps: v.current,
              setExposedStateInReact: _,
            });
          }),
          (i[0] = L))
        : (L = i[0]);
      var E = r("useStable")(L),
        k = u != null ? u : E.initialExposedState,
        I = (a = k.error) != null ? a : h;
      if (I != null) {
        var T =
          e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass;
        throw (T && T.flushQueuedLogs(), p(I, C));
      }
      var D, x;
      (i[1] !== E
        ? ((D = function () {
            return (
              E.handleReactEffectInit(),
              function () {
                E.handleReactEffectCleanup();
              }
            );
          }),
          (x = [E]),
          (i[1] = E),
          (i[2] = D),
          (i[3] = x))
        : ((D = i[2]), (x = i[3])),
        c(D, x));
      var $, P;
      (i[4] !== E
        ? (($ = function () {
            var e = o("RunComet").onBeforeUnload(function () {
              E.handleOnBeforeUnload();
            });
            return function () {
              e.remove();
            };
          }),
          (P = [E]),
          (i[4] = E),
          (i[5] = $),
          (i[6] = P))
        : (($ = i[5]), (P = i[6])),
        c($, P));
      var N = d(null),
        M;
      (i[7] !== E || i[8] !== e
        ? ((M = function () {
            (e !== N.current && E.handleReactPropsChanged(e), (N.current = e));
          }),
          (i[7] = E),
          (i[8] = e),
          (i[9] = M))
        : (M = i[9]),
        c(M, void 0));
      var w = r("useSEOLoggedOutWebCrawler")(),
        A = e.coreVideoPlayerMetaData.renderVideoPixelsFit,
        F;
      i[10] !== k || i[11] !== A
        ? ((F = A ? A(k) : null), (i[10] = k), (i[11] = A), (i[12] = F))
        : (F = i[12]);
      var O = F,
        B;
      i[13] !== E.videoElementCallbacks ||
      i[14] !== E.videoElementRefCallback ||
      i[15] !== w ||
      i[16] !== e.coreVideoPlayerMetaData.alt ||
      i[17] !== e.coreVideoPlayerMetaData.audioOnly ||
      i[18] !== e.coreVideoPlayerMetaData.isSpatial ||
      i[19] !== e.coreVideoPlayerMetaData.poster ||
      i[20] !== e.coreVideoPlayerMetaData.preloadForProgressiveDisabled ||
      i[21] !== e.coreVideoPlayerMetaData.preloadForProgressiveHint ||
      i[22] !== e.coreVideoPlayerMetaData.seoWebCrawlerLookasideUrl ||
      i[23] !== e.coreVideoPlayerMetaData.seoWebCrawlerVideoTracks ||
      i[24] !==
        e.coreVideoPlayerMetaData.videoElementHDRPatchEnabled_EXPERIMENTAL ||
      i[25] !== e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL ||
      i[26] !== O
        ? ((B = w
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
                videoPixelsFit: O,
              })
            : s.jsx(r("VideoPlayerImplementationReactVideoElement.react"), {
                alt: e.coreVideoPlayerMetaData.alt,
                audioOnly: e.coreVideoPlayerMetaData.audioOnly,
                isSpatial: e.coreVideoPlayerMetaData.isSpatial,
                poster: e.coreVideoPlayerMetaData.poster,
                videoElementCallbacks: E.videoElementCallbacks,
                videoElementHDRPatchEnabled_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData
                    .videoElementHDRPatchEnabled_EXPERIMENTAL,
                videoElementMountMode_EXPERIMENTAL:
                  e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL,
                videoElementPreloadDisabled:
                  e.coreVideoPlayerMetaData.preloadForProgressiveDisabled,
                videoElementPreloadHint:
                  e.coreVideoPlayerMetaData.preloadForProgressiveHint,
                videoElementRefCallback: E.videoElementRefCallback,
                videoPixelsFit: O,
              })),
          (i[13] = E.videoElementCallbacks),
          (i[14] = E.videoElementRefCallback),
          (i[15] = w),
          (i[16] = e.coreVideoPlayerMetaData.alt),
          (i[17] = e.coreVideoPlayerMetaData.audioOnly),
          (i[18] = e.coreVideoPlayerMetaData.isSpatial),
          (i[19] = e.coreVideoPlayerMetaData.poster),
          (i[20] = e.coreVideoPlayerMetaData.preloadForProgressiveDisabled),
          (i[21] = e.coreVideoPlayerMetaData.preloadForProgressiveHint),
          (i[22] = e.coreVideoPlayerMetaData.seoWebCrawlerLookasideUrl),
          (i[23] = e.coreVideoPlayerMetaData.seoWebCrawlerVideoTracks),
          (i[24] =
            e.coreVideoPlayerMetaData.videoElementHDRPatchEnabled_EXPERIMENTAL),
          (i[25] =
            e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL),
          (i[26] = O),
          (i[27] = B))
        : (B = i[27]);
      var W = B,
        q;
      i[28] !== E.implementationController || i[29] !== k || i[30] !== e
        ? ((q = e.renderWithExposedState({
            implementationController: E.implementationController,
            implementationExposedState: k,
          })),
          (i[28] = E.implementationController),
          (i[29] = k),
          (i[30] = e),
          (i[31] = q))
        : (q = i[31]);
      var U = q,
        V;
      i[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = r("gkx")("24349")
            ? s.jsx("div", { ref: R, style: { display: "none" } })
            : null),
          (i[32] = V))
        : (V = i[32]);
      var H;
      i[33] !== E.implementationController || i[34] !== k.isDRM
        ? ((H =
            k.isDRM === !0
              ? n("cr:2336")
                ? s.jsx(n("cr:2336"), {
                    controller: E.implementationController,
                  })
                : n("cr:4596")
                  ? s.jsx(n("cr:4596"), {
                      controller: E.implementationController,
                    })
                  : null
              : null),
          (i[33] = E.implementationController),
          (i[34] = k.isDRM),
          (i[35] = H))
        : (H = i[35]);
      var G;
      i[36] !== W || i[37] !== b
        ? ((G = b ? b(W) : W), (i[36] = W), (i[37] = b), (i[38] = G))
        : (G = i[38]);
      var z;
      i[39] !== U || i[40] !== O
        ? ((z = s.jsx(r("VideoPlayerVideoPixelsFitContext").Provider, {
            value: O,
            children: U,
          })),
          (i[39] = U),
          (i[40] = O),
          (i[41] = z))
        : (z = i[41]);
      var j;
      i[42] !== H || i[43] !== G || i[44] !== z
        ? ((j = s.jsxs(s.Fragment, { children: [V, H, G, z] })),
          (i[42] = H),
          (i[43] = G),
          (i[44] = z),
          (i[45] = j))
        : (j = i[45]);
      var K = j,
        Q;
      return (
        i[46] !== E || i[47] !== k || i[48] !== U || i[49] !== W || i[50] !== K
          ? ((Q = {
              engine: E,
              exposedState: k,
              reactVideoComponents: U,
              reactVideoFrame: W,
              reactVideoFrameAndComponents: K,
            }),
            (i[46] = E),
            (i[47] = k),
            (i[48] = U),
            (i[49] = W),
            (i[50] = K),
            (i[51] = Q))
          : (Q = i[51]),
        Q
      );
    }
    function f(e) {}
    ((l.makeExpandedErrorFromVideoPlayerError = p),
      (l.useVideoPlayerImplementationEngine = _));
  },
  98,
);
