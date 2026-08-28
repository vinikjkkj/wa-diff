__d(
  "isRegulatedCategoriesEmpty",
  ["AdsRegulatedCategory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e == null ||
        e.length === 0 ||
        !e.some(function (e) {
          return e !== r("AdsRegulatedCategory").NONE;
        })
      );
    }
    l.isRegulatedCategoriesEmpty = e;
  },
  98,
);
