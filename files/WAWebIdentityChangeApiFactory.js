__d(
  "WAWebIdentityChangeApiFactory",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      ((e = t), (s = n));
    }
    function c(t, n) {
      return r("nullthrows")(e, "handleNewIdentity is not initialised")(t, n);
    }
    function d(e) {
      return r("nullthrows")(
        s,
        "clearDeviceRecordForIdentityChange is not initialised",
      )(e);
    }
    ((l.setHandlers = u),
      (l.handleNewIdentity = c),
      (l.clearDeviceRecordForIdentityChange = d));
  },
  98,
);
