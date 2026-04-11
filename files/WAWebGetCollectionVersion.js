__d(
  "WAWebGetCollectionVersion",
  ["WACryptoLtHash", "WAWebRunInTransaction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return n.get(e);
        },
      );
    }
    function s(e, t) {
      var n = e.CollectionVersionStore;
      return n.get(t).then(function (e) {
        var t;
        return (t = e == null ? void 0 : e.ltHash) != null
          ? t
          : new ArrayBuffer(o("WACryptoLtHash").KEY_LENGTH_BYTES);
      });
    }
    function u(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return s({ CollectionVersionStore: n }, e);
        },
      );
    }
    function c(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return n.bulkGet(e);
        },
      );
    }
    function d() {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (e) {
          var t = e.CollectionVersionStore;
          return t.getAll();
        },
      );
    }
    function m(e, t, n) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (r) {
          var o = r.CollectionVersionStore;
          return o.update(e, { version: t, ltHash: n });
        },
      );
    }
    function p(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return n.bulkUpdate(e);
        },
      );
    }
    function _(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return n.get(e).then(function (e) {
            return e == null ? void 0 : e.isCollectionInMacMismatchFatal;
          });
        },
      );
    }
    function f(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { CollectionVersionStore: !0 },
        function (t) {
          var n = t.CollectionVersionStore;
          return n.update(e, { isCollectionInMacMismatchFatal: !0 });
        },
      );
    }
    ((l.getCollectionVersionInTransaction = e),
      (l.getCollectionVersionLtHashInTransaction = u),
      (l.bulkGetCollectionVersionsInTransaction = c),
      (l.getAllCollectionVersionsInTransaction = d),
      (l.updateCollectionVersionAndLtHashInTransaction = m),
      (l.bulkUpdateCollectionVersionInTransaction = p),
      (l.getIsCollectionInMacMismatchFatalInTransaction = _),
      (l.updateIsCollectionInMacMismatchFatalInTransaction = f));
  },
  98,
);
