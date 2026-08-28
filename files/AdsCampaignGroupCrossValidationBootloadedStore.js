__d(
  "AdsCampaignGroupCrossValidationBootloadedStore",
  ["AdsBootloadedValidationStore", "JSResource", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsBootloadedValidationStore"))(
      r("JSResource")("AdsCampaignGroupCrossValidationStore").__setRef(
        "AdsCampaignGroupCrossValidationBootloadedStore",
      ),
    );
    r("requireWeak")("AdsCampaignGroupCrossValidationStore", function (t) {
      return e.loadStorePostDispatch(t);
    });
    var s = e;
    l.default = s;
  },
  98,
);
