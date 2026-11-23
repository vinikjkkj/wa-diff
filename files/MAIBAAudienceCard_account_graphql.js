__d(
  "MAIBAAudienceCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAudienceCard_account",
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
                      ],
                      type: "AdAudience",
                      abstractKey: null,
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
        {
          alias: null,
          args: null,
          concreteType: "XFBAdAccountBusinessConstraints",
          kind: "LinkedField",
          name: "business_constraints",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdTargetSpecification",
              kind: "LinkedField",
              name: "audience_controls",
              plural: !1,
              selections: [
                {
                  alias: "age_min",
                  args: null,
                  kind: "ScalarField",
                  name: "min_age",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
