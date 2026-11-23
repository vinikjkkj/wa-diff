__d(
  "WAWebScheduleNewsletterForwardCounter",
  [
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebSendForwardCounterIncrement",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["delaySeconds"],
      s,
      u = 1e3;
    function c(e) {
      if (!o("WAWebRestOperations").isRestOperationGateEnabled()) {
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .fireAndForget(
            o(
              "WAWebPersistedJobDefinitions",
            ).jobSerializers.incrementNewsletterForwardCounter({
              delayedTime: o("WATimeUtils").futureUnixTime(e.delaySeconds),
              newsletterId: e.newsletterId,
              retriesRemaining: e.retriesRemaining,
              serverId: e.serverId,
            }),
          );
        return;
      }
      d(e).catch(function (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ForwardCounter][Increment] Failed to schedule the increment",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("newsletter-forward-counter")
          .sendLogs("forward-counter-schedule-error");
      });
    }
    async function d(t) {
      var n = t.delaySeconds,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      (await o("WAPromiseDelays").delayMs(n * u),
        await o("WAWebScheduledOperations").scheduleOperation(
          o("WAWebScheduledOperations").ScheduledOperation
            .INCREMENT_NEWSLETTER_FORWARD_COUNTER,
          function () {
            return (
              o("WAWebSendForwardCounterIncrement").sendForwardCounterIncrement(
                r,
              ),
              Promise.resolve()
            );
          },
        ));
    }
    l.scheduleForwardCounterIncrement = c;
  },
  98,
);
