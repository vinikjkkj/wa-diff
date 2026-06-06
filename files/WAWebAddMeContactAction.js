__d(
  "WAWebAddMeContactAction",
  ["WAJids", "WAWebContactCollection", "WAWebLidAwareContactsDB"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAJids").toPhoneUserJid(e.user);
      (await r("WAWebLidAwareContactsDB").createOrMerge(t, { id: t }),
        o("WAWebContactCollection").ContactCollection.gadd(e));
    }
    l.addMeToContacts = e;
  },
  98,
);
