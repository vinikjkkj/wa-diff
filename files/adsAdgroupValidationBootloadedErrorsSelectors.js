__d(
  "adsAdgroupValidationBootloadedErrorsSelectors",
  ["AdsAdgroupValidationBootloadedStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsAdgroupValidationBootloadedStore")],
        function (t) {
          return r("AdsAdgroupValidationBootloadedStore").getErrors(t);
        },
        { name: i.id + ".clientValidationErrorsSelector" },
      ),
      s = r("adsCreateStoreSelector")(
        [r("AdsAdgroupValidationBootloadedStore")],
        function (t) {
          return r("AdsAdgroupValidationBootloadedStore").getCombinedErrors(t);
        },
        { name: i.id + ".combinedErrorsSelector" },
      ),
      u = r("adsCreateStoreSelector")(
        [r("AdsAdgroupValidationBootloadedStore")],
        function (t) {
          return r("AdsAdgroupValidationBootloadedStore").getAllCombinedErrors(
            t,
          );
        },
        { name: i.id + ".combinedErrorsForAdgroupIDsSelector" },
      ),
      c = {
        combinedErrorsForAdgroupIDsSelector: u,
        combinedErrorsSelector: s,
        clientValidationErrorsSelector: e,
      };
    l.adsAdgroupValidationBootloadedErrorsSelectors = c;
  },
  98,
);
