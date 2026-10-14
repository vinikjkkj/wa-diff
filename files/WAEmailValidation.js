__d(
  "WAEmailValidation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new RegExp(
        /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        "i",
      ),
      l = 64,
      s = 255,
      u = 63;
    function c(t) {
      if (t == null || t === "") return !0;
      if (!e.test(t)) return !1;
      var n = t.indexOf("@"),
        r = t.slice(n + 1);
      return (
        n <= l &&
        r.length <= s &&
        r.split(".").every(function (e) {
          return e.length <= u;
        })
      );
    }
    i.validateEmail = c;
  },
  66,
);
