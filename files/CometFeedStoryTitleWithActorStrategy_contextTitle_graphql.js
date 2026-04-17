__d(
  "CometFeedStoryTitleWithActorStrategy_contextTitle.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "username",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryTitleWithActorStrategy_contextTitle",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryMatchDebugger_iCometStorySection",
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "post_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  t,
                  e,
                  {
                    kind: "InlineFragment",
                    selections: [n],
                    type: "InstagramUserV2",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Literal",
                    name: "include_post_collaborators",
                    value: !0,
                  },
                ],
                concreteType: null,
                kind: "LinkedField",
                name: "collaborators",
                plural: !0,
                selections: [e, t],
                storageKey: "collaborators(include_post_collaborators:true)",
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "location",
                    variableName: "renderLocation",
                  },
                ],
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometTextWithEntitiesRelay_textWithEntities",
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "EntityAtRange",
                    kind: "LinkedField",
                    name: "ranges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "entity",
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
                              n,
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "should_prioritize_ig_display_name",
                                storageKey: null,
                              },
                            ],
                            type: "InstagramUserV2",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
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
                name: "CometFeedStoryActorLink_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryFollowButtonSection_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryTitleSingleActorStrategy_story",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "GeminiRepostDirectedTitleBase_story",
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometFeedStoryTitleWithActorStrategy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
