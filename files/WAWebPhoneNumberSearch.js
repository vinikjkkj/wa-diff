__d(
  "WAWebPhoneNumberSearch",
  [],
  function (t, n, r, o, a, i) {
    var e = /^[0-9+()\- ]+$/,
      l = /[\u200B-\u200F\u061C\u202A-\u202E\u2060\u2066-\u2069\uFEFF\u00AD]/g,
      s = /[\u00A0\u202F]/g;
    function u(e) {
      return e.replace(l, "").replace(s, " ");
    }
    function c(t) {
      return e.test(u(t));
    }
    function d(e) {
      var t = u(e);
      return c(t) ? t.replace(/[^0-9]/g, "") : null;
    }
    ((i.stripInvisibleChars = u),
      (i.isPhoneNumberLike = c),
      (i.numberSearch = d));
  },
  66,
);
