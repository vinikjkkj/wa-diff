__d(
  "PartnershipAdsHubContentPageDetailModal.entrypoint",
  [
    "JSResourceForInteraction",
    "PartnershipAdsHubContentPageDetailModalQuery$Parameters",
    "PartnershipAdsHubContentPageDetailViewProfilesRowQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.businessID,
          r = t.isContentPage,
          o = r === void 0 ? !1 : r,
          a = t.routeParams,
          i = a.selected_business_ig_user_id,
          l = a.selected_business_page_id,
          s = a.selected_content_id,
          u = a.selected_list_id;
        return {
          queries: {
            PartnershipAdsHubContentPageDetailModalQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: n(
                "PartnershipAdsHubContentPageDetailModalQuery$Parameters",
              ),
              variables: {
                businessAssetFBPageID: l,
                businessAssetIGUserID: i,
                businessID: e,
                contentID: s,
                contentListID: u,
                isContentPage: o,
              },
            },
            PartnershipAdsHubContentPageDetailViewProfilesRowQueryReference: {
              options: { fetchPolicy: "store-or-network" },
              parameters: n(
                "PartnershipAdsHubContentPageDetailViewProfilesRowQuery$Parameters",
              ),
              variables: {
                businessAssetFBPageID: l,
                businessAssetIGUserID: i,
                businessID: e,
                contentID: s,
                isContentPage: o,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "PartnershipAdsHubContentPageDetailModal.react",
      ).__setRef("PartnershipAdsHubContentPageDetailModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
