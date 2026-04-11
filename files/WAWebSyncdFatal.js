__d(
  "WAWebSyncdFatal",
  [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WATimeUtils",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdFatalExceptionNotificationApi",
    "WAWebSyncdLogs",
    "asyncToGeneratorRuntime",
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: starting fatal flow for ",
                "",
              ])),
            t,
          ),
            t
              ? yield y(t, "handleFatalError for collection")
              : yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
            yield o("WAAsyncSleep").asyncSleep(f),
            yield y(t, "handleFatalError before notify primary"));
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
            yield o(
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
            yield y(t, "handleFatalError after notify primary"));
          var i = o("WATimeUtils").castMilliSecondsToUnixTime(
              o("WATimeUtils").unixTimeMs(),
            ),
            l = o("WATimeUtils").toHttpHeaderDate(r),
            _ = o("WATimeUtils").toHttpHeaderDate(a),
            g = o("WATimeUtils").toHttpHeaderDate(i);
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] fatal notify done sleepT=",
                " sendT=",
                " currT=",
                "",
              ])),
            l,
            _,
            g,
          ),
            yield o("WAWebSyncdLogs").printSyncdLogs(),
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
            yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return (_ || (_ = n("Promise"))).all(
        (e != null ? e : [""]).map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.handleFatalError = g;
  },
  98,
);
