__d(
  "GroupsCometAAV5ContentCreationRenderer_renderer$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          args: null,
          fragment: n(
            "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
          ),
          kind: "FragmentSpread",
        },
      ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "GroupsCometAAV5ContentCreationRenderer_renderer$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "preview_label",
            plural: !1,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationRenderer",
            kind: "LinkedField",
            name: "if_has_post_preview",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "GroupsCometAAV5ContentCreationPreviewBase_renderer_if_has_post_preview",
                fragmentName:
                  "GroupsCometAAV5ContentCreationPostPreview_profile",
                fragmentPropName: "profile",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
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
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "type",
                    storageKey: null,
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
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationRenderer",
            kind: "LinkedField",
            name: "if_not_can_use_composer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message_tip_label",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message_label",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
