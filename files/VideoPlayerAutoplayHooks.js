__d(
  "VideoPlayerAutoplayHooks",
  ["FBLogger", "VideoPlayerAutoplayContexts", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(o("VideoPlayerAutoplayContexts").AutoplayApiContext);
      if (e == null)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "Empty AutoplayApiContext. Are you rendering useAutoplayApi outside of VideoAutoplayManagerX?",
        );
      return e;
    }
    function c() {
      return s(o("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext);
    }
    ((l.useAutoplayApi = u), (l.useVideoAutoplayLocalScope = c));
  },
  98,
);
