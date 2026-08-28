__d(
  "FBIDCheck",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^[1-9]\d*$/;
    function l(t) {
      var n = t;
      return n == null ||
        (typeof n == "string" && !e.test(n)) ||
        ((n = parseInt(n, 10)), !n)
        ? !1
        : (n > 0 && n < 22e8) ||
            (n >= 1e14 && n <= 0x5b0a58f100ef) ||
            (n >= 89e12 && n <= 89999999999999) ||
            (n >= 6000001e7 && n <= 60000019999999);
    }
    i.isUser_deprecated = l;
  },
  66,
);
