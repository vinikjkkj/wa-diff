__d(
  "oz-player/strategies/OzStreamLengthStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r, o) {
      var a = t,
        i = o,
        l = e.getNumber("segments_to_stream_under_playhead_threshold"),
        s = e.getNumber("low_segment_stream_playhead_threshold");
      l > 0 && r.getCurrentTime() < s && (a = l);
      var u = [];
      u.push(i);
      for (var c = 1; c < a; c++) {
        var d = n.getSegmentAfter(i);
        if (!d) break;
        ((i = d), u.push(i));
      }
      return u;
    }
    i.getStreamingSegments = e;
  },
  66,
);
