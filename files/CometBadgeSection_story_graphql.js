__d(
  "CometBadgeSection_story.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometBadgeSection_story",
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
              args: [{ kind: "Literal", name: "supported", value: "11RbGN" }],
              concreteType: null,
              kind: "LinkedField",
              name: "badge",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometBadgeSection_story",
                      fragmentName: "CometFeedUserVerifiedBadgeStrategy_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedUserVerifiedBadgeStrategy",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName: "CometBadgeSection_story",
                      fragmentName: "CometFeedPageVerifiedBadgeStrategy_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "CometFeedPageVerifiedBadgeStrategy",
                  abstractKey: null,
                },
              ],
              storageKey: 'badge(supported:"11RbGN")',
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
