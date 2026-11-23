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
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    async function y(t, n) {
      try {
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Handling canonical ent nonce fetch response",
              ])),
          ),
          r("WAWebODS").incr(
            "web.app.canonical.recovery.handler.handle_nonce_response",
          ),
          o("WAWebCanonicalEntRecoveryWam").logReceivedNonceFromPrimary(),
          o("WAWebUserPrefsCanonical").clearNonceRequestTimestamp(),
          t == null || t.length === 0)
        ) {
          (r("WAWebODS").incr(
            "web.app.canonical.recovery.handler.response_data_missing",
          ),
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] No results in canonical ent nonce fetch response",
                ])),
            ),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "recovery_response_empty",
              "recovery",
            ));
          return;
        }
        var a = t[0],
          i =
            a == null
              ? void 0
              : a.companionCanonicalUserNonceFetchRequestResponse;
        if (i == null) {
          (r("WAWebODS").incr(
            "web.app.canonical.recovery.handler.response_data_missing",
          ),
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] No companionCanonicalUserNonceFetchRequestResponse",
                ])),
            ),
            o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
              "recovery_response_missing",
              "recovery",
            ));
          return;
        }
        var l = i.forceRefresh,
          f = i.nonce,
          g = i.waFbid;
        if (f == null || g == null) {
          (o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
        if (n !== !0 && !C(l)) return;
        var h = o("WAWebUserUtils").getMeDeviceLidOrThrow().getDeviceId(),
          y = await o("WAWebCanonicalTokenExchange").exchangeNonceForToken(
            { userId: Number(g), deviceId: h, nonce: f },
            "recovery",
          );
        if (
          y !== o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
        ) {
          (o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Failed to exchange canonical ent nonce for token",
              ])),
          ),
            r("WAWebODS").incr(
              "web.app.canonical.recovery.handler.nonce_exchange_failed",
            ));
          return;
        }
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[canonical] Successfully exchanged canonical ent nonce for token",
            ])),
        ),
          r("WAWebODS").incr("web.app.canonical.recovery.handler.success"),
          o("WAWebUserPrefsCanonical").clearRetryBackoffSeconds(),
          o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalReloadPending() &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function C(e) {
      return e === !0
        ? (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Should force refresh token",
              ])),
          ),
          r("WAWebODS").incr(
            "web.app.canonical.recovery.handler.force_refresh",
          ),
          !0)
        : o("WAWebCanonicalUtils").isCanonicalPresent()
          ? (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] skipping recovery, user is already authenticated",
                ])),
            ),
            r("WAWebODS").incr(
              "web.app.canonical.recovery.handler.already_authenticated",
            ),
            !1)
          : o("WAWebCanonicalUtils").isCanonicalTokenPresent()
            ? (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] skipping recovery, token is already present",
                  ])),
              ),
              r("WAWebODS").incr(
                "web.app.canonical.recovery.handler.token_present",
              ),
              !1)
            : !0;
    }
    async function b(e) {
      if (!o("WAWebCanonicalGating").isCanonicalAuthV2Enabled()) {
        var t = o("WAWebCanonicalUtils").isDebugForceTokenRefresh();
        (t && o("WAWebCanonicalUtils").setDebugForceTokenRefresh(!1),
          !(!t && !o("WAWebCanonicalGating").isCanonicalRecoveryEnabled()) &&
            (await y(e, t)));
      }
    }
    l.handleCanonicalEntNonceFetchResponse = b;
  },
  98,
);
