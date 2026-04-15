__d(
  "WAWebBizAiReplyBotEnabledTimeUpdateMutation",
  [
    "WAWebBizAiReplyBotEnabledTimeUpdateMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiReplyBotEnabledTimeUpdateMutation.graphql")),
      u = { isSuccess: !0 },
      c = { isSuccess: !1 };
    function d(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      s,
                      {
                        input: {
                          enabled_time: e.enabled_time,
                          time_zone: e.time_zone,
                          from_sec_in_day: e.from_sec_in_day,
                          to_sec_in_day: e.to_sec_in_day,
                        },
                      },
                      { environmentType: "facebook", accessToken: t.token },
                    )
                    .then(function (e) {
                      var t,
                        n =
                          e == null ||
                          (t =
                            e.xfb_meta_ai_biz_agent_wa_update_bot_enabled_time) ==
                            null
                            ? void 0
                            : t.success;
                      return n === !0 ? u : c;
                    })
                    .catch(function (e) {
                      return c;
                    });
                })
            : c;
        });
    }
    l.updateBotEnabledTime = d;
  },
  98,
);
