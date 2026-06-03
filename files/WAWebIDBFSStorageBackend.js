__d(
  "WAWebIDBFSStorageBackend",
  ["Promise", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = "WAWebIDBFSStorageBackend",
      v = "/wa_voip_storage/ml_models",
      S = (function () {
        function t(e) {
          (e === void 0 && (e = v),
            (this.$1 = null),
            (this.$2 = !1),
            (this.$4 = !1),
            (this.$5 = []),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$3 = e));
        }
        var r = t.prototype;
        return (
          (r.initialize = function (n) {
            this.$1 = n;
            var t = this.$8();
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": FS unavailable in WASM module, storage disabled",
                  ])),
                b,
              );
              return;
            }
            this.$2 = !0;
          }),
          (r.$8 = function () {
            return this.$1 == null ? null : this.$1.FS;
          }),
          (r.$9 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (this.$4)
                return new (C || (C = n("Promise")))(function (t) {
                  e.$5.push(t);
                });
              var t = this.$8();
              if (t == null)
                return (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": FS not available for sync",
                      ])),
                    b,
                  ),
                  !1
                );
              this.$4 = !0;
              try {
                yield new (C || (C = n("Promise")))(function (e, n) {
                  t.syncfs(!1, function (t) {
                    t ? n(t) : e();
                  });
                });
                var r = this.$5;
                this.$5 = [];
                for (var a of r) a(!0);
                return !0;
              } catch (e) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": Failed to sync to IndexedDB: ",
                      "",
                    ])),
                  b,
                  e instanceof Error ? e.message : String(e),
                );
                var i = this.$5;
                this.$5 = [];
                for (var l of i) l(!1);
                return !1;
              } finally {
                ((this.$4 = !1),
                  this.$5.length > 0 &&
                    !this.$6 &&
                    ((this.$6 = !0),
                    this.$9().finally(function () {
                      e.$6 = !1;
                    })));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$10 = function (t) {
            if (!this.$7) {
              try {
                t.mkdir(this.$3);
              } catch (e) {}
              this.$7 = !0;
            }
          }),
          (r.$11 = function (t, n) {
            return this.$3 + "/" + t + "_" + n;
          }),
          (r.isReady = function () {
            return this.$2 && this.$1 != null;
          }),
          (r.write = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                if (!this.isReady()) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": Storage backend not initialized, skipping write for ",
                        " v",
                        "",
                      ])),
                    b,
                    e,
                    t,
                  );
                  return;
                }
                var r = this.$8();
                if (r == null) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": FS not available, skipping write for ",
                        " v",
                        "",
                      ])),
                    b,
                    e,
                    t,
                  );
                  return;
                }
                var a = this.$11(e, t);
                try {
                  (this.$10(r),
                    r.writeFile(a, new Uint8Array(n)),
                    yield this.$9());
                } catch (n) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": Failed to write model ",
                        " v",
                        ": ",
                        "",
                      ])),
                    b,
                    e,
                    t,
                    n instanceof Error ? n.message : String(n),
                  );
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.read = function (t, n) {
            if (!this.isReady())
              return (
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": Storage backend not initialized",
                    ])),
                  b,
                ),
                null
              );
            var e = this.$8();
            if (e == null)
              return (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": FS not available",
                    ])),
                  b,
                ),
                null
              );
            var r = this.$11(t, n);
            try {
              var a = e.readFile(r);
              return a.buffer;
            } catch (e) {
              return (
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": Failed to read model ",
                      " v",
                      ": ",
                      "",
                    ])),
                  b,
                  t,
                  n,
                  e instanceof Error ? e.message : String(e),
                ),
                null
              );
            }
          }),
          (r.delete = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (!this.isReady()) {
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": Storage backend not initialized, skipping delete for ",
                        " v",
                        "",
                      ])),
                    b,
                    e,
                    t,
                  );
                  return;
                }
                var n = this.$8();
                if (n == null) {
                  o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": FS not available, skipping delete for ",
                        " v",
                        "",
                      ])),
                    b,
                    e,
                    t,
                  );
                  return;
                }
                var r = this.$11(e, t);
                try {
                  (n.unlink(r), yield this.$9());
                } catch (e) {}
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.deleteMultiple = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!(!this.isReady() || e.length === 0)) {
                  var t = this.$8();
                  if (t == null) {
                    o("WALogger").WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": FS not available, skipping batch delete",
                        ])),
                      b,
                    );
                    return;
                  }
                  for (var n of e) {
                    var r = n.modelName,
                      a = n.version,
                      i = this.$11(r, a);
                    try {
                      t.unlink(i);
                    } catch (e) {}
                  }
                  yield this.$9();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.list = function () {
            if (!this.isReady()) return [];
            var e = this.$8();
            if (e == null) return [];
            var t = [];
            try {
              var n = e.readdir(this.$3);
              for (var r of n)
                if (!(r === "." || r === "..")) {
                  var o = r.lastIndexOf("_");
                  if (o !== -1) {
                    var a = r.substring(0, o),
                      i = r.substring(o + 1),
                      l = parseInt(i, 10);
                    if (!isNaN(l))
                      try {
                        var s = this.$3 + "/" + r,
                          u = e.stat(s);
                        t.push({
                          modelName: a,
                          version: l,
                          fileSizeBytes: u.size,
                        });
                      } catch (e) {}
                  }
                }
            } catch (e) {}
            return t;
          }),
          (r.getFilePath = function (t, n) {
            if (!this.isReady()) return null;
            var e = this.$8();
            if (e == null) return null;
            var r = this.$11(t, n);
            try {
              return (e.stat(r), r);
            } catch (e) {
              return null;
            }
          }),
          t
        );
      })();
    function R(e) {
      return new S(e);
    }
    ((l.ML_MODEL_PERSIST_DIR = v),
      (l.IDBFSStorageBackend = S),
      (l.createIDBFSStorageBackend = R));
  },
  98,
);
