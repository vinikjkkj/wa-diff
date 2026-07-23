__d(
  "WAWebDBLabelSublistDatabaseApi",
  ["WAWebSchemaLabelSublist", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
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
          yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .bulkRemove([e]);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .get(
              o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                predefinedId: e,
                chatJid: t,
              }),
            );
          return n != null ? n : null;
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaLabelSublist").getLabelSublistTable().all();
        })),
        _.apply(this, arguments)
      );
    }
    ((l.addOrEditLabelSublist = e),
      (l.removeLabelSublist = u),
      (l.getLabelSublistByChat = d),
      (l.getAllLabelSublist = p));
  },
  98,
);
