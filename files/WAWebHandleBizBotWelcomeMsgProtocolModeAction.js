__d(
  "WAWebHandleBizBotWelcomeMsgProtocolModeAction",
  [
    "WAWebApiBusinessProfile",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebBotWelcomeRequestSync",
    "WAWebChatCollection",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (o("WAWebBotGating").isBizBot3pAvailable()) {
        var r = o("WAWebChatCollection").ChatCollection.get(e);
        if (r) {
          var a = t;
          if (!a) {
            var i,
              l = await o(
                "WAWebApiBusinessProfile",
              ).getBusinessProfileRowLidAware(e.toString());
            a =
              (i = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
                l == null ? void 0 : l.welcomeMsgProtocolMode,
              )) != null
                ? i
                : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          }
          var u =
            n != null
              ? n
              : o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          a !== u &&
            u === o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE &&
            (await s(r));
        }
      }
    }
    async function s(e) {
      if (e.hasRequestedWelcomeMsg) {
        e.hasRequestedWelcomeMsg = !1;
        var t = await r(
          "WAWebBotWelcomeRequestSync",
        ).getBotWelcomeRequestSetMutation(e.id, !1);
        await o("WAWebSyncdCoreApi").lockForSync(
          ["chat"],
          [t],
          async function (t) {
            var n = t[0];
            return n.merge(e.id.toString(), { hasRequestedWelcomeMsg: !1 });
          },
        );
      }
    }
    l.handleBizBotWelcomeMsgProtocolModeTransition = e;
  },
  98,
);
