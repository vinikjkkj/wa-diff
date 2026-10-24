__d(
  "WAWebBotTos",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "BIZ_BOT_TOS_DISMISSED_AT",
      c = {
        minTimeout: 1e3,
        maxTimeout: 4e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      d = 3e4,
      m = 3e3,
      p = 3e4;
    function _() {
      var e;
      return (e = o("WAWebBotGating").getNonBlockingBotNoticeIds()) == null
        ? void 0
        : e.some(function (e) {
            return o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
          });
    }
    function f() {
      return g() || z() || j();
    }
    function g() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotAgentTosId(),
        ) === "ACCEPTED"
      );
    }
    function h(e) {
      o("WAWebTos").TosManager.registerDisclosureNoticeIds(de(e));
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = de(e);
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(t),
            t.some(function (e) {
              return o("WAWebTos").TosManager.getState(e) !== "ACCEPTED";
            }) && (yield o("WAWebTos").TosManager.run({ singleRun: !0 })));
        })),
        C.apply(this, arguments)
      );
    }
    var b = null;
    function v() {
      return (
        b != null ||
          (b = S().finally(function () {
            b = null;
          })),
        b
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
          (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e),
            !(e.length === 0 || H(e)) && (yield B(e)));
        })),
        R.apply(this, arguments)
      );
    }
    var L = null,
      E = null;
    function k() {
      return (
        L != null ||
          (L = I().finally(function () {
            L = null;
          })),
        L
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
          e == null ||
            x() ||
            D() ||
            ((E = o("WATimeUtils").monotonicTime()), yield B([e]));
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return E != null && o("WATimeUtils").monotonicTimeSince(E) < p;
    }
    function x() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null
        ? !0
        : (o("WAWebTos").TosManager.registerDisclosureNoticeIds([e]),
          o("WAWebTos").TosManager.getState(e) === "ACCEPTED");
    }
    function $() {
      return o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() != null && x();
    }
    function P() {
      var e = o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId();
      return e == null ? (s || (s = n("Promise"))).resolve(!0) : M(e);
    }
    function N() {
      return M(o("WAWebBotTosIds").getMetaAiTeeGroupNoticeId());
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t == null) return !1;
          o("WAWebTos").TosManager.registerDisclosureNoticeIds([t]);
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              A(t),
              m,
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
          return O(t);
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
          O(e) || (yield B([e]));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = yield q(e, t);
          n.forEach(function (e) {
            o("WAWebTos").TosManager.setState(e, "ACCEPTED", t);
          });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = o("WATimeUtils").unixTime());
          var a = yield o("WAExponentialBackoff").exponentialBackoff(
            c,
            (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  try {
                    yield o("WAPromiseTimeout").promiseTimeout(
                      o("WAComms").waitForConnection(),
                      d,
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
        U.apply(this, arguments)
      );
    }
    function V() {
      var e = o("WAWebBotTosIds").getMuseGroupTosNoticeIds();
      return (o("WAWebTos").TosManager.registerDisclosureNoticeIds(e), H(e));
    }
    function H(e) {
      return (
        e.length > 0 &&
        e.some(function (e) {
          return o("WAWebTos").TosManager.getState(e) === "ACCEPTED";
        })
      );
    }
    function G(e) {
      return e == null
        ? !0
        : e.every(function (e) {
            if (e.blocking === !1) return !0;
            var t = me(e.id);
            return (
              t != null && o("WAWebTos").TosManager.getState(t) === "ACCEPTED"
            );
          });
    }
    function z() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotInvokeTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyInvokeTosId(),
        ) === "ACCEPTED"
      );
    }
    function j() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotShortcutTosId(),
        ) === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBotLegacyShortcutTosId(),
        ) === "ACCEPTED"
      );
    }
    function K() {
      var e = o("WAWebBotGating").getMasterBotNoticeId();
      return e == null
        ? !1
        : o("WAWebTos").TosManager.getState(String(e)) === "ACCEPTED";
    }
    function Q(e) {
      if (
        (e === o("WAWebBotTypes").BizBotType.BIZ_1P &&
          !o("WAWebABProps").getABPropConfigValue("wabai_consent_required")) ||
        X()
      )
        return !0;
      var t = r("WAWebUserPrefsStore").getUser(u);
      if (typeof t != "number") return !1;
      var n = o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
      return n < 0 ? !0 : n === 0 ? !1 : o("WATimeUtils").unixTime() - t < n;
    }
    function X() {
      return (
        o("WAWebTos").TosManager.getState(
          o("WAWebBotTosIds").getBizBotTosId(),
        ) === "ACCEPTED"
      );
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield ae(Number(o("WAWebBotTosIds").getBotAgentTosId()));
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield ae(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
        })),
        ee.apply(this, arguments)
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield ae(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebSetUserNoticeStageJob").setUserNoticeStage(
            Number(o("WAWebBotTosIds").getBizBotTosId()),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o(
            "WAWebSetUserDisclosureStageAction",
          ).updateUserDisclosureStateAction(
            e,
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          );
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      r("WAWebUserPrefsStore").setUser(u, e);
    }
    function se(e) {
      var t = o("WAWebBotGating").getNonBlockingBotNoticeIds();
      return t.length === 0 ? !1 : t.includes(Number(e));
    }
    function ue(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null && e === t;
    }
    function ce(e) {
      if (se(Number(e))) return !0;
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      return t != null ? !0 : o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function de(e) {
      var t = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var n = me(e.id);
          n != null && t.push(n);
        }),
        t
      );
    }
    function me(e) {
      return e != null && Number.isSafeInteger(e) && e > 0 ? String(e) : null;
    }
    ((l.GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS = m),
      (l.META_AI_OPEN_GROUP_NOTICE_REFRESH_COOLDOWN_MS = p),
      (l.hasAcceptedNonBlockingBotTos = _),
      (l.hasSeenBotTos = f),
      (l.hasSeenAgentTos = g),
      (l.registerBotTosRequirements = h),
      (l.refreshBotTosRequirements = y),
      (l.refreshMuseGroupTosNotices = v),
      (l.refreshMetaAiOpenGroupNotice = k),
      (l.hasAcceptedMetaAiOpenGroupNotice = x),
      (l.hasConfirmedMetaAiOpenGroupNoticeAcceptance = $),
      (l.refreshAndConfirmMetaAiOpenGroupNoticeAcceptance = P),
      (l.refreshAndConfirmMetaAiTeeGroupNoticeAcceptance = N),
      (l.queryServerAcceptedNoticeIds = q),
      (l.hasAcceptedMuseGroupTos = V),
      (l.hasAcceptedBlockingBotTos = G),
      (l.hasSeenInvokeTos = z),
      (l.hasSeenShortcutTos = j),
      (l.hasSeenMasterBotTos = K),
      (l.hasSeenBizBotTos = Q),
      (l.hasAcceptedBizBotTos = X),
      (l.markSeenAgentTos = Y),
      (l.markSeenInvokeTos = Z),
      (l.markSeenShortcutTos = te),
      (l.acceptBizBotTos = re),
      (l.setBizBotTosDismissalTime = le),
      (l.isNonBlockingBotNotice = se),
      (l.isMasterBotTosNotice = ue),
      (l.canShowBotTos = ce));
  },
  98,
);
