__d(
  "TwoFactorLoginMethodSecurityKeyAuthMutation.graphql",
  ["TwoFactorLoginMethodSecurityKeyAuthMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "encrypted_context",
          },
          { defaultValue: null, kind: "LocalArgument", name: "input" },
        ],
        t = [
          {
            kind: "Variable",
            name: "encrypted_context",
            variableName: "encrypted_context",
          },
          { kind: "Variable", name: "input", variableName: "input" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "success",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "next_url",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_mutation_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "TwoFactorLoginMethodSecurityKeyAuthMutation",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XFBTwoFactorAuthResult",
                kind: "LinkedField",
                name: "xfb_validate_security_key_two_step_verification",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: r,
                    action: "THROW",
                    path: "xfb_validate_security_key_two_step_verification.success",
                  },
                  o,
                  a,
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_validate_security_key_two_step_verification",
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "TwoFactorLoginMethodSecurityKeyAuthMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBTwoFactorAuthResult",
              kind: "LinkedField",
              name: "xfb_validate_security_key_two_step_verification",
              plural: !1,
              selections: [r, o, a],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "TwoFactorLoginMethodSecurityKeyAuthMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "TwoFactorLoginMethodSecurityKeyAuthMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
