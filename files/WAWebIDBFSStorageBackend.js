__d(
  "WAWebIDBFSStorageBackend",
  ["WALogger"],
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
      C = "WAWebIDBFSStorageBackend",
      b = "/wa_voip_storage/ml_models",
      v = (function () {
        function t(e) {
          (e === void 0 && (e = b),
            (this.$1 = null),
            (this.$2 = !1),
            (this.$4 = !1),
            (this.$5 = []),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$3 = e));
        }
        var n = t.prototype;
        return (
          (n.initialize = function (n) {
            this.$1 = n;
            var t = this.$8();
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": FS unavailable in WASM module, storage disabled",
                  ])),
                C,
              );
              return;
            }
            this.$2 = !0;
          }),
          (n.$8 = function () {
            return this.$1 == null ? null : this.$1.FS;
          }),
          (n.$9 = async function () {
            var e = this;
            if (this.$4)
              return new Promise(function (t) {
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
                  C,
                ),
                !1
              );
            this.$4 = !0;
            try {
              await new Promise(function (e, n) {
                t.syncfs(!1, function (t) {
                  t ? n(t) : e();
                });
              });
              var n = this.$5;
              this.$5 = [];
              for (var r of n) r(!0);
              return !0;
            } catch (e) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Failed to sync to IndexedDB: ",
                    "",
                  ])),
                C,
                e instanceof Error ? e.message : String(e),
              );
              var a = this.$5;
              this.$5 = [];
              for (var i of a) i(!1);
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
          }),
          (n.$10 = function (t) {
            if (!this.$7) {
              try {
                t.mkdir(this.$3);
              } catch (e) {}
              this.$7 = !0;
            }
          }),
          (n.$11 = function (t, n) {
            return this.$3 + "/" + t + "_" + n;
          }),
          (n.isReady = function () {
            return this.$2 && this.$1 != null;
          }),
          (n.write = async function (t, n, r) {
            if (!this.isReady()) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Storage backend not initialized, skipping write for ",
                    " v",
                    "",
                  ])),
                C,
                t,
                n,
              );
              return;
            }
            var e = this.$8();
            if (e == null) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": FS not available, skipping write for ",
                    " v",
                    "",
                  ])),
                C,
                t,
                n,
              );
              return;
            }
            var a = this.$11(t, n);
            try {
              (this.$10(e), e.writeFile(a, new Uint8Array(r)), await this.$9());
            } catch (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Failed to write model ",
                    " v",
                    ": ",
                    "",
                  ])),
                C,
                t,
                n,
                e instanceof Error ? e.message : String(e),
              );
            }
          }),
          (n.read = function (t, n) {
            if (!this.isReady())
              return (
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": Storage backend not initialized",
                    ])),
                  C,
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
                  C,
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
                  C,
                  t,
                  n,
                  e instanceof Error ? e.message : String(e),
                ),
                null
              );
            }
          }),
          (n.delete = async function (t, n) {
            if (!this.isReady()) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Storage backend not initialized, skipping delete for ",
                    " v",
                    "",
                  ])),
                C,
                t,
                n,
              );
              return;
            }
            var e = this.$8();
            if (e == null) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": FS not available, skipping delete for ",
                    " v",
                    "",
                  ])),
                C,
                t,
                n,
              );
              return;
            }
            var r = this.$11(t, n);
            try {
              (e.unlink(r), await this.$9());
            } catch (e) {}
          }),
          (n.deleteMultiple = async function (t) {
            if (!(!this.isReady() || t.length === 0)) {
              var e = this.$8();
              if (e == null) {
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": FS not available, skipping batch delete",
                    ])),
                  C,
                );
                return;
              }
              for (var n of t) {
                var r = n.modelName,
                  a = n.version,
                  i = this.$11(r, a);
                try {
                  e.unlink(i);
                } catch (e) {}
              }
              await this.$9();
            }
          }),
          (n.list = function () {
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
          (n.getFilePath = function (t, n) {
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
    function S(e) {
      return new v(e);
    }
    ((l.ML_MODEL_PERSIST_DIR = b),
      (l.IDBFSStorageBackend = v),
      (l.createIDBFSStorageBackend = S));
  },
  98,
);
