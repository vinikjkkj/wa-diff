__d(
  "AdCallToActionSpecification-call_to_action_spec-resolver",
  [
    "AdCallToActionSpecUtil",
    "AdCallToActionSpecificationCallToActionSpecResolver.graphql",
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
              "AdCallToActionSpecificationCallToActionSpecResolver.graphql",
            )),
        t,
      );
      return o("AdCallToActionSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.call_to_action_spec = s;
  },
  98,
);
