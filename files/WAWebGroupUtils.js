__d(
  "WAWebGroupUtils",
  ["WATypeUtils", "WAWebUserPrefsMeUser", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.some(function (e) {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WATypeUtils").isString(e) ? o("WAWebWidFactory").createWid(e) : e,
        );
      });
    }
    function s(t) {
      var n = t
        .filter(function (e) {
          var t = e.isAdmin;
          return t;
        })
        .map(function (e) {
          var t = e.id;
          return t;
        });
      return e(n);
    }
    var u = new Set(["add", "remove", "demote", "linked_group_demote"]);
    ((l.amIGroupAdmin = e),
      (l.amIGroupAdminGivenParticipants = s),
      (l.INVALID_CAG_NON_ADMIN_SYSTEM_MSG_SUBTYPES = u));
  },
  98,
);
