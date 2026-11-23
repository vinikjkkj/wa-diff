__d(
  "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "searchTerm" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            { kind: "Literal", name: "first", value: 20 },
            { kind: "Literal", name: "orderby", value: "newest_updated_time" },
            {
              kind: "Variable",
              name: "search_term",
              variableName: "searchTerm",
            },
          ],
          concreteType: "AdAccountAdCampaignGroupsTypeaheadConnection",
          kind: "LinkedField",
          name: "ad_campaign_groups_typeahead",
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
                n,
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
                  name: "objective",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29607488932189180",
          metadata: {},
          name: "MAIBAContextAdsTypeaheadEntriesCampaignGroupQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
