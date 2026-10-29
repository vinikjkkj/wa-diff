__d(
  "WAWebSharableEventReconcileJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAWAValidateCachedEventIDsResponse",
            kind: "LinkedField",
            name: "xwa_event_validate_cached_event_ids",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "retained_event_ids",
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
          name: "WAWebSharableEventReconcileJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebSharableEventReconcileJobQuery",
          selections: t,
        },
        params: {
          id: "26914147061616374",
          metadata: {},
          name: "WAWebSharableEventReconcileJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
