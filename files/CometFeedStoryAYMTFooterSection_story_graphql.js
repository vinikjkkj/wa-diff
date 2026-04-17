__d(
  "CometFeedStoryAYMTFooterSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryAYMTFooterSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "4f12sh" }],
              concreteType: null,
              kind: "LinkedField",
              name: "aymt_footer",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometFeedStoryAYMTFooterSection_story",
                      fragmentName:
                        "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy_strategy",
                      fragmentPropName: "strategy",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryAYMTProfessionalProfilePostFooterChannelStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'aymt_footer(supported:"4f12sh")',
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
