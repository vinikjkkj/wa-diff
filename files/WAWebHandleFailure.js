__d(
  "WAWebHandleFailure",
  [
    "Promise",
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCoreActionsODS",
    "WAWebE2ETestPairingConstants",
    "WAWebFailureErrorCodes",
    "WAWebJestE2ELogUtils",
    "WAWebLocalStorage",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "WAWebUpdater",
    "WAWebUpdaterUpdatePoll",
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
          switch (a.success.reason) {
            case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED: {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "received failure stanza, reason: ",
                    ", logging out",
                  ])),
                a.success.reason,
              ),
                o("WAWebCoreActionsODS").isPageLoadComplete() ||
                  o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout());
              var i = a.success,
                l = i.logoutMessageHeader,
                h = i.logoutMessageLocale,
                y = i.logoutMessageSubtext,
                C = null,
                b = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getNormalizedLocale",
                  void 0,
                );
              (h === b &&
                (l != null || y != null) &&
                (C = { logoutMessageHeader: l, logoutMessageSubtext: y }),
                r("justknobx")._("4751") && o("WAComms").stopComms(),
                yield o(
                  "WAWebSocketModel",
                ).Socket.clearCredentialsAndStoredData(
                  o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked,
                  C,
                ),
                o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
              break;
            }
            case o("WAWebFailureErrorCodes").FAILURE_REASON
              .REASON_NOT_AUTHORIZED:
            case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Client outdated/bad user agent, updating app",
                  ])),
              );
              var v = o("WAWebUpdaterVersion").SANITIZED_VERSION_STR,
                S = o("WAWebUpdaterUpdatePoll").PLATFORMS[
                  o("WAWebWamPlatform").getWamPlatform()
                ];
              (S === "web"
                ? o("WAWebUpdater").Updater.update(v, !1, 0)
                : o("WAWebUpdater").Updater.update(void 0, !1, 0),
                o("WAComms").stopComms());
              break;
            }
            case o("WAWebFailureErrorCodes").FAILURE_REASON
              .REASON_TEMP_BANNED: {
              var R = a.success,
                L = R.code,
                E = R.expire,
                k = R.message,
                I = R.url;
              if (L != null && E != null)
                o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
                  banned: !0,
                  code: L,
                  message: k,
                  url: I,
                  expire: E,
                });
              else
                throw (
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Incorrect temporary ban data ",
                        " ",
                        "",
                      ])),
                    L,
                    E,
                  ),
                  r("err")("handleFailure: wrong temp ban data")
                );
              break;
            }
            case o("WAWebFailureErrorCodes").FAILURE_REASON
              .REASON_GENERIC_FAILURE:
            case o("WAWebFailureErrorCodes").FAILURE_REASON
              .REASON_INTERNAL_SERVER_ERROR:
            case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_EXPERIMENTAL:
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "handleFailure: got failure code ",
                    "",
                  ])),
                a.success.reason,
              );
              break;
            case o("WAWebFailureErrorCodes").FAILURE_REASON
              .REASON_SERVICE_UNAVAILABLE:
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    l.default = h;
  },
  98,
);
