__d(
  "AdsBulkEditCampaignGroupBudgetFieldContainer_Query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ads_andromeda_bulk_edit_campaign_group_budget",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaignGroupRelayIDs",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "contextKey" },
        o = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        a = [
          {
            kind: "Variable",
            name: "ids",
            variableName: "campaignGroupRelayIDs",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [i],
        s = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: l,
                type: "CombinedCampaignGroup",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "CombinedCampaignGroup",
          abstractKey: null,
        },
        u = [
          { kind: "Variable", name: "contextKey", variableName: "contextKey" },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsBulkEditCampaignGroupBudgetFieldContainer_Query",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  condition: "ads_andromeda_bulk_edit_campaign_group_budget",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            kind: "Defer",
                            selections: [
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "AdsBulkEditCampaignGroupBudgetFieldContainerAndromedaShadowValidation_Fragment",
                              },
                            ],
                          },
                        ],
                        type: "AdAccount",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "AdsBulkEditCampaignGroupBudgetFieldContainerAndromedaShadowValidation_Fragment",
                    },
                  ],
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
          argumentDefinitions: [t, r, n, e],
          kind: "Operation",
          name: "AdsBulkEditCampaignGroupBudgetFieldContainer_Query",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  condition: "ads_andromeda_bulk_edit_campaign_group_budget",
                  kind: "Condition",
                  passingValue: !0,
                  selections: [
                    {
                      if: null,
                      kind: "Defer",
                      label:
                        "AdsBulkEditCampaignGroupBudgetFieldContainer_Query$defer$AdsBulkEditCampaignGroupBudgetFieldContainerAndromedaShadowValidation_Fragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "legacy_account_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "currency",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "average_campaign_group_daily_budget",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "average_campaign_group_lifetime_budget",
                          storageKey: null,
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "combined_campaign_groups",
                            args: a,
                            fragment: {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "__typename",
                                  storageKey: null,
                                },
                              ],
                              type: "AdAccount",
                              abstractKey: null,
                            },
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                          },
                          linkedField: {
                            alias: null,
                            args: a,
                            concreteType: "CombinedCampaignGroup",
                            kind: "LinkedField",
                            name: "combined_campaign_groups",
                            plural: !0,
                            selections: [
                              {
                                name: "publish_status",
                                args: null,
                                fragment: s,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "daily_budget",
                                args: null,
                                fragment: s,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "lifetime_budget",
                                args: null,
                                fragment: s,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "time_suggestion",
                                args: null,
                                fragment: s,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                name: "ad_object_id",
                                args: null,
                                fragment: s,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                backingField: {
                                  name: "relay_everywhere",
                                  args: null,
                                  fragment: s,
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !1,
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "RelayEverywhere",
                                  kind: "LinkedField",
                                  name: "relay_everywhere",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      backingField: {
                                        name: "ueditor_campaign_group",
                                        args: u,
                                        fragment: {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              name: "__relay_model_instance",
                                              args: null,
                                              fragment: {
                                                kind: "InlineFragment",
                                                selections: l,
                                                type: "RelayEverywhere",
                                                abstractKey: null,
                                              },
                                              kind: "RelayResolver",
                                              storageKey: null,
                                              isOutputType: !1,
                                            },
                                          ],
                                          type: "RelayEverywhere",
                                          abstractKey: null,
                                        },
                                        kind: "RelayResolver",
                                        storageKey: null,
                                        isOutputType: !1,
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: u,
                                        concreteType:
                                          "UEditorCampaignGroupNamespace",
                                        kind: "LinkedField",
                                        name: "ueditor_campaign_group",
                                        plural: !1,
                                        selections: [
                                          {
                                            name: "selected_campaign_groups_selector_slow",
                                            args: null,
                                            fragment: {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  name: "__relay_model_instance",
                                                  args: null,
                                                  fragment: {
                                                    kind: "InlineFragment",
                                                    selections: l,
                                                    type: "UEditorCampaignGroupNamespace",
                                                    abstractKey: null,
                                                  },
                                                  kind: "RelayResolver",
                                                  storageKey: null,
                                                  isOutputType: !1,
                                                },
                                              ],
                                              type: "UEditorCampaignGroupNamespace",
                                              abstractKey: null,
                                            },
                                            kind: "RelayResolver",
                                            storageKey: null,
                                            isOutputType: !0,
                                          },
                                          i,
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                    i,
                                  ],
                                  storageKey: null,
                                },
                              },
                              i,
                            ],
                            storageKey: null,
                          },
                        },
                      ],
                    },
                  ],
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "39013094771667143",
          metadata: {},
          name: "AdsBulkEditCampaignGroupBudgetFieldContainer_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
