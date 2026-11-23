__d(
  "MAIBAAdDraftEditorContextProvider_root.graphql",
  ["MAIBAAdDraftEditorContextProviderRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { kind: "Variable", name: "draftID", variableName: "draftID" },
        t = {
          kind: "Variable",
          name: "isAdsManager",
          variableName: "isAdsManager",
        },
        r = [t],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "draft_fragment_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "draft_validation_status",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "AdDraftValidationError",
          kind: "LinkedField",
          name: "draft_validation_errors",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "error_code",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "error_description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "error_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "blame_field_spec",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        s = [
          {
            kind: "Variable",
            name: "paymentSummaryEntryPoint",
            variableName: "paymentSummaryEntryPoint",
          },
        ],
        u = { kind: "Variable", name: "isIG", variableName: "isIG" },
        c = {
          kind: "Variable",
          name: "useOutcomeForecastV2",
          variableName: "useOutcomeForecastV2",
        },
        d = [u, c],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "node_id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "adgroupIDs" },
          { defaultValue: null, kind: "LocalArgument", name: "boostFlowID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupID",
          },
          { defaultValue: null, kind: "LocalArgument", name: "campaignIDs" },
          { defaultValue: null, kind: "LocalArgument", name: "draftID" },
          { defaultValue: null, kind: "LocalArgument", name: "flowID" },
          { defaultValue: null, kind: "LocalArgument", name: "isAdsManager" },
          { defaultValue: null, kind: "LocalArgument", name: "isBoost" },
          { defaultValue: null, kind: "LocalArgument", name: "isIG" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentSummaryEntryPoint",
          },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "useOutcomeForecastV2",
          },
        ],
        kind: "Fragment",
        metadata: {
          refetch: {
            connection: null,
            fragmentPathInResult: [],
            operation: n(
              "MAIBAAdDraftEditorContextProviderRefetchQuery.graphql",
            ),
          },
          throwOnFieldError: !0,
        },
        name: "MAIBAAdDraftEditorContextProvider_root",
        selections: [
          {
            condition: "isIG",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                fragment: {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "accountID",
                          variableName: "accountID",
                        },
                        e,
                        {
                          kind: "Variable",
                          name: "flowID",
                          variableName: "boostFlowID",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "MAIBAIGBudgetCard_query",
                    },
                  ],
                  type: "Query",
                  abstractKey: null,
                },
                kind: "AliasedInlineFragmentSpread",
                name: "MAIBAIGBudgetCard_query",
              },
            ],
          },
          {
            alias: "account",
            args: [{ kind: "Variable", name: "id", variableName: "accountID" }],
            concreteType: "AdAccount",
            kind: "LinkedField",
            name: "fetch__AdAccount",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency",
                storageKey: null,
              },
              {
                args: r,
                kind: "FragmentSpread",
                name: "MAIBAAdDraftEditorContextProvider_catalogOptions",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAAdAccountCard_account",
              },
              {
                args: [
                  {
                    kind: "Variable",
                    name: "isBoost",
                    variableName: "isBoost",
                  },
                ],
                kind: "FragmentSpread",
                name: "MAIBAAdCreativeCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAAdIdentityCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAAudienceCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAIGAudienceCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBASpecialAdCategoryCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBABudgetCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBACampaignSummaryCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBACampaignSettingsCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAConversionCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBALWICountryRegulationEUDSAEditor_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAGoalsOptimizationCard_account",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAPixelEventCard_account",
              },
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAPlacementsCard_account",
                  },
                ],
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "useAdAccountCAAPRegulationRegions_fragment",
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBAdAccountUserPermissionsSpec",
                kind: "LinkedField",
                name: "user_permissions",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "role",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "CatchField",
            field: {
              alias: "campaign_group",
              args: [
                {
                  kind: "Variable",
                  name: "id",
                  variableName: "campaignGroupID",
                },
              ],
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [
                o,
                a,
                i,
                l,
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: s,
                      kind: "FragmentSpread",
                      name: "MAIBACanvasPublishBoost_paymentGate",
                    },
                  ],
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "boost_async_publish_status",
                  storageKey: null,
                },
                {
                  args: r,
                  kind: "FragmentSpread",
                  name: "MAIBAAdCreativeCard_campaignGroup",
                },
                {
                  args: [u],
                  kind: "FragmentSpread",
                  name: "MAIBAIGGoalCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAAdIdentityCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAAudienceCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAAdAccountCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAAdPreviewCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBABoostPostHeader_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBABoostPostPreviewSummaryCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBABudgetCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBACampaignNameCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBACampaignSettingsCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBACampaignSummaryCard_campaignGroup",
                },
                {
                  args: r,
                  kind: "FragmentSpread",
                  name: "MAIBAAdDraftEditorContextProvider_adSetupCampaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBACatalogCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAConversionCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBADestinationCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBALWIGoalCard_campaignGroup",
                },
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: d,
                      kind: "FragmentSpread",
                      name: "useMAIBAOutcomeForecastMetrics_campaignGroup",
                    },
                  ],
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAGoalCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAGoalsOptimizationCard_campaignGroup",
                },
                {
                  kind: "Defer",
                  selections: [
                    {
                      args: s,
                      kind: "FragmentSpread",
                      name: "MAIBAPaymentSummaryCard_campaignGroup",
                    },
                  ],
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAPixelEventCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAPlacementsCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAProductSetCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAPromotedAppCard_campaignGroup",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBASpecialAdCategoryCard_campaignGroup",
                },
              ],
              storageKey: null,
            },
            to: "NULL",
          },
          {
            alias: "campaigns",
            args: [
              { kind: "Variable", name: "ids", variableName: "campaignIDs" },
            ],
            concreteType: "AdCampaignWithDraftDataMultifetchEdge",
            kind: "LinkedField",
            name: "multifetch__AdCampaignWithDraftData",
            plural: !0,
            selections: [
              m,
              {
                alias: null,
                args: null,
                concreteType: "AdCampaignWithDraftData",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  o,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "destination_type",
                    storageKey: null,
                  },
                  a,
                  i,
                  l,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdCreativeCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdIdentityCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdDetailSummaryCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdPreviewCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdSetNameCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdTransparencyCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAudienceCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIGAudienceCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIGAITransparencyCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBABudgetCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBACampaignSettingsCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBACampaignDetailsCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBACampaignRowCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAChatBuilderCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAConversionCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBALWIGoalCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIGGoalCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBADestinationCard_campaign",
                  },
                  {
                    kind: "Defer",
                    selections: [
                      {
                        args: d,
                        kind: "FragmentSpread",
                        name: "useMAIBAOutcomeForecastMetrics_campaign",
                      },
                    ],
                  },
                  {
                    kind: "Defer",
                    selections: [
                      {
                        args: [c],
                        kind: "FragmentSpread",
                        name: "MAIBAOutcomeForecasterCardV2_campaign",
                      },
                    ],
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAGoalsOptimizationCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIndiaFinServPolicyCard_campaign",
                  },
                  {
                    args: [e],
                    kind: "FragmentSpread",
                    name: "MAIBALWICountryRegulationPolicyCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBALeadFormCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAPixelEventCard_campaign",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAPlacementsCard_campaign",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: "adgroups",
            args: [
              { kind: "Variable", name: "ids", variableName: "adgroupIDs" },
            ],
            concreteType: "AdAdgroupWithDraftDataMultifetchEdge",
            kind: "LinkedField",
            name: "multifetch__AdAdgroupWithDraftData",
            plural: !0,
            selections: [
              m,
              {
                alias: null,
                args: null,
                concreteType: "AdAdgroupWithDraftData",
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [
                  o,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "creative_page_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "AdDraftBoostedPost",
                    kind: "LinkedField",
                    name: "boosted_post",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fixed_call_to_action_type",
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
                        kind: "ScalarField",
                        name: "post_type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  a,
                  i,
                  {
                    args: r,
                    kind: "FragmentSpread",
                    name: "MAIBAAdCreativeCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdIdentityCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdNameCard_adgroup",
                  },
                  {
                    args: [
                      {
                        kind: "Variable",
                        name: "flowID",
                        variableName: "flowID",
                      },
                      t,
                    ],
                    kind: "FragmentSpread",
                    name: "MAIBAAdPreviewCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAAdRowCard_adgroup",
                  },
                  {
                    args: r,
                    kind: "FragmentSpread",
                    name: "MAIBAAdSetupCard_adgroup",
                  },
                  {
                    args: r,
                    kind: "FragmentSpread",
                    name: "MAIBACampaignSummaryCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAConversionCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBALWIGoalCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIGGoalCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAIGAITransparencyCard_adgroup",
                  },
                  {
                    kind: "Defer",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "MAIBALWIGoalCard_adgroupBoostEligibility",
                      },
                    ],
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBACreativeCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBADestinationCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBALeadFormCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAMessageTemplateCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBAPixelEventCard_adgroup",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "MAIBASpecialAdCategoryCard_adgroup",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
