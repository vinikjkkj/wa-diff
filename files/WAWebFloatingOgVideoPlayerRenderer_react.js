__d(
  "WAWebFloatingOgVideoPlayerRenderer.react",
  [
    "WAWebPipFloatingOgVideoPlayer.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "msg", "previewUrl", "videoSrc"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(24),
        a,
        i,
        l,
        s,
        c;
      if (
        (n[0] !== t
          ? ((s = t.ref),
            (a = t.msg),
            (i = t.previewUrl),
            (c = t.videoSrc),
            (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l),
            (n[4] = s),
            (n[5] = c))
          : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]), (c = n[5])),
        r("vulture")("_g1xesU8LCXhVH6Rt8JJoyVYU94="),
        a == null || c == null || i == null)
      )
        return null;
      var d;
      n[6] !== a || n[7] !== i || n[8] !== c
        ? ((d = { videoMsg: a, videoUrl: c, previewUrl: i }),
          (n[6] = a),
          (n[7] = i),
          (n[8] = c),
          (n[9] = d))
        : (d = n[9]);
      var m;
      return (
        n[10] !== l.animationStartStyle ||
        n[11] !== l.autoPlay ||
        n[12] !== l.bottomContent ||
        n[13] !== l.enableDragBar ||
        n[14] !== l.onClose ||
        n[15] !== l.onError ||
        n[16] !== l.onRefSet ||
        n[17] !== l.onSetFullscreenToggleCallback ||
        n[18] !== l.onVideoMetadataChange ||
        n[19] !== l.startTime ||
        n[20] !== l.topContent ||
        n[21] !== s ||
        n[22] !== d
          ? ((m = u.jsx(r("WAWebPipFloatingOgVideoPlayer.react"), {
              ref: s,
              ogVideoInfo: d,
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
            })),
            (n[10] = l.animationStartStyle),
            (n[11] = l.autoPlay),
            (n[12] = l.bottomContent),
            (n[13] = l.enableDragBar),
            (n[14] = l.onClose),
            (n[15] = l.onError),
            (n[16] = l.onRefSet),
            (n[17] = l.onSetFullscreenToggleCallback),
            (n[18] = l.onVideoMetadataChange),
            (n[19] = l.startTime),
            (n[20] = l.topContent),
            (n[21] = s),
            (n[22] = d),
            (n[23] = m))
          : (m = n[23]),
        m
      );
    }
    l.default = c;
  },
  98,
);
