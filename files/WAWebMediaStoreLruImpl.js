__d(
  "WAWebMediaStoreLruImpl",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WAWeb-dexie",
    "WAWebAbstractStore",
    "WAWebMediaStoreMetaInfo",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a(i) {
          var l;
          ((l = t.call(this) || this),
            (l._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (l.updateMaxSizeInterval = null),
            (l._dispose = function (e, t) {
              return l._bufferStore.del(e);
            }),
            (l.doPut = function (t, i) {
              return l._queueMap.enqueue(
                t,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (
                    i.byteLength > l.$LruMediaStore$p_1() ||
                    i.byteLength > a.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES
                  )
                    return i;
                  var n = { id: t, timestamp: Date.now(), size: i.byteLength };
                  try {
                    return (
                      yield l._metaInfoStore.putObject(n),
                      l._bufferStore.put(t, i)
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
                        l.setMaxSize(r("nullthrows")(l.getCurrentSize()) / 2),
                        o(
                          "WAWebStorageErrorHandlingUtils",
                        ).reportQuotaExceededError(t, {
                          op: "put",
                          db: "lru-media-store",
                          writeSize: i.byteLength,
                        }));
                      return;
                    }
                    throw t;
                  }
                }),
              );
            }),
            (l.doDel = function (e) {
              return l._queueMap.enqueue(e, function () {
                return l._metaInfoStore.del(e);
              });
            }));
          var s = i.arrayBufferStore,
            u = i.maxSize;
          return (
            (l.name = s.name),
            (l._bufferStore = s),
            (l._metaInfoStore = new (r("WAWebMediaStoreMetaInfo"))(
              u,
              l._dispose,
            )),
            l
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
    ((u.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES = 3e7), (l.default = u));
  },
  98,
);
