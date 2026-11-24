__d(
  "WAWebPushSubscriptionLifecycleLogger",
  [
    "WALogger",
    "WAWebWamEnumLogType",
    "WAWebWebcMinorEventLogWamEvent",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u("sw-push-sub-unsubscribe", e);
    }
    async function u(t, n) {
      try {
        if (!r("justknobx")._("8714")) return;
        await new (o(
          "WAWebWebcMinorEventLogWamEvent",
        ).WebcMinorEventLogWamEvent)({
          logType: o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT,
          logReason: t,
          logContext: n,
          logCount: 1,
        }).commitAndWaitForFlush();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] push subscription lifecycle count not logged",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("sw-push-sub-count-failed");
      }
    }
    l.logSwPushUnsubscribe = s;
  },
  98,
);
