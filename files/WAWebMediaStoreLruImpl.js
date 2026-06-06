__d(
  "WAWebMediaStoreLruImpl",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseQueue",
    "WAWeb-dexie",
    "WAWebAbstractStore",
    "WAWebMediaStoreMetaInfo",
    "WAWebStorageErrorHandlingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e7,
      u = (function (t) {
        function n(n) {
          var a;
          ((a = t.call(this) || this),
            (a._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (a.updateMaxSizeInterval = null),
            (a._dispose = function (e, t) {
              return a._bufferStore.del(e);
            }),
            (a.doPut = function (t, n) {
              return a._queueMap.enqueue(t, async function () {
                if (n.byteLength > a.$LruMediaStore$p_1() || n.byteLength > s)
                  return n;
                var i = {
                  id: t,
                  timestamp: new Date().getTime(),
                  size: n.byteLength,
                };
                try {
                  return (
                    await a._metaInfoStore.putObject(i),
                    a._bufferStore.put(t, n)
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
                      a.setMaxSize(r("WANullthrows")(a.getCurrentSize()) / 2),
                      o(
                        "WAWebStorageErrorHandlingUtils",
                      ).reportQuotaExceededError(t, {
                        op: "put",
                        db: "lru-media-store",
                        writeSize: n.byteLength,
                      }));
                    return;
                  }
                  throw t;
                }
              });
            }),
            (a.doDel = function (e) {
              return a._queueMap.enqueue(e, function () {
                return a._metaInfoStore.del(e);
              });
            }));
          var i = n.arrayBufferStore,
            l = n.maxSize;
          return (
            (a._bufferStore = i),
            (a._metaInfoStore = new (r("WAWebMediaStoreMetaInfo"))(
              l,
              a._dispose,
            )),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.doGet = async function (t) {
            var e = await this._bufferStore.get(t);
            return (e != null && this.put(t, e), e);
          }),
          (a.doClear = async function () {
            return (
              await this._bufferStore.clear(),
              this._metaInfoStore.clear()
            );
          }),
          (a.doCount = function () {
            return this._metaInfoStore.count();
          }),
          (a.doOpen = async function () {
            await Promise.all([
              this._metaInfoStore.open(),
              this._bufferStore.open(),
            ]);
          }),
          (a.doClose = async function () {
            await Promise.all([
              this._metaInfoStore.close(),
              this._bufferStore.close(),
            ]);
          }),
          (a.getCurrentSize = function () {
            return this._metaInfoStore.getCurrentSize();
          }),
          (a.$LruMediaStore$p_1 = function () {
            return this._metaInfoStore.getMaxSize();
          }),
          (a.setMaxSize = function (t) {
            return this._metaInfoStore.setMaxSize(t);
          }),
          n
        );
      })(r("WAWebAbstractStore"));
    l.default = u;
  },
  98,
);
