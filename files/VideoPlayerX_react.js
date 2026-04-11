__d(
  "VideoPlayerX.react",
  [
    "VideoPlayerErrorBoundary.react",
    "VideoPlayerXImpl.react",
    "defaultErrorBoundaryFallback",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn",
        "errorBoundaryFallback",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a,
        i,
        l;
      n[0] !== t
        ? ((l = t.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn),
          (a = t.errorBoundaryFallback),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s = l === void 0 ? !1 : l,
        c = i.videoPlayerSpherical != null,
        d;
      n[4] !== i || n[5] !== c
        ? ((d = u.jsx(
            r("VideoPlayerXImpl.react"),
            babelHelpers.extends(
              { VideoPlayerShakaPerformanceLoggerClass: null, isSpherical: c },
              i,
            ),
          )),
          (n[4] = i),
          (n[5] = c),
          (n[6] = d))
        : (d = n[6]);
      var m = d;
      if (s) return m;
      var p = a != null ? a : r("defaultErrorBoundaryFallback"),
        _;
      return (
        n[7] !== m || n[8] !== p
          ? ((_ = u.jsx(r("VideoPlayerErrorBoundary.react"), {
              description: "VideoPlayerX",
              fallback: p,
              children: m,
            })),
            (n[7] = m),
            (n[8] = p),
            (n[9] = _))
          : (_ = n[9]),
        _
      );
    }
    l.default = c;
  },
  98,
);
