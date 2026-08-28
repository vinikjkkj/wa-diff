__d(
  "AdsPECampaignGroupLiveTableStoreRELAYNEWCampaignGroupFragment.graphql",
  ["AdCampaignGroup-ad_object_field_error_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsPECampaignGroupLiveTableStoreRELAYNEWCampaignGroupFragment",
      selections: [
        {
          alias: "ad_object_spec",
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdCampaignGroupAdObjectFieldErrorSpecResolver",
          },
          kind: "RelayResolver",
          name: "ad_object_field_error_spec",
          resolverModule: n(
            "AdCampaignGroup-ad_object_field_error_spec-resolver",
          ).ad_object_field_error_spec,
          path: "ad_object_spec",
        },
      ],
      type: "AdCampaignGroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
