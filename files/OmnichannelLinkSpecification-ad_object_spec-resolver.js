__d(
  "OmnichannelLinkSpecification-ad_object_spec-resolver",
  [
    "AdsOmnichannelLinkSpecUtil",
    "OmnichannelLinkSpecificationAdObjectSpecResolver.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("OmnichannelLinkSpecificationAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdsOmnichannelLinkSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.omnichannel_link_spec_ad_object_spec = s;
  },
  98,
);
