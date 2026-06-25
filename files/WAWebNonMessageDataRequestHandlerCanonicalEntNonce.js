__d(
  "WAWebNonMessageDataRequestHandlerCanonicalEntNonce",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUtils",
    "WAWebODS",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Handling canonical ent nonce fetch response",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.handle_nonce_response",
              ),
              o("WAWebCanonicalEntRecoveryWam").logReceivedNonceFromPrimary(),
              o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp(),
              e == null || e.length === 0)
            ) {
              (r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.response_data_missing",
              ),
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] No results in canonical ent nonce fetch response",
                    ])),
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_response_empty",
                  "recovery",
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] No companionCanonicalUserNonceFetchRequestResponse",
                    ])),
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_response_missing",
                  "recovery",
                ));
              return;
            }
            var i = a.forceRefresh,
              l = a.nonce,
              s = a.waFbid;
            if (l == null || s == null) {
              (o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Nonce payload missing required fields",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.handler.response_data_missing",
                ),
                o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                  "recovery_nonce_payload_missing_fields",
                  "recovery",
                ));
              return;
            }
            if (t !== !0 && !b(i)) return;
            var u = o("WAWebUserPrefsMeUser")
                .getMeDeviceLidOrThrow()
                .getDeviceId(),
              y = yield o("WAWebCanonicalTokenExchange").exchangeNonceForToken(
                { userId: Number(s), deviceId: u, nonce: l },
                "recovery",
              );
            if (
              y !== o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
            ) {
              (o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Failed to exchange canonical ent nonce for token",
                  ])),
              ),
                r("WAWebODS").incr(
                  "web.app.canonical.recovery.handler.nonce_exchange_failed",
                ));
              return;
            }
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] Successfully exchanged canonical ent nonce for token",
                ])),
            ),
              r("WAWebODS").incr("web.app.canonical.recovery.handler.success"),
              o("WAWebUserPrefsCanonical").clearRetryBackoffSeconds(),
              o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled() &&
                !o("WAWebCanonicalUtils").isCanonicalReloadPending() &&
                (o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Scheduling canonical recovery app reload",
                    ])),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "scheduleCanonicalReload",
                  void 0,
                )));
          } catch (e) {
            (o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                "recovery",
                String(e),
              ));
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
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
        : o("WAWebCanonicalUtils").isCanonicalPresent()
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
          : o("WAWebCanonicalUtils").isCanonicalTokenPresent()
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] skipping recovery, token is already present",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.token_present",
              ),
              !1)
            : !0;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebCanonicalUtils").isDebugForceTokenRefresh();
          (t && o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1),
            !(!t && !o("WAWebCanonicalGating").isCanonicalRecoveryEnabled()) &&
              (yield y(e, t)));
        })),
        S.apply(this, arguments)
      );
    }
    l.handleCanonicalEntNonceFetchResponse = v;
  },
  98,
);
