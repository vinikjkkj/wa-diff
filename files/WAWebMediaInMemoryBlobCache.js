__d(
  "WAWebMediaInMemoryBlobCache",
  [
    "WALogger",
    "WALruCache",
    "WAThrottle",
    "WAWebCreateMediaBlobUrl",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMemoryPressureCacheRegistry",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 25e7,
      u = 50 * 1024 * 1024,
      c = (function () {
        function t(e) {
          var t = this;
          if (
            (e === void 0 && (e = s),
            (this.$3 = new Map()),
            (this.$4 = new Set()),
            (this.$5 = new Set()),
            (this.$6 = {
              name: "media_blob",
              unit: "bytes",
              release: function () {
                return t.trimUnusedTo(u);
              },
            }),
            (this.$7 = !1),
            (this.getOrCreateURL = function (e) {
              var n = t.$3.get(e);
              if (n != null) return (t.touch(e), n);
              var a = t.get(e);
              if (!a)
                throw r("err")(
                  "There is no blob matching filehash: " + e + ".",
                );
              var i = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(a);
              return (t.$3.set(e, i), i);
            }),
            (this.revokeURL = function (e, n) {
              if (n != null) {
                if (t.$3.get(e) !== n)
                  throw r("err")(
                    "The url provided does not match the filehash.",
                  );
                (t.$3.delete(e), window.URL.revokeObjectURL(n));
              }
            }),
            (this.$10 = o("WAThrottle").throttle(
              function () {
                (t.$4.forEach(function (e) {
                  var n = t.$3.get(e);
                  n != null && (window.URL.revokeObjectURL(n), t.$3.delete(e));
                }),
                  t.$4.clear());
              },
              0,
              { leading: !1 },
            )),
            e != null && e < 0)
          )
            throw r("err")("Size limit cannot be a negative number.");
          ((this.$2 = {}),
            (this.$1 = new (o("WALruCache").LruCache)({
              sizeLimit: e,
              getSize: function (t) {
                return t.size;
              },
              onEvict: function (n, r) {
                (t.$3.has(n) &&
                  t.$8(n) === 0 &&
                  (t.revokeURL(n, t.$3.get(n)),
                  o("WAWebMediaStorage")
                    .getOrCreateMediaObject(n)
                    .consolidate({
                      downloadStage: o("WAWebMediaTypes").DownloadStage.INIT,
                      progressiveStage: null,
                    })),
                  (t.$7 = !0));
              },
              onPurge: function () {
                t.$7 && ((t.$7 = !1), t.$9());
              },
              shouldEvict: function (n, r) {
                return t.$8(n) === 0;
              },
            })));
        }
        var n = t.prototype;
        return (
          (n.get = function (t) {
            return this.$1.get(t);
          }),
          (n.has = function (t) {
            return this.$1.has(t);
          }),
          (n.touch = function (t) {
            this.get(t);
          }),
          (n.put = function (t, n) {
            (this.$1.put(t, n),
              o("WAWebMemoryPressureCacheRegistry").registerMemoryPressureCache(
                this.$6,
              ),
              this.$9());
          }),
          (n.replace = function (t, n) {
            var e = this.$3.get(t);
            (e != null && this.$8(t) === 0
              ? this.revokeURL(t, e)
              : this.$3.delete(t),
              this.put(t, n));
          }),
          (n.delete = function (t) {
            (this.$1.delete(t), this.$9());
          }),
          (n.clear = function () {
            var e = this;
            (this.$10.flush(),
              (this.$2 = {}),
              this.$3.forEach(function (t, n) {
                e.revokeURL(n, t);
              }),
              this.$3.clear(),
              this.$1.clear());
          }),
          (n.trimUnusedTo = function (t) {
            var e = this.$1.getCurrentSize();
            return (this.$1.trimTo(t), e - this.$1.getCurrentSize());
          }),
          (n.increaseUsageCount = function (t) {
            ((this.$2[t] = this.$8(t) + 1), this.$4.delete(t));
          }),
          (n.decreaseUsageCount = function (n) {
            var t = this.$8(n);
            if (t <= 0) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[InMemoryMediaBlobCache] usageCount can't go negative",
                    ])),
                )
                .tags("media-in-memory-blob-cache")
                .sendLogs("media-blob-cache-usage-count-negative-number");
              return;
            }
            ((this.$2[n] = t - 1),
              this.$2[n] === 0 &&
                (delete this.$2[n], this.$4.add(n), this.$10()));
          }),
          (n.$8 = function (t) {
            return this.$2[t] || 0;
          }),
          (n.$9 = function () {
            this.$5.forEach(function (e) {
              return e();
            });
          }),
          (n.subscribe = function (t) {
            var e = this;
            return (
              this.$5.add(t),
              function () {
                e.$5.delete(t);
              }
            );
          }),
          (n.canFitFile = function (t) {
            return t <= this.$1.getSizeLimit();
          }),
          t
        );
      })(),
      d = new c();
    ((l.InMemoryMediaBlobCacheImpl = c), (l.InMemoryMediaBlobCache = d));
  },
  98,
);
