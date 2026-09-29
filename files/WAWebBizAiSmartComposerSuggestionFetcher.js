__d(
  "WAWebBizAiSmartComposerSuggestionFetcher",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBizAiSmartComposerErrorMapping",
    "WAWebBizAiSmartComposerSuggestionFetcherQuery.graphql",
    "WAWebBizAiSmartComposerSuggestionStateMachine",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
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
    function h(e, t, a) {
      var i = g;
      return o("WAExponentialBackoff")
        .exponentialBackoff(
          {
            minTimeout: f,
            retries: _,
            signal: t,
            timeoutIncludesTaskDuration: !1,
          },
          (function () {
            var l = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var l = !1,
                  s = yield y(e, t, function () {
                    ((l = !0), a == null || a.onAttemptStarted());
                  });
                return (
                  (i = s),
                  l &&
                    (t == null ? void 0 : t.aborted) !== !0 &&
                    (a == null || a.onAttemptCompleted(s)),
                  !s.ok &&
                  o(
                    "WAWebBizAiSmartComposerErrorMapping",
                  ).isAutoRetryableSuggestedReplyError(s.code)
                    ? n(r("err")("suggested-reply %s", s.code))
                    : s
                );
              },
            );
            return function (e) {
              return l.apply(this, arguments);
            };
          })(),
        )
        .catch(function () {
          return i;
        });
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if ((t == null ? void 0 : t.aborted) === !0) return g;
          var a = !1,
            i;
          try {
            var l,
              s,
              u = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (u.type !== "success")
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[SmartComposer] suggested-reply token fetch failed",
                      ])),
                  )
                  .sendLogs("biz-ai-smart-composer-suggestion-token-fail"),
                { ok: !1, code: "UNKNOWN" }
              );
            if (
              (yield r("WAWebNetworkStatus").waitIfOffline(),
              (t == null ? void 0 : t.aborted) === !0)
            )
              return g;
            ((a = !0),
              n == null || n(),
              (i = yield o("WAWebRelayClient").fetchQuery(
                p,
                {
                  stanza_id: e.stanzaId,
                  consumer_lid: (l = e.consumerLid) != null ? l : "",
                  consumer_phone_number:
                    (s = e.consumerPhoneNumber) != null ? s : "",
                },
                { environmentType: "facebook", accessToken: u.token },
              )));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[SmartComposer] suggested-reply fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-ai-smart-composer-suggestion-fetch-fail"),
              { ok: !1, code: a ? b(e) : "UNKNOWN" }
            );
          }
          try {
            return v(i);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[SmartComposer] suggested-reply response parsing failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-ai-smart-composer-suggestion-parse-fail"),
              g
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      if (e instanceof TypeError) return "NETWORK_ERROR";
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t = e.source.httpStatus;
        if (t != null && t >= 500 && t < 600) return "NETWORK_ERROR";
      }
      return "UNKNOWN";
    }
    function v(e) {
      var t,
        n = e == null ? void 0 : e.meta_ai_biz_agent_wa_suggested_reply;
      if (n == null) return { ok: !1, code: "INVALID_RESPONSE" };
      if (n.error_code != null) {
        var r = o(
          "WAWebBizAiSmartComposerErrorMapping",
        ).normalizeSuggestedReplyErrorCode(n.error_code);
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
        product: S(n.product),
        suggestionType: i,
        text: (t = n.text) != null ? t : null,
      };
      return (
        o(
          "WAWebBizAiSmartComposerSuggestionStateMachine",
        ).getSuggestionInsertText(l) === "" &&
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] suggested-reply returned no content",
                ])),
            )
            .sendLogs("biz-ai-smart-composer-suggestion-empty"),
        { ok: !0, suggestion: l }
      );
    }
    function S(e) {
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
