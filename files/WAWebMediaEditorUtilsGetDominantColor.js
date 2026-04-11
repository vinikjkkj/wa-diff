__d(
  "WAWebMediaEditorUtilsGetDominantColor",
  ["WAWebMediaEditorUtilsColor"],
  function (t, n, r, o, a, i, l) {
    var e = 5,
      s = 4,
      u = new (o("WAWebMediaEditorUtilsColor").Color)(220, 220, 220);
    function c(e) {
      var t = document.createElement("canvas"),
        n = t.getContext("2d");
      if (!n) return null;
      var r = (t.height = e.height),
        o = (t.width = e.width);
      n.drawImage(e, 0, 0);
      try {
        var a = n.getImageData(0, 0, o, r);
        return a.data;
      } catch (e) {
        return null;
      }
    }
    function d(t) {
      for (
        var n = e * s, r = 0, a = 0, i = 0, l = 0, u = 0, c = 0;
        c < t.length;
        c += n
      ) {
        var d = t[c + 3],
          m = t[c] * d,
          p = t[c + 1] * d,
          _ = t[c + 2] * d;
        ((r += m), (a += p), (i += _), (l += d), u++);
      }
      return l
        ? new (o("WAWebMediaEditorUtilsColor").Color)(
            Math.round(r / l),
            Math.round(a / l),
            Math.round(i / l),
            Math.round(l / u) / 255,
          )
        : new (o("WAWebMediaEditorUtilsColor").Color)(0, 0, 0, 0);
    }
    function m(e) {
      var t = c(e);
      return t ? d(t) : u;
    }
    ((l.DEFAULT_DOMINANT_COLOR = u), (l.getDominantColor = m));
  },
  98,
);
