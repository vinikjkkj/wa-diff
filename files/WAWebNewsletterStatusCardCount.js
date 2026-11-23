__d(
  "WAWebNewsletterStatusCardCount",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = "en",
      s = Math.pow(10, 3),
      u = [
        [Math.pow(10, 9), "B"],
        [Math.pow(10, 6), "M"],
        [s, "K"],
      ],
      c = 100;
    function d() {
      return r("WAWebL10N").getFullLocale().toLowerCase().split("-")[0] === e;
    }
    function m(e) {
      return d() ? _(e) : r("WAWebL10N").d(e);
    }
    function p(e) {
      return e < s ? e : Math.floor(e / s) * s;
    }
    function _(e) {
      var t = r("WAWebL10N").getFullLocale(),
        n = u.find(function (t) {
          var n = t[0];
          return e >= n;
        });
      if (n == null) return new Intl.NumberFormat(t).format(e);
      var o = n[0],
        a = n[1],
        i = e / o,
        l = new Intl.NumberFormat(t, {
          maximumFractionDigits: i >= c ? 0 : 1,
          roundingMode: "trunc",
        }).format(i);
      return "" + l + a;
    }
    ((l.isNewsletterStatusCardInEnglish = d),
      (l.formatNewsletterStatusCardCount = m),
      (l.roundNewsletterFollowerCount = p));
  },
  98,
);
