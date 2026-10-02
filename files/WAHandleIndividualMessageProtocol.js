__d(
  "WAHandleIndividualMessageProtocol",
  [
    "WACryptoPkcs7",
    "WADecodeIncomingMsg",
    "WAE2E.pb",
    "WAJids",
    "WALogger",
    "WAParseProtocol",
    "WAParseV3Protocol",
    "WAResultOrError",
    "WATransformRetryOrIndividualRegularMixinGroup",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WAParseV3Protocol").createV3ProtocolParser();
    function c(t) {
      switch (t) {
        case "ContentTypeText":
          return "text";
        case "ContentTypeLiveLocationSingle":
          return "live_location";
        case "ContentTypeMedia":
          return "media";
        case "ContentTypeMedianotify":
        case "ContentTypeMediaSingle":
          return "media";
        case "ContentTypePayIndividual":
          return "pay";
        case "ContentTypeReaction":
          return "reaction";
        case "ContentTypeList":
        case "ContentTypeListDeprecated":
          return "product_list";
        case "ContentTypePollCreation":
          return "poll_creation";
        case "ContentTypePollVote":
          return "poll_vote";
        case "ContentTypePollEdit":
          return "poll_edit";
        case "ContentTypePollAddOption":
          return "poll_add_option";
        case "ContentTypePollResultSnapshot":
          return "poll_result_snapshot";
        case "ContentTypeEvent":
          return "event";
        default:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown message content type: ",
                  "",
                ])),
              t,
            ),
            "text"
          );
      }
    }
    function d(e) {
      var t,
        n = e.armadilloOriginalMessageTimestampMixin,
        a = e.availableOrUnavailableIndividualMixinGroup,
        i = e.from,
        l = e.groupInviteTargetMixin,
        s = e.recipientMixin,
        u = o("WAJids").extractUserJid(i),
        d = s == null ? u : s.recipient,
        m = s == null ? u : "@me";
      if (a.name === "UnavailableIndividual")
        return {
          type: "Unavailable",
          author: m,
          chat: d,
          from: i,
          recipient: s == null ? void 0 : s.recipient,
          contentType: c(a.value.contentUnavailableMixins.name),
        };
      var p = a.value.retryOrIndividualRegularOrBotResponseMessageMixinGroup;
      if (p.name === "BotResponseMessage")
        throw r("err")("BotResponseMessage is unsupported");
      return babelHelpers.extends(
        {
          type: "Available",
          author: m,
          chat: d,
          from: i,
          recipient: s == null ? void 0 : s.recipient,
        },
        o(
          "WATransformRetryOrIndividualRegularMixinGroup",
        ).transformRetryOrIndividualRegularMixinGroup(p),
        {
          contentType: c(a.value.contentAvailableMixins.name),
          groupInviteTarget: l == null ? void 0 : l.metaGroupInvite,
          originalMsgTimestampMs:
            (t = n == null ? void 0 : n.metaOriginalMsgT) != null ? t : null,
        },
      );
    }
    var m = function (t) {
      var e = t.decryptedMessage,
        n = e.author,
        r = e.chat,
        a = e.encVersion,
        i = e.plaintext,
        l = e.serverTs,
        c = e.stanzaId;
      if (a !== "2" && a !== "3")
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "enc version ",
                " is not supported.",
              ])),
            a,
          ),
          o("WAResultOrError").makeError("unknown-plaintext")
        );
      var d = null;
      if (a === "2") {
        var m,
          p = o("WACryptoPkcs7").unpadPkcs7(i),
          _ = o("decodeProtobuf").decodeProtobuf(o("WAE2E.pb").MessageSpec, p);
        if (
          _.deviceSentMessage != null &&
          _.deviceSentMessage.destinationJid !== r
        )
          return o("WAResultOrError").makeError("invalid-device-sent-message");
        var f = (m = _.deviceSentMessage) == null ? void 0 : m.message;
        f != null && (_ = f);
        var g = { author: n, bytes: i, externalId: c, jid: r, proto: _, ts: l };
        d = o("WAParseProtocol").parseProtocol(g);
      } else {
        var h = n === "@me" ? r : null,
          y = o("WADecodeIncomingMsg").decodeIncomingMsg(i, "v3", h);
        if (y.version !== "v3" || y.type !== "subprotocol")
          return o("WAResultOrError").makeError("unknown-plaintext");
        d = u(y, r, c, n, l);
      }
      return o("WAResultOrError").makeResult(d);
    };
    ((l.parseIndividualMessage = d), (l.decodeIndividualMessage = m));
  },
  98,
);
