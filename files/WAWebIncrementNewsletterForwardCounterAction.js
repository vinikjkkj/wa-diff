__d(
  "WAWebIncrementNewsletterForwardCounterAction",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebScheduleIncrementNewsletterForwardCounterAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        !(
          t.id === o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE() &&
          !o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterForwardCounterBumpForwardsToSelfEnabled()
        )
      ) {
        var n = e.forwardedNewsletterMessageInfo != null;
        if (n) {
          var a, i, l;
          if (
            !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterForwardCounterBumpSecondOrderForwardsEnabled()
          )
            return;
          var s =
            ((a = e.forwardedNewsletterMessageInfo) == null
              ? void 0
              : a.newsletterId) != null &&
            (i =
              (l = r("WAWebNewsletterCollection").get(
                e.forwardedNewsletterMessageInfo.newsletterId,
              )) == null || (l = l.newsletterMetadata) == null
                ? void 0
                : l.iAmAdminOrOwner()) != null
              ? i
              : !1;
          if (
            !s ||
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled()
          ) {
            var u,
              c,
              d =
                (u = e.forwardedNewsletterMessageInfo) == null
                  ? void 0
                  : u.newsletterId,
              m =
                (c = e.forwardedNewsletterMessageInfo) == null
                  ? void 0
                  : c.serverMessageId;
            o(
              "WAWebScheduleIncrementNewsletterForwardCounterAction",
            ).scheduleIncrementForwardCounter(d, m);
          }
        } else {
          var p = o("WAWebFrontendMsgGetters").getChat(e);
          if (o("WAWebChatGetters").getIsNewsletter(p)) {
            var _,
              f,
              g =
                (_ =
                  (f = p.newsletterMetadata) == null
                    ? void 0
                    : f.iAmAdminOrOwner()) != null
                  ? _
                  : !1;
            if (
              !g ||
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled()
            ) {
              var h = o("WAWebWidFactory").asNewsletterWidOrThrow(p.id),
                y = e.serverId;
              o(
                "WAWebScheduleIncrementNewsletterForwardCounterAction",
              ).scheduleIncrementForwardCounter(h, y);
            }
          }
        }
      }
    }
    l.incrementNewsletterForwardCounter = e;
  },
  98,
);
