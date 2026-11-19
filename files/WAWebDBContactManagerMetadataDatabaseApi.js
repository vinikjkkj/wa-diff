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
            .createOrReplace(g(e));
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
            .bulkCreateOrReplace(e.map(g));
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
            .bulkRemove(e.map(f));
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
          return (yield o("WAWebSchemaContactManagerMetadata")
            .getContactManagerMetadataTable()
            .all()).map(g);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = o("WAJids").interpretAndValidateJid(e);
      if (t.jidType !== "lidUser")
        throw r("err")("Contact Manager metadata requires a LID JID");
      return t.userJid;
    }
    function g(e) {
      return babelHelpers.extends({}, e, { id: f(e.id) });
    }
    ((l.addOrEditContactManagerMetadata = e),
      (l.bulkAddOrEditContactManagerMetadata = u),
      (l.bulkRemoveContactManagerMetadata = d),
      (l.getAllContactManagerMetadata = p),
      (l.parseContactManagerMetadataJid = f));
  },
  98,
);
