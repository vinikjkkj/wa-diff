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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = o(
          "WASmaxNewslettersLiveUpdatesNotificationRPC",
        ).receiveLiveUpdatesNotificationRPC(t),
        a = n.makeLiveUpdatesNotificationResponseAck,
        i = n.parsedRequest;
      try {
        if (
          !o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()
        )
          return a();
        var l = i.from,
          s =
            i.liveUpdatesMessagesNewsletterMessageResponsePayloadMixin.message,
          u = i.t,
          c = await o(
            "WAWebNewsletterBackendAddOnsUtils",
          ).getMsgsAndAddOnsFromUpdates(
            s,
            o("WAWebWidFactory").createWid(r("WANullthrows")(l)),
            u,
          );
        return (
          await o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
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
    }
    l.handleNewsletterLiveUpdatesNotification = s;
  },
  98,
);
