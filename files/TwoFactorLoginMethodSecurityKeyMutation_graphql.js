__d(
  "TwoFactorLoginMethodSecurityKeyMutation.graphql",
  ["TwoFactorLoginMethodSecurityKeyMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
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
          name: "client_mutation_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "TwoFactorLoginMethodSecurityKeyMutation",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XFBTwoFactorReauthResult",
                kind: "LinkedField",
                name: "xfb_two_factor_verify_reauth",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: r,
                    action: "THROW",
                    path: "xfb_two_factor_verify_reauth.success",
                  },
                  o,
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_two_factor_verify_reauth",
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "TwoFactorLoginMethodSecurityKeyMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBTwoFactorReauthResult",
              kind: "LinkedField",
              name: "xfb_two_factor_verify_reauth",
              plural: !1,
              selections: [r, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "TwoFactorLoginMethodSecurityKeyMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "TwoFactorLoginMethodSecurityKeyMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
