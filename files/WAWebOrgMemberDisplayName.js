__d(
  "WAWebOrgMemberDisplayName",
  ["WAWebBusinessProfileTypes", "WAWebUsernameTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return [e, t].filter(Boolean).join(" ");
    }
    function s(e, t, n) {
      if (e.trim() !== "") return e;
      var r = t == null ? void 0 : t.trim();
      if (r != null && r !== "")
        return o("WAWebUsernameTypes").displayUsername(
          o("WAWebUsernameTypes").asUsername(r),
        );
      var a = n == null ? void 0 : n.trim();
      return a == null || a === "" ? e : a;
    }
    function u(e) {
      var t = e.isBusiness,
        n = t === void 0 ? !1 : t,
        r = e.isSavedContact,
        a = r === void 0 ? !1 : r,
        i = e.memberName,
        l = e.pushName,
        s = e.savedName,
        u = e.verifiedLevel,
        c = e.verifiedName;
      return n &&
        u === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
        c != null &&
        c !== ""
        ? null
        : s != null && s !== ""
          ? s
          : a
            ? null
            : i != null && i !== ""
              ? i
              : l != null && l !== ""
                ? l
                : null;
    }
    ((l.getOrgMemberFullName = e),
      (l.getOrgMemberNameWithUsernameFallback = s),
      (l.resolveWAWebOrgMemberDisplayName = u));
  },
  98,
);
