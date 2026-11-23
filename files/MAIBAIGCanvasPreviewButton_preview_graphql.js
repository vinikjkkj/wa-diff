__d(
  "MAIBAIGCanvasPreviewButton_preview.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGCanvasPreviewButton_preview",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_spec_json",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "instagram_media_igid",
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_advantage_plus_placements_enabled",
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "XFBEntAdCampaignGroupWithDraftDataBoostPostPreviewFields",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
