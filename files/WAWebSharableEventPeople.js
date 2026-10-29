__d(
  "WAWebSharableEventPeople",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChatCollection",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebPhoneUtils",
    "WAWebSharableEventCreatorPushNameCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum")({
        Self: "self",
        Contact: "contact",
        PushName: "pushName",
        Username: "username",
        GuestName: "guestName",
        PhoneNumber: "phoneNumber",
        UnknownHost: "unknownHost",
      }),
      u = [p, _, f, g, h, y];
    function c(e, t, n) {
      var r = { lid: e, identifiers: t, viewerIsHost: n };
      for (var o of u) {
        var a = o(r);
        if (a != null) return a;
      }
      return null;
    }
    function d(t, n) {
      var r = t == null ? null : c(t, n, !1);
      if (r != null) return r;
      var o = s._(/*BTDS*/ "Host");
      return { name: o, accessibleName: o, source: e.UnknownHost };
    }
    function m(e) {
      return (
        b(e) != null ||
        o("WAWebChatCollection").ChatCollection.getChatByAccountLid(e) != null
      );
    }
    function p(t) {
      var n = t.lid;
      if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) return null;
      var r = s._(/*BTDS*/ "You");
      return { name: r, accessibleName: r, source: e.Self };
    }
    function _(t) {
      var n = t.lid,
        r = b(n);
      return r == null ? null : v(r, e.Contact);
    }
    function f(t) {
      var n,
        r,
        a = t.lid,
        i =
          (n = C(a)) != null
            ? n
            : S(
                (r = o(
                  "WAWebSharableEventCreatorPushNameCollection",
                ).SharableEventCreatorPushNameCollection.get(a)) == null
                  ? void 0
                  : r.pushName,
              );
      return i == null
        ? null
        : {
            name: o("WAWebChatContactUtils").getFormattedNotifyName(i),
            accessibleName: o("WAWebChatContactUtils").getAccessibleNotifyName(
              i,
            ),
            source: e.PushName,
          };
    }
    function g(t) {
      var n = t.identifiers,
        r = S(n == null ? void 0 : n.username);
      return r == null
        ? null
        : v(
            o("WAWebUsernameTypes").displayUsername(
              o("WAWebUsernameTypes").asUsername(r),
            ),
            e.Username,
          );
    }
    function h(t) {
      var n = t.identifiers,
        r = t.viewerIsHost,
        a = r ? S(n == null ? void 0 : n.guestName) : null;
      return a == null
        ? null
        : {
            name: o("WAWebChatContactUtils").getFormattedNotifyName(a),
            accessibleName: o("WAWebChatContactUtils").getAccessibleNotifyName(
              a,
            ),
            source: e.GuestName,
          };
    }
    function y(t) {
      var n = t.identifiers,
        r = t.viewerIsHost,
        a = r ? S(n == null ? void 0 : n.phoneNumber) : null;
      return a == null
        ? null
        : v(o("WAWebPhoneUtils").formatPhone(a), e.PhoneNumber);
    }
    function C(e) {
      var t,
        n = o("WAWebLidMigrationUtils").toPn(e),
        r = [
          (t = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
            e,
          )) == null
            ? void 0
            : t.contact,
          o("WAWebContactCollection").ContactCollection.get(e),
          n == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(n),
        ];
      for (var a of r) {
        var i = a == null ? null : S(o("WAWebContactGetters").getPushname(a));
        if (i != null) return i;
      }
      return null;
    }
    function b(e) {
      var t = o("WAWebLidMigrationUtils").toPn(e),
        n = [
          o("WAWebContactCollection").ContactCollection.get(e),
          t == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(t),
        ];
      for (var r of n)
        if (r != null && o("WAWebFrontendContactGetters").getIsMyContact(r)) {
          var a = S(o("WAWebContactGetters").getName(r));
          if (a != null) return a;
        }
      return null;
    }
    function v(e, t) {
      return { name: e, accessibleName: e, source: t };
    }
    function S(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    ((l.SharableEventNameSource = e),
      (l.getSharableEventPersonName = c),
      (l.getSharableEventHostName = d),
      (l.isSharableEventKnownPerson = m),
      (l.getKnownPushName = C));
  },
  226,
);
