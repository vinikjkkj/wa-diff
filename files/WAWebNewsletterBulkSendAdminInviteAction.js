__d(
  "WAWebNewsletterBulkSendAdminInviteAction",
  [
    "Promise",
    "WAWebFindChatAction",
    "WAWebLidMigrationUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.base64Thumb,
            i = t.chat,
            l = t.invitees,
            s = t.inviteMessage,
            u = o("WAWebStateUtils").unproxy(i).id,
            c = s != null ? s : "",
            d = l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var t,
                        n = o("WAWebWidFactory").asUserWidOrThrow(e.id),
                        l = o("WAWebLidMigrationUtils").toPn(n);
                      if (l == null)
                        throw r("err")(
                          "WaWebLidPn - Phone number not found for contact",
                        );
                      var s = yield o(
                          "WAWebFindChatAction",
                        ).findOrCreateLatestChat(
                          l,
                          "sendNewsletterAdminInvite",
                        ),
                        d = s.chat,
                        m = yield o(
                          "WAWebNewsletterSendMsgAction",
                        ).sendNewsletterAdminInviteMessage(d, {
                          newsletterWid: u,
                          invitee: n,
                          inviteMessage: c,
                          base64Thumb: a,
                        }),
                        p = m.messageSendResult;
                      return (
                        (t = i.newsletterMetadata) == null ||
                          (t = t.pendingAdmins) == null ||
                          t.add(
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
                        result: o("WAWebSendMsgResultAction").SendMsgResult
                          .ERROR_UNKNOWN,
                        invitee: e,
                      };
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            m = yield (e || (e = n("Promise"))).all(d),
            p = m.filter(function (e) {
              return (
                e.result !== o("WAWebSendMsgResultAction").SendMsgResult.OK
              );
            });
          return { failedAttempts: p, allFailed: p.length === l.length };
        })),
        u.apply(this, arguments)
      );
    }
    l.sendBulkNewsletterAdminInviteAction = s;
  },
  98,
);
