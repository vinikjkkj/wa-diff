__d(
  "WAWebParticipantPickerEnterTarget",
  [
    "WAWebOrgMemberPickerRows",
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
    l.getParticipantPickerEnterTarget = e;
  },
  98,
);
