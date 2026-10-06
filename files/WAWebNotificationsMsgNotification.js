__d(
  "WAWebNotificationsMsgNotification",
  [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebGroupAgentAuthorName",
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
        t
      );
    }
    function _(e, t) {
      var n = o("WAWebMsgGetters").getSender(e);
      if (n == null) return null;
      var r = o("WAWebBotProfileCollection").BotProfileCollection.get(n);
      if (
        !o("WAWebGroupAgentAuthorName").shouldUseGroupAgentAuthorName({
          agentWid: n,
          chat: t,
          product: r == null ? void 0 : r.product,
          profileName: r == null ? void 0 : r.name,
        })
      )
        return null;
      var a = e.senderObj;
      return o("WAWebGroupAgentAuthorName").getGroupAgentAuthorName({
        contactName: a == null ? void 0 : a.name,
        notifyName:
          a == null ? null : o("WAWebContactGetters").getNotifyName(a),
        product: r == null ? void 0 : r.product,
        profileName: r == null ? void 0 : r.name,
        pushname: e.notifyName,
      });
    }
    function f(e) {
      var t,
        n = null,
        r = o("WAWebFrontendMsgGetters").getChat(e),
        a = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(r),
        i = o("WAWebMsgGetters").getNewsletterAdminProfile(e),
        l;
      if (
        o("WAWebMsgGetters").getIsGroupMsg(e) ||
        o("WAWebMsgGetters").getIsMetaBotInvokeResponse(e)
      ) {
        var u;
        l =
          (u = _(e, r)) != null
            ? u
            : o("WAWebMsgModelUtils").getMsgDisplayName(e, {
                withPushName: a,
                withPushNameOnly: a,
                newPushNameFormatting: a,
                showVerifiedName: a,
              });
      } else i && (l = i.name);
      if (r.isLocked)
        return {
          body: o("WAWebGetNotificationStrings")
            .getPluralMessageNotificationBody(r.unreadCount)
            .toString(),
        };
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
      ) {
        var m,
          f = (m = d == null ? void 0 : d()) != null ? m : null;
        f != null
          ? (n = f)
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
      var g = (t = c == null ? void 0 : c(r.unreadCount)) != null ? t : null,
        h = p(e);
      return (
        h != null &&
          (l != null
            ? (l = h + ": " + l)
            : n != null &&
              (n = s._(/*BTDS*/ "{mention-label}: {message-body}", [
                s._param("mention-label", h),
                s._param("message-body", n),
              ]))),
        babelHelpers.extends(
          { body: n.toString(), author: l },
          g != null && { footer: g.toString() },
        )
      );
    }
    function g() {
      return (
        o("WAWebUA").UA.isBlink &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    ((l.eligibleMessagesForNotificationRetriggering = m),
      (l.getNotificationParts = f),
      (l.shouldReplaceMsgNotificationManually = g));
  },
  226,
);
