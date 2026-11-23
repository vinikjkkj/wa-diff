__d(
  "CTXChatBuilderDialogContainerUtilsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "HasWelcomeMessageFlowsResponse",
            kind: "LinkedField",
            name: "welcome_message_flows",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_welcome_message_flows",
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
          name: "CTXChatBuilderDialogContainerUtilsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CTXChatBuilderDialogContainerUtilsQuery",
          selections: t,
        },
        params: {
          id: "25623894560605325",
          metadata: {},
          name: "CTXChatBuilderDialogContainerUtilsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
