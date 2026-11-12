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
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.chatId,
        r = e.contactId,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendChatGetters").getTrusted]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n, a),
        l = i[0],
        c = _(r, n),
        d;
      t[1] !== r || t[2] !== c
        ? ((d =
            c == null || o("WAWebUserUtils").isMeAccount(r)
              ? s._(/*BTDS*/ "Added by someone")
              : s._(/*BTDS*/ "Added by {user_name}", [
                  s._param("user_name", c),
                ])),
          (t[1] = r),
          (t[2] = c),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== l
        ? ((m =
            !l &&
            u.jsxs(u.Fragment, {
              children: [" \xB7\xA0", s._(/*BTDS*/ "Not a contact")],
            })),
          (t[4] = l),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== d || t[7] !== m
          ? ((p = u.jsxs(u.Fragment, { children: [d, m] })),
            (t[6] = d),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function d(e, t) {
      var n = o("react-compiler-runtime").c(8),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendChatGetters").getGroupMetadata]), (n[0] = a))
        : (a = n[0]);
      var i = o("useWAWebChatValues").useChatValues(e, a),
        l = i[0],
        s;
      n[1] !== l
        ? ((s = r("nullthrows")(
            l,
            "Chat groupMetadata is null in useCreatedAt",
          )),
          (n[1] = l),
          (n[2] = s))
        : (s = n[2]);
      var u = s,
        c;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WAWebFrontendGroupMetadataGetters").getOwner,
            o("WAWebFrontendGroupMetadataGetters").getCreation,
            o("WAWebFrontendGroupMetadataGetters").getGroupAdder,
          ]),
          (n[3] = c))
        : (c = n[3]);
      var d = o("useWAWebGroupMetadataValues").useGroupMetadataValues(u.id, c),
        m = d[0],
        p = d[1],
        f = d[2],
        g = t != null ? t : f,
        h = _(m, e),
        y;
      return (
        n[4] !== h || n[5] !== p || n[6] !== g
          ? ((y = o("WAWebClock").Clock.groupCreatedStr(
              p,
              h,
              o("WAWebUserUtils").isMeAccount(g),
            )),
            (n[4] = h),
            (n[5] = p),
            (n[6] = g),
            (n[7] = y))
          : (y = n[7]),
        y
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
        n = s._(/*BTDS*/ "No contacts"),
        r = s._(/*BTDS*/ '_j{"*":"{contacts} contacts","_1":"1 contact"}', [
          s._plural(t, "contacts"),
        ]);
      return t === 0 ? n : r;
    }
    function p(e) {
      var t = e == null ? void 0 : e.participants,
        n = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e),
        r = t == null ? void 0 : t.length,
        a = e == null ? void 0 : e.size,
        i = t != null && t.iAmAdmin() ? r : a;
      return s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
        s._plural(
          n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? i : r,
          "number",
        ),
      ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebChatGetters").getIsGroup,
            o("WAWebFrontendChatGetters").getIsCAG,
            o("WAWebFrontendChatGetters").getGroupMetadata,
          ]),
          (n[0] = r))
        : (r = n[0]);
      var a = o("useWAWebChatValues").useChatValues(t, r),
        i = a[0],
        l = a[1],
        s = a[2],
        u;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [
            o("WAWebContactGetters").getNotifyName,
            o("WAWebFrontendContactGetters").getFormattedNameAndType,
          ]),
          (n[1] = u))
        : (u = n[1]);
      var c = o("useWAWebContactValues").useOptionalContactValues(e, u);
      if (!c) return null;
      var d = c[0],
        m = c[1],
        p;
      if (
        m.type ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER &&
        d != null &&
        o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabledFor({
          isCAG: l,
          isGroup: i,
          participantCount: (s == null ? void 0 : s.participants.length) || 1,
        })
      ) {
        var _;
        (n[2] !== d
          ? ((_ = o("WAWebChatContactUtils").getFormattedNotifyName(d)),
            (n[2] = d),
            (n[3] = _))
          : (_ = n[3]),
          (p = _));
      } else p = m.displayName;
      return p;
    }
    ((l.AddGroupCardTitle = c),
      (l.useCreatedAt = d),
      (l.numberOfContacts = m),
      (l.numberOfMembers = p));
  },
  226,
);
