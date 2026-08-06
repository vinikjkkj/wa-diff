__d(
  "WAWebSyncdFatal",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
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
      f,
      g = 5e3;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: starting fatal flow for ",
                "",
              ])),
            t,
          ),
            t
              ? yield C(t, "handleFatalError for collection")
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
            yield o("WAPromiseDelays").delayMs(g),
            yield C(t, "handleFatalError before notify primary"));
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
            yield C(t, "handleFatalError after notify primary"));
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
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: fatal flow: before logout sleep",
                ])),
            ),
            yield o("WAPromiseDelays").delayMs(g),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return (f || (f = n("Promise"))).all(
        (e != null ? e : [""]).map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.handleFatalError = h;
  },
  98,
);
