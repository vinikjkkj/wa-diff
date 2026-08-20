__d(
  "VideoPlayerNextgendashMediaUtils",
  ["nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { byteLength: null, byteOffset: 0 };
    function s(e, t, n) {
      if (t < 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashStartEndByteIndexInvalid",
          "startByteIndex < 0 %s",
          JSON.stringify([t, n]),
        );
      if (n < t)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashStartEndByteIndexInvalid",
          "endByteIndex < startByteIndex %s",
          JSON.stringify([t, n]),
        );
      return { byteLength: n - t + 1, byteOffset: t };
    }
    function u(e, t) {
      if (t.byteOffset < 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashByteRangeInvalid",
          "byteOffset < 0 %s",
          JSON.stringify(t),
        );
      if (t.byteLength != null && t.byteLength <= 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashByteRangeInvalid",
          "byteLength <= 0 %s",
          JSON.stringify(t),
        );
      return [
        t.byteOffset,
        t.byteLength != null ? t.byteOffset + t.byteLength - 1 : null,
      ];
    }
    function c(e) {
      var t = [];
      try {
        var n = e();
        if (n)
          for (var r = 0, o = n.length; r < o; r++)
            t.push([n.start(r), n.end(r)]);
      } catch (e) {}
      return t;
    }
    function d(e) {
      return e.length > 0
        ? e
            .map(function (e) {
              return m(e);
            })
            .join(",")
        : "[]";
    }
    function m(e, t) {
      return (
        "[" + e[0] + "s.." + e[1] + "s" + (t == null ? "" : t ? "X" : "~") + "]"
      );
    }
    function p(e, t, n) {
      return (n === void 0 && (n = 0), e[0] - n <= t && t <= e[1] + n);
    }
    function _(e, t, n) {
      var r, o;
      return e != null && t != null
        ? (r =
            (o = t.findLast(function (t) {
              var n = t[0],
                r = t[1];
              return n <= e && e <= r;
            })) == null
              ? void 0
              : o[2]) != null
          ? r
          : n
        : void 0;
    }
    function f(e, t) {
      return (e || "unknown") + '; codecs="' + t + '"';
    }
    function g(e, t, n) {
      return e + "; width=" + t + "; height=" + n;
    }
    function h(e) {
      var t,
        n,
        r,
        o = /^([^;]+)(?:;\s*codecs=(?:(?:\"([^\"]*?)\")|([^;]*)))?.*$/i,
        a = (t = o.exec(e)) != null ? t : [],
        i = a[1],
        l = a[2],
        s = a[3],
        u = i || "",
        c = l || s || "",
        d = c
          .split(",")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          }),
        m = (n = d[0]) != null ? n : "",
        p = (r = m.split(".")[0]) != null ? r : "",
        _ = u.split("/"),
        f = _[0],
        g = _[1];
      return {
        codecFamily: p,
        codecs: c,
        containerType: g != null ? g : "",
        contentType: f != null ? f : "",
        mimeCodecs: e,
        mimeType: u,
      };
    }
    function y(e) {
      return e.mimeType + "/" + e.codecs;
    }
    function C(e) {
      var t = e.buffered,
        n = e.duration;
      return (
        n !== "NOT_A_NUMBER" &&
        n > 0 &&
        Number.isFinite(n) &&
        t.length === 1 &&
        t[0][0] === 0 &&
        t[0][1] === n
      );
    }
    ((l.ZERO_TO_EOF_OPEN_ENDED_BYTE_RANGE = e),
      (l.makeByteRangeFromStartEndByteIndex = s),
      (l.makeStartEndByteIndexFromByteRangeMaybeOpenEnded = u),
      (l.snapshotTimeRanges = c),
      (l.debugStringifyTimeRanges = d),
      (l.debugStringifyTimeRange = m),
      (l.isWithinRange = p),
      (l.findTimeRangeAnnotationAtMediaTime = _),
      (l.combineMimeTypeAndCodecs = f),
      (l.appendContentAttributesToMimeCodecs = g),
      (l.parseMimeCodecs = h),
      (l.debugStringifyMimeCodecs = y),
      (l.isFullyBuffered = C));
  },
  98,
);
