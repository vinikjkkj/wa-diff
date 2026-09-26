__d(
  "GroupsCometAAV5ContentCreationPostPreview_profile$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "GroupsCometAAV5ContentCreationPostPreview_profile$normalization",
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
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 40 },
                      {
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale",
                      },
                      { kind: "Literal", name: "width", value: 40 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "url",
                        storageKey: null,
                      },
                    ],
                    type: "User",
                    abstractKey: null,
                  },
                ],
                type: "Profile",
                abstractKey: "__isProfile",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "preview_badge_label",
            plural: !1,
            selections: t,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "preview_user_list_placeholder",
            plural: !1,
            selections: [
              {
                args: null,
                fragment: n(
                  "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
                ),
                kind: "FragmentSpread",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "group_privacy_info_icon_name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationImageOptions",
            kind: "LinkedField",
            name: "image_options",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBAutomationAssistContentCreationImage",
                kind: "LinkedField",
                name: "images",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
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
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBAutomationAssistContentCreationRenderer",
            kind: "LinkedField",
            name: "if_can_use_composer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "content_placeholder",
                plural: !1,
                selections: t,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "background_image",
            plural: !1,
            selections: e,
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
