__d(
  "WAWebForwardMessagesToChat",
  [
    "Promise",
    "WAPromiseProps",
    "WAWebBlockContactAction",
    "WAWebChatForwardMessage",
    "WAWebChatGetters",
    "WAWebFormatForwardErrorChatAction",
    "WAWebForwardAssociatedChildren",
    "WAWebForwardContentMsgs",
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
            d = o("WAWebForwardContentMsgs").getForwardContentMsgs(u);
          for (var m of d)
            (o("WAWebMsgGetters").getIsPSA(m) &&
              o("WAWebWamChatPSALogger").logChatPSAForward(m),
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterMessageForwardLoggingEnabled() &&
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter(m) &&
                o(
                  "WAWebLogNewsletterMessageForward",
                ).logNewsletterMessageForward(m, i));
          var p = yield (e || (e = n("Promise"))).all(
              i
                .filter(function (e) {
                  return e.canSend;
                })
                .map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = c(
                            o(
                              "WAWebForwardContentMsgs",
                            ).getForwardContentMsgsForDestination(
                              u,
                              o(
                                "WAWebForwardAssociatedChildren",
                              ).getForwardDestination(e),
                            ),
                          ),
                          n = t.msgsThatCanBeforwarded,
                          r = t.msgsThatCannotBeForwarded;
                        return (
                          o("WAWebChatGetters").getIsUser(e) &&
                            e.contact.isContactBlocked &&
                            (yield o("WAWebBlockContactAction").unblockContact(
                              e.contact,
                            )),
                          o("WAPromiseProps").promiseProps({
                            chat: e,
                            undelivered: o(
                              "WAWebChatForwardMessage",
                            ).forwardMessages({
                              chat: e,
                              msgs: n,
                              multicast: !0,
                              includeCaption: s,
                              appendedText: a,
                            }),
                            msgsThatCanBeforwarded: n,
                            msgsThatCannotBeForwarded: r,
                          })
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
            ),
            _ = r("compactMap")(p, function (e) {
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
          if (_.length) throw new (r("WAWebForwardErrorChatAction"))(_);
          return !0;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = [],
        n = [];
      for (var r of e) {
        var a =
          o("WAWebMsgActionCapability").canForwardMsg(r) &&
          (o("WAWebMsgCollection").MsgCollection.get(r.id) != null ||
            o("WAWebMsgGetters").getIsEphemeral(r));
        a ? t.push(r) : n.push(r);
      }
      return { msgsThatCanBeforwarded: t, msgsThatCannotBeForwarded: n };
    }
    l.forwardMessagesToChats = s;
  },
  98,
);
