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
        i,
        l = m(null),
        u = l[0],
        _ = l[1],
        h = m(null),
        y = h[0],
        C = h[1],
        b = m(e.coreVideoPlayerMetaData.videoFBID),
        v = b[0],
        S = m(
          (a =
            e.coreVideoPlayerMetaData
              .reclaimNeverMountedEngineOwner_EXPERIMENTAL) != null
            ? a
            : v,
        ),
        R = S[0],
        L = m(
          e.coreVideoPlayerMetaData.reclaimNeverMountedEngine_EXPERIMENTAL ===
            !0,
        ),
        E = L[0],
        k = e.coreVideoPlayerMetaData.wrapVideoPixels_EXPERIMENTAL,
        I = d(e),
        T = d(t),
        D = d(null),
        x = r("useStable")(function () {
          var e = T.current({
            checkInDOM: function () {
              var e = document.body,
                t = D.current;
              return e != null && t != null && e.contains(t);
            },
            handleFatalError: function (t) {},
            initialProps: I.current,
            setExposedStateInReact: _,
          });
          return (E && f(R, e), e);
        }),
        $ = u != null ? u : x.initialExposedState,
        P = (i = $.error) != null ? i : y;
      if (P != null) {
        var N =
          e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass;
        throw (N && N.flushQueuedLogs(), p(P, v));
      }
      (c(
        function () {
          return (
            g(R, x),
            x.handleReactEffectInit(),
            function () {
              x.handleReactEffectCleanup();
            }
          );
        },
        [x, R],
      ),
        c(
          function () {
            var e = o("RunComet").onBeforeUnload(function () {
              x.handleOnBeforeUnload();
            });
            return function () {
              e.remove();
            };
          },
          [x],
        ));
      var M = d(null);
      c(
        function () {
          (e !== M.current && x.handleReactPropsChanged(e), (M.current = e));
        },
        void 0,
      );
      var w = r("useSEOLoggedOutWebCrawler")(),
        A = e.coreVideoPlayerMetaData.renderVideoPixelsFit,
        F = A ? A($) : null,
        O = w
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
              videoPixelsFit: F,
            })
          : s.jsx(r("VideoPlayerImplementationReactVideoElement.react"), {
              alt: e.coreVideoPlayerMetaData.alt,
              audioOnly: e.coreVideoPlayerMetaData.audioOnly,
              isSpatial: e.coreVideoPlayerMetaData.isSpatial,
              poster: e.coreVideoPlayerMetaData.poster,
              videoElementCallbacks: x.videoElementCallbacks,
              videoElementHDRPatchEnabled_EXPERIMENTAL:
                e.coreVideoPlayerMetaData
                  .videoElementHDRPatchEnabled_EXPERIMENTAL,
              videoElementMountMode_EXPERIMENTAL:
                e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL,
              videoElementPreloadDisabled:
                e.coreVideoPlayerMetaData.preloadForProgressiveDisabled,
              videoElementPreloadHint:
                e.coreVideoPlayerMetaData.preloadForProgressiveHint,
              videoElementRefCallback: x.videoElementRefCallback,
              videoPixelsFit: F,
            }),
        B = e.renderWithExposedState({
          implementationController: x.implementationController,
          implementationExposedState: $,
        }),
        W = s.jsxs(s.Fragment, {
          children: [
            r("gkx")("24349")
              ? s.jsx("div", { ref: D, style: { display: "none" } })
              : null,
            $.isDRM === !0
              ? n("cr:2336")
                ? s.jsx(n("cr:2336"), {
                    controller: x.implementationController,
                  })
                : n("cr:4596")
                  ? s.jsx(n("cr:4596"), {
                      controller: x.implementationController,
                    })
                  : null
              : null,
            k ? k(O) : O,
            s.jsx(r("VideoPlayerVideoPixelsFitContext").Provider, {
              value: F,
              children: B,
            }),
          ],
        });
      return {
        engine: x,
        exposedState: $,
        reactVideoComponents: B,
        reactVideoFrame: O,
        reactVideoFrameAndComponents: W,
      };
    }
    ((l.makeExpandedErrorFromVideoPlayerError = p),
      (l.reclaimNeverMountedEngines = h),
      (l.useVideoPlayerImplementationEngine = y));
  },
  98,
);
