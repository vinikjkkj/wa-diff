__d(
  "WAWebTrustSignalsUtils",
  [
    "fbt",
    "WANullthrows",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.chat,
        r = e.contactId,
        a = _(r, n),
        i;
      t[0] !== r || t[1] !== a
        ? ((i =
            a == null || o("WAWebUserPrefsMeUser").isMeAccount(r)
              ? s._(/*BTDS*/ "Added by someone")
              : s._(/*BTDS*/ "Added by {user_name}", [
                  s._param("user_name", a),
                ])),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== n.trusted
        ? ((l =
            !n.trusted &&
            u.jsxs(u.Fragment, {
              children: [" \xB7\xA0", s._(/*BTDS*/ "Not a contact")],
            })),
          (t[3] = n.trusted),
          (t[4] = l))
        : (l = t[4]);
      var c;
      return (
        t[5] !== i || t[6] !== l
          ? ((c = u.jsxs(u.Fragment, { children: [i, l] })),
            (t[5] = i),
            (t[6] = l),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function d(e, t) {
      var n = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(
            e.groupMetadata,
            "Chat groupMetadata is null in useCreatedAt",
          ),
          ["owner", "creation", "groupAdder"],
        ),
        a = t != null ? t : n.groupAdder,
        i = _(n.owner, e);
      return o("WAWebClock").Clock.groupCreatedStr(
        n.creation,
        i,
        o("WAWebUserPrefsMeUser").isMeAccount(a),
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
        n = e == null ? void 0 : e.groupType,
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
      var n = o("react-compiler-runtime").c(3),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [
            o("WAWebContactGetters").getNotifyName,
            o("WAWebFrontendContactGetters").getFormattedNameAndType,
          ]),
          (n[0] = r))
        : (r = n[0]);
      var a = o("useWAWebContactValues").useOptionalContactValues(e, r);
      if (!a) return null;
      var i = a[0],
        l = a[1],
        s;
      if (
        l.type ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER &&
        i != null &&
        o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(t)
      ) {
        var u;
        (n[1] !== i
          ? ((u = o("WAWebChatContactUtils").getFormattedNotifyName(i)),
            (n[1] = i),
            (n[2] = u))
          : (u = n[2]),
          (s = u));
      } else s = l.displayName;
      return s;
    }
    ((l.AddGroupCardTitle = c),
      (l.useCreatedAt = d),
      (l.numberOfContacts = m),
      (l.numberOfMembers = p));
  },
  226,
);
