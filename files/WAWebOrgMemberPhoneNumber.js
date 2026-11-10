__d(
  "WAWebOrgMemberPhoneNumber",
  ["WAWebApiContact"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return e.phoneNumber != null && e.phoneNumber !== ""
        ? e.phoneNumber
        : t == null
          ? null
          : (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(t)) == null
            ? void 0
            : n.user;
    }
    l.getOrgMemberShownPhoneNumber = e;
  },
  98,
);
