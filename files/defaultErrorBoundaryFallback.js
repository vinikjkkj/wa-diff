__d(
  "defaultErrorBoundaryFallback",
  [
    "VideoPlayerFallbackCover.react",
    "getVideoPlayerUserFacingErrorMessageFromError",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = r("getVideoPlayerUserFacingErrorMessageFromError")(e);
      return s.jsx(r("VideoPlayerFallbackCover.react"), {
        debugError: e,
        message: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
