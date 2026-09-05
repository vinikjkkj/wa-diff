__d(
  "WAWebPrimaryFeaturesGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPrimaryFeaturesCache,
      }),
      s = e.clearCacheFor,
      u = e.field,
      c = s,
      d = u("isAccountIntegrityStatePending"),
      m = u("isAccountIntegrityStateTimelock"),
      p = u("isContactsBackupOn"),
      _ = u("primaryHasAddressbookPermission"),
      f = u("primaryHasAgreedToNativeContactsNux");
    ((l.clearPrimaryFeaturesGetterCacheFor = c),
      (l.getIsAccountIntegrityStatePending = d),
      (l.getIsAccountIntegrityStateTimelock = m),
      (l.getIsContactsBackupOn = p),
      (l.getPrimaryHasAddressbookPermission = _),
      (l.getPrimaryHasAgreedToNativeContactsNux = f));
  },
  98,
);
