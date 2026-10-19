__d(
  "WAWebDeleteMetaAiThreadGQLMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "bot_fbid" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "bot_fbid", variableName: "bot_fbid" },
            ],
            kind: "ScalarField",
            name: "wass_delete_account",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebDeleteMetaAiThreadGQLMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebDeleteMetaAiThreadGQLMutation",
          selections: t,
        },
        params: {
          id: "28761439030207634",
          metadata: {},
          name: "WAWebDeleteMetaAiThreadGQLMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
