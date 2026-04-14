__d(
  "WAWebPipFloatingMsgVideoPlayer.react",
  [
    "WAWebMediaOpaqueData",
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipMsgVideoPlayer.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "preview",
          "aspectRatio",
        ]),
        l =
          i.preview instanceof r("WAWebMediaOpaqueData")
            ? "url(" + i.preview.url() + ")"
            : void 0;
      return u.jsx(
        o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
        {
          ref: n,
          aspectRatio: i.aspectRatio,
          previewUrl: l,
          animationStartStyle: a.animationStartStyle,
          bottomContent: a.bottomContent,
          topContent: a.topContent,
          enableDragBar: a.enableDragBar,
          children: u.jsx(
            o("WAWebPipMsgVideoPlayer.react").WrappedMsgVideoPlayer,
            {
              msg: a.msg,
              mediaData: i,
              startTime: a.startTime,
              onClose: a.onClose,
              onError: a.onError,
              onOpenMediaViewer: a.onOpenMediaViewer,
              onMissingMedia: a.onMissingMedia,
              onUnsupportedMedia: a.onUnsupportedMedia,
              autoPlay: a.autoPlay,
              type: o("WAWebPipConst").PlayerType.FLOATER,
              disablePiPControls: a.disablePiPControls,
              onRefSet: a.onRefSet,
              onVideoMetadataChange: a.onVideoMetadataChange,
              onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback,
            },
          ),
        },
        a.msg.id.toString(),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
