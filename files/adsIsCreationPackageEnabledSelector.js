__d(
  "adsIsCreationPackageEnabledSelector",
  [
    "AdsPECrepePackages",
    "AdsPERouterHelper",
    "adsCreateSelector",
    "adsUEditorSelectedPackageConfigIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorSelectedPackageConfigIDSelector")],
      function (t) {
        var e,
          n,
          a,
          i = [
            (a = o("AdsPECrepePackages"))
              .LWI_GRADUATION_ENGAGEMENT_PACKAGE_CONFIG_ID,
            a.AUTOMATED_ENGAGEMENT_BUNDLE_PACKAGE_CONFIG_ID,
            a.MESSAGE_ACQUISITION_CTD_AUDIENCE_EXPANSION_PACKAGE_CONFIG_ID,
            a.MESSAGE_ACQUISITION_CTM_AUDIENCE_EXPANSION_PACKAGE_CONFIG_ID,
            a.MESSAGE_ACQUISITION_POST_ODAX_CTWA_AUDIENCE_EXPANSION_PACKAGE_CONFIG_ID,
            a.CTWA_CREATION_PACKAGE_CONFIG_ID,
          ],
          l =
            (e =
              (n = r("AdsPERouterHelper").getRouter()) == null ||
              n.getQueryParams == null ||
              (n = n.getQueryParams()) == null
                ? void 0
                : n.package_config_id) != null
              ? e
              : null,
          s = t != null ? t : l;
        return s != null && i.includes(s);
      },
      { name: i.id + ".adsIsCreationPackageEnabledSelector" },
    );
    l.adsIsCreationPackageEnabledSelector = e;
  },
  98,
);
