__d(
  "WAWebBizBroadcastGenAIRecommendationJob",
  [
    "WALogger",
    "WAWebBizBroadcastGenAIRecommendationJobQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastGenAIRecommendationJobQuery.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success") return { type: "auth-failure" };
          var n = t.token;
          try {
            var a = yield o("WAWebRelayClient").fetchQuery(
              u,
              {
                data: {
                  actor_id: n.bp_id,
                  model: e.model,
                  user_message_draft: e.userMessageDraft,
                  user_prompt: e.userPrompt,
                },
              },
              { accessToken: n, environmentType: "facebook" },
            );
            return m(a);
          } catch (e) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:genai] failed with error",
                  ])),
              ),
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { error: e, type: "graphql-error" }
                : { type: "error" }
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
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
    l.fetchBroadcastGenAIRecommendation = c;
  },
  98,
);
