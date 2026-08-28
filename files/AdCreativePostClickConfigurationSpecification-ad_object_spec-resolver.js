__d(
  "AdCreativePostClickConfigurationSpecification-ad_object_spec-resolver",
  [
    "AdCreativePostClickConfigurationSpecificationAdObjectSpecResolver.graphql",
    "AdPostClickConfigurationSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdCreativePostClickConfigurationSpecificationAdObjectSpecResolver.graphql",
            )),
        t,
      );
      return o("AdPostClickConfigurationSpecUtil").coerceGraphQLSpecToGraphAPI(
        r,
      );
    }
    l.post_click_configuration_specification = s;
  },
  98,
);
