__d(
  "WAWebVerifyProtobufMsgObjectKeys",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCurrentUser",
    "WAWebHandleMsgError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        Buttons: 1,
        Template: 2,
        SenderKeyDistribution: 3,
        UnknownMessageKey: 4,
      });
    function u(e, t) {
      var n, r, a, i;
      return e === "$$unknownFieldCount"
        ? t[e] === 0
          ? null
          : o("WAWebMsgType").MSG_TYPE.UNKNOWN
        : e === "messageContextInfo"
          ? null
          : e === "contactMessage"
            ? o("WAWebMsgType").MSG_TYPE.VCARD
            : e === "contactsArrayMessage"
              ? o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
              : e === "conversation" || e === "extendedTextMessage"
                ? o("WAWebMsgType").MSG_TYPE.CHAT
                : e === "imageMessage"
                  ? o("WAWebMsgType").MSG_TYPE.IMAGE
                  : e === "locationMessage" || e === "liveLocationMessage"
                    ? o("WAWebMsgType").MSG_TYPE.LOCATION
                    : e === "documentMessage"
                      ? o("WAWebMsgType").MSG_TYPE.DOCUMENT
                      : e === "audioMessage"
                        ? o("WAWebMsgType").MSG_TYPE.AUDIO
                        : e === "videoMessage"
                          ? o("WAWebMsgType").MSG_TYPE.VIDEO
                          : e === "protocolMessage" ||
                              e === "highlyStructuredMessage"
                            ? o("WAWebMsgType").MSG_TYPE.PROTOCOL
                            : e === "statusNotificationMessage"
                              ? o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION
                              : e === "sendPaymentMessage" ||
                                  e === "requestPaymentMessage" ||
                                  e === "paymentInviteMessage"
                                ? o("WAWebMsgType").MSG_TYPE.PAYMENT
                                : e === "declinePaymentRequestMessage" ||
                                    e === "cancelPaymentRequestMessage"
                                  ? o("WAWebMsgType").MSG_TYPE.UNKNOWN
                                  : e === "stickerMessage"
                                    ? o("WAWebMsgType").MSG_TYPE.STICKER
                                    : e === "groupInviteMessage"
                                      ? o("WAWebMsgType").MSG_TYPE
                                          .GROUPS_V4_INVITE
                                      : e === "templateButtonReplyMessage"
                                        ? o("WAWebMsgType").MSG_TYPE
                                            .TEMPLATE_BUTTON_REPLY
                                        : e === "productMessage"
                                          ? o("WAWebMsgType").MSG_TYPE.PRODUCT
                                          : e === "listMessage"
                                            ? o("WAWebMsgType").MSG_TYPE.LIST
                                            : e === "orderMessage"
                                              ? o("WAWebMsgType").MSG_TYPE.ORDER
                                              : e === "listResponseMessage"
                                                ? o("WAWebMsgType").MSG_TYPE
                                                    .LIST_RESPONSE
                                                : e === "buttonsResponseMessage"
                                                  ? o("WAWebMsgType").MSG_TYPE
                                                      .BUTTONS_RESPONSE
                                                  : e === "interactiveMessage"
                                                    ? o("WAWebMsgType").MSG_TYPE
                                                        .INTERACTIVE
                                                    : e ===
                                                        "interactiveResponseMessage"
                                                      ? o("WAWebMsgType")
                                                          .MSG_TYPE
                                                          .INTERACTIVE_RESPONSE
                                                      : e === "reactionMessage"
                                                        ? o("WAWebMsgType")
                                                            .MSG_TYPE.REACTION
                                                        : e ===
                                                            "encReactionMessage"
                                                          ? o("WAWebMsgType")
                                                              .MSG_TYPE
                                                              .REACTION_ENC
                                                          : e ===
                                                              "encCommentMessage"
                                                            ? o("WAWebMsgType")
                                                                .MSG_TYPE
                                                                .COMMENT
                                                            : e ===
                                                                "pinInChatMessage"
                                                              ? o(
                                                                  "WAWebMsgType",
                                                                ).MSG_TYPE
                                                                  .PIN_MESSAGE
                                                              : e ===
                                                                    "pollCreationMessage" ||
                                                                  e ===
                                                                    "pollCreationMessageV2" ||
                                                                  e ===
                                                                    "pollCreationMessageV3" ||
                                                                  e ===
                                                                    "pollCreationMessageV5" ||
                                                                  e ===
                                                                    "pollCreationMessageV6"
                                                                ? o(
                                                                    "WAWebMsgType",
                                                                  ).MSG_TYPE
                                                                    .POLL_CREATION
                                                                : e ===
                                                                    "pollUpdateMessage"
                                                                  ? o(
                                                                      "WAWebMsgType",
                                                                    ).MSG_TYPE
                                                                      .POLL_UPDATE
                                                                  : e ===
                                                                      "keepInChatMessage"
                                                                    ? o(
                                                                        "WAWebMsgType",
                                                                      ).MSG_TYPE
                                                                        .KEEP_IN_CHAT
                                                                    : e ===
                                                                        "requestPhoneNumberMessage"
                                                                      ? o(
                                                                          "WAWebMsgType",
                                                                        )
                                                                          .MSG_TYPE
                                                                          .REQUEST_PHONE_NUMBER
                                                                      : e ===
                                                                          "ptvMessage"
                                                                        ? o(
                                                                            "WAWebMsgType",
                                                                          )
                                                                            .MSG_TYPE
                                                                            .PTV
                                                                        : e ===
                                                                            "callLogMesssage"
                                                                          ? o(
                                                                              "WAWebMsgType",
                                                                            )
                                                                              .MSG_TYPE
                                                                              .CALL_LOG
                                                                          : e ===
                                                                              "buttonsMessage"
                                                                            ? s.Buttons
                                                                            : e ===
                                                                                "templateMessage"
                                                                              ? s.Template
                                                                              : e ===
                                                                                    "senderKeyDistributionMessage" ||
                                                                                  e ===
                                                                                    "fastRatchetKeySenderKeyDistributionMessage"
                                                                                ? s.SenderKeyDistribution
                                                                                : e ===
                                                                                    "newsletterAdminInviteMessage"
                                                                                  ? o(
                                                                                      "WAWebMsgType",
                                                                                    )
                                                                                      .MSG_TYPE
                                                                                      .NEWSLETTER_ADMIN_INVITE
                                                                                  : e ===
                                                                                      "newsletterFollowerInviteMessageV2"
                                                                                    ? o(
                                                                                        "WAWebMsgType",
                                                                                      )
                                                                                        .MSG_TYPE
                                                                                        .NEWSLETTER_FOLLOWER_INVITE
                                                                                    : e ===
                                                                                        "eventMessage"
                                                                                      ? o(
                                                                                          "WAWebMsgType",
                                                                                        )
                                                                                          .MSG_TYPE
                                                                                          .EVENT_CREATION
                                                                                      : e ===
                                                                                          "encEventResponseMessage"
                                                                                        ? o(
                                                                                            "WAWebMsgType",
                                                                                          )
                                                                                            .MSG_TYPE
                                                                                            .EVENT_RESPONSE
                                                                                        : e ===
                                                                                              "secretEncryptedMessage" &&
                                                                                            ((n =
                                                                                              t[
                                                                                                e
                                                                                              ]) ==
                                                                                            null
                                                                                              ? void 0
                                                                                              : n.secretEncType) ===
                                                                                              o(
                                                                                                "WAWebProtobufsE2E.pb",
                                                                                              )
                                                                                                .Message$SecretEncryptedMessage$SecretEncType
                                                                                                .EVENT_EDIT
                                                                                          ? o(
                                                                                              "WAWebMsgType",
                                                                                            )
                                                                                              .MSG_TYPE
                                                                                              .EVENT_EDIT_ENCRYPTED
                                                                                          : e ===
                                                                                                "secretEncryptedMessage" &&
                                                                                              ((r =
                                                                                                t[
                                                                                                  e
                                                                                                ]) ==
                                                                                              null
                                                                                                ? void 0
                                                                                                : r.secretEncType) ===
                                                                                                o(
                                                                                                  "WAWebProtobufsE2E.pb",
                                                                                                )
                                                                                                  .Message$SecretEncryptedMessage$SecretEncType
                                                                                                  .MESSAGE_EDIT
                                                                                            ? o(
                                                                                                "WAWebMsgType",
                                                                                              )
                                                                                                .MSG_TYPE
                                                                                                .MESSAGE_EDIT_ENCRYPTED
                                                                                            : e ===
                                                                                                  "secretEncryptedMessage" &&
                                                                                                ((a =
                                                                                                  t[
                                                                                                    e
                                                                                                  ]) ==
                                                                                                null
                                                                                                  ? void 0
                                                                                                  : a.secretEncType) ===
                                                                                                  o(
                                                                                                    "WAWebProtobufsE2E.pb",
                                                                                                  )
                                                                                                    .Message$SecretEncryptedMessage$SecretEncType
                                                                                                    .POLL_EDIT
                                                                                              ? o(
                                                                                                  "WAWebMsgType",
                                                                                                )
                                                                                                  .MSG_TYPE
                                                                                                  .POLL_EDIT_ENCRYPTED
                                                                                              : e ===
                                                                                                    "secretEncryptedMessage" &&
                                                                                                  ((i =
                                                                                                    t[
                                                                                                      e
                                                                                                    ]) ==
                                                                                                  null
                                                                                                    ? void 0
                                                                                                    : i.secretEncType) ===
                                                                                                    o(
                                                                                                      "WAWebProtobufsE2E.pb",
                                                                                                    )
                                                                                                      .Message$SecretEncryptedMessage$SecretEncType
                                                                                                      .POLL_ADD_OPTION
                                                                                                ? o(
                                                                                                    "WAWebMsgType",
                                                                                                  )
                                                                                                    .MSG_TYPE
                                                                                                    .POLL_ADD_OPTION_ENCRYPTED
                                                                                                : e ===
                                                                                                    "albumMessage"
                                                                                                  ? o(
                                                                                                      "WAWebMsgType",
                                                                                                    )
                                                                                                      .MSG_TYPE
                                                                                                      .ALBUM
                                                                                                  : e ===
                                                                                                      "stickerPackMessage"
                                                                                                    ? o(
                                                                                                        "WAWebMsgType",
                                                                                                      )
                                                                                                        .MSG_TYPE
                                                                                                        .STICKER_PACK
                                                                                                    : e ===
                                                                                                          "pollResultSnapshotMessage" ||
                                                                                                        e ===
                                                                                                          "pollResultSnapshotMessageV3"
                                                                                                      ? o(
                                                                                                          "WAWebMsgType",
                                                                                                        )
                                                                                                          .MSG_TYPE
                                                                                                          .POLL_RESULT_SNAPSHOT
                                                                                                      : e ===
                                                                                                          "richResponseMessage"
                                                                                                        ? o(
                                                                                                            "WAWebMsgType",
                                                                                                          )
                                                                                                            .MSG_TYPE
                                                                                                            .RICH_RESPONSE
                                                                                                        : e ===
                                                                                                            "messageHistoryBundle"
                                                                                                          ? o(
                                                                                                              "WAWebMsgType",
                                                                                                            )
                                                                                                              .MSG_TYPE
                                                                                                              .MESSAGE_HISTORY_BUNDLE
                                                                                                          : e ===
                                                                                                              "messageHistoryNotice"
                                                                                                            ? o(
                                                                                                                "WAWebMsgType",
                                                                                                              )
                                                                                                                .MSG_TYPE
                                                                                                                .MESSAGE_HISTORY_NOTICE
                                                                                                            : e ===
                                                                                                                  "associatedChildMessage" ||
                                                                                                                e ===
                                                                                                                  "bcallMessage" ||
                                                                                                                e ===
                                                                                                                  "botForwardedMessage" ||
                                                                                                                e ===
                                                                                                                  "botInvokeMessage" ||
                                                                                                                e ===
                                                                                                                  "botTaskMessage" ||
                                                                                                                e ===
                                                                                                                  "call" ||
                                                                                                                e ===
                                                                                                                  "chat" ||
                                                                                                                e ===
                                                                                                                  "commentMessage" ||
                                                                                                                e ===
                                                                                                                  "conditionalRevealMessage" ||
                                                                                                                e ===
                                                                                                                  "deviceSentMessage" ||
                                                                                                                e ===
                                                                                                                  "documentWithCaptionMessage" ||
                                                                                                                e ===
                                                                                                                  "editedMessage" ||
                                                                                                                e ===
                                                                                                                  "ephemeralMessage" ||
                                                                                                                e ===
                                                                                                                  "eventCoverImage" ||
                                                                                                                e ===
                                                                                                                  "groupMentionedMessage" ||
                                                                                                                e ===
                                                                                                                  "groupStatusMentionMessage" ||
                                                                                                                e ===
                                                                                                                  "groupStatusMessage" ||
                                                                                                                e ===
                                                                                                                  "groupStatusMessageV2" ||
                                                                                                                e ===
                                                                                                                  "invoiceMessage" ||
                                                                                                                e ===
                                                                                                                  "lottieStickerMessage" ||
                                                                                                                e ===
                                                                                                                  "newsletterAdminProfileMessage" ||
                                                                                                                e ===
                                                                                                                  "newsletterAdminProfileMessageV2" ||
                                                                                                                e ===
                                                                                                                  "placeholderMessage" ||
                                                                                                                e ===
                                                                                                                  "pollCreationMessageV4" ||
                                                                                                                e ===
                                                                                                                  "pollCreationOptionImageMessage" ||
                                                                                                                e ===
                                                                                                                  "pollAddOptionMessage" ||
                                                                                                                e ===
                                                                                                                  "scheduledCallCreationMessage" ||
                                                                                                                e ===
                                                                                                                  "scheduledCallEditMessage" ||
                                                                                                                e ===
                                                                                                                  "secretEncryptedMessage" ||
                                                                                                                e ===
                                                                                                                  "spoilerMessage" ||
                                                                                                                e ===
                                                                                                                  "statusAddYours" ||
                                                                                                                e ===
                                                                                                                  "statusMentionMessage" ||
                                                                                                                e ===
                                                                                                                  "statusQuotedMessage" ||
                                                                                                                e ===
                                                                                                                  "statusStickerInteractionMessage" ||
                                                                                                                e ===
                                                                                                                  "stickerSyncRmrMessage" ||
                                                                                                                e ===
                                                                                                                  "viewOnceMessage" ||
                                                                                                                e ===
                                                                                                                  "viewOnceMessageV2" ||
                                                                                                                e ===
                                                                                                                  "viewOnceMessageV2Extension" ||
                                                                                                                e ===
                                                                                                                  "limitSharingMessage" ||
                                                                                                                e ===
                                                                                                                  "questionMessage" ||
                                                                                                                e ===
                                                                                                                  "statusQuestionAnswerMessage" ||
                                                                                                                e ===
                                                                                                                  "questionResponseMessage" ||
                                                                                                                e ===
                                                                                                                  "questionReplyMessage" ||
                                                                                                                e ===
                                                                                                                  "eventInviteMessage" ||
                                                                                                                e ===
                                                                                                                  "groupRootKeyShare"
                                                                                                              ? s.UnknownMessageKey
                                                                                                              : (function () {
                                                                                                                  throw Error(
                                                                                                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                                                      e,
                                                                                                                  );
                                                                                                                })();
    }
    function c(e) {
      if (e != null && typeof e == "object" && "message" in e) {
        var t = e.message;
        if (t != null && typeof t == "object") return t;
      }
      return null;
    }
    function d(e) {
      _(e);
      var t;
      for (var n of Object.keys(e)) {
        var r = c(e[n]);
        if (r != null) {
          var o = m(r);
          for (var a of o) {
            var i = a[0],
              l = a[1];
            typeof i != "number" && (t = r);
          }
        } else {
          var s = u(n, e);
          s != null && (t = e);
        }
        if (t != null) break;
      }
      return t;
    }
    function m(e) {
      var t = [];
      for (var n of Object.keys(e)) {
        var r = c(e[n]);
        if (r != null) {
          var a = m(r);
          a.length === 0
            ? t.push([o("WAWebMsgType").MSG_TYPE.UNKNOWN, n])
            : t.push.apply(t, m(r));
        } else {
          var i = u(n, e);
          i != null && t.push([i, n]);
        }
      }
      return t;
    }
    function p(e) {
      return !!e.find(function (e) {
        var t = e[0];
        return typeof t == "number" && t === s.SenderKeyDistribution;
      });
    }
    function _(t) {
      var n = m(t),
        r = n.length === 1 || (n.length === 2 && p(n));
      if (!r)
        throw (
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Protobuf message keys validation failed: ",
                    "",
                  ])),
                n.join(),
              )
              .sendLogs("protobuf-msg-keys-validation-failed-intern"),
          new (o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes)(
            n.map(function (e) {
              var t = e[0],
                n = e[1];
              return n;
            }),
          )
        );
    }
    function f(e) {
      var t = new Set();
      for (var n of m(e)) {
        var o = n[0],
          a = n[1];
        if (typeof o != "number") t.add(o);
        else if (s.cast(o) != null && (o === s.Buttons || o === s.Template))
          throw r("err")("Undeclared message types");
      }
      return t;
    }
    function g(e, t) {
      return f(e).has(t);
    }
    ((l.UndeclaredMessageType = s),
      (l.getWrappedMessage = c),
      (l.getUnwrappedProtobufMessage = d),
      (l.getProtobufMessageTypesToKeys = m),
      (l.verifyProtobufMessageObjectKeys = _),
      (l.getProtobufMessageTypesSet = f),
      (l.isProtobufHasMessageType = g));
  },
  98,
);
