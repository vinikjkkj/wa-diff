__d(
  "WAWebAiAgentAutoReplyControlMutation",
  [
    "Promise",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation.graphql",
    "WAWebBizAiAgentGating",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLFetchFailure",
    "WAWebGraphQLServerError",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebAiAgentAutoReplyControlMutation.graphql")),
      h = { isSuccess: !1 };
    function y(e, t) {
      var r, a;
      if (!o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled())
        return (f || (f = n("Promise"))).resolve(h);
      var i =
          (r = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : r.user,
        l = (a = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : a.user;
      return C(l, i, t);
    }
    function C(e, t, n) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebBizAiRelayClient")
            .commitMutation(g, {
              consumer_lid: t != null ? t : "",
              phone_number: e != null ? e : "",
              thread_status: n,
            })
            .then(function (e) {
              var t =
                e == null ? void 0 : e.xfb_whatsapp_smb_maiba_status_update;
              if ((t == null ? void 0 : t.success) === !0) {
                var n = t.update_timestamp_ms,
                  r = n != null && n !== "" ? Number(n) : null;
                return {
                  isSuccess: !0,
                  updateTimestampMs: r != null && Number.isFinite(r) ? r : null,
                };
              }
              return (
                S({
                  reason: "success=" + String(t == null ? void 0 : t.success),
                  type: "rejected",
                }),
                h
              );
            })
            .catch(function (e) {
              return (S(b(e)), h);
            });
        });
    }
    function b(e) {
      return e instanceof
        o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
        ? { type: "token-failed" }
        : e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
          ? { type: "auth-failed" }
          : o("WAWebGraphQLFetchFailure").getGraphQLFetchFailureStage(e) != null
            ? { type: "connection-lost" }
            : { reason: v(e), type: "request-failed" };
    }
    function v(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t,
          n,
          r,
          a = (
            (t = (n = e.source) == null ? void 0 : n.errors) != null ? t : []
          )
            .map(function (e) {
              var t = e.code;
              return t;
            })
            .join(",");
        return (
          "codes=" +
          a +
          " http=" +
          String((r = e.source) == null ? void 0 : r.httpStatus)
        );
      }
      return e instanceof Error ? e.name : typeof e;
    }
    function S(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "auth-failed"
        ) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] auto-reply status mutation failed (auth)",
                ])),
            )
            .sendLogs("maiba-mutate-ai-reply-failed-auth");
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "connection-lost"
        ) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] auto-reply status mutation lost its connection",
                ])),
            )
            .verbose();
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "rejected" &&
          "reason" in t
        ) {
          var n = t.reason;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] auto-reply status mutation rejected reason=",
                "",
              ])),
            n,
          ),
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] auto-reply status mutation rejected",
                  ])),
              )
              .sendLogs("maiba-mutate-ai-reply-rejected"));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "request-failed" &&
          "reason" in t
        ) {
          var r = t.reason;
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] auto-reply status mutation failure reason=",
                "",
              ])),
            r,
          ),
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] auto-reply status mutation failed",
                  ])),
              )
              .sendLogs("maiba-mutate-ai-reply-request-failed"));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "token-failed"
        ) {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] auto-reply status mutation token fetch failed",
                ])),
            )
            .sendLogs("maiba-mutate-ai-reply-token-fetch-failed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    l.changeAiReplyStatus = y;
  },
  98,
);
