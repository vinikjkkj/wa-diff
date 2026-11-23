__d(
  "WAWebAeaRefresh",
  [
    "$InternalEnum",
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
      f = 1e4,
      g = n("$InternalEnum")({
        SUCCESS: "success",
        FAILED: "failed",
        OFFLINE: "offline",
        TIMED_OUT: "timed_out",
        BACKED_OFF: "backed_off",
      }),
      h = n("$InternalEnum")({
        RESOLVED: "resolved",
        IDENTITY_CHANGED: "identity_changed",
        NO_ANSWER: "no_answer",
      }),
      y = new Map(),
      C = new Map();
    function b(e, t, n) {
      return o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()
        ? R(e, v(e, t, (n == null ? void 0 : n.ignoreBackoff) === !0))
        : Promise.resolve(g.OFFLINE);
    }
    async function v(t, n, r) {
      var a = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(t),
        i = a.identityKey,
        l = t.toString() + ":" + (i != null ? i : "") + ":" + n,
        d = t.toLogString(),
        m = String(n);
      if (!r && S(l))
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
          g.BACKED_OFF
        );
      var p = t.toString() + ":" + n,
        _ = y.get(p);
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
            (_ = E(t, n)
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
                  C.set(l, { finishedAtMs: Date.now(), result: e }),
                  e
                );
              })
              .finally(function () {
                y.delete(p);
              })),
            y.set(p, _)),
        _
      );
    }
    function S(e) {
      var t = C.get(e);
      if (t == null) return !1;
      var n =
        t.result === g.SUCCESS
          ? o("WATimeUtils").DAY_MILLISECONDS
          : o("WATimeUtils").HOUR_MILLISECONDS;
      return Date.now() - t.finishedAtMs < n;
    }
    async function R(e, t) {
      try {
        return await o("WAPromiseTimeout").promiseTimeout(
          t,
          f,
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
          g.TIMED_OUT
        );
      }
    }
    async function L(e, t, n) {
      var r = await k(
          e,
          n != null
            ? n
            : await o("WAWebAeaAccountCategory").getAeaAccountCategory(
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
        o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
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
        i ? h.RESOLVED : l ? h.IDENTITY_CHANGED : h.NO_ANSWER
      );
    }
    async function E(e, t) {
      try {
        var n = await o("WAWebAeaAccountCategory").getAeaAccountCategory(e);
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
            g.FAILED
          );
        var a = await o("WAWebFetchPrekeysJob").fetchPrekeys([e], !1, t, {
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
            g.FAILED
          );
        var u = await L(s[0], t, n);
        return (
          await o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
          u === h.RESOLVED ? g.SUCCESS : g.FAILED
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
          g.FAILED
        );
      }
    }
    async function k(e, t, n) {
      var r = e.key == null ? 1 : 0,
        a = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(
          o("WAWebWidFactory").asUserWidOrThrow(e.wid),
        ),
        i = a.identityKey,
        l = i === o("WAWebAeaAccountStateStore").toAeaIdentityKey(e.identity),
        s = o("WAWebManageE2ESessionsJob").getPrekeyBundleSessionScope(
          e,
          o("WAWebPQGatingUtils").getOneToOneChatSessionScope(),
        );
      if (
        o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(t) &&
        !(l && (await I(e, s)))
      ) {
        var u = await o("WAWebProcessKeyBundle").processKeyBundles([e], s, n),
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
      var d = await o("WAWebProcessKeyBundle").prepareAeaKeyResponses([e]),
        m = d[0];
      return {
        depletedPrekeyCount: r,
        hasResolvedAeaPrimary: await o(
          "WAWebProcessKeyBundle",
        ).commitAeaKeyResponse(m, n),
        isIdentityKeyChanged: !1,
      };
    }
    async function I(e, t) {
      return (
        (await o("WAWebSignal").Session.getRemoteRegId(e.wid, t)) === e.regId
      );
    }
    ((l.AeaRefreshResult = g),
      (l.AeaPrimaryBundleOutcome = h),
      (l.refreshAeaAccount = b),
      (l.processAeaPrimaryBundle = L));
  },
  98,
);
