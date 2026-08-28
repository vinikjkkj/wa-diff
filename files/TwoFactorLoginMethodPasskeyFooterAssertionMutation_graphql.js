__d(
  "TwoFactorLoginMethodPasskeyFooterAssertionMutation.graphql",
  ["TwoFactorLoginMethodPasskeyFooterAssertionMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "encryptedContext",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "payload" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "encrypted_context",
                variableName: "encryptedContext",
              },
              { kind: "Variable", name: "payload", variableName: "payload" },
            ],
            concreteType: "XFBTwoFactorLoginPasskeyAssertionResponse",
            kind: "LinkedField",
            name: "xfb_two_step_verification_authentication_passkey_assertion",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_rate_limited",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "TwoFactorLoginMethodPasskeyFooterAssertionMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "TwoFactorLoginMethodPasskeyFooterAssertionMutation",
          selections: r,
        },
        params: {
          id: n(
            "TwoFactorLoginMethodPasskeyFooterAssertionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "TwoFactorLoginMethodPasskeyFooterAssertionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
