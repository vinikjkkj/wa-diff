__d(
  "AdsUniversalComposerTemplateRender",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "[ by {BREAKDOWN}]",
      l = "[ in the last {DATE}]",
      s = "[ sort by {SORT}]";
    function u(e) {
      return (
        e.includes("{") || e.includes("}") || e.includes("[") || e.includes("]")
      );
    }
    function c(e) {
      for (var t = !1, n = !1, r = 0; r < e.length; r++) {
        var o = e[r];
        if (o === "[") {
          if (t || n) return !1;
          t = !0;
        } else if (o === "]") {
          if (!t || n) return !1;
          t = !1;
        } else if (o === "{") {
          if (n) return !1;
          n = !0;
        } else if (o === "}") {
          if (!n) return !1;
          n = !1;
        }
      }
      return !t && !n;
    }
    function d(e, t) {
      for (var n = "", r = 0; r < e.length; ) {
        var o = e[r];
        if (o === "}") return null;
        if (o !== "{") {
          ((n += o), r++);
          continue;
        }
        var a = e.indexOf("}", r + 1);
        if (a === -1) return null;
        var i = t.get(e.slice(r + 1, a));
        if (i == null) return null;
        ((n += i), (r = a + 1));
      }
      return n;
    }
    function m(e, t) {
      if (!c(e)) return null;
      for (var n = "", r = 0; r < e.length; ) {
        if (e[r] === "]") return null;
        if (e[r] !== "[") {
          for (var o = r; o < e.length && e[o] !== "[" && e[o] !== "]"; ) o++;
          var a = d(e.slice(r, o), t);
          if (a == null) return null;
          ((n += a), (r = o));
          continue;
        }
        var i = e.indexOf("]", r + 1);
        if (i === -1) return null;
        var l = e.slice(r + 1, i);
        if (l.includes("[")) return null;
        var s = d(l, t);
        (s != null && (n += s), (r = i + 1));
      }
      return n;
    }
    ((i.SEGMENT_BREAKDOWN = e),
      (i.SEGMENT_DATE = l),
      (i.SEGMENT_SORT = s),
      (i.containsTemplateSyntax = u),
      (i.renderTemplate = m));
  },
  66,
);
