__d(
  "WAWebIssuePrivateStatsToken",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WASemaphore",
    "WATimeUtils",
    "WAWebSignCredentialWamEvent",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumSignCredentialResult",
    "asyncToGeneratorRuntime",
    "privateStatsToken",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3;
    function u(e) {
      return e === "success"
        ? o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.SUCCESS
        : e === "bad-request"
          ? o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT
              .ERROR_BAD_REQUEST
          : e === "internal-server-error"
            ? o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT
                .ERROR_SERVER
            : e === "disconnected"
              ? o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT
                  .ERROR_CLIENT_NETWORK
              : e === "feature-not-implemented" ||
                  e === "service-unavailable" ||
                  e === "decryption-error" ||
                  e === "unknown"
                ? o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT
                    .ERROR_OTHER
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function c(e) {
      var t = e.overallStartTime,
        n = e.result,
        r = e.retryAttemptsLeft,
        a = e.retryStartTime,
        i = u(n);
      new (o("WAWebSignCredentialWamEvent").SignCredentialWamEvent)({
        signCredentialResult: i,
        overallT: o("WATimeUtils").monotonicTimeSince(t),
        signCredentialT: o("WATimeUtils").monotonicTimeSince(a),
        retryCount: s - r,
        waConnectedToChatd: n !== "disconnected",
        applicationState:
          document.visibilityState === "visible"
            ? o("WAWebWamEnumApplicationState").APPLICATION_STATE.FOREGROUND
            : o("WAWebWamEnumApplicationState").APPLICATION_STATE.BACKGROUND,
      }).commit();
    }
    var d = new (o("WASemaphore").Semaphore)(1);
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield d.acquire();
          try {
            var n = yield o("privateStatsToken").getToken(
                o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry,
              ),
              r = n.metric,
              a = n.result;
            return (
              r != null && c(r),
              a ||
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Couldn't get a private stats token",
                    ])),
                ),
              a
            );
          } finally {
            t.release();
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.getToken = m;
  },
  98,
);
