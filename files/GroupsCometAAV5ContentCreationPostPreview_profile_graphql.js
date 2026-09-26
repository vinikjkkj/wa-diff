__d(
  "GroupsCometAAV5ContentCreationPostPreview_profile.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationPostPreview_profile",
      selections: [
        {
          alias: "showEditComposerButton",
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_can_see_composer_edit_button",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometAAV5ContentCreationPostPreview_profile_show_composer_edit_button",
              fragmentName:
                "GroupsCometAAV5ContentCreationComposerButton_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: "showFeedUnit",
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_can_use_composer",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometAAV5ContentCreationPostPreview_profile_show_feed_unit",
              fragmentName:
                "GroupsCometAAV5ContentCreationComposerButton_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationPostPreviewFake_profile",
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
