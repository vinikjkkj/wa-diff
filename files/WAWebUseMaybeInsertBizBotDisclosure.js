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
    "WAWebGetMaybeChatById",
    "WAWebTos",
    "WAWebUseBusinessProfile.react",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useEffect;
    function d(e) {
      var t,
        n = o("useWAWebChatValues").useChatValues(e, [
          o("WAWebFrontendChatGetters").getBizBotSystemMsgType,
        ]),
        r = n[0],
        a = o("WAWebBotBaseGating").isBizBot1pEnabled() ? e : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(a);
      var i =
          (t = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(a, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? t
            : [],
        l = i[0],
        s = l === !0;
      (o("useWAWebListener").useListener(
        o("WAWebTos").TosManager,
        "change",
        function () {
          m(e, s, r);
        },
      ),
        c(
          function () {
            m(e, s, r);
          },
          [e, s, r],
        ));
    }
    function m(t, n, r) {
      if (
        o("WAWebBotBaseGating").isBizBot1pEnabled() &&
        o("WAWebBotTos").hasAcceptedBizBotTos() &&
        n &&
        r !== o("WAWebBotTypes").BizBotType.BIZ_1P
      ) {
        var a = o("WAWebGetMaybeChatById").getMaybeChatById(t);
        if (a == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[biz-bot-disclosure] action skipped, chat left the collection",
              ])),
          );
          return;
        }
        o("WAWebCreateBizBotSysMsgAction")
          .maybeCreateBizBot1pDisclosureSysMsg(a)
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "biz_ai: failed to insert 1p disclosure ",
                    "",
                  ])),
                e,
              )
              .sendLogs("biz-ai-1p-disclosure-insert-failed");
          });
      }
    }
    l.useMaybeInsertBizBotDisclosure = d;
  },
  98,
);
