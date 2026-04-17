__d(
  "CometFeedStoryPostInformTreatmentSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryPostInformTreatmentSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "3t3kTK" }],
              concreteType: null,
              kind: "LinkedField",
              name: "post_inform_treatment",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryPostInformTreatmentSection_story",
                      fragmentName:
                        "CometFeedStoryPostCoverInformTreatmentStrategy_story",
                      fragmentPropName: "story",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometStoryInformTreatmentPostCoverStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'post_inform_treatment(supported:"3t3kTK")',
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
