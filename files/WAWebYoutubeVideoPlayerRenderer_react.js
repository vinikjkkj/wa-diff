__d(
  "WAWebYoutubeVideoPlayerRenderer.react",
  [
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipYoutubeVideoPlayer.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "videoSrc"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(22),
        a,
        i,
        l;
      if (
        (n[0] !== t
          ? ((i = t.ref),
            (l = t.videoSrc),
            (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l))
          : ((a = n[1]), (i = n[2]), (l = n[3])),
        l == null)
      )
        return null;
      var s;
      n[4] !== a.autoPlay ||
      n[5] !== a.counterAbuseData ||
      n[6] !== a.enableDragBar ||
      n[7] !== a.onClose ||
      n[8] !== a.onRefSet ||
      n[9] !== a.onSetFullscreenToggleCallback ||
      n[10] !== a.onVideoMetadataChange ||
      n[11] !== a.startTime ||
      n[12] !== l
        ? ((s = u.jsx(
            r("WAWebPipYoutubeVideoPlayer.react"),
            {
              youtubeVideoId: l,
              startTime: a.startTime,
              onClose: a.onClose,
              disablePiPControls: a.enableDragBar,
              onRefSet: a.onRefSet,
              onVideoMetadataChange: a.onVideoMetadataChange,
              autoPlay: a.autoPlay,
              onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
              exposeIframeInPiP: a.enableDragBar,
              counterAbuseData: a.counterAbuseData,
            },
            l,
          )),
          (n[4] = a.autoPlay),
          (n[5] = a.counterAbuseData),
          (n[6] = a.enableDragBar),
          (n[7] = a.onClose),
          (n[8] = a.onRefSet),
          (n[9] = a.onSetFullscreenToggleCallback),
          (n[10] = a.onVideoMetadataChange),
          (n[11] = a.startTime),
          (n[12] = l),
          (n[13] = s))
        : (s = n[13]);
      var c;
      return (
        n[14] !== a.animationStartStyle ||
        n[15] !== a.bottomContent ||
        n[16] !== a.enableDragBar ||
        n[17] !== a.topContent ||
        n[18] !== i ||
        n[19] !== s ||
        n[20] !== l
          ? ((c = u.jsx(
              o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
              {
                ref: i,
                aspectRatio:
                  o("WAWebPipConst").YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO,
                animationStartStyle: a.animationStartStyle,
                enableDragBar: a.enableDragBar,
                topContent: a.topContent,
                bottomContent: a.bottomContent,
                children: s,
              },
              l,
            )),
            (n[14] = a.animationStartStyle),
            (n[15] = a.bottomContent),
            (n[16] = a.enableDragBar),
            (n[17] = a.topContent),
            (n[18] = i),
            (n[19] = s),
            (n[20] = l),
            (n[21] = c))
          : (c = n[21]),
        c
      );
    }
    l.default = c;
  },
  98,
);
