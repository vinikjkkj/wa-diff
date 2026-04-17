__d(
  "CometFeedStoryCopyrightViolationHeaderSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometFeedStoryCopyrightViolationHeaderSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "2lQ7jN" }],
              concreteType: null,
              kind: "LinkedField",
              name: "copyright_violation_header",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometFeedStoryCopyrightViolationHeaderSection_story",
                      fragmentName:
                        "CometFeedStoryCopyrightViolationHeaderStrategy_header",
                      fragmentPropName: "header",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedStoryCopyrightViolationHeaderStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'copyright_violation_header(supported:"2lQ7jN")',
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
