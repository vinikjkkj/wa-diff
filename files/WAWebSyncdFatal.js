__d(
  "WAWebSyncdFatal",
  [
    "WALogger",
    "WAPromiseDelays",
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
      _,
      f = 5e3;
    async function g(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: starting fatal flow for ",
            "",
          ])),
        t,
      ),
        t
          ? await h(t, "handleFatalError for collection")
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
        await o("WAPromiseDelays").delayMs(f),
        await h(t, "handleFatalError before notify primary"));
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
        await h(t, "handleFatalError after notify primary"));
      var i = o("WATimeUtils").castMilliSecondsToUnixTime(
          o("WATimeUtils").unixTimeMs(),
        ),
        l = o("WATimeUtils").toHttpHeaderDate(r),
        g = o("WATimeUtils").toHttpHeaderDate(a),
        y = o("WATimeUtils").toHttpHeaderDate(i);
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[syncd] fatal notify done sleepT=",
            " sendT=",
            " currT=",
            "",
          ])),
        l,
        g,
        y,
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
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: fatal flow: before logout sleep",
            ])),
        ),
        await o("WAPromiseDelays").delayMs(f),
        o("WAWebCoreActionsODS").logSessionForcedLogout(),
        await o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
        ));
    }
    function h(e, t) {
      return Promise.all(
        (e != null ? e : [""]).map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.handleFatalError = g;
  },
  98,
);
