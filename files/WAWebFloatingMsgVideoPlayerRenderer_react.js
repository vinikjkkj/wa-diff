__d(
  "WAWebFloatingMsgVideoPlayerRenderer.react",
  ["WAWebPipFloatingMsgVideoPlayer.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "msg"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        o = t.msg,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return o == null
        ? null
        : u.jsx(r("WAWebPipFloatingMsgVideoPlayer.react"), {
            ref: n,
            msg: o,
            mediaData: o.mediaData,
            animationStartStyle: a.animationStartStyle,
            startTime: a.startTime,
            onClose: a.onClose,
            onError: a.onError,
            onOpenMediaViewer: a.onClose,
            onMissingMedia: a.onClose,
            onUnsupportedMedia: a.onClose,
            autoPlay: a.autoPlay,
            enableDragBar: a.enableDragBar,
            topContent: a.topContent,
            bottomContent: a.bottomContent,
            disablePiPControls: a.enableDragBar,
            onRefSet: a.onRefSet,
            onVideoMetadataChange: a.onVideoMetadataChange,
            onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
