__d(
  "WebBloksComponentQueryStore",
  [
    "WebBloksCacheUtils",
    "WebBloksComponentQueryFetcher",
    "WebBloksFunctionTableManager",
    "WebBloksPayloadParser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e, t) {
          ((this.$2 = []),
            (this.$4 = t),
            (this.$1 = new Map()),
            (this.$3 = new (r("WebBloksComponentQueryFetcher"))(
              e,
              this.$1,
              t,
            )));
        }
        var t = e.prototype;
        return (
          (t.getCachedComponentsOrSubscribeToQuery = function (t, n, r, a) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n),
              i = this.$1.get(e);
            if (i != null && o("WebBloksCacheUtils").isResponseFresh(i, r)) {
              var l = { result: i.response, success: !0 };
              return { value: l, cancelToken: null };
            } else {
              var s = this.$5(a, e);
              return { value: null, cancelToken: s.token };
            }
          }),
          (t.fetch = function (t, n, r, a) {
            var e = this,
              i = o("WebBloksCacheUtils").generateCacheKey(t, n),
              l = o(
                "WebBloksFunctionTableManager",
              ).WebBloksFunctionTableManager.getKnownFt(t),
              s = babelHelpers.extends({}, n);
            l != null && (s.__knownFt = l);
            var u = {
              appId: t,
              params: s,
              cacheTtlSeconds: r,
              queryPurpose: a,
            };
            this.$3.runQuery(i, u, function (t) {
              e.$6(i, t);
            });
          }),
          (t.invalidate = function (t, n) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n);
            this.$1.delete(e);
          }),
          (t.clear = function () {
            this.$1.clear();
          }),
          (t.writeInitialPayload = function (t, n, r) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n),
              a = new Map();
            for (var i of r.components) {
              var l = o("WebBloksPayloadParser").parseTree(i.payload, this.$4);
              a.set(i.id, l);
            }
            var s = { components: a };
            this.$1.set(e, {
              response: s,
              responseTimestampMs: Date.now().toString(),
              queryPurpose: "PREFETCH",
            });
          }),
          (t.$5 = function (t, n) {
            this.$2 = this.$2.filter(function (e) {
              return !e.token.canceled;
            });
            var e = new u(t, n);
            return (this.$2.push(e), e);
          }),
          (t.$6 = function (t, n) {
            var e = [],
              r = [];
            for (var o of this.$2)
              o.token.canceled ||
                (o.cacheKey === t ? e.push(o.callback) : r.push(o));
            this.$2 = r;
            for (var a of e) a(t, n);
          }),
          e
        );
      })(),
      s = (function () {
        function e() {
          this.canceled = !1;
        }
        var t = e.prototype;
        return (
          (t.run = function () {
            this.canceled = !0;
          }),
          e
        );
      })(),
      u = function (t, n) {
        ((this.callback = t), (this.cacheKey = n), (this.token = new s()));
      };
    l.default = e;
  },
  98,
);
