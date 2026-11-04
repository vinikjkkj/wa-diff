__d(
  "WAWebContactsAndGroupsSaveContactsAction",
  [
    "fbt",
    "WAWebBulkAddContactsModal.react",
    "WAWebContactsAndGroupsGatingUtils",
    "WAWebGroupBulkAddContactsEligibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return o(
        "WAWebContactsAndGroupsGatingUtils",
      ).isContactsAndGroupsBulkSaveEnabled()
        ? e.filter(
            o("WAWebGroupBulkAddContactsEligibility").isBulkAddEligibleContact,
          )
        : [];
    }
    function u(e, t) {
      o("WAWebBulkAddContactsModal.react").openBulkAddContactsModalForContacts(
        e,
        { getSuccessToastText: c, onSaved: t },
      );
    }
    function c(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts saved","_1":"1 contact saved"}',
        [s._plural(e, "number")],
      );
    }
    ((l.getContactsToSave = e), (l.saveContactsFromContactsAndGroups = u));
  },
  226,
);
