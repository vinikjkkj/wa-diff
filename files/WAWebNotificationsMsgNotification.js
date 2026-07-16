__d(
  "WAWebNotificationsMsgNotification",
  [
    "fbt",
    "WAWebABProps",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebQuotedMsgModelUtils",
    "WAWebUA",
    "cr:4404",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e = n("cr:4404")) != null ? e : {},
      c = u.getMessageNotificationFooter,
      d = u.getNotificationBodyForPreviewOff,
      m = new Set([o("WAWebMsgType").MSG_TYPE.ALBUM]);
    function p(e) {
      if (!o("WAWebMsgGetters").getIsGroupMsg(e)) return null;
      var t = null;
      return (
        o("WAWebMsgGetters").getHasMentionOfMe(e) &&
          (t = s._(/*BTDS*/ "Mentioned you").toString()),
        o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e) &&
          (t = s._(/*BTDS*/ "Replied to you").toString()),
        o("WAWebMsgGetters").getHasMentionAll(e) &&
          (t = s._(/*BTDS*/ "Mentioned all").toString()),
        t != null &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_important_msg_notification",
        )
          ? t
          : null
      );
    }
    function _(e) {
      var t,
        n = null,
        r = o("WAWebFrontendMsgGetters").getChat(e),
        a = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(r),
        i = o("WAWebMsgGetters").getNewsletterAdminProfile(e),
        l;
      if (
        (o("WAWebMsgGetters").getIsGroupMsg(e) ||
        o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e)
          ? (l = e.displayName({
              withPushName: a,
              withPushNameOnly: a,
              newPushNameFormatting: a,
              showVerifiedName: a,
            }))
          : i && (l = i.name),
        r.isLocked)
      )
        return {
          body: o("WAWebGetNotificationStrings")
            .getPluralMessageNotificationBody(r.unreadCount)
            .toString(),
        };
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
      ) {
        var u,
          m = (u = d == null ? void 0 : d()) != null ? u : null;
        m != null
          ? (n = m)
          : o("WAWebMsgGetters").getIsGroupMsg(e)
            ? l != null
              ? ((n = s._(/*BTDS*/ "Message from {name}", [
                  s._param("name", l),
                ])),
                (l = void 0))
              : (n = s._(/*BTDS*/ "New message"))
            : (n = o(
                "WAWebGetNotificationStrings",
              ).getPluralMessageNotificationBody(r.unreadCount));
      } else
        e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
        e.subtype === "sender_invite"
          ? e.templateParams && e.templateParams[0] === "true"
            ? (n = s._(/*BTDS*/ "Say hello on WhatsApp!"))
            : (n = s._(/*BTDS*/ "Say hello!"))
          : (n = o("WAWebGetNotificationStrings").getNotificationMessageBody(
              e,
            ));
      var _ = (t = c == null ? void 0 : c(r.unreadCount)) != null ? t : null,
        f = p(e);
      return (
        f != null &&
          (l != null
            ? (l = f + ": " + l)
            : n != null &&
              (n = s._(/*BTDS*/ "{mention-label}: {message-body}", [
                s._param("mention-label", f),
                s._param("message-body", n),
              ]))),
        babelHelpers.extends(
          { body: n.toString(), author: l },
          _ != null && { footer: _.toString() },
        )
      );
    }
    function f() {
      return (
        o("WAWebUA").UA.isBlink &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    ((l.eligibleMessagesForNotificationRetriggering = m),
      (l.getNotificationParts = _),
      (l.shouldReplaceMsgNotificationManually = f));
  },
  226,
);
