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
          ((this.$1 = r("once")(async function () {
            try {
              var t = await d();
              if (t != null) return (await t.open(), t);
            } catch (t) {
              if (r("getErrorSafe")(t).name === "SecurityError")
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        `
            There was a security error attempting to open the media storage.             This likely indicates a permissions error. Falling back to fake             (no-op) storage.
          `,
                      ],
                      [
                        `
            There was a security error attempting to open the media storage. \\
            This likely indicates a permissions error. Falling back to fake \\
            (no-op) storage.
          `,
                      ],
                    )),
                );
              else {
                if (t instanceof o("WAWebMiscErrors").DbOnLogoutAbort) throw t;
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        `
            Failed to initialize media store! Falling back to fake (no-op) storage. Error:
            `,
                        `
          `,
                      ])),
                    r("WAWebSerializeError")(t),
                  )
                  .verbose()
                  .sendLogs("Failed to initialize media store");
              }
            }
            return new (r("WAWebMediaStoreDummyImpl"))();
          })),
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
        var n = t.prototype;
        return (
          (n.setMaxSize = async function (t) {
            var e = await this.$1();
            return e.setMaxSize(t);
          }),
          (n.get = async function (t) {
            var e = await this.$1();
            return e.get(t);
          }),
          (n.has = function (t) {
            return this.$2({ key: t, signal: u.signal });
          }),
          (n.queryByIndex = async function (t, n) {
            var e = await this.$1();
            return e.queryByIndex(t, n);
          }),
          (n.getAll = async function () {
            var e = await this.$1();
            return e.getAll();
          }),
          (n.put = async function (t, n) {
            var e = await this.$1();
            return e.put(t, n);
          }),
          (n.del = async function (t) {
            var e = await this.$1();
            await e.del(t);
          }),
          (n.count = async function () {
            var e = await this.$1();
            return e.count();
          }),
          (n.clear = async function () {
            var e = await this.$1();
            await e.clear();
          }),
          (n.open = async function () {
            var e = await this.$1();
            await e.open();
          }),
          (n.close = async function () {
            var e = await this.$1();
            await e.close();
          }),
          t
        );
      })();
    async function d() {
      var e = m();
      if (e == null) return null;
      var t = await o(
        "WAWebStoreQuotaManager",
      ).storeQuotaManager.getQuotaForStore("lru-media-store");
      return new (r("WAWebMediaStoreLruImpl"))({
        maxSize: t,
        arrayBufferStore: e,
      });
    }
    function m() {
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
    var p = new c();
    ((l.MediaStore = c), (l.LruMediaStore = p));
  },
  98,
);
