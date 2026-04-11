__d(
  "WAWebIdbHelpers",
  ["invariant", "WALogger", "WAWebStorageSchema", "err", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c;
    function d(e, t, n, r) {
      return e.reduce(function (e, a) {
        var i = o("WAWebStorageSchema").cloneSchema(a);
        if ((!(i.name in e) || s(0, 107631), i.deleted === !0))
          return ((e[i.name] = null), e);
        (t.set(a.name, i.name),
          n.set(
            a.name,
            i.columns.reduce(function (e, t) {
              return (e.set(t.name, t), e);
            }, new Map()),
          ),
          r.set(a.name, i.encryptedColumns || {}));
        var l = i.columns.filter(function (e) {
          return e.primaryKey;
        });
        l.length >= 1 || s(0, 75745, a.name);
        var u = [m(l)].concat(i.indexes.map(p)).join(", ");
        return ((e[i.name] = u), e);
      }, {});
    }
    function m(e) {
      if (e.length > 1)
        return (
          e.forEach(function (e) {
            (e.primaryKey &&
              e.primaryKey ===
                o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE) ||
              s(0, 56354);
          }),
          "[" +
            e
              .map(function (e) {
                return e.packedName;
              })
              .join("+") +
            "]"
        );
      var t = e[0];
      return (
        (t.primaryKey &&
          t.primaryKey !== o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE) ||
          s(0, 56354),
        t.primaryKey === o("WAWebStorageSchema").PrimaryKeyType.AUTO_INCREMENT
          ? t.packedName + "++"
          : t.packedName
      );
    }
    function p(e) {
      switch (e.type) {
        case o("WAWebStorageSchema").INDEX_TYPE.SIMPLE:
          return e.column;
        case o("WAWebStorageSchema").INDEX_TYPE.COMPOSITE:
          return "[" + e.columns.join("+") + "]";
        case o("WAWebStorageSchema").INDEX_TYPE.ARRAY:
          return "*" + e.column;
        case o("WAWebStorageSchema").INDEX_TYPE.UNIQUE:
          return "&" + e.column;
      }
      throw r("err")('Cannot format index of type "' + e.type + '"');
    }
    function _(t, n) {
      var a = t.map(function (a) {
        var i = n.get(a);
        if (i == null)
          throw (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] query with non-existing column ",
                  " in index ",
                  "",
                ])),
              a,
              t.join(","),
            ),
            r("err")("format-query-index-nonexistent-column")
          );
        return i.packedName;
      });
      return a.length === 1 ? a[0] : "[" + a.join("+") + "]";
    }
    function f(e, t) {
      var n = e;
      return (
        (t == null ? void 0 : t.reverse) === !0 && (n = n.reverse()),
        (t == null ? void 0 : t.offset) != null && (n = n.offset(t.offset)),
        (t == null ? void 0 : t.limit) != null &&
          t.limit !== 0 &&
          (n = n.limit(t.limit)),
        n
      );
    }
    function g(e) {
      return e
        ? function (t) {
            var n = {};
            return (
              e.forEach(function (e) {
                var r = e.name;
                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
              }),
              n
            );
          }
        : function (e) {
            return e;
          };
    }
    function h(e, t, n) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "idb failed to do Operation: ",
              " on Table: ",
              ". Failed with error ",
              "",
            ])),
          t,
          n,
          e,
        )
        .sendLogs("storage-error", { sampling: 0 })
        .verbose();
    }
    function y(e, t) {
      var n = Array.from(t.entries()),
        a = 0;
      (e.forEach(function (e) {
        n.forEach(function (t) {
          var n = t[0],
            o = t[1];
          if (e[n] && !(e[n]._keyId && e[n]._data && e[n].iv)) {
            if (!r("gkx")("26258"))
              throw r("err")("[CRITICAL] Records contain unencrypted field");
            a++;
          }
        });
      }),
        a > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[CRITICAL] ",
                " records contain unencrypted field",
              ])),
            a,
          ));
    }
    function C(e) {
      try {
        if (e == null) return 0;
        if (e instanceof ArrayBuffer) return e.byteLength;
        if (typeof e == "object") {
          var t = JSON.stringify(e);
          return t.length;
        }
        return String(e).length;
      } catch (e) {
        return 0;
      }
    }
    ((l.schemasToStores = d),
      (l.formatPrimaryKey = m),
      (l.formatIndex = p),
      (l.formatQueryIndex = _),
      (l.applyOptions = f),
      (l.columnPropFilter = g),
      (l.logStorageError = h),
      (l.assertAllColsAreEncrypted = y),
      (l.calculateWriteDataSize = C));
  },
  98,
);
