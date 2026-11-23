__d(
  "WAWebWorkerHandleFailureApi",
  [
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebAppCommsCloseReason",
    "WAWebChatdLoginIdentity",
    "WAWebFailureErrorCodes",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumOfflineProcessInterruptReasons",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWorkerResumeManager",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new (r("WADeprecatedWapParser"))("failureParser", function (e) {
        return (
          e.assertTag("failure"),
          { reason: e.attrInt("reason", 400, 599) }
        );
      });
    async function f(t) {
      var n = _.parse(t);
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
      if (
        !o("WAWebChatdLoginIdentity").maybeFallBackToPnLogin(n.success.reason)
      )
        switch (n.success.reason) {
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_TEMP_BANNED:
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED:
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_BANNED:
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleFailure] banned user, reason=",
                    ", no push",
                  ])),
                n.success.reason,
              )
              .sendLogs(
                "should-not-push-to-banned-users: reason: " + n.success.reason,
              ),
              g(n.success.reason));
            break;
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_NOT_AUTHORIZED:
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "received failure stanza, reason: 401 - not authorized",
                ])),
            ),
              g(n.success.reason));
            break;
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_CLIENT_TOO_OLD:
          case o("WAWebFailureErrorCodes").FAILURE_REASON
            .REASON_BAD_USER_AGENT: {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleFailure] client outdated, defer update to next open",
                ])),
            ),
              g(n.success.reason));
            break;
          }
          case o("WAWebFailureErrorCodes").FAILURE_REASON
            .REASON_GENERIC_FAILURE:
          case o("WAWebFailureErrorCodes").FAILURE_REASON
            .REASON_INTERNAL_SERVER_ERROR:
          case o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_EXPERIMENTAL:
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "handleFailure: got failure code ",
                  "",
                ])),
              n.success.reason,
            );
            break;
          default:
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function g(e) {
      (o(
        "WAWebWamWorkerOfflineProcessReporter",
      ).WorkerOfflineResumeReporter.getCurrentStage() != null &&
        (o(
          "WAWebWamWorkerOfflineProcessReporter",
        ).WorkerOfflineResumeReporter.logProcessInterrupted(
          o("WAWebWamEnumOfflineProcessInterruptReasons")
            .OFFLINE_PROCESS_INTERRUPT_REASONS.SERVER_FAILURE,
        ),
        o("WAWebWorkerResumeManager").interruptActiveOfflineWorkerResume(
          new (o(
            "WAWebWorkerResumeManager",
          ).OfflineWorkerResumeInterruptedError)(
            "Offline resume interrupted by failure " + e,
          ),
        )),
        o("WAComms").stopComms(
          o("WAWebAppCommsCloseReason").AppCommsCloseReason.ServerFailure,
        ),
        o("WAWebUserPrefsGeneral")
          .setOfflinePushDisabled(!0)
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleFailure] failed to disable offline push",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("worker-handle-failure-disable-offline-push-failed");
          }));
    }
    l.default = f;
  },
  98,
);
