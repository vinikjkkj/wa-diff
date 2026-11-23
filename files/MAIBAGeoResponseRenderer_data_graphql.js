__d(
  "MAIBAGeoResponseRenderer_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAGeoResponseRenderer_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "response_json",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MAIBATextWithEntities",
          kind: "LinkedField",
          name: "texts_with_entities",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MAIBATextEntity",
              kind: "LinkedField",
              name: "entities",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "offset",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "length",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "supported", value: "4qlxbD" },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "data",
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
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineBold_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataBold",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineItalic_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataItalic",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineCode_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataCode",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineStrikethrough_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataStrikethrough",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineUnderline_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataUnderline",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineLink_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataLink",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineAdObject_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataAdObject",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineLlmRecCTA_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataLlmRecCTA",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineNonOSCTA_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataNonOSCTA",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlinePLE_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataPLE",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAGeoResponseRenderer_data",
                          fragmentName: "MAIBAInlineBlock_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataInlineBlock",
                      abstractKey: null,
                    },
                  ],
                  storageKey: 'data(supported:"4qlxbD")',
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "MAIBAGeoComponentMatchResolver_components",
        },
      ],
      type: "MAIBAResponseData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
