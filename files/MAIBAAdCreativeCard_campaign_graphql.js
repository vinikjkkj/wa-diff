__d(
  "MAIBAAdCreativeCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdCreativeCard_campaign",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "destination_type",
          storageKey: null,
        },
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
                  kind: "ScalarField",
                  name: "control_type",
                  storageKey: null,
                },
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
                      name: "default_value",
                      storageKey: null,
                    },
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "GenAITransparencyAdvertiserControl_display",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "display_group_id",
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
