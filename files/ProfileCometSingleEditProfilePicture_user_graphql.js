__d(
  "ProfileCometSingleEditProfilePicture_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometSingleEditProfilePicture_user",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Photo",
          kind: "LinkedField",
          name: "profile_photo",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "accessibility_caption",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 160 },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Literal", name: "width", value: 160 },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_silhouette",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "RenderedProfile",
      abstractKey: "__isRenderedProfile",
    };
    a.exports = e;
  },
  null,
);
