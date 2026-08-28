__d(
  "CometPasswordReauthenticationMutation.graphql",
  ["CometPasswordReauthenticationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "CometPasswordReauthenticationPayload",
            kind: "LinkedField",
            name: "comet_password_reauthentication",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reauth_is_successful",
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
          name: "CometPasswordReauthenticationMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometPasswordReauthenticationMutation",
          selections: t,
        },
        params: {
          id: n("CometPasswordReauthenticationMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometPasswordReauthenticationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
