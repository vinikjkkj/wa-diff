__d(
  "FXAccountsCenterPasskeyCreationUpsellContentMutation.facebook.graphql",
  [
    "FXAccountsCenterPasskeyCreationUpsellContentMutation_facebookRelayOperation",
  ],
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
          name: "FXAccountsCenterPasskeyCreationUpsellContentMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBEnrollBusinessIntoPasskeyResponseType",
              kind: "LinkedField",
              name: "xfb_enroll_eligible_business_into_passkey",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: r,
                  action: "THROW",
                  path: "xfb_enroll_eligible_business_into_passkey.success",
                },
                o,
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "FXAccountsCenterPasskeyCreationUpsellContentMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBEnrollBusinessIntoPasskeyResponseType",
              kind: "LinkedField",
              name: "xfb_enroll_eligible_business_into_passkey",
              plural: !1,
              selections: [r, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "FXAccountsCenterPasskeyCreationUpsellContentMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "FXAccountsCenterPasskeyCreationUpsellContentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
