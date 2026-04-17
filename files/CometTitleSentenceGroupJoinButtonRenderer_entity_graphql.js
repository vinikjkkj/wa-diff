__d(
  "CometTitleSentenceGroupJoinButtonRenderer_entity.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometTitleSentenceGroupJoinButtonRenderer_entity",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "target_group",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "CometTitleSentenceGroupJoinButtonRenderer_entity",
              fragmentName:
                "CometFeedStoryCommunityAttributionTitleJoinButton_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "TitleSentenceGroupJoinButton",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
