__d(
  "WAWebNonMessageDataRequestHandlerCanonicalEntNonce",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalTokenRefreshJob",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Handling canonical ent nonce fetch response",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.handle_nonce_response",
              ),
              o("WAWebCanonicalEntRecoveryWam").logReceivedNonceFromPrimary(),
              o("WAWebCanonicalTokenRefreshJob").clearNonceRequestTimestamp(),
              e == null || e.length === 0)
            ) {
              (r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.response_data_missing",
              ),
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] No results in canonical ent nonce fetch response",
                    ])),
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_response_empty",
                ));
              return;
            }
            var n = e[0],
              a =
                n == null
                  ? void 0
                  : n.companionCanonicalUserNonceFetchRequestResponse;
            if (a == null) {
              (r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.response_data_missing",
              ),
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] No companionCanonicalUserNonceFetchRequestResponse",
                    ])),
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_response_missing",
                ));
              return;
            }
            var i = a.forceRefresh,
              l = a.nonce,
              s = a.waFbid;
            if (l == null || s == null) {
              (o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Nonce payload missing required fields",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.handler.response_data_missing",
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_nonce_payload_missing_fields",
                ));
              return;
            }
            if (t !== !0 && !v(i)) return;
            var u = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId();
            o("WAWebCanonicalEntRecoveryWam").setDeviceId(String(u));
            var c = yield o(
              "WAWebCanonicalTokenExchange",
            ).exchangeNonceForToken({
              userId: Number(s),
              deviceId: u,
              nonce: l,
            });
            if (
              c !== o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
            ) {
              (o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Failed to exchange canonical ent nonce for token",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.handler.nonce_exchange_failed",
                ));
              return;
            }
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Successfully exchanged canonical ent nonce for token",
                ])),
            ),
              r("WAWebODS").incr("web.app.canonical.recovery.handler.success"),
              o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled() &&
                !o("WAWebCanonicalUtils").isCanonicalAppReloadPending() &&
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Scheduling canonical recovery app reload",
                    ])),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "scheduleCanonicalRecoveryReload",
                )));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Unexpected error during Canonical Response Handle: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("canonical-error", { sampling: 0.01 }),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.unexpected_error",
              ),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "recovery_handler_unexpected_error",
                String(e),
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      var n = o("WAWebCanonicalTokenExchange").getTokenCreationState();
      return t === !0
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Should force refresh token",
              ])),
          ),
          r("WAWebODS").incr(
            "web.app.canonical.recovery.handler.force_refresh",
          ),
          !0)
        : o("WAWebCanonicalUtils").isCurrentUserLoggedIn()
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] skipping recovery, user is already authenticated",
                ])),
            ),
            r("WAWebODS").incr(
              "web.app.canonical.recovery.handler.already_authenticated",
            ),
            !1)
          : n ===
              o("WAWebCanonicalTokenExchange").TokenCreationState.IN_PROGRESS
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] skipping recovery, token creation in progress",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.token_creation_in_progress",
              ),
              !1)
            : n === o("WAWebCanonicalTokenExchange").TokenCreationState.PRESENT
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] skipping recovery, token is already present",
                    ])),
                ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.handler.token_present",
                ),
                !1)
              : !0;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebCanonicalUtils").isDebugForceTokenRefresh();
          (t && o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1),
            !(!t && !o("WAWebCanonicalGating").isCanonicalRecoveryEnabled()) &&
              (yield C(e, t)));
        })),
        R.apply(this, arguments)
      );
    }
    l.handleCanonicalEntNonceFetchResponse = S;
  },
  98,
);
