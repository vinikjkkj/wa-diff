__d(
  "usePasskeyUpsellEligibilityCheckMutation.graphql",
  ["usePasskeyUpsellEligibilityCheckMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "encryptedContext",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "encrypted_context",
                variableName: "encryptedContext",
              },
            ],
            kind: "ScalarField",
            name: "xfb_upsell_passkey_post_reauth",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "usePasskeyUpsellEligibilityCheckMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "usePasskeyUpsellEligibilityCheckMutation",
          selections: t,
        },
        params: {
          id: n(
            "usePasskeyUpsellEligibilityCheckMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "usePasskeyUpsellEligibilityCheckMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
