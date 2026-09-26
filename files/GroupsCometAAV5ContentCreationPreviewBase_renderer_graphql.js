__d(
  "GroupsCometAAV5ContentCreationPreviewBase_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationPreviewBase_renderer",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "preview_label",
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
          action: "THROW",
          path: "preview_label",
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
              fragmentName: "GroupsCometAAV5ContentCreationPostPreview_profile",
              fragmentPropName: "profile",
              kind: "ModuleImport",
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
