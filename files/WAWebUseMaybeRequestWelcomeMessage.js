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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(14),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebFrontendChatGetters").getHasRequestedWelcomeMsg]),
          (a[0] = i))
        : (i = a[0]);
      var l = o("useWAWebChatValues").useChatValues(t, i),
        s = l[0],
        c =
          o("WAWebBotBaseGating").isBizBot1pEnabled() ||
          o("WAWebBotGating").isBizBot3pAvailable()
            ? t
            : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(c);
      var d =
          (n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(c, [
            o("WAWebBusinessProfileGetters").getWelcomeMsgProtocolMode,
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? n
            : [null, null],
        m = d[0],
        p = d[1],
        _ = p === !0,
        f;
      a[1] !== s
        ? ((f = function (n, r, a) {
            var t =
              a != null &&
              a !== o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
            if (
              ((o("WAWebBotBaseGating").isBizBot1pEnabled() && r) ||
                (o("WAWebBotGating").isBizBot3pAvailable() && t)) &&
              o("WAWebBotTos").hasAcceptedBizBotTos() &&
              !s
            ) {
              var i = o("WAWebGetMaybeChatById").getMaybeChatById(n);
              if (i == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot-welcome] welcome request skipped, chat left the collection",
                    ])),
                );
                return;
              }
              o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(i);
            }
          }),
          (a[1] = s),
          (a[2] = f))
        : (f = a[2]);
      var g = r("useWAWebStableCallback")(f),
        h;
      (a[3] !== t || a[4] !== _ || a[5] !== g || a[6] !== m
        ? ((h = function () {
            g(t, _, m);
          }),
          (a[3] = t),
          (a[4] = _),
          (a[5] = g),
          (a[6] = m),
          (a[7] = h))
        : (h = a[7]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          h,
        ));
      var y, C;
      (a[8] !== t || a[9] !== _ || a[10] !== g || a[11] !== m
        ? ((y = function () {
            g(t, _, m);
          }),
          (C = [t, _, m, g]),
          (a[8] = t),
          (a[9] = _),
          (a[10] = g),
          (a[11] = m),
          (a[12] = y),
          (a[13] = C))
        : ((y = a[12]), (C = a[13])),
        u(y, C));
    }
    l.useMaybeRequestWelcomeMessage = c;
  },
  98,
);
