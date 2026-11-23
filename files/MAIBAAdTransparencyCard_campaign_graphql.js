__d(
  "MAIBAAdTransparencyCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdTransparencyCard_campaign",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "regional_regulated_categories",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMAIBARegionalRegulationIdentity",
          kind: "LinkedField",
          name: "regional_regulation_identities",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "field",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdAudience",
          kind: "LinkedField",
          name: "saved_audience",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "target_spec_string_without_placements",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "targeting_spec_json",
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
