__d(
  "WAWebIncrementNewsletterForwardCounterAction",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
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
          var a, i;
          if (
            !o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterForwardCounterBumpSecondOrderForwardsEnabled()
          )
            return;
          var l =
            ((a = e.forwardedNewsletterMessageInfo) == null
              ? void 0
              : a.newsletterId) != null
              ? o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                  (i = r("WAWebNewsletterCollection").get(
                    e.forwardedNewsletterMessageInfo.newsletterId,
                  )) == null
                    ? void 0
                    : i.newsletterMetadata,
                )
              : !1;
          if (
            !l ||
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled()
          ) {
            var s,
              u,
              c =
                (s = e.forwardedNewsletterMessageInfo) == null
                  ? void 0
                  : s.newsletterId,
              d =
                (u = e.forwardedNewsletterMessageInfo) == null
                  ? void 0
                  : u.serverMessageId;
            o(
              "WAWebScheduleIncrementNewsletterForwardCounterAction",
            ).scheduleIncrementForwardCounter(c, d);
          }
        } else {
          var m = o("WAWebFrontendMsgGetters").getChat(e);
          if (o("WAWebChatGetters").getIsNewsletter(m)) {
            var p = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              m.newsletterMetadata,
            );
            if (
              !p ||
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled()
            ) {
              var _ = o("WAWebWidFactory").asNewsletterWidOrThrow(m.id),
                f = e.serverId;
              o(
                "WAWebScheduleIncrementNewsletterForwardCounterAction",
              ).scheduleIncrementForwardCounter(_, f);
            }
          }
        }
      }
    }
    l.incrementNewsletterForwardCounter = e;
  },
  98,
);
