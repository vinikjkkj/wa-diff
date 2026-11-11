__d(
  "WAWebAeaThreadStateStore",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WATimeUtils",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAdvState",
    "WAWebAeaIdentityChangeBaseline",
    "WAWebAeaRollout",
    "WAWebAeaSendRules",
    "WAWebAeaTelemetry",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsAdv.pb",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebAeaAccountCategory").isAeaBotAccount(e)) return null;
          var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
            n = yield o(
              "WAWebGetChatRecordByAccountLid",
            ).getChatRecordByAccountLid(t),
            r = n[0],
            a =
              (r == null ? void 0 : r.aeaThreadState) == null
                ? null
                : o("WAWebAeaAccountState").AeaAccountState.cast(
                    r.aeaThreadState,
                  );
          if (
            r == null ||
            a == null ||
            a === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
          )
            return null;
          var i = 0,
            l = r.aeaCooldownStartedAtMs,
            s =
              l == null
                ? 0
                : l + o("WATimeUtils").DAY_MILLISECONDS - Date.now();
          return (
            s > 0 && (yield b(t, r, a)) && (i = s),
            { state: a, cooldownRemainingMs: i }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield Q(e),
            i = a.accountState,
            l = a.identityKey;
          return (l != null ? l : null) !==
            ((r = t.aeaCooldownIdentityKey) != null ? r : null)
            ? !1
            : i === o("WAWebAeaAccountState").AeaAccountState.NOT_SET ||
                o("WAWebAeaAccountState").isAeaNonE2eeAccountState(i) ===
                  o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (
            o("WAWebAeaRollout").isAeaEnforcementEnabled() &&
            e.isRegularUser() &&
            ((t = yield y(o("WAWebWidFactory").asUserWidOrThrow(e))) == null
              ? void 0
              : t.state) === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
            (yield o(
              "WAWebAeaAccountCategory",
            ).isAeaEnforcementEnabledForAccount(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            ))
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = r.category,
            i = r.isSendTimeUpdate,
            l = i === void 0 ? !1 : i,
            s = r.shouldRestartCooldown,
            u = r.shouldRestartCooldownOnUpgrade,
            c = u === void 0 ? !1 : u;
          if (
            o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
            !o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(
              a != null
                ? a
                : yield o("WAWebAeaAccountCategory").getAeaAccountCategory(e),
            )
          )
            return !1;
          var d = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
          return F(
            d,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (s) return O(d, t, !0, !l);
              var e = yield y(d);
              return t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                e == null
                ? !0
                : O(
                    d,
                    t,
                    c &&
                      t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                      e != null &&
                      o("WAWebAeaAccountState").isAeaNonE2eeAccountState(
                        e.state,
                      ),
                    !l,
                  );
            }),
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (
              o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
              !o("WAWebAeaRollout").isAeaMonitoringEnabled()
            )
              return null;
            var t = yield Q(o("WAWebLidMigrationUtils").toUserLidOrThrow(e)),
              n = t.accountState;
            if (!o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n))
              return null;
            var a = yield o("WAWebAeaAccountCategory").getAeaAccountCategory(e);
            return o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(
              a,
            )
              ? {
                  state: n,
                  isEnforced: o(
                    "WAWebAeaAccountCategory",
                  ).isAeaEnforcementEnabledForCategory(a),
                }
              : null;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to read the initial thread state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-initial-thread-state-fail"),
              null
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
            !o("WAWebAeaRollout").isAeaMonitoringEnabled()
          )
            return null;
          try {
            var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
            return yield F(
              t,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield y(t);
                if (n != null)
                  return o("WAWebAeaAccountState").isAeaNonE2eeAccountState(
                    n.state,
                  )
                    ? {
                        state: n.state,
                        isEnforced: o(
                          "WAWebAeaAccountCategory",
                        ).isAeaEnforcementEnabledForCategory(
                          yield o(
                            "WAWebAeaAccountCategory",
                          ).getAeaAccountCategory(e),
                        ),
                      }
                    : null;
                var r = yield k(e);
                return r != null && (yield O(t, r.state, !1, !1)) ? r : null;
              }),
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to store the initial thread state",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-initial-thread-state-fail"),
              null
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebGetChatRecordByAccountLid",
            ).getChatRecordByAccountLid(
              o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
            ),
            n = t[0];
          return n != null;
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, n, a) {
      L(t, n, a).catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to record the thread state",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("aea-thread-state-write-fail");
      });
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebAeaAccountCategory").isAeaBotAccount(e)) {
            var r = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
            w(yield y(r), t) ||
              ((yield o(
                "WAWebAeaAccountCategory",
              ).isAeaReceiveEnabledForAccount(e)) &&
                (yield F(
                  r,
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield y(r);
                    if (!w(e, t)) {
                      if (e != null && e.cooldownRemainingMs > 0) {
                        (o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[aea] thread state account=",
                              " ignored_state=",
                              " cooldown_state=",
                              "",
                            ])),
                          r.toLogString(),
                          t,
                          e.state,
                        ),
                          o(
                            "WAWebAeaTelemetry",
                          ).reportAeaUnsignedUpdateIgnoredDuringCooldown(
                            e.state,
                            t,
                            Math.ceil(e.cooldownRemainingMs / 1e3),
                          ));
                        return;
                      }
                      var n = yield Q(r),
                        a = n.accountState;
                      if (
                        t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                        o("WAWebAeaAccountState").isAeaNonE2eeAccountState(a)
                      ) {
                        o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[aea] thread state account=",
                              " ignored_state=",
                              " account_state=",
                              "",
                            ])),
                          r.toLogString(),
                          t,
                          a,
                        );
                        return;
                      }
                      (yield O(r, t, !1)) &&
                        o("WAWebAeaTelemetry").reportAeaUnsignedThreadUpdate(t);
                    }
                  }),
                )));
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return (
        (e == null ? void 0 : e.state) === t ||
        (e == null && t === o("WAWebAeaAccountState").AeaAccountState.E2EE)
      );
    }
    var A = new (o("WAPromiseQueue").PromiseQueueMap)();
    function F(e, t) {
      return A.enqueue(e.toString(), t);
    }
    function O(e, t, n, r) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            a === void 0 && (a = !0);
            var i = yield o(
                "WAWebGetChatRecordByAccountLid",
              ).getChatRecordByAccountLid(e),
              l = i[0];
            if (l == null) return !1;
            var s = String(t),
              u = o("WAWebAeaAccountState").isAeaNonE2eeAccountState(t),
              c = { aeaThreadState: s };
            return (
              n &&
                ((c.aeaCooldownStartedAtMs = Date.now()),
                (c.aeaCooldownIdentityKey = (yield Q(e)).identityKey)),
              u || (c.aeaDisclosedThreadState = null),
              yield o("WAWebSchemaChat").getChatTable().merge(l.id, c),
              o("WAWebBackendApi").frontendFireAndForget(
                "chatCollectionUpdate",
                {
                  updates: [
                    {
                      id: o("WAWebWidFactory").createWid(l.id),
                      aeaThreadState: s,
                    },
                  ],
                },
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] thread state account=",
                    " state=",
                    " restart_cooldown=",
                    "",
                  ])),
                e.toLogString(),
                t,
                String(n),
              ),
              u &&
                a &&
                W(e).catch(function (e) {
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[aea] failed to disclose a non-E2EE thread state",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("aea-non-e2ee-disclosure-fail");
                }),
              !0
            );
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      if (o("WAWebAeaAccountCategory").isAeaBotAccount(e))
        return (h || (h = n("Promise"))).resolve();
      var r = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
      return F(r, function () {
        return q(r, t);
      });
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebGetChatRecordByAccountLid",
            ).getChatRecordByAccountLid(e),
            a = n[0];
          if (a != null) {
            var i =
              t != null
                ? t
                : a.aeaThreadState == null
                  ? null
                  : o("WAWebAeaAccountState").AeaAccountState.cast(
                      a.aeaThreadState,
                    );
            if (
              !(
                i == null ||
                !o("WAWebAeaAccountState").isAeaNonE2eeAccountState(i) ||
                (t == null &&
                  !(yield o(
                    "WAWebAeaAccountCategory",
                  ).isAeaEnforcementEnabledForAccount(e)))
              )
            ) {
              if (yield j(e)) {
                a.aeaDisclosedThreadState != null &&
                  (yield o("WAWebSchemaChat")
                    .getChatTable()
                    .merge(a.id, { aeaDisclosedThreadState: null }));
                return;
              }
              if (a.aeaDisclosedThreadState !== String(i)) {
                var l = o("WAWebWidFactory").createWid(a.id),
                  s =
                    i === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
                      ? o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeChangeNotificationMsg({
                          accountTypeChangedUser: l,
                          chatId: l,
                          newAdvAccountType: o("WAWebProtobufsAdv.pb")
                            .ADVEncryptionType.HOSTED,
                        })
                      : o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                          l,
                          "biz_privacy_mode_to_fb",
                        );
                if (s != null) {
                  var u = s.id.toString();
                  if (
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: l,
                      newMsg: s,
                      handleSingleMsgOrigin: "aeaNonE2eeDisclosure",
                      messageOverwriteOption: o("WAWebHandleMsgTypes")
                        .MessageOverwriteOption.NO_OVERWRITE,
                      preserveOrder: !1,
                    }),
                    (yield o("WAWebSchemaMessage").getMessageTable().get(u)) ==
                      null)
                  )
                    throw r("err")("[aea] non-E2EE notice was not stored");
                  (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] thread state account=",
                        " disclosed=",
                        "",
                      ])),
                    e.toLogString(),
                    i,
                  ),
                    yield G(a.id, i));
                }
              }
            }
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          try {
            var i = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
            yield F(
              i,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                    "WAWebGetChatRecordByAccountLid",
                  ).getChatRecordByAccountLid(i),
                  n = e[0];
                n != null &&
                  (yield o("WAWebSchemaMessage").getMessageTable().get(a)) !=
                    null &&
                  (yield G(n.id, t));
              }),
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to record a new chat's non-E2EE notice",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-non-e2ee-disclosure-record-fail");
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebSchemaChat")
              .getChatTable()
              .merge(e, { aeaDisclosedThreadState: String(t) });
          } catch (e) {
            o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to record a non-E2EE notice",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-non-e2ee-disclosure-record-fail");
          }
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (h || (h = n("Promise"))).all([
              o("WAWebAeaAdvState").readAeaAdvState(e),
              o(
                "WAWebApiVerifiedBusinessName",
              ).getVerifiedBusinessNameRecordLidAware(e),
              o("WAWebApiContact").getContactRecord(e),
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = o("WAWebAeaSendRules").inferAeaUserThreadStateForSend(
              e,
              [],
              r,
              o("WAWebAeaSendRules").isNonE2eeBusinessPrivacyMode(
                a == null ? void 0 : a.privacyMode,
              ),
              (i == null ? void 0 : i.isHosted) === !0,
            );
          return (
            l != null && o("WAWebAeaAccountState").isAeaNonE2eeAccountState(l)
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebAeaIdentityChangeBaseline",
            ).readAeaStoredAccountAfterIdentityChange(e),
            n = t.baseline,
            r = t.stored;
          return n != null ? n : r;
        })),
        X.apply(this, arguments)
      );
    }
    ((l.readAeaThreadState = y),
      (l.isAeaEnforcedE2eeChat = S),
      (l.updateAeaThreadState = L),
      (l.readNewChatNonE2eeState = k),
      (l.settleNewChatNonE2eeState = T),
      (l.hasAeaThreadStateChat = x),
      (l.updateAeaThreadStateInBackground = P),
      (l.updateAeaThreadStateFromUnsignedSource = N),
      (l.ensureAeaNonE2eeDisclosure = W),
      (l.recordAeaNewChatDisclosure = V));
  },
  98,
);
