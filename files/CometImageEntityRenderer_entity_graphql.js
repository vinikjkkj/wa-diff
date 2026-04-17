__d(
  "CometImageEntityRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "CometImageEntityRenderer_entity",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "entity_with_image",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "scale", variableName: "scale" },
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
          ],
          storageKey: null,
        },
      ],
      type: "ImageAtRange",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
