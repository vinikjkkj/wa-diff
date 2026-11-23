__d(
  "WAWebContactStoreServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebContactStoreService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebDBUpdateContactTable").__setRef(
        "WAWebContactStoreServiceWebLive",
      ),
      u = r("JSResourceForInteraction")("WAWebLidAwareContactsDB").__setRef(
        "WAWebContactStoreServiceWebLive",
      ),
      c = o("WAWebContactStoreService").ContactStoreService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0].updateContactTable,
          a = t[1],
          i = {
            updateContactTable: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n);
              });
            },
            createOrMerge: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return a.createOrMerge(t, n);
              });
            },
          };
        return i;
      });
    l.ContactStoreServiceWebLive = c;
  },
  98,
);
