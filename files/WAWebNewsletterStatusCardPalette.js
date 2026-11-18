__d(
  "WAWebNewsletterStatusCardPalette",
  ["WAWebNewsletterStatusCardColorQuantizer"],
  function (t, n, r, o, a, i, l) {
    var e = { r: 37, g: 211, b: 102 },
      s = { r: 0, g: 0, b: 0 },
      u = Math.fround(0.3),
      c = 255,
      d = 112,
      m = d * d;
    function p(e) {
      var t = null;
      for (var n of o(
        "WAWebNewsletterStatusCardColorQuantizer",
      ).quantizeCardColors(e))
        (t == null || n.population > t.population) && (t = n);
      return t != null ? t.color : null;
    }
    function _(e, t) {
      var n = e * t;
      if (n <= m) return { width: Math.max(1, e), height: Math.max(1, t) };
      var r = Math.sqrt(m / n);
      return { width: Math.ceil(e * r), height: Math.ceil(t * r) };
    }
    function f(e) {
      return {
        top: h(e, function (e) {
          return g(e, c);
        }),
        bottom: h(e, function (e) {
          return g(e, 0);
        }),
      };
    }
    function g(e, t) {
      var n = Math.fround(1 - u);
      return Math.trunc(Math.fround(Math.fround(e * n) + Math.fround(t * u)));
    }
    function h(e, t) {
      var n = e.b,
        r = e.g,
        o = e.r;
      return "rgb(" + t(o) + ", " + t(r) + ", " + t(n) + ")";
    }
    ((l.FALLBACK_CARD_COLOR = e),
      (l.NO_SWATCH_CARD_COLOR = s),
      (l.getDominantColor = p),
      (l.getPaletteSampleSize = _),
      (l.getCardBackground = f));
  },
  98,
);
