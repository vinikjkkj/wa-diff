__d(
  "WAWebMediaEditorUtilsTextInCanvas",
  ["WAWebEmoji", "WAWebMediaEditorEnumsFonts", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.font,
        n = e.fontSize,
        r = e.maxWidth,
        a = e.originalText,
        i = [];
      for (var l of a.split("\n")) {
        if (l === "") {
          i.push({ text: "", width: 0, words: [] });
          continue;
        }
        for (
          var s = l.split(" "), c = "", d = 0, m = [], p = 0;
          p < s.length;
          p++
        ) {
          var _ = (p !== 0 ? " " : "") + s[p],
            f = c + _,
            g = u(f, t, n);
          if (r > 0 && g > r && d > 0)
            (i.push({ text: c, width: d, words: m }),
              (c = ""),
              (d = 0),
              (m = []),
              p--);
          else {
            ((c = f), (d = g));
            for (var h of _.split(o("WAWebEmoji").EmojiUtil.emojiRegex()))
              if (h) {
                var y = null;
                o("WAWebEmoji").EmojiUtil.isEmoji(h) &&
                  (y = o("WAWebEmoji").EmojiUtil.getGlyphPath(h, 64));
                var C = u(h, t, n);
                m.push({ text: h, width: C, emojiPath: y });
              }
          }
        }
        d > 0 && i.push({ text: c, width: d, words: m });
      }
      return i;
    }
    function u(e, t, n) {
      var a = c(),
        i = r("nullthrows")(a.getContext("2d"));
      i.font =
        n + "px " + o("WAWebMediaEditorEnumsFonts").getFontStyle(t).fontFamily;
      var l = 0;
      for (var s of e.split(o("WAWebEmoji").EmojiUtil.emojiRegex()))
        o("WAWebEmoji").EmojiUtil.isEmoji(s)
          ? (l += n)
          : (l += i.measureText(s).width);
      return l;
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
        a = d.get(n);
      if (a != null) return a;
      var i = "ABCDEF",
        l = Math.round(u(i, e, t)),
        s = t,
        m = c(),
        p = r("nullthrows")(m.getContext("2d"));
      ((p.textBaseline = "middle"),
        (p.font = n),
        (p.fillStyle = "red"),
        p.fillText(i, 0, s / 2));
      for (
        var _ = p.getImageData(0, 0, l, s).data,
          f = 1 / 0,
          g = 1 / 0,
          h = 1 / 0,
          y = 0;
        y < l;
        y++
      )
        for (var C = 0; C < s; C++) {
          var b = (C * l + y) * 4;
          _[b + 3] > 0 &&
            ((g = Math.min(g, C)),
            (f = Math.min(f, y)),
            (h = Math.min(h, s - C)));
        }
      p.clearRect(0, 0, l, s);
      var v = { top: g, left: f, bottom: h };
      return (d.set(p.font, v), v);
    }
    ((l.getLines = s), (l.getTextBounds = m));
  },
  98,
);
