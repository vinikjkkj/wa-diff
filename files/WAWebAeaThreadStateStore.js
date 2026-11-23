__d(
  "WAWebAeaThreadStateStore",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    async function h(e) {
      if (o("WAWebAeaAccountCategory").isAeaBotAccount(e)) return null;
      var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
        n = await o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(
          t,
        ),
        r = n[0],
        a =
          (r == null ? void 0 : r.aeaThreadState) == null
            ? null
            : o("WAWebAeaAccountState").AeaAccountState.cast(r.aeaThreadState);
      if (
        r == null ||
        a == null ||
        a === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
      )
        return null;
      var i = 0,
        l = r.aeaCooldownStartedAtMs,
        s = l == null ? 0 : l + o("WATimeUtils").DAY_MILLISECONDS - Date.now();
      return (
        s > 0 && (await y(t, r, a)) && (i = s),
        { state: a, cooldownRemainingMs: i }
      );
    }
    async function y(e, t, n) {
      var r,
        a = await w(e),
        i = a.accountState,
        l = a.identityKey;
      return (l != null ? l : null) !==
        ((r = t.aeaCooldownIdentityKey) != null ? r : null)
        ? !1
        : i === o("WAWebAeaAccountState").AeaAccountState.NOT_SET ||
            o("WAWebAeaAccountState").isAeaNonE2eeAccountState(i) ===
              o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n);
    }
    async function C(e) {
      var t;
      return (
        o("WAWebAeaRollout").isAeaEnforcementEnabled() &&
        e.isRegularUser() &&
        ((t = await h(o("WAWebWidFactory").asUserWidOrThrow(e))) == null
          ? void 0
          : t.state) === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
        (await o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForAccount(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        ))
      );
    }
    async function b(e, t, n) {
      var r = n.category,
        a = n.isSendTimeUpdate,
        i = a === void 0 ? !1 : a,
        l = n.shouldRestartCooldown,
        s = n.shouldRestartCooldownOnUpgrade,
        u = s === void 0 ? !1 : s;
      if (
        o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
        !o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(
          r != null
            ? r
            : await o("WAWebAeaAccountCategory").getAeaAccountCategory(e),
        )
      )
        return !1;
      var c = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
      return T(c, async function () {
        if (l) return D(c, t, !0, !i);
        var e = await h(c);
        return t === o("WAWebAeaAccountState").AeaAccountState.E2EE && e == null
          ? !0
          : D(
              c,
              t,
              u &&
                t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                e != null &&
                o("WAWebAeaAccountState").isAeaNonE2eeAccountState(e.state),
              !i,
            );
      });
    }
    async function v(t) {
      try {
        if (
          o("WAWebAeaAccountCategory").isAeaBotAccount(t) ||
          !o("WAWebAeaRollout").isAeaMonitoringEnabled()
        )
          return null;
        var n = await w(o("WAWebLidMigrationUtils").toUserLidOrThrow(t)),
          a = n.accountState;
        if (!o("WAWebAeaAccountState").isAeaNonE2eeAccountState(a)) return null;
        var i = await o("WAWebAeaAccountCategory").getAeaAccountCategory(t);
        return o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(i)
          ? {
              state: a,
              isEnforced: o(
                "WAWebAeaAccountCategory",
              ).isAeaEnforcementEnabledForCategory(i),
            }
          : null;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] failed to read the initial thread state",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-initial-thread-state-fail"),
          null
        );
      }
    }
    async function S(e) {
      if (
        o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
        !o("WAWebAeaRollout").isAeaMonitoringEnabled()
      )
        return null;
      try {
        var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
        return await T(t, async function () {
          var n = await h(t);
          if (n != null)
            return o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n.state)
              ? {
                  state: n.state,
                  isEnforced: o(
                    "WAWebAeaAccountCategory",
                  ).isAeaEnforcementEnabledForCategory(
                    await o("WAWebAeaAccountCategory").getAeaAccountCategory(e),
                  ),
                }
              : null;
          var r = await v(e);
          return r != null && (await D(t, r.state, !1, !1)) ? r : null;
        });
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] failed to store the initial thread state",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-initial-thread-state-fail"),
          null
        );
      }
    }
    async function R(e) {
      var t = await o(
          "WAWebGetChatRecordByAccountLid",
        ).getChatRecordByAccountLid(
          o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
        ),
        n = t[0];
      return n != null;
    }
    function L(e, t, n) {
      b(e, t, n).catch(function (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to record the thread state",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-thread-state-write-fail");
      });
    }
    async function E(e, t, n) {
      var r = n === void 0 ? {} : n,
        a = r.shouldDisclose,
        i = a === void 0 ? !0 : a;
      if (!o("WAWebAeaAccountCategory").isAeaBotAccount(e)) {
        var l = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
        k(await h(l), t) ||
          ((await o("WAWebAeaAccountCategory").isAeaReceiveEnabledForAccount(
            e,
          )) &&
            (await T(l, async function () {
              var e = await h(l);
              if (!k(e, t)) {
                if (e != null && e.cooldownRemainingMs > 0) {
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] thread state account=",
                        " ignored_state=",
                        " cooldown_state=",
                        "",
                      ])),
                    l.toLogString(),
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
                var n = await w(l),
                  r = n.accountState;
                if (
                  t === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
                  o("WAWebAeaAccountState").isAeaNonE2eeAccountState(r)
                ) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] thread state account=",
                        " ignored_state=",
                        " account_state=",
                        "",
                      ])),
                    l.toLogString(),
                    t,
                    r,
                  );
                  return;
                }
                (await D(l, t, !1, i)) &&
                  o("WAWebAeaTelemetry").reportAeaUnsignedThreadUpdate(t);
              }
            })));
      }
    }
    function k(e, t) {
      return (
        (e == null ? void 0 : e.state) === t ||
        (e == null && t === o("WAWebAeaAccountState").AeaAccountState.E2EE)
      );
    }
    var I = new (o("WAPromiseQueue").PromiseQueueMap)();
    function T(e, t) {
      return I.enqueue(e.toString(), t);
    }
    async function D(e, t, n, a) {
      a === void 0 && (a = !0);
      var i = await o(
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
          (c.aeaCooldownIdentityKey = (await w(e)).identityKey)),
        u || (c.aeaDisclosedThreadState = null),
        await o("WAWebSchemaChat").getChatTable().merge(l.id, c),
        o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
          updates: [
            { id: o("WAWebWidFactory").createWid(l.id), aeaThreadState: s },
          ],
        }),
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
          x(e).catch(function (e) {
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
    }
    function x(e, t) {
      if (o("WAWebAeaAccountCategory").isAeaBotAccount(e))
        return Promise.resolve();
      var n = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
      return T(n, function () {
        return $(n, t);
      });
    }
    async function $(e, t) {
      var n = await o(
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
              !(await o(
                "WAWebAeaAccountCategory",
              ).isAeaEnforcementEnabledForAccount(e)))
          )
        ) {
          if (await M(e)) {
            a.aeaDisclosedThreadState != null &&
              (await o("WAWebSchemaChat")
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
                (await o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: l,
                  newMsg: s,
                  handleSingleMsgOrigin: "aeaNonE2eeDisclosure",
                  messageOverwriteOption: o("WAWebHandleMsgTypes")
                    .MessageOverwriteOption.NO_OVERWRITE,
                  preserveOrder: !1,
                }),
                (await o("WAWebSchemaMessage").getMessageTable().get(u)) ==
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
                await N(a.id, i));
            }
          }
        }
      }
    }
    async function P(e, t, n) {
      try {
        var a = o("WAWebLidMigrationUtils").toUserLidOrThrow(e);
        await T(a, async function () {
          var e = await o(
              "WAWebGetChatRecordByAccountLid",
            ).getChatRecordByAccountLid(a),
            r = e[0];
          r != null &&
            (await o("WAWebSchemaMessage").getMessageTable().get(n)) != null &&
            (await N(r.id, t));
        });
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
    }
    async function N(e, t) {
      try {
        await o("WAWebSchemaChat")
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
    }
    async function M(e) {
      var t = await Promise.all([
          o("WAWebAeaAdvState").readAeaAdvState(e),
          o(
            "WAWebApiVerifiedBusinessName",
          ).getVerifiedBusinessNameRecordLidAware(e),
          o("WAWebApiContact").getContactRecord(e),
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = o("WAWebAeaSendRules").inferAeaUserThreadStateForSend(
          e,
          [],
          n,
          o("WAWebAeaSendRules").isNonE2eeBusinessPrivacyMode(
            r == null ? void 0 : r.privacyMode,
          ),
          (a == null ? void 0 : a.isHosted) === !0,
        );
      return i != null && o("WAWebAeaAccountState").isAeaNonE2eeAccountState(i);
    }
    async function w(e) {
      var t = await o(
          "WAWebAeaIdentityChangeBaseline",
        ).readAeaStoredAccountAfterIdentityChange(e),
        n = t.baseline,
        r = t.stored;
      return n != null ? n : r;
    }
    ((l.readAeaThreadState = h),
      (l.isAeaEnforcedE2eeChat = C),
      (l.updateAeaThreadState = b),
      (l.readNewChatNonE2eeState = v),
      (l.settleNewChatNonE2eeState = S),
      (l.hasAeaThreadStateChat = R),
      (l.updateAeaThreadStateInBackground = L),
      (l.updateAeaThreadStateFromUnsignedSource = E),
      (l.ensureAeaNonE2eeDisclosure = x),
      (l.recordAeaNewChatDisclosure = P));
  },
  98,
);
