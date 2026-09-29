__d(
  "WAWebBotTos",
  [
    "WATimeUtils",
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
      return c() || g() || h();
    }
    function c() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function d(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(w(e));
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = w(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (
        o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
        e.length > 0 &&
          e.some(function (e) {
            return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
          })
      );
    }
    function f(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = A(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function g() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function h() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function y() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function C(t) {
      if (
        (t === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        b()
      )
        return !0;
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (typeof n != "number") return !1;
      var a = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return a < 0 ? !0 : a === 0 ? !1 : o("WATimeUtils").unixTime() - n < a;
    }
    function b() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield D(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield D(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield D(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function P(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function N(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function M(e) {
      if (P(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function w(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = A(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function A(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.hasAcceptedNonBlockingBotTos = s),
      (l.hasSeenBotTos = u),
      (l.hasSeenAgentTos = c),
      (l.registerBotTosRequirements = d),
      (l.refreshBotTosRequirements = m),
      (l.hasAcceptedMuseGroupTos = _),
      (l.hasAcceptedBlockingBotTos = f),
      (l.hasSeenInvokeTos = g),
      (l.hasSeenShortcutTos = h),
      (l.hasSeenMasterBotTos = y),
      (l.hasSeenBizBotTos = C),
      (l.hasAcceptedBizBotTos = b),
      (l.markSeenAgentTos = v),
      (l.markSeenInvokeTos = R),
      (l.markSeenShortcutTos = E),
      (l.acceptBizBotTos = I),
      (l.setBizBotTosDismissalTime = $),
      (l.isNonBlockingBotNotice = P),
      (l.isMasterBotTosNotice = N),
      (l.canShowBotTos = M));
  },
  98,
);
