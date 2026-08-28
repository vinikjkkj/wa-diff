__d(
  "AdsPECampaignLiveTableStoreRELAYCampaignFragment.graphql",
  ["AdCampaign-ad_object_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_data_transform",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "AdsPECampaignLiveTableStoreRELAYCampaignFragment",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "skip_data_transform",
              variableName: "skip_data_transform",
            },
          ],
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdCampaignAdObjectSpecResolver",
          },
          kind: "RelayResolver",
          name: "ad_object_spec",
          resolverModule: n("AdCampaign-ad_object_spec-resolver")
            .ad_object_spec,
          path: "ad_object_spec",
        },
      ],
      type: "AdCampaign",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
