__d(
  "oz-player/streams/OzSegmentUtils",
  ["oz-player/manifests/OzSegmentOptions", "oz-player/shims/OzURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.reduce(function (e, t) {
        var n, r;
        return ((n = t == null ? void 0 : t.getSequenceNumber()) != null
          ? n
          : 0) >
          ((r = e == null ? void 0 : e.getSequenceNumber()) != null ? r : 0)
          ? t
          : e;
      });
    }
    function s(e, t) {
      var n = new (r("oz-player/manifests/OzSegmentOptions"))();
      return e.getPredictedSegmentAfter({
        getData: function () {
          return null;
        },
        getByteRange: function () {
          return null;
        },
        getSequenceNumber: function () {
          return t - 1;
        },
        getTimeRange: function () {
          return { endTime: 0, startTime: 0 };
        },
        getURI: function () {
          return new (r("oz-player/shims/OzURI"))("");
        },
        getOptions: function () {
          return n;
        },
      });
    }
    ((l.getMaxSegment = e), (l.getSegmentForSequenceNumber = s));
  },
  98,
);
