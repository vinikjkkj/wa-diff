__d(
  "AdsAutoSuggestedCampaignNameSearchSourceQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "first" },
        n = { defaultValue: null, kind: "LocalArgument", name: "searchTerm" },
        r = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        o = [
          { kind: "Variable", name: "first", variableName: "first" },
          { kind: "Literal", name: "orderby", value: "newest_updated_time" },
          { kind: "Variable", name: "search_term", variableName: "searchTerm" },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "AdsAutoSuggestedCampaignNameSearchSourceQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: o,
                  concreteType: "AdAccountAdCampaignsTypeaheadConnection",
                  kind: "LinkedField",
                  name: "ad_campaigns_typeahead",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdCampaign",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        { kind: "RequiredField", field: a, action: "THROW" },
                        { kind: "RequiredField", field: i, action: "THROW" },
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
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "AdsAutoSuggestedCampaignNameSearchSourceQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: o,
                  concreteType: "AdAccountAdCampaignsTypeaheadConnection",
                  kind: "LinkedField",
                  name: "ad_campaigns_typeahead",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdCampaign",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [a, i],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26860057896911110",
          metadata: {},
          name: "AdsAutoSuggestedCampaignNameSearchSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
