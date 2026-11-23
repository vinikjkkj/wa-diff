__d(
  "MAIBAIGAITransparencyCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGAITransparencyCard_campaign",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "GenAITransparencyAdvertiserControlConfigResponse",
          kind: "LinkedField",
          name: "genai_transparency_advertiser_control_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "GenAITransparencyAdvertiserControlDefinition",
              kind: "LinkedField",
              name: "controls",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "GenAITransparencyAdvertiserControlDisplayConfig",
                  kind: "LinkedField",
                  name: "display",
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
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_enabled",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdCampaignWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
