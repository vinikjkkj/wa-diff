__d(
  "WAWebAeaKeyResponseMonitor",
  [
    "WALogger",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaAdvState",
    "WAWebAeaIdentityChangeBaseline",
    "WAWebAeaIdentityChangeNotice",
    "WAWebAeaKeyResponseRules",
    "WAWebAeaRollout",
    "WAWebAeaTelemetry",
    "WAWebAeaThreadStateStore",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o("WAWebAeaAccountCategory").isRegularUserOrAeaBot(t.wid) ||
            t.wid.isCompanion() ||
            !o("WAWebAeaRollout").isAeaMonitoringEnabled()
          )
            return null;
          o("WAWebAeaAccountCategory").logAeaGatesOnce();
          var n = o("WAWebWidFactory").asUserWidOrThrow(t.wid),
            r = yield o("WAWebAeaAccountCategory").getAeaAccountCategory(n);
          if (!o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(r))
            return null;
          var a = o("WAWebAeaAccountStateStore").toAeaIdentityKey(t.identity),
            i = yield o(
              "WAWebAeaIdentityChangeBaseline",
            ).readAeaStoredAccountAfterIdentityChange(n),
            l = i.baseline,
            s = i.stored,
            u = o("WAWebAeaKeyResponseRules").evaluateAeaKeyResponse(
              {
                incomingIdentityKey: a,
                incomingIdentityKeyBytes: t.identity,
                evidence: t.aeaEvidence,
              },
              l != null ? l : s,
            );
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] key response evaluated account=",
                  " evidence=",
                  " stored_state=",
                  " identity_change_baseline=",
                  " key_changed=",
                  " verification=",
                  " decision=",
                  "",
                ])),
              n.toLogString(),
              L(t.aeaEvidence),
              (l != null ? l : s).accountState,
              String(l != null),
              String(u.keyChanged),
              E(u),
              k(u),
            ),
            o("WAWebAeaTelemetry").reportAeaKeyResponseEvaluation(u),
            {
              user: n,
              identityKey: a,
              stored: s,
              evaluation: u,
              category: r,
              baseline: l,
            }
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return (
        (e == null ? void 0 : e.evaluation.decision.kind) === "reject" &&
        (C(e.user, t) ||
          o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(
            e.category,
          ))
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (C(o("WAWebWidFactory").asUserWidOrThrow(e), t)) return !0;
          if (!o("WAWebAeaRollout").isAeaEnforcementEnabled()) return !1;
          try {
            return yield o(
              "WAWebAeaAccountCategory",
            ).isAeaEnforcementEnabledForAccount(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] key response account=",
                      " category read failed",
                    ])),
                  e.toLogString(),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("aea-key-response-category-read-fail"),
              !0
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n, r;
      if ((t == null ? void 0 : t.isBeforeEnforcedSendDecision) !== !0)
        return !1;
      var a = t.sendRecipient;
      return (
        a == null ||
        ((n = o("WAWebLidMigrationUtils").toUserLid(e)) != null ? n : e).equals(
          (r = o("WAWebLidMigrationUtils").toUserLid(a)) != null ? r : a,
        )
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.baseline,
            a = e.evaluation,
            i = e.identityKey,
            l = e.stored,
            s = e.user,
            p = a.decision,
            _ = a.keyChanged;
          if (p.kind !== "store")
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] key response apply account=",
                    " status=",
                    " decision=",
                    "",
                  ])),
                s.toLogString(),
                p.kind === "unchanged" ? "confirmed" : "rejected",
                k(a),
              ),
              n != null && (yield S(s, i, n)),
              !0
            );
          var f = yield o(
            "WAWebAeaAccountStateStore",
          ).compareAndSetAeaAccountState(
            s,
            i,
            _ ? null : l.rawAccountState,
            p.accountState,
          );
          if (!f.applied)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] key response apply account=",
                    " status=stale",
                  ])),
                s.toLogString(),
              ),
              !1
            );
          if (
            (n != null &&
              (yield o(
                "WAWebAeaIdentityChangeBaseline",
              ).clearAeaIdentityChangeBaseline(s, i)),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] key response apply account=",
                  " status=",
                  " previous_state=",
                  " next_state=",
                  "",
                ])),
              s.toLogString(),
              f.changed ? "changed" : "unchanged",
              l.accountState,
              p.accountState,
            ),
            !f.changed)
          )
            return !0;
          if ((t == null ? void 0 : t.isBeforeEnforcedSendDecision) !== !0) {
            var g =
              p.reason !==
              o("WAWebAeaKeyResponseRules").AeaStoreReason
                .BROKEN_ATTESTATION_FALLBACK;
            o("WAWebAeaThreadStateStore").updateAeaThreadStateInBackground(
              s,
              p.accountState,
              {
                shouldRestartCooldown:
                  g &&
                  p.accountState !==
                    o("WAWebAeaAccountState").AeaAccountState.E2EE,
                shouldRestartCooldownOnUpgrade: g,
                category: e.category,
              },
            );
          }
          return (
            p.reason ===
              o("WAWebAeaKeyResponseRules").AeaStoreReason.IMPLICIT_DOWNGRADE &&
              o("WAWebAeaTelemetry").reportAeaImplicitDowngrade(),
            (p.reason ===
              o("WAWebAeaKeyResponseRules").AeaStoreReason.IMPLICIT_DOWNGRADE ||
              p.reason ===
                o("WAWebAeaKeyResponseRules").AeaStoreReason.FORCE_OVERRIDE) &&
              o("WAWebAeaIdentityChangeNotice").showAeaIdentityChangeNotice(
                s,
                e.category,
              ),
            o("WAWebAeaAdvState")
              .reportAeaAdvConflictForAccount(s)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] failed to compare key response with ADV state",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-key-response-adv-report-fail");
              }),
            !0
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
              "WAWebAeaAccountStateStore",
            ).compareAndSetAeaAccountState(e, t, null, n.accountState),
            a = r.applied;
          (a &&
            (yield o(
              "WAWebAeaIdentityChangeBaseline",
            ).clearAeaIdentityChangeBaseline(e, t)),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] key response apply account=",
                  " status=",
                  " restored_state=",
                  "",
                ])),
              e.toLogString(),
              a ? "restored" : "stale",
              n.accountState,
            ));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      if (e == null) return "absent";
      if (e.forceOverrideE2ee) return "force_override";
      var t = e.signedClaim;
      return (t == null ? void 0 : t.parsingFailure) != null
        ? "parse_failed:" + t.parsingFailure
        : (t == null ? void 0 : t.claimedState) == null
          ? "empty"
          : "signed:" + String(t.claimedState);
    }
    function E(e) {
      var t = e.verification;
      return t == null
        ? "not_run"
        : t.verified
          ? "verified:" + t.accountState
          : "failed:" + t.failure;
    }
    function k(e) {
      var t = e.decision;
      if (t.kind === "store") {
        var n = t.failure == null ? "" : ":" + t.failure;
        return "store:" + t.accountState + ":" + t.reason + n;
      }
      return t.kind === "reject" ? "reject:" + t.failure : "unchanged";
    }
    ((l.prepareAeaKeyResponse = _),
      (l.shouldRejectAeaKeyResponse = g),
      (l.isAeaEnforcedForUnevaluatedKeyResponse = h),
      (l.commitAeaKeyResponse = b));
  },
  98,
);
