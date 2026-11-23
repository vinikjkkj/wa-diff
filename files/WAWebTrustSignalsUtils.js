__d(
  "WAWebTrustSignalsUtils",
  [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebUserUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "nullthrows",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chatId,
        n = e.contactId,
        r = o("useWAWebChatValues").useChatValues(t, [
          o("WAWebFrontendChatGetters").getTrusted,
        ]),
        a = r[0],
        i = _(n, t);
      return u.jsxs(u.Fragment, {
        children: [
          i == null || o("WAWebUserUtils").isMeAccount(n)
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "", [s._param("user_name", i)]),
          !a &&
            u.jsxs(u.Fragment, { children: [" \xB7\xA0", s._(/*BTDS*/ "")] }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      var n = o("useWAWebChatValues").useChatValues(e, [
          o("WAWebFrontendChatGetters").getGroupMetadata,
        ]),
        a = n[0],
        i = r("nullthrows")(a, "Chat groupMetadata is null in useCreatedAt"),
        l = o("useWAWebGroupMetadataValues").useGroupMetadataValues(i.id, [
          o("WAWebFrontendGroupMetadataGetters").getOwner,
          o("WAWebFrontendGroupMetadataGetters").getCreation,
          o("WAWebFrontendGroupMetadataGetters").getGroupAdder,
        ]),
        s = l[0],
        u = l[1],
        c = l[2],
        d = t != null ? t : c,
        m = _(s, e);
      return o("WAWebClock").Clock.groupCreatedStr(
        u,
        m,
        o("WAWebUserUtils").isMeAccount(d),
      );
    }
    function m(e) {
      var t =
          e == null
            ? void 0
            : e.countWhere(function (e) {
                return (
                  o("WAWebFrontendContactGetters").getIsMyContact(e.contact) &&
                  !o("WAWebContactGetters").getIsMe(e.contact)
                );
              }),
        n = s._(/*BTDS*/ ""),
        r = s._(/*BTDS*/ "", [s._plural(t, "contacts")]);
      return t === 0 ? n : r;
    }
    function p(e) {
      var t = e == null ? void 0 : e.participants,
        n = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e),
        r = t == null ? void 0 : t.length,
        a = e == null ? void 0 : e.size,
        i = t != null && t.iAmAdmin() ? r : a;
      return s._(/*BTDS*/ "", [
        s._plural(
          n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? i : r,
          "number",
        ),
      ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = o("useWAWebChatValues").useChatValues(t, [
          o("WAWebChatGetters").getIsGroup,
          o("WAWebFrontendChatGetters").getIsCAG,
          o("WAWebFrontendChatGetters").getGroupMetadata,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l = o("useWAWebContactValues").useOptionalContactValues(e, [
          o("WAWebContactGetters").getNotifyName,
          o("WAWebFrontendContactGetters").getFormattedNameAndType,
        ]);
      if (!l) return null;
      var s = l[0],
        u = l[1],
        c;
      return (
        u.type ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER &&
        s != null &&
        o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabledFor({
          isCAG: a,
          isGroup: r,
          participantCount: (i == null ? void 0 : i.participants.length) || 1,
        })
          ? (c = o("WAWebChatContactUtils").getFormattedNotifyName(s))
          : (c = u.displayName),
        c
      );
    }
    ((l.AddGroupCardTitle = c),
      (l.useCreatedAt = d),
      (l.numberOfContacts = m),
      (l.numberOfMembers = p));
  },
  226,
);
