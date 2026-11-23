__d(
  "WAWebSwNotificationClick",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebApiAbPropConfig",
    "WAWebWamEnumLogType",
    "WAWebWamWorkerInterface",
    "WAWebWebcMinorEventLogWamEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 500;
    async function d() {
      var e = await Promise.all([
          m(),
          _("web_sw_notification_click_logging_enabled"),
        ]),
        t = e[0],
        n = e[1];
      return { raiseOpenTab: t, loggingEnabled: n };
    }
    function m() {
      return _("web_sw_notification_click_raise_open_tab");
    }
    async function p(t, n) {
      var a = t.loggingEnabled,
        i = t.raiseOpenTab;
      if (a)
        try {
          await o("WAWebWamWorkerInterface").commit(
            new (o("WAWebWebcMinorEventLogWamEvent").WebcMinorEventLogWamEvent)(
              {
                logType: o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT,
                logReason: "sw-notification-click-outcome",
                logContext: (i ? "test" : "control") + ":" + n,
                logCount: 1,
              },
            ),
          );
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] notification click outcome unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
    }
    async function _(e) {
      try {
        return await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebApiAbPropConfig").getConfigValue(e),
          c,
        );
      } catch (t) {
        return (
          t instanceof o("WACustomError").TimeoutError
            ? o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] notification click gate read timed out: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("sw-notification-click-gate-timeout", {
                  sampling: 0.01,
                })
            : o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] notification click gate unavailable",
                    ])),
                )
                .catching(r("getErrorSafe")(t)),
          !1
        );
      }
    }
    ((l.getNotificationClickConfig = d),
      (l.isNotificationClickRaiseOpenTabEnabled = m),
      (l.logNotificationClickOutcome = p));
  },
  98,
);
