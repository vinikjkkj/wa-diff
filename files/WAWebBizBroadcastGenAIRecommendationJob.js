__d(
  "WAWebBizBroadcastGenAIRecommendationJob",
  [
    "WALogger",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastGenAIRecommendationJobQuery.graphql",
    "WAWebDBMessageFindLocal",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastGenAIRecommendationJobQuery.graphql")),
      m = 5;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebBizBroadcastGenAIGating").isMessageHistoryEnabled())
            return [];
          try {
            var t = o("WAWebWidFactory").createWid(e),
              n = yield o("WAWebDBMessageFindLocal").msgFindBefore({
                anchor: { remote: t },
                count: m,
              }),
              r = n.messages,
              a = [];
            for (var i of r)
              i.body != null && i.body !== "" && a.push({ content: i.body });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:genai] Found ",
                    " messages for broadcastJid=",
                    "",
                  ])),
                a.length,
                e,
              ),
              a
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:genai] Failed to fetch message history",
                    ])),
                )
                .sendLogs("genai-message-history-error"),
              []
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          yield r("WAWebNetworkStatus").waitIfOffline();
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success") return { type: "auth-failure" };
          var a = n.token,
            i = (t = e.broadcastJids) == null ? void 0 : t[0],
            l = i != null ? yield p(i) : [];
          try {
            var s = yield o("WAWebRelayClient").fetchQuery(
              d,
              {
                data: {
                  actor_id: a.bp_id,
                  model: e.model,
                  user_info:
                    l.length > 0
                      ? JSON.stringify({ message_history: l })
                      : void 0,
                  user_message_draft: e.userMessageDraft,
                  user_prompt: e.userPrompt,
                },
              },
              { accessToken: a, environmentType: "facebook" },
            );
            return h(s);
          } catch (e) {
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:genai] failed with error",
                  ])),
              ),
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { error: e, type: "graphql-error" }
                : { type: "error" }
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t =
          e == null ? void 0 : e.xwa_business_broadcast_genai_recommendation,
        n = t == null ? void 0 : t.response;
      if (n == null) return { type: "error" };
      if (n.tone_message_pair != null) {
        var r,
          o = [],
          a = n.tone_message_pair;
        for (var i of a)
          i != null && o.push({ message: i.message, tone: i.tone });
        return {
          followUps: (r = n.follow_ups) != null ? r : [],
          toneMessagePairs: o,
          type: "success",
        };
      }
      return n.error_message != null || n.error_code != null
        ? {
            errorCode: n.error_code,
            errorMessage: n.error_message,
            type: "error",
          }
        : { type: "error" };
    }
    l.fetchBroadcastGenAIRecommendation = f;
  },
  98,
);
