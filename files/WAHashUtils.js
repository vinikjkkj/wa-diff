__d(
  "WAHashUtils",
  ["WABase64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("WABase64").encodeB64UrlSafe(e, t);
    }
    function s(e, t) {
      return o("WABase64").encodeB64UrlSafe(e, t);
    }
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e) {
      return "" + e.slice(0, 3);
    }
    ((l.toPlaintextHash = e),
      (l.toCiphertextHash = s),
      (l.stringToPlaintextHash = u),
      (l.toHashedPlaintextHash = c),
      (l.sanitisePlaintextHash = d));
  },
  98,
);
