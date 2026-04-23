__d(
  "WAWebIdbAsyncAwaitConfig",
  ["WAWebBoolFunc"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebBoolFunc").returnFalse;
    function s(t) {
      e = t;
    }
    function u() {
      return e();
    }
    ((l.setIsAsyncAwaitPrepEnabledImpl = s), (l.isAsyncAwaitPrepEnabled = u));
  },
  98,
);
