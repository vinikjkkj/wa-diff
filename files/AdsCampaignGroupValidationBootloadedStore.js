__d(
  "AdsCampaignGroupValidationBootloadedStore",
  ["AdsBootloadedValidationStore", "JSResource", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsBootloadedValidationStore"))(
      r("JSResource")("AdsCampaignGroupValidationStore").__setRef(
        "AdsCampaignGroupValidationBootloadedStore",
      ),
    );
    r("requireWeak")("AdsCampaignGroupValidationStore", function (t) {
      return e.loadStorePostDispatch(t);
    });
    var s = e;
    l.default = s;
  },
  98,
);
