__d(
  "baseTypeaheadQueryMatchBuilder",
  ["TokenizeUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.query;
      return function (e) {
        return r("TokenizeUtil").isQueryMatch(t, e.label);
      };
    }
    l.default = e;
  },
  98,
);
