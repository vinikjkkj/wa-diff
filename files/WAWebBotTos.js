__d(
  "WAWebBotTos",
  [
    "WAComms",
    "WAExponentialBackoff",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "BIZ_BOT_TOS_DISMISSED_AT",
      s = {
        minTimeout: 1e3,
        maxTimeout: 4e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      u = 3e4;
    function c() {
      var e;
      return (e = o("WAWebBotGating").getNonBlockingBotNoticeIds()) == null
        ? void 0
        : e.some(function (e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
          });
    }
    function d() {
      return m() || R() || L();
    }
    function m() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function p(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(U(e));
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = U(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        f.apply(this, arguments)
      );
    }
    var g = null;
    function h() {
      return (
        g != null ||
          (g = y().finally(function () {
            g = null;
          })),
        g
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
          if (
            (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
            !(e.length === 0 || v(e)))
          ) {
            var t = o("WATimeUtils").unixTime(),
              a = yield o("WAExponentialBackoff").exponentialBackoff(
                s,
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      try {
                        yield o("WAPromiseTimeout").promiseTimeout(
                          o("WAComms").waitForConnection(),
                          u,
                          "waitForConnection timed out",
                        );
                        var a = yield o(
                          "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
                        ).sendGetDisclosureStageByIdsRPC({
                          getDisclosureStageByIdArgs: e.map(function (e) {
                            return {
                              getDisclosureStageByIdId: Number(e),
                              getDisclosureStageByIdT: t,
                            };
                          }),
                        });
                        if (
                          a.name !==
                          "GetDisclosureStageByIdsResponseClientSuccess"
                        )
                          throw r("err")(
                            "Muse notice stage query failed: " + a.name,
                          );
                        return a;
                      } catch (e) {
                        return n(e instanceof Error ? e : r("err")(String(e)));
                      }
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              );
            a.value.notice
              .filter(function (t) {
                return (
                  e.includes(String(t.id)) &&
                  (t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED ||
                    t.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK)
                );
              })
              .forEach(function (e) {
                o("WAWebTos").TosManager.setState(String(e.id), "ACCEPTED", t);
              });
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), v(e));
    }
    function v(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function S(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = V(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function R() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function L() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function E() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function k(t) {
      if (
        (t === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        I()
      )
        return !0;
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (typeof n != "number") return !1;
      var a = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return a < 0 ? !0 : a === 0 ? !1 : o("WATimeUtils").unixTime() - n < a;
    }
    function I() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield A(Number(o("WAWebBotTosIds").getBotAgentTosId()));
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
          yield A(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
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
          yield A(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function B(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function W(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function q(e) {
      if (B(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function U(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = V(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function V(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.hasAcceptedNonBlockingBotTos = c),
      (l.hasSeenBotTos = d),
      (l.hasSeenAgentTos = m),
      (l.registerBotTosRequirements = p),
      (l.refreshBotTosRequirements = _),
      (l.refreshMuseGroupTosNotices = h),
      (l.hasAcceptedMuseGroupTos = b),
      (l.hasAcceptedBlockingBotTos = S),
      (l.hasSeenInvokeTos = R),
      (l.hasSeenShortcutTos = L),
      (l.hasSeenMasterBotTos = E),
      (l.hasSeenBizBotTos = k),
      (l.hasAcceptedBizBotTos = I),
      (l.markSeenAgentTos = T),
      (l.markSeenInvokeTos = x),
      (l.markSeenShortcutTos = P),
      (l.acceptBizBotTos = M),
      (l.setBizBotTosDismissalTime = O),
      (l.isNonBlockingBotNotice = B),
      (l.isMasterBotTosNotice = W),
      (l.canShowBotTos = q));
  },
  98,
);
