__d(
  "MAIBAScorecardJsonUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e
        .replace(/[\u201c\u201d]/g, '"')
        .replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":');
    }
    i.default = e;
  },
  66,
);
