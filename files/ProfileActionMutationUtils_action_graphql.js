__d(
  "ProfileActionMutationUtils_action.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileActionMutationUtils_action",
      selections: [
        {
          alias: null,
          args: [
            { kind: "Literal", name: "icon_color", value: "fds-black" },
            { kind: "Literal", name: "icon_size", value: "16" },
            { kind: "Literal", name: "icon_variant", value: "filled" },
            { kind: "Variable", name: "scale", variableName: "scale" },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon_image",
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
              name: "scale",
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
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_optimistic_update",
              storageKey: null,
            },
          ],
        },
      ],
      type: "ProfileAction",
      abstractKey: "__isProfileAction",
    };
    a.exports = e;
  },
  null,
);
