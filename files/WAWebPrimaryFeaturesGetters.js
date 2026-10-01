__d(
  "WAWebPrimaryFeaturesGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPrimaryFeaturesCache,
      }),
      s = e.field,
      u = s("customPaymentMethodsSyncSupport"),
      c = s("isAccountIntegrityStatePending"),
      d = s("isAccountIntegrityStateTimelock"),
      m = s("isContactsBackupOn"),
      p = s("primaryHasAddressbookPermission"),
      _ = s("primaryHasAgreedToNativeContactsNux");
    ((l.getCustomPaymentMethodsSyncSupport = u),
      (l.getIsAccountIntegrityStatePending = c),
      (l.getIsAccountIntegrityStateTimelock = d),
      (l.getIsContactsBackupOn = m),
      (l.getPrimaryHasAddressbookPermission = p),
      (l.getPrimaryHasAgreedToNativeContactsNux = _));
  },
  98,
);
