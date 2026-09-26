__d(
  "GroupsCometAAV5ContentCreationComposerButtonUseCreate_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationComposerButtonUseCreate_renderer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationComposerButtonUsePhoto_renderer",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Group",
            kind: "LinkedField",
            name: "group",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useGroupsCometDefaultGroupInlineComposerTrigger_group",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "group",
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_can_use_text_format",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TextFormatMetadata",
              kind: "LinkedField",
              name: "text_format_metadata",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "avatar_story_text_format_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "preset_id",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "FeedComposerCometFormattedTextBackgroundRoot_data",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometComposerFormattedTextArea_formattedTextPreset",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useCometStatusAreaTextData_formattedTextPreset",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometFormattedTextSwatchButton_data",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
