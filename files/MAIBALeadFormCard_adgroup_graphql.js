__d(
  "MAIBALeadFormCard_adgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBALeadFormCard_adgroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_lead_gen_form_id",
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "MAIBACreativeLeadGenForm",
            kind: "LinkedField",
            name: "maiba_creative_lead_gen_form",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "AdAdgroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
