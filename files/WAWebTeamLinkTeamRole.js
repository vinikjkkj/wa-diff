__d(
  "WAWebTeamLinkTeamRole",
  [],
  function (t, n, r, o, a, i) {
    var e = 100;
    function l(t, n) {
      n === void 0 && (n = "");
      var r = t.trim();
      return r !== n && r.length > e;
    }
    function s(t) {
      var n = t.trim();
      return t.length > e && n.length <= e ? n : t;
    }
    function u(t, n) {
      return n.length > e && t.trim() === n ? void 0 : e;
    }
    ((i.TEAM_ROLE_MAX_LENGTH = e),
      (i.isTeamRoleTooLong = l),
      (i.normalizeTeamRoleInput = s),
      (i.getTeamRoleMaxCharacterCount = u));
  },
  66,
);
