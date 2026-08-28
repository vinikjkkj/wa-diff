__d(
  "adsAccountValidationBootloadedErrorsSelectors",
  ["AdsAccountValidationBootloadedStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsAccountValidationBootloadedStore")],
        function (t) {
          return r("AdsAccountValidationBootloadedStore").getErrors(t);
        },
        { name: i.id + ".accountErrorsSelector" },
      ),
      s = { accountErrorsSelector: e };
    l.adsAccountValidationBootloadedErrorsSelectors = s;
  },
  98,
);
