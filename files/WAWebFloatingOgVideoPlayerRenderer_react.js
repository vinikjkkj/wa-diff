__d(
  "WAWebFloatingOgVideoPlayerRenderer.react",
  ["WAWebPipFloatingOgVideoPlayer.react", "react", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "msg", "previewUrl", "videoSrc"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        o = t.msg,
        a = t.previewUrl,
        i = t.videoSrc,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return (
        r("vulture")("_g1xesU8LCXhVH6Rt8JJoyVYU94="),
        o == null || i == null || a == null
          ? null
          : u.jsx(r("WAWebPipFloatingOgVideoPlayer.react"), {
              ref: n,
              ogVideoInfo: { videoMsg: o, videoUrl: i, previewUrl: a },
              startTime: l.startTime,
              onClose: l.onClose,
              onError: l.onError,
              animationStartStyle: l.animationStartStyle,
              autoPlay: l.autoPlay,
              enableDragBar: l.enableDragBar,
              topContent: l.topContent,
              bottomContent: l.bottomContent,
              disablePiPControls: l.enableDragBar,
              onRefSet: l.onRefSet,
              onVideoMetadataChange: l.onVideoMetadataChange,
              onSetFullscreenToggleCallback: l.onSetFullscreenToggleCallback,
            })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
