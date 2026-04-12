__d(
  "WAWebPipOgVideoPlayer.react",
  ["WAWebPipConst", "WAWebPipSharedVideoPlayer.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return s.jsx(
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
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
