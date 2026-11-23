__d(
  "MAIBAInlineBlock_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAInlineBlock_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "block_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "properties_json",
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
                    { kind: "Literal", name: "supported", value: "3b2xaq" },
                  ],
                  concreteType: null,
                  kind: "LinkedField",
                  name: "data",
                  plural: !1,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
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
                          documentName: "MAIBAInlineBlock_data",
                          fragmentName: "MAIBAInlinePLE_data",
                          fragmentPropName: "data",
                          kind: "ModuleImport",
                        },
                      ],
                      type: "MAIBATextEntityDataPLE",
                      abstractKey: null,
                    },
                  ],
                  storageKey: 'data(supported:"3b2xaq")',
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "MAIBATextEntityDataInlineBlock",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
