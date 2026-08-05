__d(
  "WAWebMetaOneUpsellLogger",
  [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotJourneyLogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        META_AI_IMAGE_GEN: {
          referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.META_AI_IMAGINE,
          screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_IMAGINE,
        },
        META_AI_THINK_HARD: {
          referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
            .META_AI_THINKING,
          screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_THINKING,
        },
        META_AI_VIDEO_GEN: {
          referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.META_AI_VIDEO,
          screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_VIDEO,
        },
      };
    function u(e, t) {
      var n = f();
      g(n + ":" + e) && h(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, n, t);
    }
    function c(e) {
      h(
        o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
        f(),
        e,
        o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET.UPSELL_CTA,
      );
    }
    function d() {
      (p.clear(), (_ = null));
    }
    var m = 500,
      p = new Set(),
      _ = null;
    function f() {
      var t = o("WAWebBotJourneyLogger").BotJourneyLogger.getDestinationId();
      if (t != null) return t;
      var n = _;
      return (
        n == null &&
          ((n = r("WAWebPonyfillsCryptoRandomUUID")()),
          (_ = n),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AI Subs] quota upsell logged with no bot-metrics destination id",
                ])),
            )
            .sendLogs("metaone-upsell-missing-destination-id", {
              sampling: 0.01,
            })),
        n
      );
    }
    function g(e) {
      if (p.has(e)) return !1;
      if (p.size >= m) {
        var t = p.values().next().value;
        t != null && p.delete(t);
      }
      return (p.add(e), !0);
    }
    function h(e, t, n, r) {
      var a;
      if (o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled()) {
        var i = n != null ? s[n.toUpperCase()] : null;
        new (o(
          "WAWebSubscriptionUserActionWamEvent",
        ).SubscriptionUserActionWamEvent)({
          wsuaAction: e,
          wsuaActionTarget: r,
          wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
            .META_ONE_CONSUMER,
          wsuaReferral: i == null ? void 0 : i.referral,
          wsuaScreen:
            (a = i == null ? void 0 : i.screen) != null
              ? a
              : o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD,
          wsuaScreenElement: o("WAWebWamEnumWsuaScreenElement")
            .WSUA_SCREEN_ELEMENT.UNIFIED_RESPONSE_UPSELL,
          wsuaSessionId: t,
        }).commit();
      }
    }
    ((l.logQuotaUpsellView = u),
      (l.logQuotaUpsellCtaClick = c),
      (l.resetLoggedViewKeysForTests = d));
  },
  98,
);
