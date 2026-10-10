__d(
  "WAWebOrgMemberDisplayName",
  ["WAWebBusinessProfileTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
    l.resolveWAWebOrgMemberDisplayName = e;
  },
  98,
);
