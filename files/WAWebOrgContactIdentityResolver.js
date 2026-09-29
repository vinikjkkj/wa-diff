__d(
  "WAWebOrgContactIdentityResolver",
  ["WAWebBusinessProfileTypes", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      if (e == null) {
        var r, a;
        return {
          displayName: t.memberName,
          phoneNumber: (r = t.phoneNumber) != null ? r : null,
          username:
            (a = o("WAWebUsernameTypes").serializeMaybeUsername(t.username)) !=
            null
              ? a
              : null,
        };
      }
      return {
        displayName: (n = s(e)) != null ? n : t.memberName,
        phoneNumber: null,
        username: u(e),
      };
    }
    function s(e) {
      return e.name !== ""
        ? e.name
        : e.verifiedLevel ===
              o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
            e.verifiedName !== ""
          ? e.verifiedName
          : null;
    }
    function u(e) {
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
