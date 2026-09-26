__d(
  "GroupsCometAAV5ContentCreationRenderer_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationRenderer_renderer",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationPreviewBase_renderer",
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationContent",
            kind: "LinkedField",
            name: "content",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "plaintext",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "post_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "story_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBAutomationAssistContentCreationImage",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "type",
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "content.image.type",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text_format_preset_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_admin_intro_comment",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "content",
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_has_schedule",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometAAV5ContentCreationRenderer_renderer_if_has_schedule",
              fragmentName:
                "GroupsCometAAV5ContentCreationScheduleSection_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_has_threshold",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometAAV5ContentCreationRenderer_renderer_if_has_threshold",
              fragmentName:
                "GroupsCometAAV5ContentCreationThresholdSection_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAutomationAssistContentCreationRenderer",
          kind: "LinkedField",
          name: "if_viewer_can_set_has_admin_intro_comment",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "GroupsCometAAV5ContentCreationRenderer_renderer_useTagAdmins",
              fragmentName:
                "GroupsCometAAV5ContentCreationAdminIntroCommentCheckbox_renderer",
              fragmentPropName: "renderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationContentSection_renderer",
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
