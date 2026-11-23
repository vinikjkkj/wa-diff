__d(
  "WAWebMediaStoreLruImpl",
  [
    "WALogger",
    "WAPromiseQueue",
    "WAWeb-dexie",
    "WAWebAbstractStore",
    "WAWebMediaStoreMetaInfo",
    "WAWebStorageErrorHandlingUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n(a) {
          var i;
          ((i = t.call(this) || this),
            (i._queueMap = new (o("WAPromiseQueue").PromiseQueueMap)()),
            (i.updateMaxSizeInterval = null),
            (i._dispose = function (e, t) {
              return i._bufferStore.del(e);
            }),
            (i.doPut = function (t, a) {
              return i._queueMap.enqueue(t, async function () {
                if (
                  a.byteLength > i.$LruMediaStore$p_1() ||
                  a.byteLength > n.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES
                )
                  return a;
                var l = { id: t, timestamp: Date.now(), size: a.byteLength };
                try {
                  return (
                    await i._metaInfoStore.putObject(l),
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
                      i.setMaxSize(r("nullthrows")(i.getCurrentSize()) / 2),
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
              });
            }),
            (i.doDel = function (e) {
              return i._queueMap.enqueue(e, function () {
                return i._metaInfoStore.del(e);
              });
            }));
          var l = a.arrayBufferStore,
            s = a.maxSize;
          return (
            (i.name = l.name),
            (i._bufferStore = l),
            (i._metaInfoStore = new (r("WAWebMediaStoreMetaInfo"))(
              s,
              i._dispose,
            )),
            i
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
    ((s.SINGLE_ITEM_SIZE_LIMIT_IN_BYTES = 3e7), (l.default = s));
  },
  98,
);
