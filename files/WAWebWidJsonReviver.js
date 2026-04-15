__d(
  "WAWebWidJsonReviver",
  ["WALogger", "WAWebWid", "WAWebWidFactory", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "",
        "_serialized",
        "body",
        "originalSelfAuthor",
        "sellerJid",
        "sender",
        "remoteJid",
        "inviteGrp",
        "initiatedBy",
        "groupJid",
        "newsletterJid",
        "businessOwnerJid",
        "originalLid",
        "historyChatId",
        "authorJid",
        "channelJid",
      ];
    function u(t, n, a, i) {
      (a === void 0 && (a = r("WAWebWid").isWid),
        i === void 0 && (i = o("WAWebWidFactory").createWid));
      var l = n;
      switch (t) {
        case "accountLid":
        case "author":
        case "broadcastId":
        case "chat":
        case "chatId":
        case "descOwner":
        case "from":
        case "gid":
        case "id":
        case "jid":
        case "owner":
        case "participant":
        case "quotedRemoteJid":
        case "quotedParticipant":
        case "remote":
        case "subjectOwner":
        case "s_o":
        case "to":
        case "wid":
        case "changeNumberNewJid":
        case "changeNumberOldJid":
        case "recipient":
        case "recipientLatestLid":
        case "senderPn":
        case "senderLid":
        case "peerRecipientPn":
        case "peerRecipientLid":
        case "paymentMessageReceiverJid":
        case "parentGroup":
        case "participantLid":
        case "participantPn":
        case "phoneNumber":
        case "revokeSender":
        case "ephemeralSettingUser":
        case "newsletterId":
        case "invokedBotWid":
        case "botTargetSenderJid":
        case "preMatChat":
        case "preMatWid":
        case "senderWithDevice":
        case "callCreator":
        case "groupAdder":
        case "botId":
        case "bundleSender":
        case "botGroupParticipant":
          a(n) && (l = i(n));
          break;
        default: {
          var u = parseInt(t, 10);
          if (!isNaN(u) && a(n)) l = i(n);
          else if (!r("gkx")("26258") && typeof t == "string") {
            if (s.includes(t) || (typeof n == "string" && n.length > 40)) break;
            a(n) &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[widReviver] Value under key ",
                      " resembles a WID, but not included in revived fields. Consider carefully if you want to revive it or add it to the ignore list.",
                    ])),
                  t,
                )
                .sendLogs("widReviver-wid-key-" + t);
          }
          break;
        }
      }
      return l;
    }
    function c(e, t) {
      return u(e, t);
    }
    ((l.widReviver = u), (l.jsonWidReviver = c));
  },
  98,
);
