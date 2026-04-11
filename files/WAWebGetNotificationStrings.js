__d(
  "WAWebGetNotificationStrings",
  [
    "fbt",
    "WABidi",
    "WALogger",
    "WAWebAlbumsFormatAlbumMessageText",
    "WAWebBizFormatInteractiveMsg",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCurrencyUtils",
    "WAWebFbtCommon",
    "WAWebFormatBroadcastNotification",
    "WAWebFormatCallLog",
    "WAWebFormatE2ENotification",
    "WAWebFormatEventDateString",
    "WAWebFormatGroupNotification",
    "WAWebFormatNfmText",
    "WAWebFormatOversizedMsg",
    "WAWebFormatPaymentMsg",
    "WAWebFormatRevokedMsg",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebUA",
    "WAWebUnformatMsg",
    "WAWebVcardUtils",
    "WAWebWidToFormattedNameOrNumber",
    "cr:4404",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = (e = n("cr:4404")) != null ? e : {},
      p = m.getNotificationBodyForPreviewOff;
    function _(e) {
      var t,
        n,
        a,
        i,
        l,
        m = e.shouldShowNotificationPreview(),
        _ = e.safe(),
        f = "";
      if (p && !m) return p().toString();
      switch (_.type) {
        case "chat": {
          m && (f = r("WAWebUnformatMsg")(e, e.body));
          break;
        }
        case "image": {
          var h = "";
          (o("WAWebUA").UA.hasEmoji &&
            (h = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83D\uDCF7 "),
            (f =
              h +
              ((m && r("WAWebUnformatMsg")(e, e.caption)) ||
                r("fbs")._(/*BTDS*/ "Photo").toString())));
          break;
        }
        case "product": {
          var y = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDED2 " : "";
          f =
            y +
            ((o("WAWebFrontendMsgGetters").getText(e) &&
              r("WAWebUnformatMsg")(
                e,
                o("WAWebFrontendMsgGetters").getText(e),
              )) ||
              s._(/*BTDS*/ "Product").toString());
          break;
        }
        case "interactive": {
          if (
            e.interactiveType ===
            r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
          ) {
            var C,
              b = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDECD\uFE0F  " : "";
            f =
              b +
                r("WAWebUnformatMsg")(
                  e,
                  e.body != null
                    ? e.body
                    : (C = e.interactiveHeader) == null
                      ? void 0
                      : C.title,
                ) || "";
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
          ) {
            var v,
              S = e;
            f =
              o(
                "WAWebBizFormatInteractiveMsg",
              ).formatOrderDetailsMessagePreview(S) ||
              ((v = e.caption) != null ? v : "");
            var R = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC3  " : "";
            f = R + f;
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          ) {
            var L,
              E = e;
            f =
              o("WAWebBizFormatInteractiveMsg").formatPaymentInfoMessagePreview(
                E,
              ) || ((L = e.caption) != null ? L : "");
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
          ) {
            var k,
              I = e;
            f =
              o("WAWebBizFormatInteractiveMsg").formatOrderStatusMessagePreview(
                I,
              ) || ((k = e.caption) != null ? k : "");
            break;
          }
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getNotificationBody: Unrecognized type ",
                  "",
                ])),
              e.type,
            ),
            ""
          );
        }
        case "native_flow":
          if (
            e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
          ) {
            var T,
              D = e,
              x = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC3  " : "";
            f =
              x +
              (o("WAWebFormatNfmText").formatNFMTextPreview(D) ||
                ((T = e.caption) != null ? T : ""));
            break;
          }
          if (
            e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          ) {
            var $,
              P = e;
            f =
              o("WAWebFormatNfmText").formatNFMTextPreview(P) ||
              (($ = e.caption) != null ? $ : "");
            break;
          }
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "getNotificationBody: Unrecognized type ",
                  "",
                ])),
              e.type,
            ),
            ""
          );
        case "sticker": {
          var N = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC9F" : "";
          f = s._(/*BTDS*/ "{stickerIcon} Sticker", [
            s._param("stickerIcon", N),
          ]);
          break;
        }
        case "video": {
          var M = "",
            w;
          (e.isGif
            ? ((M = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC7E " : ""),
              (w = (m && r("WAWebUnformatMsg")(e, e.caption)) || "GIF"))
            : (o("WAWebUA").UA.hasEmoji &&
                (M = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83C\uDFA5 "),
              (w =
                (m && r("WAWebUnformatMsg")(e, e.caption)) ||
                r("fbs")._(/*BTDS*/ "Video").toString()),
              _.isViewOnce ||
                (w =
                  w +
                  " (" +
                  o("WAWebClock").Clock.durationStr(e.duration) +
                  ")")),
            (f = "" + M + w));
          break;
        }
        case "ptv": {
          var A = o("WAWebUA").UA.hasEmoji ? "\uD83C\uDFA5 " : "",
            F =
              (m && r("WAWebUnformatMsg")(e, e.caption)) ||
              s._(/*BTDS*/ "Video note"),
            O =
              F.toString() +
              " (" +
              o("WAWebClock").Clock.durationStr(e.duration) +
              ")";
          f = "" + A + O;
          break;
        }
        case "ptt": {
          var B = "",
            W = s._(/*BTDS*/ "Voice message").toString();
          (o("WAWebUA").UA.hasEmoji &&
            (B = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83C\uDFA4 "),
            _.isViewOnce ||
              (W =
                W + " (" + o("WAWebClock").Clock.durationStr(e.duration) + ")"),
            (f = "" + B + W));
          break;
        }
        case "audio": {
          var q = o("WAWebUA").UA.hasEmoji ? "\uD83C\uDFB5 " : "";
          f =
            q +
            " " +
            r("fbs")._(/*BTDS*/ "Audio").toString() +
            " (" +
            o("WAWebClock").Clock.durationStr(e.duration) +
            ")";
          break;
        }
        case "location": {
          var U = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCCD " : "",
            V;
          (e.isLive
            ? (V =
                (m && r("WAWebUnformatMsg")(e, e.comment)) ||
                s._(/*BTDS*/ "Live location").toString())
            : (V = (m && e.loc) || r("fbs")._(/*BTDS*/ "Location").toString()),
            (f = U + " " + V));
          break;
        }
        case "groups_v4_invite":
          f = s._(/*BTDS*/ "WhatsApp group invite");
          break;
        case "newsletter_admin_invite":
          f = s._(/*BTDS*/ "WhatsApp channel admin invite");
          break;
        case "gp2":
          f = r("WAWebFormatGroupNotification")(e, !0);
          break;
        case "broadcast_notification":
          f = o("WAWebFormatBroadcastNotification").formatBroadcastNotification(
            e,
          );
          break;
        case "notification":
          f = (t = e.body) != null ? t : "";
          break;
        case "vcard": {
          var H = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC64 " : "";
          f = H + (e.subtype || r("fbs")._(/*BTDS*/ "Contact").toString());
          break;
        }
        case "multi_vcard": {
          var G = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC65 " : "";
          f = G + o("WAWebVcardUtils").getNameString(e.vcardList).toString();
          break;
        }
        case "document": {
          if (e.isVcardOverMmsDocument) {
            var z = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC64 " : "";
            f =
              z +
              (e.filename ||
                s
                  ._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
                    s._plural(e.pageCount, "count"),
                  ])
                  .toString());
            break;
          }
          var j = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC4 " : "",
            K = e.caption;
          ((e.caption == null || e.caption === "") && (K = e.filename),
            (f =
              j +
              ((m && r("WAWebUnformatMsg")(e, K)) ||
                r("fbs")._(/*BTDS*/ "Document").toString())));
          break;
        }
        case "e2e_notification":
          f = o("WAWebFormatE2ENotification").formatE2ENotification(_);
          break;
        case "call_log":
          f = r("WAWebFormatCallLog")(e);
          break;
        case "ciphertext":
          f = s._(/*BTDS*/ "Waiting for this message. This may take a while.");
          break;
        case "revoked":
          f = o("WAWebFormatRevokedMsg").formatRevokedMsg(_);
          break;
        case "payment":
          f = g(e);
          break;
        case "oversized":
          f = o("WAWebFormatOversizedMsg").formatOversizedMsgNotification(e);
          break;
        case "unknown":
          f = o("WAWebFormatUnknownMsg").formatUnknownMsgNotification(e);
          break;
        case "list":
          f =
            (((n = e.list) == null ? void 0 : n.title) || "") +
            " " +
            (((a = e.list) == null ? void 0 : a.description) || "");
          break;
        case "list_response":
          f =
            (((i = e.listResponse) == null ? void 0 : i.title) || "") +
            " " +
            (((l = e.listResponse) == null ? void 0 : l.description) || "");
          break;
        case "poll_result_snapshot":
        case "poll_creation": {
          var Q =
              e.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
                ? "\uD83C\uDFC6 "
                : "\uD83D\uDCCA ",
            X = o("WAWebUA").UA.hasEmoji ? Q : "";
          f = "" + X + r("WAWebUnformatMsg")(e, e.pollName);
          break;
        }
        case "event_creation": {
          var Y,
            J = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC6 " : "",
            Z =
              e.eventStartTime != null
                ? o("WAWebFormatEventDateString").getEventDateStringFor(
                    e.eventStartTime,
                    (Y = e.eventEndTime) != null ? Y : void 0,
                  )
                : null;
          f = s._(
            /*BTDS*/ "{eventIcon} Invited you to an event: {eventName} {eventTime}",
            [
              s._param("eventIcon", J),
              s._param("eventName", e.eventName),
              s._param("eventTime", Z),
            ],
          );
          break;
        }
        case "album": {
          var ee = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCF7 " : "",
            te = r("WAWebAlbumsFormatAlbumMessageText")({
              msg: e,
              options: {},
            });
          f = s._(/*BTDS*/ "{albumIcon}{photoAndVideoCountText}", [
            s._param("albumIcon", ee),
            s._param("photoAndVideoCountText", te),
          ]);
          break;
        }
        case "order": {
          var ne = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDED2 " : "";
          f = s._(
            /*BTDS*/ '_j{"*":"{shoppingCartIcon}{count} items{message}","_1":"{shoppingCartIcon}1 item{message}"}',
            [
              s._plural(e.itemCount, "count"),
              s._param("shoppingCartIcon", ne),
              s._param(
                "message",
                e.message != null && e.message !== "" ? "\n" + e.message : "",
              ),
            ],
          );
          break;
        }
        case "sticker-pack": {
          var re = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC9F " : "";
          f = s._(/*BTDS*/ "{stickerPackIcon} Sticker Pack", [
            s._param("stickerPackIcon", re),
          ]);
          break;
        }
        case "quarantined": {
          var oe = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC4 " : "",
            ae =
              e.quarantineExtractedText != null &&
              e.quarantineExtractedText !== ""
                ? e.quarantineExtractedText
                : r("WAWebFbtCommon")(
                    "Attachment blocked by Strict account settings",
                  ).toString();
          f = "" + oe + ae;
          break;
        }
        case "notification_template":
        case "protocol":
        case "hsm":
        case "template_button_reply":
        case "debug":
        case "debug_placeholder":
        case "interactive_response":
        case "keep_in_chat":
        case "request_phone_number":
        case "automated_greeting_message":
        case "rich_response":
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
        case "message_history_notice":
        case "loading_media":
        case "newsletter_notification":
          return "";
        default:
          return (
            _.type,
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "getNotificationBody: Unrecognized type ",
                  "",
                ])),
              e.type,
            ),
            ""
          );
      }
      var ie = o("WAWebUA").UA.hasEmoji && e.isQuestion ? "\u2753 " : "";
      return "" + ie + f.toString();
    }
    function f(e) {
      var t = e.msgDir,
        n = r("WAWebL10N").isRTL() ? "rtl" : "ltr";
      if (e.body && e.author == null && e.action == null) return e.body;
      var a = e.body,
        i = e.author,
        l = e.action;
      if (
        (i == null && (i = ""),
        l == null
          ? (l = "")
          : (l =
              n === "ltr"
                ? r("WAWebL10N").isolateLTR(l)
                : r("WAWebL10N").isolateRTL(l)),
        i)
      ) {
        var s = o("WABidi").dir(i);
        return n === "ltr" && (!t || t === "ltr") && (!s || s === "ltr")
          ? l
            ? i + "\u200E: " + l + "\u200E " + a + "\u200E"
            : i + "\u200E: " + a + "\u200E"
          : n === "ltr" && (!t || t === "ltr")
            ? l
              ? "\u200E\u202B" + i + "\u202C: " + l + "\u200E " + a + "\u200E"
              : "\u200E\u202B" + i + "\u202C: " + a + "\u200E"
            : n === "ltr" && (!s || s === "ltr")
              ? l
                ? i + "\u200E: " + l + "\u200E \u202B" + a + "\u202C\u200E"
                : i + "\u200E: \u202B" + a + "\u202C\u200E"
              : n === "ltr"
                ? l
                  ? "\u202B" + i + "\u200F: " + l + " " + a + "\u200F"
                  : "\u202B" + i + "\u200F: " + a + "\u200F"
                : (!t || t === "rtl") && (!s || s === "rtl")
                  ? l
                    ? i + "\u200F: " + l + "\u200F " + a + "\u200F"
                    : i + "\u200F: " + a + "\u200F"
                  : !t || t === "rtl"
                    ? l
                      ? "\u200F\u202A" +
                        i +
                        "\u202C: " +
                        l +
                        "\u200F " +
                        a +
                        "\u200F"
                      : "\u200F\u202A" + i + "\u202C: " + a + "\u200F"
                    : !s || s === "rtl"
                      ? l
                        ? i +
                          "\u200F: " +
                          l +
                          "\u200F \u202A" +
                          a +
                          "\u202C\u200F"
                        : i + "\u200F: \u202A" + a + "\u202C\u200F"
                      : l
                        ? "\u202A" + i + "\u200E: " + l + " " + a + "\u200E"
                        : "\u202A" + i + "\u200E: " + a + "\u200E$";
      }
      return l ? l + " " + a : a;
    }
    function g(e) {
      if (e.subtype === "invite")
        return o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(e.id);
      var t = e.paymentCurrency && e.paymentAmount1000;
      if (!t) return s._(/*BTDS*/ "Payment message \u2022 Amount unavailable");
      if (e.subtype !== "send" && e.subtype !== "request")
        return s._(
          /*BTDS*/ "Payment message. Open WhatsApp on your phone to view.",
        );
      var n,
        a = o("WAWebCurrencyUtils").formatAmount1000(
          e.paymentCurrency,
          e.paymentAmount1000,
        ),
        i = r("WAWebWidToFormattedNameOrNumber")(
          o("WAWebMsgGetters").getSender(e),
        ),
        l = r("WAWebWidToFormattedNameOrNumber")(e.paymentMessageReceiverJid),
        u = o("WAWebContactCollection").ContactCollection.get(
          e.paymentMessageReceiverJid,
        ),
        c = u != null && o("WAWebContactGetters").getIsMe(u),
        d = e.paymentAmount1000 / 1e3;
      return (
        e.subtype === "send"
          ? o("WAWebMsgGetters").getIsGroupMsg(e)
            ? (n = c
                ? s._(/*BTDS*/ '_j{"*":"{senderName} sent {amount} to you"}', [
                    s._param("amount", a, [0, d]),
                    s._param("senderName", i),
                  ])
                : s._(
                    /*BTDS*/ '_j{"*":"{senderName} sent {amount} to {receiverName}"}',
                    [
                      s._param("amount", a, [0, d]),
                      s._param("senderName", i),
                      s._param("receiverName", l),
                    ],
                  ))
            : (n = s._(/*BTDS*/ '_j{"*":"Sent {amount} to you"}', [
                s._param("amount", a, [0, d]),
              ]))
          : o("WAWebMsgGetters").getIsGroupMsg(e)
            ? (n = c
                ? s._(
                    /*BTDS*/ '_j{"*":"{senderName} requested {amount} from you"}',
                    [s._param("amount", a, [0, d]), s._param("senderName", i)],
                  )
                : s._(
                    /*BTDS*/ '_j{"*":"{senderName} requested {amount} from {receiverName}"}',
                    [
                      s._param("amount", a, [0, d]),
                      s._param("senderName", i),
                      s._param("receiverName", l),
                    ],
                  ))
            : (n = s._(/*BTDS*/ '_j{"*":"Requested {amount} from you"}', [
                s._param("amount", a, [0, d]),
              ])),
        n
      );
    }
    function h(e) {
      return (
        e === void 0 && (e = 1),
        s._(
          /*BTDS*/ '_j{"*":"{newMessageCount} new messages","_1":"1 new message"}',
          [s._plural(e, "newMessageCount")],
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.getNotificationMessageBody = _),
      (l.getNotificationBody = f),
      (l.getPluralMessageNotificationBody = h));
  },
  226,
);
