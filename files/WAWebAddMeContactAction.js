__d(
  "WAWebAddMeContactAction",
  [
    "WAJids",
    "WAWebContactCollection",
    "WAWebLidAwareContactsDB",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAJids").toPhoneUserJid(e.user);
          (yield r("WAWebLidAwareContactsDB").createOrMerge(t, { id: t }),
            o("WAWebContactCollection").ContactCollection.gadd(e));
        })),
        s.apply(this, arguments)
      );
    }
    l.addMeToContacts = e;
  },
  98,
);
