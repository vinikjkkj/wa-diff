__d(
  "WAWebGetEmojiPathExperimental",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = "" + window.location.origin,
      s = r("gkx")("26258")
        ? "https://web.whatsapp.com/emoji/v1"
        : e + "/emoji/v1",
      u = 16,
      c = 0,
      d = 1;
    function m(e, t, n) {
      return p(e, n, t, "png");
    }
    function p(e, t, n, r) {
      var o = _(e);
      return g("single", n, t, o + "." + r);
    }
    function _(e) {
      return Array.from(e, function (e) {
        return e.codePointAt(0).toString(16).padStart(6, "0");
      }).join("_");
    }
    function f(e, t, n, r) {
      return g("sprite", e, n, t + "." + r);
    }
    function g(e, t, n, r) {
      return [s, u, c, d, e, t.toLowerCase().slice(0, 1), n, r].join("/");
    }
    ((l.getGlyphExperimentalPath = m), (l.getEmojiSpritesExperimentalPath = f));
  },
  98,
);
