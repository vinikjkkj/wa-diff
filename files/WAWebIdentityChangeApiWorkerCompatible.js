__d(
  "WAWebIdentityChangeApiWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "IdentityChangeApi is not initialised");
    }
    function c(e, t) {
      return u().handleNewIdentity(e, t);
    }
    function d(e) {
      return u().clearDeviceRecordForIdentityChange(e);
    }
    ((l.setInstance = s),
      (l.getInstance = u),
      (l.handleNewIdentity = c),
      (l.clearDeviceRecordForIdentityChange = d));
  },
  98,
);
