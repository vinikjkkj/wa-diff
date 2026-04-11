__d(
  "WAWebDBGetByParentMsgKey",
  ["WAWebDBOrphanDbSerialization", "WAWebSchemaMessageOrphans"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s([e]);
    }
    function s(e) {
      return o("WAWebSchemaMessageOrphans")
        .getMessageOrphanTable()
        .anyOf(["parentMsgKey"], e.map(String))
        .then(function (e) {
          return e
            .filter(Boolean)
            .map(o("WAWebDBOrphanDbSerialization").orphanFromDbRow);
        });
    }
    ((l.getMessageOrphansByParentMsgKey = e),
      (l.bulkGetMessageOrphansByParentMsgKey = s));
  },
  98,
);
