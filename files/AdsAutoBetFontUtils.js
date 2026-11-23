__d(
  "AdsAutoBetFontUtils",
  ["FontPickerFontLoader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    (o("FontPickerFontLoader").PREVIEW_FONT_KEY_TO_CX_LOADER,
      o("FontPickerFontLoader").FONT_KEY_TO_CX_LOADER);
    var e = (function () {
      var e = new Map();
      for (var t of Object.keys(
        o("FontPickerFontLoader").FONT_KEY_TO_CX_LOADER,
      )) {
        var n,
          r = t.lastIndexOf("-");
        if (!(r < 0)) {
          var a = t.slice(0, r),
            i = t.slice(r + 1),
            l = a.toLowerCase(),
            s = (n = e.get(l)) != null ? n : {};
          ((s[i] = a + " " + i), e.set(l, s));
        }
      }
      return e;
    })();
    function s(e) {
      return e.replace(/[\"\']/g, "").trim();
    }
    function u(t) {
      var n,
        r,
        o = s(t),
        a = o.replace(/\s+/g, "").toLowerCase(),
        i = e.get(a);
      if (i == null) return o;
      var l = Object.keys(i),
        u = (n = (r = i.Regular) != null ? r : i.Medium) != null ? n : i[l[0]];
      return '"' + u + '", sans-serif';
    }
    var c = u("Arial");
    ((l.cleanFontName = s),
      (l.resolveFontFamily = u),
      (l.DEFAULT_FONT_FAMILY = c));
  },
  98,
);
