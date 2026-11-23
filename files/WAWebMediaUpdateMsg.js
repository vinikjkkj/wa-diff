__d(
  "WAWebMediaUpdateMsg",
  ["WAWebDBUpdateMessageTable"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      (await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, t),
        e.set(t));
    }
    l.default = e;
  },
  98,
);
