__d(
  "WAWebAECompanionOnboardMutation.graphql",
  ["WAWebAECompanionOnboardMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "phoneNumber" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "phone_number",
                    variableName: "phoneNumber",
                  },
                  {
                    kind: "Literal",
                    name: "product_surface",
                    value: "AUTOMATION",
                  },
                ],
                kind: "ObjectValue",
                name: "request",
              },
            ],
            concreteType: "XFBWACoexProcessNativeOnboardingResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_coexistence_process_native_onboarding",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebAECompanionOnboardMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebAECompanionOnboardMutation",
          selections: t,
        },
        params: {
          id: n("WAWebAECompanionOnboardMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebAECompanionOnboardMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
