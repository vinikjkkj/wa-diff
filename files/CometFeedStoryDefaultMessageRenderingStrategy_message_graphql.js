__d(
  "CometFeedStoryDefaultMessageRenderingStrategy_message.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_token",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          {
            kind: "RootArgument",
            name: "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
          },
          { kind: "RootArgument", name: "renderLocation" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryDefaultMessageRenderingStrategy_message",
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_text_only_story",
                storageKey: null,
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
                name: "message",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometFeedMessageTextWithEntities_textWithEntities",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "message_truncation_line_limit",
                storageKey: null,
              },
              {
                condition:
                  "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
                kind: "Condition",
                passingValue: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "SponsoredData",
                    kind: "LinkedField",
                    name: "sponsored_data",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                ],
              },
              {
                condition:
                  "__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider",
                kind: "Condition",
                passingValue: !0,
                selections: [
                  {
                    alias: "th_dat_spo",
                    args: null,
                    concreteType: "SponsoredData",
                    kind: "LinkedField",
                    name: "sponsored_data",
                    plural: !1,
                    selections: e,
                    storageKey: null,
                  },
                ],
              },
              {
                alias: null,
                args: null,
                concreteType: "StoryAttachment",
                kind: "LinkedField",
                name: "attachments",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "action_links",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "url",
                        storageKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "useCometLeadGenActionLink_actionLink",
                          },
                        ],
                        type: "LeadGenActionLink",
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
        ],
        type: "CometFeedStoryDefaultMessageRenderingStrategy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
