__d(
  "VideoDebugItemHelper",
  ["BinarySearch", "SegmentInfoConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t ? n : null;
        })
        .filter(function (e) {
          return e != null;
        })
        .join(", ");
    }
    function s(e) {
      var t = e.toFixed(3);
      return t + "s";
    }
    function u(e) {
      for (
        var t = e.map(function (e) {
            return {
              debugJsonString: e.debugJsonString,
              endTime: e.endTime,
              gap: !1,
              startTime: e.startTime,
            };
          }),
          n = t.length,
          r = 1;
        r < n;
        r++
      ) {
        var o = {
          endTime: t[r].startTime,
          gap: !0,
          startTime: t[r - 1].endTime,
        };
        t.push(o);
      }
      return t;
    }
    function c(e) {
      var t = e == null ? void 0 : e.byteLength;
      if (!e || t == null || !(t >= 0)) return "N/A";
      var n = 1024,
        r = e.mediaTimeEnd - e.mediaTimeStart;
      return r > 0 ? ((t / r / n) * 8).toFixed(1) + "kbps" : "N/A";
    }
    function d(e, t) {
      for (
        var n = e.length - 1;
        n >= 0 &&
        n >= e.length - o("SegmentInfoConstants").MAX_SEGMENT_SEARCH_RANGE;
        n -= 1
      ) {
        var r = e[n];
        if (r != null && t >= r.mediaTimeStart && t <= r.mediaTimeEnd) return r;
      }
      return o("BinarySearch").findInArray(e, t, m);
    }
    function m(e, t) {
      return t >= e.mediaTimeStart && t <= e.mediaTimeEnd
        ? 0
        : t < e.mediaTimeStart
          ? 1
          : -1;
    }
    function p(e, t) {
      var n = e != null ? d(e, t) : null;
      return c(n);
    }
    function _(e, t) {
      for (
        var n = 0,
          r =
            Math.floor(
              t - o("SegmentInfoConstants").NEARBY_SEGMENT_ARR_SIZE / 2,
            ) < 0
              ? 0
              : Math.floor(
                  t - o("SegmentInfoConstants").NEARBY_SEGMENT_ARR_SIZE / 2,
                ),
          a = r;
        a < r + o("SegmentInfoConstants").NEARBY_SEGMENT_ARR_SIZE;
        a += 1
      ) {
        var i = e != null ? e[a] : null;
        if (i != null) {
          var l = i.mediaTimeEnd - i.mediaTimeStart;
          l > n && (n = l);
        }
      }
      return n;
    }
    function f(e, t) {
      if (e == null) return 0;
      var n =
        t == null
          ? void 0
          : t.find(function (t) {
              return t.startTime <= e && e < t.endTime;
            });
      return n ? n.endTime - e : 0;
    }
    ((l.formatFlagsForDebug = e),
      (l.formatTime = s),
      (l.computeBufferGaps = u),
      (l.getCurrentBitrate = p),
      (l.getMaxSegmentDuration = _),
      (l.getBufferAheadFromCurrentTime = f));
  },
  98,
);
