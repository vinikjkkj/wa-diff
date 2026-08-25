__d(
  "WAWebTrustSignalsUtils",
  [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "nullthrows",
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
      var n = o("react-compiler-runtime").c(7),
        a;
      n[0] !== e.groupMetadata
        ? ((a = r("nullthrows")(
            e.groupMetadata,
            "Chat groupMetadata is null in useCreatedAt",
          )),
          (n[0] = e.groupMetadata),
          (n[1] = a))
        : (a = n[1]);
      var i;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["owner", "creation", "groupAdder"]), (n[2] = i))
        : (i = n[2]);
      var l = o("useWAWebModelValues").useModelValues(a, i),
        s = t != null ? t : l.groupAdder,
        u = _(l.owner, e),
        c;
      return (
        n[3] !== u || n[4] !== s || n[5] !== l.creation
          ? ((c = o("WAWebClock").Clock.groupCreatedStr(
              l.creation,
              u,
              o("WAWebUserPrefsMeUser").isMeAccount(s),
            )),
            (n[3] = u),
            (n[4] = s),
            (n[5] = l.creation),
            (n[6] = c))
          : (c = n[6]),
        c
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
      var t = e != null ? o("WAWebStateUtils").unproxy(e) : null,
        n = t == null ? void 0 : t.participants,
        r = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t),
        a = n == null ? void 0 : n.length,
        i = t == null ? void 0 : t.size,
        l = n != null && n.iAmAdmin() ? a : i;
      return s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
        s._plural(
          r === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? l : a,
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
