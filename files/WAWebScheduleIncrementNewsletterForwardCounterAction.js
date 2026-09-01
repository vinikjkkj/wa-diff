__d(
  "WAWebScheduleIncrementNewsletterForwardCounterAction",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebScheduleNewsletterForwardCounter",
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
        var r = o("WAWebABProps").getABPropConfigValue(
            "newsletter_forward_counter_max_send_after_random_time",
          ),
          a = Math.floor(Math.random() * r);
        try {
          o(
            "WAWebScheduleNewsletterForwardCounter",
          ).scheduleForwardCounterIncrement({
            delaySeconds: a,
            newsletterId: t.toString(),
            retriesRemaining: o("WAWebNewsletterGatingUtils")
              .NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES,
            serverId: n,
          });
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ForwardCounter][Increment] Failed to schedule the increment",
                ])),
            )
            .tags("newsletter-forward-counter")
            .sendLogs("forward-counter-schedule-error");
        }
      }
    }
    l.scheduleIncrementForwardCounter = u;
  },
  98,
);
