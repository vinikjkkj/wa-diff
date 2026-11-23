__d(
  "MAIBAAdIdentityCard_campaign.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdIdentityCard_campaign",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "destination_type",
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "promoted_object_page_id",
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "AdCampaignWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
