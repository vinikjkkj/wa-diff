__d(
  "AdsIsXXCreationPackageUtils",
  ["AdsAPICampaignGroupRecordUtils", "AdsPECrepePackages"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsAPICampaignGroupRecordUtils").getPackageConfigID(e);
      return t != null
        ? t === o("AdsPECrepePackages").LEAD_ADS_ODAX_CREATION_PACKAGE_CONFIG_ID
        : !1;
    }
    function s(e) {
      var t = o("AdsAPICampaignGroupRecordUtils").getPackageConfigID(e);
      return t != null
        ? t ===
            o("AdsPECrepePackages").CALL_ADS_ODAX_CREATION_PACKAGE_CONFIG_ID ||
            t === o("AdsPECrepePackages").CALL_ADS_TRAFFIC_CREATION_CONFIG_ID ||
            t ===
              o("AdsPECrepePackages")
                .CALL_ADS_ODAX_SALES_CREATION_PACKAGE_CONFIG_ID ||
            t ===
              o("AdsPECrepePackages")
                .CALL_ADS_PRE_OADX_SALES_CREATION_PACKAGE_CONFIG_ID
        : !1;
    }
    function u(e) {
      var t = o("AdsAPICampaignGroupRecordUtils").getPackageConfigID(e);
      return (
        t ===
          o("AdsPECrepePackages").AUTOMATED_LEADS_BUNDLE_PACKAGE_CONFIG_ID ||
        t ===
          o("AdsPECrepePackages")
            .AUTOMATED_ENGAGEMENT_BUNDLE_PACKAGE_CONFIG_ID ||
        t === o("AdsPECrepePackages").AUTOMATED_TRAFFIC_BUNDLE_PACKAGE_CONFIG_ID
      );
    }
    function c(e) {
      var t = o("AdsAPICampaignGroupRecordUtils").getPackageConfigID(e);
      return t === o("AdsPECrepePackages").NAAC_SALES_PACKAGE_CONFIG_ID;
    }
    ((l.isLeadAdsCreationPackage = e),
      (l.isCallAdsCreationPackage = s),
      (l.isAutomatedBundleCreationPackage = u),
      (l.isNAACCreationPackage = c));
  },
  98,
);
