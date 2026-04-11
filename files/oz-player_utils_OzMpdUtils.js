__d(
  "oz-player/utils/OzMpdUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = null;
      return (
        e.forEach(function (e) {
          if (e) {
            var n,
              r,
              o = e.endTime;
            o <
              ((n = (r = t) == null ? void 0 : r.endTime) != null
                ? n
                : 1 / 0) && (t = e);
          }
        }),
        t
      );
    }
    function l(t, n) {
      var r = [];
      if (
        (r.push.apply(
          r,
          t.getVideoRepresentations().concat(t.getAudioRepresentations()),
        ),
        r.length)
      ) {
        var o = r.map(function (e) {
          var t = e.getEndingSegment();
          return t ? t.getTimeRange() : null;
        });
        return e(o);
      }
      return null;
    }
    function s(e) {
      var t = [];
      if (
        (t.push.apply(
          t,
          e.getVideoRepresentations().concat(e.getAudioRepresentations()),
        ),
        t.length)
      ) {
        var n = t[0].getEndingSegment();
        if (n) return n.getSequenceNumber();
      }
      return null;
    }
    ((i.getLeastEndTimeTimeRange = e),
      (i.getMpdLastTimeRange = l),
      (i.getMpdLastSequenceNumber = s));
  },
  66,
);
