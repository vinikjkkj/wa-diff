__d(
  "AdCampaignGroup-ad_object_field_error_spec-resolver",
  [
    "AdCampaignGroupAdObjectFieldErrorSpecResolver.graphql",
    "AdCampaignGroupSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdCampaignGroupAdObjectFieldErrorSpecResolver.graphql")),
        t,
      );
      return o("AdCampaignGroupSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_object_field_error_spec = s;
  },
  98,
);
