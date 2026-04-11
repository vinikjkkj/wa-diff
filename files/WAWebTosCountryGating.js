__d(
  "WAWebTosCountryGating",
  [
    "WAWebABPropsInternalNumber",
    "WAWebBizGatingUtils",
    "WAWebHandleMsgTypes.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebBizGatingUtils").countryGatingEnabled()) {
        var t;
        return (
          ((t = e.privacyMode) == null ? void 0 : t.hostStorage) ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
          !o("WAWebABPropsInternalNumber").getFbBrandedNumber(e.id.user)
        );
      }
      return !1;
    }
    l.shouldBlockByCountry = e;
  },
  98,
);
