__d(
  "WAWebHatchMetaCdnImageUrl",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [".facebook.com", ".fbcdn.net", ".whatsapp.net"],
      s = /[^!-~]|[@\\]/;
    function u(t) {
      if (t == null || s.test(t) || r("WAWebURLUtils").isHttps(t) !== !0)
        return null;
      var n = r("WAWebURLUtils").hostname(t).toLowerCase();
      return e.some(function (e) {
        return n.endsWith(e);
      })
        ? t
        : null;
    }
    l.hatchMetaCdnImageUrl = u;
  },
  98,
);
