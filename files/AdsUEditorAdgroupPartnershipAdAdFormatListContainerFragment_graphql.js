__d(
  "AdsUEditorAdgroupPartnershipAdAdFormatListContainerFragment.graphql",
  [
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { plural: !0 },
      name: "AdsUEditorAdgroupPartnershipAdAdFormatListContainerFragment",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "CombinedAdgroup____relay_model_instance",
          },
          kind: "RelayResolver",
          name: "ad_object_id",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("CombinedAdgroup____relay_model_instance.graphql"),
            n("CombinedAdgroup-resolvers").ad_object_id,
            "__relay_model_instance",
            !0,
          ),
          path: "ad_object_id",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useShouldDisableSingleHeaderFormat_fragment",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsUEditorAdgroupPartnershipAdsDynamicPartnerContent_fragment",
        },
      ],
      type: "CombinedAdgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
