__d(
  "WAWebUseMaybeRequestWelcomeMessage",
  [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t,
        n,
        a = o("useWAWebModelValues").useModelValues(e, [
          "hasRequestedWelcomeMsg",
        ]),
        i = a.hasRequestedWelcomeMsg,
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
          ((n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) == null
            ? void 0
            : n[0]) === !0,
        m = r("useWAWebStableCallback")(function () {
          var t =
            c != null &&
            c !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          ((o("WAWebBotBaseGating").isBizBot1pEnabled() && d === !0) ||
            (o("WAWebBotGating").isBizBot3pAvailable() && t)) &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            !i &&
            o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(e);
        });
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", m),
        s(
          function () {
            return m();
          },
          [d, c, e],
        ));
    }
    l.useMaybeRequestWelcomeMessage = u;
  },
  98,
);
