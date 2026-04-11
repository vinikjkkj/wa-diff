__d(
  "WAWebNewsletterHandleLiveUpdatesNotification",
  [
    "WALogger",
    "WANullthrows",
    "WASmaxNewslettersLiveUpdatesNotificationRPC",
    "WAWebBackendApi",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o(
              "WASmaxNewslettersLiveUpdatesNotificationRPC",
            ).receiveLiveUpdatesNotificationRPC(t),
            a = n.makeLiveUpdatesNotificationResponseAck,
            i = n.parsedRequest;
          try {
            if (
              !o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterReactionEnabled()
            )
              return a();
            var l = i.from,
              s =
                i.liveUpdatesMessagesNewsletterMessageResponsePayloadMixin
                  .message,
              u = i.t,
              c = yield o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).getMsgsAndAddOnsFromUpdates(
                s,
                o("WAWebWidFactory").createWid(r("WANullthrows")(l)),
                u,
              );
            return (
              yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
                babelHelpers.extends({}, c, { timestamp: u }),
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateNewsletterMessages",
                c,
              ),
              a()
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] live-updates notif handling failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-live-updates-db"),
              a()
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.handleNewsletterLiveUpdatesNotification = s;
  },
  98,
);
