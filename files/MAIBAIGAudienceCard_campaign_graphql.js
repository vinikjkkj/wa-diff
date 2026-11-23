__d(
  "MAIBAIGAudienceCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target_spec_string_without_placements",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "targeting_spec_json",
          storageKey: null,
        },
        r = {
          kind: "InlineDataFragmentSpread",
          name: "adsMAIBAIGAudienceSummary_campaign",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdAudience",
              kind: "LinkedField",
              name: "saved_audience",
              plural: !1,
              selections: [e, t],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_advantage_audience",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_age_max",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_age_min",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_flexible_spec_names",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_genders",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_geo_locations_summary",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "targeting_optimization",
              storageKey: null,
            },
            n,
          ],
          args: null,
          argumentDefinitions: [],
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAIGAudienceCard_campaign",
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
            kind: "ScalarField",
            name: "optimization_goal",
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
                kind: "InlineDataFragmentSpread",
                name: "adsMAIBAIGAudienceSummary_savedAudience",
                selections: [
                  e,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  t,
                ],
                args: null,
                argumentDefinitions: [],
              },
            ],
            storageKey: null,
          },
          r,
          {
            kind: "InlineDataFragmentSpread",
            name: "adsMAIBAIGAudienceSummary_draftAudience",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "targeting_countries",
                storageKey: null,
              },
              n,
              r,
            ],
            args: null,
            argumentDefinitions: [],
          },
        ],
        type: "AdCampaignWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
