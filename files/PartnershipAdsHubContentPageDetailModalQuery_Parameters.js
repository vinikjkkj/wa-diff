__d(
  "PartnershipAdsHubContentPageDetailModalQuery$Parameters",
  [
    "PartnershipAdsHubCatalogProductRowsGate.relayprovider",
    "PartnershipAdsHubContentPageDetailModalQuery_facebookRelayOperation",
    "PartnershipAdsHubManyToManyProductLinkingGK.relayprovider",
    "PartnershipAdsHubSmartListsGK.relayprovider",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: n(
          "PartnershipAdsHubContentPageDetailModalQuery_facebookRelayOperation",
        ),
        metadata: {},
        name: "PartnershipAdsHubContentPageDetailModalQuery",
        operationKind: "query",
        text: null,
        providedVariables: {
          __relay_internal__pv__PartnershipAdsHubSmartListsGKrelayprovider: n(
            "PartnershipAdsHubSmartListsGK.relayprovider",
          ),
          __relay_internal__pv__PartnershipAdsHubCatalogProductRowsGaterelayprovider:
            n("PartnershipAdsHubCatalogProductRowsGate.relayprovider"),
          __relay_internal__pv__PartnershipAdsHubManyToManyProductLinkingGKrelayprovider:
            n("PartnershipAdsHubManyToManyProductLinkingGK.relayprovider"),
        },
      },
    };
    a.exports = e;
  },
  null,
);
