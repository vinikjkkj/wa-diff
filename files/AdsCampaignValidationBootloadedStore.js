__d(
  "AdsCampaignValidationBootloadedStore",
  ["AdsBootloadedValidationStore", "JSResource", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsBootloadedValidationStore"))(
      r("JSResource")("AdsCampaignValidationStore").__setRef(
        "AdsCampaignValidationBootloadedStore",
      ),
    );
    r("requireWeak")("AdsCampaignValidationStore", function (t) {
      return e.loadStorePostDispatch(t);
    });
    var s = e;
    l.default = s;
  },
  98,
);
