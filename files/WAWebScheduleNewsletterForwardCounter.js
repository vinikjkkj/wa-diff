__d(
  "WAWebScheduleNewsletterForwardCounter",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["delaySeconds"],
      s,
      u,
      c = 1e3;
    function d(e) {
      if (!o("WAWebRestOperations").isRestOperationGateEnabled()) {
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .fireAndForget(
            o(
              "WAWebPersistedJobDefinitions",
            ).jobSerializers.incrementNewsletterForwardCounter(
              e.newsletterId,
              e.retriesRemaining,
              e.serverId,
              o("WATimeUtils").futureUnixTime(e.delaySeconds),
            ),
          );
        return;
      }
      m(e).catch(function (e) {
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.delaySeconds,
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
          (yield o("WAPromiseDelays").delayMs(r * c),
            yield o("WAWebScheduledOperations").scheduleOperation(
              o("WAWebScheduledOperations").ScheduledOperation
                .INCREMENT_NEWSLETTER_FORWARD_COUNTER,
              function () {
                return (_(a), (u || (u = n("Promise"))).resolve());
              },
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.newsletterId,
        n = e.retriesRemaining,
        r = e.serverId;
      o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
        "incrementForwardCounterAPI",
        { newsletterId: t, retriesRemaining: n, serverId: r },
      );
    }
    ((l.scheduleForwardCounterIncrement = d),
      (l.sendForwardCounterIncrement = _));
  },
  98,
);
