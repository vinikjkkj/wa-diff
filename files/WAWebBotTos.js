__d(
  "WAWebBotTos",
  [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "BIZ_BOT_TOS_DISMISSED_AT",
      u = {
        minTimeout: 1e3,
        maxTimeout: 4e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      c = 3e4,
      d = 3e3,
      m = 3e4;
    function p() {
      var e;
      return (e = o("WAWebBotGating").getNonBlockingBotNoticeIds()) == null
        ? void 0
        : e.some(function (e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
          });
    }
    function _() {
      return f() || O() || B();
    }
    function f() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function g(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(Y(e));
    }
    async function h(e) {
      var t = Y(e);
      (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
        t.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
        }) && (await o("WAWebTos").TosManager.run({ singleRun: !0 })));
    }
    var y = null;
    function C() {
      return (
        y != null ||
          (y = b().finally(function () {
            y = null;
          })),
        y
      );
    }
    async function b() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
        !(e.length === 0 || A(e)) && (await N(e)));
    }
    var v = null,
      S = null;
    function R() {
      return (
        v != null ||
          (v = L().finally(function () {
            v = null;
          })),
        v
      );
    }
    async function L() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      e == null ||
        k() ||
        E() ||
        ((S = o("WATimeUtils").monotonicTime()), await N([e]));
    }
    function E() {
      return S != null && o("WATimeUtils").monotonicTimeSince(S) < m;
    }
    function k() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null
        ? !0
        : (o("WAWebTos").TosManager.registerDisclosureNoticeIds([e]),
          o("WAWebTos").TosManager.getState(e) === "ACCEPTED");
    }
    function I() {
      return o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() != null && k();
    }
    function T() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null ? Promise.resolve(!0) : x(e);
    }
    function D() {
      return x(o("WAWebBotTosIds").getMetaAiTeeGroupNoticeId());
    }
    async function x(t) {
      if (t == null) return !1;
      o("WAWebTos").TosManager.registerDisclosureNoticeIds([t]);
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          $(t),
          d,
          "Group notice refresh timed out",
        );
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Group notice refresh before confirmation failed: ",
                "",
              ])),
            String(t),
          ),
          !1
        );
      }
      return P(t);
    }
    async function $(e) {
      P(e) || (await N([e]));
    }
    function P(e) {
      return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
    }
    async function N(e) {
      var t = o("WATimeUtils").unixTime(),
        n = await M(e, t);
      n.forEach(function (e) {
        o("WAWebTos").TosManager.setState(e, "ACCEPTED", t);
      });
    }
    async function M(e, t) {
      t === void 0 && (t = o("WATimeUtils").unixTime());
      var n = await o("WAExponentialBackoff").exponentialBackoff(
        u,
        async function (n) {
          try {
            await o("WAPromiseTimeout").promiseTimeout(
              o("WAComms").waitForConnection(),
              c,
              "waitForConnection timed out",
            );
            var a = await o(
              "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
            ).sendGetDisclosureStageByIdsRPC({
              getDisclosureStageByIdArgs: e.map(function (e) {
                return {
                  getDisclosureStageByIdId: Number(e),
                  getDisclosureStageByIdT: t,
                };
              }),
            });
            if (a.name !== "GetDisclosureStageByIdsResponseClientSuccess")
              throw r("err")("Group notice stage query failed: " + a.name);
            return a;
          } catch (e) {
            return n(e instanceof Error ? e : r("err")(String(e)));
          }
        },
      );
      return n.value.notice
        .filter(function (t) {
          return (
            e.includes(String(t.id)) &&
            (t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED ||
              t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK)
          );
        })
        .map(function (e) {
          return String(e.id);
        });
    }
    function w() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), A(e));
    }
    function A(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function F(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = J(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function O() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function B() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function W() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function q(e) {
      if (
        (e === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebABProps").getABPropConfigValue("wabai_consent_required")) ||
        U()
      )
        return !0;
      var t = r("WAWebUserPrefsStore").getUser(s);
      if (typeof t != "number") return !1;
      var n = o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
      return n < 0 ? !0 : n === 0 ? !1 : o("WATimeUtils").unixTime() - t < n;
    }
    function U() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    async function V() {
      await j(Number(o("WAWebBotTosIds").getBotAgentTosId()));
    }
    async function H() {
      await j(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
    }
    async function G() {
      await j(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
    }
    async function z() {
      await o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
        Number(o("WAWebBotTosIds").getBizBotTosId()),
        o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
      );
    }
    async function j(e) {
      await o(
        "WAWebSetUserDisclosureStageAction",
      ).updateUserDisclosureStateAction(
        e,
        o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
      );
    }
    function K(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function Q(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function X(e) {
      if (K(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function Y(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = J(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function J(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS = d),
      (l.META_AI_OPEN_GROUP_NOTICE_REFRESH_COOLDOWN_MS = m),
      (l.hasAcceptedNonBlockingBotTos = p),
      (l.hasSeenBotTos = _),
      (l.hasSeenAgentTos = f),
      (l.registerBotTosRequirements = g),
      (l.refreshBotTosRequirements = h),
      (l.refreshMuseGroupTosNotices = C),
      (l.refreshMetaAiOpenGroupNotice = R),
      (l.hasAcceptedMetaAiOpenGroupNotice = k),
      (l.hasConfirmedMetaAiOpenGroupNoticeAcceptance = I),
      (l.refreshAndConfirmMetaAiOpenGroupNoticeAcceptance = T),
      (l.refreshAndConfirmMetaAiTeeGroupNoticeAcceptance = D),
      (l.queryServerAcceptedNoticeIds = M),
      (l.hasAcceptedMuseGroupTos = w),
      (l.hasAcceptedBlockingBotTos = F),
      (l.hasSeenInvokeTos = O),
      (l.hasSeenShortcutTos = B),
      (l.hasSeenMasterBotTos = W),
      (l.hasSeenBizBotTos = q),
      (l.hasAcceptedBizBotTos = U),
      (l.markSeenAgentTos = V),
      (l.markSeenInvokeTos = H),
      (l.markSeenShortcutTos = G),
      (l.acceptBizBotTos = z),
      (l.isNonBlockingBotNotice = K),
      (l.isMasterBotTosNotice = Q),
      (l.canShowBotTos = X));
  },
  98,
);
