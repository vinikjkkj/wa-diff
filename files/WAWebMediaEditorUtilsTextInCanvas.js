__d(
  "WAWebMediaEditorUtilsTextInCanvas",
  ["WAWebEmoji", "WAWebMediaEditorEnumsFonts"],
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
