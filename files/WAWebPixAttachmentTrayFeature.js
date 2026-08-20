__d(
  "WAWebPixAttachmentTrayFeature",
  [
    "WAWebABProps",
    "WAWebAddEditPixFeature",
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
    function s(t) {
      var n =
          o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
          o("WAWebPixFeature").isPixEnabled() &&
          o("WAWebAddEditPixFeature").isAddEditPixEnabled() &&
          e(),
        r =
          !o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
          o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled();
      if (
        (!n && !r) ||
        o("WAWebContactGetters").getIsMe(t.contact) ||
        t.contact.isEnterprise ||
        t.id.isAiHub()
      )
        return !1;
      var a = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(
        t.id,
      );
      return a === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        ? o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(
            t.id,
            o("WAWebPaymentsConstants").BRAZIL_COUNTRY_CODE,
          )
        : a === o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP
          ? r
            ? o("WAWebPaymentsGatingUtils").consumerSharePixGroupsEnabled() &&
              o("WAWebPixQuickReplyFeature").isEligiblePixGroupChat(t)
            : o(
                "WAWebPixQuickReplyFeature",
              ).showPixQuickReplyInAttachmentTrayForGroups(t)
          : !1;
    }
    l.shouldShowPixInAttachmentTray = s;
  },
  98,
);
