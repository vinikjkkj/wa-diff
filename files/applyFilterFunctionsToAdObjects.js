__d(
  "applyFilterFunctionsToAdObjects",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t.length === 0
        ? e
        : e.filter(function (e) {
            return t.every(function (t) {
              return t(e);
            });
          });
    }
    i.default = e;
  },
  66,
);
