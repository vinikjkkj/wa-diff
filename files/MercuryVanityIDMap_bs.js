__d(
  "MercuryVanityIDMap.bs",
  ["MercuryAssert", "bs_js_null_undefined"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {};
    function u(t) {
      return r("bs_js_null_undefined").fromOption(e[t.toLowerCase()]);
    }
    function c(e) {
      return r("bs_js_null_undefined").fromOption(s[e]);
    }
    function d(e) {
      return s[e] !== void 0;
    }
    function m(t) {
      return e[t.toLowerCase()] !== void 0;
    }
    function p(t, n) {
      o("MercuryAssert").isParticipantID(n);
      var r = t.toLowerCase();
      ((e[r] = n), (s[n] = r));
    }
    ((l.getID = u),
      (l.getVanity = c),
      (l.hasID = d),
      (l.hasVanity = m),
      (l.set = p));
  },
  98,
);
