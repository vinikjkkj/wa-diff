__d(
  "WAWebHandleDigitalCommerceSubscriptionNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebParseSubscriptionNotification",
    "WAWebSubscriptions",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))(
        "digitalCommerceSubscriptionNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t = e.attrString("id"),
            n = e.attrWapJid("from"),
            r = o(
              "WAWebParseSubscriptionNotification",
            ).parseSubscriptionsAndFeatureFlags(e),
            a = r.featureFlags,
            i = r.subscriptions;
          return { stanzaId: t, from: n, subscriptions: i, featureFlags: a };
        },
      );
    function u(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "digital_commerce_subscription",
      });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = s.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var r = n.success;
          return (
            yield o("WAWebSubscriptions").applySubscriptionsAndFeatureFlags(
              r.subscriptions,
              r.featureFlags,
              "update",
            ),
            u(r.stanzaId, r.from)
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(
        !!e.attrs.offline,
      );
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "handleDigitalCommerceSubscriptionNotification",
          function (e) {
            return c(e.node);
          },
          { priority: t },
        )
        .waitUntilCompleted({ node: e });
    }
    ((l.handleDigitalCommerceSubscriptionNotification = c),
      (l.handleDigitalCommerceSubscriptionNotificationJob = m));
  },
  98,
);
