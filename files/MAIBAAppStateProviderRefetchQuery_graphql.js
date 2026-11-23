__d(
  "MAIBAAppStateProviderRefetchQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        { defaultValue: null, kind: "LocalArgument", name: "appStateInput" },
      ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAppStateProviderRefetchQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "appStateInput",
                  variableName: "appStateInput",
                },
              ],
              kind: "FragmentSpread",
              name: "MAIBAAppStateProvider_query",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAAppStateProviderRefetchQuery",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "input",
                  variableName: "appStateInput",
                },
              ],
              concreteType: "MAIBAAppStateResponse",
              kind: "LinkedField",
              name: "maiba_app_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "doc_json",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "updated_time",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29066827489572988",
          metadata: {},
          name: "MAIBAAppStateProviderRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
