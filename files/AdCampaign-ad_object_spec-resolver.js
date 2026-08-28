__d(
  "AdCampaign-ad_object_spec-resolver",
  [
    "AdCampaignAdObjectSpecResolver.graphql",
    "AdCampaignSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r) {
      var a = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("AdCampaignAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdCampaignSpecUtil").coerceCampaignGraphQLSpecToGraphAPI(
        a,
        r.skip_data_transform,
      );
    }
    l.ad_object_spec = s;
  },
  98,
);
