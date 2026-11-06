__d(
  "WAWebEncodeBusinessInteractionPills",
  ["WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        VIEW_BUSINESS: (e = o("WAWebProtobufsE2E.pb"))
          .ContextInfo$BusinessInteractionPills$PillType.VIEW_BUSINESS,
        CHAT: e.ContextInfo$BusinessInteractionPills$PillType.CHAT,
        CALL: e.ContextInfo$BusinessInteractionPills$PillType.CALL,
        SHOP: e.ContextInfo$BusinessInteractionPills$PillType.SHOP,
        ORDER: e.ContextInfo$BusinessInteractionPills$PillType.ORDER,
        MENU: e.ContextInfo$BusinessInteractionPills$PillType.MENU,
        BOOK_APPOINTMENT:
          e.ContextInfo$BusinessInteractionPills$PillType.BOOK_APPOINTMENT,
        OFFERS: e.ContextInfo$BusinessInteractionPills$PillType.OFFERS,
        BESTSELLERS:
          e.ContextInfo$BusinessInteractionPills$PillType.BESTSELLERS,
        ABOUT: e.ContextInfo$BusinessInteractionPills$PillType.ABOUT,
      };
    function u(e) {
      return {
        businessJid: e.businessJid,
        entryPoint: o("WAWebProtobufsE2E.pb")
          .ContextInfo$BusinessInteractionPills$EntryPoint.CONTACT_CARD_SHARING,
        pills: e.pillTypes.flatMap(function (e) {
          var t = s[e];
          return t != null ? [{ pillType: t }] : [];
        }),
      };
    }
    l.encodeContactCardPills = u;
  },
  98,
);
