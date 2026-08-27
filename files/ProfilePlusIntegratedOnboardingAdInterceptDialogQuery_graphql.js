__d(
  "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery.graphql",
  [
    "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "surface" }],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "surface",
                    variableName: "surface",
                  },
                ],
                concreteType: "XFBIntegratedOnboarding",
                kind: "LinkedField",
                name: "integrated_onboarding_data",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cta_list",
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
          name: "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery",
          selections: t,
        },
        params: {
          id: n(
            "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "ProfilePlusIntegratedOnboardingAdInterceptDialogQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
