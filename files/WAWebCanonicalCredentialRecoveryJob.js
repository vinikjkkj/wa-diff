__d(
  "WAWebCanonicalCredentialRecoveryJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUserValidQuery",
    "WAWebCanonicalUtils",
    "WAWebMexCachedTokenJob",
    "WAWebODS",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebUserPrefsCanonical",
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
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = 4,
      L = o("WATimeUtils").HOUR_MILLISECONDS * R,
      E = o("WATimeUtils").HOUR_SECONDS * R;
    function k() {
      o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp();
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Requesting nonce from primary",
              ])),
          ),
            r("WAWebODS").incr("web.app.canonical.recovery.job.request_nonce"),
            o("WAWebCanonicalEntRecoveryWam").logRequestNonceFromPrimary(),
            o("WAWebUserPrefsCanonical").setNonceRequestTimestamp(Date.now()),
            yield o(
              "WAWebSendNonMessageDataRequest",
            ).sendPeerDataOperationRequest(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .COMPANION_CANONICAL_USER_NONCE_FETCH,
              {},
            ));
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      var e = o("WAWebUserPrefsCanonical").getNonceRequestTimestamp();
      return e == null ? null : Date.now() - e;
    }
    function x() {
      var e = D();
      if (e == null) return null;
      var t = L,
        n = t - e;
      return n <= 0 ? null : Math.ceil(n / 1e3);
    }
    function $() {
      var e = D();
      return e == null ? !1 : e < L;
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] attempting cached nonce recovery",
                ])),
            ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.job.cached_nonce_attempt",
              ));
            var e = yield o("WAWebMexCachedTokenJob").fetchCachedNonceToken(""),
              t = e.accessToken,
              n = e.fbid,
              a = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
            if (a == null)
              return (
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.cached_nonce_no_device_id",
                ),
                !1
              );
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] cached nonce returned token, setting cookie",
                ])),
            );
            var i = yield o(
              "WAWebCanonicalTokenExchange",
            ).storeCanonicalCredentials(
              { userId: n, deviceId: a, nonce: "", accessToken: t },
              "recovery",
            );
            return i !==
              o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
              ? (r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.cached_nonce_cookie_failed",
                ),
                !1)
              : !0;
          } catch (e) {
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] cached nonce recovery failed: ",
                    "",
                  ])),
                e,
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.job.cached_nonce_failed",
              ),
              !1
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("WAWebODS").incr(
            "web.app.canonical.recovery.job.validation_attempt",
          );
          try {
            var e = yield o(
              "WAWebCanonicalUserValidQuery",
            ).fetchCanonicalUserValid();
            return e === "valid"
              ? (r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.validation_valid",
                ),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token validation succeeded",
                    ])),
                ),
                !0)
              : e === "error"
                ? (r("WAWebODS").incr(
                    "web.app.canonical.recovery.job.validation_error",
                  ),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token validation server error, skipping validation",
                      ])),
                  ),
                  null)
                : (r("WAWebODS").incr(
                    "web.app.canonical.recovery.job.validation_invalid",
                  ),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] token validation returned invalid",
                      ])),
                  ),
                  !1);
          } catch (e) {
            return (
              r("WAWebODS").incr(
                "web.app.canonical.recovery.job.validation_error",
              ),
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token validation threw: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Starting canonical credential recovery job",
                  ])),
              ),
              o("WAWebCanonicalUtils").getCanonicalReloadPending() != null)
            )
              return (
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skipping recovery, reload is pending",
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token creation in progress, skipping recovery",
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skipping recovery, canonical token already present",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.token_present",
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "scheduleCanonicalReload",
                  { purpose: "recovery" },
                ),
                o("WATimeUtils").DAY_SECONDS
              );
            if (o("WAWebCanonicalUtils").isCurrentUserLoggedIn()) {
              var t = yield M();
              if (
                (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token validation result: ",
                      "",
                    ])),
                  t,
                ),
                t !== !1)
              )
                return (
                  r("WAWebODS").incr(
                    "web.app.canonical.recovery.job.already_authenticated",
                  ),
                  o("WATimeUtils").DAY_SECONDS
                );
            }
            if (o("WAWebCanonicalGating").isCachedNonceRecoveryEnabled()) {
              var n = yield P();
              if (n)
                return (
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] cached nonce recovery succeeded",
                      ])),
                  ),
                  r("WAWebODS").incr(
                    "web.app.canonical.recovery.job.cached_nonce_success",
                  ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "scheduleCanonicalReload",
                    { purpose: "recovery" },
                  ),
                  o("WATimeUtils").DAY_SECONDS
                );
            }
            var a = $();
            if (a) {
              var i;
              return (
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skip recovery, awaiting nonce",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.job.waiting_for_response",
                ),
                (i = x()) != null ? i : E
              );
            }
            return (yield I(), E);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Unexpected error during credential recovery: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.job.unexpected_error",
              ),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "recovery_job_unexpected_error",
                "recovery",
                String(e),
              ),
              E
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    ((l.clearNonceRequestTimestamp = k),
      (l.requestNonceFromPrimary = I),
      (l.getNewRequestCooldownSeconds = x),
      (l.maybeRecoverCanonicalCredentials = A));
  },
  98,
);
