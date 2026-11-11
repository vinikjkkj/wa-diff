__d(
  "WAWebAeaRefresh",
  [
    "$InternalEnum",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountStateStore",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebProcessKeyBundle",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      g = 1e4,
      h = n("$InternalEnum")({
        SUCCESS: "success",
        FAILED: "failed",
        OFFLINE: "offline",
        TIMED_OUT: "timed_out",
        BACKED_OFF: "backed_off",
      }),
      y = n("$InternalEnum")({
        RESOLVED: "resolved",
        IDENTITY_CHANGED: "identity_changed",
        NO_ANSWER: "no_answer",
      }),
      C = new Map(),
      b = new Map();
    function v(e, t, r) {
      return o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()
        ? E(e, S(e, t, (r == null ? void 0 : r.ignoreBackoff) === !0))
        : (f || (f = n("Promise"))).resolve(h.OFFLINE);
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("WAWebAeaAccountStateStore").readAeaStoredAccount(t),
            i = a.identityKey,
            l = t.toString() + ":" + (i != null ? i : "") + ":" + n,
            d = t.toLogString(),
            m = String(n);
          if (!r && L(l))
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] refresh account=",
                    " reason=",
                    " status=backed_off",
                  ])),
                d,
                m,
              ),
              h.BACKED_OFF
            );
          var p = t.toString() + ":" + n,
            _ = C.get(p);
          return (
            _ != null
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] refresh account=",
                      " reason=",
                      " status=joined",
                    ])),
                  d,
                  m,
                )
              : (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] refresh account=",
                      " reason=",
                      " status=started",
                    ])),
                  d,
                  m,
                ),
                (_ = D(t, n)
                  .then(function (e) {
                    return (
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[aea] refresh account=",
                            " reason=",
                            " result=",
                            "",
                          ])),
                        d,
                        m,
                        e,
                      ),
                      b.set(l, { finishedAtMs: Date.now(), result: e }),
                      e
                    );
                  })
                  .finally(function () {
                    C.delete(p);
                  })),
                C.set(p, _)),
            _
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = b.get(e);
      if (t == null) return !1;
      var n =
        t.result === h.SUCCESS
          ? o("WATimeUtils").DAY_MILLISECONDS
          : o("WATimeUtils").HOUR_MILLISECONDS;
      return Date.now() - t.finishedAtMs < n;
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield o("WAPromiseTimeout").promiseTimeout(
              t,
              g,
              "AEA refresh timed out",
            );
          } catch (t) {
            if (!(t instanceof o("WACustomError").TimeoutError)) throw t;
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] refresh account=",
                    " status=timed_out",
                  ])),
                e.toLogString(),
              ),
              h.TIMED_OUT
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield $(
              e,
              n != null
                ? n
                : yield o("WAWebAeaAccountCategory").getAeaAccountCategory(
                    o("WAWebWidFactory").asUserWidOrThrow(e.wid),
                  ),
              {
                isBeforeEnforcedSendDecision:
                  t ===
                  o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                    .AEA_SEND_TIME_RECONCILATION,
              },
            ),
            a = r.depletedPrekeyCount,
            i = r.hasResolvedAeaPrimary,
            l = r.isIdentityKeyChanged;
          return (
            o(
              "WAWebPostPrekeysDepletionMetric",
            ).maybePostPrekeysDepletionMetric({
              count: a,
              prekeysFetchReason: t,
              messageType:
                t ===
                o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                  .AEA_SEND_TIME_RECONCILATION
                  ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL
                  : null,
              deviceSizeBucket: null,
            }),
            i ? y.RESOLVED : l ? y.IDENTITY_CHANGED : y.NO_ANSWER
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebAeaAccountCategory").getAeaAccountCategory(e);
            if (!o("WAWebAeaAccountCategory").isAeaReceiveEnabledForCategory(n))
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] refresh account=",
                      " status=receive_disabled",
                    ])),
                  e.toLogString(),
                ),
                h.FAILED
              );
            var a = yield o("WAWebFetchPrekeysJob").fetchPrekeys([e], !1, t, {
                pqSupport: !0,
              }),
              i = a.errors,
              l = a.prekeyBundles,
              s = l.filter(function (e) {
                return !e.wid.isCompanion();
              });
            if (s.length === 0)
              return (
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] refresh returned no primary bundle errors=",
                        "",
                      ])),
                    String(i.length),
                  )
                  .sendLogs("aea-refresh-no-primary-bundle"),
                h.FAILED
              );
            var u = yield I(s[0], t, n);
            return (
              yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              u === y.RESOLVED ? h.SUCCESS : h.FAILED
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] refresh failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-refresh-fail"),
              h.FAILED
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.key == null ? 1 : 0,
            a = yield o("WAWebAeaAccountStateStore").readAeaStoredAccount(
              o("WAWebWidFactory").asUserWidOrThrow(e.wid),
            ),
            i = a.identityKey,
            l =
              i === o("WAWebAeaAccountStateStore").toAeaIdentityKey(e.identity),
            s = o("WAWebManageE2ESessionsJob").getPrekeyBundleSessionScope(
              e,
              o("WAWebPQGatingUtils").getOneToOneChatSessionScope(),
            );
          if (
            o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(
              t,
            ) &&
            !(l && (yield N(e, s)))
          ) {
            var u = yield o("WAWebProcessKeyBundle").processKeyBundles(
                [e],
                s,
                n,
              ),
              c = u.hasResolvedAeaPrimary === !0;
            return {
              depletedPrekeyCount: u.depletedPrekeyCount,
              hasResolvedAeaPrimary: c,
              isIdentityKeyChanged: !c && !l && i != null,
            };
          }
          if (!l)
            return {
              depletedPrekeyCount: r,
              hasResolvedAeaPrimary: !1,
              isIdentityKeyChanged: i != null,
            };
          var d = yield o("WAWebProcessKeyBundle").prepareAeaKeyResponses([e]),
            m = d[0];
          return {
            depletedPrekeyCount: r,
            hasResolvedAeaPrimary: yield o(
              "WAWebProcessKeyBundle",
            ).commitAeaKeyResponse(m, n),
            isIdentityKeyChanged: !1,
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            (yield o("WAWebSignal").Session.getRemoteRegId(e.wid, t)) ===
            e.regId
          );
        })),
        M.apply(this, arguments)
      );
    }
    ((l.AeaRefreshResult = h),
      (l.AeaPrimaryBundleOutcome = y),
      (l.refreshAeaAccount = v),
      (l.processAeaPrimaryBundle = I));
  },
  98,
);
