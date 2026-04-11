__d(
  "WAWebGetUserRole",
  ["WAWebWamEnumUserRoleType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e == null ? void 0 : e.groupMetadata;
      if (t == null) return null;
      var n = t.participants.iAmAdmin(),
        r = n && t.isParentGroup;
      return r === !0
        ? o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.CADMIN
        : n === !0
          ? o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.ADMIN
          : o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE.MEMBER;
    }
    l.getUserRole = e;
  },
  98,
);
