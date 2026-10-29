__d(
  "WAWebMusicSoundAnimationTint",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "st",
      u = 255;
    function c(t, n) {
      var r = n.split(",").map(function (e) {
          return e.trim();
        }),
        a = r.map(Number);
      if (
        a.length !== 3 ||
        r.includes("") ||
        a.some(function (e) {
          return !Number.isInteger(e) || e < 0 || e > u;
        })
      )
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] equalizer colour is not an RGB triple",
                ])),
            )
            .sendLogs("music-equalizer-colour-invalid"),
          t
        );
      var i = [].concat(
        a.map(function (e) {
          return e / u;
        }),
        [1],
      );
      return d(t, i);
    }
    function d(e, t) {
      if (Array.isArray(e))
        return e.map(function (e) {
          return d(e, t);
        });
      if (e == null || typeof e != "object") return e;
      var n = {};
      for (var r of Object.entries(e)) {
        var o = r[0],
          a = r[1];
        n[o] = d(a, t);
      }
      return (n.ty === s && (n.c = { a: 0, k: t }), n);
    }
    l.tintSoundAnimation = c;
  },
  98,
);
