__d(
  "WAWebAeaGossipMonitor",
  [
    "WALogger",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaAdvState",
    "WAWebAeaGossipRules",
    "WAWebAeaIdentityChangeBaseline",
    "WAWebAeaIdentityChangeNotice",
    "WAWebAeaRefresh",
    "WAWebAeaRollout",
    "WAWebAeaTelemetry",
    "WAWebAeaThreadStateStore",
    "WAWebCoexV2GatingUtils",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebSignalProtocolStore",
    "WAWebSyncContactJob",
    "WAWebUserUtils",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
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
      T = 32;
    async function D(e, t) {
      if (o("WAWebAeaRollout").isAeaMonitoringEnabled()) {
        var n = $(e);
        if (n != null) {
          n.isLid() &&
            !o("WAWebUserUtils").isMeAccount(n) &&
            (await G(o("WAWebWidFactory").asUserWidOrThrow(n), t));
          return;
        }
        !o("WAWebAeaAccountCategory").isRegularUserOrAeaBot(e.author) ||
          o("WAWebUserUtils").isMeAccount(e.author) ||
          (await N(
            o("WAWebWidFactory").asUserWidOrThrow(e.author),
            t,
            e.offline != null,
          ));
      }
    }
    function x(t, n) {
      var r = $(t);
      if (r == null || !r.isRegularUser() || (n != null && P(n) != null))
        return !1;
      var a =
        (n == null ? void 0 : n.accountEncryptionAttestation) == null
          ? "no_attestation"
          : "invalid";
      if (o("WAWebAeaRollout").isAeaEnforcementEnabled()) {
        var i;
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] WASS drop account=",
                " msg=",
                " reason=",
                "",
              ])),
            r.toLogString(),
            (i = t.externalId) != null ? i : "n/a",
            a,
          ),
          !0
        );
      }
      return (o("WAWebAeaTelemetry").reportAeaWassWouldDrop(r, a), !1);
    }
    function $(e) {
      return o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
        e.author,
        e.metaFrom,
      )
        ? e.metaFrom
        : null;
    }
    function P(e) {
      var t = o("WAWebAeaGossipRules").readAeaGossipClaims(e).fromAttestation,
        n = e.associatedPrimaryIdentityKey;
      return t != null &&
        o("WAWebAeaAccountState").isAeaNonE2eeAccountState(t) &&
        (n == null || n.byteLength === T)
        ? t
        : null;
    }
    async function N(e, t, n) {
      var r = e.toLogString(),
        a = o("WAWebAeaGossipRules").readAeaGossipClaims(t),
        i = a.fromAttestation,
        l = a.fromIcdc;
      l != null &&
        i != null &&
        l !== i &&
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] gossip account=",
              " carriers_disagree icdc_state=",
              " attestation_state=",
              "",
            ])),
          r,
          l,
          i,
        );
      var c = i != null ? i : l;
      if (c != null) {
        var d = await o(
            "WAWebAeaIdentityChangeBaseline",
          ).readAeaStoredAccountAfterIdentityChange(e),
          m = d.baseline,
          p = d.stored,
          _ = p.identityKey != null && m != null ? m : p,
          f = _.identityKey;
        if (f == null) {
          A(e, c) &&
            (await o("WAWebAeaAccountCategory").isAeaReceiveEnabledForAccount(
              e,
            )) &&
            (await O(e, c));
          return;
        }
        var g = o("WAWebAeaGossipRules").decideAeaGossip(
          _.accountState,
          c,
          o("WAWebAeaAccountCategory").isAeaBotAccount(e),
        );
        if (g !== o("WAWebAeaGossipRules").AeaGossipDecision.UNCHANGED) {
          var h = await o("WAWebAeaAccountCategory").getAeaAccountCategory(e);
          if (o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(h)) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] gossip account=",
                  " stored_state=",
                  " claimed_state=",
                  " decision=",
                  "",
                ])),
              r,
              _.accountState,
              c,
              g,
            );
            e: {
              if (g === o("WAWebAeaGossipRules").AeaGossipDecision.UNCHANGED)
                return;
              if (g === o("WAWebAeaGossipRules").AeaGossipDecision.REFRESH) {
                (o("WAWebAeaTelemetry").reportAeaGossipMismatch(
                  _.accountState,
                  c,
                ),
                  W(e));
                break e;
              }
              if (g === o("WAWebAeaGossipRules").AeaGossipDecision.STORE) {
                await B(e, h, f, _, c, n);
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  g,
              );
            }
          }
        }
      }
    }
    var M = new Set(),
      w = new Set();
    function A(e, t) {
      return o("WAWebAeaAccountState").isAeaNonE2eeAccountState(t)
        ? o("WAWebAeaAccountCategory").isAeaBotAccount(e) ||
          M.has(F(e, t)) ||
          !o("WAWebAeaRollout").isAeaEnforcementEnabled()
          ? (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] gossip account=",
                  " action=ignore reason=no_identity claimed_state=",
                  "",
                ])),
              e.toLogString(),
              t,
            ),
            !1)
          : !0
        : !1;
    }
    function F(e, t) {
      return e.toString() + ":" + t;
    }
    async function O(e, t) {
      var n = e.toLogString(),
        a = F(e, t);
      w.has(a) ||
        (w.add(a),
        o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd()
          .then(function () {
            return o("WAWebSyncContactJob").syncContactListJob(
              [e],
              !0,
              "query",
            );
          })
          .catch(function (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] contact sync after gossip without identity failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-gossip-no-identity-sync-fail");
          }));
      var i = !1;
      try {
        i = await o("WAWebAeaThreadStateStore").hasAeaThreadStateChat(e);
      } catch (e) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] chat lookup for gossip without identity failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-gossip-no-identity-chat-lookup-fail");
        return;
      }
      !i ||
        M.has(a) ||
        (M.add(a),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] gossip account=",
              " action=thread_state reason=no_identity claimed_state=",
              "",
            ])),
          n,
          t,
        ),
        o("WAWebAeaThreadStateStore").updateAeaThreadStateInBackground(e, t, {
          shouldRestartCooldown: !1,
        }));
    }
    async function B(e, t, n, a, i, l) {
      var s = await o("WAWebAeaAccountStateStore").compareAndSetAeaAccountState(
        e,
        n,
        a.rawAccountState,
        i,
      );
      if (!s.applied) {
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] gossip account=",
              " action=refresh reason=stale_snapshot",
            ])),
          e.toLogString(),
        ),
          W(e));
        return;
      }
      s.changed &&
        (await H(),
        a.accountState === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
          (o("WAWebAeaTelemetry").reportAeaImplicitDowngrade(),
          await o("WAWebAeaIdentityChangeNotice").showAeaIdentityChangeNotice(
            e,
            t,
            l,
          )),
        o("WAWebAeaThreadStateStore").updateAeaThreadStateInBackground(e, i, {
          shouldRestartCooldown: o(
            "WAWebAeaAccountState",
          ).isAeaNonE2eeAccountState(i),
          category: t,
        }),
        o("WAWebAeaAdvState")
          .reportAeaAdvConflictForAccount(e)
          .catch(function (e) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to compare gossiped state with ADV state",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-gossip-adv-report-fail");
          }),
        o("WAWebAeaAccountState").isAeaNonE2eeAccountState(i) && V(e));
    }
    function W(e) {
      o("WAWebAeaRefresh")
        .refreshAeaAccount(
          e,
          o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
            .AEA_GOSSIP_MISMATCH,
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] refresh after gossip failed unexpectedly",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-gossip-refresh-fail");
        });
    }
    var q = new Set();
    function U(e, t) {
      o("WAWebEventsWaitForOfflineDeliveryEnd")
        .waitForOfflineDeliveryEnd()
        .then(async function () {
          if (!o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
            return null;
          var n = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
            r = n.identityKey;
          if (r !== t)
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] WASS gossip account=",
                    " action=ignore reason=rotation_resolved",
                  ])),
                e.toLogString(),
              ),
              null
            );
          var a = e.toString() + ":" + t,
            i = o("WAWebAeaRollout").isAeaEnforcementEnabled() && !q.has(a);
          return (
            i && q.add(a),
            o("WAWebAeaRefresh").refreshAeaAccount(
              e,
              o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                .AEA_GOSSIP_MISMATCH,
              { ignoreBackoff: i },
            )
          );
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] refresh after key rotation failed unexpectedly",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-gossip-refresh-fail");
        });
    }
    function V(e) {
      o("WAWebEventsWaitForOfflineDeliveryEnd")
        .waitForOfflineDeliveryEnd()
        .then(function () {
          return o("WAWebSyncContactJob").syncContactListJob([e], !0, "query");
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] contact sync after gossip failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("aea-gossip-contact-sync-fail");
        });
    }
    async function H() {
      try {
        await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode();
      } catch (e) {
        o("WALogger")
          .WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to flush gossiped state",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-gossip-flush-fail");
      }
    }
    async function G(e, t) {
      var n = e.toLogString(),
        r = P(t),
        a = t.associatedPrimaryIdentityKey;
      if (r == null) {
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=ignore reason=invalid_evidence",
            ])),
          n,
        );
        return;
      }
      var i = await o(
          "WAWebAeaIdentityChangeBaseline",
        ).readAeaStoredAccountAfterIdentityChange(e),
        l = i.stored;
      if (
        l.identityKey == null &&
        !o("WAWebAeaRollout").isAeaEnforcementEnabled()
      ) {
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=ignore reason=no_identity_key",
            ])),
          n,
        );
        return;
      }
      if (a == null) {
        (o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=refresh reason=missing_primary_key",
            ])),
          n,
        ),
          W(e));
        return;
      }
      if (
        l.identityKey == null ||
        !o("WAWebAeaAccountState").isAeaNonE2eeAccountState(l.accountState)
      ) {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=refresh reason=no_established_non_e2ee_state stored_state=",
              "",
            ])),
          n,
          l.accountState,
        ),
          W(e));
        return;
      }
      var s = l.identityKey;
      if (
        s !== o("WAWebAeaAccountStateStore").toAeaIdentityKey(new Uint8Array(a))
      ) {
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=refresh reason=primary_key_changed",
            ])),
          n,
        ),
          U(e, s));
        return;
      }
      if (l.accountState !== r) {
        (o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] WASS gossip account=",
              " action=refresh reason=state_conflict stored_state=",
              " claimed_state=",
              "",
            ])),
          n,
          l.accountState,
          r,
        ),
          o("WAWebAeaTelemetry").reportAeaGossipMismatch(l.accountState, r),
          W(e));
        return;
      }
      o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "[aea] WASS gossip account=",
            " action=unchanged state=",
            "",
          ])),
        n,
        r,
      );
    }
    ((l.monitorAeaMessageGossip = D), (l.shouldDropAeaWassMessage = x));
  },
  98,
);
