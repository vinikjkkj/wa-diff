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
        i = m(null),
        l = i[0],
        u = i[1],
        _ = m(null),
        h = _[0],
        y = _[1],
        C = m(e.coreVideoPlayerMetaData.videoFBID),
        b = C[0],
        v = m(
          e.coreVideoPlayerMetaData.reclaimNeverMountedEngine_EXPERIMENTAL ===
            !0,
        ),
        S = v[0],
        R = e.coreVideoPlayerMetaData.wrapVideoPixels_EXPERIMENTAL,
        L = d(e),
        E = d(t),
        k = d(null),
        I = r("useStable")(function () {
          var e = E.current({
            checkInDOM: function () {
              var e = document.body,
                t = k.current;
              return e != null && t != null && e.contains(t);
            },
            handleFatalError: function (t) {},
            initialProps: L.current,
            setExposedStateInReact: u,
          });
          return (S && f(b, e), e);
        }),
        T = l != null ? l : I.initialExposedState,
        D = (a = T.error) != null ? a : h;
      if (D != null) {
        var x =
          e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass;
        throw (x && x.flushQueuedLogs(), p(D, b));
      }
      (c(
        function () {
          return (
            g(b, I),
            I.handleReactEffectInit(),
            function () {
              I.handleReactEffectCleanup();
            }
          );
        },
        [I, b],
      ),
        c(
          function () {
            var e = o("RunComet").onBeforeUnload(function () {
              I.handleOnBeforeUnload();
            });
            return function () {
              e.remove();
            };
          },
          [I],
        ));
      var $ = d(null);
      c(
        function () {
          (e !== $.current && I.handleReactPropsChanged(e), ($.current = e));
        },
        void 0,
      );
      var P = r("useSEOLoggedOutWebCrawler")(),
        N = e.coreVideoPlayerMetaData.renderVideoPixelsFit,
        M = N ? N(T) : null,
        w = P
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
              videoPixelsFit: M,
            })
          : s.jsx(r("VideoPlayerImplementationReactVideoElement.react"), {
              alt: e.coreVideoPlayerMetaData.alt,
              audioOnly: e.coreVideoPlayerMetaData.audioOnly,
              isSpatial: e.coreVideoPlayerMetaData.isSpatial,
              poster: e.coreVideoPlayerMetaData.poster,
              videoElementCallbacks: I.videoElementCallbacks,
              videoElementHDRPatchEnabled_EXPERIMENTAL:
                e.coreVideoPlayerMetaData
                  .videoElementHDRPatchEnabled_EXPERIMENTAL,
              videoElementMountMode_EXPERIMENTAL:
                e.coreVideoPlayerMetaData.videoElementMountMode_EXPERIMENTAL,
              videoElementPreloadDisabled:
                e.coreVideoPlayerMetaData.preloadForProgressiveDisabled,
              videoElementPreloadHint:
                e.coreVideoPlayerMetaData.preloadForProgressiveHint,
              videoElementRefCallback: I.videoElementRefCallback,
              videoPixelsFit: M,
            }),
        A = e.renderWithExposedState({
          implementationController: I.implementationController,
          implementationExposedState: T,
        }),
        F = s.jsxs(s.Fragment, {
          children: [
            r("gkx")("24349")
              ? s.jsx("div", { ref: k, style: { display: "none" } })
              : null,
            T.isDRM === !0
              ? n("cr:2336")
                ? s.jsx(n("cr:2336"), {
                    controller: I.implementationController,
                  })
                : n("cr:4596")
                  ? s.jsx(n("cr:4596"), {
                      controller: I.implementationController,
                    })
                  : null
              : null,
            R ? R(w) : w,
            s.jsx(r("VideoPlayerVideoPixelsFitContext").Provider, {
              value: M,
              children: A,
            }),
          ],
        });
      return {
        engine: I,
        exposedState: T,
        reactVideoComponents: A,
        reactVideoFrame: w,
        reactVideoFrameAndComponents: F,
      };
    }
    ((l.makeExpandedErrorFromVideoPlayerError = p),
      (l.reclaimNeverMountedEngines = h),
      (l.useVideoPlayerImplementationEngine = y));
  },
  98,
);
