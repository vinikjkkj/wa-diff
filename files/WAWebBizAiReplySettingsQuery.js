__d(
  "WAWebBizAiReplySettingsQuery",
  [
    "WAWebBizAiReplySettingsQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizAiReplySettingsQuery.graphql")),
      u = { isSuccess: !1 };
    function c() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .fetchQuery(
                      s,
                      {},
                      { environmentType: "facebook", accessToken: e.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_meta_ai_biz_agent_wa_reply_chat_trigger;
                      if (t == null) return u;
                      var n = t.bot_enabled_time;
                      return {
                        isSuccess: !0,
                        data: {
                          trigger_chat_type: t.trigger_chat_type,
                          bot_enabled_time:
                            n != null
                              ? {
                                  enabled_time: n.enabled_time,
                                  from_sec_in_day: n.from_sec_in_day,
                                  to_sec_in_day: n.to_sec_in_day,
                                  time_zone: n.time_zone,
                                }
                              : null,
                        },
                      };
                    })
                    .catch(function (e) {
                      return u;
                    });
                })
            : u;
        });
    }
    l.fetchReplySettings = c;
  },
  98,
);
