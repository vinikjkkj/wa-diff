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
    "asyncToGeneratorRuntime",
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
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield L(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield L(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield L(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebABProps").getABPropConfigValue(
            "biz_ai_consumer_tos_notice_iq_web",
          )
            ? yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
                Number(o("WAWebBotTosIds").getBizBotTosId()),
                o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
              )
            : yield L(Number(o("WAWebBotTosIds").getBizBotTosId()));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function I() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getUgcAiStudioTosId(),
        ) === "ACCEPTED"
      );
    }
    function T(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function D(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function x(e) {
      if (T(Number(e))) return !0;
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
      (l.markSeenInvokeTos = y),
      (l.markSeenShortcutTos = b),
      (l.acceptBizBotTos = S),
      (l.setBizBotTosDismissalTime = k),
      (l.hasSeenUgcTos = I),
      (l.isNonBlockingBotNotice = T),
      (l.isMasterBotTosNotice = D),
      (l.canShowBotTos = x));
  },
  98,
);
