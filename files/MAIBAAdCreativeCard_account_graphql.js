__d(
  "MAIBAAdCreativeCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "isBoost" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdCreativeCard_account",
      selections: [
        {
          condition: "isBoost",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                concreteType:
                  "GenAITransparencyAdvertiserControlConfigResponse",
                kind: "LinkedField",
                name: "genai_transparency_advertiser_control_config_gk_gated",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              to: "NULL",
            },
          ],
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
