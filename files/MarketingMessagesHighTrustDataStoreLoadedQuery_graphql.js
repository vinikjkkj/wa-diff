__d(
  "MarketingMessagesHighTrustDataStoreLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "is_business_high_trust_for_marketing_messages",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "MarketingMessagesHighTrustDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "MarketingMessagesHighTrustDataStoreInline_fragment",
                      selections: [e],
                      args: null,
                      argumentDefinitions: [],
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "MarketingMessagesHighTrustDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "6e4c3e7ffbb72afb302275268d73072b",
          id: null,
          metadata: {},
          name: "MarketingMessagesHighTrustDataStoreLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
