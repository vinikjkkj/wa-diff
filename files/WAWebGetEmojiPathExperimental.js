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
      d = 2;
    function m(e, t, n) {
      return p(e, n, t, "png");
    }
    function p(e, t, n, r) {
      var o = _(e);
      return g({
        emojiType: n,
        identifier: o + "." + r,
        packaging: "single",
        size: t,
      });
    }
    function _(e) {
      return Array.from(e, function (e) {
        return e.codePointAt(0).toString(16).padStart(6, "0");
      }).join("_");
    }
    function f(e, t, n, r) {
      return g({
        emojiType: e,
        identifier: t + "." + r,
        packaging: "sprite",
        size: n,
      });
    }
    function g(e) {
      var t = e.emojiType,
        n = e.identifier,
        r = e.packaging,
        o = e.size;
      return [s, u, c, d, r, t.toLowerCase().slice(0, 1), o, n].join("/");
    }
    ((l.getGlyphExperimentalPath = m), (l.getEmojiSpritesExperimentalPath = f));
  },
  98,
);
