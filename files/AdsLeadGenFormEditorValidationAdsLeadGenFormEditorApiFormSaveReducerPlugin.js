__d(
  "AdsLeadGenFormEditorValidationAdsLeadGenFormEditorApiFormSaveReducerPlugin",
  [
    "AdsLeadGenFormEditorValidationFields",
    "adsLeadGenFormEditorValidationReducerWrapper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsLeadGenFormEditorValidationReducerWrapper")(
          function (e, t) {
            return e.set(r("AdsLeadGenFormEditorValidationFields").FORM, null);
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
