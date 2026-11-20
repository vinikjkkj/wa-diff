__d(
  "WAWebContactsAndGroupsContactName",
  [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebWamEnumOppositeVisibleIdentificationType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebWamEnumOppositeVisibleIdentificationType"))
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER,
      ]);
    function u(e) {
      var t = e.chatListName,
        n = e.isMyContact,
        r = e.notifyName;
      return n || r == null || r === "" || !s.has(t.type)
        ? [t.displayName, null]
        : [
            o("WAWebChatContactUtils").getFormattedNotifyName(r, !1),
            o("WAWebChatContactUtils").getAccessibleNotifyName(r),
          ];
    }
    function c(e) {
      var t = o("WAWebFrontendContactGetters").getIsMyContact(e);
      if (
        !o("WAWebContactGetters").getIsBusiness(e) &&
        (t || o("WAWebFrontendContactGetters").getShownOrgMemberName(e) != null)
      )
        return o("WAWebFrontendContactGetters").getFormattedShortName(e);
      var n = u({
          chatListName: o(
            "WAWebFrontendContactGetters",
          ).getFormattedUserAndType(e),
          isMyContact: t,
          notifyName: o("WAWebContactGetters").getNotifyName(e),
        }),
        r = n[0];
      return r;
    }
    ((l.resolveContactsAndGroupsName = u),
      (l.getContactsAndGroupsShortName = c));
  },
  98,
);
