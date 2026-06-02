__d(
  "WAWebSyncdFatal",
  [
    "WAAsyncSleep",
    "WALogger",
    "WATimeUtils",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdFatalExceptionNotificationApi",
    "WAWebSyncdLogs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 5e3;
    async function f(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: starting fatal flow for ",
            "",
          ])),
        t,
      ),
        t
          ? await g(t, "handleFatalError for collection")
          : await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              "",
              "handleFatalError without collection",
            ));
      var n = [];
      t != null &&
        (n = t.map(function (e) {
          return String(e);
        }));
      var r = o("WATimeUtils").castMilliSecondsToUnixTime(
        o("WATimeUtils").unixTimeMs(),
      );
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: fatal flow: before sleep",
          ])),
      ),
        await o("WAAsyncSleep").asyncSleep(_),
        await g(t, "handleFatalError before notify primary"));
      var a = o("WATimeUtils").castMilliSecondsToUnixTime(
        o("WATimeUtils").unixTimeMs(),
      );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: start notifying primary on fatal error",
          ])),
      );
      try {
        await o(
          "WAWebSyncdFatalExceptionNotificationApi",
        ).sendAppStateFatalExceptionNotification(n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: error when sending fatal message to primary: ",
                "",
              ])),
            e,
          )
          .sendLogs("syncd: could not send fatal to primary");
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: end notifying primary on fatal error",
          ])),
      ),
        await g(t, "handleFatalError after notify primary"));
      var i = o("WATimeUtils").castMilliSecondsToUnixTime(
          o("WATimeUtils").unixTimeMs(),
        ),
        l = o("WATimeUtils").toHttpHeaderDate(r),
        f = o("WATimeUtils").toHttpHeaderDate(a),
        h = o("WATimeUtils").toHttpHeaderDate(i);
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[syncd] fatal notify done sleepT=",
            " sendT=",
            " currT=",
            "",
          ])),
        l,
        f,
        h,
      ),
        await o("WAWebSyncdLogs").printSyncdLogs(),
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: Received fatal error and logged out",
              ])),
          )
          .verbose()
          .tags("syncd", "logout")
          .sendLogs("syncd: fatal error and logged out"),
        o("WAWebCoreActionsODS").logSessionForcedLogout(),
        await o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
        ));
    }
    function g(e, t) {
      return Promise.all(
        (e != null ? e : [""]).map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.handleFatalError = f;
  },
  98,
);
