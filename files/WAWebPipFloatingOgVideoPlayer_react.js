__d(
  "WAWebPipFloatingOgVideoPlayer.react",
  [
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipGetImageDimensionsByUrl",
    "WAWebPipOgVideoPlayer.react",
    "isNonZeroNumber",
    "react",
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(29),
        i,
        l;
      (a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2])),
        r("vulture")("XrX6MRU1IobW73Bn0L3bM21_7D0="));
      var s;
      a[3] !== i.ogVideoInfo.previewUrl
        ? ((s = function () {
            return d(i.ogVideoInfo.previewUrl);
          }),
          (a[3] = i.ogVideoInfo.previewUrl),
          (a[4] = s))
        : (s = a[4]);
      var m = c(s),
        p = m[0],
        _ = m[1],
        f;
      a[5] !== p
        ? ((f = function (t) {
            t && (p == null || p === 0 || Math.abs(t - p) > 0.01) && _(t);
          }),
          (a[5] = p),
          (a[6] = f))
        : (f = a[6]);
      var g = f,
        h;
      if (a[7] !== ((n = i.ogVideoInfo.videoMsg) == null ? void 0 : n.id)) {
        var y, C;
        ((h = (y = i.ogVideoInfo.videoMsg) == null ? void 0 : y.id.toString()),
          (a[7] = (C = i.ogVideoInfo.videoMsg) == null ? void 0 : C.id),
          (a[8] = h));
      } else h = a[8];
      var b;
      a[9] !== g ||
      a[10] !== i.disablePiPControls ||
      a[11] !== i.ogVideoInfo ||
      a[12] !== i.onClose ||
      a[13] !== i.onError ||
      a[14] !== i.onRefSet ||
      a[15] !== i.onSetFullscreenToggleCallback ||
      a[16] !== i.onVideoMetadataChange ||
      a[17] !== i.startTime
        ? ((b = u.jsx(r("WAWebPipOgVideoPlayer.react"), {
            ogVideoInfo: i.ogVideoInfo,
            startTime: i.startTime,
            onClose: i.onClose,
            onError: i.onError,
            onAspectRatio: g,
            autoPlay: !0,
            disablePiPControls: i.disablePiPControls,
            onRefSet: i.onRefSet,
            onVideoMetadataChange: i.onVideoMetadataChange,
            onSetFullscreenToggleCallback: i.onSetFullscreenToggleCallback,
          })),
          (a[9] = g),
          (a[10] = i.disablePiPControls),
          (a[11] = i.ogVideoInfo),
          (a[12] = i.onClose),
          (a[13] = i.onError),
          (a[14] = i.onRefSet),
          (a[15] = i.onSetFullscreenToggleCallback),
          (a[16] = i.onVideoMetadataChange),
          (a[17] = i.startTime),
          (a[18] = b))
        : (b = a[18]);
      var v;
      return (
        a[19] !== p ||
        a[20] !== i.animationStartStyle ||
        a[21] !== i.bottomContent ||
        a[22] !== i.enableDragBar ||
        a[23] !== i.ogVideoInfo.previewUrl ||
        a[24] !== i.topContent ||
        a[25] !== l ||
        a[26] !== h ||
        a[27] !== b
          ? ((v = u.jsx(
              o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
              {
                ref: l,
                aspectRatio: p,
                previewUrl: i.ogVideoInfo.previewUrl,
                animationStartStyle: i.animationStartStyle,
                bottomContent: i.bottomContent,
                topContent: i.topContent,
                enableDragBar: i.enableDragBar,
                children: b,
              },
              h,
            )),
            (a[19] = p),
            (a[20] = i.animationStartStyle),
            (a[21] = i.bottomContent),
            (a[22] = i.enableDragBar),
            (a[23] = i.ogVideoInfo.previewUrl),
            (a[24] = i.topContent),
            (a[25] = l),
            (a[26] = h),
            (a[27] = b),
            (a[28] = v))
          : (v = a[28]),
        v
      );
    }
    l.default = m;
  },
  98,
);
