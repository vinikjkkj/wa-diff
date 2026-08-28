__d(
  "AdsDuplicationIntoPackageUtils",
  [
    "AdDraftFragmentSource",
    "AdsPECrepePackages",
    "adsPECrepePackageConfigForCampaignGroupIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdDraftFragmentSource").CLICK_AD_DUPLICATE;
    }
    function s(e) {
      var t,
        n =
          (t = r("adsPECrepePackageConfigForCampaignGroupIDSelector")()(e)) ==
          null
            ? void 0
            : t.id;
      return [
        o("AdsPECrepePackages").ASA_ODAX_PACKAGE_CONFIG_ID,
        o("AdsPECrepePackages").ASA_PRE_ODAX_PACKAGE_CONFIG_ID,
      ].includes(n);
    }
    function u(e, t, n) {
      e.selectedIDs(t, "campaign").selectedIDs(n, "ad_set").closeTray();
    }
    ((l.isCreationSourceAdDuplication = e),
      (l.isDestinationPackageCampaignGroup = s),
      (l.setSelectedIDsForCreationPackage = u));
  },
  98,
);
