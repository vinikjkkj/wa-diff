__d(
  "WAWebMediaStoreLruImpl",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAPromiseQueue",
    "WAWeb-dexie",
    "WAWebAbstractStore",
    "WAWebMediaStoreMetaInfo",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e7,
      c = (function (t) {
        function a(a) {
          var i;
          ((i = t.call(this) || this),
            (i._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (i.updateMaxSizeInterval = null),
            (i._dispose = function (e, t) {
              return i._bufferStore.del(e);
            }),
            (i.doPut = function (t, a) {
              return i._queueMap.enqueue(
                t,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (a.byteLength > i.$LruMediaStore$p_1() || a.byteLength > u)
                    return a;
                  var n = {
                    id: t,
                    timestamp: new Date().getTime(),
                    size: a.byteLength,
                  };
                  try {
                    return (
                      yield i._metaInfoStore.putObject(n),
                      i._bufferStore.put(t, a)
                    );
                  } catch (t) {
                    if (
                      t instanceof r("WAWeb-dexie").AbortError &&
                      t.message.includes("QuotaExceededError")
                    ) {
                      (o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[LruMediaStore] QuotaExceededError, shrinking",
                          ])),
                      ),
                        i.setMaxSize(r("WANullthrows")(i.getCurrentSize()) / 2),
                        o(
                          "WAWebStorageErrorHandlingUtils",
                        ).reportQuotaExceededError(t, {
                          op: "put",
                          db: "lru-media-store",
                          writeSize: a.byteLength,
                        }));
                      return;
                    }
                    throw t;
                  }
                }),
              );
            }),
            (i.doDel = function (e) {
              return i._queueMap.enqueue(e, function () {
                return i._metaInfoStore.del(e);
              });
            }));
          var l = a.arrayBufferStore,
            s = a.maxSize;
          return (
            (i._bufferStore = l),
            (i._metaInfoStore = new (r("WAWebMediaStoreMetaInfo"))(
              s,
              i._dispose,
            )),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.doGet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this._bufferStore.get(e);
                return (t != null && this.put(e, t), t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                yield this._bufferStore.clear(),
                this._metaInfoStore.clear()
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doCount = function () {
            return this._metaInfoStore.count();
          }),
          (i.doOpen = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield (s || (s = n("Promise"))).all([
                this._metaInfoStore.open(),
                this._bufferStore.open(),
              ]);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doClose = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield (s || (s = n("Promise"))).all([
                this._metaInfoStore.close(),
                this._bufferStore.close(),
              ]);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getCurrentSize = function () {
            return this._metaInfoStore.getCurrentSize();
          }),
          (i.$LruMediaStore$p_1 = function () {
            return this._metaInfoStore.getMaxSize();
          }),
          (i.setMaxSize = function (t) {
            return this._metaInfoStore.setMaxSize(t);
          }),
          a
        );
      })(r("WAWebAbstractStore"));
    l.default = c;
  },
  98,
);
