__d(
  "AdsExperimentsPortfolioOptimizerReportContainerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "account_id" },
        t = { defaultValue: null, kind: "LocalArgument", name: "adgroup_ids" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_group_ids",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "objective_ids",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_ad_account",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_adgroups",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skip_study_portfolio_optimizer",
        },
        l = { defaultValue: null, kind: "LocalArgument", name: "studyID" },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "thumbnail_size",
        },
        u = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "account_id",
          },
        ],
        c = [
          { kind: "Variable", name: "ids", variableName: "campaign_group_ids" },
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "objective",
          storageKey: null,
        },
        m = [{ kind: "Variable", name: "id", variableName: "studyID" }],
        p = [
          {
            kind: "Variable",
            name: "objective_ids",
            variableName: "objective_ids",
          },
        ],
        _ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cpa",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i, l, s],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsExperimentsPortfolioOptimizerReportContainerQuery",
          selections: [
            {
              condition: "skip_ad_account",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: u,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: c,
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
                          selections: [d],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
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
                            variableName: "adgroup_ids",
                          },
                          {
                            kind: "Variable",
                            name: "thumbnailSize",
                            variableName: "thumbnail_size",
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
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: [
                          {
                            kind: "Variable",
                            name: "adgroupIDs",
                            variableName: "adgroup_ids",
                          },
                        ],
                        kind: "FragmentSpread",
                        name: "AdsExperimentsPortfolioOptimizerTestCompletedContainer_adgroups",
                      },
                    ],
                    type: "Query",
                    abstractKey: null,
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "AdsExperimentsPortfolioOptimizerTestCompletedContainer_adgroups",
                },
              ],
            },
            {
              alias: null,
              args: m,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      condition: "skip_study_portfolio_optimizer",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          fragment: {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: p,
                                kind: "FragmentSpread",
                                name: "AdsExperimentsPortfolioOptimizerTestCompletedContainerFragment_study",
                              },
                            ],
                            type: "AdStudy",
                            abstractKey: null,
                          },
                          kind: "AliasedInlineFragmentSpread",
                          name: "studyPortfolioOptimizer",
                        },
                      ],
                    },
                  ],
                  type: "AdStudy",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, o, t, s, a, l, i, r],
          kind: "Operation",
          name: "AdsExperimentsPortfolioOptimizerReportContainerQuery",
          selections: [
            {
              alias: null,
              args: m,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                _,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      condition: "skip_study_portfolio_optimizer",
                      kind: "Condition",
                      passingValue: !1,
                      selections: [
                        {
                          alias: null,
                          args: p,
                          concreteType: "XFBPortfolioOptimizerOutput",
                          kind: "LinkedField",
                          name: "portfolio_optimizer_result",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "ds",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "study_id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "objective_id",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_primary_objective",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBPortfolioOptimizerBreakdown",
                              kind: "LinkedField",
                              name: "breakdown",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creative_combination",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_objective_recommended",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBPortfolioOptimizerMetrics",
                              kind: "LinkedField",
                              name: "metrics",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "baseline_cpa",
                                  storageKey: null,
                                },
                                f,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "winner_confidence",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_bau",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_insufficient_data",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBPortfolioOptimizerAdgroupMetrics",
                                  kind: "LinkedField",
                                  name: "per_adgroup_metrics",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "adgroup_id",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "conversions",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "impressions",
                                      storageKey: null,
                                    },
                                    f,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "spend",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "AdStudy",
                  abstractKey: null,
                },
                g,
              ],
              storageKey: null,
            },
            {
              condition: "skip_ad_account",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: u,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: c,
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
                          selections: [d, g],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    g,
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
                      variableName: "adgroup_ids",
                    },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    _,
                    g,
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
                          selections: [g],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Variable",
                              name: "height",
                              variableName: "thumbnail_size",
                            },
                            {
                              kind: "Variable",
                              name: "width",
                              variableName: "thumbnail_size",
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
          id: "26414497144854074",
          metadata: {},
          name: "AdsExperimentsPortfolioOptimizerReportContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
