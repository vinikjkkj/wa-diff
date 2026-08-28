__d(
  "AdsExperimentsOpenToolbarTestButtonModalOnPublishReducerPlugin",
  [
    "AdsDataAtom",
    "AdsExperimentsPostPublishModalDisplayAction",
    "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t,
            l = o(
              "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
            ).adsExperimentsGetOptedInCampaignGroupPublishStateFromPublishResponse(
              a,
            ),
            s =
              (t = o(
                "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
              ).adsExperimentsGetOptedInCampaignGroupABTestConfigsFromPublishResponse(
                a,
              )) == null
                ? void 0
                : t.filter(Boolean);
          if (
            (l == null ? void 0 : l.isOptedInCampaignGroupPublished) === !0 ||
            (s != null && (s == null ? void 0 : s.length) > 0)
          ) {
            var u = l.campaignGroupID;
            return (
              u != null &&
                (s == null || (s == null ? void 0 : s.length) === 0) &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r("AdsExperimentsPostPublishModalDisplayAction").dispatch(
                      { campaignGroupID: u },
                      {
                        line: "50",
                        module:
                          "AdsExperimentsOpenToolbarTestButtonModalOnPublishReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
              {
                isModalVisible: !0,
                source: "ConvergencePublish",
                convergenceCardABTestConfigs: s,
              }
            );
          }
          return n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
