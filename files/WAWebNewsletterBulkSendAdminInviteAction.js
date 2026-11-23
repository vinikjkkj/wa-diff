__d(
  "WAWebNewsletterBulkSendAdminInviteAction",
  [
    "WAWebFindChatAction",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.base64Thumb,
        n = e.chat,
        r = e.invitees,
        a = e.inviteMessage,
        i = o("WAWebStateUtils").unproxy(n).id,
        l = a != null ? a : "",
        s = r.map(async function (e) {
          try {
            var r,
              a = o("WAWebWidFactory").asUserWidOrThrow(e.id),
              s = await o("WAWebFindChatAction").findOrCreateLatestChat(
                a,
                "sendNewsletterAdminInvite",
              ),
              u = s.chat,
              c = await o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterAdminInviteMessage(u, {
                newsletterWid: i,
                invitee: a,
                inviteMessage: l,
                base64Thumb: t,
              }),
              d = c.messageSendResult;
            return (
              (r = n.newsletterMetadata) == null ||
                (r = r.pendingAdmins) == null ||
                r.add(
                  new (o(
                    "WAWebNewsletterSubscriberModel",
                  ).NewsletterSubscriber)({
                    id: e.id,
                    isPendingAdmin: !0,
                    membership: null,
                    contact: e,
                  }),
                ),
              { result: d, invitee: e }
            );
          } catch (t) {
            return {
              result: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
              invitee: e,
            };
          }
        }),
        u = await Promise.all(s),
        c = u.filter(function (e) {
          return e.result !== o("WAWebSendMsgResultAction").SendMsgResult.OK;
        });
      return { failedAttempts: c, allFailed: c.length === r.length };
    }
    l.sendBulkNewsletterAdminInviteAction = e;
  },
  98,
);
