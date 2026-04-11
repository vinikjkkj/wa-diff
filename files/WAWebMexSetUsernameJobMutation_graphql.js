__d(
  "WAWebMexSetUsernameJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "reserved" },
        n = { defaultValue: null, kind: "LocalArgument", name: "session_id" },
        r = { defaultValue: null, kind: "LocalArgument", name: "source" },
        o = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "reserved", variableName: "reserved" },
              {
                kind: "Variable",
                name: "session_id",
                variableName: "session_id",
              },
              { kind: "Variable", name: "source", variableName: "source" },
              { kind: "Variable", name: "username", variableName: "input" },
            ],
            concreteType: "XWA2UsernameSetMutationResponse",
            kind: "LinkedField",
            name: "xwa2_username_set",
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
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexSetUsernameJobMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, t, r, n],
          kind: "Operation",
          name: "WAWebMexSetUsernameJobMutation",
          selections: o,
        },
        params: {
          id: "25757341163897635",
          metadata: {},
          name: "WAWebMexSetUsernameJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
