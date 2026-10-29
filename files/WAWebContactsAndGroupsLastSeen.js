__d(
  "WAWebContactsAndGroupsLastSeen",
  ["WAWebEventEmitter", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "WAContactsAndGroupsLastSeen",
      s = new (r("WAWebEventEmitter"))(),
      u = !1,
      c = 0;
    function d() {
      return u;
    }
    function m() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "number" ? t : 0;
    }
    function p() {
      return u ? c : m();
    }
    function _(e) {
      ((c = m()), g(!0, e));
    }
    function f(e) {
      g(!1, e);
    }
    function g(t, n) {
      ((u = t), r("WAWebUserPrefsStore").setUser(e, n), s.trigger("change"));
    }
    ((l.contactsAndGroupsLastSeen = s),
      (l.isContactsAndGroupsOpen = d),
      (l.getContactsAndGroupsLastSeen = m),
      (l.getContactsAndGroupsLastSeenBeforeThisVisit = p),
      (l.markContactsAndGroupsOpened = _),
      (l.markContactsAndGroupsClosed = f));
  },
  98,
);
