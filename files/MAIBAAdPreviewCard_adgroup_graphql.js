__d(
  "MAIBAAdPreviewCard_adgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "flowID" },
        { defaultValue: !0, kind: "LocalArgument", name: "isAdsManager" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdPreviewCard_adgroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preview_link",
          storageKey: null,
        },
        {
          condition: "isAdsManager",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "creative_product_set_id",
                storageKey: null,
              },
              to: "NULL",
            },
          ],
        },
        {
          alias: null,
          args: null,
          concreteType: "AdDraftRenderableCreativeMediaItem",
          kind: "LinkedField",
          name: "creative_renderable_media_items",
          plural: !0,
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
          name: "creative_welcome_message_greeting",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_welcome_message_questions",
          storageKey: null,
        },
        {
          kind: "Defer",
          selections: [
            {
              args: [
                { kind: "Variable", name: "flowID", variableName: "flowID" },
              ],
              kind: "FragmentSpread",
              name: "MAIBAAdPreviewCard_tiles",
            },
          ],
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "MAIBAAdPreviewCard_destination",
            },
          ],
        },
      ],
      type: "AdAdgroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
