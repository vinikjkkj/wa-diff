__d(
  "WAWebMexUsernameAvailabilityQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "session_id" },
        n = { defaultValue: null, kind: "LocalArgument", name: "source" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "session_id",
                variableName: "session_id",
              },
              { kind: "Variable", name: "source", variableName: "source" },
              { kind: "Variable", name: "username", variableName: "input" },
            ],
            concreteType: "XWA2UsernameCheckResponse",
            kind: "LinkedField",
            name: "xwa2_username_check",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "result",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "suggestions",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexUsernameAvailabilityQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "WAWebMexUsernameAvailabilityQuery",
          selections: r,
        },
        params: {
          id: "26122779627399568",
          metadata: {},
          name: "WAWebMexUsernameAvailabilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
