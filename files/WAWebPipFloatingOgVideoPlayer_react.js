__d(
  "WAWebPipFloatingOgVideoPlayer.react",
  [
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipGetImageDimensionsByUrl",
    "WAWebPipOgVideoPlayer.react",
    "isNonZeroNumber",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(e) {
      var t = r("WAWebPipGetImageDimensionsByUrl")(e),
        n = t.height,
        a = t.width;
      return o("isNonZeroNumber").isNonZeroNumber(a) &&
        o("isNonZeroNumber").isNonZeroNumber(n)
        ? a / n
        : void 0;
    }
    function m(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e);
      r("vulture")("XrX6MRU1IobW73Bn0L3bM21_7D0=");
      var l = c(function () {
          return d(i.ogVideoInfo.previewUrl);
        }),
        s = l[0],
        m = l[1],
        p = function (t) {
          t && (s == null || s === 0 || Math.abs(t - s) > 0.01) && m(t);
        };
      return u.jsx(
        o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
        {
          ref: a,
          aspectRatio: s,
          previewUrl: i.ogVideoInfo.previewUrl,
          animationStartStyle: i.animationStartStyle,
          bottomContent: i.bottomContent,
          topContent: i.topContent,
          enableDragBar: i.enableDragBar,
          children: u.jsx(r("WAWebPipOgVideoPlayer.react"), {
            ogVideoInfo: i.ogVideoInfo,
            startTime: i.startTime,
            onClose: i.onClose,
            onError: i.onError,
            onAspectRatio: p,
            autoPlay: !0,
            disablePiPControls: i.disablePiPControls,
            onRefSet: i.onRefSet,
            onVideoMetadataChange: i.onVideoMetadataChange,
            onSetFullscreenToggleCallback: i.onSetFullscreenToggleCallback,
          }),
        },
        (n = i.ogVideoInfo.videoMsg) == null ? void 0 : n.id.toString(),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
