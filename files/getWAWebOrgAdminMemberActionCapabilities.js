__d(
  "getWAWebOrgAdminMemberActionCapabilities",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = n.role === "MEMBER" ? t : n.role === "ADMIN" && e;
      return { canRemove: r, canSetRole: r };
    }
    i.default = e;
  },
  66,
);
