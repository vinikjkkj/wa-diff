__d(
  "AdsExperimentsTestScheduledContentContainerFragment_adAccount.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_group_ids",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "AdsExperimentsTestScheduledContentContainerFragment_adAccount",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ids",
              variableName: "campaign_group_ids",
            },
          ],
          concreteType: "AdAccountAdCampaignGroupsConnection",
          kind: "LinkedField",
          name: "ad_campaign_groups",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdCampaignGroup",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
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
                  kind: "ScalarField",
                  name: "objective",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
