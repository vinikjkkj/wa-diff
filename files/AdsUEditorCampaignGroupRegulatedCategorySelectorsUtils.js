__d(
  "AdsUEditorCampaignGroupRegulatedCategorySelectorsUtils",
  ["adsRegulatedCategoryIsRegulatedCategory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.getValues().some(function (e) {
        return (
          e &&
          e.some(function (e) {
            return r("adsRegulatedCategoryIsRegulatedCategory")(e);
          })
        );
      });
    }
    l.isSelectedRegulatedCategory = e;
  },
  98,
);
