__d(
  "WAWebL10NNumbersPluginRegistry",
  [],
  function (t, n, r, o, a, i) {
    var e = Math.pow(10, 3),
      l = Math.pow(10, 6);
    function s(e, t, n, r) {
      r === void 0 && (r = 1);
      var o = ".",
        a = e / Math.pow(10, t),
        i = a.toString(10).split("."),
        l = i[0],
        s = i[1];
      return s == null ||
        s.startsWith("0".repeat(r)) ||
        Number.parseInt(l, 10) >= 100
        ? parseInt(l, 10).toLocaleString(n)
        : parseFloat("" + l + o + s.slice(0, r)).toLocaleString(n);
    }
    function u(e, t) {
      return Intl.NumberFormat(t, { notation: "compact" }).format(e);
    }
    var c = {
        locales: ["fr", "fr-BE", "fr-CA", "fr-CH", "fr-FR"],
        format: function (t, n) {
          var e = u(t, n);
          return e.toLocaleUpperCase(n);
        },
      },
      d = {
        locales: ["he", "he-IL"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < l
              ? s(n, 3, r) + " \u05D0\u05DC\u05E3"
              : s(n, 6, r) + " \u05DE\u05D9\u05DC\u05D9\u05D5\u05DF";
        },
      },
      m = {
        locales: ["ro", "ro-RO"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n === e
              ? "1 mie"
              : n < l
                ? s(n, 3, r) + " mii"
                : s(n, 6, r) + " mil.";
        },
      },
      p = {
        locales: ["zh-SG", "zh-CN"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < Math.pow(10, 4)
              ? s(n, 3, r) + "\u5343"
              : u(n, r);
        },
      },
      _ = {
        locales: ["ja"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < Math.pow(10, 4)
              ? s(n, 3, r) + "\u5343"
              : u(n, r);
        },
      },
      f = {
        locales: ["de", "de-AT", "de-CH", "de-DE", "de-LI", "de-LU"],
        format: function (n, r) {
          return n > e && n < l ? s(n, 3, r) + " Tsd." : u(n, r);
        },
      },
      g = {
        locales: ["it", "it-CH", "it-IT"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < l
              ? s(n, 3, r) + " mila"
              : s(n, 6, r) + " mln";
        },
      },
      h = {
        locales: ["pt", "pt-BR", "pt-PT"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < l
              ? u(n, r)
              : s(n, 6, r) + " M";
        },
      },
      y = {
        locales: ["zh-TW", "zh-MO", "zh-HK"],
        format: function (n, r) {
          return n < e
            ? n.toLocaleString(r)
            : n < Math.pow(10, 4)
              ? s(n, 3, r) + "\u5343"
              : u(n, "zh-TW");
        },
      },
      C = [f, c, g, d, _, h, m, y, p],
      b = v();
    function v() {
      var e = new Map(),
        t = function (n) {
          n.locales.forEach(function (t) {
            return e.set(t, n);
          });
        };
      for (var n of C) t(n);
      return e;
    }
    ((i.M = l), (i.l10nNumberFormattersRegister = b));
  },
  66,
);
