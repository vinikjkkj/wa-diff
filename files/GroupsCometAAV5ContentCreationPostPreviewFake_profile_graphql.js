__d(
  "GroupsCometAAV5ContentCreationPostPreviewFake_profile.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "GroupsCometAAV5ContentCreationPostPreviewFake_profile",
        selections: [
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "profile",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometComposerActorProfilePicture_profile",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  action: "THROW",
                  path: "profile.name",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "profile",
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "TextWithEntities",
              kind: "LinkedField",
              name: "preview_badge_label",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: e,
                  action: "THROW",
                  path: "preview_badge_label.text",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "preview_badge_label",
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
                kind: "FragmentSpread",
                name: "CometTextWithEntitiesRelay_textWithEntities",
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
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: "XFBAutomationAssistContentCreationImage",
                  kind: "LinkedField",
                  name: "images",
                  plural: !0,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        concreteType: "Image",
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
                              name: "uri",
                              storageKey: null,
                            },
                            action: "THROW",
                            path: "image_options.images.image.uri",
                          },
                        ],
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "image_options.images.image",
                    },
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
                      path: "image_options.images.type",
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "image_options.images",
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
                selections: [e],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "GroupsCometAAV5ContentCreationPostPreviewBackground_renderer",
          },
        ],
        type: "XFBAutomationAssistContentCreationRenderer",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
