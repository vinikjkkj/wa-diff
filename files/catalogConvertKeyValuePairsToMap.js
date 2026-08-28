__d(
  "catalogConvertKeyValuePairsToMap",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable").Map(
        e.map(function (e) {
          var t = e.key,
            n = e.value;
          return [t, n];
        }),
      );
    }
    l.default = e;
  },
  98,
);
