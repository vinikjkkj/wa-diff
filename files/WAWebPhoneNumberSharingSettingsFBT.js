__d(
  "WAWebPhoneNumberSharingSettingsFBT",
  ["fbt", "WAWebPrivacySettingsFBT"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u(e) {
      return e === "all"
        ? s._(/*BTDS*/ "")
        : e === "contacts"
          ? s._(/*BTDS*/ "")
          : e === "contact_blacklist"
            ? s._(/*BTDS*/ "")
            : e === "none"
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
    }
    function c(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "count")]);
    }
    function d(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "count")]);
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p(e) {
      return e === "none" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    ((l.phoneNumberSharingContactExcludedCount = o(
      "WAWebPrivacySettingsFBT",
    ).privacyContactsExcludedCount),
      (l.phoneNumberSharingTitle = e),
      (l.phoneNumberSharingModeLabel = u),
      (l.phoneNumberSharingIncludedCount = c),
      (l.phoneNumberSharingExcludedCount = d),
      (l.phoneNumberSharingDenyListLabel = m),
      (l.phoneNumberSharingAllowListLabel = p));
  },
  226,
);
