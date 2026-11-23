__d(
  "MAIBABoostPostPreviewSummaryCard_preview.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBABoostPostPreviewSummaryCard_preview",
        selections: [
          {
            alias: null,
            args: null,
            concreteType:
              "XFBEntAdCampaignGroupWithDraftDataBoostPostPreviewFields",
            kind: "LinkedField",
            name: "maiba_lwi_boost_post_preview",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "MAIBAIGCanvasPreviewButton_preview",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "created_time",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_instagram_media",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "message",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "picture",
                storageKey: null,
              },
              {
                kind: "CatchField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "source_platforms",
                  storageKey: null,
                },
                to: "NULL",
              },
              {
                alias: null,
                args: null,
                concreteType: "BoostPostPreviewInstagramInfo",
                kind: "LinkedField",
                name: "instagram_info",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "BoostPostPreviewPageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "AdCampaignGroupWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
