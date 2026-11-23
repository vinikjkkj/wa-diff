__d(
  "WAWebAeaSendReconciler",
  [
    "$InternalEnum",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaAdvState",
    "WAWebAeaRefresh",
    "WAWebAeaRollout",
    "WAWebAeaSendRules",
    "WAWebAeaTelemetry",
    "WAWebAeaThreadStateStore",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBusinessProfileVersioningBridge",
    "WAWebDBDeviceListFanout",
    "WAWebDBUpdateMessageTable",
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleMsgError",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebProtobufsE2E.pb",
    "WAWebQueryBusinessProfile",
    "WAWebSendMsgTypes",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSyncContactJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "authorizedIdentityKey",
        "isIdentityChangedSinceSend",
        "requester",
      ],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x = n("$InternalEnum")({
        MATCH: "match",
        AUTO_UPGRADE: "auto_upgrade",
        AUTO_DOWNGRADE: "auto_downgrade",
        REJECT: "reject",
        SKIPPED_NOT_MONITORED: "skipped_not_monitored",
        SKIPPED_NO_THREAD_STATE: "skipped_no_thread_state",
        SKIPPED_HOSTED_SELF: "skipped_hosted_self",
        SKIPPED_NO_ANSWER: "skipped_no_answer",
      });
    async function $(e) {
      var t = e.fanoutDevices,
        n = e.message,
        a = e.msgRecord,
        i = e.recipient;
      if (
        !me({
          recipient: i,
          fanoutDevices: t,
          message: n,
          isBotFeedbackMessage: o("WAWebMsgGetters").getIsBotFeedbackMessage(
            a.data,
          ),
        })
      )
        return null;
      o("WAWebAeaAccountCategory").logAeaGatesOnce();
      var l = o("WAWebAeaRollout").isAeaEnforcementEnabled(),
        u = null;
      try {
        var c,
          d = o("WAWebWidFactory").asUserWidOrThrow(i),
          m = await o("WAWebAeaAccountCategory").getAeaAccountCategory(d, t);
        if (!o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(m))
          return (await j(a, !1), null);
        l = o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(m);
        var p = l ? await V(i) : null;
        u = p == null ? void 0 : p.turn;
        var _ = await Y(d, t, m),
          f = p == null || (c = p.expiredTurn) == null ? void 0 : c.baseline,
          g =
            f == null
              ? _
              : babelHelpers.extends({}, _, {
                  initialAccount: f.initialAccount,
                });
        return (u != null && ((u.baseline = g), q.set(g, u)), g);
      } catch (e) {
        var h;
        if (
          ((h = u) == null || h.end(),
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " baseline read failed enforced=",
                  "",
                ])),
              i.toLogString(),
              String(l),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-send-baseline-read-fail"),
          !l)
        )
          return (await j(a, !1), null);
        throw new (o("WAWebHandleMsgError").AeaSendBlockedError)();
      }
    }
    async function P(e) {
      try {
        return await N(e);
      } finally {
        B(e.baseline);
      }
    }
    async function N(e) {
      var t = e.baseline,
        n = e.fanoutDevices,
        a = e.message,
        i = e.msgRecord,
        l = e.recipient,
        s = t.isEnforced;
      s || (await j(i, !1));
      var m;
      try {
        m = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(
          o("WAWebWidFactory").asUserWidOrThrow(l),
        );
      } catch (e) {
        if (
          (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " evidence read failed enforced=",
                  "",
                ])),
              l.toLogString(),
              String(s),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-send-evidence-read-fail"),
          !s)
        )
          return F(t, n, !1);
        throw new (o("WAWebHandleMsgError").AeaSendBlockedError)();
      }
      var p = (async function () {
        return X(
          {
            recipient: l,
            fanoutDevices: n,
            message: a,
            isBotFeedbackMessage: o("WAWebMsgGetters").getIsBotFeedbackMessage(
              i.data,
            ),
          },
          t,
          m,
        );
      })().catch(function (e) {
        return (
          e instanceof o("WAWebHandleMsgError").AeaSendBlockedError ||
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] send reconciliation failed unexpectedly",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-send-reconcile-unexpected-error"),
          null
        );
      });
      if (!s) return F(t, n, !1);
      var _ = await p;
      if ((_ == null ? void 0 : _.outcome) === x.SKIPPED_NOT_MONITORED)
        return n;
      if (_ == null || _.outcome === x.REJECT)
        throw new (o("WAWebHandleMsgError").AeaSendBlockedError)();
      var f = _.outcome,
        g = _.threadState;
      if (f === x.AUTO_DOWNGRADE)
        return (await z(i, !1), await M(l, _.downgradedState), F(t, n, !1));
      var h =
          f === x.AUTO_UPGRADE ||
          g === o("WAWebAeaAccountState").AeaAccountState.E2EE,
        y = ce(l, n, h);
      if (
        y.length < n.length &&
        !y.some(function (e) {
          return e.isSameAccountAndAddressingMode(l);
        })
      )
        throw (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " blocked: no device left after excluding hosted devices",
                ])),
              l.toLogString(),
            )
            .sendLogs("aea-send-no-recipient-device"),
          new (o("WAWebHandleMsgError").AeaSendBlockedError)()
        );
      return (
        f === x.AUTO_UPGRADE ? await z(i, !0) : await j(i, h),
        !h && f !== x.SKIPPED_HOSTED_SELF && (await M(l, g)),
        F(t, y, h)
      );
    }
    async function M(e, t) {
      try {
        await o("WAWebAeaThreadStateStore").ensureAeaNonE2eeDisclosure(
          o("WAWebWidFactory").asUserWidOrThrow(e),
          t,
        );
      } catch (t) {
        throw (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " blocked: non-E2EE disclosure failed",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-send-disclosure-fail"),
          new (o("WAWebHandleMsgError").AeaSendBlockedError)()
        );
      }
    }
    function w(e) {
      var t;
      return e == null ? null : (t = A.get(e)) != null ? t : null;
    }
    var A = new WeakMap();
    function F(e, t, n) {
      return (A.set(e, { devices: t, isE2eeSend: n }), t);
    }
    async function O(e) {
      var t = e.baseline,
        n = e.fanoutDevices,
        a = e.message,
        i = e.msgRecord,
        l = e.recipient;
      if (
        !(
          !t.isEnforced ||
          t.initialAccount.accountState !==
            o("WAWebAeaAccountState").AeaAccountState.NOT_SET
        )
      )
        try {
          var s = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(
            o("WAWebWidFactory").asUserWidOrThrow(l),
          );
          if (
            s.accountState === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
          )
            return;
          var u = await X(
              {
                recipient: l,
                fanoutDevices: n,
                message: a,
                isBotFeedbackMessage: o(
                  "WAWebMsgGetters",
                ).getIsBotFeedbackMessage(i.data),
              },
              t,
              s,
            ),
            c = u.outcome;
          c === x.AUTO_UPGRADE
            ? await z(i, !0)
            : c === x.AUTO_DOWNGRADE && (await z(i, !1));
        } catch (e) {
          e instanceof o("WAWebHandleMsgError").AeaSendBlockedError ||
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] send account=",
                    " failed to apply the first use after a failed setup",
                  ])),
                l.toLogString(),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-send-first-use-recovery-fail");
        }
    }
    function B(e) {
      if (e != null) {
        var t = q.get(e);
        (q.delete(e), t == null || t.end());
      }
    }
    var W = new Map(),
      q = new WeakMap(),
      U = 40 * 1e3;
    async function V(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e),
        n = t.isBot()
          ? t.toString()
          : o("WAWebLidMigrationUtils").toUserLidOrThrow(t).toString(),
        a = W.get(n),
        i = r("WAWebNoop"),
        l = new Promise(function (e) {
          i = e;
        }),
        s = r("WAWebNoop"),
        u = new Promise(function (e) {
          s = e;
        }),
        c = { end: i, baseline: null, isStoringDecision: !1, isExpired: !1 },
        d = { turn: c, started: u, ended: l };
      (W.set(n, d),
        l.then(function () {
          W.get(n) === d && W.delete(n);
        }));
      var m = null;
      return (
        a != null && (await a.started, (m = await H(a))),
        s(),
        { turn: c, expiredTurn: m }
      );
    }
    async function H(e) {
      try {
        return (
          await o("WAPromiseTimeout").promiseTimeout(
            e.ended,
            U,
            "AEA send decision turn timed out",
          ),
          null
        );
      } catch (t) {
        return e.turn.isStoringDecision
          ? (await e.ended, null)
          : ((e.turn.isExpired = !0),
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] stopped waiting for an earlier send's decision",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("aea-send-decision-turn-timeout"),
            e.turn);
      }
    }
    function G(e, t) {
      var n = q.get(e);
      if (
        !(
          n == null ||
          t === o("WAWebAeaSendRules").AeaSendDecision.MATCH ||
          (t === o("WAWebAeaSendRules").AeaSendDecision.AUTO_UPGRADE &&
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage())
        )
      ) {
        if (n.isExpired)
          throw (
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] send blocked: its decision turn expired",
                  ])),
              )
              .sendLogs("aea-send-decision-turn-expired"),
            new (o("WAWebHandleMsgError").AeaSendBlockedError)()
          );
        n.isStoringDecision = !0;
      }
    }
    async function z(e, t) {
      e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
        (await K(e.data.id, {
          hostedBizEncStateMismatch: !0,
          aeaAutoUpgrade: t,
        }));
    }
    async function j(e, t) {
      e.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
        o("WAWebMsgGetters").getHostedBizEncStateMismatch(e.data) !== !0 ||
        (o("WAWebMsgGetters").getAeaAutoUpgrade(e.data) === !0) === t ||
        (await K(e.data.id, {
          hostedBizEncStateMismatch: !1,
          aeaAutoUpgrade: !1,
        }));
    }
    async function K(e, t) {
      try {
        await o("WAWebDBUpdateMessageTable").updateMessageTable(e, t);
      } catch (e) {
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to mark the automatic update message",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-automatic-update-icon-fail");
        return;
      }
      o("WAWebBackendApi").frontendFireAndForget(
        "updateMsgModelAeaAutomaticUpdate",
        babelHelpers.extends({ msgId: e }, t),
      );
    }
    async function Q(e) {
      return (await X(e)).outcome;
    }
    async function X(e, t, n) {
      if (!me(e))
        return { outcome: x.SKIPPED_NOT_MONITORED, threadState: null };
      var r = o("WAWebWidFactory").asUserWidOrThrow(e.recipient),
        a = t;
      if (a == null) {
        var i = await o("WAWebAeaAccountCategory").getAeaAccountCategory(
          r,
          e.fanoutDevices,
        );
        if (!o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(i))
          return { outcome: x.SKIPPED_NOT_MONITORED, threadState: null };
        a = await Y(r, e.fanoutDevices, i);
      }
      var l = await ne(r, a, n != null ? n : a.initialAccount),
        s = l.accountState,
        u = l.outcome,
        c = l.threadState;
      return {
        outcome: u,
        threadState: c != null ? c : a.threadState,
        downgradedState: u === x.AUTO_DOWNGRADE ? s : null,
      };
    }
    async function Y(e, t, n) {
      var r,
        a = o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(n),
        i = await Promise.all([
          o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
          o("WAWebAeaThreadStateStore").readAeaThreadState(e),
          o("WAWebAeaAdvState").readAeaAdvState(e),
          he(e),
          o("WAWebApiContact").getContactRecord(e),
        ]),
        l = i[0],
        s = i[1],
        u = i[2],
        c = i[3],
        d = i[4];
      return {
        initialAccount: l,
        isEnforced: a,
        category: n,
        mayFetchBusinessAccountType:
          a &&
          s == null &&
          l.accountState === o("WAWebAeaAccountState").AeaAccountState.E2EE,
        threadState:
          (r = s == null ? void 0 : s.state) != null
            ? r
            : o("WAWebAeaSendRules").inferAeaUserThreadStateForSend(
                e,
                t,
                u,
                c,
                (d == null ? void 0 : d.isHosted) === !0,
              ),
      };
    }
    var J = new Set(),
      Z = 10 * 1e3;
    async function ee(e) {
      var t = e.toString();
      if (J.has(t) || !(await te(e))) return null;
      J.add(t);
      try {
        var n,
          a = await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebQueryBusinessProfile").queryBusinessProfile([{ wid: e }]),
            Z,
            "AEA business account type timed out",
          ),
          i = a[0],
          l =
            (i == null ? void 0 : i.aeaAccountType) == null
              ? null
              : o("WAWebAeaAccountState").AeaAccountState.cast(
                  i.aeaAccountType,
                );
        return l == null ||
          !o("WAWebAeaAccountState").isAeaNonE2eeAccountState(l)
          ? null
          : (await o(
              "WAWebAeaThreadStateStore",
            ).updateAeaThreadStateFromUnsignedSource(e, l),
            (n = await o("WAWebAeaThreadStateStore").readAeaThreadState(e)) ==
            null
              ? void 0
              : n.state);
      } catch (n) {
        return (
          J.delete(t),
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " failed to fetch the business account type",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("aea-send-business-account-type-fail"),
          null
        );
      }
    }
    async function te(e) {
      try {
        return (
          (await o(
            "WAWebApiVerifiedBusinessName",
          ).getVerifiedBusinessNameRecordLidAware(e)) != null
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " failed to read the verified business record",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-send-verified-business-read-fail"),
          !1
        );
      }
    }
    async function ne(e, t, n) {
      var r = t.category,
        a = t.initialAccount,
        i = t.threadState,
        l = e.toLogString(),
        s = o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(r);
      if (i == null)
        return (
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " outcome=skipped_no_thread_state",
              ])),
            l,
          ),
          { outcome: x.SKIPPED_NO_THREAD_STATE }
        );
      if (
        a.accountState === o("WAWebAeaAccountState").AeaAccountState.NOT_SET &&
        n.accountState !== o("WAWebAeaAccountState").AeaAccountState.NOT_SET
      ) {
        var u = pe(
          r,
          i,
          n.accountState,
          o("WAWebAeaAccountState").AeaAccountState.NOT_SET,
        );
        G(t, u);
        var c = _e(e, n, u, i, r);
        return (
          await fe(e, c, n.accountState, r),
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " phase=first_answer account_state=",
                " outcome=",
                " category=",
                " enforced=",
                "",
              ])),
            l,
            n.accountState,
            c,
            r,
            String(s),
          ),
          { outcome: c, accountState: n.accountState }
        );
      }
      var d = pe(r, i, n.accountState, a.accountState);
      if (
        (o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] send account=",
              " thread_state=",
              " account_state=",
              " initial_decision=",
              " category=",
              " enforced=",
              "",
            ])),
          l,
          i,
          n.accountState,
          d,
          r,
          String(s),
        ),
        d === o("WAWebAeaSendRules").AeaSendDecision.MATCH)
      )
        return { outcome: x.MATCH };
      if (
        d === o("WAWebAeaSendRules").AeaSendDecision.AUTO_UPGRADE &&
        o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()
      )
        return (
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " outcome=skipped_hosted_self",
              ])),
            l,
          ),
          { outcome: x.SKIPPED_HOSTED_SELF }
        );
      var m = await o("WAWebAeaRefresh").refreshAeaAccount(
          e,
          o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
            .AEA_SEND_TIME_RECONCILATION,
          { ignoreBackoff: s },
        ),
        p = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
        _ = i,
        f = pe(r, i, p.accountState, a.accountState),
        g =
          f === o("WAWebAeaSendRules").AeaSendDecision.REJECT &&
          t.mayFetchBusinessAccountType === !0 &&
          o("WAWebAeaAccountState").isAeaNonE2eeAccountState(p.accountState)
            ? await ee(e)
            : null;
      if (
        (g != null && ((_ = g), (f = pe(r, g, p.accountState, a.accountState))),
        !s &&
          p.accountState ===
            o("WAWebAeaAccountState").AeaAccountState.NOT_SET &&
          m !== o("WAWebAeaRefresh").AeaRefreshResult.SUCCESS)
      )
        return (
          f === o("WAWebAeaSendRules").AeaSendDecision.REJECT &&
            m !== o("WAWebAeaRefresh").AeaRefreshResult.BACKED_OFF &&
            o("WAWebAeaTelemetry").reportAeaSendReject(p.accountState, _, r),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " thread_state=",
                " refresh=",
                " outcome=skipped_no_answer",
              ])),
            l,
            _,
            m,
          ),
          { outcome: x.SKIPPED_NO_ANSWER }
        );
      (f === o("WAWebAeaSendRules").AeaSendDecision.REJECT &&
        _ === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
        o("WAWebAeaAccountState").isAeaNonE2eeAccountState(p.accountState) &&
        r !== o("WAWebAeaAccountCategory").AeaAccountCategory.BOT &&
        re(e, p, r, s),
        G(t, f));
      var h = _e(e, p, f, _, r);
      return (
        await fe(e, h, p.accountState, r),
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] send account=",
              " thread_state=",
              " account_state=",
              " refresh=",
              " outcome=",
              "",
            ])),
          l,
          _,
          p.accountState,
          m,
          h,
        ),
        { outcome: h, accountState: p.accountState, threadState: _ }
      );
    }
    function re(e, t, n, a) {
      ae(e, t, n, a).catch(function (t) {
        o("WALogger")
          .WARN(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " snapshot race check failed",
              ])),
            e.toLogString(),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("aea-send-snapshot-race-check-fail");
      });
    }
    var oe = 5 * 1e3;
    async function ae(e, t, n, r) {
      var a = await ie(e, t);
      if (a != null) {
        if (a.threadState === t.accountState) {
          le(e, t, n, { isEnforced: r, isLate: !1 });
          return;
        }
        if (a.threadState === o("WAWebAeaAccountState").AeaAccountState.E2EE) {
          await o("WAPromiseDelays").delayMs(oe);
          var i = await ie(e, t);
          i != null &&
            i.threadState === t.accountState &&
            i.cooldownStartedAtMs != null &&
            i.cooldownStartedAtMs !== a.cooldownStartedAtMs &&
            i.cooldownIdentityKey === t.identityKey &&
            le(e, t, n, { isEnforced: r, isLate: !0 });
        }
      }
    }
    async function ie(e, t) {
      var n = await Promise.all([
          o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(
            o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
          ),
          o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
        ]),
        r = n[0],
        a = r[0],
        i = n[1];
      return i.identityKey !== t.identityKey ||
        i.accountState !== t.accountState
        ? null
        : {
            threadState:
              (a == null ? void 0 : a.aeaThreadState) == null
                ? null
                : o("WAWebAeaAccountState").AeaAccountState.cast(
                    a.aeaThreadState,
                  ),
            cooldownStartedAtMs: a == null ? void 0 : a.aeaCooldownStartedAtMs,
            cooldownIdentityKey: a == null ? void 0 : a.aeaCooldownIdentityKey,
          };
    }
    function le(e, t, n, r) {
      var a = r.isEnforced,
        i = r.isLate;
      o("WALogger")
        .WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] send account=",
              " snapshot race suspect baseline_thread=",
              " stored_thread=",
              " account_state=",
              " category=",
              " enforced=",
              " late=",
              "",
            ])),
          e.toLogString(),
          o("WAWebAeaAccountState").AeaAccountState.E2EE,
          t.accountState,
          t.accountState,
          n,
          String(a),
          String(i),
        )
        .sendLogs("aea-send-snapshot-race-suspect");
    }
    async function se(t) {
      var n,
        r,
        a,
        i = t.authorizedIdentityKey,
        l = t.isIdentityChangedSinceSend,
        s = t.requester,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (!o("WAWebAeaRollout").isAeaEnforcementEnabled()) return !1;
      var c = await o("WAWebDBDeviceListFanout").getFanOutList({
        wids: [u.recipient],
        chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: u.recipient,
      });
      if (
        !(await o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForAccount(
          o("WAWebWidFactory").asUserWidOrThrow(u.recipient),
          c,
        ))
      )
        return !1;
      var d = await Q(babelHelpers.extends({}, u, { fanoutDevices: c }));
      if (d === x.REJECT) return !0;
      if (!l && !(await ue(s, i))) return !1;
      var m = o("WAWebWidFactory").asUserWidOrThrow(u.recipient),
        p =
          (n =
            (r = await o("WAWebAeaThreadStateStore").readAeaThreadState(m)) ==
            null
              ? void 0
              : r.state) != null
            ? n
            : o("WAWebAeaSendRules").inferAeaUserThreadStateForSend(
                m,
                c,
                await o("WAWebAeaAdvState").readAeaAdvState(m),
                await he(m),
                ((a = await o("WAWebApiContact").getContactRecord(m)) == null
                  ? void 0
                  : a.isHosted) === !0,
              );
      return (
        p === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE ||
        p === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
      );
    }
    async function ue(e, t) {
      if (e == null || t == null) return !1;
      var n = await o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .getIdentityWithRowId(
          o("WAWebSignalCommonUtils").createSignalAddress(e),
        );
      return (n == null ? void 0 : n.identityKey) !== t;
    }
    function ce(e, t, n) {
      return !t.some(function (t) {
        return ye(t, e);
      }) || !n
        ? t
        : (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] send account=",
                " excluding hosted devices of an E2EE chat",
              ])),
            e.toLogString(),
          ),
          t.filter(function (t) {
            return !ye(t, e);
          }));
    }
    async function de(e, t) {
      var n = ce(
        e,
        t,
        await o("WAWebAeaThreadStateStore").isAeaEnforcedE2eeChat(e),
      );
      return t.filter(function (e) {
        return !n.includes(e);
      });
    }
    function me(e) {
      var t,
        n = (t = e.message.protocolMessage) == null ? void 0 : t.type;
      return (
        o("WAWebAeaAccountCategory").isRegularUserOrAeaBot(e.recipient) &&
        !o("WAWebUserUtils").isMeAccount(e.recipient) &&
        !e.isBotFeedbackMessage &&
        n !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        n !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .MESSAGE_UNSCHEDULE &&
        o("WAWebAeaRollout").isAeaMonitoringEnabled()
      );
    }
    function pe(e, t, n, r) {
      return e === o("WAWebAeaAccountCategory").AeaAccountCategory.BOT
        ? o("WAWebAeaSendRules").decideAeaBotSend(n)
        : o("WAWebAeaSendRules").decideAeaUserSend(t, n, r);
    }
    function _e(e, t, n, r, a) {
      var i = t.accountState;
      e: {
        if (n === o("WAWebAeaSendRules").AeaSendDecision.MATCH) return x.MATCH;
        if (n === o("WAWebAeaSendRules").AeaSendDecision.AUTO_UPGRADE) {
          if (
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage()
          )
            return x.SKIPPED_HOSTED_SELF;
          return (
            o("WAWebAeaTelemetry").reportAeaAutomaticUpdate(
              o("WAWebAeaAccountState").AeaAccountState.E2EE,
              i,
              r,
              a,
            ),
            ge(e),
            x.AUTO_UPGRADE
          );
          break e;
        }
        if (n === o("WAWebAeaSendRules").AeaSendDecision.AUTO_DOWNGRADE) {
          return (
            o("WAWebAeaTelemetry").reportAeaAutomaticUpdate(i, i, r, a),
            ge(e),
            x.AUTO_DOWNGRADE
          );
          break e;
        }
        if (n === o("WAWebAeaSendRules").AeaSendDecision.REJECT) {
          return (
            o("WAWebAeaTelemetry").reportAeaSendReject(i, r, a),
            ge(e),
            x.REJECT
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function fe(e, t, n, a) {
      var i =
        t === x.AUTO_UPGRADE
          ? o("WAWebAeaAccountState").AeaAccountState.E2EE
          : t === x.AUTO_DOWNGRADE
            ? n
            : null;
      if (
        !(
          i == null ||
          !o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(a)
        )
      ) {
        var l = !1;
        try {
          l = await o("WAWebAeaThreadStateStore").updateAeaThreadState(e, i, {
            shouldRestartCooldown: !0,
            category: a,
            isSendTimeUpdate: !0,
          });
        } catch (t) {
          o("WALogger")
            .WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] send account=",
                  " failed to store the automatic update",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-send-thread-state-write-fail");
        }
        if (!l) throw r("err")("automatic update not stored");
      }
    }
    function ge(e) {
      o("WAWebSyncContactJob")
        .syncContactListJob(
          [e],
          !0,
          "query",
          o(
            "WAWebBusinessProfileVersioningBridge",
          ).getBusinessProfileQueryVersion(),
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] contact USync after send reconciliation failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-send-contact-usync-fail");
        });
    }
    async function he(e) {
      var t;
      return o("WAWebAeaSendRules").isNonE2eeBusinessPrivacyMode(
        (t = await o(
          "WAWebApiVerifiedBusinessName",
        ).getVerifiedBusinessNameRecordLidAware(e)) == null
          ? void 0
          : t.privacyMode,
      );
    }
    function ye(e, t) {
      return e.isHosted() && e.isSameAccountAndAddressingMode(t);
    }
    ((l.AeaSendReconciliationOutcome = x),
      (l.captureAeaSendBaseline = $),
      (l.reconcileAeaBeforeEncryption = P),
      (l.getAeaDecidedSend = w),
      (l.applyAeaFirstUseAfterFailedSetup = O),
      (l.releaseAeaSendDecisionTurn = B),
      (l.reconcileAeaUserSend = Q),
      (l.isAeaRetryBlocked = se),
      (l.getAeaSendDevices = ce),
      (l.getAeaExcludedSendDevices = de),
      (l.isAeaSendMonitoringCandidate = me));
  },
  98,
);
