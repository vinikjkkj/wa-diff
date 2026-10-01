__d(
  "WAWebBizAiReplyBotEnabledTimeUpdateMutation",
  [
    "WAWebBizAiReplyBotEnabledTimeUpdateMutation.graphql",
    "WAWebBizAiResponseSettingsV2ScheduleModel",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "XFBBMGenAIBotEnabledTimeType.facebook",
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
    function m(e) {
      var t = r("XFBBMGenAIBotEnabledTimeType.facebook").cast(e.enabled_time);
      return t == null
        ? null
        : e.enabled_time ===
            o("WAWebBizAiResponseSettingsV2ScheduleModel").SCHEDULE_SELECTIVE
          ? {
              enabled_time: t,
              from_sec_in_day: e.from_sec_in_day,
              time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              to_sec_in_day: e.to_sec_in_day,
            }
          : { enabled_time: t };
    }
    function p(e, t) {
      var n = e
        .getRoot()
        .getLinkedRecord("xfb_meta_ai_biz_agent_wa_reply_chat_trigger");
      if (n != null) {
        var r = n.getLinkedRecord("bot_enabled_time");
        if (r == null) {
          var o,
            a =
              "client:xfb_meta_ai_biz_agent_wa_reply_chat_trigger:bot_enabled_time";
          ((r =
            (o = e.get(a)) != null
              ? o
              : e.create(a, "XFBMetaAIBizAgentWAReplyBotEnabledTime")),
            n.setLinkedRecord(r, "bot_enabled_time"));
        }
        (r.setValue(t.enabled_time, "enabled_time"),
          r.setValue(t.from_sec_in_day, "from_sec_in_day"),
          r.setValue(t.to_sec_in_day, "to_sec_in_day"));
      }
    }
    ((l.MUTATION = s),
      (l.updateBotEnabledTime = d),
      (l.toBotEnabledTimeInput = m),
      (l.writeBotEnabledTimeToStore = p));
  },
  98,
);
