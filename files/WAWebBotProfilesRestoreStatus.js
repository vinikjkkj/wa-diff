__d(
  "WAWebBotProfilesRestoreStatus",
  ["Promise", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var t = r("WAWebNoop"),
        o = new (e || (e = n("Promise")))(function (e) {
          t = e;
        });
      return { promise: o, resolve: t };
    }
    var u = s();
    function c() {
      u.resolve();
    }
    function d() {
      return u.promise;
    }
    ((l.markBotProfilesRestored = c), (l.waitForBotProfilesRestored = d));
  },
  98,
);
