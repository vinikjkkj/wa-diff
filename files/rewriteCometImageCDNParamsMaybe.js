__d(
  "rewriteCometImageCDNParamsMaybe",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        1, 3, 12, 16, 18, 24, 30, 32, 34, 36, 38, 40, 43, 48, 50, 56, 57, 60,
        64, 68, 70, 72, 73, 74, 75, 80, 86, 90, 96, 100, 110, 111, 112, 114,
        118, 120, 128, 129, 130, 133, 135, 140, 147, 148, 150, 160, 180, 190,
        192, 200, 203, 206, 210, 212, 224, 225, 240, 243, 249, 250, 256, 262,
        270, 279, 280, 285, 288, 300, 306, 319, 320, 332, 338, 348, 350, 360,
        372, 373, 376, 380, 390, 394, 400, 403, 405, 408, 412, 417, 420, 450,
        468, 479, 480, 512, 515, 540, 562, 564, 565, 576, 590, 599, 600, 624,
        640, 672, 704, 719, 720, 750, 768, 796, 800, 810, 828, 900, 936, 937,
        959, 960, 1008, 1024, 1029, 1056, 1080, 1125, 1170, 1179, 1200, 1206,
        1225, 1242, 1280, 1284, 1286, 1290, 1300, 1320, 1440, 1500, 1536, 1600,
        1620, 1800, 2048, 3e3, 6e3,
      ],
      s = /[?&]cstp=([^&]+)/,
      u = /([?&])ctp=[^&]*/;
    function c(e) {
      var t = e.match(/^mx(\d+)x(\d+)$/);
      return t == null
        ? null
        : { height: parseInt(t[2], 10), width: parseInt(t[1], 10) };
    }
    function d(t) {
      for (var n of e) if (n >= t) return n;
      return e[e.length - 1];
    }
    function m(t) {
      var n = null;
      for (var r of e)
        if (r <= t) n = r;
        else break;
      return n;
    }
    function p(e, t) {
      if (!r("gkx")("7455") || e === "") return e;
      var n = e.match(s);
      if (n == null) return e;
      var o = c(n[1]);
      if (o == null) return e;
      var a = [],
        i = t.targetWidth;
      if (i != null && i > 0) {
        var l = Math.max(o.width, o.height),
          p = d(i),
          _ = p <= l ? p : m(l);
        _ != null && a.push("s" + _ + "x" + _);
      }
      if (
        (t.quality != null && t.quality > 0 && a.push("q" + t.quality),
        a.length === 0)
      )
        return e;
      a.sort();
      var f = a.join("_"),
        g = e.match(u);
      return g != null ? e.replace(u, g[1] + "ctp=" + f) : e;
    }
    l.default = p;
  },
  98,
);
