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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(14),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg]),
          (n[0] = a))
        : (a = n[0]);
      var i = o("useWAWebChatValues").useChatValues(e.id, a),
        l = i[0],
        u =
          o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          o("WAWebBotGating").isBizBot3pAvailable()
            ? e.id
            : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(u);
      var c =
          (t = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(u, [
            o("WAWebBusinessProfileGetters").getWelcomeMsgProtocolMode,
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? t
            : [null, null],
        d = c[0],
        m = c[1],
        p = m === !0,
        _;
      n[1] !== l
        ? ((_ = function (t, n, r) {
            var e =
              r != null &&
              r !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
            ((o("WAWebBotBaseGating").isBizBot1pEnabled() && n) ||
              (o("WAWebBotGating").isBizBot3pAvailable() && e)) &&
              o("WAWebBotTos").hasAcceptedBizBotTos() &&
              !l &&
              o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(t);
          }),
          (n[1] = l),
          (n[2] = _))
        : (_ = n[2]);
      var f = r("useWAWebStableCallback")(_),
        g;
      (n[3] !== e || n[4] !== p || n[5] !== f || n[6] !== d
        ? ((g = function () {
            f(e, p, d);
          }),
          (n[3] = e),
          (n[4] = p),
          (n[5] = f),
          (n[6] = d),
          (n[7] = g))
        : (g = n[7]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          g,
        ));
      var h, y;
      (n[8] !== e || n[9] !== p || n[10] !== f || n[11] !== d
        ? ((h = function () {
            f(e, p, d);
          }),
          (y = [e, p, d, f]),
          (n[8] = e),
          (n[9] = p),
          (n[10] = f),
          (n[11] = d),
          (n[12] = h),
          (n[13] = y))
        : ((h = n[12]), (y = n[13])),
        s(h, y));
    }
    l.useMaybeRequestWelcomeMessage = u;
  },
  98,
);
