__d(
  "WAWebDBContactManagerMetadataDatabaseApi",
  [
    "WAJids",
    "WAWebSchemaContactManagerMetadata",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .createOrReplace(y(e));
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
          yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .bulkCreateOrReplace(e.map(y));
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
          yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .bulkRemove(e.map(h));
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
          var t = yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .get(h(e));
          return t == null ? null : y(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .all()).map(y);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = o("WAJids").interpretAndValidateJid(e);
      if (t.jidType !== "lidUser")
        throw r("err")("Contact Manager metadata requires a LID JID");
      return t.userJid;
    }
    function y(e) {
      return babelHelpers.extends({}, e, { id: h(e.id) });
    }
    ((l.addOrEditContactManagerMetadata = e),
      (l.bulkAddOrEditContactManagerMetadata = u),
      (l.bulkRemoveContactManagerMetadata = d),
      (l.getContactManagerMetadata = p),
      (l.getAllContactManagerMetadata = f),
      (l.parseContactManagerMetadataJid = h));
  },
  98,
);
