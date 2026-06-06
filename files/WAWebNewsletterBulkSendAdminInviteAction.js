__d(
  "WAWebNewsletterBulkSendAdminInviteAction",
  [
    "WAWebFindChatAction",
    "WAWebLidMigrationUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.base64Thumb,
        n = e.chat,
        a = e.invitees,
        i = e.inviteMessage,
        l = o("WAWebStateUtils").unproxy(n).id,
        s = i != null ? i : "",
        u = a.map(async function (e) {
          try {
            var a,
              i = o("WAWebWidFactory").asUserWidOrThrow(e.id),
              u = o("WAWebLidMigrationUtils").toPn(i);
            if (u == null)
              throw r("err")("WaWebLidPn - Phone number not found for contact");
            var c = await o("WAWebFindChatAction").findOrCreateLatestChat(
                u,
                "sendNewsletterAdminInvite",
              ),
              d = c.chat,
              m = await o(
                "WAWebNewsletterSendMsgAction",
              ).sendNewsletterAdminInviteMessage(d, {
                newsletterWid: l,
                invitee: i,
                inviteMessage: s,
                base64Thumb: t,
              }),
              p = m.messageSendResult;
            return (
              (a = n.newsletterMetadata) == null ||
                (a = a.pendingAdmins) == null ||
                a.add(
                  new (o(
                    "WAWebNewsletterSubscriberModel",
                  ).NewsletterSubscriber)({
                    id: e.id,
                    isPendingAdmin: !0,
                    membership: null,
                    contact: e,
                  }),
                ),
              { result: p, invitee: e }
            );
          } catch (t) {
            return {
              result: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
              invitee: e,
            };
          }
        }),
        c = await Promise.all(u),
        d = c.filter(function (e) {
          return e.result !== o("WAWebSendMsgResultAction").SendMsgResult.OK;
        });
      return { failedAttempts: d, allFailed: d.length === a.length };
    }
    l.sendBulkNewsletterAdminInviteAction = e;
  },
  98,
);
