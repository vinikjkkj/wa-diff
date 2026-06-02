__d(
  "WAWebDBLabelDatabaseApi",
  ["WAWebSchemaLabel", "err"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebSchemaLabel").getLabelTable().all();
      if (e.length === 0) return 1;
      var t = Math.max.apply(
        Math,
        e.map(function (e) {
          var t = e.id;
          return parseInt(t, 10);
        }),
      );
      if (!Number.isInteger(t))
        throw r("err")("getNextLabelId: Invalid label id " + t);
      return t + 1;
    }
    async function s(e) {
      return o("WAWebSchemaLabel").getLabelTable().createOrReplace(e);
    }
    async function u(e) {
      return o("WAWebSchemaLabel").getLabelTable().remove(e);
    }
    ((l.getNextLabelId = e), (l.addOrEditLabel = s), (l.removeLabel = u));
  },
  98,
);
