__d(
  "WAWebDBOutContactDatabaseApi",
  ["WAWebSchemaOutContact", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaOutContact").getOutContactTable().all();
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
          yield o("WAWebSchemaOutContact")
            .getOutContactTable()
            .bulkCreateOrReplace(e);
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
          yield o("WAWebSchemaOutContact").getOutContactTable().remove(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaOutContact").getOutContactTable().bulkRemove(e);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getAllOutContacts = e),
      (l.putOutContactBatch = u),
      (l.removeOutContact = d),
      (l.removeOutContactBatch = p));
  },
  98,
);
