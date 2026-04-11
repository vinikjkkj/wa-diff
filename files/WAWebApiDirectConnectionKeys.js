__d(
  "WAWebApiDirectConnectionKeys",
  ["WAWebSchemaDirectConnectionKeys"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaDirectConnectionKeys")
        .getDirectConnectionKeysTable()
        .createOrMerge(e.id, e);
    }
    function s(e) {
      return o("WAWebSchemaDirectConnectionKeys")
        .getDirectConnectionKeysTable()
        .remove(e);
    }
    function u(e) {
      return o("WAWebSchemaDirectConnectionKeys")
        .getDirectConnectionKeysTable()
        .get(e);
    }
    ((l.createOrUpdateDirectConnectionKeys = e),
      (l.removeDirectConnectionKeys = s),
      (l.fetchDirectConnectionKeys = u));
  },
  98,
);
