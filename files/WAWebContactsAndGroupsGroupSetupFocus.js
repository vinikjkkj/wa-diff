__d(
  "WAWebContactsAndGroupsGroupSetupFocus",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = new (r("WAWebEventEmitter"))();
    function u(t) {
      ((e = t.id.toString()), s.trigger("request"));
    }
    function c(t) {
      return e !== t.id.toString() ? !1 : ((e = null), !0);
    }
    ((l.groupSetupFocusRequests = s),
      (l.requestGroupSetupFocus = u),
      (l.takeGroupSetupFocusRequest = c));
  },
  98,
);
