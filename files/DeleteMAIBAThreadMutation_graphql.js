__d(
  "DeleteMAIBAThreadMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "external_conversation_id",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "external_conversation_id",
                    variableName: "external_conversation_id",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            kind: "ScalarField",
            name: "xfb_maiba_delete_thread",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "DeleteMAIBAThreadMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "DeleteMAIBAThreadMutation",
          selections: t,
        },
        params: {
          id: "26721111270917470",
          metadata: {},
          name: "DeleteMAIBAThreadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
