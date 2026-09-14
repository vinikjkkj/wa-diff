__d(
  "WAWebPrimaryFeaturesGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPrimaryFeaturesCache,
      }),
      s = e.field,
      u = s("isAccountIntegrityStatePending"),
      c = s("isAccountIntegrityStateTimelock"),
      d = s("isContactsBackupOn"),
      m = s("primaryHasAddressbookPermission"),
      p = s("primaryHasAgreedToNativeContactsNux");
    ((l.getIsAccountIntegrityStatePending = u),
      (l.getIsAccountIntegrityStateTimelock = c),
      (l.getIsContactsBackupOn = d),
      (l.getPrimaryHasAddressbookPermission = m),
      (l.getPrimaryHasAgreedToNativeContactsNux = p));
  },
  98,
);
