__d(
  "WAWebForwardMessagesToChat",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.appendedText,
            i = t.chats,
            l = t.includeCaption,
            s = l === void 0 ? !1 : l,
            u = t.msgs,
            c = (e || (e = n("Promise"))).all(
              u.map(function (e) {
                return (
                  o("WAWebMsgGetters").getIsPSA(e) &&
                    o("WAWebWamChatPSALogger").logChatPSAForward(e),
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterMessageForwardLoggingEnabled() &&
                    o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
                    o(
                      "WAWebLogNewsletterMessageForward",
                    ).logNewsletterMessageForward(e, i),
                  o("WAPromiseProps").promiseProps({
                    message: e,
                    canForward:
                      o("WAWebMsgActionCapability").canForwardMsg(e) &&
                      (o("WAWebMsgCollection").MsgCollection.get(e.id) !=
                        null ||
                        o("WAWebMsgGetters").getIsEphemeral(e)),
                  })
                );
              }),
            ),
            d = yield e.all(
              i
                .filter(function (e) {
                  return e.canSend;
                })
                .map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var r =
                            o("WAWebChatGetters").getIsUser(t) &&
                            t.contact.isContactBlocked
                              ? o("WAWebBlockContactAction").unblockContact(
                                  t.contact,
                                )
                              : (e || (e = n("Promise"))).resolve(!0),
                          i = yield (e || (e = n("Promise"))).all([c, r]),
                          l = i[0],
                          u = l
                            .filter(function (e) {
                              return e.canForward === !0;
                            })
                            .map(function (e) {
                              return e.message;
                            }),
                          d = l
                            .filter(function (e) {
                              return e.canForward === !1;
                            })
                            .map(function (e) {
                              return e.message;
                            });
                        return o("WAPromiseProps").promiseProps({
                          chat: t,
                          undelivered: o(
                            "WAWebChatForwardMessage",
                          ).forwardMessages({
                            chat: t,
                            msgs: u,
                            multicast: !0,
                            includeCaption: s,
                            appendedText: a,
                          }),
                          msgsThatCanBeforwarded: u,
                          msgsThatCannotBeForwarded: d,
                        });
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
            ),
            m = r("compactMap")(d, function (e) {
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
          if (m.length) throw new (r("WAWebForwardErrorChatAction"))(m);
          return !0;
        })),
        u.apply(this, arguments)
      );
    }
    l.forwardMessagesToChats = s;
  },
  98,
);
