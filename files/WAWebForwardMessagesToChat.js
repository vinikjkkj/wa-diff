__d(
  "WAWebForwardMessagesToChat",
  [
    "WAPromiseProps",
    "WAWebBlockContactAction",
    "WAWebChatForwardMessage",
    "WAWebChatGetters",
    "WAWebFormatForwardErrorChatAction",
    "WAWebForwardErrorChatAction",
    "WAWebLogNewsletterMessageForward",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebWamChatPSALogger",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.appendedText,
        n = e.chats,
        a = e.includeCaption,
        i = a === void 0 ? !1 : a,
        l = e.msgs,
        s = Promise.all(
          l.map(function (e) {
            return (
              o("WAWebMsgGetters").getIsPSA(e) &&
                o("WAWebWamChatPSALogger").logChatPSAForward(e),
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterMessageForwardLoggingEnabled() &&
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
                o(
                  "WAWebLogNewsletterMessageForward",
                ).logNewsletterMessageForward(e, n),
              o("WAPromiseProps").promiseProps({
                message: e,
                canForward:
                  o("WAWebMsgActionCapability").canForwardMsg(e) &&
                  (o("WAWebMsgCollection").MsgCollection.get(e.id) != null ||
                    o("WAWebMsgGetters").getIsEphemeral(e)),
              })
            );
          }),
        ),
        u = await Promise.all(
          n
            .filter(function (e) {
              return e.canSend;
            })
            .map(async function (e) {
              var n =
                  o("WAWebChatGetters").getIsUser(e) &&
                  e.contact.isContactBlocked
                    ? o("WAWebBlockContactAction").unblockContact(e.contact)
                    : Promise.resolve(!0),
                r = await Promise.all([s, n]),
                a = r[0],
                l = a
                  .filter(function (e) {
                    return e.canForward === !0;
                  })
                  .map(function (e) {
                    return e.message;
                  }),
                u = a
                  .filter(function (e) {
                    return e.canForward === !1;
                  })
                  .map(function (e) {
                    return e.message;
                  });
              return o("WAPromiseProps").promiseProps({
                chat: e,
                undelivered: o("WAWebChatForwardMessage").forwardMessages({
                  chat: e,
                  msgs: l,
                  multicast: !0,
                  includeCaption: i,
                  appendedText: t,
                }),
                msgsThatCanBeforwarded: l,
                msgsThatCannotBeForwarded: u,
              });
            }),
        ),
        c = r("compactMap")(u, function (e) {
          var t = e.chat,
            n = e.msgsThatCanBeforwarded,
            o = e.msgsThatCannotBeForwarded,
            a = e.undelivered,
            i = null;
          return (
            (a.length || o.length) &&
              (i = r("WAWebFormatForwardErrorChatAction")({
                chat: t,
                undelivered: a,
                canForward: n,
                cannotForward: o,
              })),
            i != null && i !== "" ? { chat: t, reason: i } : null
          );
        });
      if (c.length) throw new (r("WAWebForwardErrorChatAction"))(c);
      return !0;
    }
    l.forwardMessagesToChats = e;
  },
  98,
);
