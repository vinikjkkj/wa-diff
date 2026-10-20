__d(
  "WAWebFetchMetaAiThreadServerListGQLQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: [{ kind: "Literal", name: "product", value: "META_AI_THREAD" }],
          concreteType: "WASSProfile",
          kind: "LinkedField",
          name: "wass_account_list_profiles",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "bot_fbid",
              storageKey: null,
            },
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
              name: "is_deprecated",
              storageKey: null,
            },
          ],
          storageKey: 'wass_account_list_profiles(product:"META_AI_THREAD")',
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchMetaAiThreadServerListGQLQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchMetaAiThreadServerListGQLQuery",
          selections: e,
        },
        params: {
          id: "27000273393004250",
          metadata: {},
          name: "WAWebFetchMetaAiThreadServerListGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
