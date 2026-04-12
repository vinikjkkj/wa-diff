__d(
  "WAWebYoutubeVideoPlayerRenderer.react",
  [
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipYoutubeVideoPlayer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "videoSrc"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        a = t.videoSrc,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return a == null
        ? null
        : u.jsx(
            o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
            {
              ref: n,
              aspectRatio:
                o("WAWebPipConst").YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO,
              animationStartStyle: i.animationStartStyle,
              enableDragBar: i.enableDragBar,
              topContent: i.topContent,
              bottomContent: i.bottomContent,
              children: u.jsx(
                r("WAWebPipYoutubeVideoPlayer.react"),
                {
                  youtubeVideoId: a,
                  startTime: i.startTime,
                  onClose: i.onClose,
                  disablePiPControls: i.enableDragBar,
                  onRefSet: i.onRefSet,
                  onVideoMetadataChange: i.onVideoMetadataChange,
                  autoPlay: i.autoPlay,
                  onSetFullscreenToggleCallback:
                    i.onSetFullscreenToggleCallback,
                  exposeIframeInPiP: i.enableDragBar,
                  counterAbuseData: i.counterAbuseData,
                },
                a,
              ),
            },
            a,
          );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
