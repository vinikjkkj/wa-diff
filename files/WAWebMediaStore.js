__d(
  "WAWebMediaStore",
  [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebIndexedDB",
    "WAWebMediaArrayBufferCacheStore",
    "WAWebMediaArrayBufferIdbStore",
    "WAWebMediaStoreDummyImpl",
    "WAWebMediaStoreLruImpl",
    "WAWebMiscErrors",
    "WAWebPromiseQueue",
    "WAWebSerializeError",
    "WAWebStoreQuotaManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new AbortController(),
      c = (function () {
        function t() {
          var t = this;
          ((this.$1 = r("once")(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var t = yield d();
                if (t != null) return (yield t.open(), t);
              } catch (t) {
                if (r("getErrorSafe")(t).name === "SecurityError")
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "\n            There was a security error attempting to open the media storage.             This likely indicates a permissions error. Falling back to fake             (no-op) storage.\n          ",
                        ],
                        [
                          "\n            There was a security error attempting to open the media storage. \\\n            This likely indicates a permissions error. Falling back to fake \\\n            (no-op) storage.\n          ",
                        ],
                      )),
                  );
                else {
                  if (t instanceof o("WAWebMiscErrors").DbOnLogoutAbort)
                    throw t;
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "\n            Failed to initialize media store! Falling back to fake (no-op) storage. Error:\n            ",
                          "\n          ",
                        ])),
                      r("WAWebSerializeError")(t),
                    )
                    .verbose()
                    .sendLogs("Failed to initialize media store");
                }
              }
              return new (r("WAWebMediaStoreDummyImpl"))();
            }),
          )),
            (this.$3 = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this.$2 = r("WAMemoizeConcurrent")(
              function (e) {
                return e.key;
              },
              function (e) {
                var n = e.key;
                return t.$3.enqueue(function () {
                  return t.get(n).then(function (e) {
                    return e != null;
                  });
                });
              },
            )));
        }
        var a = t.prototype;
        return (
          (a.setMaxSize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1();
                return t.setMaxSize(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.get = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1();
                return t.get(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.has = function (t) {
            return this.$2({ key: t, signal: u.signal });
          }),
          (a.queryByIndex = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1();
                return n.queryByIndex(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getAll = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1();
              return e.getAll();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.put = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1();
                return n.put(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.del = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1();
                yield t.del(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.count = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1();
              return e.count();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.clear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1();
              yield e.clear();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.open = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1();
              yield e.open();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.close = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$1();
              yield e.close();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = p();
          if (e == null) return null;
          var t = yield o(
            "WAWebStoreQuotaManager",
          ).storeQuotaManager.getQuotaForStore("lru-media-store");
          return new (r("WAWebMediaStoreLruImpl"))({
            maxSize: t,
            arrayBufferStore: e,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      if (r("WAWebIndexedDB") != null) {
        var e = new (r("WAWebMediaArrayBufferIdbStore"))("media_lru_buffer");
        return "caches" in self
          ? new (r("WAWebMediaArrayBufferCacheStore"))(
              "lru-media-array-buffer-cache",
            )
          : e;
      }
      return null;
    }
    var _ = new c();
    ((l.MediaStore = c), (l.LruMediaStore = _));
  },
  98,
);
