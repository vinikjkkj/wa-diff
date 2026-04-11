__d(
  "VideoPlayerIMFMetadataContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = { imfExpectedFromEmsg: !1, specInlineJson: null },
      d = s.createContext(c);
    d.displayName = "VideoPlayerIMFMetadataContext";
    var m = d.Provider;
    function p() {
      var e = u(d);
      if (e === c)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "useVideoPlayerIMFMetadata is not called from a component nested under VideoPlayerRelay/VideoPlayerX.",
        );
      return e;
    }
    ((l.VideoPlayerIMFMetadataContextProvider = m),
      (l.useVideoPlayerIMFMetadataFromContext = p));
  },
  98,
);
