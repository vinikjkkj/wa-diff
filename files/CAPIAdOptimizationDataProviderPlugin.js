__d(
  "CAPIAdOptimizationDataProviderPlugin",
  [
    "AsyncTypedRequest",
    "XAdsEventsManagerCampaignOptimizationDataControllerRouteBuilder",
    "loadObjectMapProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      initialState: r("loadObjectMapProvider").keyed(s, function (e) {
        return JSON.stringify(e);
      }),
    };
    async function s(e) {
      var t = e.accountId,
        n = e.adObjectId,
        o = e.adObjectLevel,
        a;
      n == null || o == null
        ? (a = r(
            "XAdsEventsManagerCampaignOptimizationDataControllerRouteBuilder",
          ).buildUri({ account_id: e.accountId }))
        : (a = r(
            "XAdsEventsManagerCampaignOptimizationDataControllerRouteBuilder",
          ).buildUri({ account_id: t, ad_object_id: n, ad_object_level: o }));
      var i = await new (r("AsyncTypedRequest"))(a.toString()).promisePayload();
      return i;
    }
    var u = e;
    l.default = u;
  },
  98,
);
