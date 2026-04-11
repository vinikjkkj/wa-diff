__d(
  "WAWebStorageMutationBuilder",
  [
    "WAWebStorageAddArrayIndex",
    "WAWebStorageAddColumn",
    "WAWebStorageAddCompositeIndex",
    "WAWebStorageAddEncryptedColumn",
    "WAWebStorageAddIndex",
    "WAWebStorageAddUniqueIndex",
    "WAWebStorageAutoIncrementingPrimaryKey",
    "WAWebStorageCompositePrimaryKey",
    "WAWebStorageRemoveArrayIndex",
    "WAWebStorageRemoveColumn",
    "WAWebStorageRemoveCompositeIndex",
    "WAWebStorageRemoveIndex",
    "WAWebStorageRemoveUniqueIndex",
    "WAWebStorageUserDefinedPrimaryKey",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {};
      return function (n) {
        if (t[n]) return t[n];
        var r = e(n);
        return ((t[n] = r), r);
      };
    }
    var s = e(u);
    function u(e) {
      for (var t = e, n = []; t > 0; ) {
        t--;
        var r = t % 26;
        (n.push(String.fromCharCode(97 + r)), (t = Math.floor(t / 26)));
      }
      return (n.reverse(), n.join(""));
    }
    function c(e, t) {
      var n = { intentionallyUsePrivateConstructor: !0 };
      if (e != null && e.packColumns && t == null)
        throw r("err")(
          "[storage-config-error] packing columns enabled, but packing data does not exist",
        );
      var o = e != null && e.packColumns && t ? t : {},
        a = function (t) {
          return o[t] != null ? s(o[t]) : t;
        },
        i = function (t) {
          return new (r("WAWebStorageAddColumn"))(t, a(t), n);
        },
        l = function (t, o) {
          return new (r("WAWebStorageAddEncryptedColumn"))(t, a(t), o, n);
        },
        u = function (t) {
          return new (r("WAWebStorageUserDefinedPrimaryKey"))(
            { name: t, packedName: a(t) },
            n,
          );
        },
        c = function (t) {
          return new (r("WAWebStorageAutoIncrementingPrimaryKey"))(
            { name: t, packedName: a(t) },
            n,
          );
        },
        d = function (t) {
          return new (r("WAWebStorageCompositePrimaryKey"))(
            t.map(function (e) {
              return { name: e, packedName: a(e) };
            }),
            n,
          );
        },
        m = function (t) {
          var e = t.split(".")[0];
          return new (r("WAWebStorageAddIndex"))(a(e), n);
        },
        p = function (t) {
          return new (r("WAWebStorageAddArrayIndex"))(a(t), n);
        },
        _ = function (t) {
          return new (r("WAWebStorageAddCompositeIndex"))(
            t.map(function (e) {
              return a(e);
            }),
            n,
          );
        },
        f = function (t) {
          return new (r("WAWebStorageAddUniqueIndex"))(a(t), n);
        },
        g = function (t) {
          return new (r("WAWebStorageRemoveColumn"))(t, n);
        },
        h = function (t) {
          return new (r("WAWebStorageRemoveIndex"))(a(t), n);
        },
        y = function (t) {
          return new (r("WAWebStorageRemoveUniqueIndex"))(a(t), n);
        },
        C = function (t) {
          return new (r("WAWebStorageRemoveArrayIndex"))(a(t), n);
        },
        b = function (t) {
          return new (r("WAWebStorageRemoveCompositeIndex"))(
            t.map(function (e) {
              return a(e);
            }),
            n,
          );
        };
      return {
        addColumn: i,
        addEncryptedColumn: l,
        addUserDefinedPrimaryKey: u,
        addAutoIncrementingPrimaryKey: c,
        addCompositePrimaryKey: d,
        addIndex: m,
        addArrayIndex: p,
        addCompositeIndex: _,
        addUniqueIndex: f,
        removeColumn: g,
        removeIndex: h,
        removeUniqueIndex: y,
        removeArrayIndex: C,
        removeCompositeIndex: b,
      };
    }
    ((l.memoize = e), (l.columnBuilder = c));
  },
  98,
);
