__d(
  "AdCreativeInteractiveComponentsSpecSpecification-ad_object_spec-resolver",
  [
    "AdCreativeInteractiveComponentsSpecSpecificationAdObjectSpecResolver.graphql",
    "AdInteractiveComponentSpecUtil",
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
              "AdCreativeInteractiveComponentsSpecSpecificationAdObjectSpecResolver.graphql",
            )),
        t,
      );
      return o("AdInteractiveComponentSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_creative_interactive_component_spec = s;
  },
  98,
);
