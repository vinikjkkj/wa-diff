__d(
  "WAWebMexSetUsernameKeyJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pin" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "pin", variableName: "pin" }],
            concreteType: "XWA2UsernamePinSetMutationResponse",
            kind: "LinkedField",
            name: "xwa2_username_pin_set",
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
          name: "WAWebMexSetUsernameKeyJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexSetUsernameKeyJobMutation",
          selections: t,
        },
        params: {
          id: "9749436995157074",
          metadata: {},
          name: "WAWebMexSetUsernameKeyJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
