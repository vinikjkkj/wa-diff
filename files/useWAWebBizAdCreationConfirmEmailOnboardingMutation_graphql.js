__d(
  "useWAWebBizAdCreationConfirmEmailOnboardingMutation.graphql",
  [
    "useWAWebBizAdCreationConfirmEmailOnboardingMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "WaAdAccountUpsertOnboardingDataResponsePayload",
            kind: "LinkedField",
            name: "wa_ad_account_upsert_onboarding_data",
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
                name: "failure_reason",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WAAdAccountOnboardingAPI",
                kind: "LinkedField",
                name: "onboarding_data",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null,
                  },
                ],
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
          name: "useWAWebBizAdCreationConfirmEmailOnboardingMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreationConfirmEmailOnboardingMutation",
          selections: t,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationConfirmEmailOnboardingMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationConfirmEmailOnboardingMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
