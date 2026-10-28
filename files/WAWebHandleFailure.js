__d(
  "WAWebHandleFailure",
  [
    "Promise",
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebChatdLoginIdentity",
    "WAWebCoreActionsODS",
    "WAWebE2ETestPairingConstants",
    "WAWebFailureErrorCodes",
    "WAWebJestE2ELogUtils",
    "WAWebLocalStorage",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "WAWebUpdaterPlatforms",
    "WAWebUpdaterVersion",
    "WAWebWamPlatform",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
    "justknobx",
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
      g = new (r("WADeprecatedWapParser"))("failureParser", function (e) {
        return (
          e.assertTag("failure"),
          {
            reason: e.attrInt("reason", 400, 599),
            location: e.attrString("location"),
            code: e.maybeAttrInt("code"),
            expire: e.maybeAttrInt("expire"),
            message: e.maybeAttrString("message"),
            url: e.maybeAttrString("url"),
            logoutMessageHeader: e.maybeAttrString("logout_message_header"),
            logoutMessageSubtext: e.maybeAttrString("logout_message_subtext"),
            logoutMessageLocale: e.maybeAttrString("logout_message_locale"),
          }
        );
      });
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          r("gkx")("26256") &&
            (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
              "received failure stanza, " + t.toString(),
            ),
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").removeItem(
                o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
              ));
          var a = g.parse(t);
          if (a.error)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " parsing ",
                    "",
                  ])),
                a.error.toString(),
                t.toString(),
              ),
              (f || (f = n("Promise"))).reject(a.error)
            );
          if (
            !o("WAWebChatdLoginIdentity").maybeFallBackToPnLogin(
              a.success.reason,
            )
          )
            switch (a.success.reason) {
              case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED:
                yield C(a.success);
                break;
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_NOT_AUTHORIZED:
              case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "received failure stanza, reason: ",
                      ", logging out",
                    ])),
                  a.success.reason,
                ),
                  o("WAWebCoreActionsODS").isPageLoadComplete() ||
                    o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
                  r("justknobx")._("4751") && o("WAComms").stopComms(),
                  yield o(
                    "WAWebSocketModel",
                  ).Socket.clearCredentialsAndStoredData(),
                  o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
                break;
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_CLIENT_TOO_OLD:
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_BAD_USER_AGENT: {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Client outdated/bad user agent, updating app",
                    ])),
                );
                var i = o("WAWebUpdaterVersion").SANITIZED_VERSION_STR,
                  l = o("WAWebUpdaterPlatforms").PLATFORMS[
                    o("WAWebWamPlatform").getWamPlatform()
                  ];
                (o("WAWebBackendApi").frontendFireAndForget("forceAppUpdate", {
                  version: l === "web" ? i : null,
                  belowSoft: !1,
                  belowHard: 0,
                }),
                  o("WAComms").stopComms());
                break;
              }
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_TEMP_BANNED: {
                var _ = a.success,
                  h = _.code,
                  y = _.expire,
                  b = _.message,
                  v = _.url;
                if (h != null && y != null)
                  o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan(
                    { banned: !0, code: h, message: b, url: v, expire: y },
                  );
                else
                  throw (
                    o("WALogger").ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Incorrect temporary ban data ",
                          " ",
                          "",
                        ])),
                      h,
                      y,
                    ),
                    r("err")("handleFailure: wrong temp ban data")
                  );
                break;
              }
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_GENERIC_FAILURE:
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_INTERNAL_SERVER_ERROR:
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_EXPERIMENTAL:
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "handleFailure: got failure code ",
                      "",
                    ])),
                  a.success.reason,
                );
                break;
              case o("WAWebFailureErrorCodes").FAILURE_REASON
                .REASON_SERVICE_UNAVAILABLE:
                (o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "handleFailure: got failure code ",
                      "",
                    ])),
                  a.success.reason,
                ),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerServiceUnavailable(),
                  o("WAWebCoreActionsODS").isPageLoadComplete() ||
                    o(
                      "WAWebCoreActionsODS",
                    ).logPageLoadErrorServiceUnavailable());
                break;
              default:
                return (
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "failure reason ",
                        " not implemented yet",
                      ])),
                    a.success.reason,
                  ),
                  (f || (f = n("Promise"))).reject(
                    r("err")(
                      "failure reason " +
                        a.success.reason +
                        " not implemented yet",
                    ),
                  )
                );
            }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.logoutMessageHeader,
            n = e.logoutMessageLocale,
            a = e.logoutMessageSubtext,
            i = e.reason;
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "received failure stanza, reason: ",
                ", logging out",
              ])),
            i,
          ),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout());
          var l = null,
            s = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getNormalizedLocale",
              void 0,
            );
          (n === s &&
            (t != null || a != null) &&
            (l = { logoutMessageHeader: t, logoutMessageSubtext: a }),
            r("justknobx")._("4751") && o("WAComms").stopComms(),
            yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(
              o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked,
              l,
            ),
            o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
        })),
        b.apply(this, arguments)
      );
    }
    l.default = h;
  },
  98,
);
