__d(
  "WAWebPersistedJobManagerWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "WAWebPersistedJobManager is not initialised");
    }
    function c() {
      return u();
    }
    ((l.setInstance = s), (l.getInstance = u), (l.getJobManager = c));
  },
  98,
);
