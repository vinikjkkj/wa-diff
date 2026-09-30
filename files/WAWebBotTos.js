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
      return c() || v() || S();
    }
    function c() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function d(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(W(e));
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = W(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        p.apply(this, arguments)
      );
    }
    var _ = null;
    function f() {
      return (
        _ != null ||
          (_ = g().finally(function () {
            _ = null;
          })),
        _
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
            e.length > 0 &&
              !C(e) &&
              (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), C(e));
    }
    function C(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function b(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = q(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function v() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function S() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function R() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function L(t) {
      if (
        (t === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        E()
      )
        return !0;
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (typeof n != "number") return !1;
      var a = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return a < 0 ? !0 : a === 0 ? !1 : o("WATimeUtils").unixTime() - n < a;
    }
    function E() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield M(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield M(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield M(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function F(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function O(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function B(e) {
      if (F(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function W(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = q(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function q(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.hasAcceptedNonBlockingBotTos = s),
      (l.hasSeenBotTos = u),
      (l.hasSeenAgentTos = c),
      (l.registerBotTosRequirements = d),
      (l.refreshBotTosRequirements = m),
      (l.refreshMuseGroupTosNotices = f),
      (l.hasAcceptedMuseGroupTos = y),
      (l.hasAcceptedBlockingBotTos = b),
      (l.hasSeenInvokeTos = v),
      (l.hasSeenShortcutTos = S),
      (l.hasSeenMasterBotTos = R),
      (l.hasSeenBizBotTos = L),
      (l.hasAcceptedBizBotTos = E),
      (l.markSeenAgentTos = k),
      (l.markSeenInvokeTos = T),
      (l.markSeenShortcutTos = x),
      (l.acceptBizBotTos = P),
      (l.setBizBotTosDismissalTime = A),
      (l.isNonBlockingBotNotice = F),
      (l.isMasterBotTosNotice = O),
      (l.canShowBotTos = B));
  },
  98,
);
