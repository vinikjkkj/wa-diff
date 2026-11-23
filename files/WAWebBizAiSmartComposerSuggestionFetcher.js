__d(
  "WAWebBizAiSmartComposerSuggestionFetcher",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBizAiRelayClient",
    "WAWebBizAiSmartComposerErrorMapping",
    "WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
    "WAWebBizAiSmartComposerSuggestionStateMachine",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "err",
    "filterNulls",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql")),
      _ = 2,
      f = 250,
      g = { ok: !1, code: "UNKNOWN" };
    function h(e, t, n) {
      var a = g;
      return o("WAExponentialBackoff")
        .exponentialBackoff(
          {
            minTimeout: f,
            retries: _,
            signal: t,
            timeoutIncludesTaskDuration: !1,
          },
          async function (i) {
            var l = !1,
              s = await y(e, t, function () {
                ((l = !0), n == null || n.onAttemptStarted());
              });
            return (
              (a = s),
              l &&
                (t == null ? void 0 : t.aborted) !== !0 &&
                (n == null || n.onAttemptCompleted(s)),
              !s.ok &&
              o(
                "WAWebBizAiSmartComposerErrorMapping",
              ).isAutoRetryableSuggestedReplyError(s.code)
                ? i(r("err")("suggested-reply %s", s.code))
                : s
            );
          },
        )
        .catch(function () {
          return a;
        });
    }
    async function y(e, t, n) {
      if ((t == null ? void 0 : t.aborted) === !0) return g;
      var a = !1,
        i;
      try {
        var l, d;
        if (
          (await r("WAWebNetworkStatus").waitIfOffline(),
          (t == null ? void 0 : t.aborted) === !0)
        )
          return g;
        ((a = !0),
          n == null || n(),
          (i = await o("WAWebBizAiRelayClient").fetchQuery(p, {
            stanza_id: e.stanzaId,
            consumer_lid: (l = e.consumerLid) != null ? l : "",
            consumer_phone_number: (d = e.consumerPhoneNumber) != null ? d : "",
          })));
      } catch (e) {
        return e instanceof
          o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
          ? (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[SmartComposer] suggested-reply token fetch failed",
                  ])),
              )
              .sendLogs("biz-ai-smart-composer-suggestion-token-fail"),
            g)
          : (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[SmartComposer] suggested-reply fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("biz-ai-smart-composer-suggestion-fetch-fail"),
            { ok: !1, code: a ? C(e) : "UNKNOWN" });
      }
      try {
        return b(i);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] suggested-reply response parsing failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-smart-composer-suggestion-parse-fail"),
          g
        );
      }
    }
    function C(e) {
      if (e instanceof TypeError) return "NETWORK_ERROR";
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t = e.source.httpStatus;
        if (t != null && t >= 500 && t < 600) return "NETWORK_ERROR";
      }
      return "UNKNOWN";
    }
    function b(e) {
      var t,
        n = e == null ? void 0 : e.meta_ai_biz_agent_wa_suggested_reply;
      if (n == null) return { ok: !1, code: "INVALID_RESPONSE" };
      if (n.error_code != null) {
        var r = o(
          "WAWebBizAiSmartComposerErrorMapping",
        ).normalizeSuggestedReplyErrorCode(n.error_code);
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[SmartComposer] suggested-reply returned error code ",
                "",
              ])),
            r,
          ),
          { ok: !1, code: r }
        );
      }
      var a = n.bot_response_id,
        i = n.type;
      if (a == null || a === "" || i == null)
        return { ok: !1, code: "INVALID_RESPONSE" };
      var l = {
        botResponseId: a,
        product: v(n.product),
        suggestionType: i,
        text: (t = n.text) != null ? t : null,
      };
      return (
        o(
          "WAWebBizAiSmartComposerSuggestionStateMachine",
        ).getSuggestionInsertText(l) === "" &&
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] suggested-reply returned no content",
                ])),
            )
            .sendLogs("biz-ai-smart-composer-suggestion-empty"),
        { ok: !0, suggestion: l }
      );
    }
    function v(e) {
      var t, n, o;
      return e == null
        ? null
        : {
            text: (t = e.text) != null ? t : "",
            catalogId: (n = e.catalog_id) != null ? n : "",
            productRetailerIds: r("filterNulls")(
              (o = e.product_retailer_ids) != null ? o : [],
            ),
          };
    }
    l.fetchSuggestedReply = h;
  },
  98,
);
