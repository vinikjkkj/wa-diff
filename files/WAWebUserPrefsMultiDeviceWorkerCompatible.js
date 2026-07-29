__d(
  "WAWebUserPrefsMultiDeviceWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "UserPrefsMultiDevice is not initialised");
    }
    function c() {
      return u().getNoiseInfo();
    }
    function d() {
      return u().getNoiseInfoIv();
    }
    function m(e) {
      return u().setNoiseInfo(e);
    }
    function p(e) {
      return u().setNoiseInfoIv(e);
    }
    ((l.setInstance = s),
      (l.getNoiseInfo = c),
      (l.getNoiseInfoIv = d),
      (l.setNoiseInfo = m),
      (l.setNoiseInfoIv = p));
  },
  98,
);
