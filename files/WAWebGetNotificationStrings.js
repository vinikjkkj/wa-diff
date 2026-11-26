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
    "WAWebForwardedBotMaskedText",
    "WAWebFrontendMsgGetters",
    "WAWebInstantsStrings",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgNotificationPreview",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebRichResponsePreviewText",
    "WAWebSpoilerNotificationMask",
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
        m = o("WAWebMsgNotificationPreview").shouldShowMsgNotificationPreview(
          e,
        ),
        _ = e.safe(),
        f = "";
      if (p && !m) return p().toString();
      var h = o("WAWebForwardedBotMaskedText").getMaskedForwardedBotCopyText(e);
      if (h != null) return m ? h : "";
      switch (_.type) {
        case "chat": {
          m && (f = r("WAWebUnformatMsg")(e, e.body));
          break;
        }
        case "image": {
          var y = "";
          (o("WAWebUA").UA.hasEmoji &&
            (y = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83D\uDCF7 "),
            (f =
              y +
              ((m && r("WAWebUnformatMsg")(e, e.caption)) ||
                r("fbs")._(/*BTDS*/ "").toString())));
          break;
        }
        case "product": {
          var C = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDED2 " : "";
          f =
            C +
            ((o("WAWebFrontendMsgGetters").getText(e) &&
              r("WAWebUnformatMsg")(
                e,
                o("WAWebFrontendMsgGetters").getText(e),
              )) ||
              s._(/*BTDS*/ "").toString());
          break;
        }
        case "interactive": {
          if (
            e.interactiveType ===
            r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
          ) {
            var b,
              v = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDECD\uFE0F  " : "";
            f =
              v +
                r("WAWebUnformatMsg")(
                  e,
                  e.body != null
                    ? e.body
                    : (b = e.interactiveHeader) == null
                      ? void 0
                      : b.title,
                ) || "";
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
          ) {
            var S,
              R = _;
            f =
              o(
                "WAWebBizFormatInteractiveMsg",
              ).formatOrderDetailsMessagePreview(R) ||
              ((S = e.caption) != null ? S : "");
            var L = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC3  " : "";
            f = L + f;
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          ) {
            var E,
              k = _;
            f =
              o("WAWebBizFormatInteractiveMsg").formatPaymentInfoMessagePreview(
                k,
              ) || ((E = e.caption) != null ? E : "");
            break;
          }
          if (
            e.interactiveType ===
              r("WAWebInteractiveMessageType").NATIVE_FLOW &&
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
          ) {
            var I,
              T = _;
            f =
              o("WAWebBizFormatInteractiveMsg").formatOrderStatusMessagePreview(
                T,
              ) || ((I = e.caption) != null ? I : "");
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
            var D,
              x = _,
              $ = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC3  " : "";
            f =
              $ +
              (o("WAWebFormatNfmText").formatNFMTextPreview(x) ||
                ((D = e.caption) != null ? D : ""));
            break;
          }
          if (
            e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          ) {
            var P,
              N = _;
            f =
              o("WAWebFormatNfmText").formatNFMTextPreview(N) ||
              ((P = e.caption) != null ? P : "");
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
          var M = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC9F" : "";
          f = s._(/*BTDS*/ "", [s._param("stickerIcon", M)]);
          break;
        }
        case "video": {
          var w = "",
            A;
          (e.isGif
            ? ((w = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC7E " : ""),
              (A = (m && r("WAWebUnformatMsg")(e, e.caption)) || "GIF"))
            : (o("WAWebUA").UA.hasEmoji &&
                (w = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83C\uDFA5 "),
              (A =
                (m && r("WAWebUnformatMsg")(e, e.caption)) ||
                r("fbs")._(/*BTDS*/ "").toString()),
              _.isViewOnce ||
                (A =
                  A +
                  " (" +
                  o("WAWebClock").Clock.durationStr(e.duration) +
                  ")")),
            (f = "" + w + A));
          break;
        }
        case "ptv": {
          var F = o("WAWebUA").UA.hasEmoji ? "\uD83C\uDFA5 " : "",
            O = (m && r("WAWebUnformatMsg")(e, e.caption)) || s._(/*BTDS*/ ""),
            B =
              O.toString() +
              " (" +
              o("WAWebClock").Clock.durationStr(e.duration) +
              ")";
          f = "" + F + B;
          break;
        }
        case "instant_image":
        case "instant_video":
          f =
            (o("WAWebUA").UA.hasEmoji ? "\u26A1 " : "") +
            o("WAWebInstantsStrings").getInstantLabel();
          break;
        case "ptt": {
          var W = "",
            q = s._(/*BTDS*/ "").toString();
          (o("WAWebUA").UA.hasEmoji &&
            (W = _.isViewOnce ? "1\uFE0F\u20E3 " : "\uD83C\uDFA4 "),
            _.isViewOnce ||
              (q =
                q + " (" + o("WAWebClock").Clock.durationStr(e.duration) + ")"),
            (f = "" + W + q));
          break;
        }
        case "audio": {
          var U = o("WAWebUA").UA.hasEmoji ? "\uD83C\uDFB5 " : "";
          f =
            U +
            " " +
            r("fbs")._(/*BTDS*/ "").toString() +
            " (" +
            o("WAWebClock").Clock.durationStr(e.duration) +
            ")";
          break;
        }
        case "location": {
          var V = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCCD " : "",
            H;
          (e.isLive
            ? (H =
                (m && r("WAWebUnformatMsg")(e, e.comment)) ||
                s._(/*BTDS*/ "").toString())
            : (H = (m && e.loc) || r("fbs")._(/*BTDS*/ "").toString()),
            (f = V + " " + H));
          break;
        }
        case "groups_v4_invite":
          f = s._(/*BTDS*/ "");
          break;
        case "newsletter_admin_invite":
          f = s._(/*BTDS*/ "");
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
          var G = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC64 " : "";
          f = G + (e.subtype || r("fbs")._(/*BTDS*/ "").toString());
          break;
        }
        case "multi_vcard": {
          var z = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC65 " : "";
          f = z + o("WAWebVcardUtils").getNameString(e.vcardList).toString();
          break;
        }
        case "document": {
          if (e.isVcardOverMmsDocument) {
            var j = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC64 " : "";
            f =
              j +
              (e.filename ||
                s._(/*BTDS*/ "", [s._plural(e.pageCount, "count")]).toString());
            break;
          }
          var K = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC4 " : "",
            Q = e.caption;
          ((e.caption == null || e.caption === "") && (Q = e.filename),
            (f =
              K +
              ((m && r("WAWebUnformatMsg")(e, Q)) ||
                r("fbs")._(/*BTDS*/ "").toString())));
          break;
        }
        case "e2e_notification":
          f = o("WAWebFormatE2ENotification").formatE2ENotification(_);
          break;
        case "call_log":
          f = r("WAWebFormatCallLog")({ msg: e, options: {} });
          break;
        case "ciphertext":
          f = s._(/*BTDS*/ "");
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
          var X =
              e.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
                ? "\uD83C\uDFC6 "
                : "\uD83D\uDCCA ",
            Y = o("WAWebUA").UA.hasEmoji ? X : "";
          f = "" + Y + r("WAWebUnformatMsg")(e, e.pollName);
          break;
        }
        case "event_creation": {
          var J,
            Z = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC6 " : "",
            ee =
              e.eventStartTime != null
                ? o("WAWebFormatEventDateString").getEventDateStringFor(
                    e.eventStartTime,
                    (J = e.eventEndTime) != null ? J : void 0,
                  )
                : null;
          f = s._(/*BTDS*/ "", [
            s._param("eventIcon", Z),
            s._param("eventName", e.eventName),
            s._param("eventTime", ee),
          ]);
          break;
        }
        case "sharable_event_invite": {
          var te = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC6 " : "";
          f = s._(/*BTDS*/ "", [
            s._param("eventIcon", te),
            s._param("eventName", _.sharableEventInviteTitle),
          ]);
          break;
        }
        case "music":
          f = s._(/*BTDS*/ "");
          break;
        case "album": {
          var ne = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCF7 " : "",
            re = r("WAWebAlbumsFormatAlbumMessageText")({
              msg: e,
              options: {},
            });
          f = s._(/*BTDS*/ "", [
            s._param("albumIcon", ne),
            s._param("photoAndVideoCountText", re),
          ]);
          break;
        }
        case "order": {
          var oe = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDED2 " : "";
          f = s._(/*BTDS*/ "", [
            s._plural(e.itemCount, "count"),
            s._param("shoppingCartIcon", oe),
            s._param(
              "message",
              e.message != null && e.message !== "" ? "\n" + e.message : "",
            ),
          ]);
          break;
        }
        case "sticker-pack": {
          var ae = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDC9F " : "";
          f = s._(/*BTDS*/ "", [s._param("stickerPackIcon", ae)]);
          break;
        }
        case "quarantined": {
          var ie = o("WAWebUA").UA.hasEmoji ? "\uD83D\uDCC4 " : "",
            le =
              e.quarantineExtractedText != null &&
              e.quarantineExtractedText !== ""
                ? e.quarantineExtractedText
                : s._(/*BTDS*/ "").toString();
          f = "" + ie + le;
          break;
        }
        case "rich_response": {
          if (m) {
            var se = o(
              "WAWebRichResponsePreviewText",
            ).getRichResponsePreviewText(e, { includeBodyFallback: !1 });
            se != null && se !== "" && (f = r("WAWebUnformatMsg")(e, se));
          }
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
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
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
      var ue = o("WAWebUA").UA.hasEmoji && e.isQuestion ? "\u2753 " : "",
        ce = "" + ue + f.toString();
      return e.isSpoiler === !0
        ? o("WAWebSpoilerNotificationMask").maskSpoilersForNotification(ce)
        : ce;
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
        var s = o("WABidi").bidiDir(i);
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
      if (!t) return s._(/*BTDS*/ "");
      if (e.subtype !== "send" && e.subtype !== "request")
        return s._(/*BTDS*/ "");
      var n,
        a = o("WAWebCurrencyUtils").formatAmount1000({
          amount: e.paymentAmount1000,
          currency: e.paymentCurrency,
        }),
        i = o("WAWebMsgGetters").getSender(e),
        l = i != null ? r("WAWebWidToFormattedNameOrNumber")(i) : "",
        u = r("WAWebWidToFormattedNameOrNumber")(e.paymentMessageReceiverJid),
        c = o("WAWebContactCollection").ContactCollection.get(
          e.paymentMessageReceiverJid,
        ),
        d = c != null && o("WAWebContactGetters").getIsMe(c),
        m = e.paymentAmount1000 / 1e3;
      return (
        e.subtype === "send"
          ? o("WAWebMsgGetters").getIsGroupMsg(e)
            ? (n = d
                ? s._(/*BTDS*/ "", [
                    s._param("amount", a, [0, m]),
                    s._param("senderName", l),
                  ])
                : s._(/*BTDS*/ "", [
                    s._param("amount", a, [0, m]),
                    s._param("senderName", l),
                    s._param("receiverName", u),
                  ]))
            : (n = s._(/*BTDS*/ "", [s._param("amount", a, [0, m])]))
          : o("WAWebMsgGetters").getIsGroupMsg(e)
            ? (n = d
                ? s._(/*BTDS*/ "", [
                    s._param("amount", a, [0, m]),
                    s._param("senderName", l),
                  ])
                : s._(/*BTDS*/ "", [
                    s._param("amount", a, [0, m]),
                    s._param("senderName", l),
                    s._param("receiverName", u),
                  ]))
            : (n = s._(/*BTDS*/ "", [s._param("amount", a, [0, m])])),
        n
      );
    }
    function h(e) {
      return (
        e === void 0 && (e = 1),
        s._(/*BTDS*/ "", [s._plural(e, "newMessageCount")])
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.getNotificationMessageBody = _),
      (l.getNotificationBody = f),
      (l.getPluralMessageNotificationBody = h));
  },
  226,
);
