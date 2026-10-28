__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebSubscriptionAgeGating",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingHandler",
      ),
      f = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o(
            "WAWebMetaAiWaffleAuthTokenCache",
          ).clearMetaAiWaffleAuthTokenBlobCache();
          try {
            yield f.updateAccountLinkingState(
              o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
            );
          } finally {
            yield o(
              "WAWebSubscriptionAgeGating",
            ).invalidateSubscriptionAgeVerdict();
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF) {
            o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).clearMetaAiWaffleAuthTokenBlobCache();
            try {
              yield f.purgeWaffleData();
            } finally {
              yield o(
                "WAWebSubscriptionAgeGating",
              ).invalidateSubscriptionAgeVerdict();
            }
            o("WAWebWaffleLifecycleWamLogger").logPurge({
              linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
              traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
              unlinkType: 0,
            });
          } else
            try {
              var n = yield _.load(),
                r = n.fetchServiceData,
                a = n.ping;
              (yield a(),
                yield r(),
                o("WAWebWaffleLifecycleWamLogger").logNotification({
                  linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                    .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE,
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
                  unlinkType: 1,
                }));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleUnlinkedState partial unlink failed: ",
                      "",
                    ])),
                  t,
                )
                .tags("waffle", "account-linking", "unlink")
                .sendLogs("waffle-partial-unlink-failed", { sampling: 0.01 });
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield _.load(),
              t = e.fetchServiceData,
              n = e.ping;
            (yield n(), yield t());
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState active state failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-active-failed", { sampling: 0.01 }),
              e
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield _.load(),
              t = e.refreshAccessToken,
              n = e.stateExists,
              r = yield n();
            if (r != null)
              switch (r) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  o(
                    "WAWebMetaAiWaffleAuthTokenCache",
                  ).clearMetaAiWaffleAuthTokenBlobCache();
                  try {
                    yield f.purgeWaffleData();
                  } finally {
                    yield o(
                      "WAWebSubscriptionAgeGating",
                    ).invalidateSubscriptionAgeVerdict();
                  }
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  o("WAWebAccountLinkingGatingUtils").isGuestMode()
                    ? yield t()
                    : yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .PAUSED:
                  break;
              }
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState paused state failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-paused-failed", { sampling: 0.01 }),
              e
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield _.load(),
              t = e.refreshAccessToken,
              n = e.stateExists,
              r = yield n();
            if (r != null)
              switch (r) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  o("WAWebAccountLinkingGatingUtils").isGuestMode()
                    ? yield t()
                    : yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .PAUSED:
                  yield g();
                  break;
              }
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState unlinked state failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-unlinked-failed", { sampling: 0.01 }),
              e
            );
          }
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
            if (e != null) {
              var t = yield f.getLastResyncTimestamp();
              if (t != null) {
                var n = o("WATimeUtils").unixTime() - t;
                if (n >= 0 && n <= e) return !0;
              }
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] handleResyncState dedup check failed: ",
                    "",
                  ])),
                e,
              )
              .tags("waffle", "account-linking", "resync")
              .sendLogs("waffle-resync-dedup-failed", { sampling: 0.01 });
          }
          return !1;
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
          if (!(yield k(e))) {
            try {
              var t = yield _.load(),
                n = t.fetchValidCertificate;
              yield n();
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState cert refresh failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-cert-failed", { sampling: 0.01 });
            }
            try {
              var r = yield f.getAccountLinkingData();
              (r != null
                ? (o("WAWebWaffleLifecycleWamLogger").logNotification({
                    linkState: o(
                      "WAWebWaffleLifecycleWamLogger",
                    ).mapLinkStateToWam(r.linkState),
                    traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                      .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
                  }),
                  r.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                    (yield b()),
                  r.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                    (yield S()))
                : (o("WAWebWaffleLifecycleWamLogger").logNotification({
                    linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                      .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
                    traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                      .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
                  }),
                  yield L()),
                yield f.updateLastResyncTimestamp(o("WATimeUtils").unixTime()));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-failed", { sampling: 0.01 });
            }
          }
        })),
        D.apply(this, arguments)
      );
    }
    ((l.handlePausedState = g),
      (l.handleUnlinkedState = y),
      (l.handleResyncState = T));
  },
  98,
);
