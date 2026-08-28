__d(
  "adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector",
  ["AdsExperimentsAdObjectIDsInDraftTestProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("AdsExperimentsAdObjectIDsInDraftTestProvider").toFluxSelector()],
      function (t) {
        return t.variantCampaignGroupIDs.concat(t.variantCampaignIDs);
      },
      {
        name: i.id + ".adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector",
      },
    );
    l.adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector = e;
  },
  98,
);
