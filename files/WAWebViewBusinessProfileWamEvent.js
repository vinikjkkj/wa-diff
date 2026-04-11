__d(
  "WAWebViewBusinessProfileWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessToolsLinkedAccountType",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumTrustSignalBuckets",
    "WAWebWamEnumViewBusinessProfileAction",
    "WAWebWamEnumWebsiteSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ViewBusinessProfile: [
            1522,
            {
              bizFbSize: [
                9,
                o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS,
              ],
              bizIgSize: [
                10,
                o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS,
              ],
              businessProfileJid: [3, e.TYPES.STRING],
              catalogSessionId: [6, e.TYPES.STRING],
              hasCoverPhoto: [12, e.TYPES.BOOLEAN],
              isProfileLinked: [11, e.TYPES.BOOLEAN],
              isSelfView: [7, e.TYPES.BOOLEAN],
              linkedAccount: [
                5,
                o("WAWebWamEnumBusinessToolsLinkedAccountType")
                  .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE,
              ],
              profileEntryPoint: [
                8,
                o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT,
              ],
              scrollDepth: [4, e.TYPES.INTEGER],
              viewBusinessProfileAction: [
                1,
                o("WAWebWamEnumViewBusinessProfileAction")
                  .VIEW_BUSINESS_PROFILE_ACTION,
              ],
              websiteSource: [
                2,
                o("WAWebWamEnumWebsiteSourceType").WEBSITE_SOURCE_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ViewBusinessProfile: [] },
      );
    l.ViewBusinessProfileWamEvent = s;
  },
  98,
);
