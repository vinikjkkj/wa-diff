__d(
  "getStyleProperty",
  ["camelize", "hyphenate"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null ? "" : String(e);
    }
    function s(t, n) {
      var o;
      if (
        window.getComputedStyle &&
        ((o = window.getComputedStyle(t, null)), o)
      )
        return e(o.getPropertyValue(r("hyphenate")(n)));
      if (document.defaultView && document.defaultView.getComputedStyle) {
        if (((o = document.defaultView.getComputedStyle(t, null)), o))
          return e(o.getPropertyValue(r("hyphenate")(n)));
        if (n === "display") return "none";
      }
      return t.currentStyle
        ? e(
            n === "float"
              ? t.currentStyle.cssFloat || t.currentStyle.styleFloat
              : t.currentStyle[r("camelize")(n)],
          )
        : e(t.style && t.style[r("camelize")(n)]);
    }
    l.default = s;
  },
  98,
);
