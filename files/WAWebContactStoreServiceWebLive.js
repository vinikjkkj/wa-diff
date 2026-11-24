__d(
  "WAWebContactStoreServiceWebLive",
  [
    "WAWebContactStoreService",
    "WAWebDBUpdateContactTable",
    "WAWebLidAwareContactsDB",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebContactStoreService").ContactStoreService.make(
      function* () {
        var e = {
          updateContactTable: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebDBUpdateContactTable").updateContactTable(t, n);
            });
          },
          createOrMerge: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return r("WAWebLidAwareContactsDB").createOrMerge(t, n);
            });
          },
        };
        return e;
      },
    );
    l.ContactStoreServiceWebLive = e;
  },
  98,
);
