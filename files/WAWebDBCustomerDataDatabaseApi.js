__d(
  "WAWebDBCustomerDataDatabaseApi",
  ["WAWebSchemaCustomerData", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaCustomerData")
            .getCustomerDataTable()
            .createOrReplace(e);
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
          var t = yield o("WAWebSchemaCustomerData")
            .getCustomerDataTable()
            .equals(["chatJid"], e);
          return t.length > 0 ? t[0] : null;
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
          return o("WAWebSchemaCustomerData")
            .getCustomerDataTable()
            .bulkRemoveByIndex(["chatJid"], [e]);
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
          return o("WAWebSchemaCustomerData")
            .getCustomerDataTable()
            .bulkMergeOnly(e);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.addOrEditCustomerData = e),
      (l.getCustomerDataByChatJid = u),
      (l.removeCustomerDataByChatJid = d),
      (l.bulkUpdateCustomerData = p));
  },
  98,
);
