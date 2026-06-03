__d(
  "WAWebDBLabelDatabaseApi",
  ["WAWebSchemaLabel", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaLabel").getLabelTable().all();
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaLabel").getLabelTable().createOrReplace(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaLabel").getLabelTable().remove(e);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getNextLabelId = e), (l.addOrEditLabel = u), (l.removeLabel = d));
  },
  98,
);
