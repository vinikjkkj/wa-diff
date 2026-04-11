__d(
  "WAWebScheduleIncrementNewsletterForwardCounterAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n,
        o = r("WAWebNewsletterCollection").get(e),
        a =
          o == null || (n = o.msgs) == null
            ? void 0
            : n.findFirst(function (e) {
                return e.serverId === t;
              });
      if (a != null) {
        var i,
          l = (i = a.forwardsCount) != null ? i : 0;
        a.set("forwardsCount", l + 1);
      }
    }
    function u(t, n) {
      if (
        !(
          t == null ||
          n == null ||
          !o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterForwardCounterInfraEnabled()
        )
      ) {
        s(t, n);
        var r = o(
            "WAWebNewsletterGatingUtils",
          ).newsletterForwardCounterMaxSendAfterRandomTime(),
          a = o("WATimeUtils").futureUnixTime(Math.floor(Math.random() * r));
        try {
          var i = o(
            "WAWebPersistedJobDefinitions",
          ).jobSerializers.incrementNewsletterForwardCounter(
            t.toString(),
            o("WAWebNewsletterGatingUtils")
              .NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES,
            n,
            a,
          );
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(i);
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ForwardCounter][Increment] Failed to start persisted job",
                ])),
            )
            .tags("newsletter-forward-counter", "job-start-error")
            .sendLogs("forward-counter-job-start-error");
        }
      }
    }
    l.scheduleIncrementForwardCounter = u;
  },
  98,
);
