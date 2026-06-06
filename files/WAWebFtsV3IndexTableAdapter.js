__d(
  "WAWebFtsV3IndexTableAdapter",
  ["WAWebDbEncryptionKey", "WAWebFtsStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.bulkPut = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebFtsStorage").getIndexV3Table().bulkCreateOrReplace(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.bulkGetByKey = function (t) {
          return o("WAWebFtsStorage").getIndexV3Table().bulkGet(t);
        }),
        (t.bulkGetAnyOf = function (t, n) {
          return n.length === 1
            ? o("WAWebFtsStorage").getIndexV3Table().equals(t, n[0])
            : o("WAWebFtsStorage").getIndexV3Table().anyOf(t, n);
        }),
        (t.between = function (t, n, r, a) {
          return o("WAWebFtsStorage")
            .getIndexV3Table()
            .between(t, n, r, {
              lowerInclusive: a == null ? void 0 : a.lowerInclusive,
              upperInclusive: a == null ? void 0 : a.upperInclusive,
            });
        }),
        (t.bulkRemoveByIndex = function (t, n) {
          return o("WAWebFtsStorage").getIndexV3Table().bulkRemoveByIndex(t, n);
        }),
        (t.erase = function () {
          return o("WAWebFtsStorage").getIndexV3Table().clear();
        }),
        (t.getKey = function () {
          return o("WAWebDbEncryptionKey").DbEncKeyStore.getFtsHMACKey().key;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
