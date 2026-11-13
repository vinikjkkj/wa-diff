__d(
  "WAWebPixAttachmentTrayFeature",
  [
    "WAWebABProps",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPaymentsChatUtils",
    "WAWebPaymentsConstants",
    "WAWebPaymentsGatingUtils",
    "WAWebPixFeature",
    "WAWebPixQuickReplyFeature",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_br_pix_web_attachment_tray",
      );
    }
    function s(e) {
      return u({
        chatId: e.id,
        contact: e.contact,
        groupMetadata: e.groupMetadata,
      });
    }
    function u(t) {
      var n = t.chatId,
        r = t.contact,
        a = t.groupMetadata,
        i =
          o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
          o("WAWebPixFeature").isPixEnabled() &&
          o("WAWebABProps").getABPropConfigValue("payments_br_pix_on_web") &&
          e(),
        l =
          !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
          o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled();
      if (
        (!i && !l) ||
        (r != null &&
          (o("WAWebContactGetters").getIsMe(r) || r.isEnterprise)) ||
        n.isAiHub()
      )
        return !1;
      var s = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(n);
      return s === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            n,
            o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
          )
        : s === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP
          ? l
            ? o("WAWebPaymentsGatingUtils").consumerSharePixGroupsEnabled() &&
              o("WAWebPixQuickReplyFeature").isEligiblePixGroupMetadata(a)
            : o(
                "WAWebPixQuickReplyFeature",
              ).showPixQuickReplyInAttachmentTrayForGroupMetadata(a)
          : !1;
    }
    ((l.shouldShowPixInAttachmentTray = s),
      (l.shouldShowPixInAttachmentTrayFor = u));
  },
  98,
);
