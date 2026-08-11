__d(
  "WAWebFetchWassBotProfileGQLQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "botFbid" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "bot_fbid", variableName: "botFbid" },
            ],
            concreteType: "WASSProfile",
            kind: "LinkedField",
            name: "get_wass_account_profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "product",
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchWassBotProfileGQLQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchWassBotProfileGQLQuery",
          selections: t,
        },
        params: {
          id: "27749531731398799",
          metadata: {},
          name: "WAWebFetchWassBotProfileGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
