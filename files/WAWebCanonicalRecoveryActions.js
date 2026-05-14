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
      d = 4,
      m = o("WATimeUtils").HOUR_MILLISECONDS * d;
    function p() {
      var e = o("WAWebUserPrefsCanonical").getPeerRequestTimestamp();
      return e == null ? !1 : Date.now() - e < m;
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebMexCachedTokenJob").fetchCachedNonceToken(),
              t = e.accessToken,
              n = e.fbid,
              r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
            if (r == null) return !1;
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
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] cached nonce recovery failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        C.apply(this, arguments)
      );
    }
    ((l.isWaitingForPeerResponse = p),
      (l.requestNonceFromPrimary = _),
      (l.fetchCachedNonce = g),
      (l.validateExistingToken = y));
  },
  98,
);
