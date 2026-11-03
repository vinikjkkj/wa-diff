__d(
  "GroupsCometHeader_group.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "isChainingRecommendationUnit" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "GroupsCometHeader_group",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_membership_questions",
          storageKey: null,
        },
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
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "GroupContentViewsConnection",
            kind: "LinkedField",
            name: "group_content_views",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "GroupContentViewsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometColorWrapper_group",
        },
        { args: null, kind: "FragmentSpread", name: "GroupsCometCover_group" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometHeaderJoinRestriction_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometHeaderTitle_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometPendingActions_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometResponsiveHeader_profile",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometActionControls_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometAuxiliaryFacepile_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometShareGroupMenuItem_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometHeaderInviteButton_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometHeaderCreatePostButton_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometPersistentJoinedStatusControl_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometHeaderControls_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometMallTabs_group",
        },
        {
          args: [
            {
              kind: "Variable",
              name: "isChainingRecommendationUnit",
              variableName: "isChainingRecommendationUnit",
            },
          ],
          kind: "FragmentSpread",
          name: "useGroupsCometRecAffordanceControl_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGroupsCometSmallCoverPhoto_group",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "GroupsCometEntityMenuInSmallScreen_group",
        },
      ],
      type: "Group",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
