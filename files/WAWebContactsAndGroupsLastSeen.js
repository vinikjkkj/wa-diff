__d(
  "WAWebContactsAndGroupsLastSeen",
  ["WAWebEventEmitter", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "WAContactsAndGroupsLastSeen",
      s = new (r("WAWebEventEmitter"))(),
      u = !1;
    function c() {
      return u;
    }
    function d() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "number" ? t : 0;
    }
    function m(e) {
      _(!0, e);
    }
    function p(e) {
      _(!1, e);
    }
    function _(t, n) {
      ((u = t), r("WAWebUserPrefsStore").setUser(e, n), s.trigger("change"));
    }
    ((l.contactsAndGroupsLastSeen = s),
      (l.isContactsAndGroupsOpen = c),
      (l.getContactsAndGroupsLastSeen = d),
      (l.markContactsAndGroupsOpened = m),
      (l.markContactsAndGroupsClosed = p));
  },
  98,
);
