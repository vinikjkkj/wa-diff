__d(
  "GroupsCometHeaderTitle_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometHeaderTitle_group",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "featurable_title",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometTextWithEntitiesRelay_textWithEntities",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometMemberCountAndPrivacy_group",
        },
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "if_viewer_can_see_group_streaks",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "GroupsCometHeaderTitle_group_streaks",
              fragmentName: "GroupsCometStreakBadge_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Group",
          kind: "LinkedField",
          name: "if_viewer_can_see_wayfinding_topics",
          plural: !1,
          selections: [
            {
              args: null,
              documentName: "GroupsCometHeaderTitle_group_wayfindingTopics",
              fragmentName: "GroupsCometTopicBreadcrumbsForGroup_group",
              fragmentPropName: "group",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
