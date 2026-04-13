__d(
  "WAWebPipOgVideoPlayer.react",
  [
    "WAWebPipConst",
    "WAWebPipSharedVideoPlayer.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n;
      return (
        t[0] !== e.autoPlay ||
        t[1] !== e.disablePiPControls ||
        t[2] !== e.ogVideoInfo ||
        t[3] !== e.onAspectRatio ||
        t[4] !== e.onClose ||
        t[5] !== e.onError ||
        t[6] !== e.onRefSet ||
        t[7] !== e.onSetFullscreenToggleCallback ||
        t[8] !== e.onVideoDimensions ||
        t[9] !== e.onVideoEnded ||
        t[10] !== e.onVideoMetadataChange ||
        t[11] !== e.startTime
          ? ((n = s.jsx(
              o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer,
              {
                type: o("WAWebPipConst").PlayerType.OG_FLOATER,
                ogVideoInfo: e.ogVideoInfo,
                startTime: e.startTime,
                onClose: e.onClose,
                onVideoEnded: e.onVideoEnded,
                onError: e.onError,
                onAspectRatio: e.onAspectRatio,
                onVideoDimensions: e.onVideoDimensions,
                autoPlay: e.autoPlay,
                disablePiPControls: e.disablePiPControls,
                onRefSet: e.onRefSet,
                onVideoMetadataChange: e.onVideoMetadataChange,
                onSetFullscreenToggleCallback: e.onSetFullscreenToggleCallback,
              },
            )),
            (t[0] = e.autoPlay),
            (t[1] = e.disablePiPControls),
            (t[2] = e.ogVideoInfo),
            (t[3] = e.onAspectRatio),
            (t[4] = e.onClose),
            (t[5] = e.onError),
            (t[6] = e.onRefSet),
            (t[7] = e.onSetFullscreenToggleCallback),
            (t[8] = e.onVideoDimensions),
            (t[9] = e.onVideoEnded),
            (t[10] = e.onVideoMetadataChange),
            (t[11] = e.startTime),
            (t[12] = n))
          : (n = t[12]),
        n
      );
    }
    l.default = u;
  },
  98,
);
