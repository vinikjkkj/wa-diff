__d(
  "WAWebMexUpdateTextStatusJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "text_status_input",
                variableName: "input",
              },
            ],
            concreteType: "XWA2TextStatusMutationResponse",
            kind: "LinkedField",
            name: "xwa2_update_text_status",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "result",
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
          name: "WAWebMexUpdateTextStatusJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexUpdateTextStatusJobMutation",
          selections: t,
        },
        params: {
          id: "9152604461510864",
          metadata: {},
          name: "WAWebMexUpdateTextStatusJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
