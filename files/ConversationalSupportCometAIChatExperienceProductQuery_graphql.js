__d(
  "ConversationalSupportCometAIChatExperienceProductQuery.graphql",
  [
    "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
    "ConversationalSupportCometAIChatExperienceProductQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "messaging_user_id",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "messaging_user_token",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "scale" },
        a = [{ kind: "Variable", name: "input", variableName: "input" }],
        i = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__id",
              storageKey: null,
            },
          ],
        },
        l = {
          kind: "Variable",
          name: "messaging_user_id",
          variableName: "messaging_user_id",
        },
        s = {
          kind: "Variable",
          name: "messaging_user_token",
          variableName: "messaging_user_token",
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          kind: "TypeDiscriminator",
          abstractKey: "__isXFBCometAIHTSChatProduct",
        },
        m = [{ kind: "Literal", name: "last", value: 10 }, l, s],
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        _ = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "nodes_js",
          plural: !0,
          selections: [u],
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "children",
          plural: !0,
          selections: [u, f],
          storageKey: null,
        },
        h = [f, g],
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tag",
          storageKey: null,
        },
        C = [f],
        b = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        v = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_type",
          storageKey: null,
        },
        I = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_url",
          storageKey: null,
        },
        T = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        x = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        $ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "button_text",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "setting_type",
          storageKey: null,
        },
        N = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_name",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_metadata",
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_image_uri",
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "disclaimer",
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "identity_id",
          storageKey: null,
        },
        O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content_id",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_date",
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "why_description",
          storageKey: null,
        },
        U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "policy_description",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "universe",
          storageKey: null,
        },
        H = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal",
          storageKey: null,
        },
        G = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_date",
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "no_of_likes",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "no_of_comments",
          storageKey: null,
        },
        K = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "listing_id",
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_time",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "violation_type",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_state",
          storageKey: null,
        },
        J = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "appeal_submission_time",
          storageKey: null,
        },
        Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_id",
          storageKey: null,
        },
        ee = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_image_uri",
          storageKey: null,
        },
        te = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_metadata",
          storageKey: null,
        },
        ne = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "group_name",
          storageKey: null,
        },
        re = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "accounts",
          storageKey: null,
        },
        oe = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforcement_instance_id",
          storageKey: null,
        },
        ae = [{ kind: "Variable", name: "scale", variableName: "scale" }],
        ie = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_uri",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "ConversationalSupportCometAIChatExperienceProductQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_comet_ai_hts_chat_product_from_token",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CometAIHTSMessageThread",
                  kind: "LinkedField",
                  name: "thread",
                  plural: !1,
                  selections: [i],
                  storageKey: null,
                },
                {
                  args: [l, s],
                  kind: "FragmentSpread",
                  name: "CometAIHTSChat_product",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CometAIHTSChatFeatures",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [o, e, t, r],
          kind: "Operation",
          name: "ConversationalSupportCometAIChatExperienceProductQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_comet_ai_hts_chat_product_from_token",
              plural: !1,
              selections: [
                u,
                {
                  alias: null,
                  args: null,
                  concreteType: "CometAIHTSMessageThread",
                  kind: "LinkedField",
                  name: "thread",
                  plural: !1,
                  selections: [c, i],
                  storageKey: null,
                },
                d,
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "CometAIHTSChat_product$defer$CometAIHTSChat_threadMessages_1FfgRI",
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "CometAIHTSMessageThread",
                      kind: "LinkedField",
                      name: "thread",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: m,
                          concreteType:
                            "CometAIHTSMessageThreadMessagesConnection",
                          kind: "LinkedField",
                          name: "messages",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "CometAIHTSMessageThreadMessagesEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                u,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    u,
                                    c,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_hidden",
                                      storageKey: null,
                                    },
                                    p,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "user",
                                      storageKey: null,
                                    },
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
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "attachments",
                                      plural: !0,
                                      selections: [
                                        u,
                                        c,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "ComposedTextInstance",
                                              kind: "LinkedField",
                                              name: "composed_text_v2",
                                              plural: !1,
                                              selections: [_],
                                              storageKey: null,
                                            },
                                            {
                                              args: null,
                                              documentName:
                                                "CometAIHTSChatMessage_message",
                                              fragmentName:
                                                "CometAIHTSMarkdownAttachment_data",
                                              fragmentPropName: "data",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBCometAIHTSMarkdownAttachment",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "file_url",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "file_name",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "mime_type",
                                              storageKey: null,
                                            },
                                          ],
                                          type: "XFBCometAIHTSUserFileAttachment",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometAIHTSChatMessage_message",
                                              fragmentName:
                                                "CometAIHTSQRCodeImageMessage_data",
                                              fragmentPropName: "data",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBCometAIHTSQRCodeImageAttachment",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometAIHTSChatMessage_message",
                                              fragmentName:
                                                "CometAIHTSOptionsMessage_data",
                                              fragmentPropName: "data",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBCometAIHTSOptionsAttachment",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometAIHTSChatMessage_message",
                                              fragmentName:
                                                "CometAIHTSUnifiedResponseAttachment_data",
                                              fragmentPropName: "data",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBCometAIHTSUnifiedResponseAttachment",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              args: null,
                                              documentName:
                                                "CometAIHTSChatMessage_message",
                                              fragmentName:
                                                "CometAIHTSSurveyCardAttachment_data",
                                              fragmentPropName: "data",
                                              kind: "ModuleImport",
                                            },
                                          ],
                                          type: "XFBCometAIHTSSurveyCardAttachment",
                                          abstractKey: null,
                                        },
                                      ],
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
                                        _,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "nodes_js",
                                          plural: !0,
                                          selections: [
                                            u,
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextRootNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: h,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextRootNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2RootNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextRootNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextTextNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    p,
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
                                              type: "ComposedTextTextNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2TextNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextTextNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextParagraphNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: h,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextParagraphNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextHeadingNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [f, y, g],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextHeadingNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextTableNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextTableNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2TableNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextTableNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextTableRowNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "height",
                                                      storageKey: null,
                                                    },
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextTableRowNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextTableCellNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextTableCellNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextListNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "list_type",
                                                      storageKey: null,
                                                    },
                                                    y,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "start",
                                                      storageKey: null,
                                                    },
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextListNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2ListNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextListNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextListItemNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextListItemNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextBlockQuoteNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: h,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextBlockQuoteNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextNewLineNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextNewLineNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextThematicBreakNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextThematicBreakNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextLinkNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    b,
                                                    v,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "rel",
                                                      storageKey: null,
                                                    },
                                                    S,
                                                    g,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextLinkNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2LinkNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextLinkNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextCodeBlockNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    R,
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
                                              type: "ComposedTextCodeBlockNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextMathNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                              type: "ComposedTextMathNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2MathNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextMathNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "ComposedTextImageNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                                    S,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "ComposedTextImageNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometComposedTextV2ImageNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "ComposedTextImageNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
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
                                                    f,
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
                                              type: "XFBHTSChatComposedTextTypeaheadNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                                      concreteType:
                                                        "XFBHTSButton",
                                                      kind: "LinkedField",
                                                      name: "buttons",
                                                      plural: !0,
                                                      selections: [
                                                        u,
                                                        L,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "icon",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "postback",
                                                          storageKey: null,
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
                                              type: "XFBHTSChatComposedTextButtonGroupNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "profiles",
                                                      plural: !0,
                                                      selections: [
                                                        u,
                                                        {
                                                          kind: "TypeDiscriminator",
                                                          abstractKey:
                                                            "__isActor",
                                                        },
                                                        c,
                                                        E,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          concreteType: "Image",
                                                          kind: "LinkedField",
                                                          name: "profile_picture",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "uri",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              concreteType:
                                                                "PageFollowersConnection",
                                                              kind: "LinkedField",
                                                              name: "page_followers",
                                                              plural: !1,
                                                              selections: [
                                                                {
                                                                  alias: null,
                                                                  args: null,
                                                                  kind: "ScalarField",
                                                                  name: "count",
                                                                  storageKey:
                                                                    null,
                                                                },
                                                              ],
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          type: "Page",
                                                          abstractKey: null,
                                                        },
                                                        {
                                                          kind: "InlineFragment",
                                                          selections: [
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "mutual_contacts_count",
                                                              storageKey: null,
                                                            },
                                                            {
                                                              alias: null,
                                                              args: null,
                                                              kind: "ScalarField",
                                                              name: "follower_count",
                                                              storageKey: null,
                                                            },
                                                          ],
                                                          type: "User",
                                                          abstractKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextProfileListNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "ent_id",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "reportable_id",
                                                          storageKey: null,
                                                        },
                                                        k,
                                                        S,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "body",
                                                          storageKey: null,
                                                        },
                                                        I,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "is_taken_down",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextContentFinderNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "report_id",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "responsible_name",
                                                          storageKey: null,
                                                        },
                                                        T,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "platform",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "review_report_type",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "correspondence_title",
                                                          storageKey: null,
                                                        },
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "correspondence_body",
                                                          storageKey: null,
                                                        },
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextReportDetailNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    k,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "author_name",
                                                      storageKey: null,
                                                    },
                                                    I,
                                                    S,
                                                    D,
                                                    p,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextReportedContentNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "HTSChatComposedTextReportSubmissionNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "HTSChatComposedTextReportSubmissionNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "HTSChatComposedTextReporterAppealSubmissionNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "HTSChatComposedTextReporterAppealSubmissionNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "HTSChatComposedTextDSLNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                              type: "HTSChatComposedTextDSLNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    S,
                                                    D,
                                                    x,
                                                    $,
                                                    b,
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
                                                    T,
                                                    P,
                                                    N,
                                                    M,
                                                    w,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextDirectLinkNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                              type: "XFBHTSChatComposedTextLanguageChangeFormNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    b,
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
                                                    A,
                                                    F,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextNameChangeFormNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextIGNameChangeFormNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [f, b, E, A, F],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextIGNameChangeFormNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextIGSelectImpersonatorNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextIGSelectImpersonatorNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    b,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "username",
                                                      storageKey: null,
                                                    },
                                                    F,
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
                                              type: "XFBHTSChatComposedTextIGUsernameChangeFormNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextLinkButtonNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [f, L, P, v, b],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextLinkButtonNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    O,
                                                    B,
                                                    W,
                                                    b,
                                                    q,
                                                    U,
                                                    V,
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
                                              type: "XFBHTSChatComposedTextContentAppealNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "XFBHTSChatComposedTextContentPreviewItem",
                                                      kind: "LinkedField",
                                                      name: "items",
                                                      plural: !0,
                                                      selections: [
                                                        c,
                                                        b,
                                                        B,
                                                        H,
                                                        W,
                                                        G,
                                                        z,
                                                        j,
                                                        V,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "use_split_card",
                                                          storageKey: null,
                                                        },
                                                        q,
                                                        U,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    O,
                                                    I,
                                                    B,
                                                    H,
                                                    W,
                                                    G,
                                                    z,
                                                    j,
                                                    V,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextContentPreviewNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "XFBHTSChatComposedTextMarketplacePreviewItem",
                                                      kind: "LinkedField",
                                                      name: "items",
                                                      plural: !0,
                                                      selections: [
                                                        K,
                                                        b,
                                                        E,
                                                        {
                                                          alias: null,
                                                          args: null,
                                                          kind: "ScalarField",
                                                          name: "price",
                                                          storageKey: null,
                                                        },
                                                        B,
                                                        Q,
                                                        X,
                                                        Y,
                                                        J,
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
                                                    K,
                                                    b,
                                                    B,
                                                    Q,
                                                    X,
                                                    Y,
                                                    J,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextMarketplacePreviewNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                                    K,
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
                                              type: "HTSChatComposedTextMarketplaceBanPreviewNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextMarketplaceAppealNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [f, K, b, E, B],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextMarketplaceAppealNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    D,
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
                                              type: "XFBHTSChatComposedTextMarketplaceWarningNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextFRXNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
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
                                              type: "XFBHTSChatComposedTextFRXNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "HTSChatComposedTextLeaveGroupNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    S,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "HTSChatComposedTextLeaveGroupGroupInfo",
                                                      kind: "LinkedField",
                                                      name: "groups",
                                                      plural: !0,
                                                      selections: [
                                                        Z,
                                                        ee,
                                                        te,
                                                        ne,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "HTSChatComposedTextLeaveGroupNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    S,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType:
                                                        "HTSChatComposedTextSelectGroupGroupInfo",
                                                      kind: "LinkedField",
                                                      name: "groups",
                                                      plural: !0,
                                                      selections: [
                                                        Z,
                                                        ee,
                                                        te,
                                                        ne,
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
                                              type: "HTSChatComposedTextSelectGroupNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextSelectImpersonatorNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: C,
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextSelectImpersonatorNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                              type: "XFBHTSChatComposedTextUpdateContextVariablesNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    S,
                                                    $,
                                                    P,
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
                                              type: "XFBHTSChatComposedTextSettingActionCardNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    S,
                                                    D,
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
                                              type: "HTSChatComposedTextNotificationSettingCardNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    S,
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
                                                        w,
                                                        N,
                                                        M,
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
                                              type: "XFBHTSChatComposedTextPageDeletionNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    re,
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
                                              type: "HTSChatComposedTextAccountDeactivationNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "HTSChatComposedTextAccountSettingDeeplinkNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [
                                                    f,
                                                    S,
                                                    D,
                                                    $,
                                                    re,
                                                    P,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "HTSChatComposedTextAccountSettingDeeplinkNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    I,
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
                                              type: "HTSChatComposedTextCaptchaChallengeNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                                        oe,
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
                                                        X,
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
                                              type: "HTSChatComposedTextFeatureLimitsNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "policy_name",
                                                      storageKey: null,
                                                    },
                                                    U,
                                                    oe,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "HTSChatComposedTextBehavioralPolicyDetailNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                              type: "XFBHTSChatComposedTextMessageWithSourcesNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
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
                                              type: "HTSChatComposedTextMemorializationWizardNodeRenderer",
                                              abstractKey: null,
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
                                              kind: "InlineFragment",
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
                                                    f,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      kind: "ScalarField",
                                                      name: "level_label",
                                                      storageKey: null,
                                                    },
                                                    x,
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
                                              type: "XFBHTSChatComposedTextSecurityLevelNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometAISecurityLevelNodeRelay_node",
                                                  fragmentPropName: "node",
                                                  kind: "ModuleImport",
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextSecurityLevelNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "XFBHTSChatComposedTextPasswordChangeFormNode",
                                                  kind: "LinkedField",
                                                  name: "node",
                                                  plural: !1,
                                                  selections: [f, u],
                                                  storageKey: null,
                                                },
                                              ],
                                              type: "XFBHTSChatComposedTextPasswordChangeFormNodeRenderer",
                                              abstractKey: null,
                                            },
                                            {
                                              kind: "InlineFragment",
                                              selections: [
                                                {
                                                  args: null,
                                                  documentName:
                                                    "CometAIHTSChatMessageContentV2_message_composed_text_v2",
                                                  fragmentName:
                                                    "cometAIChangePasswordFormNodeRelay_node",
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
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "completed_setting_updates",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "failed_setting_updates",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "CometAIHTSThinkingHeadingSection",
                                          kind: "LinkedField",
                                          name: "thinking_headings",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "heading",
                                              storageKey: null,
                                            },
                                            R,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "XFBCometAIHTSChatMessage",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "TypeDiscriminator",
                                      abstractKey: "__isCometAIChatMessage",
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "sreaming_state_display_text",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "num_tokens",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "sender_name",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "cursor",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "PageInfo",
                              kind: "LinkedField",
                              name: "page_info",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_previous_page",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "start_cursor",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: m,
                          filters: [
                            "messaging_user_id",
                            "messaging_user_token",
                          ],
                          handle: "connection",
                          key: "CometAIHTSChat_product_messageThread_messages",
                          kind: "LinkedHandle",
                          name: "messages",
                        },
                        c,
                      ],
                      storageKey: null,
                    },
                  ],
                },
                {
                  alias: null,
                  args: ae,
                  concreteType: "XFBCometAIHTSChatHeaderContent",
                  kind: "LinkedField",
                  name: "header_content",
                  plural: !1,
                  selections: [
                    S,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "logo_uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "bot_type_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: ae,
                  concreteType: "XFBCometAIHTSChatEmptyStateContent",
                  kind: "LinkedField",
                  name: "empty_state_content",
                  plural: !1,
                  selections: [
                    S,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "summary",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "TextWithEntities",
                      kind: "LinkedField",
                      name: "subtitle",
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
                    ie,
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "XFBCometAIHTSChatConversationStarterPrompt",
                      kind: "LinkedField",
                      name: "conversation_starter_prompts",
                      plural: !0,
                      selections: [
                        S,
                        D,
                        ie,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "action_url",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "action_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "echo_override",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "topic_id",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "speech_auth_token",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "features",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "ConversationalSupportCometAIChatExperienceProductQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "ConversationalSupportCometAIChatExperienceProductQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
