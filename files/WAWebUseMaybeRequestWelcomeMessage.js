__d(
  "WAWebUseMaybeRequestWelcomeMessage",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebFrontendChatGetters",
    "WAWebGetMaybeChatById",
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
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t) {
      var n,
        a = o("useWAWebChatValues").useChatValues(t, [
          o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg,
        ]),
        i = a[0],
        l =
          o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          o("WAWebBotGating").isBizBot3pAvailable()
            ? t
            : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(l);
      var s =
          (n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getWelcomeMsgProtocolMode,
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? n
            : [null, null],
        c = s[0],
        d = s[1],
        m = d === !0,
        p = r("useWAWebStableCallback")(function (t, n, r) {
          var a =
            r != null &&
            r !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
          if (
            ((o("WAWebBotBaseGating").isBizBot1pEnabled() && n) ||
              (o("WAWebBotGating").isBizBot3pAvailable() && a)) &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            !i
          ) {
            var l = o("WAWebGetMaybeChatById").getMaybeChatById(t);
            if (l == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot-welcome] welcome request skipped, chat left the collection",
                  ])),
              );
              return;
            }
            o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(l);
          }
        });
      (o("useWAWebListener").useListener(
        o("WAWebTos").TosManager,
        "change",
        function () {
          p(t, m, c);
        },
      ),
        u(
          function () {
            p(t, m, c);
          },
          [t, m, c, p],
        ));
    }
    l.useMaybeRequestWelcomeMessage = c;
  },
  98,
);
