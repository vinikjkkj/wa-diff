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
      c = 4,
      d = o("WATimeUtils").HOUR_MILLISECONDS * c;
    function m() {
      var e = o("WAWebUserPrefsCanonical").getPeerRequestTimestamp();
      return e == null ? !1 : Date.now() - e < d;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] requesting nonce from primary",
              ])),
          ),
            o("WAWebCanonicalEntRecoveryWam").logRequestNonceFromPrimary(),
            o("WAWebUserPrefsCanonical").setPeerRequestTimestamp(Date.now()),
            yield o(
              "WAWebSendNonMessageDataRequest",
            ).sendPeerDataOperationRequest(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .COMPANION_CANONICAL_USER_NONCE_FETCH,
              {},
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] cached nonce recovery failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
        y.apply(this, arguments)
      );
    }
    ((l.isWaitingForPeerResponse = m),
      (l.requestNonceFromPrimary = p),
      (l.fetchCachedNonce = f),
      (l.validateExistingToken = h));
  },
  98,
);
