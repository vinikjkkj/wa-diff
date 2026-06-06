__d(
  "WAWebHandleFailure",
  [
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
    "WAWebUpdaterPlatforms",
    "WAWebUpdaterVersion",
    "WAWebWamPlatform",
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
      f = new (r("WADeprecatedWapParser"))("failureParser", function (e) {
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
    async function g(t) {
      r("gkx")("26256") &&
        (o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
          "received failure stanza, " + t.toString(),
        ),
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").removeItem(
            o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
          ));
      var n = f.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " parsing ",
                "",
              ])),
            n.error.toString(),
            t.toString(),
          ),
          Promise.reject(n.error)
        );
      switch (n.success.reason) {
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED: {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "received failure stanza, reason: ",
                ", logging out",
              ])),
            n.success.reason,
          ),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout());
          var a = n.success,
            i = a.logoutMessageHeader,
            l = a.logoutMessageLocale,
            g = a.logoutMessageSubtext,
            h = null,
            y = await o("WAWebBackendApi").frontendSendAndReceive(
              "getNormalizedLocale",
              void 0,
            );
          (l === y &&
            (i != null || g != null) &&
            (h = { logoutMessageHeader: i, logoutMessageSubtext: g }),
            r("justknobx")._("4751") && o("WAComms").stopComms(),
            await o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(
              o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked,
              h,
            ),
            o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
          break;
        }
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_NOT_AUTHORIZED:
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "received failure stanza, reason: ",
                ", logging out",
              ])),
            n.success.reason,
          ),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
            r("justknobx")._("4751") && o("WAComms").stopComms(),
            await o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(),
            o("WAWebBackendEventBus").BackendEventBus.triggerLogout());
          break;
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_CLIENT_TOO_OLD:
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BAD_USER_AGENT: {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Client outdated/bad user agent, updating app",
              ])),
          );
          var C = o("WAWebUpdaterVersion").SANITIZED_VERSION_STR,
            b = o("WAWebUpdaterPlatforms").PLATFORMS[
              o("WAWebWamPlatform").getWamPlatform()
            ];
          (b === "web"
            ? o("WAWebUpdater").Updater.update({
                belowHard: 0,
                belowSoft: !1,
                serverVersion: C,
              })
            : o("WAWebUpdater").Updater.update({ belowHard: 0, belowSoft: !1 }),
            o("WAComms").stopComms());
          break;
        }
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_TEMP_BANNED: {
          var v = n.success,
            S = v.code,
            R = v.expire,
            L = v.message,
            E = v.url;
          if (S != null && R != null)
            o("WAWebBackendEventBus").BackendEventBus.triggerTemporaryBan({
              banned: !0,
              code: S,
              message: L,
              url: E,
              expire: R,
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
                S,
                R,
              ),
              r("err")("handleFailure: wrong temp ban data")
            );
          break;
        }
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE:
        case o("WAWebFailureErrorCodes").FAILURE_REASON
          .REASON_INTERNAL_SERVER_ERROR:
        case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_EXPERIMENTAL:
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "handleFailure: got failure code ",
                "",
              ])),
            n.success.reason,
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
            n.success.reason,
          ),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerServiceUnavailable(),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorServiceUnavailable());
          break;
        default:
          return (
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "failure reason ",
                  " not implemented yet",
                ])),
              n.success.reason,
            ),
            Promise.reject(
              r("err")(
                "failure reason " + n.success.reason + " not implemented yet",
              ),
            )
          );
      }
    }
    l.default = g;
  },
  98,
);
