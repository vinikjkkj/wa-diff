__d(
  "CometAIHTSChatMessageContentV2_message.graphql",
  [],
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
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        n = [t],
        r = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "children",
          plural: !0,
          selections: n,
          storageKey: null,
        },
        o = [t, r],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_url",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "button_text",
          storageKey: null,
        },
        _ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "setting_type",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_name",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_metadata",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_image_uri",
          storageKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "disclaimer",
          storageKey: null,
        },
        C = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_id",
          storageKey: null,
        },
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_id",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_date",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "why_description",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "policy_description",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "universe",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_date",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "no_of_likes",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "no_of_comments",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "listing_id",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_time",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "violation_type",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_state",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_submission_time",
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_image_uri",
          storageKey: null,
        },
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_metadata",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_name",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "accounts",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_instance_id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometAIHTSChatMessageContentV2_message",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "streaming_state",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ComposedTextInstance",
            kind: "LinkedField",
            name: "composed_text_v2",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "nodes_js",
                plural: !0,
                selections: [
                  e,
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2RootNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextRootNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: o,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextRootNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2RootNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2RootNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextRootNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2TextNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextTextNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                a,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "format",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextTextNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2TextNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2TextNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextTextNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2ParagraphNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextParagraphNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: o,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextParagraphNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2ParagraphNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2ParagraphNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextParagraphNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2HeadingNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextHeadingNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [t, i, r],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextHeadingNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2HeadingNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2HeadingNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextHeadingNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2TableNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextTableNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "col_widths",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "row_striping",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "frozen_column_count",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "frozen_row_count",
                                  storageKey: null,
                                },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextTableNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2TableNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2TableNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextTableNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2TableRowNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextTableRowNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "height",
                                  storageKey: null,
                                },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextTableRowNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2TableRowNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2TableRowNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextTableRowNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2TableCellNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextTableCellNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "col_span",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "row_span",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "header_state",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "width",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "background_color",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "vertical_align",
                                  storageKey: null,
                                },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextTableCellNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2TableCellNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2TableCellNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextTableCellNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2ListNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextListNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "list_type",
                                  storageKey: null,
                                },
                                i,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "start",
                                  storageKey: null,
                                },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextListNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2ListNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2ListNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextListNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2ListItemNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextListItemNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "value",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "checked",
                                  storageKey: null,
                                },
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextListItemNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2ListItemNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2ListItemNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextListItemNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2BlockQuoteNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextBlockQuoteNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: o,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextBlockQuoteNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2BlockQuoteNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2BlockQuoteNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextBlockQuoteNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2NewLineNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextNewLineNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextNewLineNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2NewLineNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2NewLineNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextNewLineNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2ThematicBreakNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextThematicBreakNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextThematicBreakNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2ThematicBreakNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2ThematicBreakNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextThematicBreakNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2LinkNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextLinkNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                l,
                                s,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "rel",
                                  storageKey: null,
                                },
                                u,
                                r,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextLinkNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2LinkNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2LinkNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextLinkNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2CodeBlockNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextCodeBlockNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "content",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "language",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextCodeBlockNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2CodeBlockNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometComposedTextV2CodeBlockNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextCodeBlockNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2MathNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextMathNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "expression",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextMathNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2MathNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2MathNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextMathNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometComposedTextV2ImageNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "ComposedTextImageNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "src",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "alt",
                                  storageKey: null,
                                },
                                u,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "ComposedTextImageNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometComposedTextV2ImageNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometComposedTextV2ImageNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "ComposedTextImageNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2TypeaheadNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextTypeaheadNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "searchable_entities",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextTypeaheadNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2TypeaheadNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2TypeaheadNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextTypeaheadNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ButtonGroupNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextButtonGroupNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "header",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "XFBHTSButton",
                                  kind: "LinkedField",
                                  name: "buttons",
                                  plural: !0,
                                  selections: [
                                    e,
                                    {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "CometAIHTSChatComposedTextV2ButtonGroupNodeRenderer_buttons",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "submit_message_prefix",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextButtonGroupNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ButtonGroupNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ButtonGroupNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextButtonGroupNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ProfileListNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextProfileListNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "profiles",
                                  plural: !0,
                                  selections: [
                                    {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "CometAIHTSChatComposedTextV2ProfileListNodeRenderer_profiles",
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextProfileListNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ProfileListNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ProfileListNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextProfileListNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ContentFinderNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextContentFinderNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBHTSChatContentFinderDisplayInfo",
                                  kind: "LinkedField",
                                  name: "content_display_infos",
                                  plural: !0,
                                  selections: [
                                    {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "CometAIHTSChatComposedTextV2ContentFinderNodeRenderer_items",
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextContentFinderNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ContentFinderNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ContentFinderNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextContentFinderNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ReportDetailNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextReportDetailNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBHTSChatReportDetailItemNode",
                                  kind: "LinkedField",
                                  name: "report_detail",
                                  plural: !1,
                                  selections: [
                                    {
                                      args: null,
                                      kind: "FragmentSpread",
                                      name: "CometAIHTSChatComposedTextV2ReportDetailNodeRenderer_reportDetail",
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextReportDetailNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ReportDetailNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ReportDetailNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextReportDetailNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ReportedContentNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextReportedContentNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "content_type",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "author_name",
                                  storageKey: null,
                                },
                                c,
                                u,
                                d,
                                a,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextReportedContentNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ReportedContentNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ReportedContentNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextReportedContentNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ReportSubmissionNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextReportSubmissionNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextReportSubmissionNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ReportSubmissionNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ReportSubmissionNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextReportSubmissionNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ReporterAppealSubmissionNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextReporterAppealSubmissionNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextReporterAppealSubmissionNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ReporterAppealSubmissionNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ReporterAppealSubmissionNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextReporterAppealSubmissionNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2DSLNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "HTSChatComposedTextDSLNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "current_limit",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextDSLNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2DSLNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2DSLNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextDSLNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2DirectLinkNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextDirectLinkNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                d,
                                m,
                                p,
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "fallback_url",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "feature_name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "status",
                                  storageKey: null,
                                },
                                _,
                                f,
                                g,
                                h,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextDirectLinkNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2DirectLinkNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2DirectLinkNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextDirectLinkNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2LanguageChangeFormNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextLanguageChangeFormNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "current_language",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "current_locale",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextLanguageChangeFormNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2LanguageChangeFormNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2LanguageChangeFormNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextLanguageChangeFormNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2NameChangeFormNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextNameChangeFormNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "first_name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "middle_name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "last_name",
                                  storageKey: null,
                                },
                                y,
                                C,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextNameChangeFormNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2NameChangeFormNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2NameChangeFormNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextNameChangeFormNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2IGNameChangeFormNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextIGNameChangeFormNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [t, l, b, y, C],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextIGNameChangeFormNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2IGNameChangeFormNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2IGNameChangeFormNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextIGNameChangeFormNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2IGSelectImpersonatorNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextIGSelectImpersonatorNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextIGSelectImpersonatorNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2IGSelectImpersonatorNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2IGSelectImpersonatorNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextIGSelectImpersonatorNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2IGUsernameChangeFormNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextIGUsernameChangeFormNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "username",
                                  storageKey: null,
                                },
                                C,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "shared_with_threads",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextIGUsernameChangeFormNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2IGUsernameChangeFormNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2IGUsernameChangeFormNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextIGUsernameChangeFormNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2LinkButtonNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextLinkButtonNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "label",
                                  storageKey: null,
                                },
                                _,
                                s,
                                l,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextLinkButtonNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2LinkButtonNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2LinkButtonNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextLinkButtonNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ContentAppealNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextContentAppealNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                v,
                                S,
                                R,
                                l,
                                L,
                                E,
                                k,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_existing_appeal",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "appeal_ineligibility_reason",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_native_parity_enabled",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextContentAppealNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ContentAppealNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ContentAppealNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextContentAppealNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2ContentPreviewNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextContentPreviewNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBHTSChatComposedTextContentPreviewItem",
                                  kind: "LinkedField",
                                  name: "items",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "id",
                                      storageKey: null,
                                    },
                                    l,
                                    S,
                                    I,
                                    R,
                                    T,
                                    D,
                                    x,
                                    k,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "use_split_card",
                                      storageKey: null,
                                    },
                                    L,
                                    E,
                                  ],
                                  storageKey: null,
                                },
                                v,
                                c,
                                S,
                                I,
                                R,
                                T,
                                D,
                                x,
                                k,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextContentPreviewNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2ContentPreviewNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2ContentPreviewNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextContentPreviewNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MarketplacePreviewNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextMarketplacePreviewNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBHTSChatComposedTextMarketplacePreviewItem",
                                  kind: "LinkedField",
                                  name: "items",
                                  plural: !0,
                                  selections: [
                                    $,
                                    l,
                                    b,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "price",
                                      storageKey: null,
                                    },
                                    S,
                                    P,
                                    N,
                                    M,
                                    w,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_eligible_for_self_remediation",
                                  storageKey: null,
                                },
                                $,
                                l,
                                S,
                                P,
                                N,
                                M,
                                w,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextMarketplacePreviewNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MarketplacePreviewNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MarketplacePreviewNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextMarketplacePreviewNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MarketplaceBanPreviewNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextMarketplaceBanPreviewNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "ban_reason",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "can_appeal",
                                  storageKey: null,
                                },
                                $,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "listing_url",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "listing_name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "listing_enforcement",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "listing_enforcement_time",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "listing_violation_type",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextMarketplaceBanPreviewNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MarketplaceBanPreviewNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MarketplaceBanPreviewNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextMarketplaceBanPreviewNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MarketplaceAppealNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextMarketplaceAppealNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [t, $, l, b, S],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextMarketplaceAppealNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MarketplaceAppealNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MarketplaceAppealNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextMarketplaceAppealNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MarketplaceWarningNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextMarketplaceWarningNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                d,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "list_items",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextMarketplaceWarningNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MarketplaceWarningNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MarketplaceWarningNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextMarketplaceWarningNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2FRXNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBHTSChatComposedTextFRXNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "reportable_ent_id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "ufo_key",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextFRXNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2FRXNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2FRXNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextFRXNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2LeaveGroupNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "HTSChatComposedTextLeaveGroupNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "HTSChatComposedTextLeaveGroupGroupInfo",
                                  kind: "LinkedField",
                                  name: "groups",
                                  plural: !0,
                                  selections: [A, F, O, B],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextLeaveGroupNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2LeaveGroupNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2LeaveGroupNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextLeaveGroupNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2SelectGroupNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextSelectGroupNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "HTSChatComposedTextSelectGroupGroupInfo",
                                  kind: "LinkedField",
                                  name: "groups",
                                  plural: !0,
                                  selections: [
                                    A,
                                    F,
                                    O,
                                    B,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_sole_admin",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextSelectGroupNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2SelectGroupNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2SelectGroupNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextSelectGroupNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2SelectImpersonatorNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextSelectImpersonatorNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: n,
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextSelectImpersonatorNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2SelectImpersonatorNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2SelectImpersonatorNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextSelectImpersonatorNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2UpdateContextVariablesNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextUpdateContextVariablesNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "keyvalue",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextUpdateContextVariablesNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2UpdateContextVariablesNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2UpdateContextVariablesNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextUpdateContextVariablesNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2SettingActionCardNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextSettingActionCardNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                p,
                                _,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "setting_value",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_1_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_1_icon",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_2_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_2_icon",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_3_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "info_3_icon",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "success_title",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "success_message",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "loading_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "confirm_title",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "confirm_description",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "confirm_button_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "options",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "current_value",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "footer_text",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "footer_link",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextSettingActionCardNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2SettingActionCardNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2SettingActionCardNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextSettingActionCardNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2NotificationSettingCardNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextNotificationSettingCardNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                d,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "category",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "push_setting_id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "push_value",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "email_setting_id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "email_value",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "sms_setting_id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "sms_value",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextNotificationSettingCardNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2NotificationSettingCardNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2NotificationSettingCardNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextNotificationSettingCardNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2PageDeletionNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextPageDeletionNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                u,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBHTSChatComposedTextPageDeletionPageInfo",
                                  kind: "LinkedField",
                                  name: "pages",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "page_id",
                                      storageKey: null,
                                    },
                                    h,
                                    f,
                                    g,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_deactivated",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextPageDeletionNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2PageDeletionNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2PageDeletionNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextPageDeletionNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2AccountDeactivationNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextAccountDeactivationNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                W,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "is_feta_account",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextAccountDeactivationNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2AccountDeactivationNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2AccountDeactivationNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextAccountDeactivationNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2AccountSettingDeeplinkNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextAccountSettingDeeplinkNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [t, u, d, p, W, _],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextAccountSettingDeeplinkNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2AccountSettingDeeplinkNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2AccountSettingDeeplinkNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextAccountSettingDeeplinkNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2CaptchaChallengeNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextCaptchaChallengeNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                c,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "audio_url",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "audio_player_url",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextCaptchaChallengeNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2CaptchaChallengeNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2CaptchaChallengeNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextCaptchaChallengeNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2FeatureLimitsNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextFeatureLimitsNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "account_status_url",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "HTSChatComposedTextFeatureLimitsItem",
                                  kind: "LinkedField",
                                  name: "items",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "instance_id",
                                      storageKey: null,
                                    },
                                    q,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "restriction_name",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "end_date",
                                      storageKey: null,
                                    },
                                    N,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "violation_date",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "entity_type",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "entity_id",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "entity_name",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_behavioral",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "enable_behavioral_appeal",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "behavioral_policy_name",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "behavioral_policy_description",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextFeatureLimitsNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2FeatureLimitsNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2FeatureLimitsNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextFeatureLimitsNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2BehavioralPolicyDetailNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextBehavioralPolicyDetailNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "policy_name",
                                  storageKey: null,
                                },
                                E,
                                q,
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextBehavioralPolicyDetailNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2BehavioralPolicyDetailNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2BehavioralPolicyDetailNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextBehavioralPolicyDetailNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MessageWithSourcesNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextMessageWithSourcesNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "sources_json",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextMessageWithSourcesNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MessageWithSourcesNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MessageWithSourcesNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextMessageWithSourcesNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIHTSChatComposedTextV2MemorializationWizardNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "HTSChatComposedTextMemorializationWizardNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "data",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "HTSChatComposedTextMemorializationWizardNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIHTSChatComposedTextV2MemorializationWizardNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName:
                          "cometAIHTSChatComposedTextV2MemorializationWizardNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "HTSChatComposedTextMemorializationWizardNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAISecurityLevelNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextSecurityLevelNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "level_label",
                                  storageKey: null,
                                },
                                m,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "score",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "score_max",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextSecurityLevelNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAISecurityLevelNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometAISecurityLevelNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextSecurityLevelNodeRenderer",
                    abstractKey: null,
                  },
                  {
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "cometAIChangePasswordFormNodeRelay_data",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBHTSChatComposedTextPasswordChangeFormNode",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [t, e],
                              storageKey: null,
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      type: "XFBHTSChatComposedTextPasswordChangeFormNodeRenderer",
                      abstractKey: null,
                    },
                    kind: "AliasedInlineFragmentSpread",
                    name: "cometAIChangePasswordFormNodeRelay_data",
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        documentName:
                          "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                        fragmentName: "cometAIChangePasswordFormNodeRelay_node",
                        fragmentPropName: "node",
                        kind: "ModuleImport",
                      },
                    ],
                    type: "XFBHTSChatComposedTextPasswordChangeFormNodeRenderer",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometAIChatMessage",
        abstractKey: "__isCometAIChatMessage",
      };
    })();
    a.exports = e;
  },
  null,
);
