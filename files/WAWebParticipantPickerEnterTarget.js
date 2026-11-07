__d(
  "WAWebParticipantPickerEnterTarget",
  [
    "WAWebLidMigrationUtils",
    "WAWebOrgMemberPickerRows",
    "WAWebOrgMemberSearchRows",
    "WAWebOutContactModel",
    "WAWebWODirectory.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = (t = e.separateContacts) == null ? void 0 : t[0],
        a = e.contacts.find(function (e) {
          return !(e instanceof r("WAWebOutContactModel"));
        }),
        i = e.filteredOutContacts[0],
        l = e.showOrgMembers
          ? o("WAWebOrgMemberPickerRows").getOrgMemberToOpenOnEnter(
              e.orgMembers,
            )
          : null,
        s = o("WAWebWODirectory.react").getWODirectoryContactToOpenOnEnter(
          e.directoryContacts,
        );
      return n != null
        ? { kind: "contact", contact: n }
        : l != null
          ? babelHelpers.extends({ kind: "org" }, l)
          : a != null && !(a instanceof r("WAWebOutContactModel"))
            ? { kind: "contact", contact: a }
            : i instanceof r("WAWebOutContactModel")
              ? { kind: "out", contact: i }
              : s != null
                ? { kind: "directory", contact: s }
                : e.canSelectUnknown
                  ? { kind: "unknown" }
                  : { kind: "none" };
    }
    function s(t) {
      var n = new Set(
        t.participants.map(function (e) {
          return u(e.id);
        }),
      );
      return e({
        separateContacts: t.separateContacts.filter(function (e) {
          return !n.has(u(e.id));
        }),
        contacts: t.contacts.filter(function (e) {
          return e instanceof r("WAWebOutContactModel") || !n.has(u(e.id));
        }),
        filteredOutContacts: t.contacts.flatMap(function (e) {
          return e instanceof r("WAWebOutContactModel") &&
            t.allowOutContacts &&
            !t.selectedOutContactIds.has(e.id)
            ? [e]
            : [];
        }),
        showOrgMembers: !0,
        orgMembers: t.orgMembers.filter(function (e) {
          var t = o("WAWebOrgMemberSearchRows").toOrgMemberLid(e);
          return t != null && !n.has(u(t));
        }),
        directoryContacts: t.directoryContacts.filter(function (e) {
          return !n.has(u(e.lid));
        }),
        canSelectUnknown: t.canSelectUnknown,
      });
    }
    function u(e) {
      var t;
      return (
        (t = o("WAWebLidMigrationUtils").toUserLid(e)) != null ? t : e
      ).toString();
    }
    ((l.getParticipantPickerEnterTarget = e),
      (l.getRefreshedParticipantPickerEnterTarget = s));
  },
  98,
);
