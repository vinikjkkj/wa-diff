__d(
  "MAIBAL4AdAccountSelector_L4AdAccountSelectorFragment.graphql",
  ["MAIBAL4AdAccountSelectorQueryPagination.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["viewer", "ad_accounts"],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "disable_reason",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          { defaultValue: 20, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "searchQuery" },
          { kind: "RootArgument", name: "startTime" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: [],
            operation: n("MAIBAL4AdAccountSelectorQueryPagination.graphql"),
          },
        },
        name: "MAIBAL4AdAccountSelector_L4AdAccountSelectorFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [
              {
                alias: "ad_accounts",
                args: [
                  {
                    kind: "Variable",
                    name: "search",
                    variableName: "searchQuery",
                  },
                ],
                concreteType: "AdAccountsConnection",
                kind: "LinkedField",
                name: "__MAIBAL4AdAccountSelector___ad_accounts_connection",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AdAccountsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "AdAccount",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          t,
                          {
                            kind: "RequiredField",
                            field: {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "legacy_account_id",
                              storageKey: null,
                            },
                            action: "THROW",
                          },
                          r,
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
                            concreteType: "AdBusiness",
                            kind: "LinkedField",
                            name: "ads_business",
                            plural: !1,
                            selections: [t, r],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "AdvertisingRestrictionInfo",
                            kind: "LinkedField",
                            name: "advertising_restriction_info",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_restricted",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "restriction_type",
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
                                concreteType: null,
                                kind: "LinkedField",
                                name: "additional_parameters",
                                plural: !1,
                                selections: [
                                  {
                                    kind: "InlineFragment",
                                    selections: o,
                                    type: "AdAccountALRDisabledAdvertisingRestrictionAdditionalParameters",
                                    abstractKey: null,
                                  },
                                  {
                                    kind: "InlineFragment",
                                    selections: o,
                                    type: "AdAccountGenericDisabledAdvertisingRestrictionAdditionalParameters",
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "AQAdAccountInWarning",
                            kind: "LinkedField",
                            name: "ad_account_in_warning",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "show_warning",
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: [
                              {
                                kind: "Variable",
                                name: "start_time",
                                variableName: "startTime",
                              },
                            ],
                            kind: "ScalarField",
                            name: "rejected_ad_count",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "should_display_ad_account_status",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ad_account_status",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "PageInfo",
                    kind: "LinkedField",
                    name: "page_info",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "end_cursor",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_next_page",
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
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
