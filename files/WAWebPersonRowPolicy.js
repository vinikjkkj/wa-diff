__d(
  "WAWebPersonRowPolicy",
  [
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebOrgTimelock",
    "WAWebReachoutTimelockUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebWidFactory").createUserLidOrThrow(e.lid, "lid");
    }
    function s(e, t) {
      return (
        (t == null || t.isAllowed == null ? void 0 : t.isAllowed(e)) !== !1 &&
        (t == null || t.isDisabled == null ? void 0 : t.isDisabled(e)) !== !0
      );
    }
    function u(t, n) {
      n === void 0 && (n = []);
      var r = e(t),
        a = o("WAWebApiContact").getPnIfLidIsLatestMapping(r),
        i = function (t) {
          return t.id.equals(r) || (a != null && t.id.equals(a));
        },
        l = []
          .concat(n.filter(i), [
            o("WAWebContactCollection").ContactCollection.get(r),
            a == null
              ? null
              : o("WAWebContactCollection").ContactCollection.get(a),
          ])
          .filter(function (e) {
            return e != null;
          });
      return Array.from(new Set(l));
    }
    function c(t) {
      var n,
        r = e(t),
        a = o("WAWebApiContact").getPnIfLidIsLatestMapping(r),
        i =
          a == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(a);
      return i != null &&
        o("WAWebFrontendContactGetters").getIsContactBlocked(i)
        ? i
        : (n = o("WAWebContactCollection").ContactCollection.get(r)) != null
          ? n
          : i;
    }
    function d(e, t, n) {
      return u(e, n).some(t);
    }
    function m(e, t) {
      var n = t.allowBlockedContacts,
        r = n === void 0 ? !1 : n,
        a = t.isContactDisabled,
        i = t.provided;
      return u(e, i).some(function (e) {
        return (
          (a == null ? void 0 : a(e)) === !0 ||
          (!r && o("WAWebFrontendContactGetters").getIsContactBlocked(e))
        );
      });
    }
    function p(t) {
      return (
        o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() &&
        !o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(e(t))
      );
    }
    function _(t, n) {
      var r, a;
      return (r =
        (a = f(t, n)) != null
          ? a
          : o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
              e(t),
            )) != null
        ? r
        : c(t);
    }
    function f(t, n) {
      var r = e(t);
      return n.find(function (e) {
        var t, n;
        return e instanceof o("WAWebChatModel").Chat
          ? ((t = e.accountLid) == null ? void 0 : t.equals(r)) === !0
          : e.id.isRegularUser() &&
              ((n = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
                ? void 0
                : n.equals(r)) === !0;
      });
    }
    function g(t, n) {
      var r = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(e(t));
      return r == null || n(r);
    }
    ((l.toPersonLid = e),
      (l.isPersonRowAllowed = s),
      (l.getPersonContacts = u),
      (l.getExistingPersonContact = c),
      (l.isPersonSelected = d),
      (l.isPersonContactUnavailable = m),
      (l.isPersonTimelocked = p),
      (l.getExistingPersonRecipient = _),
      (l.findSelectedPersonRecipient = f),
      (l.isPersonChatAllowed = g));
  },
  98,
);
