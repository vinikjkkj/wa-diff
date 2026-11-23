__d(
  "MAIBAIGAudienceCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGAudienceCard_account",
      selections: [
        {
          alias: "savedAudiences",
          args: [
            { kind: "Literal", name: "first", value: 50 },
            { kind: "Literal", name: "for_types", value: "SAVE_AUDIENCE" },
            { kind: "Literal", name: "orderby", value: "LAST_UPDATED" },
          ],
          concreteType: "AdAccountAdAudiencesConnection",
          kind: "LinkedField",
          name: "audiences",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdAccountAdAudiencesEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_maiba_ig_boost_targeting_allowed",
                          storageKey: null,
                        },
                      ],
                      type: "AdAudience",
                      abstractKey: null,
                    },
                    {
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            kind: "InlineDataFragmentSpread",
                            name: "adsMAIBAIGAudienceSummary_savedAudience",
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "target_spec_string_without_placements",
                                storageKey: null,
                              },
                            ],
                            args: null,
                            argumentDefinitions: [],
                          },
                        ],
                        type: "AdAudience",
                        abstractKey: null,
                      },
                      kind: "AliasedInlineFragmentSpread",
                      name: "adsMAIBAIGAudienceSummary_savedAudience",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey:
            'audiences(first:50,for_types:"SAVE_AUDIENCE",orderby:"LAST_UPDATED")',
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
