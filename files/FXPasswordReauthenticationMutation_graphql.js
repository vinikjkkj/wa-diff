__d(
  "FXPasswordReauthenticationMutation.graphql",
  ["FXPasswordReauthenticationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBPasswordReauthenticationPayload",
            kind: "LinkedField",
            name: "xfb_password_reauth_fb_only",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_reauth_successful",
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
          name: "FXPasswordReauthenticationMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "FXPasswordReauthenticationMutation",
          selections: t,
        },
        params: {
          id: n("FXPasswordReauthenticationMutation_facebookRelayOperation"),
          metadata: {},
          name: "FXPasswordReauthenticationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
