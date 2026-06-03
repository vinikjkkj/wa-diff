__d(
  "WAWebCanonicalCredentialRecoveryJob",
  [
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalRecoveryActions",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsCanonical",
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
      _,
      f,
      g,
      h,
      y,
      C = 30,
      b = 2;
    function v() {
      var t = o("WAWebUserPrefsCanonical").getRetryBackoffSeconds(),
        n = t <= 0 ? C : Math.min(t * b, o("WATimeUtils").HOUR_SECONDS);
      return (
        o("WAWebUserPrefsCanonical").setRetryBackoffSeconds(n),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[canonical] next recovery retry in ",
              "s",
            ])),
          n,
        ),
        n
      );
    }
    function S() {
      (o("WAWebUserPrefsCanonical").clearRetryBackoffSeconds(),
        o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp());
    }
    function R() {
      o("WAWebBackendApi").frontendFireAndForget("scheduleCanonicalReload", {
        purpose: "recovery",
      });
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebCanonicalGating").isCachedNonceRecoveryEnabled()) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] trying cached nonce recovery",
                ])),
            );
            var e = yield o("WAWebCanonicalRecoveryActions").fetchCachedNonce();
            if (e)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] recovery succeeded via cached nonce",
                    ])),
                ),
                r("WAWebODS").incr("web.app.canonical.recovery.success"),
                S(),
                R(),
                !0
              );
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] cached nonce failed, trying peer request",
                ])),
            );
          }
          return (
            o("WAWebCanonicalRecoveryActions").isWaitingForPeerResponse()
              ? o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] peer request throttled, awaiting response",
                    ])),
                )
              : (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] sending peer nonce request to primary",
                    ])),
                ),
                yield o(
                  "WAWebCanonicalRecoveryActions",
                ).requestNonceFromPrimary()),
            !1
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (
              !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd ||
              !o("WAComms").isCommsInitialized()
            )
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] backend not ready, deferring recovery",
                    ])),
                ),
                C
              );
            if (o("WAWebCanonicalUtils").getCanonicalReloadPending() != null)
              return o("WATimeUtils").DAY_SECONDS;
            var e = o("WAWebCanonicalUtils").getTokenCreationState();
            if (e === o("WAWebCanonicalUtils").TokenCreationState.IN_PROGRESS)
              return 5 * o("WATimeUtils").MINUTE_SECONDS;
            if (e === o("WAWebCanonicalUtils").TokenCreationState.PRESENT)
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token present, scheduling reload",
                    ])),
                ),
                R(),
                o("WATimeUtils").DAY_SECONDS
              );
            if (o("WAWebCanonicalUtils").isCurrentUserLoggedIn()) {
              var t = yield o(
                "WAWebCanonicalRecoveryActions",
              ).validateExistingToken();
              if (t !== !1)
                return (
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token valid, reschedule in 1 day",
                      ])),
                  ),
                  S(),
                  o("WATimeUtils").DAY_SECONDS
                );
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] token invalid, starting recovery",
                  ])),
              );
            } else
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] token missing, starting recovery",
                  ])),
              );
            r("WAWebODS").incr("web.app.canonical.recovery.attempt");
            var n = yield L();
            return n ? o("WATimeUtils").DAY_SECONDS : v();
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] recovery job failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              r("WAWebODS").incr("web.app.canonical.recovery.error"),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "recovery_job_unexpected_error",
                "recovery",
                String(e),
              ),
              v()
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    l.maybeRecoverCanonicalCredentials = k;
  },
  98,
);
