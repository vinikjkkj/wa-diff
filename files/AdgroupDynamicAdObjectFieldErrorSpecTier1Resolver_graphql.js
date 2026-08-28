__d(
  "AdgroupDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
  ["AdDeliveryStatusNode-ad_object_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: {
        throwOnFieldError: !0,
        vultureHash: "psolYD83w3I_eQE8XaVEYgp0v0Y=",
      },
      name: "AdgroupDynamicAdObjectFieldErrorSpecTier1Resolver",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdDeliveryStatusNode",
          kind: "LinkedField",
          name: "delivery_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "AdDeliveryStatusNodeAdObjectSpecResolver",
              },
              kind: "RelayResolver",
              name: "ad_delivery_status_spec",
              resolverModule: n("AdDeliveryStatusNode-ad_object_spec-resolver")
                .ad_delivery_status_spec,
              path: "delivery_status.ad_delivery_status_spec",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
