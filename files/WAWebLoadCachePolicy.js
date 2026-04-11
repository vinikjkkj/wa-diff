__d(
  "WAWebLoadCachePolicy",
  ["WAWebBaseCachePolicy", "WAWebDebounce"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var o;
        return (
          (o = e.call(this, t, n.id) || this),
          (o.saveToCache = function () {
            o.collection.saveToCache();
          }),
          (o.$LoadCachePolicy$p_2 = n.trigger || "all"),
          (o.$LoadCachePolicy$p_1 = n.delay),
          (o.$LoadCachePolicy$p_3 = r("WAWebDebounce")(
            o.saveToCache,
            o.$LoadCachePolicy$p_1,
          )),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.enableCaching = function () {
          this.listenTo(
            this.collection,
            this.$LoadCachePolicy$p_2,
            this.$LoadCachePolicy$p_3,
          );
        }),
        (n.disableCaching = function () {
          this.stopListening(
            this.collection,
            this.$LoadCachePolicy$p_2,
            this.$LoadCachePolicy$p_3,
          );
        }),
        t
      );
    })(o("WAWebBaseCachePolicy").BaseCachePolicy);
    ((e.policy = o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD), (l.default = e));
  },
  98,
);
