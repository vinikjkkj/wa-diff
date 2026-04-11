__d(
  "WAWebDBOrphanDbSerialization",
  ["WAWebDBMessageSerialization", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        sender:
          e.sender == null
            ? null
            : o("WAWebWidFactory").createUserWidOrThrow(e.sender),
        parsedMsgPayload: o("WAWebDBMessageSerialization").messageFromDbRow(
          e.parsedMsgPayload,
        ),
      });
    }
    l.orphanFromDbRow = e;
  },
  98,
);
