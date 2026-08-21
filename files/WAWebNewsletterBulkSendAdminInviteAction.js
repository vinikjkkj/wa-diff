__d(
  "WAWebNewsletterBulkSendAdminInviteAction",
  [
    "Promise",
    "WAWebFindChatAction",
    "WAWebNewsletterSendMsgAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
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
          var r = t.base64Thumb,
            a = t.chat,
            i = t.invitees,
            l = t.inviteMessage,
            s = o("WAWebStateUtils").unproxy(a).id,
            u = l != null ? l : "",
            c = i.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var t,
                        n = o("WAWebWidFactory").asUserWidOrThrow(e.id),
                        i = yield o(
                          "WAWebFindChatAction",
                        ).findOrCreateLatestChat(
                          n,
                          "sendNewsletterAdminInvite",
                        ),
                        l = i.chat,
                        c = yield o(
                          "WAWebNewsletterSendMsgAction",
                        ).sendNewsletterAdminInviteMessage(l, {
                          newsletterWid: s,
                          invitee: n,
                          inviteMessage: u,
                          base64Thumb: r,
                        }),
                        d = c.messageSendResult;
                      return (
                        (t = a.newsletterMetadata) == null ||
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
                        { result: d, invitee: e }
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
            d = yield (e || (e = n("Promise"))).all(c),
            m = d.filter(function (e) {
              return (
                e.result !== o("WAWebSendMsgResultAction").SendMsgResult.OK
              );
            });
          return { failedAttempts: m, allFailed: m.length === i.length };
        })),
        u.apply(this, arguments)
      );
    }
    l.sendBulkNewsletterAdminInviteAction = s;
  },
  98,
);
