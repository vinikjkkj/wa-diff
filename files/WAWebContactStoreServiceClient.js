__d(
  "WAWebContactStoreServiceClient",
  ["WAWebContactStoreService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        updateContactTable: function (n, r) {
          return e(
            o("WAWebContactStoreService").ContactStoreService,
            function (e) {
              return e.updateContactTable(n, r);
            },
          );
        },
        createOrMerge: function (n, r) {
          return e(
            o("WAWebContactStoreService").ContactStoreService,
            function (e) {
              return e.createOrMerge(n, r);
            },
          );
        },
      };
    }
    l.contactStoreServiceClient = e;
  },
  98,
);
