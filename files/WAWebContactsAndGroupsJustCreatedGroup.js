__d(
  "WAWebContactsAndGroupsJustCreatedGroup",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      e = t.toString();
    }
    function s(t) {
      return e === t.id.toString();
    }
    function u(t) {
      s(t) && (e = null);
    }
    ((i.markGroupJustCreated = l),
      (i.isGroupJustCreated = s),
      (i.clearJustCreatedGroup = u));
  },
  66,
);
