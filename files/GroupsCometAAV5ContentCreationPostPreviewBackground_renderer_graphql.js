__d(
  "GroupsCometAAV5ContentCreationPostPreviewBackground_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometAAV5ContentCreationPostPreviewBackground_renderer",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "background_image",
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
                path: "background_image.uri",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "background_image",
        },
      ],
      type: "XFBAutomationAssistContentCreationRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
