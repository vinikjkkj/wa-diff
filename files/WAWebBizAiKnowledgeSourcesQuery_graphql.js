__d(
  "WAWebBizAiKnowledgeSourcesQuery.graphql",
  ["WAWebBizAiKnowledgeSourcesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "source_type",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "update_time",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "user_provided_file_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "cdn_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thumbnail_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "file_type",
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
          type: "XFBMetaAIBizAgentFileUploadKnowledgeSource",
          abstractKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null,
          },
        ],
        l = {
          kind: "InlineFragment",
          selections: i,
          type: "XFBMetaAIBizAgentChatHistoryKnowledgeSource",
          abstractKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: i,
          type: "MetaAIBizAgentWebsiteKnowledgeSource",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiKnowledgeSourcesQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAAIHome",
              kind: "LinkedField",
              name: "xfb_meta_ai_biz_agent_wa_ai_home",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "knowledge_sources",
                  plural: !0,
                  selections: [e, t, r, o, a, l, s],
                  storageKey: null,
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiKnowledgeSourcesQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAAIHome",
              kind: "LinkedField",
              name: "xfb_meta_ai_biz_agent_wa_ai_home",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "knowledge_sources",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    e,
                    t,
                    r,
                    o,
                    a,
                    l,
                    s,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAiKnowledgeSourcesQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiKnowledgeSourcesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
