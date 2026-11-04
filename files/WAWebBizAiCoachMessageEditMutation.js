__d(
  "WAWebBizAiCoachMessageEditMutation",
  [
    "WALogger",
    "WAWebBizAiCoachMessageEditMutation.graphql",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiCoachMessageEditMutation.graphql"));
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e == null)
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "BizAI message edit coaching abandoned: consumer identity could not be resolved",
                    ])),
                )
                .sendLogs("biz-ai-message-edit-coaching-missing-consumer"),
              "missing_consumer"
            );
          var a;
          try {
            a = f(e);
          } catch (e) {
            return g(e, "client_failed");
          }
          try {
            yield r("WAWebNetworkStatus").waitIfOffline();
          } catch (e) {
            return g(e, "client_failed");
          }
          try {
            var i,
              l = yield o("WAWebBizAiRelayClient").commitMutation(m, {
                input: {
                  coached_response: { text: n },
                  context: {
                    consumer_logical_id: a.logicalId,
                    consumer_phone_number: a.phoneNumber,
                  },
                  message_id: t,
                  request_id: r("WAWebPonyfillsCryptoRandomUUID")(),
                },
              });
            return (l == null ||
            (i = l.xfb_meta_ai_biz_agent_wa_coach_ai_response) == null
              ? void 0
              : i.success) !== !0
              ? (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI message edit coaching returned non-success",
                      ])),
                  )
                  .sendLogs("biz-ai-message-edit-coaching-rejected"),
                "response_rejected")
              : "success";
          } catch (e) {
            return e instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
              ? (o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "BizAI message edit coaching token fetch failed",
                      ])),
                  )
                  .sendLogs("biz-ai-message-edit-coaching-token-fetch-fail"),
                "token_unavailable")
              : g(e, "request_failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t, n, r, a;
      return {
        logicalId:
          (t =
            (n = o("WAWebLidMigrationUtils").toLid(e)) == null
              ? void 0
              : n.user) != null
            ? t
            : "",
        phoneNumber:
          (r =
            (a = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : a.user) != null
            ? r
            : "",
      };
    }
    function g(e, t) {
      var n = r("getErrorSafe")(e),
        a = o("WAWebFetchAdAccountToken").hasGraphQLAuthError(n);
      return (
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit coaching failed",
              ])),
          )
          .catching(n)
          .sendLogs("biz-ai-message-edit-coaching-failed"),
        a ? "auth_failed" : t
      );
    }
    l.coachAgentMessageEdit = p;
  },
  98,
);
