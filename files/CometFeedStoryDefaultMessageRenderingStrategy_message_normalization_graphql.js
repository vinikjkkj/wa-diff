__d(
  "CometFeedStoryDefaultMessageRenderingStrategy_message$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = [
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
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [r];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultMessageRenderingStrategy_message$normalization",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
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
                    fragment: n(
                      "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
                    ),
                    kind: "FragmentSpread",
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
                    selections: t,
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
                    selections: t,
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
                      e,
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
                            kind: "InlineFragment",
                            selections: [
                              {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "dynamic_item_id",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "lead_gen_data_id",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media",
                                    plural: !1,
                                    selections: [
                                      e,
                                      {
                                        alias: "lead_gen_brand_image",
                                        args: [
                                          {
                                            kind: "Literal",
                                            name: "height",
                                            value: 300,
                                          },
                                          {
                                            kind: "Literal",
                                            name: "sizing",
                                            value: "contain-fit",
                                          },
                                          {
                                            kind: "Literal",
                                            name: "width",
                                            value: 548,
                                          },
                                        ],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "image",
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "uri",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "height",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "width",
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey:
                                          'image(height:300,sizing:"contain-fit",width:548)',
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "Node",
                                        abstractKey: "__isNode",
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "CollectionSlideshowMedia",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "DynamicFeedAdAttachmentMedia",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "GenericAttachmentMedia",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "MontageImage",
                                        abstractKey: null,
                                      },
                                      {
                                        kind: "InlineFragment",
                                        selections: o,
                                        type: "MontageVideo",
                                        abstractKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "send_description",
                                    storageKey: null,
                                  },
                                  {
                                    alias: "followUpActionUri",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "follow_up_action_url",
                                    storageKey: null,
                                  },
                                ],
                                type: "LeadGenActionLink",
                                abstractKey: null,
                              },
                            ],
                            type: "StoryActionLink",
                            abstractKey: "__isStoryActionLink",
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
              r,
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
