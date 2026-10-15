__d(
  "WAWebOrgMemberDisplayName",
  ["WAWebBusinessProfileTypes", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e.trim() !== "") return e;
      var r = t == null ? void 0 : t.trim();
      if (r != null && r !== "")
        return o("WAWebUsernameTypes").displayUsername(
          o("WAWebUsernameTypes").asUsername(r),
        );
      var a = n == null ? void 0 : n.trim();
      return a == null || a === "" ? e : a;
    }
    function s(e) {
      var t = e.isBusiness,
        n = t === void 0 ? !1 : t,
        r = e.memberName,
        a = e.pushName,
        i = e.savedName,
        l = e.verifiedLevel,
        s = e.verifiedName;
      return n &&
        l === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
        s != null &&
        s !== ""
        ? null
        : i != null && i !== ""
          ? i
          : r != null && r !== ""
            ? r
            : a != null && a !== ""
              ? a
              : null;
    }
    ((l.getOrgMemberNameWithUsernameFallback = e),
      (l.resolveWAWebOrgMemberDisplayName = s));
  },
  98,
);
