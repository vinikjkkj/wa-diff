__d(
  "EntPhotoCollageItem_media.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "EntPhotoCollageItem_media",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "context", value: "comet_media_viewer" },
            { kind: "Literal", name: "height", value: 1e6 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 1e6 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "height",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Vect2",
          kind: "LinkedField",
          name: "focus",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "x",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "y",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Photo",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
