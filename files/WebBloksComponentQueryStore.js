__d(
  "WebBloksComponentQueryStore",
  [
    "WebBloksAsyncComponentQueryPurpose",
    "WebBloksCacheUtils",
    "WebBloksCachedStackedScreens",
    "WebBloksComponentQueryFetcher",
    "WebBloksFunctionTableManager",
    "WebBloksNavigationCounter",
    "WebBloksPayloadParser",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n =
          t == null || t.length === 0
            ? Object.keys(e)
            : t.filter(function (t) {
                return e[t] !== void 0;
              }),
        r = new Set(n.length === 0 ? Object.keys(e) : n),
        a = {};
      for (var i of Object.keys(e)) r.has(i) && (a[i] = e[i]);
      return o("WebBloksUtils").cast(a);
    }
    var s = (function () {
        function t(e, t, n, o, a, i) {
          (i === void 0 && (i = !1),
            (this.$2 = []),
            (this.$6 = t),
            (this.$7 = n),
            (this.$5 = o),
            (this.$4 = a),
            (this.$1 = new Map()),
            (this.$3 = new (r("WebBloksComponentQueryFetcher"))(
              e,
              this.$1,
              t,
              n,
              o,
              a,
              i,
            )));
        }
        var n = t.prototype;
        return (
          (n.getCachedComponentsOrSubscribeToQuery = function (t, n, r, a) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n),
              i = this.$8(e, r);
            if (i != null) return { value: i, cancelToken: null };
            var l = this.$9(a, e);
            return {
              value: null,
              cancelToken: function () {
                return l.token.run();
              },
            };
          }),
          (n.getCachedComponents = function (t, n, r) {
            return this.$8(o("WebBloksCacheUtils").generateCacheKey(t, n), r);
          }),
          (n.$8 = function (t, n) {
            var e = this.$1.get(t);
            if (e != null && o("WebBloksCacheUtils").isResponseFresh(e, n)) {
              var r = babelHelpers.extends(
                { result: e.response, success: !0 },
                o("WebBloksCachedStackedScreens").readCachedStackedScreens(e),
              );
              return r;
            }
            return null;
          }),
          (n.fetch = function (t, n, o, a, i, l) {
            (i === void 0 && (i = null),
              l === void 0 && (l = !1),
              this.$10(
                t,
                n,
                o,
                a,
                i,
                l,
                a === r("WebBloksAsyncComponentQueryPurpose").PREFETCH,
              ));
          }),
          (n.$10 = function (n, r, a, i, l, s, u) {
            var t = this,
              c = o("WebBloksCacheUtils").generateCacheKey(n, e(r, l)),
              d = o(
                "WebBloksFunctionTableManager",
              ).WebBloksFunctionTableManager.getKnownFt(n),
              m = babelHelpers.extends({}, r);
            (d != null && (m.__knownFt = d),
              (m.nav_ordinal =
                o("WebBloksNavigationCounter").getWebBloksNavigationCount() +
                (u ? 1 : 0)));
            var p = {
                appId: n,
                params: m,
                cacheTtlSeconds: a,
                queryPurpose: i,
                shouldPrefetchSubqueries: s,
              },
              _ = !0;
            (this.$3.runQuery(c, p, function (e, n) {
              (p.shouldPrefetchSubqueries && t.$11(p.params, n.resources, _),
                t.$12(e, n));
            }),
              (_ = !1));
          }),
          (n.$11 = function (n, a, i) {
            var t = this,
              l = a == null ? void 0 : a.acq;
            if (!(l == null || !Array.isArray(l))) {
              var s = function (l) {
                if (
                  l == null ||
                  typeof l != "object" ||
                  Array.isArray(l) ||
                  typeof l.app_id != "string" ||
                  l.app_id === "" ||
                  typeof l.cache_ttl != "number" ||
                  !Number.isFinite(l.cache_ttl) ||
                  l.cache_ttl < 0
                )
                  return (
                    t.$4.warn(
                      "WebBloks: skipping malformed subquery prefetch entry",
                    ),
                    1
                  );
                try {
                  var a,
                    s,
                    u = o("WebBloksCacheUtils").resolveConsumedParams(
                      (a = l == null ? void 0 : l.consumed_params) != null
                        ? a
                        : {},
                      n,
                    ),
                    c =
                      (s = l == null ? void 0 : l.cache_keys) != null
                        ? s
                        : null;
                  (i
                    ? t.$10(
                        l.app_id,
                        u,
                        String(l.cache_ttl),
                        r("WebBloksAsyncComponentQueryPurpose").PARALLEL_FETCH,
                        c,
                        !1,
                        !0,
                      )
                    : t.fetch(
                        l.app_id,
                        u,
                        String(l.cache_ttl),
                        r("WebBloksAsyncComponentQueryPurpose").PARALLEL_FETCH,
                        c,
                        !1,
                      ),
                    t.getCachedComponentsOrSubscribeToQuery(
                      l.app_id,
                      e(u, c),
                      String(l.cache_ttl),
                      function (e, n) {
                        n.success ||
                          t.$4.warn(
                            "WebBloks: subquery prefetch failed for " +
                              l.app_id,
                          );
                      },
                    ));
                } catch (e) {
                  var d;
                  t.$4.mustfix(
                    "WebBloks: subquery prefetch failed for " +
                      ((d = l == null ? void 0 : l.app_id) != null
                        ? d
                        : "unknown") +
                      ": " +
                      String(e),
                  );
                }
              };
              for (var u of l) s(u);
            }
          }),
          (n.invalidate = function (t, n) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n);
            this.$1.delete(e);
          }),
          (n.clear = function () {
            this.$1.clear();
          }),
          (n.writeInitialPayload = function (t, n, o) {
            this.$13(
              t,
              n,
              o,
              r("WebBloksAsyncComponentQueryPurpose").PREFETCH,
              !1,
            );
          }),
          (n.writeToCache = function (t, n, o) {
            this.$13(
              t,
              n,
              o,
              r("WebBloksAsyncComponentQueryPurpose").PARALLEL_FETCH,
              !0,
            );
          }),
          (n.$13 = function (t, n, r, a, i) {
            var e = o("WebBloksCacheUtils").generateCacheKey(t, n),
              l = new Map();
            for (var s of r.components) {
              var u = o("WebBloksPayloadParser").parseTree(
                s.payload,
                this.$6,
                this.$7,
                this.$5,
                void 0,
              );
              l.set(s.id, u);
            }
            var c = { components: l };
            (this.$1.set(e, {
              response: c,
              responseTimestampMs: Date.now().toString(),
              queryPurpose: a,
            }),
              i && this.$12(e, { result: c, success: !0 }));
          }),
          (n.$9 = function (t, n) {
            this.$2 = this.$2.filter(function (e) {
              return !e.token.canceled;
            });
            var e = new c(t, n);
            return (this.$2.push(e), e);
          }),
          (n.$12 = function (t, n) {
            var e = [],
              r = [];
            for (var o of this.$2)
              o.token.canceled ||
                (o.cacheKey === t ? e.push(o.callback) : r.push(o));
            this.$2 = r;
            for (var a of e) a(t, n);
          }),
          t
        );
      })(),
      u = (function () {
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
      c = function (t, n) {
        ((this.callback = t), (this.cacheKey = n), (this.token = new u()));
      };
    l.default = s;
  },
  98,
);
