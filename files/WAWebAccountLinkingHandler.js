__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAccountLinkingAPI",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o(
            "WAWebMetaAiWaffleAuthTokenCache",
          ).clearMetaAiWaffleAuthTokenBlobCache();
          try {
            yield _.updateAccountLinkingState(
              o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
            );
          } finally {
            yield o(
              "WAWebSubscriptionAgeGating",
            ).invalidateSubscriptionAgeVerdict();
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF) {
            o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).clearMetaAiWaffleAuthTokenBlobCache();
            try {
              yield _.purgeWaffleData();
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
              (yield o("WAWebAccountLinkingAPI").ping(),
                yield o("WAWebAccountLinkingAPI").fetchServiceData(),
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
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (yield o("WAWebAccountLinkingAPI").ping(),
              yield o("WAWebAccountLinkingAPI").fetchServiceData());
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
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebAccountLinkingAPI").stateExists();
            if (e != null)
              switch (e) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  o(
                    "WAWebMetaAiWaffleAuthTokenCache",
                  ).clearMetaAiWaffleAuthTokenBlobCache();
                  try {
                    yield _.purgeWaffleData();
                  } finally {
                    yield o(
                      "WAWebSubscriptionAgeGating",
                    ).invalidateSubscriptionAgeVerdict();
                  }
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  o("WAWebAccountLinkingGatingUtils").isGuestMode()
                    ? yield o("WAWebAccountLinkingAPI").refreshAccessToken()
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
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebAccountLinkingAPI").stateExists();
            if (e != null)
              switch (e) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  o("WAWebAccountLinkingGatingUtils").isGuestMode()
                    ? yield o("WAWebAccountLinkingAPI").refreshAccessToken()
                    : yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .PAUSED:
                  yield f();
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e != null) {
              var t = yield _.getLastResyncTimestamp();
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!(yield E(e))) {
            try {
              yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
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
              var t = yield _.getAccountLinkingData();
              (t != null
                ? (o("WAWebWaffleLifecycleWamLogger").logNotification({
                    linkState: o(
                      "WAWebWaffleLifecycleWamLogger",
                    ).mapLinkStateToWam(t.linkState),
                    traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                      .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
                  }),
                  t.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                    (yield C()),
                  t.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                    (yield v()))
                : (o("WAWebWaffleLifecycleWamLogger").logNotification({
                    linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                      .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
                    traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                      .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
                  }),
                  yield R()),
                yield _.updateLastResyncTimestamp(o("WATimeUtils").unixTime()));
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
        T.apply(this, arguments)
      );
    }
    ((l.handlePausedState = f),
      (l.handleUnlinkedState = h),
      (l.handleResyncState = I));
  },
  98,
);
