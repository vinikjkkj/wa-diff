__d(
  "WAWebUseMaybeRequestWelcomeMessage",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t,
        n = o("useWAWebModelValues").useModelValues(e, [
          "hasRequestedWelcomeMsg",
        ]),
        a = n.hasRequestedWelcomeMsg,
        i =
          (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(
            o("WAWebBotBaseGating").isBizBot1pEnabled() ||
              o("WAWebBotGating").isBizBot3pAvailable()
              ? e.id
              : null,
            ["isBizBot1p", "welcomeMsgProtocolMode"],
          )) != null
            ? t
            : {},
        l = i.isBizBot1p,
        u = i.welcomeMsgProtocolMode,
        c = r("useWAWebStableCallback")(function () {
          var t =
            u != null &&
            u !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          ((o("WAWebBotBaseGating").isBizBot1pEnabled() && l === !0) ||
            (o("WAWebBotGating").isBizBot3pAvailable() && t)) &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            !a &&
            o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(e);
        });
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", c),
        s(
          function () {
            return c();
          },
          [l, u, e],
        ));
    }
    l.useMaybeRequestWelcomeMessage = u;
  },
  98,
);
