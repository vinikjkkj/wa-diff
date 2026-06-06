__d(
  "WAWebBotTos",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebBotTypes",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebSetUserNoticeStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "BIZ_BOT_TOS_DISMISSED_AT";
    function s() {
      var e;
      return (e = o("WAWebBotGating").getNonBlockingBotNoticeIds()) == null
        ? void 0
        : e.some(function (e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
          });
    }
    function u() {
      return c() || d() || m();
    }
    function c() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function d() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function m() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function p() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function _(t) {
      if (
        (t === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        f()
      )
        return !0;
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (typeof n != "number") return !1;
      var a = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return a < 0 ? !0 : a === 0 ? !1 : o("WATimeUtils").unixTime() - n < a;
    }
    function f() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    async function g() {
      await b(Number(o("WAWebBotTosIds").getBotAgentTosId()));
    }
    async function h() {
      await b(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
    }
    async function y() {
      await b(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
    }
    async function C() {
      o("WAWebABProps").getABPropConfigValue(
        "biz_ai_consumer_tos_notice_iq_web",
      )
        ? await o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          )
        : await b(Number(o("WAWebBotTosIds").getBizBotTosId()));
    }
    async function b(e) {
      await o(
        "WAWebSetUserDisclosureStageAction",
      ).updateUserDisclosureStateAction(
        e,
        o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
      );
    }
    function v(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function S() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getUgcAiStudioTosId(),
        ) === "ACCEPTED"
      );
    }
    function R(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function L(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function E(e) {
      if (R(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    ((l.hasAcceptedNonBlockingBotTos = s),
      (l.hasSeenBotTos = u),
      (l.hasSeenAgentTos = c),
      (l.hasSeenInvokeTos = d),
      (l.hasSeenShortcutTos = m),
      (l.hasSeenMasterBotTos = p),
      (l.hasSeenBizBotTos = _),
      (l.hasAcceptedBizBotTos = f),
      (l.markSeenAgentTos = g),
      (l.markSeenInvokeTos = h),
      (l.markSeenShortcutTos = y),
      (l.acceptBizBotTos = C),
      (l.setBizBotTosDismissalTime = v),
      (l.hasSeenUgcTos = S),
      (l.isNonBlockingBotNotice = R),
      (l.isMasterBotTosNotice = L),
      (l.canShowBotTos = E));
  },
  98,
);
