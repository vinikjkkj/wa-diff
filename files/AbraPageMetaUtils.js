__d(
  "AbraPageMetaUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "color-scheme",
      l = "theme-color",
      s =
        document.querySelector == null
          ? void 0
          : document.querySelector('meta[name="' + e + '"]');
    function u() {
      var e,
        t = (e = s) == null ? void 0 : e.getAttribute("content");
      return t == null ? !1 : t.startsWith("dark") || t.startsWith("only dark");
    }
    function c(t) {
      var n = t ? "dark" : "light";
      if (s == null) {
        var r,
          o = document.createElement("meta");
        (o.setAttribute("name", e),
          o.setAttribute("content", n),
          (r = document.querySelector("head")) == null || r.appendChild(o),
          (s = o));
      } else {
        var a;
        (a = s) == null || a.setAttribute("content", n);
      }
    }
    function d(e) {
      var t = document.querySelector('meta[name="' + l + '"]');
      if (t == null) {
        var n,
          r = document.createElement("meta");
        (r.setAttribute("name", l),
          r.setAttribute("content", e),
          (n = document.querySelector("head")) == null || n.appendChild(r));
      } else t == null || t.setAttribute("content", e);
    }
    ((i.isDarkModeMetaColorScheme = u),
      (i.setDarkModeMetaColorScheme = c),
      (i.setMetaThemeColor = d));
  },
  66,
);
