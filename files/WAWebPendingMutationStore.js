__d(
  "WAWebPendingMutationStore",
  ["WAWebNoop", "WAWebSchemaPendingMutations", "WAWebSyncdDb"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getByCollection = async function (t) {
          var e = await o("WAWebSyncdDb").getPendingMutationsRows(
            ["collection"],
            t,
          );
          return e.map(
            o("WAWebSchemaPendingMutations").convertToPendingMutationFromRow,
          );
        }),
        (t.getAll = function () {
          return o("WAWebSyncdDb").getAllPendingMutationsRows();
        }),
        (t.getCollectionsWithPendingMutations = function () {
          return o("WAWebSyncdDb").getCollectionsWithPendingMutations();
        }),
        (t.bulkCreate = function (t) {
          return o("WAWebSyncdDb")
            .appendPendingMutationsRows(t)
            .then(r("WAWebNoop"));
        }),
        (t.bulkRemove = function (t) {
          return o("WAWebSyncdDb").bulkRemovePendingMutations(t);
        }),
        (t.clear = function () {
          return o("WAWebSchemaPendingMutations")
            .getPendingMutationsTable()
            .clear();
        }),
        e
      );
    })();
    ((e.locks = ["pending-mutations"]), (l.WAWebPendingMutationStore = e));
  },
  98,
);
