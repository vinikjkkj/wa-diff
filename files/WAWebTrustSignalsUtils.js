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
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.contactId,
        r = _(n, t);
      return u.jsxs(u.Fragment, {
        children: [
          r == null || o("WAWebUserPrefsMeUser").isMeAccount(n)
            ? s._(/*BTDS*/ "Added by someone")
            : s._(/*BTDS*/ "Added by {user_name}", [s._param("user_name", r)]),
          !t.trusted &&
            u.jsxs(u.Fragment, {
              children: [" \xB7\xA0", s._(/*BTDS*/ "Not a contact")],
            }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
      var n = o("useWAWebContactValues").useOptionalContactValues(e, [
        o("WAWebContactGetters").getNotifyName,
        o("WAWebFrontendContactGetters").getFormattedNameAndType,
      ]);
      if (!n) return null;
      var r = n[0],
        a = n[1],
        i;
      return (
        a.type ===
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER &&
        r != null &&
        o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(t)
          ? (i = o("WAWebChatContactUtils").getFormattedNotifyName(r))
          : (i = a.displayName),
        i
      );
    }
    ((l.AddGroupCardTitle = c),
      (l.useCreatedAt = d),
      (l.numberOfContacts = m),
      (l.numberOfMembers = p));
  },
  226,
);
