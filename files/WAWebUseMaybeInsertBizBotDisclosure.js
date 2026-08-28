__d(
  "WAWebUseMaybeInsertBizBotDisclosure",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebCreateBizBotSysMsgAction",
    "WAWebFrontendChatGetters",
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
        a = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebFrontendChatGetters").getBizBotSystemMsgType,
        ]),
        i = a[0],
        l = o("WAWebBotBaseGating").isBizBot1pEnabled() ? t.id : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(l, [
        "automatedType",
      ]);
      var s =
          (n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? n
            : [],
        c = s[0],
        d = c === !0,
        m = r("useWAWebStableCallback")(function () {
          o("WAWebBotBaseGating").isBizBot1pEnabled() &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            d === !0 &&
            i !== o("WAWebBotTypes").BizBotType.BIZ_1P &&
            o("WAWebCreateBizBotSysMsgAction")
              .maybeCreateBizBot1pDisclosureSysMsg(t)
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "biz_ai: failed to insert 1p disclosure ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("biz-ai-1p-disclosure-insert-failed");
              });
        });
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", m),
        u(
          function () {
            return m();
          },
          [t, d, i, m],
        ));
    }
    l.useMaybeInsertBizBotDisclosure = c;
  },
  98,
);
