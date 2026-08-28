__d(
  "EntPhotoCollageItemContainerQuery.graphql",
  ["EntPhotoCollageItemContainerQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "id" },
        t = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        r = [{ kind: "Variable", name: "id", variableName: "id" }];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "EntPhotoCollageItemContainerQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "EntPhotoCollageItem_media",
                    },
                  ],
                  type: "Photo",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "EntPhotoCollageItemContainerQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Literal",
                          name: "context",
                          value: "comet_media_viewer",
                        },
                        { kind: "Literal", name: "height", value: 1e6 },
                        {
                          kind: "Variable",
                          name: "scale",
                          variableName: "scale",
                        },
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
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("EntPhotoCollageItemContainerQuery_facebookRelayOperation"),
          metadata: {},
          name: "EntPhotoCollageItemContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
