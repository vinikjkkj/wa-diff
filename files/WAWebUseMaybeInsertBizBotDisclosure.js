__d(
  "WAWebUseMaybeInsertBizBotDisclosure",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebCreateBizBotSysMsgAction",
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
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t) {
      var n,
        a = o("useWAWebModelValues").useModelValues(t, ["bizBotSystemMsgType"]),
        i = a.bizBotSystemMsgType,
        l = o("WAWebBotBaseGating").isBizBot1pEnabled() ? t.id : null;
      o("WAWebUseBusinessProfile.react").useBusinessProfile(l, [
        "automatedType",
      ]);
      var s =
          ((n = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(l, [
            o("WAWebBusinessProfileGetters").getIsBizBot1p,
          ])) == null
            ? void 0
            : n[0]) === !0,
        c = r("useWAWebStableCallback")(function () {
          o("WAWebBotBaseGating").isBizBot1pEnabled() &&
            o("WAWebBotTos").hasAcceptedBizBotTos() &&
            s === !0 &&
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
      (o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", c),
        u(
          function () {
            return c();
          },
          [t, s, i, c],
        ));
    }
    l.useMaybeInsertBizBotDisclosure = c;
  },
  98,
);
