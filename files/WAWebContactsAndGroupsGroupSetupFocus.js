__d(
  "WAWebContactsAndGroupsGroupSetupFocus",
  ["WAWebContactsAndGroupsSession", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      s = new (r("WAWebEventEmitter"))();
    function u(t) {
      (e.set(t.id.toString()), s.trigger("request"));
    }
    function c(e) {
      return d(e.id);
    }
    function d(t) {
      return e.get() !== t.toString() ? !1 : (e.set(null), !0);
    }
    ((l.groupSetupFocusRequests = s),
      (l.requestGroupSetupFocus = u),
      (l.takeGroupSetupFocusRequest = c),
      (l.takeGroupSetupFocusRequestForChatId = d));
  },
  98,
);
