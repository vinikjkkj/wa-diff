__d(
  "WAWebFloatingMsgVideoPlayerRenderer.react",
  ["WAWebPipFloatingMsgVideoPlayer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "msg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(18),
        a,
        i,
        l;
      if (
        (n[0] !== t
          ? ((l = t.ref),
            (a = t.msg),
            (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i),
            (n[3] = l))
          : ((a = n[1]), (i = n[2]), (l = n[3])),
        a == null)
      )
        return null;
      var s;
      return (
        n[4] !== a ||
        n[5] !== i.animationStartStyle ||
        n[6] !== i.autoPlay ||
        n[7] !== i.bottomContent ||
        n[8] !== i.enableDragBar ||
        n[9] !== i.onClose ||
        n[10] !== i.onError ||
        n[11] !== i.onRefSet ||
        n[12] !== i.onSetFullscreenToggleCallback ||
        n[13] !== i.onVideoMetadataChange ||
        n[14] !== i.startTime ||
        n[15] !== i.topContent ||
        n[16] !== l
          ? ((s = u.jsx(r("WAWebPipFloatingMsgVideoPlayer.react"), {
              ref: l,
              msg: a,
              mediaData: a.mediaData,
              animationStartStyle: i.animationStartStyle,
              startTime: i.startTime,
              onClose: i.onClose,
              onError: i.onError,
              onOpenMediaViewer: i.onClose,
              onMissingMedia: i.onClose,
              onUnsupportedMedia: i.onClose,
              autoPlay: i.autoPlay,
              enableDragBar: i.enableDragBar,
              topContent: i.topContent,
              bottomContent: i.bottomContent,
              disablePiPControls: i.enableDragBar,
              onRefSet: i.onRefSet,
              onVideoMetadataChange: i.onVideoMetadataChange,
              onSetFullscreenToggleCallback: i.onSetFullscreenToggleCallback,
            })),
            (n[4] = a),
            (n[5] = i.animationStartStyle),
            (n[6] = i.autoPlay),
            (n[7] = i.bottomContent),
            (n[8] = i.enableDragBar),
            (n[9] = i.onClose),
            (n[10] = i.onError),
            (n[11] = i.onRefSet),
            (n[12] = i.onSetFullscreenToggleCallback),
            (n[13] = i.onVideoMetadataChange),
            (n[14] = i.startTime),
            (n[15] = i.topContent),
            (n[16] = l),
            (n[17] = s))
          : (s = n[17]),
        s
      );
    }
    l.default = c;
  },
  98,
);
