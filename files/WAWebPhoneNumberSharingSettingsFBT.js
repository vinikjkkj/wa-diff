__d(
  "WAWebPhoneNumberSharingSettingsFBT",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Phone number");
    }
    function u(e) {
      return e === "all"
        ? s._(/*BTDS*/ "Everyone")
        : e === "contacts"
          ? s._(/*BTDS*/ "My contacts")
          : e === "contact_blacklist"
            ? s._(/*BTDS*/ "My contacts except...")
            : e === "none"
              ? s._(/*BTDS*/ "Nobody")
              : s._(/*BTDS*/ "Not loaded");
    }
    function c(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{count} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "count")],
      );
    }
    function d(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{count} entries included","_1":"1 entry included"}',
        [s._plural(e, "count")],
      );
    }
    function m(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{count} entries excluded","_1":"1 entry excluded"}',
        [s._plural(e, "count")],
      );
    }
    ((l.phoneNumberSharingTitle = e),
      (l.phoneNumberSharingModeLabel = u),
      (l.phoneNumberSharingContactExcludedCount = c),
      (l.phoneNumberSharingIncludedCount = d),
      (l.phoneNumberSharingExcludedCount = m));
  },
  226,
);
