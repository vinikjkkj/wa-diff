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
      return u().getJobManager();
    }
    function d(e) {
      return u().maybeCreateJob(e);
    }
    ((l.setHandler = s),
      (l.getHandler = u),
      (l.getJobManager = c),
      (l.maybeCreateJob = d));
  },
  98,
);
