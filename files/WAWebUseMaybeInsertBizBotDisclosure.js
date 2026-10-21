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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(10),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebFrontendChatGetters").getBizBotSystemMsgType]),
          (n[0] = r))
        : (r = n[0]);
      var a = o("useWAWebChatValues").useChatValues(e, r),
        i = a[0],
        l = o("WAWebBotBaseGating").isBizBot1pEnabled() ? e : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(l);
      var s =
          (t = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) != null
            ? t
            : [],
        u = s[0],
        d = u === !0,
        p;
      (n[1] !== i || n[2] !== e || n[3] !== d
        ? ((p = function () {
            m(e, d, i);
          }),
          (n[1] = i),
          (n[2] = e),
          (n[3] = d),
          (n[4] = p))
        : (p = n[4]),
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          p,
        ));
      var _, f;
      (n[5] !== i || n[6] !== e || n[7] !== d
        ? ((_ = function () {
            m(e, d, i);
          }),
          (f = [e, d, i]),
          (n[5] = i),
          (n[6] = e),
          (n[7] = d),
          (n[8] = _),
          (n[9] = f))
        : ((_ = n[8]), (f = n[9])),
        c(_, f));
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
