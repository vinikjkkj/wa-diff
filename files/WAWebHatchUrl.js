__d(
  "WAWebHatchUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^https:\/\/[^/\\\s?#]/i,
      l = /^https?:\/\/[^/\\\s?#]/i,
      s = /[\s\\]/;
    function u(t) {
      return d(t, e);
    }
    function c(e) {
      return d(e, l);
    }
    function d(e, t) {
      var n = e == null ? void 0 : e.trim();
      if (n == null || !t.test(n) || s.test(n)) return null;
      var r;
      try {
        r = new URL(n);
      } catch (e) {
        return null;
      }
      return r.hostname !== "" && r.username === "" && r.password === ""
        ? n
        : null;
    }
    ((i.toHttpsUrl = u), (i.toWebUrl = c));
  },
  66,
);
