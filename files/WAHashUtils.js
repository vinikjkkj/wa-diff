__d(
  "WAHashUtils",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WABase64").encodeB64UrlSafe(e, t);
    }
    function s(e) {
      return e;
    }
    function u(e) {
      return e;
    }
    function c(e) {
      return "" + e.slice(0, 3);
    }
    ((l.toPlaintextHash = e),
      (l.stringToPlaintextHash = s),
      (l.toHashedPlaintextHash = u),
      (l.sanitisePlaintextHash = c));
  },
  98,
);
