__d(
  "adsEnforcePureGetStores",
  ["FBLogger"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e.isGetStoresPure ||
          n("FBLogger")("ads_selectors_pure_get_stores")
            .blameToPreviousFrame()
            .mustfix(
              'Selector "%s" is required to have a pure getStores function, but does not. If not fixed, this will break Ads Manager. If you are going to remove this adsEnforcePureGetStores wrapper, you must find all selectors that depends on this selector and also have {isGetStoresPure: true}, and set isGetStoresPure to false. Please contact evanworley with any questions',
              e.name,
            ),
        e
      );
    }
    i.default = e;
  },
  66,
);
