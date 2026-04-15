__d(
  "WAWebPipFloatingMsgVideoPlayer.react",
  [
    "WAWebMediaOpaqueData",
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipMsgVideoPlayer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(32),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["preview", "aspectRatio"]), (n[3] = l))
        : (l = n[3]);
      var s = o("useWAWebModelValues").useModelValues(a.mediaData, l),
        c;
      n[4] !== s.preview
        ? ((c =
            s.preview instanceof r("WAWebMediaOpaqueData")
              ? "url(" + s.preview.url() + ")"
              : void 0),
          (n[4] = s.preview),
          (n[5] = c))
        : (c = n[5]);
      var d = c,
        m;
      n[6] !== a.msg.id
        ? ((m = a.msg.id.toString()), (n[6] = a.msg.id), (n[7] = m))
        : (m = n[7]);
      var p;
      n[8] !== s ||
      n[9] !== a.autoPlay ||
      n[10] !== a.disablePiPControls ||
      n[11] !== a.msg ||
      n[12] !== a.onClose ||
      n[13] !== a.onError ||
      n[14] !== a.onMissingMedia ||
      n[15] !== a.onOpenMediaViewer ||
      n[16] !== a.onRefSet ||
      n[17] !== a.onSetFullscreenToggleCallback ||
      n[18] !== a.onUnsupportedMedia ||
      n[19] !== a.onVideoMetadataChange ||
      n[20] !== a.startTime
        ? ((p = u.jsx(o("WAWebPipMsgVideoPlayer.react").WrappedMsgVideoPlayer, {
            msg: a.msg,
            mediaData: s,
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
          })),
          (n[8] = s),
          (n[9] = a.autoPlay),
          (n[10] = a.disablePiPControls),
          (n[11] = a.msg),
          (n[12] = a.onClose),
          (n[13] = a.onError),
          (n[14] = a.onMissingMedia),
          (n[15] = a.onOpenMediaViewer),
          (n[16] = a.onRefSet),
          (n[17] = a.onSetFullscreenToggleCallback),
          (n[18] = a.onUnsupportedMedia),
          (n[19] = a.onVideoMetadataChange),
          (n[20] = a.startTime),
          (n[21] = p))
        : (p = n[21]);
      var _;
      return (
        n[22] !== s.aspectRatio ||
        n[23] !== d ||
        n[24] !== a.animationStartStyle ||
        n[25] !== a.bottomContent ||
        n[26] !== a.enableDragBar ||
        n[27] !== a.topContent ||
        n[28] !== i ||
        n[29] !== m ||
        n[30] !== p
          ? ((_ = u.jsx(
              o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
              {
                ref: i,
                aspectRatio: s.aspectRatio,
                previewUrl: d,
                animationStartStyle: a.animationStartStyle,
                bottomContent: a.bottomContent,
                topContent: a.topContent,
                enableDragBar: a.enableDragBar,
                children: p,
              },
              m,
            )),
            (n[22] = s.aspectRatio),
            (n[23] = d),
            (n[24] = a.animationStartStyle),
            (n[25] = a.bottomContent),
            (n[26] = a.enableDragBar),
            (n[27] = a.topContent),
            (n[28] = i),
            (n[29] = m),
            (n[30] = p),
            (n[31] = _))
          : (_ = n[31]),
        _
      );
    }
    l.default = c;
  },
  98,
);
