__d(
  "WebIconUtils",
  [
    "coerceImageishSprited",
    "coerceImageishURL",
    "getImageSourceURLFromImageish",
    "isFalsey",
    "memoizeWithArgsWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /(?:\([\'\"]?)(.*?)(?:[\'\"]?\))/;
    function s(t) {
      var n,
        o = r("getImageSourceURLFromImageish")(t.src);
      if (o) return o;
      var a = d(t);
      return (a == null ? void 0 : a.url) != null
        ? (n = e.exec(a.url)) == null
          ? void 0
          : n[1]
        : null;
    }
    function u(e) {
      if (typeof e.src == "string" || r("coerceImageishURL")(e.src))
        return { width: e.size, height: e.size };
      var t = d(e);
      if (!t) return null;
      var n = m(t.size),
        o = n[0],
        a = n[1];
      return o != null && a != null ? { width: o, height: a } : null;
    }
    function c(e) {
      if (r("coerceImageishURL")(e.src)) return { x: 0, y: 0 };
      var t = d(e);
      if (!t) return null;
      var n = m(t == null ? void 0 : t.position),
        o = n[0],
        a = n[1];
      return o != null && a != null ? { x: o, y: a } : null;
    }
    var d = r("memoizeWithArgsWeak")(function (e) {
      var t,
        n = r("coerceImageishSprited")(e.src);
      if (n == null) return null;
      if (n.type === "cssless")
        return {
          position: n.style.backgroundPosition,
          size: n.style.backgroundSize,
          url: n.style.backgroundImage,
        };
      var o = (t = document) == null ? void 0 : t.body;
      if (o == null) return null;
      var a = document.createElement("div");
      ((a.className = n.className),
        (a.style.display = "none"),
        o.appendChild(a));
      var i = getComputedStyle(a),
        l = {
          position: i.backgroundPosition,
          size: i.backgroundSize,
          url: i.backgroundImage,
        };
      return (o.removeChild(a), l);
    }, "WebIconGetSpriteStyle");
    function m(e) {
      if (r("isFalsey")(e) || e.includes("auto")) return [void 0, void 0];
      var t = e.split(" "),
        n = t[0],
        o = t[1];
      return [parseFloat(n), parseFloat(o)];
    }
    ((l.getSrcFromIcon = s),
      (l.getSizeFromIcon = u),
      (l.getPositionFromIcon = c));
  },
  98,
);
