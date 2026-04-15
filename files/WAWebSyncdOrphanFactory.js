__d(
  "WAWebSyncdOrphanFactory",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return r("nullthrows")(e, "CheckOrphanMutations is not initialised");
    }
    function u(t) {
      e = t;
    }
    function c(e, t, n) {
      return s()(e, t, n);
    }
    ((l.getHandler = s), (l.setHandler = u), (l.checkOrphanMutations = c));
  },
  98,
);
