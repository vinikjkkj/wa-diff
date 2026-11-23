__d(
  "WAWebAddMeContactAction",
  [
    "WAJids",
    "WAWebBackendRuntime",
    "WAWebContactCollection",
    "WAWebContactStoreService",
    "WAWebLidAwareContactsDB",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAJids").toPhoneUserJid(e.user);
      (await (o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebContactStoreService").ContactStoreService)
            .createOrMerge(t, { id: t })
        : r("WAWebLidAwareContactsDB").createOrMerge(t, { id: t })),
        o("WAWebContactCollection").ContactCollection.gadd(e));
    }
    l.addMeToContacts = e;
  },
  98,
);
