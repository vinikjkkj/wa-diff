__d(
  "AdsExperimentsTestScheduledContentContainerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "account_id" },
        t = { defaultValue: null, kind: "LocalArgument", name: "adgroupIds" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_group_ids",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_ad_account",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_adgroups",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "thumbnailSize",
        },
        i = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "account_id",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsExperimentsTestScheduledContentContainerQuery",
          selections: [
            {
              condition: "skip_ad_account",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "campaign_group_ids",
                          variableName: "campaign_group_ids",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "AdsExperimentsTestScheduledContentContainerFragment_adAccount",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "skip_adgroups",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: [
                          {
                            kind: "Variable",
                            name: "adgroupIds",
                            variableName: "adgroupIds",
                          },
                          {
                            kind: "Variable",
                            name: "thumbnailSize",
                            variableName: "thumbnailSize",
                          },
                        ],
                        kind: "FragmentSpread",
                        name: "AdsExperimentsPortfolioOptimizerAdgroupThumbnailsContainer_adgroups",
                      },
                    ],
                    type: "Query",
                    abstractKey: null,
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "AdsExperimentsPortfolioOptimizerAdgroupThumbnailsContainer_adgroups",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, r, t, a, o],
          kind: "Operation",
          name: "AdsExperimentsTestScheduledContentContainerQuery",
          selections: [
            {
              condition: "skip_ad_account",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
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
                            l,
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
                    l,
                  ],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "skip_adgroups",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "ids",
                      variableName: "adgroupIds",
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    l,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Adgroup",
                          kind: "LinkedField",
                          name: "primary_adgroup",
                          plural: !1,
                          selections: [l],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "height",
                              variableName: "thumbnailSize",
                            },
                            {
                              kind: "Variable",
                              name: "width",
                              variableName: "thumbnailSize",
                            },
                          ],
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "preview_image",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "Adgroup",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "27156873753912587",
          metadata: {},
          name: "AdsExperimentsTestScheduledContentContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
