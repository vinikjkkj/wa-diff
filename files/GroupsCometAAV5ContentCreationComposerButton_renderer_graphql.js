__d(
  "GroupsCometAAV5ContentCreationComposerButton_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationComposerButton_renderer",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "edit_post_label",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "text",
                  storageKey: null,
                },
                action: "THROW",
                path: "edit_post_label.text",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "edit_post_label",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationComposerButtonUseCreate_renderer",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometAAV5ContentCreationComposerButtonUseEdit_renderer",
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
