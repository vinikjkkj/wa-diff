__d(
  "RSTWebWorkerEntrypoint",
  ["ResponsiveTrackerWorker", "WorkerMessagePort", "WorkerSelf"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
        self,
        "RSTWebWorker",
      ),
      s = !1;
    function u() {
      s ||
        (o("WorkerSelf").init(e),
        r("ResponsiveTrackerWorker").init(e),
        (s = !0));
    }
    (u(), (l.default = u));
  },
  98,
);
