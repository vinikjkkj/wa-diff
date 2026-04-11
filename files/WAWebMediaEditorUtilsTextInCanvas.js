__d(
  "WAWebMediaEditorUtilsTextInCanvas",
  ["WAWebEmoji", "WAWebMediaEditorEnumsFonts"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      var a = [];
      for (var i of e.split("\n")) {
        if (i === "") {
          a.push({ text: "", width: 0, words: [] });
          continue;
        }
        for (
          var l = i.split(" "), s = "", c = 0, d = [], m = 0;
          m < l.length;
          m++
        ) {
          var p = (m !== 0 ? " " : "") + l[m],
            _ = s + p,
            f = u(_, t, n);
          if (r > 0 && f > r && c > 0)
            (a.push({ text: s, width: c, words: d }),
              (s = ""),
              (c = 0),
              (d = []),
              m--);
          else {
            ((s = _), (c = f));
            for (var g of p.split(o("WAWebEmoji").EmojiUtil.emojiRegex()))
              if (g) {
                var h = null;
                o("WAWebEmoji").EmojiUtil.isEmoji(g) &&
                  (h = o("WAWebEmoji").EmojiUtil.getGlyphPath(g, 64));
                var y = u(g, t, n);
                d.push({ text: g, width: y, emojiPath: h });
              }
          }
        }
        c > 0 && a.push({ text: s, width: c, words: d });
      }
      return a;
    }
    function u(e, t, n) {
      var r = c(),
        a = r.getContext("2d");
      a.font =
        n + "px " + o("WAWebMediaEditorEnumsFonts").getFontStyle(t).fontFamily;
      var i = 0;
      for (var l of e.split(o("WAWebEmoji").EmojiUtil.emojiRegex()))
        o("WAWebEmoji").EmojiUtil.isEmoji(l)
          ? (i += n)
          : (i += a.measureText(l).width);
      return i;
    }
    function c() {
      return (
        e == null &&
          ((e = document.createElement("canvas")),
          (e.width = 9999),
          (e.height = 99)),
        e
      );
    }
    var d = new Map();
    function m(e, t) {
      var n =
          t +
          "px " +
          o("WAWebMediaEditorEnumsFonts").getFontStyle(e).fontFamily,
        r = d.get(n);
      if (r != null) return r;
      var a = "ABCDEF",
        i = Math.round(u(a, e, t)),
        l = t,
        s = c(),
        m = s.getContext("2d");
      ((m.textBaseline = "middle"),
        (m.font = n),
        (m.fillStyle = "red"),
        m.fillText(a, 0, l / 2));
      for (
        var p = m.getImageData(0, 0, i, l).data,
          _ = 1 / 0,
          f = 1 / 0,
          g = 1 / 0,
          h = 0;
        h < i;
        h++
      )
        for (var y = 0; y < l; y++) {
          var C = (y * i + h) * 4;
          p[C + 3] > 0 &&
            ((f = Math.min(f, y)),
            (_ = Math.min(_, h)),
            (g = Math.min(g, l - y)));
        }
      m.clearRect(0, 0, i, l);
      var b = { top: f, left: _, bottom: g };
      return (d.set(m.font, b), b);
    }
    ((l.getLines = s), (l.getTextBounds = m));
  },
  98,
);
