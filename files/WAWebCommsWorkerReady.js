__d(
  "WAWebCommsWorkerReady",
  ["Promise", "WAGenericStateManager", "WAPromiseTimeout"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = new (o("WAGenericStateManager").WAGenericStateManager)(!1);
    function c(e) {
      u.set(e);
    }
    function d() {
      return u.get();
    }
    function m() {
      return u.get()
        ? (e || (e = n("Promise"))).resolve()
        : o("WAPromiseTimeout").promiseTimeout(
            u.waitForValue(!0),
            s,
            "waitForCommsWorker",
          );
    }
    ((l.setCommsWorkerReady = c),
      (l.isCommsWorkerReady = d),
      (l.waitForCommsWorker = m));
  },
  98,
);
