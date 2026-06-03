__d(
  "WAWebCanonicalRecoveryActions",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalTokenExchange",
    "WAWebCanonicalUserValidQuery",
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
      m = 4,
      p = o("WATimeUtils").HOUR_MILLISECONDS * m;
    function _() {
      var e = o("WAWebUserPrefsCanonical").getPeerRequestTimestamp();
      return e == null ? !1 : Date.now() - e < p;
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] skipping peer nonce request, me not loaded yet",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] requesting nonce from primary",
              ])),
          ),
            yield o(
              "WAWebSendNonMessageDataRequest",
            ).sendPeerDataOperationRequest(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .COMPANION_CANONICAL_USER_NONCE_FETCH,
              {},
            ),
            o("WAWebCanonicalEntRecoveryWam").logRequestNonceFromPrimary(),
            o("WAWebUserPrefsCanonical").setPeerRequestTimestamp(Date.now()));
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebMexCachedTokenJob").fetchCachedNonceToken(),
              t = e.accessToken,
              n = e.fbid,
              r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
            if (r == null)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] cached nonce skipped, no deviceId",
                    ])),
                ),
                !1
              );
            var a = yield o(
              "WAWebCanonicalTokenExchange",
            ).storeCanonicalCredentials(
              { userId: n, deviceId: r, accessToken: t },
              "recovery",
            );
            return (
              a === o("WAWebCanonicalTokenExchange").TokenExchangeResult.SUCCESS
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] cached nonce recovery failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              o("WAWebCanonicalEntRecoveryWam").logCriticalRecoveryEvent(
                "cached_nonce_recovery_failed",
                "recovery",
                String(e),
              ),
              !1
            );
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
            var e = yield o(
              "WAWebCanonicalUserValidQuery",
            ).fetchCanonicalUserValid();
            return e === "valid"
              ? (r("WAWebODS").incr("web.app.canonical.validation.valid"), !0)
              : e === "error"
                ? (r("WAWebODS").incr("web.app.canonical.validation.error"),
                  null)
                : (r("WAWebODS").incr("web.app.canonical.validation.invalid"),
                  !1);
          } catch (e) {
            return (
              r("WAWebODS").incr("web.app.canonical.validation.error"),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] token validation failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              null
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.isWaitingForPeerResponse = _),
      (l.requestNonceFromPrimary = f),
      (l.fetchCachedNonce = h),
      (l.validateExistingToken = C));
  },
  98,
);
