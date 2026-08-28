__d(
  "XFBDynamicDegreeOfFreedomCreativeAttachment-ad_object_spec-resolver",
  [
    "AdsDegreesOfFreedomSpecUtil",
    "RelayHooks",
    "XFBDynamicDegreeOfFreedomCreativeAttachmentAdObjectSpecResolver.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "XFBDynamicDegreeOfFreedomCreativeAttachmentAdObjectSpecResolver.graphql",
            )),
        t,
      );
      return o("AdsDegreesOfFreedomSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ads_degrees_of_freedom_spec = s;
  },
  98,
);
