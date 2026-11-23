__d(
  "WAWebSwObjectStores",
  ["WALogger", "WAWebIndexedDB", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "sw",
      _ = 2,
      f = { prefs: {}, pp: {}, stickers: {} },
      g;
    function h() {
      return (
        g ||
        (g = new Promise(function (t, n) {
          var a = r("nullthrows")(r("WAWebIndexedDB")).open(p, _);
          ((a.onupgradeneeded = function (t) {
            var n = a.result;
            t.target.transaction.onerror = function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to upgrade database, error: ",
                    "",
                  ])),
                t.target.error,
              );
            };
            for (var r in f)
              (n.objectStoreNames.contains(r) && n.deleteObjectStore(r),
                n.createObjectStore(r, f[r]));
          }),
            (a.onsuccess = function () {
              t(a.result);
            }),
            (a.onerror = function (e) {
              n(e.target.error);
            }));
        }).catch(function (e) {
          throw (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Unable to open sw database, error: ",
                  "",
                ])),
              e,
            ),
            (g = void 0),
            e
          );
        }))
      );
    }
    var y = (function () {
        function e(e) {
          ((this.storeName = e), (this.storeCache = {}));
        }
        var t = e.prototype;
        return (
          (t.$1 = async function (t, n) {
            var e = await h(),
              r = e
                .transaction([this.storeName], "readwrite")
                .objectStore(this.storeName),
              o = r[t].apply(r, n);
            return new Promise(function (e, t) {
              ((o.onsuccess = function (t) {
                e(t.target.result);
              }),
                (o.onerror = function (e) {
                  t(e.target.error);
                }));
            });
          }),
          (t.get = function (t) {
            var e = this;
            return this.storeCache[t] !== void 0
              ? this.storeCache[t]
              : (this.storeCache[t] = this.$1("get", [t]).catch(function (n) {
                  (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to fetch from db, object store: ",
                        ", key: ",
                        ", error: ",
                        "",
                      ])),
                    e.storeName,
                    t,
                    n,
                  ),
                    (e.storeCache[t] = void 0));
                }));
          }),
          (t.put = function (t, n) {
            var e = this;
            return (
              (this.storeCache[t] = Promise.resolve(n)),
              this.$1("put", [n, t]).catch(function (r) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to put to db, object store: ",
                      ", key: ",
                      ", value: ",
                      ", error: ",
                      "",
                    ])),
                  e.storeName,
                  t,
                  n,
                  r,
                );
              })
            );
          }),
          (t.delete = function (t) {
            var e = this;
            return (
              (this.storeCache[t] = Promise.resolve(void 0)),
              this.$1("delete", [t]).catch(function (n) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to delete in db, object store: ",
                      ", key: ",
                      ", error: ",
                      "",
                    ])),
                  e.storeName,
                  t,
                  n,
                );
              })
            );
          }),
          (t.clear = function () {
            var e = this;
            return (
              (this.storeCache = {}),
              this.$1("clear").catch(function (t) {
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to clear object store: ",
                      ", error: ",
                      "",
                    ])),
                  e.storeName,
                  t,
                );
              })
            );
          }),
          e
        );
      })(),
      C = { ObjectStore: y };
    for (var b in f) C[b] = new y(b);
    var v = C;
    l.default = v;
  },
  98,
);
