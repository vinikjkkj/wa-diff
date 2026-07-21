__d(
  "SegmentInfoConstants",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 36,
      l = 500,
      s = 0.25,
      u = 0.05,
      c = 0.75,
      d = Math.max(s, u) + c + u,
      m = 40,
      p = 10,
      _ = ["video", "audio", "captions"];
    function f(e) {
      var t,
        n =
          (t = {
            audio: "rgb(219, 26, 139)",
            captions: "rgb(209, 124, 41)",
            combo: "rgb(104, 129, 196)",
            video: "rgb(128, 0, 128)",
          }[e]) != null
            ? t
            : "rgb(104, 129, 196)";
      return n;
    }
    ((i.SEGMENT_GRAPH_PIXELS_PER_SECOND = e),
      (i.SEGMENT_GRAPH_DEFAULT_WIDTH_PIXELS = l),
      (i.BUFFER_GRAPH_HEIGHT = s),
      (i.SEGMENT_GRAPH_BORDER_WIDTH = u),
      (i.TRACK_INNER_HEIGHT = c),
      (i.TRACK_HEIGHT = d),
      (i.NEARBY_SEGMENT_ARR_SIZE = m),
      (i.MAX_SEGMENT_SEARCH_RANGE = p),
      (i.VIDEO_PLAYER_DEBUG_API_TRACK_KEYS_ORDERED_FOR_DISPLAY = _),
      (i.getColorByTrackKey = f));
  },
  66,
);
