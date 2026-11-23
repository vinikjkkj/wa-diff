__d(
  "MAIBAGeoA2UIWidgetStateProviderMutation.graphql",
  ["MAIBAGeoA2UIWidgetStateProviderMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "MAIBAPersistWidgetStateMutationResponse",
            kind: "LinkedField",
            name: "maiba_persist_widget_state",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBMAIBAMessage",
                kind: "LinkedField",
                name: "message",
                plural: !1,
                selections: [
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAGeoA2UIWidgetStateProviderMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAGeoA2UIWidgetStateProviderMutation",
          selections: t,
        },
        params: {
          id: n(
            "MAIBAGeoA2UIWidgetStateProviderMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "MAIBAGeoA2UIWidgetStateProviderMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
