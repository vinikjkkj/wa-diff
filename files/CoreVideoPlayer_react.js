__d(
  "CoreVideoPlayer.react",
  [
    "ErrorMetadata",
    "FBLogger",
    "VideoPlayerOnViewability.react",
    "VideoPlayerViewabilityContexts",
    "cr:12222",
    "cr:12223",
    "cr:9824",
    "createVideoStateHook",
    "err",
    "getVideoShareDownstreamSignalTracking",
    "react",
    "react-compiler-runtime",
    "renderVideoPlayerImplementation",
    "useCreateVideoPlayerPassiveViewabilityInfo",
    "useObjectFitContainerDimensions",
    "useStable",
    "videoPlayerUniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["implementations"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useRef;
    function p(e) {
      var t,
        a = e.coreVideoPlayerProps,
        i = e.implementation,
        l = a.coreVideoPlayerMetaData,
        s = a.fullscreenController,
        c = a.isFullscreen,
        p = a.onCoreVideoStatesChanged,
        _ = a.renderWithCoreVideoStates,
        f = a.trackingDataEncrypted,
        g = a.trackingNodes,
        h = a.viewportMarginsForViewability,
        y = r("useStable")(function () {
          return r("videoPlayerUniqueID")(l.videoPlayerUniqueIDOverride);
        });
      o("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(y);
      var C = m(0),
        b = r("useCreateVideoPlayerPassiveViewabilityInfo")(),
        v = b.setVideoPlayerViewabilityInfo,
        S = b.videoPlayerPassiveViewabilityInfo,
        R =
          (t = n("cr:12223") == null ? void 0 : n("cr:12223")()) != null
            ? t
            : {},
        L = R.scrollPositionAPI,
        E = R.setScrollPositionInfo,
        k = r("useObjectFitContainerDimensions")(
          l.subOrigin,
          l.bypassUseCometSizeError,
          l.bypassMeasureOnMount,
        ),
        I = k[0],
        T = k[1],
        D = d(
          function (e) {
            var t = e.implementationController,
              n = e.implementationExposedState;
            return _({
              implementationController: t,
              implementationExposedState: n,
              videoPlayerPassiveViewabilityInfo: S,
            });
          },
          [_, S],
        ),
        x = d(
          function (e) {
            var t = e.implementationController,
              n = e.implementationExposedState;
            p &&
              p({
                implementationController: t,
                implementationExposedState: n,
                videoPlayerPassiveViewabilityInfo: S,
              });
          },
          [p, S],
        ),
        $ = o(
          "getVideoShareDownstreamSignalTracking",
        ).getVideoShareDownstreamSignalTrackingWithNumberStartTime(),
        P = {
          accessToken: l.accessToken,
          dimensions: I,
          downstreamShareSignalTracking: $,
          instanceKey: y,
          playerImplementationInstanceCountRef: C,
          productAttribution: l.productAttribution,
          trackingDataEncrypted: f,
          trackingNodes: g,
        },
        N = {
          coreVideoPlayerMetaData: l,
          dimensions: I,
          fullscreenController: s,
          loggingMetaData: P,
          onExposedStateChanged: x,
          renderWithExposedState: D,
          videoPlayerPassiveViewabilityInfo: S,
          videoPlayerScrollPositionAPI: L != null ? L : null,
        };
      return n("cr:12222") && L && E
        ? T(
            u.jsx(
              o("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
                .Provider,
              {
                value: c,
                children: u.jsx(n("cr:12222"), {
                  onScrollPositionInfoChange: E,
                  children: u.jsx(r("VideoPlayerOnViewability.react"), {
                    onVideoPlayerViewabilityInfoChange: v,
                    viewportMargins: h,
                    children: r("renderVideoPlayerImplementation")(i, N),
                  }),
                }),
              },
            ),
          )
        : T(
            u.jsx(
              o("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
                .Provider,
              {
                value: c,
                children: u.jsx(r("VideoPlayerOnViewability.react"), {
                  onVideoPlayerViewabilityInfoChange: v,
                  viewportMargins: h,
                  children: r("renderVideoPlayerImplementation")(i, N),
                }),
              },
            ),
          );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var a = o("react-compiler-runtime").c(6),
        i,
        l;
      if (
        (a[0] !== t
          ? ((l = t.implementations),
            (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (a[0] = t),
            (a[1] = i),
            (a[2] = l))
          : ((i = a[1]), (l = a[2])),
        l.length === 0)
      ) {
        var s,
          c,
          d,
          m,
          _ = r("err")("No implementations given to CoreVideoPlayer");
        ((_.name = "VideoPlayerNoImplementations"),
          (_.project = "comet_video_player"));
        var f = (s = _.metadata) != null ? s : new (r("ErrorMetadata"))();
        _.metadata = f;
        var g = i.coreVideoPlayerMetaData.videoFBID;
        throw (
          g != null && f.addEntry("COMET_VIDEO", "VIDEO_ID", g),
          (c =
            r("FBLogger")("comet_video_player").catching(_)).mustfixThrow.apply(
            c,
            [(d = _.messageFormat) != null ? d : _.message].concat(
              _.messageFormat != null
                ? (m = _.messageParams) != null
                  ? m
                  : []
                : [],
            ),
          )
        );
      }
      var h;
      return (
        a[3] !== i || a[4] !== l
          ? ((h = n("cr:9824")
              ? u.jsx(n("cr:9824"), {
                  CoreVideoPlayerWithOneImplementation: p,
                  coreVideoPlayerProps: i,
                  implementations: l,
                })
              : u.jsx(p, { coreVideoPlayerProps: i, implementation: l[0] })),
            (a[3] = i),
            (a[4] = l),
            (a[5] = h))
          : (h = a[5]),
        h
      );
    }
    l.default = _;
  },
  98,
);
