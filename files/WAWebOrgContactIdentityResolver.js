__d(
  "WAWebOrgContactIdentityResolver",
  ["WAWebOrgMemberDisplayName", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r =
          (n = o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
            memberName: t.memberName,
            pushName: e == null ? void 0 : e.pushname,
            savedName: e == null ? void 0 : e.name,
          })) != null
            ? n
            : t.memberName;
      if (e == null) {
        var a, i;
        return {
          displayName: r,
          phoneNumber: (a = t.phoneNumber) != null ? a : null,
          username:
            (i = o("WAWebUsernameTypes").serializeMaybeUsername(t.username)) !=
            null
              ? i
              : null,
        };
      }
      return { displayName: r, phoneNumber: null, username: s(e) };
    }
    function s(e) {
      if (e.usernameSoftDeleted === !0) return null;
      var t = e.username;
      return o("WAWebUsernameTypes").isPresentUsername(t)
        ? o("WAWebUsernameTypes").serializeUsername(t)
        : null;
    }
    l.resolveOrgContactIdentity = e;
  },
  98,
);
