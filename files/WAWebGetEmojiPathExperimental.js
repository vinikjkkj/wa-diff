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
      d = 2,
      m = [u, c, d];
    function p(e, t, n, r) {
      return _(e, n, t, "png", r);
    }
    function _(e, t, n, r, o) {
      var a = f(e);
      return h({
        assetVersion:
          n === "APPLE" && t === 160
            ? o == null
              ? void 0
              : o.appleLargeVersion
            : void 0,
        emojiType: n,
        identifier: a + "." + r,
        packaging: "single",
        size: t,
      });
    }
    function f(e) {
      return Array.from(e, function (e) {
        return e.codePointAt(0).toString(16).padStart(6, "0");
      }).join("_");
    }
    function g(e, t, n, r) {
      return h({
        emojiType: e,
        identifier: t + "." + r,
        packaging: "sprite",
        size: n,
      });
    }
    function h(e) {
      var t = e.assetVersion,
        n = e.emojiType,
        r = e.identifier,
        o = e.packaging,
        a = e.size,
        i = t != null ? t : m;
      return [s].concat(i, [o, n.toLowerCase().slice(0, 1), a, r]).join("/");
    }
    ((l.getGlyphExperimentalPath = p), (l.getEmojiSpritesExperimentalPath = g));
  },
  98,
);
