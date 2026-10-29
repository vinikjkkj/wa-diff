__d(
  "WAWebMusicLyricsUtils",
  ["WALogger", "WALongInt"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 86400;
    function d(e, t) {
      var n = e.lyrics,
        r = e.lyricsConfirmedAtS;
      return r == null ? n != null && n.length > 0 : t - r >= c;
    }
    var m = 64,
      p = 256;
    function _(t, n, r) {
      var a,
        i = (a = t == null ? void 0 : t.lines) != null ? a : [];
      if (i.length === 0) return null;
      if (n == null || r == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[music] lyrics dropped: no clip window",
              ])),
          ),
          null
        );
      var l = i.map(f),
        c = g(l, n, n + r);
      if (c != null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[music] lyrics dropped: ",
                ", ",
                " lines",
              ])),
            c,
            i.length,
          ),
          null
        );
      var d = l.filter(Boolean),
        m = d.map(y);
      return (
        m.some(function (e) {
          return e == null;
        }) &&
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[music] lyrics word timing dropped",
              ])),
          ),
        d.map(function (e, t) {
          var n;
          return {
            startTimeMs: e.startTimeMs,
            endTimeMs: e.endTimeMs,
            text: e.text,
            wordOffsets: m.includes(null) ? [] : (n = m[t]) != null ? n : [],
          };
        })
      );
    }
    function f(e) {
      var t,
        n = o("WALongInt").maybeNumber(e.startTimeInMs),
        r = o("WALongInt").maybeNumber(e.endTimeInMs);
      return n == null || r == null
        ? null
        : {
            startTimeMs: n,
            endTimeMs: r,
            text: (t = e.text) != null ? t : "",
            wordOffsets: e.wordOffsets,
          };
    }
    function g(e, t, n) {
      if (e.length > m) return "too many lines";
      var r = -1 / 0;
      for (var o of e) {
        if (o == null) return "line without times";
        var a = h(o, r, t, n);
        if (a != null) return a;
        r = o.startTimeMs;
      }
      return null;
    }
    function h(e, t, n, r) {
      return e.text.length > p
        ? "line too long"
        : e.startTimeMs < t
          ? "lines out of order"
          : e.endTimeMs < e.startTimeMs
            ? "line ends before it starts"
            : e.endTimeMs <= n || e.startTimeMs >= r
              ? "line outside the clip"
              : null;
    }
    function y(e) {
      var t = Array.from(e.text),
        n = e.endTimeMs - e.startTimeMs,
        r = [],
        a = 0,
        i = 0;
      for (var l of e.wordOffsets) {
        var s,
          u,
          c,
          d,
          m = (s = l.startIndex) != null ? s : -1,
          p = (u = l.endIndex) != null ? u : -1,
          _ =
            (c = o("WALongInt").maybeNumber(l.startOffsetMs)) != null ? c : -1,
          f = (d = o("WALongInt").maybeNumber(l.endOffsetMs)) != null ? d : -1,
          g = m >= a && p > m && p <= t.length && _ >= i && f >= _ && f <= n;
        if (!g) return null;
        (r.push({
          startIndex: t.slice(0, m).join("").length,
          endIndex: t.slice(0, p).join("").length,
          startOffsetMs: _,
          endOffsetMs: f,
        }),
          (a = p),
          (i = _));
      }
      return r;
    }
    ((l.LYRICS_TTL_S = c), (l.areLyricsExpired = d), (l.toMusicLyrics = _));
  },
  98,
);
