__d(
  "adsMAIBAIdentityPBIA",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "PBIA:";
    function l(t) {
      return e + t;
    }
    function s(t) {
      return t != null && t.startsWith(e);
    }
    function u(t) {
      return !s(t) || t == null ? null : t.slice(e.length);
    }
    ((i.buildPBIAValue = l), (i.isPBIAValue = s), (i.parsePBIAValue = u));
  },
  66,
);
