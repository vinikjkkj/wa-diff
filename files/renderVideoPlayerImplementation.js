__d(
  "renderVideoPlayerImplementation",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (e.typename === "VideoPlayerEmptyImplementation")
        return s.jsx(e.Component, babelHelpers.extends({}, t, e.data));
      if (e.typename === "VideoPlayerOzImplementation")
        return s.jsx(e.Component, babelHelpers.extends({}, t, e.data));
      if (e.typename === "VideoPlayerProgressiveImplementation")
        return s.jsx(e.Component, babelHelpers.extends({}, t, e.data));
      if (e.typename === "VideoPlayerNextgendashImplementation")
        return s.jsx(e.Component, babelHelpers.extends({}, t, e.data));
      throw (
        e.typename,
        r("FBLogger")("comet_video_player").mustfixThrow(
          'CoreVideoPlayer: Unrecognized implementation typename "%s".',
          e.typename,
        )
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
