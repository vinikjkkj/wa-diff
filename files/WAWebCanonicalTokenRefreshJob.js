__d(
  "WAWebCanonicalTokenRefreshJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUtils",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebUserPrefsMeUser",
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
      f = "noncePeerRequestTimestamp",
      g = 4,
      h = o("WATimeUtils").HOUR_MILLISECONDS * g,
      y = o("WATimeUtils").HOUR_SECONDS * g;
    function C() {
      var e = Date.now();
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(f, String(e));
    }
    function b() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(f);
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Requesting nonce from primary",
              ])),
          ),
            r("WAWebODS").incr("web.app.canonical.recovery.job.request_nonce"),
            o("WAWebCanonicalEntRecoveryWam").setDeviceId(
              String(
                o("WAWebUserPrefsMeUser")
                  .getMeDevicePnOrThrow_DO_NOT_USE()
                  .getDeviceId(),
              ),
            ),
            o("WAWebCanonicalEntRecoveryWam").logRequestNonceFromPrimary(),
            C(),
            yield o(
              "WAWebSendNonMessageDataRequest",
            ).sendPeerDataOperationRequest(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .COMPANION_CANONICAL_USER_NONCE_FETCH,
              {},
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      var e =
        r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(f);
      if (e == null) return null;
      var t = parseInt(e, 10);
      return t == null ? null : Date.now() - t;
    }
    function L() {
      var e = R();
      if (e == null) return null;
      var t = h,
        n = t - e;
      return n <= 0 ? null : Math.ceil(n / 1e3);
    }
    function E() {
      var e = R();
      return e == null ? !1 : e < h;
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Starting canonical token refresh job",
                  ])),
              ),
              o("WAWebCanonicalUtils").isCurrentUserLoggedIn())
            )
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] user is logged in, skipping token refresh",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.already_authenticated",
                ),
                o("WATimeUtils").DAY_SECONDS
              );
            if (o("WAWebCanonicalUtils").isCanonicalAppReloadPending())
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skipping token refresh, app reload is pending",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.reload_pending",
                ),
                o("WATimeUtils").DAY_SECONDS
              );
            var e = o("WAWebCanonicalTokenExchange").getTokenCreationState();
            if (
              e ===
              o("WAWebCanonicalTokenExchange").TokenCreationState.IN_PROGRESS
            )
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token creation in progress, skipping refresh",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.token_creation_in_progress",
                ),
                5 * o("WATimeUtils").MINUTE_SECONDS
              );
            if (
              e === o("WAWebCanonicalTokenExchange").TokenCreationState.PRESENT
            )
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skipping token refresh, canonical token already present",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.token_present",
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "scheduleCanonicalRecoveryReload",
                ),
                o("WATimeUtils").DAY_SECONDS
              );
            var t = E();
            if (t) {
              var n;
              return (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skip token validation, awaiting nonce",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.waiting_for_response",
                ),
                (n = L()) != null ? n : y
              );
            }
            return (yield v(), y);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Unexpected error during CanonicalTokenRefreshJob: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.job.unexpected_error",
              ),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "refresh_job_unexpected_error",
                String(e),
              ),
              y
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.clearNonceRequestTimestamp = b),
      (l.requestNonceFromPrimary = v),
      (l.getNewRequestCooldownSeconds = L),
      (l.maybeRefreshCanonicalTokenJob = k));
  },
  98,
);
