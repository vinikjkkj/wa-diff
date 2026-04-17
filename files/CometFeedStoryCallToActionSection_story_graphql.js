__d(
  "CometFeedStoryCallToActionSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCallToActionSection_story",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "location",
              variableName: "renderLocation",
            },
          ],
          concreteType: "CometStorySections",
          kind: "LinkedField",
          name: "comet_sections",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "supported", value: "4pc70y" }],
              concreteType: null,
              kind: "LinkedField",
              name: "call_to_action",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryCallToActionSection_story",
                      fragmentName:
                        "CometFeedStoryDefaultCallToActionStrategy_cta",
                      fragmentPropName: "cta",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryDefaultCallToActionStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'call_to_action(supported:"4pc70y")',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
