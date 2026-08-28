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
        n,
        a = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg,
        ]),
        i = a[0],
        l =
          o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          o("WAWebBotGating").isBizBot3pAvailable()
            ? e.id
            : null,
        u =
          (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(l, [
            "automatedType",
            "welcomeMsgProtocolMode",
          ])) != null
            ? t
            : {},
        c = u.welcomeMsgProtocolMode,
        d =
          (n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? n
            : [],
        m = d[0],
        p = m === !0,
        _ = r("useWAWebStableCallback")(function () {
          var t =
            c != null &&
            c !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          ((o("WAWebBotBaseGating").isBizBot1pEnabled() && p === !0) ||
            (o("WAWebBotGating").isBizBot3pAvailable() && t)) &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            !i &&
            o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(e);
        });
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", _),
        s(
          function () {
            return _();
          },
          [p, c, e],
        ));
    }
    l.useMaybeRequestWelcomeMessage = u;
  },
  98,
);
