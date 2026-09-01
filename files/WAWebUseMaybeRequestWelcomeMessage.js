__d(
  "WAWebUseMaybeRequestWelcomeMessage",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebFrontendChatGetters",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t,
        n = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg,
        ]),
        a = n[0],
        i =
          o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          o("WAWebBotGating").isBizBot3pAvailable()
            ? e.id
            : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(i);
      var l =
          (t = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(i, [
            o("WAWebBusinessProfileGetters").getWelcomeMsgProtocolMode,
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? t
            : [null, null],
        u = l[0],
        c = l[1],
        d = c === !0,
        m = r("useWAWebStableCallback")(function () {
          var t =
            u != null &&
            u !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          ((o("WAWebBotBaseGating").isBizBot1pEnabled() && d === !0) ||
            (o("WAWebBotGating").isBizBot3pAvailable() && t)) &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            !a &&
            o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(e);
        });
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", m),
        s(
          function () {
            return m();
          },
          [d, u, e],
        ));
    }
    l.useMaybeRequestWelcomeMessage = u;
  },
  98,
);
