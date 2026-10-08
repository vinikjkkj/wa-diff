__d(
  "WAWebBotTos",
  [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
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
      return f() || G() || z();
    }
    function f() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function g(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(ce(e));
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ce(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        y.apply(this, arguments)
      );
    }
    var C = null;
    function b() {
      return (
        C != null ||
          (C = v().finally(function () {
            C = null;
          })),
        C
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
            !(e.length === 0 || V(e)) && (yield O(e)));
        })),
        S.apply(this, arguments)
      );
    }
    var R = null,
      L = null;
    function E() {
      return (
        R != null ||
          (R = k().finally(function () {
            R = null;
          })),
        R
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
          e == null ||
            D() ||
            T() ||
            ((L = o("WATimeUtils").monotonicTime()), yield O([e]));
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return L != null && o("WATimeUtils").monotonicTimeSince(L) < m;
    }
    function D() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null
        ? !0
        : (o("WAWebTos").TosManager.registerDisclosureNoticeIds([e]),
          o("WAWebTos").TosManager.getState(e) === "ACCEPTED");
    }
    function x() {
      return o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() != null && D();
    }
    function $() {
      return N(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId());
    }
    function P() {
      return N(o("WAWebBotTosIds").getMetaAiTeeGroupNoticeId());
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t == null) return !1;
          o("WAWebTos").TosManager.registerDisclosureNoticeIds([t]);
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              w(t),
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
          return F(t);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          F(e) || (yield O([e]));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = yield W(e, t);
          n.forEach(function (e) {
            o("WAWebTos").TosManager.setState(e, "ACCEPTED", t);
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = o("WATimeUtils").unixTime());
          var a = yield o("WAExponentialBackoff").exponentialBackoff(
            u,
            (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  try {
                    yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAComms").waitForConnection(),
                      c,
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
                      a.name !== "GetDisclosureStageByIdsResponseClientSuccess"
                    )
                      throw r("err")(
                        "Group notice stage query failed: " + a.name,
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
          return a.value.notice
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
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), V(e));
    }
    function V(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function H(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = de(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function G() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function z() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function j() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function K(e) {
      if (
        (e === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebBotGating").isBizBotConsentRequired()) ||
        Q()
      )
        return !0;
      var t = r("WAWebUserPrefsStore").getUser(s);
      if (typeof t != "number") return !1;
      var n = o("WAWebBotGating").bizBotConsentDismissalCooldown();
      return n < 0 ? !0 : n === 0 ? !1 : o("WATimeUtils").unixTime() - t < n;
    }
    function Q() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield oe(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield oe(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield oe(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        te.apply(this, arguments)
      );
    }
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      r("WAWebUserPrefsStore").setUser(s, e);
    }
    function le(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function se(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function ue(e) {
      if (le(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function ce(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = de(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function de(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS = d),
      (l.META_AI_OPEN_GROUP_NOTICE_REFRESH_COOLDOWN_MS = m),
      (l.hasAcceptedNonBlockingBotTos = p),
      (l.hasSeenBotTos = _),
      (l.hasSeenAgentTos = f),
      (l.registerBotTosRequirements = g),
      (l.refreshBotTosRequirements = h),
      (l.refreshMuseGroupTosNotices = b),
      (l.refreshMetaAiOpenGroupNotice = E),
      (l.hasAcceptedMetaAiOpenGroupNotice = D),
      (l.hasConfirmedMetaAiOpenGroupNoticeAcceptance = x),
      (l.refreshAndConfirmMetaAiOpenGroupNoticeAcceptance = $),
      (l.refreshAndConfirmMetaAiTeeGroupNoticeAcceptance = P),
      (l.queryServerAcceptedNoticeIds = W),
      (l.hasAcceptedMuseGroupTos = U),
      (l.hasAcceptedBlockingBotTos = H),
      (l.hasSeenInvokeTos = G),
      (l.hasSeenShortcutTos = z),
      (l.hasSeenMasterBotTos = j),
      (l.hasSeenBizBotTos = K),
      (l.hasAcceptedBizBotTos = Q),
      (l.markSeenAgentTos = X),
      (l.markSeenInvokeTos = J),
      (l.markSeenShortcutTos = ee),
      (l.acceptBizBotTos = ne),
      (l.setBizBotTosDismissalTime = ie),
      (l.isNonBlockingBotNotice = le),
      (l.isMasterBotTosNotice = se),
      (l.canShowBotTos = ue));
  },
  98,
);
