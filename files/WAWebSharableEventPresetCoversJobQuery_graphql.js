__d(
  "WAWebSharableEventPresetCoversJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAWAListPresetCoverImagesResponse",
            kind: "LinkedField",
            name: "xwa_event_list_preset_cover_images",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAWAPresetCoverImage",
                kind: "LinkedField",
                name: "preset_images",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cover_image_handle",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "category",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "display_order",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "cover_image",
                    plural: !1,
                    selections: [
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
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebSharableEventPresetCoversJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebSharableEventPresetCoversJobQuery",
          selections: t,
        },
        params: {
          id: "28576224488725983",
          metadata: {},
          name: "WAWebSharableEventPresetCoversJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
