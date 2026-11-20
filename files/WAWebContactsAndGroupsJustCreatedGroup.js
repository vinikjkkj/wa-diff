__d(
  "WAWebContactsAndGroupsJustCreatedGroup",
  ["WAWebContactsAndGroupsSession"],
  function (t, n, r, o, a, i, l) {
    var e = o(
      "WAWebContactsAndGroupsSession",
    ).createContactsAndGroupsSessionValue(null);
    function s(t) {
      e.set(t.toString());
    }
    function u(t) {
      return e.get() === t.id.toString();
    }
    function c(t) {
      u(t) && e.set(null);
    }
    ((l.markGroupJustCreated = s),
      (l.isGroupJustCreated = u),
      (l.clearJustCreatedGroup = c));
  },
  98,
);
